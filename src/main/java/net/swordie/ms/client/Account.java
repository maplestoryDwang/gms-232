package net.swordie.ms.client;

import net.swordie.ms.Server;
import net.swordie.ms.client.blacklist.BlackListEntry;
import net.swordie.ms.client.blacklist.BlackListModule;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.MonsterCollection;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.CoreAura;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.client.dailies.AccountDailyEntries;
import net.swordie.ms.client.soulcollection.SoulCollectionEntry;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AuctionState;
import net.swordie.ms.enums.BossCooldown;
import net.swordie.ms.enums.DailyEntry;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.orm.dao.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Class representing an Account, which is a world-specific "User" class.
 * <p>
 * Created by Sjonnie on 4/30/2017.
 */
public class Account {

    private static final Logger log = LogManager.getLogger();

    private static final AccountDao accDao = (AccountDao) SworDaoFactory.getByClass(Account.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final DamageSkinSaveDataDao dssdDao = (DamageSkinSaveDataDao) SworDaoFactory.getByClass(DamageSkinSaveData.class);
    private static final LinkSkillDao linkSkillDao = (LinkSkillDao) SworDaoFactory.getByClass(LinkSkill.class);
    private static final AccountBossCooldownDao abcDao = (AccountBossCooldownDao) SworDaoFactory.getByClass(AccountBossCooldown.class);
    private static final AccountDailyEntriesDao deDao = (AccountDailyEntriesDao) SworDaoFactory.getByClass(AccountDailyEntries.class);
    private static final AuctionItemDao auctionItemDao = (AuctionItemDao) SworDaoFactory.getByClass(AuctionItem.class);
    private static final BlackListEntryDao blackListEntryDao = (BlackListEntryDao) SworDaoFactory.getByClass(BlackListEntry.class);
    private static final SoulCollectionDao soulCollectionDao = (SoulCollectionDao) SworDaoFactory.getByClass(SoulCollectionEntry.class);

    private int id;

    private int worldId;

    private Trunk trunk;

    private MonsterCollection monsterCollection;

    private Set<DamageSkinSaveData> damageSkins;

    private Set<Char> characters;

    private Set<LinkSkill> linkSkills;

    // nxCredit is from mobs, so is account (world) specific.
    private int nxCredit;

    private int nxPrepaid;

    private Union union;
    private UnionRaid unionRaid;

    private Set<AccountBossCooldown> bossCooldowns;

    private Set<Integer> completedAccountQuests;

    private Set<AuctionItem> auctionItems;

    private Char currentChr;
    private User user;

    private CoreAura coreAura;

    private List<BlackListEntry> blackListEntries;

    private List<SoulCollectionEntry> soulCollectionEntries;

    private AccountDailyEntries dailyEntries;

    public Account(User user, int worldId) {
        this.user = user;
        this.worldId = worldId;
        this.trunk = new Trunk(GameConstants.DEFAULT_TRUNK_SIZE);
        this.monsterCollection = new MonsterCollection();
        this.damageSkins = new HashSet<>();
        this.characters = new HashSet<>();
        this.linkSkills = new HashSet<>();
        this.union = new Union(Union.DEFAULT_PRESETS, Union.DEFAULT_RANK);
        this.unionRaid = new UnionRaid();
        completedAccountQuests = new HashSet<>();
        union.setAccount(this);
        damageSkins.add(new DamageSkinSaveData(0, 2433271, false, "The default damage skin."));
    }

    public Account() {
    }

    public int getId() {
        return id;
    }

    public Set<Char> getCharacters() {
        if (characters == null) {
            characters = charDao.byAccount(this);
        }
        return characters;
    }

    public boolean hasCharacter(int charId) {
        return getCharById(charId) != null;
    }

    public void setMonsterCollection(MonsterCollection monsterCollection) {
        this.monsterCollection = monsterCollection;
    }

    public void addDailyEntry(DailyEntry dailyEntry) {
        AccountDailyEntries ade = getDailyEntries();
        ade.setRemainingEntries(dailyEntry, ade.getRemainingEntries(dailyEntry) + 1);
        deDao.saveOrUpdate(this, ade);
    }

    public int getRemainingEntriesClean(DailyEntry dailyEntry) {
        return getDailyEntries().getRemainingEntries(dailyEntry);
    }

    public int getRemainingEntries(DailyEntry dailyEntry) {
        AccountDailyEntries ade = getDailyEntries();
        if (ade.getRemainingEntries(dailyEntry) == -1) {
            ade.setRemainingEntries(dailyEntry, dailyEntry.getEntriesPerReset());
            deDao.saveOrUpdate(this, ade);
        }
        return ade.getRemainingEntries(dailyEntry);
    }

    public void reduceDailyEntry(DailyEntry dailyEntry) {
        AccountDailyEntries ade = getDailyEntries();
        if (ade.getRemainingEntries(dailyEntry) == -1) {
            ade.setRemainingEntries(dailyEntry, dailyEntry.getEntriesPerReset() - 1);
        } else {
            ade.setRemainingEntries(dailyEntry, Math.max(0, ade.getRemainingEntries(dailyEntry) - 1));
        }
        deDao.saveOrUpdate(this, ade);
    }

    public AccountDailyEntries getDailyEntries() {
        if (dailyEntries == null) {
            dailyEntries = deDao.byAccount(this);
            if (dailyEntries == null) {
                dailyEntries = new AccountDailyEntries();
                deDao.saveOrUpdate(this, dailyEntries);
            }
        }
        return dailyEntries;
    }

    public void refreshDailyEntriesList() {
        dailyEntries = deDao.byAccount(this);
    }

    public Union getUnion() {
        if (union.getAccount() == null) {
            union.setAccount(this);
        }
        return union;
    }

    public void setUnion(Union union) {
        this.union = union;
    }

    public UnionRaid getUnionRaid() {
        return unionRaid;
    }

    public void setUnionRaid(UnionRaid unionRaid) {
        this.unionRaid = unionRaid;
    }

    public void addCharacter(Char character) {
        character.setAccount(this);
        getCharacters().add(character);
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<DamageSkinSaveData> getDamageSkins() {
        if (damageSkins == null) {
            damageSkins = dssdDao.byAccount(this);
        }

        return damageSkins;
    }

    public void setDamageSkins(Set<DamageSkinSaveData> damageSkins) {
        this.damageSkins = damageSkins;
    }

    public void addDamageSkin(DamageSkinSaveData dssd) {
        if (getDamageSkinByItemID(dssd.getItemID()) == null) {
            getDamageSkins().add(dssd);
        }
    }

    public void removeDamageSkin(DamageSkinSaveData dssd) {
        if (dssd != null) {
            getDamageSkins().remove(dssd);
            dssdDao.delete(dssd);
        }
    }

    public DamageSkinSaveData getDamageSkinByItemID(int itemID) {
        return getDamageSkins().stream().filter(d -> d.getItemID() == itemID).findAny().orElse(null);
    }

    public DamageSkinSaveData getDamageSkinBySkinID(int skinID) {
        return getDamageSkins().stream().filter(d -> d.getDamageSkinID() == skinID).findAny().orElse(null);
    }

    public Trunk getTrunk() {
        return trunk;
    }

    public void setTrunk(Trunk trunk) {
        this.trunk = trunk;
    }

    public int getNxCredit() {
        return nxCredit;
    }

    public void setNxCredit(int nxCredit) {
        this.nxCredit = nxCredit;
    }

    public int getNxPrepaid() {
        return nxPrepaid;
    }

    public void setNxPrepaid(int nxPrepaid) {
        this.nxPrepaid = nxPrepaid;
    }

    public void addNXPrepaid(int prepaid) {
        long newPrepaid = (long) getNxPrepaid() + prepaid;
        if (newPrepaid > Integer.MAX_VALUE) {
            newPrepaid = Integer.MAX_VALUE;
            getCurrentChr().chatMessage("You have reached maximum NX cash. Please spend some before you can receive more.");
        }
        if (newPrepaid >= 0) {
            setNxPrepaid((int) newPrepaid);
        }
    }

    public void deductNXPrepaid(int prepaid) {
        addNXPrepaid(-prepaid);
    }

    public void addLinkSkill(LinkSkill linkSkill) {
        removeLinkSkillByOwnerID(linkSkill.getOriginID());
        getLinkSkills().add(linkSkill);
    }

    public void addLinkSkill(Char originChar, int usingID, int linkedSkill) {
        int level = SkillConstants.getLinkSkillLevelByCharLevel(originChar.getJob(), originChar.getLevel());
        LinkSkill ls = new LinkSkill(this, originChar.getId(), usingID, linkedSkill, level);
        addLinkSkill(ls);
    }

    public void removeLinkSkillByOwnerID(int ownerID) {
        var linkSkill = getLinkSkills().stream()
                .filter(l -> l.getOriginID() == ownerID).findFirst().orElse(null);

        if (linkSkill != null) {
            if (linkSkill.getUsingID() == 1) {
                removeSkillForAllChars(linkSkill.getLinkSkillID());
            }
            getLinkSkills().remove(linkSkill);
            linkSkillDao.delete(linkSkill);
        }
    }

    public Set<LinkSkill> getLinkSkills() {
        if (linkSkills == null) {
            linkSkills = linkSkillDao.byAccount(this);
        }

        return linkSkills;
    }

    public void setLinkSkills(Set<LinkSkill> linkSkills) {
        this.linkSkills = linkSkills;
    }

    public void addNXCredit(int credit) {
        int newCredit = getNxCredit() + credit;
        if (newCredit >= 0) {
            setNxCredit(newCredit);
        }
    }

    public void deductNXCredit(int credit) {
        addNXCredit(-credit);
    }

    public MonsterCollection getMonsterCollection() {
        if (monsterCollection == null) {
            monsterCollection = new MonsterCollection();
        }
        return monsterCollection;
    }

    public Char getCharById(int id) {
        return Util.findWithPred(getCharacters(), chr -> chr.getId() == id);
    }

    public Char getCharByName(String name) {
        return Util.findWithPred(getCharacters(), chr -> chr.getName().equals(name));
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getWorldId() {
        return worldId;
    }

    public void setWorldId(int worldId) {
        this.worldId = worldId;
    }

    public Char getCurrentChr() {
        return currentChr;
    }

    public void setCurrentChr(Char currentChr) {
        this.currentChr = currentChr;
    }

    public int getTotalLvOfAllChrs() {
        return getCharacters().stream().mapToInt(Char::getLevel).sum();
    }

    public Set<AuctionItem> getAuctionItems() {
        if (auctionItems == null) {
            // Not done via db to ensure the instances between world and acc are the same
            auctionItems = Server.getInstance().getAuctionsByAccountID(getId());
        }
        return auctionItems;
    }

    public Set<AuctionItem> getCompletedAuctionItems() {
        var expiredItems = getAuctionItems().stream()
                .filter(it -> it.getEndDate().isExpired())
                .collect(Collectors.toSet());

        var alteredItems = new HashSet<AuctionItem>();
        for (var item : expiredItems) {
            if (item.getState() == AuctionState.Init) {
                item.setState(AuctionState.Expire);
                alteredItems.add(item);
            }
        }

        for (var item : alteredItems) {
            auctionItemDao.saveOrUpdate(item);
        }

        return expiredItems;
    }

    public Set<AuctionItem> getSellingAuctionItems() {
        return getAuctionItems().stream()
                .filter(it -> !it.getEndDate().isExpired())
                .collect(Collectors.toSet());
    }

    public void setAuctionItems(Set<AuctionItem> auctionItems) {
        this.auctionItems = auctionItems;
    }

    public AuctionItem getAuctionById(long auctionId) {
        return Util.findWithPred(getAuctionItems(), ai -> ai.getId() == auctionId);
    }

    public void addAuction(AuctionItem item) {
        getAuctionItems().add(item);
    }

    public AuctionItem createAndAddAuctionByItem(Item item, Char sellingChar, long price) {
        AuctionItem ai = new AuctionItem();
        ai.setItem(item);
        item.assignId();
        ai.setRegDate(FileTime.currentTime());
        ai.setEndDate(FileTime.fromDate(FileTime.currentTime().toLocalDateTime().plusHours(GameConstants.AUCTION_LIST_TIME)));
        ai.setAccountID(getId());
        ai.setCharID(sellingChar.getId());
        ai.setCharName(sellingChar.getName());
        ai.setDirectPrice(price);
        ai.setItemType(item.getInvType().getVal());
        ai.setItemName(StringData.getItemStringById(item.getItemId()));
        ai.setDeposit(GameConstants.AUCTION_DEPOSIT_AMOUNT);
        addAuction(ai);
        sellingChar.getClient().getWorld().addAuction(ai, true);

        return ai;
    }

    public void removeChar(Char chr) {
        removeLinkSkillByOwnerID(chr.getId());
        for (UnionBoard ub : getUnion().getUnionBoards()) {
            ub.removeMemberByCharId(chr.getId());
        }
        chr.setAccount(null);
        getCharacters().remove(chr);
        accDao.saveOrUpdate(user, this, null);
        charDao.delete(chr);
    }

    public AccountBossCooldown getBossCooldown(BossCooldown bc) {
        return Util.findWithPred(getBossCooldowns(), cd -> cd.getBossCooldown() == bc);
    }

    public void setBossCooldown(BossCooldown bc, boolean full) {
        FileTime ft = FileTime.currentTime();
        var cooldownMinutes = full ? bc.getCooldownMinutes() : BossConstants.ENTRY_COOLDOWN;
        ft = FileTime.fromDate(ft.toLocalDateTime().plusMinutes(cooldownMinutes));
        AccountBossCooldown abc = getBossCooldown(bc);
        if (abc == null) {
            abc = new AccountBossCooldown();
            abc.setBossCooldown(bc);
        }
        abc.setNextEntryTime(ft);
        getBossCooldowns().add(abc);
    }

    public boolean isOnBossCooldown(BossCooldown bc) {
        return false;

//        AccountBossCooldown abc = getBossCooldown(bc);
//        return abc != null && !abc.getNextEntryTime().isExpired();
    }

    public Set<AccountBossCooldown> getBossCooldowns() {
        if (bossCooldowns == null) {
            bossCooldowns = abcDao.byAccount(this);
        }

        return bossCooldowns;
    }

    public void setBossCooldowns(Set<AccountBossCooldown> bossCooldowns) {
        this.bossCooldowns = bossCooldowns;
    }

    public boolean hasDamageSkin(int damageSkin) {
        return getDamageSkinBySkinID(damageSkin) != null;
    }

    public Set<Integer> getCompletedAccountQuests() {
        return completedAccountQuests;
    }

    public void setCompletedAccountQuests(Set<Integer> completedAccountQuests) {
        this.completedAccountQuests = completedAccountQuests;
    }

    public void addCompletedAccountQuest(int questId) {
        getCompletedAccountQuests().add(questId);
    }

    public void removeCompletedAccountQuest(int questId) {
        getCompletedAccountQuests().remove(questId);
    }

    public void applyCompletedAccountQuests(Char chr) {
        var questManager = chr.getQuestManager();
        for (int questId : getCompletedAccountQuests()) {
            if (!questManager.hasQuestCompleted(questId)) {
                questManager.completeQuest(questId, false);
                if (questId == QuestConstants.UNION_START_QUEST) {
                    questManager.initUnion();
                }
            }
        }
    }

    public void unload() {
//        characters = null;
    }

    public void removeSkillForAllChars(int skillId) {
        for (Char chr : getCharacters()) {
            chr.removeSkill(skillId);
        }
    }

    public List<Char> getPopChrList() {
        List<Char> chrList = new ArrayList<>(getCharacters());
        Collections.sort(chrList, (Comparator) (o1, o2) -> {

            Short pop1 = ((Char) o1).getAvatarData().getCharacterStat().getPop();
            Short pop2 = ((Char) o2).getAvatarData().getCharacterStat().getPop();
            int popComp = pop2.compareTo(pop1); // Reverse Order

            if (popComp != 0) {
                return popComp;
            }

            String id1 = ((Char) o1).getName();
            String id2 = ((Char) o2).getName();
            return id1.compareTo(id2);
        });

        return chrList;
    }

    public CoreAura getCoreAura() {
        return coreAura;
    }

    public void setCoreAura(CoreAura coreAura) {
        this.coreAura = coreAura;
    }

    public List<BlackListEntry> getBlackListEntries() {
        if (blackListEntries == null) {
            blackListEntries = blackListEntryDao.byAccount(this);
        }
        return blackListEntries;
    }

    public void setBlackListEntries(List<BlackListEntry> blackListEntries) {
        this.blackListEntries = blackListEntries;
    }

    public void addBlackListEntry(BlackListEntry entry) {
        getBlackListEntries().add(entry);
    }

    public void removeBlackListEntry(BlackListEntry entry) {
        getBlackListEntries().remove(entry);
        blackListEntryDao.delete(entry);
    }

    public boolean hasChrBlacklisted(int chrId) {
        return BlackListModule.containsChrId(this, chrId);
    }

    public List<SoulCollectionEntry> getSoulCollectionEntries() {
        if (soulCollectionEntries == null) {
            soulCollectionEntries = soulCollectionDao.byAccount(this);
        }
        return soulCollectionEntries;
    }

    public void setSoulCollectionEntries(List<SoulCollectionEntry> soulCollectionEntries) {
        this.soulCollectionEntries = soulCollectionEntries;
    }
}
