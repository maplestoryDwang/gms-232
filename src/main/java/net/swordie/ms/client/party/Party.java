package net.swordie.ms.client.party;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.events.Events;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Created on 3/19/2018.
 */
public class Party {

    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    private int id;
    private PartyMember[] partyMembers = new PartyMember[6];
    private boolean appliable;
    private boolean masterLoot;
    private String name;
    private int partyLeaderID;
    private World world;
    private Char applyingChar;
    private Instance instance;
    private boolean duoParty;
    private boolean kickMembers;

    public boolean isAppliable() {
        return appliable;
    }

    public void setAppliable(boolean appliable) {
        this.appliable = appliable;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PartyMember[] getPartyMembers() {
        return partyMembers;
    }

    public boolean isFull() {
        return Arrays.stream(getPartyMembers()).noneMatch(Objects::isNull);
    }

    public boolean isEmpty() {
        return Arrays.stream(getPartyMembers()).allMatch(Objects::isNull);
    }

    public void encode(OutPacket outPacket, Char receiver) {
        // start PARTYMEMBER (250 bytes)
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null ? pm.getCharID() : 0);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeString(pm != null ? pm.getCharName() : "", 13);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null ? pm.getJob() : 0);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null ? pm.getSubSob() : 0);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null ? pm.getLevel() : 0);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null &&
                    pm.isOnline()
                    ? pm.getFieldID() == -1
                        ? -1 // cash shop
                        : pm.getChannel() - 1
                    : -2);
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(pm != null && pm.isOnline() ? 1 : 0); // GMS encodes this 0 regardless of online
        }
        for (PartyMember pm : partyMembers) {
            outPacket.encodeInt(0); // new 188
        }
        outPacket.encodeInt(getPartyLeaderID());
        // end PARTYMEMBER struct
        // 24 bytes
        for (PartyMember pm : partyMembers) {
            int fieldId = 999999999;
            if (pm != null && receiver != null && pm.getChannel() == receiver.getChannel()) {
                fieldId = pm.getFieldID();
            }
            outPacket.encodeInt(fieldId);
        }
        // 120 bytes
        for (PartyMember pm : partyMembers) {
            if (pm != null && pm.getTownPortal() != null) {
                pm.getTownPortal().encode(outPacket, false);
            } else {
                new TownPortal().encode(outPacket, false);
            }
        }
        outPacket.encodeByte(canKickMembers()); // new 188

        encodeSettings(outPacket);

        // from here new 188: sub_85A6C4
        // tried putting in some values in here, but didn't see any change
        // Most likely something with duo parties
        outPacket.encodeByte(isDuoParty());
        outPacket.encodeByte(0);
        int size = 0;
        outPacket.encodeByte(size);
        for (int i = 0; i < size; i++) {
            // sub_C0E1E0
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeString("");
            outPacket.encodeInt(0);
        }
        outPacket.encodeByte(false);
        for (int i = 0; i < 2; i++) {
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);
            boolean bool = false;
            outPacket.encodeByte(bool);
            if (bool) {
                new AvatarLook(true).encode(outPacket);
            }
            outPacket.encodeByte(2); // from GMS sniff, rest is 0
            outPacket.encodeInt(0);
            outPacket.encodeLong(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }

    }

    public int getPartyLeaderID() {
        return partyLeaderID;
    }

    public void setPartyLeaderID(int partyLeaderID) {
        this.partyLeaderID = partyLeaderID;
    }

    /**
     * Adds a {@link Char} to this Party. Will do nothing if this Party is full.
     *
     * @param chr The Char to add.
     */
    public void addPartyMember(Char chr) {
        if (isFull()) {
            return;
        }
        boolean initial = isEmpty();
        PartyMember pm = new PartyMember(chr);
        if (isEmpty()) {
            setPartyLeaderID(chr.getId());
        }
        PartyMember[] partyMembers = getPartyMembers();
        boolean added = false;
        for (int i = 0; i < partyMembers.length; i++) {
            if (partyMembers[i] == null) {
                partyMembers[i] = pm;
                chr.setParty(this);
                added = true;
                break;
            }
        }
        if (added && !initial) {
            broadcast(WvsContext.partyResult(PartyResult.joinParty(this, chr.getName())));
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public TownPortal getTownPortal() {
        PartyMember pm = Arrays.stream(getPartyMembers()).filter(Objects::nonNull)
                .filter(p -> p.getTownPortal() != null)
                .findFirst().orElse(null);
        return pm != null ? pm.getTownPortal() : new TownPortal();
    }

    public PartyMember getPartyLeader() {
        return Arrays.stream(getPartyMembers()).filter(p -> p != null && p.getCharID() == getPartyLeaderID()).findFirst().orElse(null);
    }

    public boolean hasCharAsLeader(Char chr) {
        return getPartyLeaderID() == chr.getId();
    }

    public void disband() {
        Events.onPartyDisband(this);

        broadcastWithdraw();
        for (Char chr : getOnlineChars()) {
            chr.setParty(null);
        }
        for (int i = 0; i < getPartyMembers().length; i++) {
            removePartyMember(getPartyMembers()[i]);
            getPartyMembers()[i] = null;
        }
        getWorld().removeParty(this);
        setWorld(null);
    }

    public void broadcastWithdraw() {
        for (PartyMember pm : getOnlineMembers()) {
            pm.getChr().write(WvsContext.partyResult(PartyResult.withdrawParty(this, getPartyLeader(), false, false, pm.getChr())));
        }
    }

    public List<Char> getOnlineChars() {
        return getOnlineMembers().stream().filter(pm -> pm.getChr() != null).map(PartyMember::getChr).collect(Collectors.toList());
    }

    public List<Char> getPartyMembersInField(Char chr) {
        return getOnlineChars().stream().filter(chr::isInSameField).collect(Collectors.toList());
    }

    public List<PartyMember> getOnlineMembers() {
        return Arrays.stream(getPartyMembers()).filter(pm -> pm != null && pm.isOnline()).collect(Collectors.toList());
    }

    public List<PartyMember> getMembers() {
        return Arrays.stream(getPartyMembers()).filter(Objects::nonNull).collect(Collectors.toList());
    }

    public void updateFull() {
        broadcastLoadParty();
    }

    public void broadcastLoadParty() {
        for (PartyMember pm : getOnlineMembers()) {
            pm.getChr().write(WvsContext.partyResult(PartyResult.loadParty(this, pm.getChr())));
        }
    }

    public void broadcastMigration() {
        for (PartyMember pm : getOnlineMembers()) {
            pm.getChr().write(WvsContext.partyResult(PartyResult.userMigration(this, pm.getChr())));
        }
    }

    public PartyMember getPartyMemberByID(int charID) {
        return Arrays.stream(getPartyMembers()).filter(p -> p != null && p.getCharID() == charID).findFirst().orElse(null);
    }

    public void broadcast(OutPacket outPacket) {
        for (PartyMember pm : getOnlineMembers()) {
            pm.getChr().write(outPacket);
        }
    }

    public void broadcast(OutPacket outPacket, Char exceptChar) {
        for (PartyMember pm : getOnlineMembers()) {
            if (!pm.getChr().equals(exceptChar)) {
                pm.getChr().write(outPacket);
            }
        }
    }

    public void broadcastByChr(Char byChr, OutPacket outPacket, Char exceptChar) {
        for (PartyMember pm : getOnlineMembers()) {
            if (pm.getChr() != null // chr is not null
                    && !pm.getChr().equals(exceptChar) // pm.chr is not exceptChr
                    && !pm.getChr().hasChrBlacklisted(byChr.getId())) { // pm.chr has byChr not blacklisted
                pm.getChr().write(outPacket);
            }
        }
    }

    public void removePartyMember(PartyMember partyMember) {
        for (int i = 0; i < getPartyMembers().length; i++) {
            PartyMember pm = getPartyMembers()[i];
            if (pm != null && pm.equals(partyMember)) {
                var pmChr = pm.getChr();
                if (pmChr != null) {
                    pm.getChr().setParty(null);
                    pm.getChr().getJobHandler().onLeaveParty();
                } else {
                    var dbChar = charDao.getById(pm.getCharID());
                    if (dbChar != null) {
                        charDao.savePartyId(dbChar);
                    }
                }
                getPartyMembers()[i] = null;
                break;
            }
        }
        if (partyMember != null && partyMember.getChr() != null) {
            Char chr = partyMember.getChr();
            if (chr.getInstance() != null) {
                chr.getInstance().removeCharNoReentrance(chr);
            }
        }
    }

    public void expel(int expelID) {
        PartyMember leaver = getPartyMemberByID(expelID);
        broadcastLeave(leaver);
        removePartyMember(leaver);
        updateFull();
    }

    public void broadcastLeave(PartyMember leaver) {
        for (PartyMember pm : getOnlineMembers()) {
            pm.getChr().write(WvsContext.partyResult(PartyResult.withdrawParty(this, leaver, true, true, pm.getChr())));
        }
    }

    public static Party createNewParty(boolean appliable, boolean masterLoot, String name, World world) {
        Party party = new Party();
        party.setAppliable(appliable);
        party.setMasterLoot(masterLoot);
        party.setName(name);
        party.setWorld(world);
        world.addParty(party);

        Events.onPartyCreated(party);

        return party;
    }

    public int getAvgLevel() {
        Collection<PartyMember> partyMembers = getMembers();
        return partyMembers.stream()
                .filter(pm -> pm != null && pm.getChr() != null)
                .mapToInt(pm -> pm.getChr().getLevel())
                .sum() / partyMembers.size();
    }

    public void setWorld(World world) {
        this.world = world;
    }

    public World getWorld() {
        return world;
    }

    public Char getApplyingChar() {
        return applyingChar;
    }

    public void setApplyingChar(Char applyingChar) {
        this.applyingChar = applyingChar;
    }

    public boolean isPartyMember(Char chr) {
        return getPartyMemberByID(chr.getId()) != null;
    }

    public void updatePartyMemberInfoByChr(Char chr) {
        if (!isPartyMember(chr)) {
            return;
        }
        getPartyMemberByID(chr.getId()).updateInfoByChar(chr);
        updateFull();
    }

    /**
     * Returns the average party member's level, according to the given Char's field.
     *
     * @param chr the chr to get the map to
     * @return the average level of the party in the Char's field
     */
    public int getAvgPartyLevel(Char chr) {
        Field field = chr.getField();
        return (int) getOnlineMembers().stream().filter(om -> om.getChr().getField() == field)
                .mapToInt(PartyMember::getLevel).average().orElse(chr.getLevel());
    }

    /**
     * Gets a list of party members in the same Field instance as the given Char, excluding the given Char.
     *
     * @param chr the given Char
     * @return a set of Characters that are in the same field as the given Char
     */
    public Set<Char> getPartyMembersInSameField(Char chr) {
        return getOnlineMembers().stream()
                .filter(pm -> pm.getChr() != null && pm.getChr() != chr && chr.isInSameField(pm.getChr()))
                .map(PartyMember::getChr)
                .collect(Collectors.toSet());
    }

    /**
     * Checks if this Party has a member with the given character id.
     *
     * @param charID the charID to look for
     * @return if the corresponding char is in the party
     */
    public boolean hasPartyMember(int charID) {
        return getPartyMemberByID(charID) != null;
    }

    public boolean isDuoParty() {
        return duoParty;
    }

    public void setDuoParty(boolean duoParty) {
        this.duoParty = duoParty;
    }

    public boolean canKickMembers() {
        return kickMembers;
    }

    public void setKickMembers(boolean kickMembers) {
        this.kickMembers = kickMembers;
    }

    public Instance getInstance() {
        return instance;
    }

    public void setInstance(Instance instance) {
        this.instance = instance;
    }

    public void updateHealth() {
        List<Char> onlineMembers = getOnlineChars();
        onlineMembers.forEach(pm -> {
            onlineMembers.stream().filter(pm2 -> pm != pm2).forEach(pm2 -> {
                pm.write(UserRemote.receiveHP(pm2));
                pm2.write(UserRemote.receiveHP(pm));
            });
        });
    }

    public boolean isMasterLoot() {
        return masterLoot;
    }

    public void setMasterLoot(boolean masterLoot) {
        this.masterLoot = masterLoot;
    }

    public void encodeSettings(OutPacket outPacket) {
        outPacket.encodeString(getName());
        outPacket.encodeByte(isAppliable() && !isFull());
        outPacket.encodeByte(isMasterLoot());
    }
}
