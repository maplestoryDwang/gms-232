package net.swordie.ms.world;

import net.swordie.ms.Server;
import net.swordie.ms.ServerStatus;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.User;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.AuctionState;
import net.swordie.ms.enums.WorldId;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.ms.world.auction.AuctionItemSearchCriteria;
import net.swordie.orm.dao.AllianceDao;
import net.swordie.orm.dao.AuctionItemDao;
import net.swordie.orm.dao.GuildDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

/**
 * Created on 11/2/2017.
 */
public class World {
    private static final Logger log = LogManager.getLogger();

    private static final int FIELD_CLEAR_TIME = 2;

    //WORLDITEM struct
    private static final AuctionItemDao auctionItemDao = (AuctionItemDao) SworDaoFactory.getByClass(AuctionItem.class);
    private static final GuildDao guildDao = (GuildDao) SworDaoFactory.getByClass(Guild.class);
    private static final AllianceDao allianceDao = (AllianceDao) SworDaoFactory.getByClass(Alliance.class);

    private WorldId worldId;
    private int worldState, worldEventEXP_WSE, worldEventDrop_WSE, boomUpEventNotice;
    private boolean starplanet;
    private String name, worldEventDescription;
    private List<Channel> channels;
    private Map<Integer, Party> parties = new HashMap<>();
    private Map<Integer, Guild> guilds = new HashMap<>();
    private Map<Integer, Alliance> alliances = new HashMap<>();
    private Map<Integer, Set<AuctionItem>> accIdToAuctions = new HashMap<>();
    private Map<Long, AuctionItem> auctionIdToAuction = new ConcurrentHashMap<>();
    private int partyIDCounter = 1;
    private boolean charCreateBlock;
    private WorldType worldType;
    private WorldConfig config;

    public World(WorldId worldId, String name, int worldState, String worldEventDescription, int worldEventEXP_WSE,
                 int worldEventDrop_WSE, int boomUpEventNotice, int amountOfChannels, boolean starplanet, WorldType worldType) {
        this.worldId = worldId;
        this.name = name;
        this.worldState = worldState;
        this.worldEventDescription = worldEventDescription;
        this.worldEventEXP_WSE = worldEventEXP_WSE;
        this.worldEventDrop_WSE = worldEventDrop_WSE;
        this.boomUpEventNotice = boomUpEventNotice;
        List<Channel> channelList = new ArrayList<>();
        for (int i = 1; i <= amountOfChannels; i++) {
            channelList.add(new Channel(worldId, i));
        }
        this.channels = channelList;
        this.starplanet = starplanet;
        this.worldType = worldType;
        initAuctionHouse();
    }

    public World(WorldId worldId, String name, int amountOfChannels, String worldEventMsg) {
        this(worldId, name, 0, worldEventMsg, 100, 100,
                0, amountOfChannels, false, WorldType.Normal);
        initGuilds();
        initAlliances();
        initTimers();
    }

    private void initGuilds() {
        var guilds = guildDao.list();
        for (Guild g : guilds) {
            var chr = g.getGuildLeader() == null ? null : g.getGuildLeader().getChr();
            g.setNoblesseSkillLevels(chr);
            addGuild(g);
        }
    }
    private void initAlliances(){
        List<Alliance> alliances = allianceDao.list();
        for(Alliance a : alliances){
            addAlliance(a);
        }

    }

    private void initTimers() {
        EventManager.addFixedRateEvent(() -> {
            for (var channel : getChannels()) {
                channel.clearCache();
            }
        }, FIELD_CLEAR_TIME, FIELD_CLEAR_TIME, TimeUnit.HOURS);
    }

    private void initAuctionHouse() {
        List<AuctionItem> auctions = auctionItemDao.list();
        for (AuctionItem ai : auctions) {
            addAuction(ai, false);
        }
    }

    public WorldId getWorldId() {
        return worldId;
    }

    public String getName() {
        return name;
    }

    public int getWorldState() {
        return worldState;
    }

    public int getWorldEventEXP_WSE() {
        return worldEventEXP_WSE;
    }

    public int getWorldEventDrop_WSE() {
        return worldEventDrop_WSE;
    }

    public int getBoomUpEventNotice() {
        return boomUpEventNotice;
    }

    public boolean isStarPlanet() {
        return starplanet;
    }

    public String getWorldEventDescription() {
        var onlinePlayers = getPlayerCount();
        return worldEventDescription + onlinePlayers;
    }

    public void setWorldEventDescription(String worldEventDescription) {
        this.worldEventDescription = worldEventDescription;
    }

    public Channel getChannelById(int id) {
        return getChannels().stream().filter(c -> c.getChannelId() == id).findFirst().orElse(null);
    }

    public List<Channel> getChannels() {
        return channels;
    }

    public ServerStatus getStatus() {
        return ServerStatus.NORMAL;
    }

    public Char getCharByName(String name) {
        for (Channel c : getChannels()) {
            Char chr = c.getCharByName(name);
            if (chr != null) {
                return chr;
            }
        }
        return null;
    }

    public Char getCharByID(int id) {
        for (Channel c : getChannels()) {
            Char chr = c.getCharById(id);
            if (chr != null) {
                return chr;
            }
        }
        return null;
    }

    public Map<Integer, Party> getParties() {
        return parties;
    }

    public void addParty(Party p) {
        int id = getPartyIdAndIncrement(); // sequential IDs should be fine here
        getParties().put(id, p);
        p.setId(id);
        if (p.getWorld() == null) {
            p.setWorld(this);
        }
    }

    public void removeParty(Party p) {
        getParties().remove(p.getId());
    }

    public Party getPartybyId(int partyID) {
        return getParties().get(partyID);
    }

    public Map<Integer, Guild> getGuilds() {
        return guilds;
    }

    public Collection<Guild> getGuildsWithCriteria(String guildName, String guildLeaderName, boolean all, boolean exact) {
        Collection<Guild> guilds = getGuilds().values();
        Set<Guild> res = new HashSet<>(guilds);
        for (Guild g : guilds) {
            if (g.getMembers().size() == 0 || g.getGuildLeader() == null // guilds that are being disbanded
                || !g.isAppliable()) {
                res.remove(g);
                continue;
            }

            boolean matchesName = false;
            if (guildName != null) {
                matchesName = exact ? g.getName().equalsIgnoreCase(guildName)
                        : g.getName().toLowerCase().contains(guildName.toLowerCase());
            }

            var leader = g.getGuildLeader();

            boolean matchesLeader = false;
            if (guildLeaderName != null) {
                matchesLeader = exact ? leader.getName().equalsIgnoreCase(guildLeaderName)
                        : leader.getName().toLowerCase().contains(guildLeaderName.toLowerCase());
            }

            if (all && !matchesName && !matchesLeader) {
                res.remove(g);
            } else if (guildName != null && !matchesName) {
                res.remove(g);
            } else if (guildLeaderName != null && !matchesLeader) {
                res.remove(g);
            }
        }
        return res;
    }

    public Guild getGuildByID(int id) {
        return getGuilds().get(id);
    }

    public Guild getGuildByName(String name) {
        return Util.findWithPred(guilds.values(), g -> g.getName().equalsIgnoreCase(name));
    }

    public Guild loadGuildFromDB(int id) {
        return (Guild) DatabaseManager.getObjFromDB(Guild.class, id);
    }

    public int getPartyIdAndIncrement() {
        return partyIDCounter++;
    }

    public int getPartyIDCounter() {
        return partyIDCounter;
    }

    public void setPartyIDCounter(int partyIDCounter) {
        this.partyIDCounter = partyIDCounter;
    }

    public User getUserById(int userId) {
        return Server.getInstance().getUserById(userId);
    }

    public void broadcastPacket(OutPacket outPacket) {
        for (Channel channel : getChannels()) {
            channel.broadcastPacket(outPacket);
        }
    }

    public void broadcastPacketByChr(Char byChr, OutPacket outPacket) {
        for (Channel channel : getChannels()) {
            channel.broadcastPacketByChr(byChr, outPacket);
        }
    }

    public boolean isCharCreateBlock() {
        return charCreateBlock;
    }

    public void setCharCreateBlock(boolean charCreateBlock) {
        this.charCreateBlock = charCreateBlock;
    }

    public WorldType getWorldType() {
        return worldType;
    }

    public boolean isFull() {
        boolean full = true;
        for (Channel channel : getChannels()) {
            if (channel.getChars().size() < channel.MAX_SIZE) {
                full = false;
                break;
            }
        }
        return full;
    }

    public Map<Integer, Alliance> getAlliances() {
        return alliances;
    }

    public void addGuild(Guild guild) {
        getGuilds().put(guild.getId(), guild);
    }

    public void addAlliance(Alliance ally) {
        getAlliances().put(ally.getId(), ally);
        // Initialize guilds to be the same instance as the ones we currently have
        Set<Guild> guilds = new HashSet<>();
        for (Guild guild : ally.getGuilds()) {
            Guild ourGuild = getGuildByID(guild.getId());
            ourGuild.setAlliance(ally);
            guilds.add(ourGuild);
        }
        ally.setGuilds(guilds);
        ally.setWorld(this);
    }

    public Alliance getAlliance(int id) {
        Alliance ally = getAlliances().getOrDefault(id, null);
        if (ally == null) {
            ally = allianceDao.byId(id);
            if (ally != null) {
                addAlliance(ally);
            }
        }
        return ally;
    }

    public Alliance getAlliance(String name) {
        Alliance ally =  Util.findWithPred(alliances.values(), g -> g.getName().equalsIgnoreCase(name));
        if (ally == null) {
            ally = allianceDao.byName(name);
            if (ally != null) {
                addAlliance(ally);
            }
        }
        return ally;
    }

    public void clearCache() {
        for (Channel channel : getChannels()) {
            channel.clearCache();
        }
    }

    public Collection<AuctionItem> getAuctionHouse() {
        return auctionIdToAuction.values();
    }

    public Set<AuctionItem> getInitialAuctionItems() {
        Set<AuctionItem> items = new HashSet<>();
        var i = 0;

        for (var ai : getAuctionHouse()) {
            if (!ai.getEndDate().isExpired() && ai.getState() == AuctionState.Init
                    && ai.getQuantity() > 0 && ai.getDirectPrice() >= GameConstants.AUCTION_MIN_PRICE) {
                items.add(ai);
                if (++i == GameConstants.MAX_AUCTION_QUERY_RESULT_SIZE) {
                    break;
                }
            }
        }

        return items;
    }

    public Set<AuctionItem> getAuctionItemsWithFilter(AuctionItemSearchCriteria sc) {
        return getAuctionHouse().stream()
                .filter(ai -> {
                    if ((sc.expired && (!ai.getEndDate().isExpired() || ai.getState() != AuctionState.SoldDone)) ||
                            (!sc.expired && (ai.getEndDate().isExpired() || ai.getState() != AuctionState.Init)) ||
                        ai.getQuantity() <= 0 || ai.getDirectPrice() < GameConstants.AUCTION_MIN_PRICE) {
                        return false;
                    }

                    return sc.matches(ai);
                })
                .limit(GameConstants.MAX_AUCTION_QUERY_RESULT_SIZE)
                .collect(Collectors.toSet());
    }

    public void addAuction(AuctionItem ai, boolean saveToDb) {
        if (saveToDb) {
            auctionItemDao.saveOrUpdate(ai);
        }
        if (!accIdToAuctions.containsKey(ai.getAccountID())) {
            accIdToAuctions.put(ai.getAccountID(), new HashSet<>());
        }
        accIdToAuctions.get(ai.getAccountID()).add(ai);
        auctionIdToAuction.put(ai.getId(), ai);
    }

    public Set<AuctionItem> getAuctionsByAccountID(int id) {
        return accIdToAuctions.getOrDefault(id, new HashSet<>());
    }

    public AuctionItem getAuctionById(long auctionId) {
        return auctionIdToAuction.get(auctionId);
    }

    public void shutdown() {
        for (Channel channel : getChannels()) {
            channel.shutdown();
        }
        try {
            for (AuctionItem ai : getAuctionHouse()) {
                auctionItemDao.saveOrUpdate(ai);
            }
            for (Alliance ally : getAlliances().values()) {
                // also saves guilds
                allianceDao.saveOrUpdate(ally);
            }
        } catch (Exception e) {
            ErrorLogger.logAsClientError(e);
        }
    }

    public void removeGuild(Guild guild) {
        getGuilds().remove(guild.getId());
        guildDao.delete(guild);
    }

    public void removeAlliance(Alliance alliance) {
        getAlliances().remove(alliance.getId());
        allianceDao.delete(alliance);
    }

    public void removeCharsOfUser(User user) {
        for (Channel c : getChannels()) {
            c.removeCharsOfUser(user);
        }
    }

    public Account getAccountById(int accountId) {
        for (var c : getChannels()) {
            var acc = c.getAccountById(accountId);
            if (acc != null) {
                return acc;
            }
        }
        return null;
    }

    public int getPlayerCount() {
        int total = 0;
        for (var channel : getChannels()) {
            total += channel.getChars().size();
        }
        return total;
    }

    public void checkForItemExpiry() {
        for (var channel : getChannels()) {
            channel.checkForItemExpiry();
        }
    }

    public void updateBurningFieldLevel() {
        for (var channel : getChannels()) {
            channel.updateBurningFieldLevel();
        }
    }

    public void updateFields() {
        try {
            for (var channel : getChannels()) {
                channel.updateFields();
            }
        } catch (Exception e) {
            // makes the timer not stop if something unexpected happens
            log.error(e.getMessage());
        }
    }

    public void generateMobs() {
        try {
            for (var channel : getChannels()) {
                channel.generateMobs();
            }
        } catch (Exception e) {
            // makes the timer not stop if something unexpected happens
            log.error(e.getMessage());
        }
    }

    public void generateHarvests() {
        try {
            for (var channel : getChannels()) {
                channel.generateHarvests();
            }
        } catch (Exception e) {
            // makes the timer not stop if something unexpected happens
            log.error(e.getMessage());
        }
    }

    public void updateChars() {
        try {
            for (var channel : getChannels()) {
                channel.updateChars();
            }
        } catch (Exception e) {
            // makes the timer not stop if something unexpected happens
            log.error(e.getMessage());
        }
    }

    public void giveSurpriseMissions() {
        try {
            for (var channel : getChannels()) {
                channel.giveSurpriseMissions();
            }
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }

    public User getUserFromTransfer(int userId) {
        for (var ch : getChannels()) {
            var user = ch.getUserFromTransfer(userId);
            if (user != null) {
                return user;
            }
        }

        return null;
    }

    public void removeUserFromTransfer(User user) {
        for (var channel : getChannels()) {
            channel.removeUserFromTransfer(user);
        }
    }

    public void removeRequestor(Char chr) {
        if (chr == null) return;

        for (var guild : getGuilds().values()) {
            guild.removeGuildRequestor(guild.getRequestorById(chr.getId()));
        }
    }

    /**
     * Invoked on the start of each new day (server Time)
     */
    public void onNewDay() {
        for (var channel : getChannels()) {
            channel.onNewDay();
        }
    }

    public boolean isReboot() {
        return getWorldType() == WorldType.Reboot;
    }

    public Collection<Char> getChars() {
        var chars = new HashSet<Char>();
        for (var channel : getChannels()) {
            chars.addAll(channel.getChars().values());
        }
        return chars;
    }

    public void setConfig(WorldConfig config) {
        this.config = config;
    }

    public WorldConfig getConfig() {
        return config;
    }
}
