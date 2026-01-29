package net.swordie.ms.client.character;

import net.swordie.ms.Server;
import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.User;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.alliance.AllianceResult;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.client.blacklist.BlackListResult;
import net.swordie.ms.client.blacklist.BlackListTabType;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.avatar.EarStyle;
import net.swordie.ms.client.character.cards.MonsterBookInfo;
import net.swordie.ms.client.character.cashshop.IterativeBuyInfo;
import net.swordie.ms.client.character.chair.PortableChair;
import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.damage.DamageCalc;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.client.character.damage.DamageSkinType;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.client.character.info.*;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.modules.BagItemModule;
import net.swordie.ms.client.character.modules.InventoryModule;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.monsterbattle.MonsterBattleLadder;
import net.swordie.ms.client.character.monsterbattle.MonsterBattleMobInfo;
import net.swordie.ms.client.character.monsterbattle.MonsterBattleRankInfo;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.client.character.potential.CharacterPotentialMan;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.quest.QuestManagerHandler;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.SkillCooltime;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.ForceAtomInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.jupiterthunder.JupiterThunder;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.character.skills.vmatrix.SpecialNode;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.client.friend.FriendFlag;
import net.swordie.ms.client.friend.FriendRecord;
import net.swordie.ms.client.friend.FriendshipRingRecord;
import net.swordie.ms.client.friend.result.FriendResult;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.JobManager;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.legend.Evan;
import net.swordie.ms.client.jobs.legend.Luminous;
import net.swordie.ms.client.jobs.resistance.WildHunterInfo;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.party.PartyResult;
import net.swordie.ms.client.social.minigamerecord.MiniGameRecord;
import net.swordie.ms.client.social.miniroom.MiniRoom;
import net.swordie.ms.client.soulcollection.SoulCollectionModule;
import net.swordie.ms.client.surprisemission.SurpriseMission;
import net.swordie.ms.client.surprisemission.SurpriseMissionCompleter;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.PsychicLock;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.*;
import net.swordie.ms.life.android.Android;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.loaders.*;
import net.swordie.ms.loaders.containerclasses.AndroidInfo;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.logging.TransactionLogger;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.*;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.World;
import net.swordie.ms.world.auction.AuctionItemSearchCriteria;
import net.swordie.ms.world.auction.AuctionResult;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.FieldInstanceType;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.gach.GachaponManager;
import net.swordie.ms.world.shop.NpcShopDlg;
import net.swordie.ms.world.shop.NpcShopItem;
import net.swordie.orm.dao.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.awt.*;
import java.io.IOException;
import java.security.InvalidParameterException;
import java.util.List;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheck;
import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.enums.ChatType.SystemNotice;
import static net.swordie.ms.enums.InvType.*;
import static net.swordie.ms.enums.InventoryOperation.*;

/**
 * Created on 11/17/2017.
 */
public class Char {
    private static final UserDao userDao = (UserDao) SworDaoFactory.getByClass(User.class);
    private static final FuncKeyMapDao funcKeyMapDao = (FuncKeyMapDao) SworDaoFactory.getByClass(FuncKeyMap.class);
    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);

    private static final Logger log = LogManager.getLogger();
    private static final int AUTO_CLEAR_BUYBACK_THRESHOLD = 30;

    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final SkillCooltimeDao skillCooltimeDao = (SkillCooltimeDao) SworDaoFactory.getByClass(SkillCooltime.class);
    private static final SkillDao skillDao = (SkillDao) SworDaoFactory.getByClass(Skill.class);
    private static final FriendDao friendDao = (FriendDao) SworDaoFactory.getByClass(Friend.class);
    private static final CharacterPotentialDao cpDao = (CharacterPotentialDao) SworDaoFactory.getByClass(CharacterPotential.class);
    private static final MacroDao macroDao = (MacroDao) SworDaoFactory.getByClass(Macro.class);
    private static final StolenSkillDao stolenSkillDao = (StolenSkillDao) SworDaoFactory.getByClass(StolenSkill.class);
    private static final ChosenSkillDao chosenSkillDao = (ChosenSkillDao) SworDaoFactory.getByClass(ChosenSkill.class);
    private static final MatrixRecordDao matrixRecordDao = (MatrixRecordDao) SworDaoFactory.getByClass(MatrixRecord.class);
    private static final MatrixSlotDao matrixSlotDao = (MatrixSlotDao) SworDaoFactory.getByClass(MatrixSlot.class);
    private static final IgnoredItemsDao ignoredItemsDao = (IgnoredItemsDao) SworDaoFactory.getByClass(IgnoredItemsDao.class);
    private static final EmoticonDao emoticonDao = (EmoticonDao) SworDaoFactory.getByClass(Emoticon.class);
    private static final EmoticonShortcutDao emoticonShortcutDao = (EmoticonShortcutDao) SworDaoFactory.getByClass(EmoticonShortcut.class);
    private static final VesselDao vesselDao = (VesselDao) SworDaoFactory.getByClass(Vessel.class);
    private static final FirstEnterRewardDao firstEnterRewardDao = (FirstEnterRewardDao) SworDaoFactory.getByClass(FirstEnterReward.class);
    private static final HyperStatsManagerDao hyperStatsManagerDao = (HyperStatsManagerDao) SworDaoFactory.getByClass(HyperStatsManager.class);
    private static final MiniGameRecordDao miniGameRecordDao = (MiniGameRecordDao) SworDaoFactory.getByClass(MiniGameRecord.class);

    private Client client;
    private int rewardPoints;

    private int id;
    private int userId;

    private QuestManager questManager;

    private Inventory equippedInventory = new Inventory(EQUIPPED, 9999);
    private Inventory equipInventory = new Inventory(EQUIP, 52);
    private Inventory consumeInventory = new Inventory(CONSUME, 52);
    private Inventory etcInventory = new Inventory(ETC, 52);
    private Inventory installInventory = new Inventory(INSTALL, 52);
    private Inventory cashInventory = new Inventory(CASH, 128);
    private Inventory decInventory = new Inventory(DEC, 128);

    private final Set<Item> removedItems = new HashSet<>();

    private AvatarData avatarData;

    private List<FuncKeyMap> funcKeyMap;
    private List<Integer> petFuncKeyMap;

    private int guildId;

    private Guild guild;

    private Vessel vessel;

    private MonsterBookInfo monsterBookInfo;

    private Set<Skill> skills;

    private Set<Friend> friends;

    private Set<CharacterPotential> potentials;

    private List<Macro> macros;

    private Set<StolenSkill> stolenSkills;
    private Set<ChosenSkill> chosenSkills;

    private Set<MatrixRecord> matrixRecords;

    private List<MatrixSlot> matrixSlots;

    private Map<Integer, Long> skillCoolTimes;

    private Set<Integer> ignoredItems;

    private FamiliarCodexManager familiarCodexManager;

    private int partyID = 0; // Just for DB purposes
    private int previousFieldID;
    private int location;

    private List<Integer> towerChairs;
    private List<Integer> hyperRockFields;

    private Account account;
    private User user;

    // Transient
    private CharacterPotentialMan potentialMan;
    private Ranking ranking;
    private int combatOrders;
    private List<ItemPot> itemPots;
    private List<Pet> pets = new ArrayList<>();
    private List<FriendRecord> friendRecords;
    private List<ExpConsumeItem> expConsumeItems;
    private List<MonsterBattleMobInfo> monsterBattleMobInfos;
    private MonsterBattleLadder monsterBattleLadder;
    private MonsterBattleRankInfo monsterBattleRankInfo;
    private Position position;
    private Position oldPosition;
    private Field field;
    private byte moveAction;
    private TemporaryStatManager temporaryStatManager;
    private GachaponManager gachaponManager;
    private Job jobHandler;
    private MarriageRecord marriageRecord;
    private WildHunterInfo wildHunterInfo;
    private DamageSkinSaveData damageSkin = new DamageSkinSaveData(true);
    private DamageSkinSaveData premiumDamageSkin = new DamageSkinSaveData(true);
    private boolean partyInvitable;
    private ScriptManagerImpl scriptManagerImpl = new ScriptManagerImpl(this);
    private int driverID;
    private int passengerID;
    private int chocoCount;
    private int activeEffectItemID;
    private int monkeyEffectItemID;
    private int completedSetItemID;
    private short fieldSeatID;
    private PortableChair chair;
    private short foothold;
    private int tamingMobLevel;
    private int tamingMobExp;
    private int tamingMobFatigue;
    private String ADBoardRemoteMsg;
    private boolean inCouple;
    private CoupleRecord couple;
    private FriendshipRingRecord friendshipRingRecord;
    private int evanDragonGlide;
    private int kaiserMorphRotateHueExtern;
    private int kaiserMorphPrimiumBlack;
    private int kaiserMorphRotateHueInnner;
    private int makingMeisterSkillEff;
    private FarmUserInfo farmUserInfo;
    private int customizeEffect;
    private String customizeEffectMsg;
    private byte soulEffect;
    private FreezeHotEventInfo freezeHotEventInfo;
    private int eventBestFriendAID;
    private int mesoChairCount;
    private boolean beastFormWingOn;
    private int mechanicHue;
    private boolean online;
    private Party party;
    private Instance instance;
    private int bulletIDForAttack;
    private NpcShopDlg shop;
    private DamageCalc damageCalc;
    private boolean buffProtector;
    private int comboCounter;
    private ScheduledFuture itemExpiryTimer;
    private ScheduledFuture lieDetectorTimer;
    private int deathCount = -1;
    private MemorialCubeInfo memorialCubeInfo;
    private boolean skillCDBypass = false;
    // TODO Move this to CharacterStat?
    private Map<BaseStat, Long> baseStats = new HashMap<>();
    private Map<BaseStat, List<Integer>> nonAddBaseStats = new HashMap<>();
    private boolean changingChannel;
    private TownPortal townPortal;
    private boolean battleRecordOn;
    private long nextRandomPortalTime;
    private Map<Integer, Integer> currentDirectionNode = new HashMap<>();
    private boolean tutor = false;
    private int transferField = 0;
    private int transferFieldReq = 0;
    private String blessingOfFairy = null;
    private String blessingOfEmpress = null;
    private boolean isInvincible;
    private boolean talkingToNpc;
    private List<Integer> quickslotKeys;
    private Android android;
    private boolean skillInfoMode = false;
    private List<NpcShopItem> buyBack = new ArrayList<>();
    private PsychicLock psychicLock = null;
    private Map<Integer, PsychicArea> psychicAreas = new HashMap<>();
    private Map<Integer, ForceAtom> forceAtoms = new HashMap<>();
    private Map<Integer, SecondAtom> secondAtoms = new HashMap<>();
    private Map<Integer, JupiterThunder> jupiterThunders = new HashMap<>();
    private int forceAtomKeyCounter = 1;
    private int secondAtomKeyCounter = 10;
    private int jupiterThunder = 1000;
    private Char copy;
    private boolean showDamageCalc;
    private SpecialNode specialNode = new SpecialNode();
    private boolean debugMode;
    private boolean inTrunk;
    private boolean inCashShop;
    private boolean hidden;
    private KeyDownSkillInfo keyDownSkillInfo;
    private BossInfo bossInfo;
    private boolean inAuctionHouse;
    private boolean hasPetVac;
    private long lastComboKill;
    private int stylishKillSkin = -1; // default -1
    private long polloFritto = 0;
    private int lastBagItemIndexOpened = -1;
    private long lastKeydownMPConsumption = 0;
    private long lastFieldSwitchTime = 0;
    private IterativeBuyInfo iterativeBuyInfo;
    private long nextAvailableMegaphone = 0;
    private long nextAvailableAvatarMegaphone = 0;
    private long nextAvailableTripleMegaphone = 0;
    private long nextAvailableConsumeItemTime;
    private Set<Emoticon> emoticons; // Favourite Emoticons
    private Set<EmoticonShortcut> emoticonShortcuts; // Emoticon Shortcuts
    private AuctionItemSearchCriteria lastAuctionCriteria;
    private Gun gun;
    private boolean init = false; // for init stuff on migration that only has to be send upon login. not cc
    private Set<Life> transferLifes;
    private SurpriseMission surpriseMission;
    private HyperStatsManager hyperStatsManager;
    private Set<FirstEnterReward> firstEnterRewards;
    private MiniRoom miniRoom;
    private List<MiniGameRecord> miniGameRecords;
    private int currentExpRate;

    public Char() {
        itemPots = new ArrayList<>();
        friendRecords = new ArrayList<>();
        expConsumeItems = new ArrayList<>();
        monsterBattleMobInfos = new ArrayList<>();
        temporaryStatManager = new TemporaryStatManager(this);
        familiarCodexManager = new FamiliarCodexManager(this);
        gachaponManager = new GachaponManager();
        potentialMan = new CharacterPotentialMan(this);
        towerChairs = Util.makeList(0, 0, 0, 0, 0, 0);
        bossInfo = new BossInfo(this);
    }

    public Char(Account account, String name, int keySettingType, int eventNewCharSaleJob, int job, short curSelectedSubJob,
                byte gender, byte skin, int face, int hair, int[] items) {
        this();
        this.account = account;
        avatarData = new AvatarData();
        avatarData.setAvatarLook(new AvatarLook(true));
        AvatarLook avatarLook = avatarData.getAvatarLook();
        avatarLook.setGender(gender);
        avatarLook.setSkin(skin);
        avatarLook.setFace(face);
        avatarLook.setHair(hair);
        avatarLook.setEarStyle(EarStyle.Normal);
        List<Integer> hairEquips = new ArrayList<>();
        for (int itemId : items) {
            Equip equip = ItemData.getEquipDeepCopy(itemId, false);
            if (equip != null && ItemConstants.isEquip(itemId)) {
                hairEquips.add(itemId);
                if (ItemConstants.isWeapon(itemId)) {
                    if (!equip.isCash()) {
                        avatarLook.setWeaponId(itemId);
                    } else {
                        avatarLook.setWeaponStickerId(itemId);
                    }
                }
            }
        }
        avatarLook.setHairEquips(hairEquips);
        avatarLook.setJob(job);
        CharacterStat characterStat = new CharacterStat(name, job);
        getAvatarData().setCharacterStat(characterStat);
        characterStat.setGender(gender);
        characterStat.setSkin(skin);
        characterStat.setFace(items.length > 0 ? items[0] : 0);
        characterStat.setHair(items.length > 1 ? items[1] : 0);
        characterStat.setSubJob(curSelectedSubJob);

        questManager = new QuestManager(this);
        skills = new HashSet<>();
        friends = new HashSet<>();
        monsterBookInfo = new MonsterBookInfo(true);
        matrixSlots = new ArrayList<>();
        hyperRockFields = Arrays.asList(
                999999999,
                999999999,
                999999999,

                999999999,
                999999999,
                999999999,

                999999999,
                999999999,
                999999999,

                999999999,
                999999999,
                999999999,

                999999999
        );
        for (int i = 0; i < GameConstants.MAX_NODE_SLOTS; i++) {
            addMatrixSlot(new MatrixSlot(this, i)); // initialise MatrixSlots with appropriate Position)
        }
        potentials = new HashSet<>();
        ignoredItems = new HashSet<>();

        equippedInventory.setChr(this);
        equipInventory.setChr(this);
        consumeInventory.setChr(this);
        etcInventory.setChr(this);
        installInventory.setChr(this);
        cashInventory.setChr(this);
        account.setCoreAura(new CoreAura(this));
    }

    private void addMatrixSlot(MatrixSlot matrixSlot) {
        matrixSlots.add(matrixSlot);
    }

    public AvatarData getAvatarData() {
        return avatarData;
    }

    public Ranking getRanking() {
        return ranking;
    }

    public int getId() {
        return id;
    }

    public void setAvatarData(AvatarData avatarData) {
        this.avatarData = avatarData;
    }

    public void setRanking(Ranking ranking) {
        this.ranking = ranking;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getUserId() {
        return userId;
    }

    public Inventory getEquippedInventory() {
        return equippedInventory;
    }

    public void addItemToInventory(InvType type, Item item, boolean hasCorrectBagIndex) {
        addItemToInventory(type, item, hasCorrectBagIndex, false);
    }

    public void addItemToInventory(InvType type, Item item, boolean hasCorrectBagIndex, boolean byPet) {
        if (item == null) {
            return;
        }
        Inventory inventory = getInventoryByType(type);
        if (inventory == null || !canHold(item.getItemId(), item.getQuantity())) {
            throw new IllegalStateException("Cannot add item to a full inventory.");
        }
        ItemInfo ii = ItemData.getItemInfoByID(item.getItemId());
        int quantity = item.getQuantity();
        Item existingItem = inventory.getItemByItemIDAndStackable(item.getItemId());

        if (item.getItemId() == CustomConstants.PET_VAC) {
            setHasPetVac(true);
        }

        boolean rec = false;
        if (existingItem != null
                && existingItem.getInvType().isStackable(existingItem.getItemId())
                && existingItem.getQuantity() < ii.getSlotMax()
                && existingItem.getDateExpire().equals(item.getDateExpire())) {
            if (quantity + existingItem.getQuantity() > ii.getSlotMax()) {
                quantity = ii.getSlotMax() - existingItem.getQuantity();
                item.setQuantity(item.getQuantity() - quantity);
                rec = true;
            }
            existingItem.addQuantity(quantity);
            write(WvsContext.inventoryOperation(!byPet, false,
                    existingItem.isInBag() ? UpdateBagQuantity : UpdateQuantity, (short) existingItem.getBagIndex(), (byte) -1, 0, existingItem));
            if (rec) {
                addItemToInventory(item);
            }
        } else {
            if (!hasCorrectBagIndex) {
                item.setBagIndex(inventory.getFirstOpenSlot());
            }
            Item itemCopy = null;
            if (item.getInvType().isStackable(item.getItemId()) && ii != null && item.getQuantity() > ii.getSlotMax()) {
                itemCopy = item.deepCopy();
                quantity = quantity - ii.getSlotMax();
                itemCopy.setQuantity(quantity);
                item.setQuantity(ii.getSlotMax());
                rec = true;
            }
            inventory.addItem(item);
            if (ItemConstants.isSymbol(item.getItemId())) {
                var equip = (Equip) item;
                ((Equip) item).initSymbolStats(equip.getSymbolLevel(), equip.getSymbolExp(), getJob());
            }
            write(WvsContext.inventoryOperation(!byPet, false,
                    Add, (short) item.getBagIndex(), (byte) -1, 0, item));
            if (rec) {
                addItemToInventory(itemCopy);
            }
        }
        setBulletIDForAttack(calculateBulletIDForAttack());
    }

    public void addItemToInventory(Item item) {
        addItemToInventory(item.getInvType(), item, false);
    }

    public void setEquippedInventory(Inventory equippedInventory) {
        this.equippedInventory = equippedInventory;
        if (equippedInventory != null) {
            equippedInventory.setChr(this);
        }
    }

    public Inventory getEquipInventory() {
        return equipInventory;
    }

    public void setEquipInventory(Inventory equipInventory) {
        this.equipInventory = equipInventory;
        if (equipInventory != null) {
            equipInventory.setChr(this);
        }
    }

    public Inventory getConsumeInventory() {
        return consumeInventory;
    }

    public void setConsumeInventory(Inventory consumeInventory) {
        this.consumeInventory = consumeInventory;
        if (consumeInventory != null) {
            consumeInventory.setChr(this);
        }
    }

    public Inventory getEtcInventory() {
        return etcInventory;
    }

    public void setEtcInventory(Inventory etcInventory) {
        this.etcInventory = etcInventory;
        if (etcInventory != null) {
            etcInventory.setChr(this);
        }
    }

    public Inventory getInstallInventory() {
        return installInventory;
    }

    public void setInstallInventory(Inventory installInventory) {
        this.installInventory = installInventory;
        if (installInventory != null) {
            installInventory.setChr(this);
        }
    }

    public Inventory getCashInventory() {
        return cashInventory;
    }

    public void setCashInventory(Inventory cashInventory) {
        this.cashInventory = cashInventory;
        if (cashInventory != null) {
            cashInventory.setChr(this);
        }
    }

    public void setDecInventory(Inventory decInventory) {
        if (this.decInventory != null && decInventory == null) {
            // don't override with null
            return;
        }

        this.decInventory = decInventory;
        if (decInventory != null) {
            decInventory.setSlots(128);
            decInventory.setType(DEC);
            decInventory.setChr(this);
        }
    }

    public Inventory getDecInventory() {
        return decInventory;
    }

    public List<MatrixRecord> getSortedMatrixRecords() {
        return getMatrixRecords().stream()
                .sorted(Comparator.comparingLong(MatrixRecord::getId))
                .collect(Collectors.toList());
    }

    public List<MatrixSlot> getMatrixSlots() {
        if (matrixSlots == null) {
            matrixSlots = matrixSlotDao.byChar(this);
        }
        return matrixSlots;
    }

    public void setMatrixSlots(List<MatrixSlot> matrixSlots) {
        this.matrixSlots = matrixSlots;
    }

    public MatrixSlot getMatrixSlotByPosition(int pos) {
        return getMatrixSlots().stream().filter(ms -> ms.getPosition() == pos).findFirst().orElse(null);
    }

    public void resetMatrixSlotEnhancements() {
        for (int i = 0; i < getMatrixSlots().size(); i++) {
            MatrixSlot ms = getMatrixSlotByPosition(i);
            MatrixRecord mr = getMatrixRecordByPosition(i);
            if (mr != null) {
                mr.addSkillsToChar(this, true); // remove Skill
            }
            ms.setEnhancementLv(0);
            if (mr != null) {
                mr.addSkillsToChar(this, false); // add skill
            }
        }
    }

    public int getTotalMatrixSlotsEnhancements() {
        return getMatrixSlots().stream().mapToInt(MatrixSlot::getEnhancementLv).sum();
    }

    public int getMatrixPoints() {
        return getLevel() - 200;
    }

    public int getAvailableMatrixPoints() {
        return getMatrixPoints() - getTotalMatrixSlotsEnhancements();
    }

    public int getMaxMatrixSlots() {
        return (int) getMatrixSlots().stream().filter(ms -> (getLevel() >= GameConstants.REQ_LV_BY_MATRIX_SLOT_POS[ms.getPosition()] || ms.isUnlockedByPurchase())).count();
    }

    @Override
    public boolean equals(Object other) {
        if (!(other instanceof Char)) {
            return false;
        }
        Char chr = (Char) other;
        return chr.getId() == getId() && chr.getName().equals(getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, getName());
    }

    protected String getBlessingOfEmpress() {
        return blessingOfEmpress;
    }

    public void setBlessingOfEmpress(String blessingOfEmpress) {
        this.blessingOfEmpress = blessingOfEmpress;
    }

    protected String getBlessingOfFairy() {
        return blessingOfFairy;
    }

    public void setBlessingOfFairy(String blessingOfFairy) {
        this.blessingOfFairy = blessingOfFairy;
    }

    public void setCombatOrders(int combatOrders) {
        this.combatOrders = combatOrders;
    }

    public int getCombatOrders() {
        return combatOrders;
    }

    public QuestManager getQuestManager() {
        if (questManager.getChr() == null) {
            questManager.setChr(this);
        }
        return questManager;
    }

    public void setQuestManager(QuestManager questManager) {
        this.questManager = questManager;
    }

    public void setQuests(QuestManager questManager) {
        this.questManager = questManager;
    }

    public List<ItemPot> getItemPots() {
        return null;
    }

    public void setItemPots(List<ItemPot> itemPots) {
        this.itemPots = itemPots;
    }

    public List<Pet> getPets() {
        return pets;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }

    public List<FriendRecord> getFriendRecords() {
        return friendRecords;
    }

    public void setFriendRecords(List<FriendRecord> friendRecords) {
        this.friendRecords = friendRecords;
    }

    public long getMoney() {
        return getAvatarData().getCharacterStat().getMoney();
    }

    public List<ExpConsumeItem> getExpConsumeItems() {
        return expConsumeItems;
    }

    public void setExpConsumeItems(List<ExpConsumeItem> expConsumeItems) {
        this.expConsumeItems = expConsumeItems;
    }

    public List<MonsterBattleMobInfo> getMonsterBattleMobInfos() {
        return monsterBattleMobInfos;
    }

    public void setMonsterBattleMobInfos(List<MonsterBattleMobInfo> monsterBattleMobInfos) {
        this.monsterBattleMobInfos = monsterBattleMobInfos;
    }

    public MonsterBattleLadder getMonsterBattleLadder() {
        return monsterBattleLadder;
    }

    public void setMonsterBattleLadder(MonsterBattleLadder monsterBattleLadder) {
        this.monsterBattleLadder = monsterBattleLadder;
    }

    public MonsterBattleRankInfo getMonsterBattleRankInfo() {
        return monsterBattleRankInfo;
    }

    public void setMonsterBattleRankInfo(MonsterBattleRankInfo monsterBattleRankInfo) {
        this.monsterBattleRankInfo = monsterBattleRankInfo;
    }

    public List<Inventory> getInventories() {
        return new ArrayList<>(Arrays.asList(getEquippedInventory(), getEquipInventory(),
                getConsumeInventory(), getEtcInventory(), getInstallInventory(), getCashInventory(), getDecInventory()));
    }

    public Inventory getInventoryByType(InvType invType) {
        switch (invType) {
            case EQUIPPED:
                return getEquippedInventory();
            case EQUIP:
                return getEquipInventory();
            case CONSUME:
                return getConsumeInventory();
            case ETC:
                return getEtcInventory();
            case INSTALL:
                return getInstallInventory();
            case CASH:
                return getCashInventory();
            case DEC:
                return getDecInventory();
            default:
                return null;
        }
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public int getFieldID() {
        return (int) getAvatarData().getCharacterStat().getPosMap();
    }

    private void setFieldID(int fieldID) {
        getAvatarData().getCharacterStat().setPosMap(fieldID);
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public void setField(Field field) {
        this.field = field;
        setFieldID(field.getId());
    }

    public Field getField() {
        return field;
    }

    /**
     * Sets the job of this Char with a given id. Does nothing if the id is invalid.
     * If it is valid, will set this Char's job, add all Skills that the job should have by default,
     * and sends the info to the client.
     *
     * @param id
     */
    public void setJob(int id) {
        JobConstants.JobEnum job = JobConstants.JobEnum.getJobById((short) id);
        if (job == null) {
            return;
        }
        getAvatarData().getCharacterStat().setJob(id);
        Job handler = JobManager.getJobById((short) id, this);
        if (getJobHandler() == null || !handler.getClass().equals(getJobHandler().getClass())) {
            // only change handlers if the job path changes
            setJobHandler(handler);
            Events.onWarp(this, getField(), getField());
        } else {
            handler.stopTimers();
        }
        List<Skill> skills = SkillData.getSkillsByJob((short) id);
        if (job == JobConstants.JobEnum.ZERO_4) {
            // hack to add all non-4th job zero skills
            skills.addAll(SkillData.getSkillsByJob((short) JobConstants.JobEnum.ZERO.getJobId()));
            skills.addAll(SkillData.getSkillsByJob((short) JobConstants.JobEnum.ZERO_1.getJobId()));
            skills.addAll(SkillData.getSkillsByJob((short) JobConstants.JobEnum.ZERO_2.getJobId()));
            skills.addAll(SkillData.getSkillsByJob((short) JobConstants.JobEnum.ZERO_3.getJobId()));
        }
        skills.forEach(s -> addSkill(s, true));
        write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        setStatAndSendPacket(Stat.job, getJob());
        notifyChanges();
    }

    public short getJob() {
        return getAvatarData().getCharacterStat().getJob();
    }

    /**
     * Sets the SP to the current job level.
     *
     * @param num The new SP amount.
     */
    public void setSpToCurrentJob(int num) {
        if (JobConstants.isExtendSpJob(getJob())) {
            byte jobLevel = (byte) JobConstants.getJobLevel(getJob());
            getAvatarData().getCharacterStat().getExtendSP().setSpToJobLevel(jobLevel, num);
        } else {
            getAvatarData().getCharacterStat().setSp(num);
        }
    }

    /**
     * Sets the SP to the job level according to the current level.
     *
     * @param num The amount of SP to add
     */
    public void addSpToJobByCurrentLevel(int num) {
        CharacterStat cs = getAvatarData().getCharacterStat();
        if (JobConstants.isExtendSpJob(getJob())) {
            byte jobLevel = (byte) JobConstants.getJobLevelByCharLevel(getJob(), getSubJob(), getLevel());
            num += cs.getExtendSP().getSpByJobLevel(jobLevel);
            getAvatarData().getCharacterStat().getExtendSP().setSpToJobLevel(jobLevel, num);
        } else {
            num += cs.getSp();
            getAvatarData().getCharacterStat().setSp(num);
        }
    }

    public void addSpToJobByCurrentJob(int num) {
        byte jobLevel = (byte) JobConstants.getJobLevel(getJob());
        int currentSP = getAvatarData().getCharacterStat().getExtendSP().getSpByJobLevel(jobLevel);
        setSpToCurrentJob(currentSP + num);

        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.sp, getAvatarData().getCharacterStat().getExtendSP());
        write(WvsContext.statChanged(stats));
    }

    public Set<Skill> getSkills() {
        if (skills == null) {
            skills = skillDao.byChar(this);
        }
        return skills;
    }

    public void setSkills(Set<Skill> skills) {
        this.skills = skills;
    }

    /**
     * Adds a {@link Skill} to this Char. Changes the old Skill if the Char already has a Skill
     * with the same id. Removes the skill if the given skill's id is 0.
     *
     * @param skill The Skill this Char should get.
     */
    public void addSkill(Skill skill) {
        addSkill(skill, false);
    }

    /**
     * Adds a {@link Skill} to this Char. Changes the old Skill if the Char already has a Skill
     * with the same id. Removes the skill if the given skill's id is 0.
     *
     * @param skill                The Skill this Char should get.
     * @param addRegardlessOfLevel if this is true, the skill will not be removed from the char, even if the cur level
     *                             of the given skill is 0.
     */
    public void addSkill(Skill skill, boolean addRegardlessOfLevel) {
        if (getId() == 0) {
            log.warn("Did not add skill " + skill + ", as the current Char does not exist in the DB.");
            return;
        }

        if (!addRegardlessOfLevel && skill.getCurrentLevel() == 0 && skill.getMasterLevel() == 0) {
            removeSkill(skill.getSkillId());
            return;
        }

        boolean isPassive = SkillConstants.isPassiveSkill(skill.getSkillId());
        boolean isChanged;
        if (getSkills().stream().noneMatch(s -> s.getSkillId() == skill.getSkillId())) {
            getSkills().add(skill);
            isChanged = true;
        } else {
            Skill oldSkill = getSkill(skill.getSkillId());
            isChanged = oldSkill.getCurrentLevel() != skill.getCurrentLevel();
            if (isPassive && isChanged) {
                removeFromBaseStatCache(oldSkill);
            }
            oldSkill.setCurrentLevel(skill.getCurrentLevel());
            oldSkill.setMasterLevel(skill.getMasterLevel());
        }
        // Change cache accordingly
        if (isPassive && isChanged) {
            addToBaseStatCache(skill);
        }
    }

    public void addSkillAndSendPacket(Skill skill) {
        addSkill(skill);
        write(WvsContext.changeSkillRecordResult(skill));
    }

    /**
     * Removes a Skill from this Char.
     *
     * @param skillID the id of the skill that should be removed
     */
    public void removeSkill(int skillID) {
        Skill skill = Util.findWithPred(getSkills(), s -> s.getSkillId() == skillID);
        if (skill != null) {
            if (SkillConstants.isPassiveSkill(skillID)) {
                removeFromBaseStatCache(skill);
            }
            getSkills().remove(skill);
            skillDao.delete(skill);
        }
    }

    public void removeSkills(List<Skill> skills) {
        for (Skill skill : skills) {
            int skillId = skill.getSkillId();
            removeSkill(skillId);
            skill.setCurrentLevel(-1);
            skill.setMasterLevel(-1);
        }
        if (skills.size() > 0) {
            write(WvsContext.changeSkillRecordResult(skills));
        }
    }

    /**
     * Removes a Skill from this Char.
     * Sends change skill record to remove the skill from the client.
     *
     * @param skillID the id of the skill that should be removed
     */
    public void removeSkillAndSendPacket(int skillID) {
        Skill skill = getSkill(skillID);
        if (skill != null) {
            removeSkill(skillID);
            skill.setCurrentLevel(-1);
            skill.setMasterLevel(-1);
            write(WvsContext.changeSkillRecordResult(Collections.singletonList(skill), true, false, false, false));
        }
    }

    /**
     * Initializes the BaseStat cache, by going through all the needed passive stat changers.
     */
    public void initBaseStats() {
        getBaseStats().clear();
        Map<BaseStat, Long> stats = getBaseStats();
        stats.put(BaseStat.cr, 5L);
        stats.put(BaseStat.crDmg, 0L);
        stats.put(BaseStat.pdd, 9L);
        stats.put(BaseStat.mdd, 9L);
        stats.put(BaseStat.acc, 11L);
        stats.put(BaseStat.eva, 8L);
        stats.put(BaseStat.buffTimeR, 100L);
        stats.put(BaseStat.summonTimeR, 100L);
        stats.put(BaseStat.dropR, 100L);
        stats.put(BaseStat.mesoR, 100L);
        stats.put(BaseStat.expR, 100L);
        stats.put(BaseStat.costmpR, 100L);
        stats.put(BaseStat.costForceR, 100L);
        stats.put(BaseStat.runeBuffTimerR, 100L);
        stats.put(BaseStat.comboKillOrbExpR, 100L);
        stats.put(BaseStat.dotBuffTimeR, 100L);
        getSkills().stream().filter(skill -> SkillConstants.isPassiveSkill_NoPsdSkillsCheck(skill.getSkillId())).
                forEach(this::addToBaseStatCache);

        if (getGuild() != null) {
            getGuild().getSkills().values().stream().filter(skill -> SkillConstants.isPassiveSkill_NoPsdSkillsCheck(skill.getSkillID())).
                    forEach(this::addToBaseStatCache);
        }

        getEquippedInventory().recalcBaseStats(this);
    }

    public void addToBaseStatCache(Skill skill) {
        addToBaseStatCache(skill.getSkillId(), skill.getCurrentLevel());
    }

    public void addToBaseStatCache(GuildSkill guildSkill) {
        addToBaseStatCache(guildSkill.getSkillID(), guildSkill.getLevel());
    }

    /**
     * Adds a Skill's info to the current base stat cache.
     *
     * @param skillId Id of the skill to add
     */
    private void addToBaseStatCache(int skillId, int slv) {
        if (SkillConstants.isNotIncreasedByRate(skillId)) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si == null) {
            log.warn("[addToBaseStatCache] Could not find skill with id " + skillId);
            return;
        }

        if (SkillConstants.isPassiveSkill(skillId)) {
            Map<BaseStat, Integer> stats = si.getBaseStatValues(this, slv);
            stats.forEach(this::addBaseStat);
        }

        if (SkillConstants.isMultilateral(skillId)) {
            updateMultilateral(si, slv);
        }
    }

    private void updateMultilateral(SkillInfo si, int slv) {
        var str = getStat(Stat.str);
        var dex = getStat(Stat.dex);
        var luk = getStat(Stat.luk);

        var stance = si.getValue(SkillStat.y, slv); // also SkillStat for EleResist
        var abnRes = si.getValue(SkillStat.z, slv);
        var evaR = si.getValue(SkillStat.u, slv);
        var reqStat = si.getValue(SkillStat.x, slv);
        var addedHpMpRate = si.getValue(SkillStat.s, slv);
        var damage = si.getValue(SkillStat.w, slv);

        if (str >= reqStat) {
            addBaseStat(BaseStat.stance, stance);
        }
        if (dex >= reqStat) {
            addBaseStat(BaseStat.asr, abnRes);
            addBaseStat(BaseStat.ter, stance);
        }
        if (luk >= reqStat) {
            addBaseStat(BaseStat.evaR, evaR);
        }
        if (str >= reqStat && dex >= reqStat && luk >= reqStat) {
            if (addedHpMpRate > 0) {
                addBaseStat(BaseStat.mhpR, addedHpMpRate);
                addBaseStat(BaseStat.mmpR, addedHpMpRate);
            }
            if (damage > 0) {
                addBaseStat(BaseStat.damR, damage); // Multilateral I and VI give Dmg instead of HP/MP
            }
        }
    }

    /**
     * Adds the bonus for the specified WeaponType of the psdWT Skill.
     *
     * @param skill The skill's bonuses to add
     * @param wt    The skill's weapon Type bonuses to check for.
     */
    public void addPsdWTToBaseStatCache(Skill skill, WeaponType wt) {
        if (SkillConstants.isNotIncreasedByRate(skill.getSkillId())) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        Map<SkillStat, Double> ssMap = si.getSkillStatsByWT(wt);
        Map<BaseStat, Integer> stats = new HashMap<>();
        ssMap.forEach((k, v) -> {
            {
                Tuple<BaseStat, Integer> bs = si.getBaseStatValue(k, this, v.intValue());
                stats.put(bs.getLeft(), bs.getRight());
            }
        });
        stats.forEach(this::addBaseStat);
    }

    public void removeFromBaseStatCache(Skill skill) {
        removeFromBaseStatCache(skill.getSkillId(), skill.getCurrentLevel());
    }

    public void removeFromBaseStatCache(GuildSkill guildSkill) {
        removeFromBaseStatCache(guildSkill.getSkillID(), guildSkill.getLevel());
    }

    /**
     * Removes a Skill's info from the current base stat cache.
     *
     * @param skillId The skill to remove
     */
    private void removeFromBaseStatCache(int skillId, int slv) {
        if (SkillConstants.isNotIncreasedByRate(skillId)) {
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si == null) {
            return;
        }

        Map<BaseStat, Integer> stats = si.getBaseStatValues(this, slv);
        stats.forEach(this::removeBaseStat);
    }

    /**
     * Returns whether or not this Char has a {@link Skill} with a given id.
     *
     * @param id The id of the Skill.
     * @return Whether or not this Char has a Skill with the given id.
     */
    public boolean hasSkill(int id) {
        return getSkills().stream().anyMatch(s -> s.getSkillId() == id) && getSkill(id, false).getCurrentLevel() > 0;
    }

    public List<Skill> getPsdWTSkills() {
        return getSkills().stream()
                .filter(
                        s -> SkillData.getSkillInfoById(s.getSkillId()) != null
                                && SkillData.getSkillInfoById(s.getSkillId()).isPsdWTSkill())
                .collect(Collectors.toList());
    }

    /**
     * Gets a {@link Skill} of this Char with a given id.
     *
     * @param id The id of the requested Skill.
     * @return The Skill corresponding to the given id of this Char, or null if there is none.
     */
    public Skill getSkill(int id) {
        // TODO: grab original if it's a "linked skill", like WH's 2 different Wild Arrow Blast
        return getSkill(id, false);
    }

    /**
     * Gets a {@link Skill} with a given ID. If <code>createIfNull</code> is true, creates the Skill
     * if it doesn't exist yet.
     * If it is false, will return null if this Char does not have the given Skill.
     *
     * @param id           The id of the requested Skill.
     * @param createIfNull Whether or not this method should create the Skill if it doesn't exist.
     * @return The Skill that the Char has, or <code>null</code> if there is no such skill and
     * <code>createIfNull</code> is false.
     */
    public Skill getSkill(int id, boolean createIfNull) {
        for (Skill s : getSkills()) {
            if (s.getSkillId() == id) {
                return s;
            }
        }
        return createIfNull ? createAndReturnSkill(id) : null;
    }

    public int getSkillLevel(int skillID) {
        skillID = SkillConstants.getOriginalSkillForSlv(skillID);

        Skill skill = getSkill(skillID);
        if (skill != null) {
            return skill.getCurrentLevel();
        }
        return 0;
    }

    /**
     * Gets the given SkillStat's Value.
     *
     * @param skillStat SkillStat to get the value from.
     * @param skillId   Specified skillId to grab the SkillInfo from.
     * @return value of the given SkillStat of the given Skill Id
     */
    public int getSkillStatValue(SkillStat skillStat, int skillId) {
        if (hasSkill(skillId)) {
            SkillInfo si = SkillData.getSkillInfoById(skillId);
            return si.getValue(skillStat, getSkillLevel(skillId));
        }
        return 0;
    }

    public double getSkillStatValueD(SkillStat skillStat, int skillId) {
        if (hasSkill(skillId)) {
            SkillInfo si = SkillData.getSkillInfoById(skillId);
            return si.getValueD(skillStat, getSkillLevel(skillId));
        }
        return 0;
    }

    public int getRemainRecipeUseCount(int recipeID) {
        if (SkillConstants.isMakingSkillRecipe(recipeID)) {
            return getSkillLevel(recipeID);
        }
        return 0;
    }

    /**
     * Creates a new {@link Skill} for this Char.
     *
     * @param id The skillID of the Skill to be created.
     * @return The new Skill.
     */
    private Skill createAndReturnSkill(int id) {
        Skill skill = SkillData.getSkillDeepCopyById(id);
        addSkill(skill);
        return skill;
    }

    public void setStat(Stat charStat, int amount) {
        CharacterStat cs = getAvatarData().getCharacterStat();
        int maxTraitExp = Math.max(0, Math.min(amount, GameConstants.MAX_TRAIT_EXP));
        switch (charStat) {
            case str:
                cs.setStr(amount);
                break;
            case dex:
                cs.setDex(amount);
                break;
            case inte:
                cs.setInt(amount);
                break;
            case luk:
                cs.setLuk(amount);
                break;
            case hp:
                cs.setHp(amount);
                break;
            case mhp:
                cs.setMaxHp(amount);
                if (JobConstants.isDemonAvenger(getJob())) {
                    ((DemonAvenger) getJobHandler()).sendHpUpdate();
                }
                break;
            case mp:
                cs.setMp(amount);
                break;
            case mmp:
                cs.setMaxMp(amount);
                break;
            case ap:
                cs.setAp(amount);
                break;
            case level:
                cs.setLevel(amount);
                notifyChanges();
                break;
            case skin:
                cs.setSkin(amount);
                break;
            case face:
                cs.setFace(amount);
                break;
            case hair:
                cs.setHair(amount);
                break;
            case pop:
                cs.setPop(amount);
                break;
            case charismaEXP:
                cs.setCharismaExp(maxTraitExp);
                break;
            case charmEXP:
                cs.setCharmExp(maxTraitExp);
                break;
            case craftEXP:
                cs.setCraftExp(maxTraitExp);
                break;
            case insightEXP:
                cs.setInsightExp(maxTraitExp);
                break;
            case senseEXP:
                cs.setSenseExp(maxTraitExp);
                break;
            case willEXP:
                cs.setWillExp(maxTraitExp);
                break;
            case fatigue:
                cs.setFatigue(amount);
                break;
            case sp:
                cs.setSp(amount);
                break;
        }
    }

    /**
     * Notifies all groups (such as party, guild) about all your changes, such as level and job.
     */
    private void notifyChanges() {
        Party party = getParty();
        if (party != null) {
            party.updatePartyMemberInfoByChr(this);
            party.broadcastMigration();
        }
        Guild guild = getGuild();
        if (guild != null) {
            GuildMember gm = guild.getMemberByCharID(getId());
            if (gm != null) {
                gm.setLevel(getLevel());
                gm.setJob(getJob());
                guild.broadcast(WvsContext.guildResult(GuildResult.changeLevelOrJob(guild, gm)));
                Alliance ally = guild.getAlliance();
                if (ally != null) {
                    ally.broadcast(WvsContext.allianceResult(AllianceResult.changeLevelOrJob(ally, guild, gm)));
                }
            } else {
                setGuild(null);
            }
        }
    }

    /**
     * Gets a raw Stat from this Char, unaffected by things such as equips and skills.
     *
     * @param charStat The requested Stat
     * @return the requested stat's value
     */
    public int getStat(Stat charStat) {
        CharacterStat cs = getAvatarData().getCharacterStat();
        switch (charStat) {
            case str:
                return cs.getStr();
            case dex:
                return cs.getDex();
            case inte:
                return cs.getInt();
            case luk:
                return cs.getLuk();
            case hp:
                return cs.getHp();
            case mhp:
                return cs.getMaxHp();
            case mp:
                return cs.getMp();
            case mmp:
                return cs.getMaxMp();
            case ap:
                return cs.getAp();
            case level:
                return cs.getLevel();
            case skin:
                return cs.getSkin();
            case face:
                return cs.getFace();
            case hair:
                return cs.getHair();
            case pop:
                return cs.getPop();
            case charismaEXP:
                return cs.getCharismaExp();
            case charmEXP:
                return cs.getCharmExp();
            case craftEXP:
                return cs.getCraftExp();
            case insightEXP:
                return cs.getInsightExp();
            case senseEXP:
                return cs.getSenseExp();
            case willEXP:
                return cs.getWillExp();
            case fatigue:
                return cs.getFatigue();
            case job:
                return cs.getJob();
            case sp:
                return cs.getSp();
        }
        return -1;
    }

    /**
     * Adds a Stat to this Char.
     *
     * @param charStat which Stat to add
     * @param amount   the amount of Stat to add
     */
    public void addStat(Stat charStat, int amount) {
        setStat(charStat, getStat(charStat) + amount);
    }

    /**
     * Adds a Stat to this Char, and immediately sends the packet to the client notifying the change.
     *
     * @param charStat which Stat to change
     * @param amount   the amount of Stat to add
     */
    public void addStatAndSendPacket(Stat charStat, int amount) {
        setStatAndSendPacket(charStat, getStat(charStat) + amount);
    }

    /**
     * Adds a Stat to this Char, and immediately sends the packet to the client notifying the change.
     *
     * @param charStat which Stat to change
     * @param value    the value of Stat to set
     */
    public void setStatAndSendPacket(Stat charStat, int value) {
        setStat(charStat, value);
        Map<Stat, Object> stats = new HashMap<>();
        switch (charStat) {
            case skin:
            case fatigue:
                stats.put(charStat, (byte) getStat(charStat));
                break;
            case str:
            case dex:
            case inte:
            case luk:
            case ap:
            case job:
            case sp:
                stats.put(charStat, (short) getStat(charStat));
                break;
            case hp:
            case mhp:
            case mp:
            case mmp:
            case face:
            case hair:
            case pop:
            case charismaEXP:
            case insightEXP:
            case willEXP:
            case craftEXP:
            case senseEXP:
            case charmEXP:
            case eventPoints:
            case level:
                stats.put(charStat, getStat(charStat));
                break;
        }
        write(WvsContext.statChanged(stats, getSubJob()));
    }

    /**
     * Adds a certain amount of money to the current character. Also sends the
     * packet to update the client's state.
     *
     * @param amount The amount of money to add. May be negative.
     */
    public void addMoney(long amount) {
        addMoney(amount, false);
    }

    public void addMoney(long amount, boolean exclRequest) {
        CharacterStat cs = getAvatarData().getCharacterStat();
        long money = cs.getMoney();
        long newMoney = money + amount;
        if (newMoney >= 0) {
            newMoney = Math.min(GameConstants.MAX_MONEY, newMoney);
            Map<Stat, Object> stats = new HashMap<>();
            cs.setMoney(newMoney);
            stats.put(Stat.money, newMoney);
            write(WvsContext.statChanged(stats, exclRequest));
        }
    }

    /**
     * The same as addMoney, but negates the amount.
     *
     * @param amount The money to deduct. May be negative.
     */
    public void deductMoney(long amount) {
        addMoney(-amount);
    }

    public Position getOldPosition() {
        return oldPosition;
    }

    public void setOldPosition(Position oldPosition) {
        this.oldPosition = oldPosition;
    }

    public void setMoveAction(byte moveAction) {
        this.moveAction = moveAction;
    }

    public byte getMoveAction() {
        return moveAction;
    }

    /**
     * Sends a message to this Char through the ScriptProgress packet.
     *
     * @param msg The message to display.
     */
    public void chatScriptMessage(String msg) {
        write(UserPacket.scriptProgressMessage(msg));
    }

    /**
     * Sends a message to this Char with a default colour {@link ChatType#SystemNotice}.
     *
     * @param msg The message to display.
     */
    public void chatMessage(String msg) {
        chatMessage(SystemNotice, msg);
    }

    /**
     * Sends a formatted message to this Char with a default color {@link ChatType#SystemNotice}.
     *
     * @param msg  The message to display
     * @param args The format arguments
     */
    public void chatMessage(String msg, Object... args) {
        chatMessage(SystemNotice, msg, args);
    }

    /**
     * Sends a message to this Char with a given {@link ChatType colour}.
     *
     * @param clr The Colour this message should be in.
     * @param msg The message to display.
     */
    public void chatMessage(ChatType clr, String msg) {
        if (isDebugMode() || clr != ChatType.Mob) {
            // As most debug info is printed in ChatType  Mob,
            // this is a hacky way to turn 'debug' mode  on/off
            write(UserLocal.chatMsg(clr, msg));
        }
    }

    /**
     * Sends a formatted message to this Char with a given {@link ChatType colour}.
     *
     * @param clr  The Colour this message should be in.
     * @param msg  The message to display.
     * @param args The format arguments
     */
    public void chatMessage(ChatType clr, String msg, Object... args) {
        if (isDebugMode() || clr != ChatType.Mob) {
            // As most debug info is printed in ChatType  Mob,
            // this is a hacky way to turn 'debug' mode  on/off
            write(UserLocal.chatMsg(clr, String.format(msg, args)));
        }
    }

    public void boxMessage(String msg) {
        write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage(msg)));
    }

    public void unequip(Item item) {
        unequip(item, false);
    }

    /**
     * Unequips an {@link Item}. Ensures that the hairEquips and both inventories get updated.
     *
     * @param item The Item to equip.
     */
    public void unequip(Item item, boolean bySwap) {
        var equip = (Equip) item;
        int itemID = item.getItemId();
        var toInv = equip.isCash() ? DEC : EQUIP;

        if (getInventoryByType(toInv).isFull()) {
            throw new InvalidParameterException("Trying to unequip an item with a full inventory");
        }

        getInventoryByType(EQUIPPED).removeItem(item, false);
        getInventoryByType(toInv).addItem(item);

        int pos = item.getBagIndex();
        unequipAvatarLookLogic((Equip) item, pos);


        if (getTemporaryStatManager().hasStat(SoulMP) && ItemConstants.isWeapon(item.getItemId())) {
            getTemporaryStatManager().removeStat(SoulMP);
            getTemporaryStatManager().removeStat(FullSoulMP);
            getTemporaryStatManager().sendResetStatPacket();
        }

        List<Skill> skills = new ArrayList<>();
        for (ItemSkill itemSkill : ItemData.getEquipInfoById(item.getItemId()).getItemSkillsByEquipLv(equip.getItemLevel())) {
            Skill skill = getSkill(itemSkill.getSkill());
            removeSkill(itemSkill.getSkill());
            skill.setCurrentLevel(-1); // workaround to remove skill from window without a cc
            skills.add(skill);

            getTemporaryStatManager().removeStatsBySkill(itemSkill.getSkill());
        }

        if (skills.size() > 0) {
            write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        }

        int equippedSummonSkill = ItemConstants.getEquippedSummonSkillItem(item.getItemId(), getJob());
        if (equippedSummonSkill != 0) {
            getField().removeSummon(equippedSummonSkill, getId());

            getTemporaryStatManager().removeStatsBySkill(equippedSummonSkill);
            getTemporaryStatManager().removeStatsBySkill(getTemporaryStatManager().getOption(RepeatEffect).rOption);
        }

        if (equip.getSoulOptionId() > 0) {
            int soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(((Equip) item).getSoulOptionId());
            if (hasSkill(soulSkillID)) {
                removeSkillAndSendPacket(soulSkillID);
            }
        }

        equip.updateDecentSkills(this, false);

        if (!bySwap && JobConstants.isDemonAvenger(getJob())) {
            ((DemonAvenger) getJobHandler()).sendHpUpdate(); // if by swap, wait for Char::equip to call it. and update after the new equip is equipped
        }

        if (ItemConstants.isAndroid(itemID) || ItemConstants.isMechanicalHeart(itemID)) {
            if (getAndroid() != null) {
                getField().removeLife(getAndroid());
            }
            setAndroid(null);
        }

        if (!bySwap) { // if by swap, wait for Char::equip to call it. and update after the new equip is equipped
            getEquippedInventory().recalcBaseStats(this);

            capHpMpToMax();
        }
    }

    /**
     * Equips an {@link Item}. Ensures that the hairEquips and both inventories get updated.
     *
     * @param item The Item to equip.
     */
    public boolean equip(Item item, int newPos) {
        Equip equip = (Equip) item;
        int itemID = equip.getItemId();

        if (equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            return false;
        }

        if (equip.isEquipTradeBlock()) {
            equip.setTradeBlock(true);
            equip.setEquipTradeBlock(false);
            equip.setEquippedDate(FileTime.currentTime());
            equip.addAttribute(EquipAttribute.Untradable);
        }

        getInventoryByType(equip.isCash() ? DEC : EQUIP).removeItem(item, false);
        getInventoryByType(EQUIPPED).addItem(item);

        item.setBagIndex(-newPos);

        equipAvatarLookLogic(equip, newPos); // Change Avatar Look

        if (!equip.hasAttribute(EquipAttribute.NoNonCombatStatGain) && equip.getInfo().getCharmEXP() != 0) {
            addStatAndSendPacket(Stat.charmEXP, equip.getInfo().getCharmEXP());
            equip.addAttribute(EquipAttribute.NoNonCombatStatGain);
        }

        List<Skill> skills = new ArrayList<>();
        var ei = ItemData.getEquipInfoById(equip.getItemId());
        for (ItemSkill itemSkill : ei.getItemSkillsByEquipLv(equip.getItemLevel())) {
            Skill skill = SkillData.getSkillDeepCopyById(itemSkill.getSkill());
            int slv = itemSkill.getSlv();

            if (skill != null) {
                skill.setCurrentLevel(slv);
                skills.add(skill);
                addSkill(skill);
            }
        }

        if (skills.size() > 0) {
            write(WvsContext.changeSkillRecordResult(skills, true, false, false, false));
        }

        int equippedSummonSkill = ItemConstants.getEquippedSummonSkillItem(equip.getItemId(), getJob());
        if (equippedSummonSkill != 0) {
            getJobHandler().handleSkill(this, getTemporaryStatManager(), equippedSummonSkill, (byte) 1, null, new SkillUseInfo());
        }

        initSoulMP();

        if (equip.getSoulOptionId() > 0) {
            var soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(equip.getSoulOptionId());
            var soulType = SoulCollectionConstants.getBossSoulTypeBySoulId(equip.getSoulOptionId());
            var soulSkillLv = 1;
            if (soulType != null) {
                soulSkillLv = SoulCollectionModule.getSoulSkillLevelBySoulType(this, soulType);
            }

            addSkill(soulSkillID, soulSkillLv, 2);
        }

        equip.updateDecentSkills(this, true);

        if (JobConstants.isDemonAvenger(getJob())) {
            ((DemonAvenger) getJobHandler()).sendHpUpdate();
        }

        // check android status
        if (ItemConstants.isAndroid(itemID) || ItemConstants.isMechanicalHeart(itemID)) {
            initAndroid(true);
            if (getAndroid() != null) {
                getField().spawnLife(getAndroid(), null);
            }
        }

        getEquippedInventory().recalcBaseStats(this);

        capHpMpToMax();
        return true;
    }

    public void unequipAvatarLookLogic(Equip equip, int pos) {
        AvatarLook al = getAvatarData().getAvatarLook();
        boolean isCash = equip.isCash();
        int bodyPartVal = Math.abs(pos);
        int itemId = equip.getItemId();
        int anvilId = equip.getAnvilId() <= 0 ? 0 : ItemConstants.getItemIdFromAnvilIdAndOriginId(itemId, equip.getAnvilId());

        // Update AvatarLook
        if (JobConstants.isZero(getJob())) {
            unequipZeroAvatarLookLogic(equip, pos, al, isCash, bodyPartVal, itemId);
        } else {
            al.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos));
        }

        // Broadcast Change
        broadcastRemoteAvatarModified();
    }

    private void unequipZeroAvatarLookLogic(Equip equip, int pos, AvatarLook al, boolean isCash, int bodyPartVal, int itemId) {
        AvatarLook zeroal = getAvatarData().getZeroAvatarLook();
        int anvilId = equip.getAnvilId() <= 0 ? 0 : ItemConstants.getItemIdFromAnvilIdAndOriginId(itemId, equip.getAnvilId());

        if (ItemConstants.isLazuli(itemId)) { // Alpha Weapon
            al.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, false));
        } else if (ItemConstants.isLapis(itemId)) { // Beta Weapon
            zeroal.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, true));

        } else { // Other cases

            if (isCash) {
                if (bodyPartVal > BodyPart.ZeroBase.getVal() && bodyPartVal < BodyPart.ZeroEnd.getVal()) { // Unequipped from Beta's Cash Layout
                    zeroal.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, true));
                } else { // Unequipped from Alpha's Cash Layout
                    al.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, false));
                }

            } else { // Non-Cash Items are shared
                al.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, false));
                zeroal.removeItem(itemId, anvilId, isCash, getOverrideItemId(equip, pos, true));
            }
        }
    }

    public void equipAvatarLookLogic(Equip equip, int newPos) {
        AvatarLook al = getAvatarData().getAvatarLook();
        boolean isCash = equip.isCash();
        int bodyPartVal = Math.abs(newPos);
        int itemId = equip.getItemId();
        int anvilId = equip.getAnvilId() <= 0 ? 0 : ItemConstants.getItemIdFromAnvilIdAndOriginId(itemId, equip.getAnvilId());

        // Update AvatarLook
        if (bodyPartVal < BodyPart.APBase.getVal() || bodyPartVal > BodyPart.APEnd.getVal()) {
            // only add if not part of your own body
            if (JobConstants.isZero(getJob())) {
                equipZeroAvatarLookLogic(equip, newPos, al, isCash, bodyPartVal, itemId);
            } else {
                al.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos));
            }
        }

        // Broadcast Change
        if (getField() != null) {
            broadcastRemoteAvatarModified();
        }
    }

    private void equipZeroAvatarLookLogic(Equip equip, int newPos, AvatarLook al, boolean isCash, int bodyPartVal, int itemId) {
        AvatarLook zeroal = getAvatarData().getZeroAvatarLook();
        int anvilId = equip.getAnvilId() <= 0 ? 0 : ItemConstants.getItemIdFromAnvilIdAndOriginId(itemId, equip.getAnvilId());

        if (ItemConstants.isLazuli(itemId)) { // Alpha
            al.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, false));
        } else if (ItemConstants.isLapis(itemId)) { // Beta
            zeroal.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, true));

        } else { // Other cases

            if (isCash) {
                if (bodyPartVal > BodyPart.ZeroBase.getVal() && bodyPartVal < BodyPart.ZeroEnd.getVal()) { // Equipped on Beta's Cash Layout
                    zeroal.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, true));
                } else { // Equipped on Alpha's Cash Layout
                    al.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, false));
                }

            } else { // Non-Cash Items are shared
                al.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, false));
                zeroal.addItem(itemId, anvilId, isCash, getOverrideItemId(equip, newPos, true));
            }
        }
    }

    public int getOverrideItemId(Equip equip, int newPos) {
        return getOverrideItemId(equip, newPos, false);
    }

    public int getOverrideItemId(Equip equip, int newPos, boolean beta) {
        boolean isCash = equip.isCash();
        Inventory inv = getEquippedInventory();
        int bodyPartVal = Math.abs(newPos);
        BodyPart bp = BodyPart.getByVal(bodyPartVal);

        if (bp == null) {
            log.error("Could not find a BodyPart by value = " + bodyPartVal);
            return -1;
        }

        Equip overrideItem;
        if (JobConstants.isZero(getJob()) && beta) {
            if (isCash) {
                BodyPart betaBodyPart = bp.getBetaBodyPart();
                if (betaBodyPart == null) {
                    log.error("Found no BodyPart for Beta CashBodyPart " + bodyPartVal);
                    return -1;
                }
                overrideItem = (Equip) inv.getItemBySlot(betaBodyPart.getVal());

            } else {
                BodyPart betaCashBodyPart = bp.getBetaCashBodyPart();
                if (betaCashBodyPart == null) {
                    log.error("Found no Beta CashBodyPart for BodyPart " + bodyPartVal);
                    return -1;
                }
                overrideItem = (Equip) inv.getItemBySlot(bp.getBetaCashBodyPart().getVal());
            }

        } else {
            // get corresponding cash item
            if (isCash) {
                overrideItem = (Equip) inv.getItemBySlot(bodyPartVal - 100);
            } else {
                overrideItem = (Equip) inv.getItemBySlot(bodyPartVal + 100);
            }
        }

        return overrideItem == null ? -1 : overrideItem.getItemId();
    }

    public boolean hasEquipEquipped(int itemId) {
        return getEquippedInventory().containsItem(itemId);
    }

    public TemporaryStatManager getTemporaryStatManager() {
        return temporaryStatManager;
    }

    public void setTemporaryStatManager(TemporaryStatManager temporaryStatManager) {
        this.temporaryStatManager = temporaryStatManager;
    }

    public GachaponManager getGachaponManager() {
        return gachaponManager;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setJobHandler(Job jobHandler) {
        this.jobHandler = jobHandler;
    }

    public Job getJobHandler() {
        return jobHandler;
    }

    public List<FuncKeyMap> getFuncKeyMap() {
        if (funcKeyMap == null) {
            funcKeyMap = funcKeyMapDao.byChar(this);
        }

        return funcKeyMap;
    }

    public void setFuncKeyMap(List<FuncKeyMap> funcKeyMap) {
        this.funcKeyMap = funcKeyMap;
    }

    /**
     * Creates a {@link Rect} with regard to this character. Adds all values to this Char's
     * position. Except bottom, that's always 0 & top is bottom + top.
     *
     * @param rect The rectangle to use.
     * @return The new rectangle.
     */
    public Rect getRectAround(Rect rect) {
        int x = getPosition().getX();
        int y = getPosition().getY();
        return new Rect(x + rect.getLeft(), y + rect.getTop(), x + rect.getRight(), y + rect.getBottom());
    }

    /**
     * Returns the Equip equipped at a certain {@link BodyPart}.
     *
     * @param bodyPart The requested bodyPart.
     * @return The Equip corresponding to <code>bodyPart</code>. Null if there is none.
     */
    public Item getEquippedItemByBodyPart(BodyPart bodyPart) {
        List<Item> items = getEquippedInventory().getItemsByBodyPart(bodyPart);
        return items.size() > 0 ? items.get(0) : null;
    }

    public boolean isLeft() {
        return moveAction > 0 && (moveAction % 2) == 1;
    }

    public MarriageRecord getMarriageRecord() {
        return marriageRecord;
    }

    public void setMarriageRecord(MarriageRecord marriageRecord) {
        this.marriageRecord = marriageRecord;
    }

    /**
     * Returns a {@link Field} based on the current {@link FieldInstanceType} of this Char (channel,
     * expedition, party or solo).
     *
     * @return The Field corresponding to the current FieldInstanceType.
     */
    public Field getOrCreateFieldByCurrentInstanceType(int fieldID) {
        Field res = null;
        if (getInstance() == null) {
            res = getClient().getChannelInstance().getField(fieldID);
        } else {
            res = getInstance().getField(fieldID);
            res.setRuneStone(null);
        }
        return res;
    }

    /**
     * Warps this Char to a given field at the starting portal.
     *
     * @param fieldId the ID of the field to warp to
     */
    public void warp(int fieldId) {
        warp(getOrCreateFieldByCurrentInstanceType(fieldId));
    }

    /**
     * Warps this Char to a given field at the given portal. If the portal doesn't exist, takes the starting portal.
     *
     * @param fieldId  the ID of the field to warp to
     * @param portalId the ID of the portal where the Char should spawn
     */
    public void warp(int fieldId, int portalId) {
        Field field = getOrCreateFieldByCurrentInstanceType(fieldId);
        if (field == null && getInstance() == null) {
            field = getOrCreateFieldByCurrentInstanceType(100000000);
        }
        Portal portal = field.getInfo().getPortalByID(portalId);
        if (portal == null) {
            portal = field.getInfo().getDefaultPortal();
        }
        warp(field, portal);
    }

    /**
     * Warps this character to a given field, at the starting position.
     * See {@link #warp(Field, Portal) warp}.
     *
     * @param toField The field to warp to.
     */
    public void warp(Field toField) {
        warp(toField, toField.getInfo().getPortalByName("sp"), false);
    }

    /**
     * Warps this Char to a given {@link Field}, with the Field's "sp" portal as spawn position.
     *
     * @param toField       The Field to warp to.
     * @param characterData Whether or not the character data should be encoded.
     */
    public void warp(Field toField, boolean characterData) {
        if (toField == null) {
            toField = getOrCreateFieldByCurrentInstanceType(100000000);
        }
        warp(toField, toField.getInfo().getPortalByName("sp"), characterData);
    }

    /**
     * Warps this Char to a given {@link Field} and {@link Portal}. Will not include character data.
     *
     * @param toField  The Field to warp to.
     * @param toPortal The Portal to spawn at.
     */
    public void warp(Field toField, Portal toPortal) {
        warp(toField, toPortal, false);
    }

    /**
     * Warps this character to a given field, at a given portal.
     * Ensures that the previous map does not contain this Char anymore, and that the new field
     * does.
     * Ensures that all Lifes are immediately spawned for the new player.
     *
     * @param toField The {@link Field} to warp to.
     * @param portal  The {@link Portal} where to spawn at.
     */
    public void warp(Field toField, Portal portal, boolean characterData) {
        if (portal != null) {
            getAvatarData().getCharacterStat().setPortal(portal.getId());
        } else {
            getAvatarData().getCharacterStat().setPortal(0);
        }
        Field currentField = getField();
        TemporaryStatManager tsm = getTemporaryStatManager();
        if (toField == null) {
            return;
        }

        if (getMiniRoom() != null) {
            getMiniRoom().charLeave(this, RoomLeaveType.LeftRoom);
        }

        // getField() is old field


        Set<Life> removedLifesToTransfer = new HashSet<>();
        if (currentField != null) {
            removedLifesToTransfer = removeLifesFromCurrentField();

            toField = getChannelFieldIfFieldIsNeverInstanced(toField);
            removeFromCurrentFieldAndCheckForInstance();
        }
        if (getTransferLifes() != null) {
            removedLifesToTransfer.addAll(getTransferLifes());
            setTransferLifes(null);
        }


        initCharInNewField(toField, portal, characterData);
        // getField() is new field

        write(WvsContext.firstEnterReward(getFirstEnterRewards(), FirstEnterRewardPacketType.Load_Items, 0));

        setLastFieldSwitchTime();
        removedLifesToTransfer.forEach(life -> life.reenterFieldAfterWarp(this));

        showProperUI(currentField != null ? currentField.getId() : -1, toField.getId());

        if (characterData) {
            initCharData();
        }

        toField.spawnLifesForChar(this);
        if (isHidden()) {
            write(FieldPacket.adminResult(isHidden()));
        }

        clearAndReinitForceAtoms();

        Events.onWarp(this, currentField, getField());

        for (int skill : Job.REMOVE_ON_WARP) {
            if (tsm.hasStatBySkillId(skill)) {
                tsm.removeStatsBySkill(skill);
            }
        }

        notifyChanges();

        if (getDeathCount() > 0) {
            write(UserLocal.deathCountInfo(getDeathCount()));
        }

        if (field.getEliteState() == EliteState.EliteBoss) {
            write(FieldPacket.eliteState(EliteState.EliteBoss, true, GameConstants.ELITE_BOSS_BGM, null, null, true));
        }

        List<QuickMoveInfo> availableQuickmoves;
        var instance = getInstance();
        if (instance == null) {
            availableQuickmoves = GameConstants.getQuickMoveInfos().stream().filter(qmi -> !qmi.isNoInstances() || getField().isChannelField()).collect(Collectors.toList());
        } else {
            availableQuickmoves = new ArrayList<>();
        }

        write(FieldPacket.setQuickMoveInfo(availableQuickmoves));

        if (instance != null && (int) (instance.getRemainingTime() / 1000) > 0) {
            if (FieldConstants.isTowerOfOzField(getFieldID())) {
                write(CUIHandler.towerOfOzUpdate(FieldConstants.isTowerOfOzRestField(getFieldID()), (int) instance.getRemainingTime(), (int) instance.getProperty(OzConstants.MAX_TIME) * 1000));
            } else if (instance.getClockPacket() != null && instance.getClockPacket().getClockType() == ClockType.SecondsClock) {
                write(FieldPacket.clock(ClockPacket.secondsClock((int) (instance.getRemainingTime() / 1000))));
            } else if (instance.getClockPacket() != null && instance.getClockPacket().getClockType() == ClockType.TimerInfoEx) {
                write(FieldPacket.clock(ClockPacket.DojoTimer(901, 901 - (int) (instance.getRemainingTime() / 1000))));
            }
        }

        if (getScriptManager() != null) {
            getScriptManager().stopFieldEvents(); // Stop field events such as ObstacleAtoms once the character warps
        }

        if (getParty() != null) {
            getParty().updateHealth();
        }

        if (isDead()) {
            if(instance != null) {
                heal(getMaxHP(), false, true);
            } else{
                //Show revive UI
                write(UserLocal.openUIOnDead(true, getBuffProtectorItem() != null,
                        false, false, false, getDeathCount() > 0 ? ReviveType.BOSS : ReviveType.NORMAL));
            }
        }

        // Area Control
        var fi = FieldData.getFieldInfoById(getFieldID());
        if (fi != null && fi.getAreaControl().size() > 0) {
            write(FieldPacket.momentAreaOffAll(true, fi.getAreaControl()));
        }

        // Surprise Mission - Is Burning Field
        if (getField().getBurningFieldLevel() > 0) {
            SurpriseMissionCompleter.completeFindBurningField(this);
        }

        initPets();
        showUserEffects();
    }

    private void clearAndReinitForceAtoms() {
        var tsm = getTemporaryStatManager();
        ForceAtom fa = null;

        if (getTemporaryStatManager().hasStatBySkillId(Job.GUIDED_ARROW)) {
            fa = getForceAtomByKey(getTemporaryStatManager().getOptByCTSAndSkill(GuidedArrow, Job.GUIDED_ARROW).xOption);
        }

        clearForceAtomMap();
        clearJupiterThunderMap();

        if (fa != null) {
            ForceAtomInfo fai = fa.getFaiList().get(0);
            fai.setKey(getNewForceAtomKey());
            fa.setFaiList(Collections.singletonList(fai));
            Option o = new Option();
            o.xOption = fa.getFaiList().get(0).getKey();
            o.tOption = (int) getTemporaryStatManager().getRemainingTime(GuidedArrow, Job.GUIDED_ARROW);
            o.setInMillis(true);
            tsm.putCharacterStatValue(GuidedArrow, o, true);
            tsm.sendSetStatPacket();
            createForceAtom(fa);
        }
    }

    /**
     * Called upon Login
     */
    private void initCharData() {
        setOnline(true);
        getTemporaryStatManager().resendLostStatResetPackets();
        initSoulMP();
        Party party = getParty();

        if (party != null) {
            write(WvsContext.partyResult(PartyResult.loadParty(party, this)));
        }

        if (getGuild() != null) {
            write(WvsContext.guildResult(GuildResult.loadGuild(getGuild())));
            if (getGuild().getAlliance() != null) {
                write(WvsContext.allianceResult(AllianceResult.loadDone(getGuild().getAlliance())));
                write(WvsContext.allianceResult(AllianceResult.loadGuildDone(getGuild().getAlliance())));
            }
        }

        sendUnionPacketForInitialLoadDone();

        write(WvsContext.setMaplePoints(account.getNxPrepaid()));

        if (getJobHandler() == null) {
            var jobHandler = JobManager.getJobById(getJob(), this);
            setJobHandler(jobHandler);
        }

        Events.onWarp(this, getField(), getField());

        if (getAndroid() != null && !getAndroid().hasObjectId()) {
            getField().spawnLife(getAndroid(), null);
        }

        var qm = getQuestManager();
        if (!qm.hasQuestCompleted(QuestConstants.A_DIVINE_POWER)) {
            qm.completeQuest(QuestConstants.A_DIVINE_POWER);
        }

        updateCooltimeBuffs();

        write(WvsContext.powerCrystalInfo(getInventoryByType(ETC).getItems().stream().filter(it -> it.getPowerCrystalInfo() != null).collect(Collectors.toList())));
    }

    public void login() {
        applyNewDayUponLogin(); // Dailies Reset if character wasn't online
        getAccount().applyCompletedAccountQuests(this);

        initBlacklist();
    }

    private void initBlacklist() {
        var acc = getAccount();
        write(WvsContext.blackList(BlackListTabType.Individual, BlackListResult.EncodeBlackListView, null, acc.getBlackListEntries()));
        // TODO initBlackList for Guild Tab
    }

    public boolean hasChrBlacklisted(int chrId) {
        var acc = getAccount();
        return acc.hasChrBlacklisted(chrId);
    }

    private void sendUnionPacketForInitialLoadDone() {
        Union union = getUnion();
        var eligibleChars = union.getEligibleUnionChars();
        UnionBoard activeBoard = union.getBoardByPreset(getActiveUnionPreset());

        QuestManager qm = getQuestManager();
        if (qm.hasQuestCompleted(QuestConstants.UNION_START_QUEST)) {
            write(CUIHandler.unionAssignResult(getUnion().getUnionRank(), eligibleChars, activeBoard,
                    null, null, null)); // todo: decide how u want to handle mobile/lab members
            Quest q = qm.getQuestById(QuestConstants.UNION_RANK);
            if (q == null) {
                q = QuestData.createQuestFromId(QuestConstants.UNION_RANK);
                qm.addQuest(q);
            }
            q.setProperty("rank", getUnion().getUnionRank());
            write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
        }
        union.updateUnionBonuses(this);
    }

    public Set<Life> removeLifesFromCurrentField() {
        Set<Life> removedLifes = new HashSet<>();

        if (getField() == null) {
            return removedLifes;
        }

        removedLifes.addAll(removeFamiliars());
        removedLifes.addAll(removeSummons());
        removedLifes.add(removeAndroid());
        removePets();
        removeDragon();
        removeHaku();
        removeAffectedAreas();
        removeWreckages();
        removedLifes.remove(null);

        return removedLifes;
    }

    private void removeAffectedAreas() {
        TemporaryStatManager tsm = getTemporaryStatManager();
        for (AffectedArea aa : new HashSet<>(tsm.getAffectedAreas())) {
            int aaSkillID = aa.getSkillID();
            if (!SkillConstants.isNoRemoveAA(aaSkillID)) {
                tsm.removeStatsBySkill(aa.getSkillID());
            }
            getField().removeLife(aa);
        }
        tsm.getAffectedAreas().clear();
    }

    private void removePets() {
        // Pets don't actually get added to the field's life
        for (Pet pet : new HashSet<>(getPets())) {
            // kinda hacky, but meh
            pet.setField(getField());
            pet.broadcastLeavePacket();
            pet.setField(null);
        }
    }

    private Life removeAndroid() {
        var android = getAndroid();
        if (android != null) {
            getField().removeLife(android);
        }
        return android;
    }

    private Life removeDragon() {
        var isEvan = getJobHandler() instanceof Evan;
        var dragon = getDragon();
        if (isEvan && dragon != null) {
            getField().removeLife(dragon);
        }
        return dragon;
    }

    private Life removeHaku() {
        var isKanna = getJobHandler() instanceof Kanna;
        Life haku = null;
        if (isKanna) {
            haku = ((Kanna) getJobHandler()).getHaku();
            if (haku != null) {
                getField().removeLife(haku);
            }
        }
        return haku;
    }

    private Set<Life> removeFamiliars() {
        Set<Life> myFamiliars = new HashSet<>();
        List<Familiar> familiarList = new ArrayList<>();
        for (var familiar : new HashSet<>(getField().getFamiliarsByChrId(getId()))) {
            if (familiar.hasChrAsOwner(this)) {
                getField().removeFamiliar(familiar);
                myFamiliars.add(familiar);
                familiarList.add(familiar);
            }
        }
//		getField().broadcastPacket(CFamiliar.familiarEnterField(familiarList, false, false));
        return myFamiliars;
    }

    private Set<Life> removeSummons() {
        Set<Life> mySummons = new HashSet<>();
        var field = getField();
        var fieldSummons = new HashSet<>(field.getSummons());
        // also includes NW's bats
        for (var summon : fieldSummons) {
            if (summon.hasChrAsOwner(this)) {
                field.removeLife(summon);
                mySummons.add(summon);
            }
        }
        return mySummons;
    }

    private void removeWreckages() {
        for (var wreckage : new HashSet<>(getField().getWreckageByChrId(getId()))) {
            getField().removeLife(wreckage);
        }
    }

    private void initCharInNewField(Field toField, Portal portal, boolean characterData) {
        setField(toField);
        setChair(null);
        if (portal != null) {
            getAvatarData().getCharacterStat().setPortal(portal.getId());
            setPosition(new Position(portal.getX(), portal.getY()));
        } else {
            getAvatarData().getCharacterStat().setPortal(0);
            setPosition(new Position(0, 0));
        }

        initFriendStatus();

        write(Stage.setField(this, toField, getChannel(), false, 0, characterData, hasBuffProtector(),
                (byte) (portal != null ? portal.getId() : 0), false, 100, null, true, -1));
        toField.addChar(this);
    }

    private void removeFromCurrentFieldAndCheckForInstance() {
        var currentField = getField();
        currentField.removeChar(this);

        var toChannelField = currentField.isChangeToChannelOnLeave();
        if (toChannelField) {
            if (getInstance() != null) {
                getInstance().clear();
            }
            setInstance(null);
        }
    }

    private Field getChannelFieldIfFieldIsNeverInstanced(Field toField) {
        // Check if toField is a 'never instanced field', if so Clear Instance only for Chr and set the toField to channel instance
        if (FieldConstants.isNeverInstancedField(toField.getId()) && getInstance() != null) {
            // getInstance().clearForChr(this);
            getInstance().removeChar(this, false);
            toField = getOrCreateFieldByCurrentInstanceType(toField.getId()); // now grabs channel's field instead of instance field
        }
        return toField;
    }

    private void initFriendStatus() {
        for (Friend f : getFriends()) {
            Char friendChr = getWorld().getCharByID(f.getFriendID());
            if (friendChr != null) {
                f.setChr(friendChr);
                var otherFriendChar = friendChr.getFriendByCharID(getId());
                if (otherFriendChar != null) {
                    otherFriendChar.setChr(this);
                }
            }
            f.setFlag(friendChr != null
                    ? FriendFlag.FriendOnline
                    : FriendFlag.FriendOffline);
        }
        for (Friend f : getUser().getFriends()) {
            User friendAcc = getWorld().getUserById(f.getFriendAccountID());
            if (friendAcc != null && friendAcc.getCurrentChr() != null) {
                f.setChr(friendAcc.getCurrentChr());
                var otherAccFriend = friendAcc.getFriendByUserID(getAccount().getId());
                if (otherAccFriend != null) {
                    otherAccFriend.setChr(this);
                }
            }
            f.setFlag(friendAcc != null
                    ? FriendFlag.AccountFriendOnline
                    : FriendFlag.AccountFriendOffline);
        }
    }

    public int getCurrentLevelExpRate() {
        if (currentExpRate == 0) {
            updateExpRate();
        }

        return currentExpRate;
    }

    public void updateExpRate() {
        currentExpRate = MobExpConstants.getRateForCharacterLevel(getLevel());
    }

    public Set<Summon> getSummons() {
        Set<Summon> summons = new HashSet<>();
        TemporaryStatManager tsm = getTemporaryStatManager();
        for (Option option : tsm.getOptions(IndieSummon)) {
            summons.add(option.summon);
        }
        return summons;
    }

    public World getWorld() {
        if (getClient() == null) {
            return null;
        }
        return getClient().getWorld();
    }

    /**
     * Adds a given amount of exp to this Char. Immediately checks for level-up possibility, and
     * sends the updated
     * stats to the client. Allows multi-leveling.
     *
     * @param amount The amount of exp to add.
     */
    public void addExp(long amount) {
        ExpIncreaseInfo eii = new ExpIncreaseInfo();
        eii.setLastHit(true);
        eii.setIncEXP(amount);
        addExp(amount, eii);
    }

    /**
     * Adds exp to this Char. Will calculate the extra exp gained from buffs and the exp rate of the server.
     * Also takes an argument to show this info to the client. Will not send anything if this argument (eii) is null.
     *
     * @param amount The amount of exp to add
     * @param eii    The info to send to the client
     */
    public void addExp(long amount, ExpIncreaseInfo eii) {
        if (amount <= 0) {
            return;
        }
        long incExp = eii == null ? amount : eii.getIncEXP();
        int expFromExtraExpR = (int) (incExp * ((getTotalStat(BaseStat.expR) - 100) / 100D));
        amount += expFromExtraExpR;
        int level = getLevel();
        CharacterStat cs = getAvatarData().getCharacterStat();
        long curExp = cs.getExp();
        if (level >= GameConstants.charExp.length) {
            return;
        }
        long newExp = curExp + amount;
        Map<Stat, Object> stats = new HashMap<>();
        while (level < GameConstants.MAX_CHAR_LEVEL && newExp >= GameConstants.charExp[level]) {
            newExp -= GameConstants.charExp[level];
            addStat(Stat.level, 1);
            stats.put(Stat.level, getStat(Stat.level));
            if (getJobHandler() != null) {
                getJobHandler().handleLevelUp();
            }
            level++;
            getField().broadcastPacket(UserRemote.effect(getId(), Effect.levelUpEffect()));
            heal(getMaxHP());
            healMP(getMaxMP());

            getAvatarData().getCharacterStat().setLastLevelObtainedTime(FileTime.currentTime()); // used for rankings. to ensure the first max lv stays first by comparing level time
        }
        cs.setExp(newExp);
        stats.put(Stat.exp, newExp);
        if (eii != null) {
            eii.setIndieBonusExp(expFromExtraExpR);
            write(WvsContext.message(MessagePacket.incExpMessage(eii)));
        }

        // ensure that exp is 0 at lv300, and thus won't affect ranking results
        if (level >= GameConstants.MAX_CHAR_LEVEL) {
            cs.setExp(0L);
            stats.put(Stat.exp, 0L);
        }
        write(WvsContext.statChanged(stats));
    }

    /**
     * Adds a given amount of exp to this Char, however it does not display the Exp Message.
     * Immediately checks for level-up possibility, and sends the updated
     * stats to the client. Allows multi-leveling.
     *
     * @param amount The amount of exp to add.
     */
    public void addExpNoMsg(long amount) {
        addExp(amount, null);
    }

    public void addTraitExp(Stat traitStat, int amount) {
        var curStat = getStat(traitStat);
        if (curStat + amount > GameConstants.MAX_TRAIT_EXP) {
            amount = GameConstants.MAX_TRAIT_EXP - curStat;
        }

        if (amount <= 0) {
            return;
        }

        Map<Stat, Object> stats = new HashMap<>();
        addStat(traitStat, amount);
        stats.put(traitStat, getStat(traitStat));
        stats.put(Stat.dayLimit, getAvatarData().getCharacterStat().getNonCombatStatDayLimit());
        write(WvsContext.statChanged(stats));
        write(WvsContext.message(MessagePacket.incNonCombatStatEXPMessage(traitStat, amount)));
    }

    /**
     * Writes a packet to this Char's client.
     *
     * @param outPacket The OutPacket to write.
     */
    public void write(OutPacket outPacket) {
        if (getClient() != null) {
            getClient().write(outPacket);
        }
    }

    public ExpIncreaseInfo getExpIncreaseInfo() {
        return new ExpIncreaseInfo();
    }

    public WildHunterInfo getWildHunterInfo() {
        if (wildHunterInfo == null && JobConstants.isWildHunter(getJob())) {
            wildHunterInfo = new WildHunterInfo();
        }
        return wildHunterInfo;
    }


    public void setWildHunterInfo(WildHunterInfo wildHunterInfo) {
        this.wildHunterInfo = wildHunterInfo;
    }

    public ZeroInfo getZeroInfo() {
        return getAvatarData().getZeroInfo();
    }

    public void setZeroInfo(ZeroInfo zeroInfo) {
        if (this.getAvatarData() != null) {
            this.getAvatarData().setZeroInfo(zeroInfo);
        }
    }

    public int getWpCoin() {
        if (getAvatarData() == null || getAvatarData().getZeroInfo() == null) {
            return 0;
        }
        return getAvatarData().getZeroInfo().getWpCoin();
    }

    public void setWpCoin(int wpCoin) {
        if (this.getAvatarData() != null && this.getAvatarData().getZeroInfo() != null) {
            this.getAvatarData().getZeroInfo().setWpCoin(wpCoin);
        }
    }

    public void addWpCoin(int addAmount) {
        setWpCoin(getWpCoin() + addAmount);
        updateWpCoin();
    }

    public void deductWpCoin(int deductAmount) {
        setWpCoin(getWpCoin() - Math.abs(deductAmount));
        updateWpCoin();
    }

    public void updateWpCoin() {
        write(WvsContext.zeroWp(getWpCoin()));
    }

    public int getNickItem() {
        var q = getQuestManager().getOrCreateQuestById(QuestConstants.ACTIVE_TITLE_QUEST_ID);
        return q.getIntProperty("nickItem");
    }

    public void setNickItem(int nickItem) {
        var q = getQuestManager().getOrCreateQuestById(QuestConstants.ACTIVE_TITLE_QUEST_ID);
        q.setProperty("nickItem", nickItem);
    }

    public void setDamageSkin(int itemID) {
        DamageSkinSaveData dssd = getDamageSkinByItemId(itemID);
        if (dssd != null) {
            setDamageSkin(new DamageSkinSaveData(dssd.getDamageSkinID(), itemID, false,
                    StringData.getItemStringById(itemID)));
        }
    }

    public void setDamageSkin(DamageSkinSaveData damageSkin) {
        this.damageSkin = damageSkin;
    }

    public DamageSkinSaveData getDamageSkin() {
        if (damageSkin == null) {
            return DamageSkinSaveData.DEFAULT_SKIN;
        }
        return damageSkin;
    }

    public DamageSkinSaveData getPremiumDamageSkin() {
        if (premiumDamageSkin == null) {
            return DamageSkinSaveData.DEFAULT_SKIN;
        }
        return premiumDamageSkin;
    }

    public DamageSkinSaveData getActiveDamageSkin() {
        DamageSkinSaveData ds = getDamageSkin();
        DamageSkinSaveData pds = getPremiumDamageSkin();
        if (pds != null && pds.getDamageSkinID() != 0) {
            return pds;
        }
        if (ds != null && pds.getDamageSkinID() != 0) {
            return ds;
        }
        return DamageSkinSaveData.DEFAULT_SKIN;
    }

    public void setPremiumDamageSkin(DamageSkinSaveData premiumDamageSkin) {
        this.premiumDamageSkin = premiumDamageSkin;
    }

    public void setPremiumDamageSkin(int itemID) {
        DamageSkinSaveData dssd = getDamageSkinByItemId(itemID);
        if (dssd != null) {
            setPremiumDamageSkin(new DamageSkinSaveData(dssd.getDamageSkinID(), itemID, false,
                    StringData.getItemStringById(itemID)));
        }
    }

    private DamageSkinSaveData getDamageSkinByItemId(int itemId) {
        return getAccount().getDamageSkinByItemID(itemId);
    }

    public void setPartyInvitable(boolean partyInvitable) {
        this.partyInvitable = partyInvitable;
    }

    /**
     * Returns if this Char can be invited to a party.
     *
     * @return Whether or not this Char can be invited to a party.
     */
    public boolean isPartyInvitable() {
        return partyInvitable;
    }

    /**
     * Returns if this character is currently in its beta state.
     *
     * @return true if this Char is in a beta state.
     */
    public boolean isZeroBeta() {
        return getZeroInfo() != null && getZeroInfo().isZeroBetaState();
    }

    /**
     * Zero only.
     * Goes into Beta form if Alpha, and into Alpha if Beta.
     */
    public void swapZeroState() {
        if (!(JobConstants.isZero(getJob())) || getZeroInfo() == null) {
            return;
        }
        ZeroInfo oldInfo = getZeroInfo().deepCopy();
        ZeroInfo currentInfo = getZeroInfo();
        CharacterStat cs = getAvatarData().getCharacterStat();
        currentInfo.setZeroBetaState(!oldInfo.isZeroBetaState());
        currentInfo.setSubHP(cs.getHp());
        currentInfo.setSubMHP(cs.getMaxHp());
        currentInfo.setSubMP(cs.getMp());
        currentInfo.setSubMMP(cs.getMaxMp());
        cs.setHp(oldInfo.getSubHP());
        cs.setMaxHp(oldInfo.getSubMHP());
        cs.setMp(oldInfo.getSubMP());
        cs.setMaxMp(oldInfo.getSubMMP());
        Map<Stat, Object> updatedStats = new HashMap<>();
        updatedStats.put(Stat.hp, cs.getHp());
        updatedStats.put(Stat.mhp, cs.getMaxHp());
        updatedStats.put(Stat.mp, cs.getMp());
        updatedStats.put(Stat.mmp, cs.getMaxMp());
        write(WvsContext.zeroInfo(currentInfo)); // Sets Old Info (Alpha -> Beta  | encode Alpha Stats
        write(WvsContext.statChanged(updatedStats));
    }

    /**
     * Initializes zero info with HP values.
     */
    public void initZeroInfo() {
        ZeroInfo zeroInfo = new ZeroInfo();
        CharacterStat cs = getAvatarData().getCharacterStat();
        AvatarLook zal = getAvatarData().getZeroAvatarLook();
        if (zal != null) {
            zeroInfo.setSubHP(cs.getHp());
            zeroInfo.setSubMHP(cs.getMaxHp());
            zeroInfo.setSubMP(cs.getMp());
            zeroInfo.setSubMMP(cs.getMaxMp());
            zeroInfo.setSubFace(zal.getFace());
            zeroInfo.setSubHair(zal.getHair());
            zeroInfo.setSubSkin(zal.getSkin());
            zeroInfo.setMixHairBaseProb(zal.getMixHairPercent());
            zeroInfo.setMixBaseHairColor(zal.getHair() % 10); // get Hair Colour
            zeroInfo.setMixAddHairColor(zal.getMixedHairColor());
            setZeroInfo(zeroInfo);
        }
    }

    /**
     * @return
     */
    public void updateZeroInfo() {
        write(WvsContext.zeroInfo(getZeroInfo(), ZeroInfoFlag.all()));
        broadcastRemoteAvatarModified();
    }

    public ScriptManagerImpl getScriptManager() {
        return scriptManagerImpl;
    }

    /**
     * Adds a {@link Drop} to this Char.
     *
     * @param drop The Drop that has been picked up.
     */
    public boolean addDrop(Drop drop, boolean byPet) {
        if (drop.blockFromPickup() || getLevel() < drop.getMinLevelToPickup()) {
            return false;
        }

        if (drop.isMoney()) {
            int additionalMoney = 0;
            int smallChange = 0;
            if(drop.getDropper() == null) {
                //Small Change
                if (getGuild() != null) {
                    GuildSkill smallChangeSkill = getGuild().getSkillById(91000011);
                    if (smallChangeSkill != null) {
                        SkillInfo si = SkillData.getSkillInfoById(smallChangeSkill.getSkillID());
                        smallChange = si.getBaseStatValue(SkillStat.mesoG, smallChangeSkill.getLevel(), this).getRight();
                    }
                }
                //Flat meso from skills (Spotting small change guild skill)
                additionalMoney += getTotalStat(BaseStat.mesoG);
                if (additionalMoney != 0) {
                    drop.setMoney(drop.getMoney() + additionalMoney);
                }
            }

            addMoney(drop.getMoney(), !byPet);
            QuestManagerHandler.handleMoneyGain(getQuestManager(), drop.getMoney());
            write(WvsContext.message(MessagePacket.dropPickupMessage(drop.getMoney() - smallChange, (short) smallChange)));

            if (drop.getDropper() != null && drop.getDropper().getId() != getId()) {
                TransactionLogger.addDropTransaction(drop.getMoney(), drop.getDropper(), this);
            }

            return true;
        } else {
            Item item = drop.getItem();

            int itemID = item.getItemId();
            boolean isConsume = false;
            boolean isRunOnPickUp = false;
            if (ItemConstants.isExpOrb(itemID)) {
                long expGain = (long) (drop.getMobExp()
                        * GameConstants.getExpOrbExpModifierById(itemID)
                        * ((int) ((getTotalStat(BaseStat.comboKillOrbExpR)) / 100D))
                );

                write(UserPacket.effect(Effect.fieldItemConsumed((int) (expGain > Integer.MAX_VALUE ? Integer.MAX_VALUE : expGain))));
                addExpNoMsg(expGain);

                // Exp Orb Buff On Pickup
                if (itemID != GameConstants.ELITE_CHAMPION_ORB) {
                    TemporaryStatManager tsm = getTemporaryStatManager();
                    ItemBuffs.giveItemBuffsFromItemID(this, tsm, itemID);
                }
                dispose();
                return true;
            }

            if (!canHold(item)) {
                return false;
            }

            if (!ItemConstants.isEquip(itemID)) {
                ItemInfo ii = ItemData.getItemInfoByID(itemID);
                if (ii != null) {
                    isConsume = ii.getSpecStats().getOrDefault(SpecStat.consumeOnPickup, 0) != 0;
                    isRunOnPickUp = ii.getSpecStats().getOrDefault(SpecStat.runOnPickup, 0) != 0;
                } else {
                    log.error(String.format("Looting drop with ItemId %d. Has no ItemInfo", itemID));
                }
            }
            if (isConsume) {
                consumeItemOnPickup(item);
                Events.onItemLooted(this, item, item.getQuantity());
                dispose();
                return true;
            } else if (isRunOnPickUp && !ItemConstants.isNotRunOnPickup(itemID)) {
                String script = String.valueOf(itemID);
                ItemInfo ii = ItemData.getItemInfoByID(itemID);
                if (ii.getScript() != null && !"".equals(ii.getScript())) {
                    script = ii.getScript();
                }
                getScriptManager().startScript(itemID, script, ScriptType.Item);
                Events.onItemLooted(this, item, item.getQuantity());
                return true;
            } else if (canHold(item)) {
                if (item instanceof Equip) {
                    Equip equip = (Equip) item;
                    if (equip.hasAttribute(EquipAttribute.UntradableAfterTransaction)) {
                        equip.removeAttribute(EquipAttribute.UntradableAfterTransaction);
                        equip.addAttribute(EquipAttribute.Untradable);
                    }
                }

                if (ItemConstants.isRechargable(itemID)) {
                    var itemInfo = ItemData.getItemInfoByID(itemID);
                    item.setQuantity(itemInfo.getSlotMax());
                }
                var itemQuantity = item.getQuantity();
                addItemToInventory(item.getInvType(), item, false, byPet);
                write(WvsContext.message(MessagePacket.dropPickupMessage(item, (short) itemQuantity)));

                if (drop.getDropper() != null && drop.getDropper().getId() != getId()) {
                    TransactionLogger.addDropTransaction(item, drop.getDropper(), this);
                }

                //Handle Power crystal packet
                if (item.getItemId() == ItemConstants.INTENSE_POWER_CRYSTAL) {
                    write(WvsContext.powerCrystalInfo(getInventoryByType(ETC).getItems().stream().filter(it -> it.getPowerCrystalInfo() != null).collect(Collectors.toList())));
                }

                Events.onItemLooted(this, item, itemQuantity);

                return true;
            } else {
                write(WvsContext.message(MessagePacket.dropPickupMessage(0, 0, DropPickupMessageType.Fail_NoSpace, (short) 0, (short) 0)));
                return false;
            }
        }
    }

    private void consumeItemOnPickup(Item item) {
        int itemID = item.getItemId();
        TemporaryStatManager tsm = getTemporaryStatManager();
        ItemBuffs.giveItemBuffsFromItemID(this, tsm, itemID);
        if (ItemConstants.isMobCard(itemID)) {
            MonsterBookInfo mbi = getMonsterBookInfo();
            int id = 0;
            if (!mbi.hasCard(itemID)) {
                mbi.addCard(itemID);
                id = itemID;
            }
            write(WvsContext.monsterBookSetCard(id));
        }
    }

    /**
     * Returns the Char's name.
     *
     * @return The Char's name.
     */
    public String getName() {
        return getAvatarData().getCharacterStat().getName();
    }

    /**
     * Checks whether or not this Char has a given quest in progress.
     *
     * @param questReq The quest ID of the requested quest.
     * @return Whether or not this char is in progress with the quest.
     */
    public boolean hasQuestInProgress(int questReq) {
        return getQuestManager().hasQuestInProgress(questReq);
    }

    /**
     * Disposes this Char, allowing it to send packets to the server again.
     */
    public void dispose() {
        setTalkingToNpc(false);
        setInTrunk(false);
        write(WvsContext.exclRequest());
    }

    /**
     * Returns the current HP of this Char.
     *
     * @return the current HP of this Char.
     */
    public int getHP() {
        return getStat(Stat.hp);
    }

    /**
     * Returns the current MP of this Char.
     *
     * @return the current MP of this Char.
     */
    public int getMP() {
        return getStat(Stat.mp);
    }

    /**
     * Gets the max hp of this Char.
     *
     * @return The max hp of this Char
     */
    public int getMaxHP() {
        return Math.min(GameConstants.MAX_HP_MP, getTotalStat(BaseStat.mhp) + GameConstants.getTraitHPMP(GameConstants.getTraitLevel(getStat(Stat.willEXP))));
    }

    /**
     * Gets the max mp of this Char.
     *
     * @return The max mp of this Char
     */
    public int getMaxMP() {
        return Math.min(GameConstants.MAX_HP_MP, getTotalStat(BaseStat.mmp) + GameConstants.getTraitHPMP(GameConstants.getTraitLevel(getStat(Stat.senseEXP))));
    }

    /**
     * Gets the current percentage of HP of this Char.
     *
     * @return
     */
    public double getCurrentHPPerc() {
        return 100 * (((double) getHP()) / getMaxHP());
    }

    /**
     * Gets the current percentage of MP of this Char.
     *
     * @return
     */
    public double getCurrentMPPerc() {
        return 100 * (((double) getMP()) / getMaxMP());
    }

    /**
     * Gets the amount that is 1% of this Char's Max HP
     *
     * @return
     */

    public int getHPPerc() {
        return getHPPerc(1);
    }

    /**
     * Gets the amount that is 'amount'% of this Char's Max HP
     *
     * @param amount
     * @return
     */

    public int getHPPerc(int amount) {
        return (int) (amount * (getMaxHP() / 100D));
    }

    public int getMPPerc(int amount) {
        return (int) (amount * (getMaxMP() / 100D));
    }

    /**
     * Heals this Char's HP for a certain amount. Caps off at maximum HP.
     *
     * @param amount The amount to heal.
     */
    public void heal(int amount) {
        heal(amount, false, false);
    }

    public void heal(int amount, boolean showEffect, boolean allowedWhenDead) {
        heal(amount, showEffect, allowedWhenDead, 0);
    }

    public void heal(int amount, boolean showEffect, boolean allowedWhenDead, int healSourceId) {
        if (!allowedWhenDead && isDead()) {
            return;
        }
        if (isDead()) {
            getScriptManager().dispose(ScriptType.Npc);
        }

        //If character has Undead debuff, only heal for half
        if (temporaryStatManager.hasStat(Undead)) {
            if (healSourceId == Bishop.HEAL || temporaryStatManager.getOption(Undead).slv == 17) //Queen zombify harms player instead
            {
                amount *= -0.5;
            } else {
                amount /= 2;
            }
        }

        int curHP = getHP();
        int maxHP = getMaxHP();

        if (getJobHandler() != null) {
            var replaceHP = getJobHandler().alterHeal(curHP, amount, healSourceId);
            if (replaceHP >= 0) { // Only replace if more or equal to 0.  -1 represents not being changed.
                amount = replaceHP;
            }
        }

        int newHP = Math.min(maxHP, Math.max(curHP + amount, 0));

        if (showEffect && newHP != curHP) {
            write(UserPacket.effect(Effect.changeHPEffect(newHP - curHP)));
            getField().broadcastPacket(UserRemote.effect(getId(), Effect.changeHPEffect(newHP - curHP)));
        }

        if (newHP <= 0) {
            die();
        } else {
            Map<Stat, Object> stats = new HashMap<>();
            setStat(Stat.hp, newHP);
            stats.put(Stat.hp, newHP);
            write(WvsContext.statChanged(stats));
        }
        if (getParty() != null) {
            getParty().broadcast(UserRemote.receiveHP(this), this);
        }

        if (getJobHandler() != null) {
            getJobHandler().handleChangeHP(curHP, newHP);
        }
    }

    public void healMP(int amount) {
        healMP(amount, 0);
    }

    /**
     * "Heals" this Char's MP for a certain amount. Caps off at maximum MP or 0.
     *
     * @param amount The amount to heal.
     */
    public void healMP(int amount, int healMPSourceId) {
        int curMP = getMP();
        int maxMP = getMaxMP();

        if (getJobHandler() != null) {
            var replaceMP = getJobHandler().alterHealMP(curMP, amount, healMPSourceId);
            if (replaceMP >= 0) { // Only replace if more or equal to 0.  -1 represents not being changed.
                amount = replaceMP;
            }
        }

        int newMP = Math.min(maxMP, Math.max(0, curMP + amount));

        Map<Stat, Object> stats = new HashMap<>();
        setStat(Stat.mp, newMP);
        stats.put(Stat.mp, newMP);
        write(WvsContext.statChanged(stats));

        if (getJobHandler() != null) {
            getJobHandler().handleChangeMP(curMP, newMP);
        }
    }

    /**
     * Consumes a single {@link Item} from this Char's {@link Inventory}. Will remove the Item if it
     * has a quantity of 1.
     *
     * @param item The Item to consume, which is currently in the Char's inventory.
     */
    public void consumeItem(Item item) {
        // data race possible
        if (item.getQuantity() <= 1 && !ItemConstants.isThrowingItem(item.getItemId())) {
            consumeItemFull(item);
        } else {
            item.setQuantity(item.getQuantity() - 1);
            write(WvsContext.inventoryOperation(true, false,
                    item.isInBag() ? UpdateBagQuantity : UpdateQuantity, (short) item.getBagIndex(), (byte) -1, 0, item));
        }
        setBulletIDForAttack(calculateBulletIDForAttack());
    }

    public void consumeItemFull(Item item) {
        consumeItemFull(item, true, true);
    }

    public void consumeItemFull(Item item, boolean addToRemovedItems, boolean sendPacket) {
        Inventory inventory = getInventoryByType(item.getInvType());
        item.setQuantity(0);
        inventory.removeItem(item, addToRemovedItems);
        short bagIndex = (short) item.getBagIndex();

        if (item.getInvType() == EQUIPPED) {
            boolean isCash = item.isCash();
            int pos = item.getBagIndex();
            Equip overrideItem;
            // get corresponding cash item
            if (isCash) {
                overrideItem = (Equip) inventory.getItemBySlot(pos - 100);
            } else {
                overrideItem = (Equip) inventory.getItemBySlot(pos + 100);
            }
            int anvilId = ((Equip) item).getAnvilId() <= 0 ? 0 : ItemConstants.getItemIdFromAnvilIdAndOriginId(item.getItemId(), ((Equip) item).getAnvilId());
            int overrideItemId = overrideItem == null ? -1 : overrideItem.getItemId();
            getAvatarData().getAvatarLook().removeItem(item.getItemId(), anvilId, isCash, overrideItemId);
            bagIndex = (short) -bagIndex;
        }

        if (item.getItemId() == CustomConstants.PET_VAC) {
            checkAndSetPetVac();
        }

        if (sendPacket) {
            write(WvsContext.inventoryOperation(true, false,
                    item.isInBag() ? BagRemove : Remove, bagIndex, (byte) 0, 0, item));
        }
    }

    /**
     * Removes a certain amount of an item from this Char.
     *
     * @param item     the item to remove
     * @param quantity the amount to remove
     */
    public void consumeItem(Item item, int quantity) {
        if (quantity >= item.getQuantity()) {
            consumeItemFull(item);
        } else {
            item.setQuantity(item.getQuantity() - quantity);
            write(WvsContext.inventoryOperation(true, false,
                    item.isInBag() ? UpdateBagQuantity : UpdateQuantity, (short) item.getBagIndex(), (byte) -1, 0, item));
        }
        setBulletIDForAttack(calculateBulletIDForAttack());
    }

    /**
     * Consumes an item of this Char with the given id. Will do nothing if the Char doesn't have the
     * Item.
     * Only works for non-Equip (i.e., type is not EQUIPPED or EQUIP, CASH is fine) items.
     * Calls {@link #consumeItem(Item)} if an Item is found.
     *
     * @param id       The Item's id.
     * @param quantity The amount to consume.
     */
    public void consumeItem(int id, int quantity) {
        Item checkItem = ItemData.getItemDeepCopy(id);
        while (quantity > 0) {
            Item item = getInventoryByType(checkItem.getInvType()).getItemByItemID(id);
            if (item != null) {
                int consumed = quantity > item.getQuantity() ? 0 : item.getQuantity() - quantity;
                quantity -= Math.min(quantity, item.getQuantity());
                item.setQuantity(consumed + 1); // +1 because 1 gets consumed by consumeItem(item)
                consumeItem(item);
            } else {
                break;
            }
        }
    }

    /**
     * Consumes an item of this Char in a given slot. Will do nothing if the Item cannot be found.
     * Only works for non-Equip (i.e., type is not EQUIPPED or EQUIP, CASH is fine) items.
     * Calls {@link #consumeItem(Item)} if an Item is found.
     *
     * @param invType  the inventory of which it should be consumed
     * @param slot     the slot of the Item
     * @param quantity the quantity that should be consumed
     */
    public void consumeItemBySlot(InvType invType, int slot, int quantity) {
        while (quantity > 0) {
            Item item = getInventoryByType(invType).getItemBySlot(slot);
            if (item != null) {
                int consumed = quantity > item.getQuantity() ? 0 : item.getQuantity() - quantity;
                quantity -= Math.min(quantity, item.getQuantity());
                item.setQuantity(consumed + 1); // +1 because 1 gets consumed by consumeItem(item)
                consumeItem(item);
            } else {
                break;
            }
        }
    }

    public boolean hasItem(int itemID) {
        return getInventories().stream().anyMatch(inv -> inv.containsItem(itemID));
    }

    public boolean hasItemCount(int itemID, int count) {
        Inventory inv = getInventoryByType(ItemData.getItemDeepCopy(itemID).getInvType());
        return inv.getItems().stream()
                .filter(i -> i.getItemId() == itemID)
                .mapToInt(Item::getQuantity)
                .sum() >= count;
    }

    public short getLevel() {
        return getAvatarData().getCharacterStat().getLevel();
    }

    public boolean isMarried() {
        // TODO
        return false;
    }

    public int getGuildId() {
        return guildId;
    }

    public void setGuildId(int guildId) {
        this.guildId = guildId;
    }

    public Guild getGuild() {
        if (guild == null && getGuildId() != 0 && getWorld() != null) {
            guild = getWorld().getGuildByID(getGuildId());
        }
        return guild;
    }

    public void setGuild(Guild guild) {
        if (guild != null) {
            setGuildId(guild.getId());
        } else {
            setGuildId(0);
        }
        this.guild = guild;
    }

    public int getTotalChuc() {
        int total = 0;
        for (Item item : getEquippedInventory().getItems()) {
            if (item instanceof Equip) {
                Equip equip = (Equip) item;
                if (ItemConstants.isOverall(equip.getItemId())) {
                    total += 2 * equip.getChuc();
                } else {
                    total += equip.getChuc();
                }
            }
        }
        return total;
    }

    public int getTotalChucForStarForceConversion() {
        int total = 0;
        for (Item item : getEquippedInventory().getItems()) {
            if (item instanceof Equip) {
                Equip equip = (Equip) item;
                if (ItemConstants.isMedal(equip.getItemId())) { // Medal and Title are not covered
                    continue;
                }

                if (ItemConstants.isOverall(equip.getItemId())) {
                    total += 2 * equip.getChuc();
                } else {
                    total += equip.getChuc();
                }
            }
        }
        return total;
    }

    public int getDriverID() {
        return driverID;
    }

    public void setDriverID(int driverID) {
        this.driverID = driverID;
    }

    public int getPassengerID() {
        return passengerID;
    }

    public void setPassengerID(int passengerID) {
        this.passengerID = passengerID;
    }

    public int getChocoCount() {
        return chocoCount;
    }

    public void setChocoCount(int chocoCount) {
        this.chocoCount = chocoCount;
    }

    public int getActiveEffectItemID() {
        return activeEffectItemID;
    }

    public void setActiveEffectItemID(int activeEffectItemID) {
        this.activeEffectItemID = activeEffectItemID;
    }

    public int getMonkeyEffectItemID() {
        return monkeyEffectItemID;
    }

    public void setMonkeyEffectItemID(int monkeyEffectItemID) {
        this.monkeyEffectItemID = monkeyEffectItemID;
    }

    public int getCompletedSetItemID() {
        return completedSetItemID;
    }

    public void setCompletedSetItemID(int completedSetItemID) {
        this.completedSetItemID = completedSetItemID;
    }

    public short getFieldSeatID() {
        return -1;
    }

    public void setFieldSeatID(short fieldSeatID) {
        this.fieldSeatID = fieldSeatID;
    }

    public PortableChair getChair() {
        return chair;
    }

    public void setChair(PortableChair chair) {
        this.chair = chair;
    }

    public short getFoothold() {
        return foothold;
    }

    public void setFoothold(short foothold) {
        this.foothold = foothold;
    }

    public int getTamingMobLevel() {
        return tamingMobLevel;
    }

    public void setTamingMobLevel(int tamingMobLevel) {
        this.tamingMobLevel = tamingMobLevel;
    }

    public int getTamingMobExp() {
        return tamingMobExp;
    }

    public void setTamingMobExp(int tamingMobExp) {
        this.tamingMobExp = tamingMobExp;
    }

    public int getTamingMobFatigue() {
        return tamingMobFatigue;
    }

    public void setTamingMobFatigue(int tamingMobFatigue) {
        this.tamingMobFatigue = tamingMobFatigue;
    }

    public String getADBoardRemoteMsg() {
        return ADBoardRemoteMsg;
    }

    public void setADBoardRemoteMsg(String ADBoardRemoteMsg) {
        this.ADBoardRemoteMsg = ADBoardRemoteMsg;
    }

    public boolean isInCouple() {
        return inCouple;
    }

    public void setInCouple(boolean inCouple) {
        this.inCouple = inCouple;
    }

    public CoupleRecord getCouple() {
        return couple;
    }

    public void setCouple(CoupleRecord couple) {
        this.couple = couple;
    }

    public boolean hasFriendshipItem() {
        return false;
    }

    public FriendshipRingRecord getFriendshipRingRecord() {
        return friendshipRingRecord;
    }

    public void setFriendshipRingRecord(FriendshipRingRecord friendshipRingRecord) {
        this.friendshipRingRecord = friendshipRingRecord;
    }

    public int getComboCounter() {
        return comboCounter;
    }

    public void setComboCounter(int comboCounter) {
        this.comboCounter = comboCounter;
    }

    public void resetComboCounter() {
        setComboCounter(0);
    }

    public long getLastComboKill() {
        return lastComboKill;
    }

    public void setLastComboKill(long lastComboKill) {
        this.lastComboKill = lastComboKill;
    }

    public void comboKillLogic(Mob mob) {
        var curTime = Util.getCurrentTimeLong();
        var lastTime = getLastComboKill();
        if (lastTime == 0 || curTime - lastTime > GameConstants.COMBO_KILL_RESET_TIMER) {
            resetComboCounter();
        }
        setComboCounter(getComboCounter() + 1);
        write(WvsContext.message(MessagePacket.stylishKillMessage(StylishKillType.COMBO, getComboCounter(), mob.getObjectId(), getComboCountSkinType())));
        setLastComboKill(Util.getCurrentTimeLong());
        if (getComboCounter() % 50 == 0) {
            spawnExpOrb(mob);
        }

        // Surprise Mission - Combo Kill Requirement
        QuestManagerHandler.handleComboKill(getQuestManager(), getComboCounter());
    }

    public void spawnExpOrb(Mob mob) {
        // Special Node Activation
        getSpecialNode().activateSpecialNode("combokill", this, null);

        Item item = ItemData.getItemDeepCopy(GameConstants.BLUE_EXP_ORB_ID);
        if (getComboCounter() >= GameConstants.COMBO_KILL_REWARD_PURPLE) {
            item = ItemData.getItemDeepCopy(GameConstants.PURPLE_EXP_ORB_ID);
        }
        if (getComboCounter() >= GameConstants.COMBO_KILL_REWARD_RED) {
            item = ItemData.getItemDeepCopy(GameConstants.RED_EXP_ORB_ID);
        }
        if (getComboCounter() >= GameConstants.COMBO_KILL_REWARD_GOLD) {
            item = ItemData.getItemDeepCopy(GameConstants.GOLD_EXP_ORB_ID);
        }
        Drop drop = new Drop(-1, item, true);
        drop.setMobExp(mob.getForcedMobStat().getExp());
        drop.setMinLevelToPickup(mob.getForcedMobStat().getLevel());
        drop.setOwnerID(getId());
        getField().drop(drop, getPosition().deepCopy());
    }

    public int getStylishKillSkin() {
        return stylishKillSkin;
    }

    public void setStylishKillSkin(int stylishKillSkin) {
        this.stylishKillSkin = stylishKillSkin;
    }

    public int getComboCountSkinType() {
        if (!(getStylishKillSkin() == -1)) {
            return getStylishKillSkin();
        }
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(CustomConstants.COMBO_COUNTER_SKIN_QUEST_ID);

        var res = q.getIntProperty("skinType");
        setStylishKillSkin(res);
        return res;
    }

    public void setComboCountSkinType(int type) {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(CustomConstants.COMBO_COUNTER_SKIN_QUEST_ID);

        setStylishKillSkin(type);
        q.setProperty("skinType", type);
    }

    public void multiKillMessage(int mobsKilled, long mobexp) {
        int bonusExpMultiplier = (mobsKilled - 2) * 5;
        long totalBonusExp = 0;
        if (getLevel() < GameConstants.charExp.length - 1) {
            totalBonusExp = (long) (mobexp * (bonusExpMultiplier * GameConstants.MULTI_KILL_BONUS_EXP_MULTIPLIER));
        }
        write(WvsContext.message(MessagePacket.stylishKillMessage(StylishKillType.MULTI_KILL, (int) totalBonusExp, Math.min(mobsKilled, 10), getComboCountSkinType())));
        addExpNoMsg(totalBonusExp);

        // QuestManagerHandler - Handle quests that require Multi Kills as requirement
        QuestManagerHandler.handleMultiKillCount(getQuestManager());
    }

    public int getEvanDragonGlide() {
        return evanDragonGlide;
    }

    public void setEvanDragonGlide(int evanDragonGlide) {
        this.evanDragonGlide = evanDragonGlide;
    }

    public int getKaiserMorphRotateHueExtern() {
        return kaiserMorphRotateHueExtern;
    }

    public void setKaiserMorphRotateHueExtern(int kaiserMorphRotateHueExtern) {
        this.kaiserMorphRotateHueExtern = kaiserMorphRotateHueExtern;
    }

    public int getKaiserMorphPrimiumBlack() {
        return kaiserMorphPrimiumBlack;
    }

    public void setKaiserMorphPrimiumBlack(int kaiserMorphPrimiumBlack) {
        this.kaiserMorphPrimiumBlack = kaiserMorphPrimiumBlack;
    }

    public int getKaiserMorphRotateHueInnner() {
        return kaiserMorphRotateHueInnner;
    }

    public void setKaiserMorphRotateHueInnner(int kaiserMorphRotateHueInnner) {
        this.kaiserMorphRotateHueInnner = kaiserMorphRotateHueInnner;
    }

    public int getMakingMeisterSkillEff() {
        return makingMeisterSkillEff;
    }

    public void setMakingMeisterSkillEff(int makingMeisterSkillEff) {
        this.makingMeisterSkillEff = makingMeisterSkillEff;
    }

    public FarmUserInfo getFarmUserInfo() {
        if (farmUserInfo == null) {
            return new FarmUserInfo();
        }
        return farmUserInfo;
    }

    public void setFarmUserInfo(FarmUserInfo farmUserInfo) {
        this.farmUserInfo = farmUserInfo;
    }

    public int getCustomizeEffect() {
        return customizeEffect;
    }

    public void setCustomizeEffect(int customizeEffect) {
        this.customizeEffect = customizeEffect;
    }

    public String getCustomizeEffectMsg() {
        return customizeEffectMsg;
    }

    public void setCustomizeEffectMsg(String customizeEffectMsg) {
        this.customizeEffectMsg = customizeEffectMsg;
    }

    public byte getSoulEffect() {
        return soulEffect;
    }

    public void setSoulEffect(byte soulEffect) {
        this.soulEffect = soulEffect;
    }

    public FreezeHotEventInfo getFreezeHotEventInfo() {
        if (freezeHotEventInfo == null) {
            return new FreezeHotEventInfo();
        }
        return freezeHotEventInfo;
    }

    public void setFreezeHotEventInfo(FreezeHotEventInfo freezeHotEventInfo) {
        this.freezeHotEventInfo = freezeHotEventInfo;
    }

    public int getEventBestFriendAID() {
        return eventBestFriendAID;
    }

    public void setEventBestFriendAID(int eventBestFriendAID) {
        this.eventBestFriendAID = eventBestFriendAID;
    }

    public int getMesoChairCount() {
        return mesoChairCount;
    }

    public void setMesoChairCount(int mesoChairCount) {
        this.mesoChairCount = mesoChairCount;
    }

    public boolean isBeastFormWingOn() {
        return beastFormWingOn;
    }

    public void setBeastFormWingOn(boolean beastFormWingOn) {
        this.beastFormWingOn = beastFormWingOn;
    }

    public int getMechanicHue() {
        return mechanicHue;
    }

    public void setMechanicHue(int mechanicHue) {
        this.mechanicHue = mechanicHue;
    }

    public boolean isOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        boolean changed = online != this.online;

        this.online = online;
        if (getGuild() != null) {
            setGuild(getGuild()); // Hack to ensure that all chars have the same instance of a guild
            Guild g = getGuild();
            GuildMember gm = g.getMemberByCharID(getId());
            if (gm == null) {
                // Mismatch between guild and player
                setGuildId(0);
                setGuild(null);
            } else {
                gm.setOnline(online);
                gm.setChr(online ? this : null);
                Alliance ally = getGuild().getAlliance();
                if (ally != null) {
                    ally.broadcast(WvsContext.allianceResult(
                            AllianceResult.notifyLoginOrLogout(ally, g, gm, changed)), this);
                } else {
                    getGuild().broadcast(WvsContext.guildResult(
                            GuildResult.notifyLoginOrLogout(g, gm, online, changed)), this);
                }
            }
        }
        if (getParty() != null) {
            PartyMember pm = getParty().getPartyMemberByID(getId());
            if (pm != null) {
                pm.setChr(online ? this : null);
                getParty().broadcast(WvsContext.partyResult(PartyResult.userMigration(getParty(), this)));
                getParty().updateHealth();
            }
        }
        for (Friend f : getOnlineFriends()) {
            boolean account = f.isAccount();
            Char chr = f.getChr();
            Friend me;
            if (account) {
                me = chr.getUser().getFriendByUserID(getAccount().getId());
            } else {
                me = chr.getFriendByCharID(getId());
            }
            if (me != null) {
                me.setChr(online ? this : null);
                me.setFlag(account ?
                        online ? FriendFlag.AccountFriendOnline : FriendFlag.AccountFriendOffline
                        : online ? FriendFlag.FriendOnline : FriendFlag.FriendOffline);
                chr.write(WvsContext.friendResult(FriendResult.updateFriend(me)));
            }
        }
    }

    public void setParty(Party party) {
        if (party != null) {
            setPartyID(party.getId());
        } else {
            setPartyID(0);
        }
        this.party = party;
    }

    public Party getParty() {
        return party;
    }

    /**
     * Logs a User fully out (after crash/request to go to world select).
     */
    public void logout() {
        try {
            stopTimers();
            getOffenseManager().punishLieDetectorEvasion(false);
            getOffenseManager().stopLieDetectorTimer();
            Field field = getField();
            removeLifesFromCurrentField();

            Events.onWarp(this, field, null);

            getClient().getChannelInstance().removeChar(this);

            if (getFieldID() == -1) {
                // player was in cash shop
                field = getOrCreateFieldByCurrentInstanceType(getPreviousFieldID());
                if (getAvatarData() != null && getAvatarData().getCharacterStat() != null && field != null) {
                    getAvatarData().getCharacterStat().setPosMap(field.getId());
                }
            }
            if (field != null && field.getInfo() != null && field.getInfo().getForcedReturn() != GameConstants.NO_MAP_ID) {
                setFieldID(getField().getInfo().getForcedReturn());
            }

            if (getMiniRoom() != null) {
                getMiniRoom().charLeave(this, RoomLeaveType.LeftRoom);
            }

            if (getInstance() != null) {
                getInstance().removeChar(this, false);
            }
            if (getMemorialCubeInfo() != null) {
                //getMemorialCubeInfo().applyOldEquip(this);
                getMemorialCubeInfo().applyPotential(true);
            }
            if (field != null && FieldConstants.isUnionRaidField(field.getId()) && getUnionRaid() != null) {
                getUnionRaid().updateTotalDamageDone(this, true);
                getUnionRaid().playerLeave();
            }
            if (getSurpriseMission() != null) {
                SurpriseMissionModule.removeSurpriseMission(this);
            }

            Arrays.stream(ScriptType.values()).forEach(
                    st -> getScriptManager().stop(st)
            );
            getScriptManager().stopEvents();
            setOnline(false);
            if (getField() != null) {
                getField().removeChar(this);
            }
            if (getUser() != null) {
                getUser().setCurrentChr(null);
            }
            clearBuyBack();

        } catch (Exception e) {
            ErrorLogger.logAsClientError(e);
        } finally {
            try {
                userDao.saveOrUpdate(getUser(), this);
            } catch (Exception e) {
                ErrorLogger.logAsClientError(e);
            }
            Server.getInstance().removeUser(getUser()); // don't unstuck, as that would save the account (twice)
            unload();
        }

    }

    private void clearBuyBack() {
        for (var npcItem : getBuyBack()) {
            if (!npcItem.getItem().isInit()) {
                getRemovedItems().add(npcItem.getItem());
            }
        }
        getBuyBack().clear();
    }

    public int getSubJob() {
        return getAvatarData().getCharacterStat().getSubJob();
    }

    @Deprecated // Don't use. instead from Instance class, remove Char
    public void setInstance(Instance instance) {
        this.instance = instance;
    }

    public Instance getInstance() {
        return instance;
    }

    private void showProperUI(int fromField, int toField) {
        if (GameConstants.getMaplerunnerField(toField) > 0 && GameConstants.getMaplerunnerField(fromField) <= 0) {
            write(FieldPacket.openUI(UIType.PLATFORM_STAGE_LEAVE));
        } else if (GameConstants.getMaplerunnerField(fromField) > 0 && GameConstants.getMaplerunnerField(toField) <= 0) {
            write(FieldPacket.closeUI(UIType.PLATFORM_STAGE_LEAVE));
        }
    }

    public int calculateBulletIDForAttack() {
        Item weapon = getEquippedInventory().getFirstItemByBodyPart(BodyPart.Weapon);
        if (weapon == null) {
            return 0;
        }
        Predicate<Item> p;
        int id = weapon.getItemId();

        if (ItemConstants.isClaw(id)) {
            p = i -> ItemConstants.isThrowingStar(i.getItemId());
        } else if (ItemConstants.isBow(id)) {
            p = i -> ItemConstants.isBowArrow(i.getItemId());
        } else if (ItemConstants.isXBow(id)) {
            p = i -> ItemConstants.isXBowArrow(i.getItemId());
        } else if (ItemConstants.isGun(id)) {
            p = i -> ItemConstants.isBullet(i.getItemId());
        } else {
            return 0;
        }
        Item i = getConsumeInventory().getItems().stream().sorted(Comparator.comparing(Item::getBagIndex)).filter(p).findFirst().orElse(null);
        return i != null ? i.getItemId() : 0;
    }

    public int getBulletIDForAttack() {
        return bulletIDForAttack;
    }

    public void setBulletIDForAttack(int bulletIDForAttack) {
        this.bulletIDForAttack = bulletIDForAttack;
    }

    public void setShop(NpcShopDlg shop) {
        this.shop = shop;
    }

    public NpcShopDlg getShop() {
        return shop;
    }

    public boolean canHold(Item item) {
        List<Item> canHoldList = new ArrayList<>();
        canHoldList.add(item);
        return canHold(canHoldList);
    }

    public boolean canHold(Item item, int quantity) {
        List<Item> canHoldList = new ArrayList<>();
        canHoldList.add(item);
        item.setQuantity(quantity);
        return canHold(canHoldList);
    }

    /**
     * Checks if this Char can hold an Item in their inventory, assuming that its quantity is 1.
     *
     * @param id       the item's itemID
     * @param quantity the item's quantity
     * @return whether or not this Char can hold an item in their inventory
     */
    public boolean canHoldItem(int id, int quantity) {
        boolean canHold;
        boolean isEquip = ItemConstants.isEquip(id);
        boolean isCash = ItemConstants.isCash(id);

        ItemInfo ii;
        InvType it;
        Inventory inv;

        if (!isEquip) {
            ii = ItemData.getItemInfoByID(id);
            if (ii == null) {
                return false;
            }
            it = ii.getInvType();
            inv = getInventoryByType(it);
        } else {
            ii = null;
            it = isCash ? DEC : EQUIP;
            inv = getInventoryByType(it);
        }

        if (!it.isStackable(id)) {
            // Non stackables, such as Equips/Rechargables/Pets
            return !inv.isFull();
        } else {
            //Item
            if (!inv.isFull()) {
                return true;
            }

            Item curItem = inv.getItemByItemIDAndStackable(id); // look for the first item that's not maxStack
            canHold = (curItem != null && curItem.getQuantity() + quantity <= ii.getSlotMax());
        }
        return canHold;
    }

    public boolean canHold(int id, int quantity) {
        Item item = ItemData.getItemDeepCopy(id);
        ItemInfo itemInfo = ItemData.getItemInfoByID(id);
        List<Item> items = new ArrayList<>();
        if (itemInfo != null) {
            if (itemInfo.getSlotMax() == 1) {
                item.setQuantity(1);
                for (int i = 0; i < quantity; i++) {
                    items.add(item);
                }
            }
        }
        if(items.size() == 0){
            item.setQuantity(quantity);
            items.add(item);
        }
        return canHold(items);
    }

    /**
     * Recursive function that checks if this Char can hold a list of items in their inventory.
     *
     * @param items the list of items this char should be able to hold
     * @return whether or not this Char can hold the list of items
     */
    public boolean canHold(List<Item> items) {
        return canHold(items, deepCopyForInvCheck());
    }

    private boolean canHold(List<Item> items, Char deepCopiedChar) {
        // explicitly use a Char param to avoid accidentally adding items
        if (items.size() == 0) {
            return true;
        }

        Item item = items.get(0);
        if (canHoldItem(item.getItemId(), item.getQuantity())) {
            Inventory inv = deepCopiedChar.getInventoryByType(item.getInvType());

            //Can't have an early out, because items can be part of multiple inventories
            /*if (inv.getEmptySlots() >= items.size()) {
                return true;
            }*/

            inv.addItem(item);
            items.remove(item);
            return deepCopiedChar.canHold(items, deepCopiedChar);
        } else {
            return false;
        }

    }

    private Char deepCopyForInvCheck() {
        Char chr = new Char();
        chr.setEquippedInventory(getEquippedInventory().deepCopy());
        chr.setEquipInventory(getEquipInventory().deepCopy());
        chr.setConsumeInventory(getConsumeInventory().deepCopy());
        chr.setEtcInventory(getEtcInventory().deepCopy());
        chr.setInstallInventory(getInstallInventory().deepCopy());
        chr.setCashInventory(getCashInventory().deepCopy());
        chr.setDecInventory(getDecInventory().deepCopy());
        return chr;
    }

    /**
     * Returns the set of personal (i.e., non-account) friends of this Char.
     *
     * @return The set of personal friends
     */
    public Set<Friend> getFriends() {
        if (friends == null) {
            friends = friendDao.byChar(this);
        }

        return friends;
    }

    public void setFriends(Set<Friend> friends) {
        this.friends = friends;
    }

    /**
     * Returns the total list of friends of this Char + the owning Account's friends.
     *
     * @return The total list of friends
     */
    public Set<Friend> getAllFriends() {
        Set<Friend> res = new HashSet<>(getFriends());
        res.addAll(getUser().getFriends());
        return res;
    }

    public Friend getFriendByCharID(int charID) {
        return getFriends().stream().filter(f -> f.getFriendID() == charID).findAny().orElse(null);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
        if (account != null && account.getTrunk() != null) {
            account.getTrunk().setChr(this);
        }
    }

    public void removeFriend(Friend friend) {
        if (friend != null) {
            friend.setChr(null);
            getFriends().remove(friend);
            friendDao.delete(friend);
        }
    }

    public void removeFriendByID(int charID) {
        removeFriend(getFriendByCharID(charID));
    }

    public void addFriend(Friend friend) {
        if (getFriendByCharID(friend.getFriendID()) == null) {
            friend.setChr(this);
            getFriends().add(friend);
        }
    }

    public List<Macro> getMacros() {
        if (macros == null) {
            macros = macroDao.byChar(this);
        }
        return macros;
    }

    public void setMacros(List<Macro> macros) {
        this.macros = macros;
    }

    public void encodeDamageSkins(OutPacket outPacket) {
        DamageSkinSaveData defaultSkin = DamageSkinSaveData.DEFAULT_SKIN;
        outPacket.encodeByte(true); // hasDamageSkins. Always true in this design.

        // check ida for structure
        if (getDamageSkin() != null) {
            getDamageSkin().encode(outPacket);
        } else {
            defaultSkin.encode(outPacket);
        }

        if (getPremiumDamageSkin() != null) {
            getPremiumDamageSkin().encode(outPacket);
        } else {
            defaultSkin.encode(outPacket);
        }

        defaultSkin.encode(outPacket); // unit damage skin

        outPacket.encodeShort(GameConstants.DAMAGE_SKIN_MAX_SIZE); // slotCount
        outPacket.encodeShort(getAccount().getDamageSkins().size());
        for (DamageSkinSaveData dssd : getAccount().getDamageSkins()) {
            dssd.encode(outPacket);
        }
    }

    public boolean canAddMoney(long reqMoney) {
        return getMoney() + reqMoney >= 0 && getMoney() + reqMoney <= GameConstants.MAX_MONEY;
    }

    public void addPet(Pet pet) {
        getPets().add(pet);
    }

    public void removePet(Pet pet) {
        getPets().remove(pet);
    }

    public void initPets() {
        var activePets = getCashInventory().getItems()
                .stream()
                .filter(i -> i instanceof PetItem && ((PetItem) i).getActiveState() > 0)
                .map(i -> (PetItem) i).collect(Collectors.toList());
        for (PetItem pi : activePets) {
            Pet p = getPets().stream().filter(pet -> pet.getItem().equals(pi)).findAny().orElse(null);
            if (p == null) {
                // only create a new pet if the active state is > 0 (active), but isn't added to our own list yet
                p = pi.createPet(this);
                p.setIdx(pi.getActiveState() - 1);
                addPet(p);
            }
            p.setPosition(getPosition());
            getField().broadcastPacket(UserLocal.petActivateChange(p, true, (byte) 0));
        }

        updatePetIgnoredItemList();
    }

    public Pet getPetByIdx(int idx) {
        return getPets().stream()
                .filter(p -> p.getIdx() == idx)
                .findAny()
                .orElse(null);
    }

    public int getFirstPetIdx() {
        int chosenIdx = -1;
        for (int i = 0; i < GameConstants.MAX_PET_AMOUNT; i++) {
            Pet p = getPetByIdx(i);
            if (p == null) {
                chosenIdx = i;
                break;
            }
        }
        return chosenIdx;
    }

    /**
     * Initializes the equips' enchantment stats.
     */
    public void initEquips() {
        for (Equip e : getEquippedInventory()
                .getItems()
                .stream()
                .filter(e -> e instanceof Equip)
                .map(e -> (Equip) e)
                .collect(Collectors.toList())) {
            e.recalcEnchantmentStats();
            if (ItemConstants.isSymbol(e.getItemId())) {
                e.initSymbolStats(e.getSymbolLevel(), e.getSymbolExp(), getJob());
            }
        }
        for (Equip e : getEquipInventory()
                .getItems()
                .stream()
                .filter(e -> e instanceof Equip)
                .map(e -> (Equip) e)
                .collect(Collectors.toList())) {
            e.recalcEnchantmentStats();
            if (ItemConstants.isSymbol(e.getItemId())) {
                e.initSymbolStats(e.getSymbolLevel(), e.getSymbolExp(), getJob());
            }
        }
    }

    public boolean hasSoulWeapon() {
        Equip weapon = (Equip) getEquippedItemByBodyPart(BodyPart.Weapon);
        return weapon != null && weapon.getSoulSocketId() != 0;
    }

    public boolean hasNotMaxSoulMP() {
        return this.getTemporaryStatManager() != null
                && this.getTemporaryStatManager().hasStat(SoulMP)
                && this.getTemporaryStatManager().getOption(SoulMP).nOption < ItemConstants.MAX_SOUL_CAPACITY;
    }

    public void initSoulMP() {
        Equip weapon = (Equip) getEquippedItemByBodyPart(BodyPart.Weapon);
        TemporaryStatManager tsm = getTemporaryStatManager();
        if (hasSoulWeapon() && !tsm.hasStat(SoulMP)) {
            Option o = new Option();
            o.rOption = SoulCollectionConstants.getSoulSkillFromSoulID(weapon.getSoulOptionId());
            o.xOption = ItemConstants.MAX_SOUL_CAPACITY;
            tsm.putCharacterStatValue(SoulMP, o);
            tsm.sendSetStatPacket();
        }
    }

    public boolean hasInvincibilityCTS() {
        TemporaryStatManager tsm = getTemporaryStatManager();
        return tsm.hasStat(IndieNotDamaged) || tsm.hasStat(NotDamaged);
    }

    public void createSoulOrb(Position pos) {
        Item item = new Item();
        item.setItemId(ItemConstants.SOUL_MP_ITEM_ID);
        Drop drop = new Drop(ItemConstants.SOUL_MP_ITEM_ID, item);
        drop.setNotSoulOrb(false);
        drop.setDropType(DropType.Mesos);

        for (int i = 0; i < ItemConstants.SOUL_ORBS_PER_DEATH; i++) {
            write(DropPool.dropEnterField(drop, pos, this.getId(), false));
            write(DropPool.dropLeaveField(drop.getObjectId(), this.getId()));
            getTemporaryStatManager().addSoulMPFromMobDeath();
        }
    }

    public MonsterBookInfo getMonsterBookInfo() {
        return monsterBookInfo;
    }

    public void setMonsterBookInfo(MonsterBookInfo monsterBookInfo) {
        this.monsterBookInfo = monsterBookInfo;
    }

    public void setDamageCalc(DamageCalc damageCalc) {
        this.damageCalc = damageCalc;
    }

    public DamageCalc getDamageCalc() {
        return damageCalc;
    }

    /**
     * Gets the current amount of a given stat the character has. Includes things such as skills, items, etc...
     *
     * @param baseStat the requested stat
     * @return the amount of stat
     */
    private double getTotalStatAsDouble(BaseStat baseStat) {
        // TODO cache this completely
        double stat = 0;
        if (baseStat == null) {
            return stat;
        }

        if (baseStat == BaseStat.mmp && JobConstants.isDemonSlayer(getJob())) {
            return getMaxDemonForce();
        }

        if (baseStat.isNonAdditiveStat()) {
            // stats like ied, final damage
            List<Integer> statSet = new ArrayList<>();
            // Stat gained by passives
            if (getNonAddBaseStats().get(baseStat) != null) {
                statSet.addAll(getNonAddBaseStats().get(baseStat));
            }

            // Stat gained by Job specific skills
            if (getJobHandler() != null && getJobHandler().getJobNonAddBaseStat(baseStat) != null) {
                statSet.addAll(getJobHandler().getJobNonAddBaseStat(baseStat)); // Should only be used for 'conditional passives' such as Paladin: Shield Mastery or Bucc: Energy Charged
            }

            // psdWT Skills
            statSet.addAll(getTotalWeaponTypePSDNonAdditive(baseStat));

            // Stat gained by buffs
            if (getTemporaryStatManager().getNonAddBaseStats().get(baseStat) != null) {
                statSet.addAll(getTemporaryStatManager().getNonAddBaseStats().get(baseStat));
            }
            // Stat gained by equips
            var nonAddBaseStat = getEquippedInventory().getNonAddBaseStat(baseStat);
            if (nonAddBaseStat != null) {
                statSet.addAll(nonAddBaseStat);
            }
            // Character potential
            for (CharacterPotential cp : getPotentials()) {
                Skill skill = cp.getSkill();
                if (skill == null) continue;

                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                Map<BaseStat, Integer> stats = si.getBaseStatValues(this, skill.getCurrentLevel());
                statSet.add(stats.getOrDefault(baseStat, 0));
            }
            if (getUnion() != null) {
                var unionNonAddBS = this.getUnion().getGridBaseStat(baseStat);
                if (unionNonAddBS > 0) {
                    statSet.add(unionNonAddBS);
                }
            }
            // FamiliarCodex System
            if (getFamiliarCodexManager() != null) {
                var fcmNonAddBS = getFamiliarCodexManager().getBaseStat(baseStat);
                if (fcmNonAddBS > 0) {
                    statSet.add((int) fcmNonAddBS);
                }
            }
            statSet = statSet.stream().filter(val -> val != 0).collect(Collectors.toList());

            switch (baseStat) {
                case fd:
                    stat = 100;
                    for (int s : statSet) {
                        stat *= 1D + s / 100D;
                    }
                    stat -= 100;
                    break;
                case ied:
                    stat = 100;
                    for (int s : statSet) {
                        stat *= 1D - s / 100D;
                    }
                    stat = 100 - (int) stat;
                    break;
            }
        } else {
            // Stat allocated by sp
            stat += baseStat.toStat() == null ? 0 : getStat(baseStat.toStat());

            // Stat gained by Union Grid Bonuses
            if (getUnion() != null) {
                stat += this.getUnion().getGridBaseStat(baseStat);
            }

            // Stat gained by passives
            if (baseStat.isLevelStat()) {
                stat += getBaseStats().getOrDefault(baseStat, 0L) / 100D;
            } else {
                stat += getBaseStats().getOrDefault(baseStat, 0L);
            }

            // Stat gained by Job specific skills
            if (getJobHandler() != null) {
                stat += getJobHandler().getJobBaseStat(baseStat); // Should only be used for 'conditional passives' such as Paladin: Shield Mastery or Bucc: Energy Charged
            }

            // psdWT Skills
            stat += getTotalWeaponTypePSDAdditive(baseStat);

            // Core Aura - Jett Link Skill
            if (getAccount() != null && getAccount().getCoreAura() != null) {
                stat += getAccount().getCoreAura().getBaseStat(baseStat);
            }

            // Stat gained by buffs
            int ctsStat = getTemporaryStatManager().getBaseStats().getOrDefault(baseStat, 0);
            stat += ctsStat;

            // Stat gained by the stat's corresponding "per level" value from equips (affected by %)
            var levelVar = baseStat.getLevelVar();
            if (levelVar != null) {
                stat += getEquippedInventory().getBaseStat(levelVar) * (getLevel() / 10); // int division intended
            }

            // Stat gained by equips
            stat += getEquippedInventory().getBaseStat(baseStat);
            if (JobConstants.isKanna(getJob())) { // Blessing of the Five Elements
                if (baseStat == BaseStat.mhp) {
                    stat += getEquippedInventory().getBaseStat(BaseStat.mmp);
                } else if (baseStat == BaseStat.mhpR) {
                    stat += getEquippedInventory().getBaseStat(BaseStat.mmpR);
                } else if (baseStat == BaseStat.mad) {
                    stat += (int) (getTotalStatAsDouble(BaseStat.mhp) / 700D);
                }
            }

            // Stat gained by the stat's corresponding rate value
            if (baseStat.getRateVar() != null) {
                stat += stat * (getTotalStat(baseStat.getRateVar()) / 100D);
            }

            // Stat gained by the stat's corresponding "per level" value from passives (not affected by %)
            if (levelVar != null) {
                stat += getBaseStats().getOrDefault(levelVar, 0L) * getLevel();
            }


            // --- Everything below this doesn't get affected by the rate var

            // Character potential
            for (CharacterPotential cp : getPotentials()) {
                Skill skill = cp.getSkill();
                if (skill == null) continue;

                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                Map<BaseStat, Integer> stats = si.getBaseStatValues(this, skill.getCurrentLevel());
                if (baseStat.isLevelStat() && stats.containsKey(baseStat)) {
                    stat += 1D / stats.get(baseStat);
                } else {
                    stat += stats.getOrDefault(baseStat, 0);
                }
            }

            // Hyper stat (STR/INT/DEX/LUK)
            stat += getHyperStatValue(baseStat);

            // Stat gained by Union Member Bonuses
            if (getUnion() != null) {
                stat += this.getUnion().getMemberBaseStat(baseStat);
            }

            // Familiar Effect
            if (getFamiliarCodexManager() != null) {
                stat += getFamiliarCodexManager().getBaseStat(baseStat);
            }

            // Arcane Symbols
            stat += getEquippedInventory().getArcBaseStat(baseStat);
        }

        return stat;
    }

    private List<Integer> getTotalWeaponTypePSDNonAdditive(BaseStat baseStat) {
        var returnList = new ArrayList<Integer>();

        for (var skill : getPsdWTSkills()) {
            var wt = getEquippedItemByBodyPart(BodyPart.Weapon);

            // No Weapon Being held
            if (wt == null) {
                break;
            }

            var si = SkillData.getSkillInfoById(skill.getSkillId());

            // Skill has no SkillInfo
            if (si == null) {
                continue;
            }

            var skillStatDoubleMap = si.getPsdWT().getOrDefault(ItemConstants.getWeaponType(wt.getItemId()), new HashMap<>());
            for (var entry : skillStatDoubleMap.entrySet()) {
                var bs = entry.getKey().getBaseStat();
                var value = entry.getValue();

                if (bs == baseStat) {
                    returnList.add(value.intValue());
                }
            }
        }

        return returnList;
    }

    private double getTotalWeaponTypePSDAdditive(BaseStat baseStat) {
        var returnVal = 0D;

        for (var skill : getPsdWTSkills()) {
            var wt = getEquippedItemByBodyPart(BodyPart.Weapon);

            // No Weapon Being held
            if (wt == null) {
                break;
            }

            var si = SkillData.getSkillInfoById(skill.getSkillId());

            // Skill has no SkillInfo
            if (si == null) {
                continue;
            }

            var skillStatDoubleMap = si.getPsdWT().getOrDefault(ItemConstants.getWeaponType(wt.getItemId()), new HashMap<>());
            for (var entry : skillStatDoubleMap.entrySet()) {
                var bs = entry.getKey().getBaseStat();
                var value = entry.getValue();

                if (bs == baseStat) {
                    returnVal += value.intValue();
                }
            }
        }

        return returnVal;
    }

    private double getMaxDemonForce() {
        var shield = getEquippedItemByBodyPart(BodyPart.Shield);
        var demonForce = 10;
        if (shield != null && ItemConstants.isDemonAegis(shield.getItemId())) {
            demonForce += ((Equip) shield).getiMaxMp();
        }
        var maxDfSkill = getSkill(80000406); // hyper stat
        if (maxDfSkill != null) {
            var skillInfo = SkillData.getSkillInfoById(maxDfSkill.getSkillId());
            demonForce += skillInfo.getValue(SkillStat.MDF, maxDfSkill.getCurrentLevel());
        }

        return demonForce;
    }

    private double getHyperStatValue(BaseStat baseStat) {
        int skillId = -1;
        switch (baseStat) {
            case str:
                skillId = 80000400;
                break;
            case dex:
                skillId = 80000401;
                break;
            case inte:
                skillId = 80000402;
                break;
            case luk:
                skillId = 80000403;
                break;
        }

        if (skillId == -1) {
            return 0;
        }

        var skill = getSkill(skillId);
        if (skill == null) {
            return 0;
        }

        var si = SkillData.getSkillInfoById(skillId);
        var slv = skill.getCurrentLevel();

        var baseStats = si.getBaseStatValues(this, slv);
        if (baseStats.containsKey(baseStat)) {
            return baseStats.get(baseStat);
        }

        return 0;
    }

    public int getTotalStat(BaseStat stat) {
        return (int) getTotalStatAsDouble(stat);
    }

    /**
     * Gets a total list of basic stats that a character has, including from skills, items, etc...
     *
     * @return the total list of basic stats
     */
    public Map<BaseStat, Integer> getTotalBasicStats() {
        Map<BaseStat, Integer> stats = new HashMap<>();
        for (BaseStat bs : BaseStat.values()) {
            stats.put(bs, getTotalStat(bs));
        }
        return stats;
    }

    /**
     * Sets whether or not this user has chosen to use up an item to protect their buffs upon next respawn.
     *
     * @param buffProtector buff protectability
     */
    public void setBuffProtector(boolean buffProtector) {
        this.buffProtector = buffProtector;
    }

    /**
     * Returns whether this user has chosen to activate a buff protector for their next respawn.
     *
     * @return buff protectability
     */
    public boolean hasBuffProtector() {
        return buffProtector;
    }

    /**
     * Returns the item the user has for protecting buffs.
     *
     * @return the Item the user has for prtoecting buffs, or null if there is none.
     */
    public Item getBuffProtectorItem() {
        int[] buffItems = {5133000, 5133001, 4143000};
        Item item = null;
        for (int id : buffItems) {
            item = getConsumeInventory().getItemByItemID(id);
            if (item == null) {
                item = getCashInventory().getItemByItemID(id);
            }
            if (item != null) {
                // just break when an item was found.
                break;
            }
        }
        return item;
    }

    public Item getExpProtectorItem() {
        int[] buffItems = {5130000};
        Item item = null;
        for (int id : buffItems) {
            item = getConsumeInventory().getItemByItemID(id);
            if (item == null) {
                item = getCashInventory().getItemByItemID(id);
            }
            if (item != null) {
                // just break when an item was found.
                break;
            }
        }
        return item;
    }

    public Map<Integer, Long> getSkillCoolTimes() {
        if (skillCoolTimes == null) {
            skillCoolTimes = skillCooltimeDao.byChar(this);
        }
        return skillCoolTimes;
    }

    public void setSkillCoolTimes(Map<Integer, Long> skillCoolTimes) {
        this.skillCoolTimes = skillCoolTimes;
    }

    /**
     * Sets a SkillId on cooltime for nextUsableTime - CurrentTime.
     * Does NOT take into account for Skill Cooltime Reductions
     *
     * @param skillId        Skill that is set on cooldown
     * @param nextusabletime Time when it will be off cooldown
     */
    private void addSkillCoolTime(int skillId, long nextusabletime) {
        getSkillCoolTimes().put(skillId, nextusabletime);
        write(UserLocal.skillCooltimeSetM(skillId, (int) (nextusabletime - Util.getCurrentTimeLong())));
    }

    public void addSkillCoolTime(int skillId, int cooldownTimeMS) {
        addSkillCoolTime(skillId, Util.getCurrentTimeLong() + cooldownTimeMS);
        if (SkillConstants.isShowCooltimeInBuffBarSkill(Math.abs(skillId))) {
            applyCooltimeCTS(Math.abs(skillId), cooldownTimeMS);
        }
    }

    public void resetSkillCoolTime(int skillId) {
        if (hasSkillOnCooldown(skillId)) {
            addSkillCoolTime(skillId, 0);
            write(UserLocal.skillCooltimeSetM(skillId, 0));

            if (SkillConstants.isShowCooltimeInBuffBarSkill(skillId)) {
                getTemporaryStatManager().removeStatsBySkill(skillId);
            }
        }
    }

    public long getSkillCooltimeBySkillId(int skillId) {
        return getSkillCoolTimes().getOrDefault(skillId, 0L);
    }

    public void reduceSkillCoolTime(int skillId, int cooltimeReduction) {
        reduceSkillCoolTime(Collections.singletonList(skillId), cooltimeReduction);
    }

    public void reduceSkillCoolTime(List<Integer> skills, int cooltimeReduction) {
        var tuples = new ArrayList<Tuple<Integer, Integer>>();
        skills.forEach(s -> {
            {
                long nextUsableTime = getSkillCooltimeBySkillId(s) - cooltimeReduction;
                getSkillCoolTimes().put(s, nextUsableTime);

                if (SkillConstants.isShowCooltimeInBuffBarSkill(s)) {
                    var tuple = new Tuple<>(s, (int) getRemainingCoolTime(s));
                    tuples.add(tuple);
                }
            }
        });
        write(UserLocal.skillCooltimeReduce(skills, cooltimeReduction));

        if (tuples.size() > 0) {
            applyCooltimeCTS(tuples);
        }
    }

    public long getRemainingCoolTime(int skillId) {
        var nextAvailableTime = getSkillCooltimeBySkillId(skillId);
        if (System.currentTimeMillis() < nextAvailableTime) {
            return Math.max(0, nextAvailableTime - System.currentTimeMillis());
        }
        return 0L;
    }

    /**
     * Checks whether or not a skill is currently on cooldown.
     *
     * @param skillID the skill's id to check
     * @return whether or not a skill is currently on cooldown
     */
    public boolean hasSkillOnCooldown(int skillID) {
        return getSkillCooltimeBySkillId(skillID) > System.currentTimeMillis();
    }

    /**
     * Checks if a skill is allowed to be cast, according to its cooltime. If it is allowed, it immediately sets
     * the cooltime and stores the next moment where the skill is allowed. Skills without cooltime are always allowed.
     *
     * @param skillID the skill id of the skill to put on cooldown
     * @return whether or not the skill was allowed
     */
    public boolean checkAndSetSkillCooltime(int skillID, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        skillID = SkillConstants.getCorrectCooltimeSkillID(skillID);
        var checkType = getJobHandler().canBypassCooldownCheck(skillID, attackInfo, sui, source);

        // Bypass Both the Cooldown check AND the cooldown set
        if (checkType.equals(BypassCheckAndCooldown)) {
            return true;
        }

        // Bypass the cooldown check ONLY
        if (!checkType.equals(BypassCheck) && hasSkillOnCooldown(skillID)) {
            return false;
        } else {
            Skill skill = getSkill(skillID);
            if (skill != null && SkillData.getSkillInfoById(skillID).hasCooltime()) {
                setSkillCooldown(skillID, (byte) skill.getCurrentLevel(), attackInfo, sui, source);
            }
            return true;
        }
    }

    public void setSkillCooldown(int skillID, int slv) {
        setSkillCooldown(skillID, slv, new AttackInfo(), new SkillUseInfo(), SkillUseSource.SkillUseRequest);
    }

    /**
     * Sets a skill's cooltime according to their property in the WZ files, and stores the moment where the skill
     * comes off of cooldown. Takes into account for Cooltime Reductions
     *
     * @param skillId the skill's id to set
     * @param slv     the current skill level
     */
    public void setSkillCooldown(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        skillId = SkillConstants.getCorrectCooltimeSkillID(skillId);
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si != null) {
            int cdInSec = si.getValue(SkillConstants.getCooltimeSkillStat(skillId), slv);
            int cdInMillis = cdInSec > 0 ? cdInSec * 1000 : si.getValue(SkillStat.cooltimeMS, slv);

            // Grandis Goddess' Blessing - Nova
            TemporaryStatManager tsm = getTemporaryStatManager();
            Option o = tsm.getOptByCTSAndSkill(BlessingVSkill, Job.GRANDIS_BLESSING_NOVA);
            if (o != null && !SkillConstants.isNoCooltimeResetSkill(skillId)) { // has Nova Blessing
                var remainingBypasses = o.xOption;
                if (remainingBypasses > 0 && Util.succeedProp(o.yOption)) {
                    getJobHandler().deductBypassCountNovaBlessing();
                    return; // Don't set Skill on CD
                }
            }

            // Cooldown Bypass %
            if (!SkillConstants.isNoCooltimeResetSkill(skillId) &&
                    Util.succeedProp(getTotalStat(BaseStat.noCoolProp)) && !SkillConstants.isKeyDownSkill(skillId)) {
                return;
            }

            int alteredcd = getJobHandler().alterCooldownSkill(skillId, slv, attackInfo, sui, source); // for active cd reductions / custom cd reductions
            if (alteredcd >= 0) {
                cdInMillis = alteredcd;
            }

            // CD Reduction
            // (reduceCooltimeR		|  Mercedes Union Bonus  or  Cooldown Cutter Hyper Skill)
            // (reduceCooltime		|  Cooltime -X sec ItemOption)
            int redCdR = getTotalStat(BaseStat.reduceCooltimeR);
            int redCd = getTotalStat(BaseStat.reduceCooltime) * 1000;

            int reductionFromCooldownCutter = SkillConstants.getReduceCooltimeRforSkillId(this, skillId);
            if (reductionFromCooldownCutter > 0) {
                cdInMillis = cdInMillis - (int) (cdInMillis * (reductionFromCooldownCutter / 100D));
            }

            if (cdInMillis > 5000
                    && !SkillConstants.isNoCooltimeReductionAppliedSkill(skillId)
                    && (redCdR > 0 || redCd > 0)) {
                int newCd = cdInMillis;

                // reduceCooltimeR
                if (redCdR > 0) { // if has reduceCooltimeR
                    int redCdRtoMS = (int) (cdInMillis * (redCdR / 100D));
                    newCd = cdInMillis - redCdRtoMS;
                }

                // reduceCooltime
                if (redCd > 0) { // if has reduceCooltime
                    int unusedMS = Math.max(0, redCd - Math.max(0, (newCd - GameConstants.COOLTIME_THRESHOLD_MS)));
                    newCd = newCd - Math.max(0, (redCd - unusedMS));
                    if (unusedMS > 0) {
                        int convertToR = unusedMS / 200; // converts MS into % at a rate of 0.01sec -> 0.05% cdr
                        int convertToMS = (int) (newCd * (convertToR / 100D));
                        newCd = newCd - convertToMS;
                    }
                }

                if (newCd < GameConstants.NO_REDUCE_COOLTIME_CD_MS) { // if reduceCooltime results in a CD below 5, we ignore the effect of reduceCooltime
                    newCd = GameConstants.NO_REDUCE_COOLTIME_CD_MS;
                }
                cdInMillis = newCd;
            }

            // RuneStone of Skill
            if (getTemporaryStatManager().hasStatBySkillId(RuneStone.LIBERATE_THE_RUNE_OF_SKILL) && cdInMillis > 5000 && !SkillConstants.isNoCooltimeResetSkill(skillId)) {
                cdInMillis = 5000;
            }

            if (!hasSkillCDBypass() && cdInMillis > 0) {
                addSkillCoolTime(skillId, cdInMillis);
            }
        }
    }

    /**
     * Used for Logging in.
     */
    private void updateCooltimeBuffs() {
        List<Tuple<Integer, Integer>> tuples = new ArrayList<>();
        getSkillCoolTimes().keySet().stream()
                .filter(SkillConstants::isShowCooltimeInBuffBarSkill)
                .forEach(s -> tuples.add(new Tuple<>(Math.abs(s), (int) getRemainingCoolTime(s))));
        if (tuples.size() > 0) {
            applyCooltimeCTS(tuples);
        }
    }

    public void applyCooltimeCTS(int skillId, int cooltimeMS) {
        applyCooltimeCTS(Collections.singletonList(new Tuple<>(skillId, cooltimeMS)));
    }

    public void applyCooltimeCTS(List<Tuple<Integer, Integer>> tuples) {
        for (var tuple : tuples) {
            applyCooltimeCTS(tuple);
        }
        getTemporaryStatManager().sendSetStatPacket();
    }


    /**
     * @Deprecated This method is not to be invoked directly.
     * Use {@link Char#applyCooltimeCTS(int, int)} or {@link Char#applyCooltimeCTS(List)}
     */
    @Deprecated
    private void applyCooltimeCTS(Tuple<Integer, Integer> tuple) {
        var skillId = tuple.getLeft();
        var cooltimeMS = tuple.getRight();

        var cts = SkillCooltime;

        switch (skillId) {
            case Bishop.HEAVENS_DOOR_SKILL_USE:
                cts = HeavensDoorCooltime;
                break;

            case Bishop.HOLY_MAGIC_SHELL_COOLTIME:
                cts = HolyMagicShellCooltime;
                break;

            case RuneStone.SEALED_RUNE_POWER:
                cts = SealedRuneCooltime;
                break;
        }

        var o = new Option(1, skillId, cooltimeMS);
        o.setInMillis(true);
        getTemporaryStatManager().putCharacterStatValue(cts, o, true);
    }

    public CharacterPotentialMan getPotentialMan() {
        return potentialMan;
    }

    public Set<CharacterPotential> getPotentials() {
        if (potentials == null) {
            potentials = cpDao.byChar(this);
        }
        return potentials;
    }

    public void setPotentials(Set<CharacterPotential> potentials) {
        this.potentials = potentials;
    }

    public int getHonorExp() {
        return getAvatarData().getCharacterStat().getHonorExp();
    }

    public void setHonorExp(int honorExp) {
        getAvatarData().getCharacterStat().setHonorExp(honorExp);
    }

    /**
     * Adds honor exp to this Char, and sends a packet to the client with the new honor exp.
     * Honor exp added may be negative, but the total honor exp will never go below 0.
     *
     * @param exp the exp to add (may be negative)
     */
    public void addHonorExp(int exp) {
        setHonorExp(Math.max(0, getHonorExp() + exp));
        write(WvsContext.characterHonorExp(getHonorExp()));
    }

    public int getDeathCount() {
        return deathCount;
    }

    public void setDeathCount(int deathCount) {
        this.deathCount = deathCount;
    }

    /**
     * Adds a skill to this Char. If the Char already has this skill, just changes the levels.
     *
     * @param skillID      the skill's id to add
     * @param currentLevel the current level of the skill
     * @param masterLevel  the master level of the skill
     */
    public void addSkill(int skillID, int currentLevel, int masterLevel) {
        Skill skill = SkillData.getSkillDeepCopyById(skillID);
        if (skill == null && !SkillConstants.isMakingSkillRecipe(skillID)) {
            log.warn("No such skill found: " + skillID);
            return;
        }
        skill.setCurrentLevel(currentLevel);
        skill.setMasterLevel(masterLevel);
        addSkill(skill);
        write(WvsContext.changeSkillRecordResult(skill));
    }

    public void addSkills(List<Skill> skills) {
        for (Skill skill : skills) {
            addSkill(skill);
        }
        write(WvsContext.changeSkillRecordResult(skills));
    }

    public MemorialCubeInfo getMemorialCubeInfo() {
        return memorialCubeInfo;
    }

    public void setMemorialCubeInfo(MemorialCubeInfo memorialCubeInfo) {
        this.memorialCubeInfo = memorialCubeInfo;
    }

    public FamiliarCodexManager getFamiliarCodexManager() {
        return familiarCodexManager;
    }

    public void setFamiliarCodexManager(FamiliarCodexManager familiarCodexManager) {
        this.familiarCodexManager = familiarCodexManager;
    }

    public void summonFamiliars() {
        getFamiliarCodexManager().summonFamiliars();
    }

    public void banishFamiliars() {
        getFamiliarCodexManager().banishFamiliars();
    }

    public Set<Familiar> getFamiliars() {
        return getFamiliarCodexManager().getFamiliars();
    }

    public void setFamiliars(Set<Familiar> familiars) {
        getFamiliarCodexManager().setFamiliars(familiars);
    }

    public Familiar getFamiliarByID(int familiarID) {
        return getFamiliarCodexManager().getFamiliarByID(familiarID);
    }

    public void addFamiliar(Familiar familiar) {
        getFamiliarCodexManager().addFamiliar(familiar);
    }

    public boolean hasSkillCDBypass() {
        return skillCDBypass;
    }

    public void setSkillCDBypass(boolean skillCDBypass) {
        this.skillCDBypass = skillCDBypass;
    }


    public Set<StolenSkill> getStolenSkills() {
        if (stolenSkills == null) {
            stolenSkills = stolenSkillDao.byChar(this);
        }
        return stolenSkills;
    }

    public void setStolenSkills(Set<StolenSkill> stolenSkills) {
        this.stolenSkills = stolenSkills;
    }

    public void addStolenSkill(StolenSkill stolenSkill) {
        getStolenSkills().add(stolenSkill);
    }

    public void removeStolenSkill(StolenSkill stolenSkill) {
        if (stolenSkill != null) {
            getStolenSkills().remove(stolenSkill);
            stolenSkillDao.delete(stolenSkill);
        }
    }

    public StolenSkill getStolenSkillByPosition(int position) {
        return getStolenSkills().stream().filter(ss -> ss.getPosition() == position).findAny().orElse(null);
    }

    public StolenSkill getStolenSkillBySkillId(int skillId) {
        return getStolenSkills().stream().filter(ss -> ss.getSkillId() == skillId).findAny().orElse(null);
    }


    public Set<ChosenSkill> getChosenSkills() {
        if (chosenSkills == null) {
            chosenSkills = chosenSkillDao.byChar(this);
        }
        return chosenSkills;
    }

    public void setChosenSkills(Set<ChosenSkill> chosenSkills) {
        this.chosenSkills = chosenSkills;
    }

    public void addChosenSkill(ChosenSkill chosenSkill) {
        getChosenSkills().add(chosenSkill);
    }

    public void removeChosenSkill(ChosenSkill chosenSkill) {
        if (chosenSkill != null) {
            getChosenSkills().remove(chosenSkill);
            chosenSkillDao.delete(chosenSkill);
        }
    }

    public ChosenSkill getChosenSkillByPosition(int position) {
        return getChosenSkills().stream().filter(ss -> ss.getPosition() == position).findAny().orElse(null);
    }

    public boolean isChosenSkillInStolenSkillList(int skillId) {
        return getStolenSkills().stream().filter(ss -> ss.getSkillId() == skillId).findAny().orElse(null) != null;
    }

    public Map<BaseStat, Long> getBaseStats() {
        return baseStats;
    }

    public Map<BaseStat, List<Integer>> getNonAddBaseStats() {
        return nonAddBaseStats;
    }

    /**
     * Adds a BaseStat's amount to this Char's BaseStat cache.
     *
     * @param bs     The BaseStat
     * @param amount the amount of BaseStat to add
     */
    public void addBaseStat(BaseStat bs, int amount) {
        if (bs != null) {
            if (bs.isNonAdditiveStat()) {
                if (!getNonAddBaseStats().containsKey(bs)) {
                    getNonAddBaseStats().put(bs, new ArrayList<>());
                }
                getNonAddBaseStats().get(bs).add(amount);
            } else {
                getBaseStats().put(bs, getBaseStats().getOrDefault(bs, 0L) + amount);
            }
        }
    }

    /**
     * Removes a BaseStat's amount from this Char's BaseStat cache.
     *
     * @param bs     The BaseStat
     * @param amount the amount of BaseStat to remove
     */
    public void removeBaseStat(BaseStat bs, int amount) {
        addBaseStat(bs, -amount);
    }

    public void addItemToInventory(int id, int quantity) {
        addItemToInventory(id, quantity, FileTime.MAX_TIME());
    }

    public void addItemToInventory(int id, int quantity, FileTime dateExpire) {
        var item = ItemData.getItemDeepCopy(id);
        if (!ItemConstants.isEquip(id)) {
            item.setQuantity(quantity);
        }
        item.setDateExpire(dateExpire);
        addItemToInventory(item);
        write(WvsContext.inventoryOperation(true, false,
                Add, (short) item.getBagIndex(), (byte) -1, 0, item));
    }

    public int getSpentHyperSp() {
        int sp = 0;
        for (int skillID : SkillConstants.HYPER_STAT_SKILLS) {
            Skill skill = getSkill(skillID);
            if (skill != null) {
                sp += SkillConstants.getTotalNeededSpForHyperStatSkill(skill.getCurrentLevel());
            }
        }
        return sp;
    }

    public int getSpentPassiveHyperSkillSp() {
        int sp = 0;
        for (Skill skill : getSkills()) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            if (si != null && si.getHyper() == 1) {
                sp += skill.getCurrentLevel();
            }
        }
        return sp;
    }

    public int getSpentActiveHyperSkillSp() {
        int sp = 0;
        for (Skill skill : getSkills()) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            if (si != null && si.getHyper() == 2) {
                if (JobConstants.isPhantom(getJob()) && !SkillConstants.isPhantomSkill(skill.getSkillId())) {
                    continue;
                }

                sp += skill.getCurrentLevel();
            }
        }
        return sp;
    }

    public void resetHyperSkills() {
        Set<Skill> skillSet = this.getSkills().stream()
                .filter(s -> this.hasSkill(s.getSkillId())
                        && SkillData.getSkillInfoById(s.getSkillId()) != null
                        && SkillData.getSkillInfoById(s.getSkillId()).getHyper() > 0)
                .collect(Collectors.toSet());
        this.removeSkills(new ArrayList<>(skillSet));
    }

    public int getRewardPoints() {
        return rewardPoints;
    }

    public void setRewardPoints(int rewardPoints) {
        this.rewardPoints = rewardPoints;
    }

    public List<Integer> getHyperRockFields() {
        return hyperRockFields;
    }

    public void setHyperRockFields(List<Integer> hyperRockFields) {
        this.hyperRockFields = hyperRockFields;
    }

    public List<Integer> getTowerChairs() {
        return towerChairs;
    }

    public void setTowerChairs(List<Integer> towerChairs) {
        this.towerChairs = towerChairs;
    }

    public boolean isChangingChannel() {
        return changingChannel;
    }

    public void setChangingChannel(boolean changingChannel) {
        this.changingChannel = changingChannel;
    }

    public int getPartyID() {
        return partyID;
    }

    public void setPartyID(int partyID) {
        this.partyID = partyID;
    }

    public TownPortal getTownPortal() {
        return townPortal;
    }

    public void setTownPortal(TownPortal townPortal) {
        this.townPortal = townPortal;
    }

    public void damage(int damage) {
        damage(damage, false);
    }

    public void damage(int damage, boolean showHitAboveHead) {
        HitInfo hi = new HitInfo();
        hi.hpDamage = damage;
        if (showHitAboveHead) {
            write(UserPacket.effect(Effect.changeHPEffect(-damage)));
        }

        if (getJobHandler() != null) {
            getJobHandler().handleHit(getClient(), null, hi);
            getJobHandler().handleHit(getClient(), hi);
        }
        Events.onChrHit(this, damage);
    }

    public void die() {
        setStatAndSendPacket(Stat.hp, 0);

        write(UserLocal.openUIOnDead(true, getBuffProtectorItem() != null,
                false, false, false, getDeathCount() > 0 ? ReviveType.BOSS : ReviveType.NORMAL));

        // Special Node Activation
        getSpecialNode().activateSpecialNode("die", this, null);

        if (getDeathCount() > 0) {
//			write(UserLocal.userDeadReviveTimer(GameConstants.BUFF_FREEZER_TIMER, GameConstants.USER_REVIVE_TIMER));
        } else {
/*			var safetyCharm = getExpProtectorItem();
			if (safetyCharm == null) {
				giveDeathPenalty();
			} else {
				consumeItem(safetyCharm);
			}*/
        }

        Events.onChrDeath(this);
    }

    private void giveDeathPenalty() {
/*		var maxTime = GameConstants.DEATH_PENALTY_MAX_DURATION;
		var totalReduction = getTotalStat(BaseStat.deathPenaltyDurationDecR);
		var setTime = maxTime - (int) ((maxTime * totalReduction) / 100D);
		write(WvsContext.deathPenalty(false, setTime, setTime,
				GameConstants.DEATH_PENALTY_EXP_DEBUFF, GameConstants.DEATH_PENALTY_DROP_DEBUFF));*/
    }

    public void changeChannel(byte channelId) {
        changeChannelAndWarp(channelId, getFieldID());
    }

    public void changeChannelAndWarp(int channelId, int fieldId) {
        setChangingChannel(true);
        Field field = getField();

        setFieldID(fieldId);

        var transferLife = removeLifesFromCurrentField();
        setTransferLifes(transferLife);
        field.removeChar(this);

        int worldID = getClient().getChannelInstance().getWorldId().getVal();
        World world = Server.getInstance().getWorldById(worldID);
        Channel channel = world.getChannelById(channelId);
        channel.addClientInTransfer(getClient().getChannelInstance(), channel, getId(), getClient());

        short port = (short) channel.getPort();
        write(ClientSocket.migrateCommand(true, port));
    }

    @Override
    public String toString() {
        return "Char{" +
                "id=" + id +
                ", name=" + getName() +
                '}';
    }

    public void setBattleRecordOn(boolean battleRecordOn) {
        this.battleRecordOn = battleRecordOn;
    }

    public boolean isBattleRecordOn() {
        return battleRecordOn;
    }

    public void checkAndRemoveExpiredItems() {
        Set<Item> expiredItems = new HashSet<>();
        var inventories = getInventories();

        if (inventories.contains(null)) {
            // unloaded char
            return;
        }

        for (Inventory inv : getInventories()) {
            expiredItems.addAll(
                    inv.getItems().stream()
                            .filter(item -> item != null && item.getDateExpire() != null && item.getDateExpire().isExpired())
                            .collect(Collectors.toSet())
            );
        }

        List<Integer> expiredItemIDs = expiredItems.stream().map(Item::getItemId).collect(Collectors.toList());
        if (expiredItemIDs.size() > 0) {
            write(WvsContext.message(MessagePacket.generalItemExpireMessage(expiredItemIDs)));
            for (Item item : expiredItems) {
                consumeItemFull(item);
            }
            checkAndSetPetVac();
        }
    }

    public boolean isGuildMaster() {
        var guild = getGuild();
        if (guild == null) {
            return false;
        }
        var gm = guild.getMemberByCharID(getId());
        if (gm == null) {
            return false;
        }
        return (guild.getLeaderID() == getId() || gm.getGrade() == Guild.MASTER);
    }

    /**
     * Checks if this Char has any of the given quests in progress. Also true if the size of the given set is 0.
     *
     * @param quests the set of quest ids to check
     * @return whether or not this Char has any of the given quests
     */
    public boolean hasAnyQuestsInProgress(Set<Integer> quests) {
        return quests.size() == 0 || quests.stream().anyMatch(this::hasQuestInProgress);
    }

    public int getPreviousFieldID() {
        return previousFieldID == 0 || previousFieldID == 999999999 ? 100000000 : previousFieldID;
    }

    public void setPreviousFieldID(int previousFieldID) {
        this.previousFieldID = previousFieldID;
    }

    public void trySpawnRandomPortal() {
        var field = getField();
        if (field.isChannelField() && getNextRandomPortalTime() <= System.currentTimeMillis()
                && getField().getInfo().getAverageMobLevel() > GameConstants.MIN_LEVEL_FOR_RANDOM_FIELD_OCCURRENCES
                && Util.succeedProp(GameConstants.RANDOM_PORTAL_SPAWN_CHANCE, 10_000)
                && field.getLifes().values().stream().noneMatch(l -> l instanceof RandomPortal)) {
            spawnRandomPortal();
        }
    }

    public void spawnRandomPortal() {
        var field = getField();
        setNextRandomPortalTime(System.currentTimeMillis() + GameConstants.RANDOM_PORTAL_COOLTIME);
        // 1% chance for inferno/yellow portal
        Position pos = field.getRandomPosOnWalkableFoothold(50, false);
        if (pos != null) {
            RandomPortal.Type portalType = Util.succeedProp(50)
                    ? RandomPortal.Type.PolloFritto
                    : RandomPortal.Type.Inferno;
            RandomPortal randomPortal = new RandomPortal(portalType, pos, getId());
            field.addLifeForTime(randomPortal, GameConstants.RANDOM_PORTAL_DURATION); // portal will be deleted after 3min
            write(RandomPortalPool.created(randomPortal));
        }
    }

    public long getNextRandomPortalTime() {
        if (this.nextRandomPortalTime == 0) {
            var nextTime = getNextRandomPortalTimeFromQR();
            setNextRandomPortalTime(nextTime);
            return nextTime;
        }
        return this.nextRandomPortalTime;
    }

    public long getNextRandomPortalTimeFromQR() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(GameConstants.RANDOM_PORTAL_NEXT_SPAWN_TIME_QUEST_ID);

        return q.getLongProperty("nextTime");
    }

    public void setNextRandomPortalTimeInQR(long nextTime) {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(GameConstants.RANDOM_PORTAL_NEXT_SPAWN_TIME_QUEST_ID);

        q.setProperty("nextTime", nextTime);
    }

    public void setNextRandomPortalTime(long nextRandomPortalTime) {
        setNextRandomPortalTimeInQR(nextRandomPortalTime);
        this.nextRandomPortalTime = nextRandomPortalTime;
    }

    public long getPolloFritto() {
        return polloFritto;
    }

    public void setPolloFritto(long polloFritto) {
        this.polloFritto = polloFritto;
    }

    public void addPolloFritto(long val) {
        setPolloFritto(getPolloFritto() + val);
    }

    public void resetPolloFritto() {
        setPolloFritto(0);
    }

    public void tryDoLieDetection() {
        if (getLevel() >= GameConstants.LIE_DETECTOR_MIN_LEVEL && Util.succeedProp(1, GameConstants.LIE_DETECTOR_CHANCE)) {
            sendLieDetector(false);
        }
    }

    public Set<MatrixRecord> getMatrixRecords() {
        if (matrixRecords == null) {
            matrixRecords = matrixRecordDao.byChar(this);
        }
        return matrixRecords;
    }

    public void setMatrixRecords(Set<MatrixRecord> matrixRecords) {
        this.matrixRecords = matrixRecords;
    }

    public int getNodeShards() {
        Quest quest = getQuestManager().getQuestById(QuestConstants.NODESHARD_COUNT);
        if (quest == null) {
            quest = QuestData.createQuestFromId(QuestConstants.NODESHARD_COUNT);
            quest.setProperty("count", 0);
            getQuestManager().addQuest(quest);
        }
        return Integer.parseInt(quest.getProperty("count"));
    }

    public VCoreInfo getActiveSpecialNode() {
        MatrixRecord specialNodeMR = getMatrixRecords().stream().filter(mr -> mr.isActive() && mr.getIconID() >= 30000000 && mr.getIconID() < 40000000).findAny().orElse(null);
        if (specialNodeMR == null) {
            return null;
        }
        VCoreInfo specialNodeVCI = VCoreData.getPossibilitiesByJob(getJob()).stream().filter(sn -> sn.isSpecial() && sn.getIconID() == specialNodeMR.getIconID()).findFirst().orElse(null);
        return specialNodeVCI;
    }

    public SpecialNode getSpecialNode() {
        return specialNode;
    }

    public void setSpecialNode(SpecialNode specialNode) {
        this.specialNode = specialNode;
    }

    public void setNodeShards(int nodeShards) {
        Quest quest = getQuestManager().getQuestById(QuestConstants.NODESHARD_COUNT);
        if (quest == null) {
            quest = QuestData.createQuestFromId(QuestConstants.NODESHARD_COUNT);
            quest.setProperty("count", 0);
            getQuestManager().addQuest(quest);
        }
        quest.setProperty("count", Math.max(0, nodeShards));
        write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
    }

    public void addNodeShards(int shards) {
        setNodeShards(getNodeShards() + shards);
    }

    public UnionMember createUnionMember() {
        return new UnionMember(1, this, null);
    }

    public Union getUnion() {
        if (getAccount() == null) {
            return null;
        }
        return getAccount().getUnion();
    }

    public UnionRaid getUnionRaid() {
        if (getAccount() == null) {
            return null;
        }
        return getAccount().getUnionRaid();
    }

    public void clearCurrentDirectionNode() {
        this.currentDirectionNode.clear();
    }

    public int getCurrentDirectionNode(int node) {
        Integer direction = currentDirectionNode.getOrDefault(node, null);
        if (direction == null) {
            currentDirectionNode.put(node, 0);
        }
        return currentDirectionNode.get(node);
    }

    public void increaseCurrentDirectionNode(int node) {
        Integer direction = currentDirectionNode.getOrDefault(node, null);
        if (direction == null) {
            currentDirectionNode.put(node, 1);
        } else {
            currentDirectionNode.put(node, direction + 1);
        }
    }

    public boolean sendLieDetector() {
        return sendLieDetector(false);
    }

    public boolean sendLieDetector(boolean force) {
        if (getInstance() != null || isInInterface()) {
            return true;
        }
        var offenseManager = getOffenseManager();

        // LD ran too recently (15 min)
        if (!force && !offenseManager.canBeLieDetected()) {
            return false;
        }

        var lieDetectorAnswer = "";
        String font = AntiMacro.FONTS[Util.getRandom(AntiMacro.FONTS.length - 1)];

        String options = "ABCDEFGHJKLMNOPQRSTUVWXYZ";

        for (int i = 1; i <= 6; i++) {
            options = options.toUpperCase();
            lieDetectorAnswer += options.charAt(Util.getRandom(options.length() - 1));
        }

        try {
            AntiMacro am = new AntiMacro(font, lieDetectorAnswer);

            byte[] image = am.generateImage(190, 44, Color.BLACK, AntiMacro.getRandomColor());
            chatMessage("You have been given a random lie detection test. Click on the window and type out the 6 letters in there.");
            write(WvsContext.antiMacroResult(image, AntiMacro.AntiMacroResultType.AntiMacroRes, AntiMacro.AntiMacroType.AntiMacroFieldRequest, 6));

            offenseManager.setNextLieDetectorTime();
            offenseManager.setLieDetectorAnswer(lieDetectorAnswer);
        } catch (IOException | FontFormatException e) {
            e.printStackTrace();

            return false;
        }

        return true;
    }

    public OffenseManager getOffenseManager() {
        return getUser().getOffenseManager();
    }

    /**
     * Applies the mp consumption of a skill.
     *
     * @param skillID the skill's id
     * @param slv     the current skill level
     * @return whether the consumption was successful (unsuccessful = not enough mp)
     */
    public boolean applyMpCon(int skillID, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        int curMp = getStat(Stat.mp);
        SkillInfo si = SkillData.getSkillInfoById(SkillConstants.getCorrectMpConSkillID(skillID));
        if (si == null) {
            return true;
        }

        var keyDownConInterval = SkillConstants.getKeydownMPConInterval(skillID);
        if (keyDownConInterval > 0) {
            if (getLastKeydownMPConsumption() + keyDownConInterval >= Util.getCurrentTimeLong()) {
                return true;
            } else {
                setLastKeydownMPConsumption(Util.getCurrentTimeLong());
            }
        }

        // Get Correct MP Consumption SkillStat
        var mpSkillStat = JobConstants.isDemonSlayer(getJob()) ? SkillStat.forceCon : SkillStat.mpCon;

        // Get Correct MP Con value
        int mpCon = si.getValue(mpSkillStat, slv);

        // Apply MP Consumption Reduction%
        if (JobConstants.isDemonSlayer(getJob())) {
            mpCon -= (mpCon * ((getBaseStats().getOrDefault(BaseStat.costForceR, (long) 100) - 100) / 100D));
        } else {
            mpCon -= (mpCon * ((getBaseStats().getOrDefault(BaseStat.costmpR, (long) 100) - 100) / 100D));
        }
        mpCon = Math.max(0, mpCon);

        // Alter MP Consumption through skills or buffs
        if (getJobHandler() != null) {
            var alteredMpCon = getJobHandler().alterMpCon(mpCon, skillID, slv, attackInfo, sui, source);
            if (alteredMpCon >= 0) {
                mpCon = Math.max(0, alteredMpCon);
            }
        }

        boolean hasEnough = curMp >= mpCon;

        if (mpCon > 0 && hasEnough
                && (JobConstants.isDemonSlayer(getJob()) || !JobConstants.isNoManaJob(getJob()))) {
            addStatAndSendPacket(Stat.mp, -mpCon);
        }
        return hasEnough;
    }

    public boolean hasTutor() {
        return tutor;
    }

    public void hireTutor(boolean set) {
        tutor = set;
        write(UserLocal.hireTutor(set));
    }

    /**
     * Shows tutor automated message (the client is taking the message information from wz).
     *
     * @param id       the id of the message.
     * @param duration message duration
     */
    public void tutorAutomatedMsg(int id, int duration) {
        if (!tutor) {
            hireTutor(true);
        }
        write(UserLocal.tutorMsg(id, duration));
    }

    /**
     * Shows tutor custom message (you decide which message the tutor will say).
     *
     * @param message  your custom message
     * @param width    size of the message box
     * @param duration message duration
     */
    public void tutorCustomMsg(String message, int width, int duration) {
        if (!tutor) {
            hireTutor(true);
        }
        write(UserLocal.tutorMsg(message, width, duration));
    }

    public void setTransferField(int fieldID) {
        this.transferField = fieldID;
        this.transferFieldReq = fieldID == 0 ? 0 : getField().getId();
    }

    public int getTransferField() {
        return transferField;
    }

    public int getTransferFieldReq() {
        return transferFieldReq;
    }

    public void setMakingSkillLevel(int skillID, int level) {
        Skill skill = getSkill(skillID);
        if (skill != null) {
            skill.setCurrentLevel((level << 24) + getMakingSkillProficiency(skillID));
            addSkill(skill);
            write(WvsContext.changeSkillRecordResult(skill));
        }
    }

    public int getMakingSkillLevel(int skillID) {
        return Math.max((getSkillLevel(skillID) >>> 24), 0);
    }

    public void setMakingSkillProficiency(int skillID, int proficiency) {
        Skill skill = getSkill(skillID);
        if (skill != null) {
            skill.setCurrentLevel((getMakingSkillLevel(skillID) << 24) + proficiency);
            addSkill(skill);
            write(WvsContext.changeSkillRecordResult(skill));
        }
    }

    public int getMakingSkillProficiency(int skillID) {
        return Math.max((getSkillLevel(skillID) & 0xFFFFFF), 0);
    }

    public void addMakingSkillProficiency(int skillID, int amount) {
        int makingSkillID = SkillConstants.recipeCodeToMakingSkillCode(skillID);
        int level = getMakingSkillLevel(makingSkillID);

        int neededExp = SkillConstants.getNeededProficiency(level);
        if (neededExp <= 0) {
            return;
        }
        int exp = getMakingSkillProficiency(makingSkillID);
        if (exp >= neededExp) {
            write(UserLocal.chatMsg(ChatType.GameDesc, "You can't gain any more Herbalism mastery until you level your skill."));
            write(UserLocal.chatMsg(ChatType.GameDesc, "See the appropriate NPC in Ardentmill to level up."));
            setMakingSkillProficiency(makingSkillID, neededExp);
            return;
        }
        int newExp = exp + amount;
        write(UserLocal.chatMsg(ChatType.GameDesc, SkillConstants.getMakingSkillName(makingSkillID) + "'s mastery increased. (+" + amount + ")"));
        if (newExp >= neededExp) {
            write(UserLocal.noticeMsg("You've accumulated " + SkillConstants.getMakingSkillName(makingSkillID) + " mastery. See an NPC in town to level up.", true));
            setMakingSkillProficiency(makingSkillID, neededExp);
        } else {
            setMakingSkillProficiency(makingSkillID, newExp);
        }
    }

    public void makingSkillLevelUp(int skillID) {
        int level = getMakingSkillLevel(skillID);
        int neededExp = SkillConstants.getNeededProficiency(level);
        if (neededExp <= 0) {
            return;
        }
        int exp = getMakingSkillProficiency(skillID);
        if (exp >= neededExp) {
            setMakingSkillProficiency(skillID, 0);
            setMakingSkillLevel(skillID, level + 1);
            Stat trait = Stat.craftEXP;
            switch (skillID) {
                case 92000000:
                    trait = Stat.senseEXP;
                    break;
                case 92010000:
                    trait = Stat.willEXP;
                    break;
            }
            addTraitExp(trait, GameConstants.getTraitExpByMakingSkillLevel(level));
            write(FieldPacket.fieldEffect(FieldEffect.playSound("profession/levelup", 100)));
        }
    }

    public int getTotalAf() {
        return getEquippedInventory().getItems().stream()
                .filter(i -> i instanceof Equip)
                .mapToInt(item -> ((Equip) item).getArc()).sum();
    }

    public void addNx(int nx) {
        account.addNXPrepaid(nx);
        if (nx != 0) {
            write(UserPacket.progressMessageFont(ProgressMessageFontType.Normal, 16, ProgressMessageColourType.White, 300, String.format("You have gained %,d NX.", nx)));
            write(WvsContext.setMaplePoints(account.getNxPrepaid()));
        }
    }

    public int getNX() {
        return account.getNxPrepaid();
    }

    public void deductNX(int amount) {
        if (amount == 0) {
            return;
        }
        if (account.getNxPrepaid() - amount >= 0) {
            account.deductNXPrepaid(amount);
            write(WvsContext.setMaplePoints(account.getNxPrepaid()));
            write(UserPacket.progressMessageFont(ProgressMessageFontType.Normal, 16, ProgressMessageColourType.White, 300, String.format("You have lost %,d NX.", amount)));
        }
    }

    public void initBlessingSkillNames() {
        Account account = getAccount();
        Char fairyChar = null;
        for (Char chr : account.getCharacters()) {
            if (!chr.equals(this)
                    && chr.getLevel() >= 10
                    && (fairyChar == null || chr.getLevel() > fairyChar.getLevel())) {
                fairyChar = chr;
            }
        }
        if (fairyChar != null) {
            setBlessingOfFairy(fairyChar.getName());
        }
        Char empressChar = null;
        for (Char chr : account.getCharacters()) {
            if (!chr.equals(this)
                    && (JobConstants.isCygnusKnight(chr.getJob()) || JobConstants.isMihile(chr.getJob())
                    && chr.getLevel() >= 5
                    && (empressChar == null || chr.getLevel() > empressChar.getLevel()))) {
                empressChar = chr;
            }
        }
        if (empressChar != null) {
            setBlessingOfEmpress(empressChar.getName());
        }
    }

    public void initBlessingSkills() {
        Char fairyChar = getAccount().getCharByName(getBlessingOfFairy());
        if (fairyChar != null) {
            addSkill(SkillConstants.getFairyBlessingByJob(getJob()),
                    Math.min(20, fairyChar.getLevel() / 10), 20);
        }
        Char empressChar = getAccount().getCharByName(getBlessingOfEmpress());
        if (empressChar != null) {
            addSkill(SkillConstants.getEmpressBlessingByJob(getJob()),
                    Math.min(30, empressChar.getLevel() / 5), 30);
        }
    }

    public boolean isInvincible() {
        return isInvincible || hasInvincibilityCTS();
    }

    public void setInvincible(boolean invincible) {
        isInvincible = invincible;
    }

    public void setQuickslotKeys(List<Integer> quickslotKeys) {
        this.quickslotKeys = quickslotKeys;
    }

    public List<Integer> getQuickslotKeys() {
        return quickslotKeys;
    }

    public Dragon getDragon() {
        Dragon dragon = null;
        if (getJobHandler() instanceof Evan) {
            dragon = ((Evan) getJobHandler()).getDragon();
        }
        return dragon;
    }

    /**
     * Checks if this Char has a skill with at least a given level.
     *
     * @param skillID the skill to get
     * @param slv     the minimum skill level
     * @return whether or not this Char has the skill with the given skill level
     */
    public boolean hasSkillWithSlv(int skillID, short slv) {
        Skill skill = getSkill(skillID);
        return skill != null && skill.getCurrentLevel() >= slv;
    }

    public Set<Friend> getOnlineFriends() {
        Set<Friend> friends = new HashSet<>(getFriends());
        if (getUser() != null) {
            friends.addAll(getUser().getFriends());
        }
        friends = friends.stream().filter(Friend::isOnline).collect(Collectors.toSet());
        return friends;
    }

    public boolean isTalkingToNpc() {
        return talkingToNpc;
    }

    public void setTalkingToNpc(boolean talkingToNpc) {
        this.talkingToNpc = talkingToNpc;
    }

    public void useStatChangeItem(Item item, boolean consume) {
        TemporaryStatManager tsm = getTemporaryStatManager();
        int itemID = item.getItemId();
        if (!isAllowedToUseStatChangeItem(item)) {
            dispose();
            return;
        }
        Map<SpecStat, Integer> specStats = ItemData.getItemInfoByID(itemID).getSpecStats();
        if (specStats.size() > 0) {
            ItemBuffs.giveItemBuffsFromItemID(this, tsm, itemID);
        } else {
            switch (itemID) {
                case 2050004: // All cure
                    tsm.removeAllDebuffs();
                    break;
                default:
                    chatMessage(ChatType.Mob, String.format("Unhandled stat change item %d", itemID));
            }
        }
        if (consume) {
            consumeItem(item);
        }
        dispose();
    }

    public boolean isAllowedToUseStatChangeItem(Item item) {

        // For later checks

        return true;
    }

    public void incrementUnionRank() {
        Union union = getUnion();
        int curUnionRank = union.getUnionRank();
        if (curUnionRank == 0) {
            union.setUnionRank(101);
        } else {
            if (curUnionRank % 100 == 5) {
                union.setUnionRank(curUnionRank + 95);
            }
            union.setUnionRank(union.getUnionRank() + 1);
        }
        Quest quest = getQuestManager().getQuestById(QuestConstants.UNION_RANK);
        quest.setProperty("rank", union.getUnionRank());
        write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));

        // Update Stats
        UnionBoard activeBoard = union.getBoardByPreset(getActiveUnionPreset());
        write(CUIHandler.unionAssignResult(union.getUnionRank(), union.getEligibleUnionChars(), activeBoard,
                null, null, null));
        union.updateUnionBonuses(this);
    }

    public int getActiveUnionPreset() {
/*		QuestManager qm = getQuestManager();
		Quest quest = qm.getQuestById(QuestConstants.UNION_PRESET);
		if (quest == null) {
			qm.addQuest(QuestConstants.UNION_PRESET);
			quest = qm.getQuestById(QuestConstants.UNION_PRESET);
			quest.setProperty("presetNo", 0);
			write(WvsContext.questRecordExMessage(quest));
		}
		return quest.getIntProperty("presetNo");*/

        return getUnion().getActivePreset();
    }

    public void setActiveUnionPreset(int preset) {
        QuestManager qm = getQuestManager();
        Quest quest = qm.getQuestById(QuestConstants.UNION_PRESET);
        if (quest == null) {
            qm.addQuest(QuestConstants.UNION_PRESET);
            quest = qm.getQuestById(QuestConstants.UNION_PRESET);
        }
        quest.setProperty("presetNo", preset);
        write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));

        getUnion().setActivePreset(preset);
    }

    public long getUnionPower() {
        return getUnion().getUnionPower(this);
    }

    public void encodeSymbolData(OutPacket outPacket) {
        Set<Item> equips = new HashSet<>(getEquippedInventory().getItems());
        equips.addAll(getEquipInventory().getItems());
        Set<Equip> symbols = equips.stream()
                .filter(i -> ItemConstants.isSymbol(i.getItemId()))
                .map(i -> (Equip) i)
                .collect(Collectors.toSet());
        for (Equip symbol : symbols) {
            int bagIndex = symbol.getInvType() == EQUIPPED ? -symbol.getBagIndex() : symbol.getBagIndex();
            outPacket.encodeInt(bagIndex);
            symbol.encodeSymbolData(outPacket);
        }
        outPacket.encodeInt(0); // indicate end of previous structure
    }

    public Item getItemBySn(long itemSn) {
        Item item = null;
        for (Inventory i : getInventories()) {
            item = i.getItemBySN(itemSn);
            if (item != null) {
                break;
            }
        }
        return item;
    }

    public void encodeChatInfo(OutPacket outPacket, String msg) {
        // vm'd sub
        outPacket.encodeString(getName());
        outPacket.encodeString(msg);
        outPacket.encodeInt(getUserId());
        outPacket.encodeInt(getId());
        outPacket.encodeByte(getAccount().getWorldId());
        outPacket.encodeInt(getId());
    }

    public boolean isSkillInfoMode() {
        return skillInfoMode;
    }

    public void setSkillInfoMode(boolean skillInfoMode) {
        this.skillInfoMode = skillInfoMode;
    }

    public boolean isDebugMode() {
        return Server.DEBUG && debugMode;
    }

    public void setDebugMode(boolean debugMode) {
        this.debugMode = debugMode;
    }

    public void initDamageSkin() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getQuestById(QuestConstants.DAMAGE_SKIN);
        if (q != null) {
            DamageSkinSaveData dssd = getAccount().getDamageSkinBySkinID(Integer.parseInt(q.getQRValue()));
            setDamageSkin(dssd);
        }
    }

    public List<NpcShopItem> getBuyBack() {
        return buyBack;
    }

    public void addItemToBuyBack(Item item) {
        if (item.isCash() || item.getPowerCrystalInfo() != null) {
            return;
        }

        NpcShopItem nsi = new NpcShopItem();
        nsi.setItemID(item.getItemId());
        nsi.setItem(item);
        nsi.setBuyBack(true);
        int cost;
        if (ItemConstants.isEquip(item.getItemId())) {
            cost = ((Equip) item).getInfo().getPrice();
        } else if (ItemConstants.isRechargable(item.getItemId())) {
            cost = ItemData.getItemInfoByID(item.getItemId()).getPrice();
        } else {
            cost = ItemData.getItemInfoByID(item.getItemId()).getPrice() * item.getQuantity();
        }
        nsi.setPrice(cost);
        nsi.setQuantity((short) item.getQuantity());
        getBuyBack().add(nsi);

        if (getBuyBack().size() > AUTO_CLEAR_BUYBACK_THRESHOLD * 2) {
            List<NpcShopItem> toRemove = new ArrayList<>();
            for (int i = 0; i < AUTO_CLEAR_BUYBACK_THRESHOLD; i++) {
                var clearedBuybackItem = getBuyBack().get(i);
                toRemove.add(clearedBuybackItem);
                if (!clearedBuybackItem.getItem().isInit()) {
                    getRemovedItems().add(clearedBuybackItem.getItem());
                }
            }
            getBuyBack().removeAll(toRemove);
        }

    }

    public NpcShopItem getBuyBackItemBySlot(int slot) {
        NpcShopItem nsi = null;
        if (slot >= 0 && slot < getBuyBack().size()) {
            return getBuyBack().get(slot);
        }
        return nsi;
    }

    public void removeBuyBackItem(NpcShopItem nsi) {
        getBuyBack().remove(nsi);
    }

    public int getLocation() {
        return location;
    }

    public Android getAndroid() {
        return android;
    }

    public void setAndroid(Android android) {
        this.android = android;
    }

    public void setLocation(int location) {
        this.location = location;
    }

    public PsychicLock getPsychicLock() {
        return psychicLock;
    }

    public void setPsychicLock(PsychicLock psychicLock) {
        this.psychicLock = psychicLock;
    }

    public Map<Integer, PsychicArea> getPsychicAreas() {
        return psychicAreas;
    }

    public void setPsychicAreas(Map<Integer, PsychicArea> psychicAreas) {
        this.psychicAreas = psychicAreas;
    }

    public void addPsychicArea(int localPsychicAreaKey, PsychicArea psychicArea) {
        getPsychicAreas().put(localPsychicAreaKey, psychicArea);
    }

    public void removePsychicArea(int localPsychicAreaKey) {
        getPsychicAreas().remove(localPsychicAreaKey);
    }

    /**
     * Initializes this Char's Android according to their heart + android equips. Will not do anything if an Android
     * already exists.
     *
     * @param override Whether or not to override the old Android if one exists.
     */
    public void initAndroid(boolean override) {
        if (getAndroid() == null || override) {
            Item heart = getEquippedItemByBodyPart(BodyPart.MechanicalHeart);
            Item android = getEquippedItemByBodyPart(BodyPart.Android);
            if (heart != null && ((Equip) heart).getInfo() != null
                    && android != null && ((Equip) android).getInfo() != null
                    && ((Equip) heart).getInfo().getAndroidGrade() <= ((Equip) android).getInfo().getAndroidGrade()) {
                int androidId = ((Equip) android).getInfo().getAndroid();
                AndroidInfo androidInfo = EtcData.getAndroidInfoById(androidId);
                if (getAndroid() != null) {
                    getField().removeLife(getAndroid());
                }
                Android newAndroid = new Android(this, androidInfo);
                if (getPosition() != null) {
                    newAndroid.setPosition(getPosition().deepCopy());
                }
                setAndroid(newAndroid);
            }
        }
    }

    public Map<Integer, ForceAtom> getForceAtoms() {
        return forceAtoms;
    }

    public void setForceAtoms(Map<Integer, ForceAtom> forceAtoms) {
        this.forceAtoms = forceAtoms;
    }

    public void addForceAtom(ForceAtom forceAtom) {
        forceAtom.getKeys().forEach(k -> getForceAtoms().put(k, forceAtom));
    }

    public void addForceAtomByKey(int faKey, ForceAtom forceAtom) {
        getForceAtoms().put(faKey, forceAtom);
    }

    public void removeForceAtomByKey(int key) {
        getForceAtoms().remove(key);
    }

    public ForceAtom getForceAtomByKey(int key) {
        return getForceAtoms().getOrDefault(key, null);
    }

    public void recreateforceAtom(int faKey, ForceAtom forceAtom) {
        addForceAtomByKey(faKey, forceAtom);
        ForceAtomInfo fai = forceAtom.getFaiByKey(faKey);
        ForceAtom fa = new ForceAtom(forceAtom);
        fa.setFaiList(Collections.singletonList(fai));
        getField().broadcastPacket(FieldPacket.createForceAtom(fa));
    }

    public void createForceAtom(ForceAtom forceAtom) {
        createForceAtom(forceAtom, true);
    }

    public void createForceAtom(ForceAtom forceAtom, boolean broadcastToField) {
        if (broadcastToField) {
            getField().broadcastPacket(FieldPacket.createForceAtom(forceAtom));
        } else {
            write(FieldPacket.createForceAtom(forceAtom));
        }
        addForceAtom(forceAtom);
    }

    public void clearForceAtomMap() {
        getForceAtoms().clear();
        setForceAtomKeyCounter(1);
    }

    public int getForceAtomKeyCounter() {
        return forceAtomKeyCounter;
    }

    public void setForceAtomKeyCounter(int forceAtomKeyCounter) {
        this.forceAtomKeyCounter = forceAtomKeyCounter;
    }

    public int getNewForceAtomKey() {
        return forceAtomKeyCounter++;
    }

    public Map<Integer, SecondAtom> getSecondAtoms() {
        return secondAtoms;
    }

    public void setSecondAtoms(Map<Integer, SecondAtom> secondAtoms) {
        this.secondAtoms = secondAtoms;
    }

    public void clearSecondAtomMap() {
        getSecondAtoms().clear();
        setSecondAtomKeyCounter(10);
    }

    public int getSecondAtomKeyCounter() {
        return secondAtomKeyCounter;
    }

    public void setSecondAtomKeyCounter(int secondAtomKeyCounter) {
        this.secondAtomKeyCounter = secondAtomKeyCounter;
    }

    public int getNewSecondAtomKey() {
        return secondAtomKeyCounter++;
    }

    public void removeSecondAtomByKey(int key) {
        getSecondAtoms().remove(key);
    }

    public void spawnSecondAtoms(List<SecondAtom> secondAtomList) {
        spawnSecondAtoms(secondAtomList, false);
    }

    public void spawnSecondAtoms(List<SecondAtom> secondAtomList, boolean startInfinity) {
        if (secondAtomList.size() <= 0) {
            return;
        }
        for (SecondAtom secondAtom : secondAtomList) {
            getSecondAtoms().put(secondAtom.getObjectId(), secondAtom);
        }
        if (secondAtomList.get(0).isLocalOnly()) {
            write(SecondAtomPool.createMultipleSecondAtoms(this, secondAtomList, startInfinity));
        } else {
            getField().broadcastPacket(SecondAtomPool.createMultipleSecondAtoms(this, secondAtomList, startInfinity));
        }
    }

    public void removeSecondAtom(List<Integer> secondAtomList) {
        for (int sa : secondAtomList) {
            removeSecondAtomByKey(sa);
        }
        getField().broadcastPacket(SecondAtomPool.removeSecondAtom(this, secondAtomList));
    }

    public SecondAtom getSecondAtomById(int objectId) {
        return getSecondAtoms().getOrDefault(objectId, null);
    }

    public Map<Integer, JupiterThunder> getJupiterThunders() {
        return jupiterThunders;
    }

    public void setJupiterThunders(Map<Integer, JupiterThunder> jupiterThunders) {
        this.jupiterThunders = jupiterThunders;
    }

    public void createJupiterThunder(JupiterThunder jupiterThunder) {
        addJupiterThunder(jupiterThunder);
        write(UserPacket.jupiterThunderCreated(this, jupiterThunder));
    }

    public void addJupiterThunder(JupiterThunder jupiterThunder) {
        getJupiterThunders().put(jupiterThunder.getObjectId(), jupiterThunder);
    }

    public void removeJupiterThunder(int objId) {
        getJupiterThunders().remove(objId);
    }

    public JupiterThunder getJupiterThunderById(int objId) {
        return getJupiterThunders().getOrDefault(objId, null);
    }

    public void clearJupiterThunderMap() {
        getJupiterThunders().clear();
        jupiterThunder = 1000;
    }

    public int getNewJupiterThunderId() {
        return jupiterThunder++;
    }

    public void setCopy(Char copy) {
        this.copy = copy;
    }

    public Char getCopy() {
        return copy;
    }

    public boolean isInAPartyWith(Char otherChr) {
        if (otherChr == this) {
            return true;
        }
        if (otherChr.getParty() == null || getParty() == null) {
            return false;
        }
        return otherChr.getPartyID() == getPartyID();
    }

    public boolean isInSameField(Char otherChr) {
        if (otherChr.isInCashShop() || otherChr.isInAuctionHouse() ||
                isInCashShop() || isInAuctionHouse()) {
            return false;
        }
        return getField() == otherChr.getField();
    }

    public boolean isDead() {
        return getHP() <= 0;
    }

    public void showSkillOnOffEffect() {
        int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID_2; // questId 1544
        Quest quest = getQuestManager().getQuestById(questId);
        if (quest == null) {
            return;
        }

        var lock = quest.getQRValue().equalsIgnoreCase("");

        if (JobConstants.isLuminous(getJob())) {
            getField().broadcastPacket(UserPool.skillOnOffEffect2(getId(), Luminous.ECLIPSE, lock));
        } else if (JobConstants.isMechanic(getJob())) {
            getField().broadcastPacket(UserPool.skillOnOffEffect2(getId(), net.swordie.ms.client.jobs.resistance.Mechanic.HOMING_BEACON, lock));
        } else if (JobConstants.isWildHunter(getJob())) {
            getField().broadcastPacket(UserPool.skillOnOffEffect(getId(), lock));

        } else {
            getField().broadcastPacket(UserPool.skillOnOffEffect(getId(), lock));
        }

    }

    public void showUserSoulEffect() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getQuestById(QuestConstants.SOUL_EFFECT);
        if (q != null) {
            var set = q.getIntProperty("effect");
            write(WvsContext.message(MessagePacket.questRecordExMessage(q.getQRKey(), q.getQRValue())));
            getField().broadcastPacket(UserPacket.SetSoulEffect(getId(), set == 1));
        }
    }

    public void showHoYoungAppearance() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getQuestById(QuestConstants.HO_YOUNG_SHAPESHIFT_QUEST_ID);
        boolean showEars = true;
        if (q != null) {
            showEars = q.getIntProperty("sw") == 1;
        }
        getField().broadcastPacket(UserPacket.hoYoungShapeshiftResult(getId(), showEars));
    }

    public void showUserEffects() {
        showSkillOnOffEffect();
        showUserSoulEffect();
        if (JobConstants.isHoYoung(getJob())) {
            showHoYoungAppearance();
        }
    }

    public int getFirstOpenMatrixSlot() {
        for (int i = 0; i < getMaxMatrixSlots(); i++) {
            MatrixRecord mr = getMatrixRecordByPosition(i);
            if (mr == null) {
                return i;
            }
        }
        return -1337;
    }

    public MatrixRecord getMatrixRecordByPosition(int pos) {
        return getSortedMatrixRecords().stream().filter(n -> n.getPosition() == pos).findFirst().orElse(null);
    }

    public MatrixRecord getMatrixRecordById(int nodeId) {
        return getSortedMatrixRecords().stream().filter(n -> n.getId() == nodeId).findFirst().orElse(null);
    }

    public WeaponType getWeaponType() {
        var weapon = getEquippedItemByBodyPart(BodyPart.Weapon);
        return weapon == null ? WeaponType.None : ItemConstants.getWeaponType(weapon.getItemId());
    }

    public boolean isShowDamageCalc() {
        return showDamageCalc;
    }

    public void setShowDamageCalc(boolean showDamageCalc) {
        this.showDamageCalc = showDamageCalc;
    }

    public boolean canEquip(Item item) {
        if (item instanceof Equip && !((Equip) item).isVestige()) {
            var info = ((Equip) item).getInfo();
            int lv = getLevel();
            CharacterStat cs = getAvatarData().getCharacterStat();
            int str = cs.getStr();
            int inte = cs.getInt();
            int dex = cs.getDex();
            int luk = cs.getLuk();
            short job = getJob();
            short rJob = info.getrJob();
            boolean matchingJob = rJob == 0;
            if (!matchingJob) {
                boolean warrior = (rJob & 1) != 0;
                boolean magician = (rJob & 1 << 1) != 0;
                boolean bowman = (rJob & 1 << 2) != 0;
                boolean thief = (rJob & 1 << 3) != 0;
                boolean pirate = (rJob & 1 << 4) != 0;
                matchingJob = (!warrior || JobConstants.isWarriorEquipJob(job)) &&
                        (!magician || JobConstants.isMageEquipJob(job)) &&
                        (!bowman || JobConstants.isArcherEquipJob(job)) &&
                        (!thief || JobConstants.isThiefEquipJob(job)) &&
                        (!pirate || JobConstants.isPirateEquipJob(job));
            }
            return info.getrLevel() <= lv
                    && info.getrDex() <= dex
                    && (info.getrStr() <= str || JobConstants.isDemonAvenger(job))
                    && info.getrInt() <= inte
                    && info.getrLuk() <= luk && matchingJob;
        }
        return false;
    }

    public Char createCopy() {
        Char other = new Char();

        int id = 1337;
        other.setId(id);
        other.setPosition(getPosition().deepCopy());
        other.setMoveAction(getMoveAction());
        other.setFoothold(getFoothold());
        other.setAvatarData(new AvatarData());
        other.getAvatarData().setAvatarLook(getAvatarData().getAvatarLook());
        other.getAvatarData().setZeroAvatarLook(getAvatarData().getZeroAvatarLook());
        other.setAccount(getAccount());
        other.getAccount().setUnion(getUnion());
        CharacterStat oldCs = getAvatarData().getCharacterStat();
        CharacterStat cs = new CharacterStat(true);
        cs.setCharacterId(id);
        cs.setCharacterIdForLog(id);
        cs.setName("[Remote]" + getName());
        cs.setJob(getJob());
        cs.setLevel(getLevel());
        cs.setGender(oldCs.getGender());
        cs.setFace(oldCs.getFace());
        cs.setHair(oldCs.getHair());
        cs.setSkin(oldCs.getSkin());
        other.setJobHandler(getJobHandler());
        other.setTemporaryStatManager(getTemporaryStatManager());
        other.getAvatarData().setCharacterStat(cs);
        other.setField(getField());
        other.setQuestManager(getQuestManager());
        other.setPets(new ArrayList<>(getPets()));
        other.setGuild(getGuild());
        other.setZeroInfo(getZeroInfo());

        return other;
    }

    public int getChannel() {
        return getClient() != null ? getClient().getChannel() : -2;
    }

    public void clearOutdatedCooltimes() {
        var skillCooltimes = getSkillCoolTimes();
        var toRemove = new HashSet<Integer>();
        for (var entry : skillCooltimes.entrySet()) {
            var skillId = entry.getKey();
            var nextUsableTime = entry.getValue();
            if (nextUsableTime <= System.currentTimeMillis()) {
                toRemove.add(skillId);
            }
        }

        var cds = getSkillCoolTimes();
        toRemove.forEach(cds::remove);
    }

    public void doHackFixes() {
        // hack to fix characters being teleported to maple island
        if ((getFieldID() < 100000000 || getFieldID() > 999999999) && getJob() != 0) {
            warp(100000000);
        }
        // move NX equips to DEC
        InventoryModule.moveNxEquipsFromEqpToDec(this);
    }

    public void setInTrunk(boolean inTrunk) {
        this.inTrunk = inTrunk;
    }

    public boolean isInTrunk() {
        return inTrunk;
    }

    public Set<Skill> getSkillsByJobLevel(byte jobLevel) {
        return getSkills().stream()
                .filter(s -> SkillConstants.isValidSkillForJobAndJobLevel(s.getSkillId(), getJob(), jobLevel))
                .collect(Collectors.toSet());
    }

    public boolean isInCashShop() {
        return inCashShop;
    }

    public void setInCashShop(boolean inCashShop) {
        this.inCashShop = inCashShop;
    }

    public void addMatrixRecord(MatrixRecord mr) {
        getMatrixRecords().add(mr);
    }

    public void removeMatrixRecord(MatrixRecord mr) {
        if (!mr.isActive()) {
            getMatrixRecords().remove(mr);
            matrixRecordDao.delete(mr);
        }
    }

    public void initGuild() {
        if (getGuildId() != 0 && getGuild() == null) {
            setGuild(getWorld().getGuildByID(getGuildId()));
        }
    }

    public void spawnCharForOther(Char chr) {
        if (isHidden() || getField() == null) {
            return;
        }
        chr.write(UserPool.userEnterField(this));

        // Skill KeyDowns
        if (getKeyDownSkillInfo() != null) {
            chr.write(UserRemote.skillPrepare(this, getKeyDownSkillInfo()));
        }

        // Pets
        for (Pet pet : getPets()) {
            pet.broadcastSpawnPacket(chr, EnterType.NoAnimation);
        }

        // Chairs
        if (getChair() != null && ItemConstants.isGroupChair(chair.getItemID()) && getChair().getChr().equals(this)) {
            chr.write(FieldPacket.groupChairSitResult(getChair(), chr.getId(), true, true, true));
        }

        // Familiars
        var fcm = getFamiliarCodexManager();
        if (fcm != null && fcm.isFamiliarsSummoned()) {
            chr.write(CFamiliar.familiarEnterField(fcm.getCurrentActiveFamiliars(), true, false));
        }

        // SecondAtoms
        if (getSecondAtoms().size() > 0) {
            chr.write(SecondAtomPool.createMultipleSecondAtoms(this, new ArrayList<>(getSecondAtoms().values())));
        }

        // Psychic Lock & Psychic Area
        if (getPsychicLock() != null || (getPsychicAreas() != null && getPsychicAreas().size() > 0)) {
            chr.write(UserLocal.enterFieldPsychicInfo(getId(), getPsychicLock(), new ArrayList<>(getPsychicAreas().values())));
        }

        // Misc Effects
        showUserEffects();
    }

    public void capHpMpToMax() {
        if (getHP() > getMaxHP()) {
            heal(getMaxHP() - getHP());
        }
        if (getMP() > getMaxMP()) {
            healMP(getMaxMP() - getMP());
        }
        if (JobConstants.isDemonAvenger(getJob())) {
            ((DemonAvenger) getJobHandler()).sendHpUpdate();
        }
    }

    public boolean isHidden() {
        return hidden;
    }

    public void setHidden(boolean hidden) {
        this.hidden = hidden;
    }

    public KeyDownSkillInfo getKeyDownSkillInfo() {
        return keyDownSkillInfo;
    }

    public void setKeyDownSkillInfo(KeyDownSkillInfo keyDownSkillInfo) {
        this.keyDownSkillInfo = keyDownSkillInfo;
    }


    public void sit(PortableChair chair) {
        setChair(chair);
        boolean isGuest = !getChair().getChr().equals(this);

        if (ItemConstants.isGroupChair(chair.getItemID())) {
            getChair().placeOnSeat(this);
            if (isGuest) {
                write(UserLocal.sitDummyPortableChair(chair.getItemID()));
            }
            getField().broadcastPacket(FieldPacket.groupChairSitResult(chair, getId(), true, true));
        }

        // Remote Test
        if (getCopy() != null) {
            write(UserRemote.remoteSetActivePortableChair(getCopy().getId(), getChair()));
        }

        getField().broadcastPacket(UserRemote.remoteSetActivePortableChair(getId(), getChair()), this);
        dispose();
    }


    public void getUp() {
        PortableChair oldChair = getChair();
        if (oldChair == null || oldChair.getItemID() == 0) { // Not Sitting on Chair
            dispose();
            return;
        }
        boolean isGuest = !getChair().getChr().equals(this);

        if (ItemConstants.isGroupChair(chair.getItemID())) {
            if (!isGuest) {
                oldChair.removeAll();
            } else {
                oldChair.clearSeat(this);
            }
            getField().broadcastPacket(FieldPacket.groupChairSitResult(oldChair, getId(), false, isGuest));
        }

        setChair(null);
        getField().broadcastPacket(UserRemote.remoteSetActivePortableChair(getId(), getChair()), this);

        // Remote Test
        if (getCopy() != null) {
            write(UserRemote.remoteSetActivePortableChair(getCopy().getId(), getChair()));
        }

        write(FieldPacket.sitResult(getId(), -1));
        dispose();
    }

    public BossInfo getBossInfo() {
        if (bossInfo == null) {
            setBossInfo(new BossInfo(this));
        }
        return bossInfo;
    }

    public void setBossInfo(BossInfo bossInfo) {
        this.bossInfo = bossInfo;
    }

    public boolean isInAuctionHouse() {
        return inAuctionHouse;
    }

    public void setInAuctionHouse(boolean inAuctionHouse) {
        this.inAuctionHouse = inAuctionHouse;
    }

    public void sendToAuctionHouse() {
        getOffenseManager().punishLieDetectorEvasion(false);
        setInAuctionHouse(true);
        // No changeChannel = true, as we're not actually migrating
        Events.onWarp(this, getField(), null);
        getField().removeChar(this);

        if (getParty() != null) {
            Party party = getParty();
            PartyMember pm = party.getPartyMemberByID(getId());
            pm.updateInfoByChar(this);
            party.broadcastMigration();
        }

        setPreviousFieldID(getFieldID());
        write(Stage.setAuctionField(this));
        write(FieldPacket.auctionResult(AuctionResult.initialize()));
    }

    public void unload() {
        stopTimers();
        account.unload();
        user.unload();
        friends = null;
        guild = null;
        field = null;

        clearForceAtomMap();
        clearSecondAtomMap();
        clearJupiterThunderMap();
//		user = null;
//		account = null;
//		questManager = null;
//		equipInventory = null;
//		equippedInventory = null;
//		consumeInventory = null;
//		etcInventory = null;
//		installInventory = null;
//		cashInventory = null;
//		monsterBookInfo = null;
//		guild = null;
//
//		skills = null;
//		friends = null;
//		potentials = null;
//		potentialMan = null;
//		familiarCodexManager = null;
//		stolenSkills = null;
//		chosenSkills = null;
//		matrixRecords = null;
//		matrixSlots = null;
//		funcKeyMap = null;
    }

    public List<Integer> getPetFuncKeyMap() {
        if (this.petFuncKeyMap == null) {
            return Util.makeList(0, 0, 0);
        }
        return petFuncKeyMap;
    }

    public void setPetFuncKeyMap(List<Integer> petFuncKeyMap) {
        if (petFuncKeyMap.size() != 3) {
            this.petFuncKeyMap = Util.makeList(0, 0, 0);
            return;
        }
        this.petFuncKeyMap = petFuncKeyMap;
    }

    public void setPetHpPotion(int hpPotion) {
        if (getPetFuncKeyMap() != null) {
            getPetFuncKeyMap().set(0, hpPotion);
        } else {
            setPetFuncKeyMap(Util.makeList(hpPotion, 0, 0));
        }
    }

    public void setPetMpPotion(int mpPotion) {
        if (getPetFuncKeyMap() != null) {
            getPetFuncKeyMap().set(1, mpPotion);
        } else {
            setPetFuncKeyMap(Util.makeList(0, mpPotion, 0));
        }
    }

    public void setPetAcPotion(int acPotion) {
        if (getPetFuncKeyMap() != null) {
            getPetFuncKeyMap().set(2, acPotion);
        } else {
            setPetFuncKeyMap(Util.makeList(0, 0, acPotion));
        }
    }

    public void initPetPotions() {
        if (getPetFuncKeyMap() == null) {
            setPetFuncKeyMap(Util.makeList(0, 0, 0));
        }
        write(FuncKeyMappedMan.petConsumeHpInit(getPetFuncKeyMap().get(0)));
        write(FuncKeyMappedMan.petConsumeMpInit(getPetFuncKeyMap().get(1)));
        write(FuncKeyMappedMan.petConsumeAllCureInit(getPetFuncKeyMap().get(2)));
    }

    public boolean isUnloaded() {
        return equipInventory == null;
    }

    public boolean hasPetVac() {
        return hasPetVac;
    }

    public void setHasPetVac(boolean hasPetVac) {
        this.hasPetVac = hasPetVac;
    }

    public void vacItems() {
        if (!hasPetVac() || getMiniRoom() != null) {
            return;
        }

        var drops = new HashSet<>(field.getDrops()).stream()
                .filter(d -> d.canBePickedUpBy(this) && d.canSpawn(this))
                .collect(Collectors.toSet());
        int money = 0;
        for (var drop : drops) {
            var successfullyPickedUp = true;

            if (ItemConstants.isNotLootableByPetVac(drop)) continue;

            if (drop.isMoney()) {
                // add money so we don't have to send a million statSets
                money += drop.getMoney();
            } else {
                successfullyPickedUp = addDrop(drop, false);
            }

            if (successfullyPickedUp) {
                field.removeDrop(drop.getObjectId(), getId(), false, 0);
            }
        }

        if (money > 0) {
            addMoney(money, true);
            QuestManagerHandler.handleMoneyGain(getQuestManager(), money);
            write(WvsContext.message(MessagePacket.dropPickupMessage(money, (short) 0)));
        }
    }

    public void checkAndSetPetVac() {
        setHasPetVac(getEtcInventory().hasItem(CustomConstants.PET_VAC));
    }

    private void setMegaphonesOnCooldown() {
        setMegaphoneCooldown();
        setAvatarMegaphoneCooldown();
        setTripleMegaphoneCooldown();
    }

    public void setMegaphoneCooldown() {
        setNextAvailableMegaphone(Util.getCurrentTimeLong() + GameConstants.MEGAPHONE_COOLTIME);
    }

    public long getMegaphoneRemainingCooldown() {
        return Math.max(0, getNextAvailableMegaphone() - Util.getCurrentTimeLong());
    }

    public boolean isOnMegaphoneCooldown() {
        return Util.getCurrentTimeLong() < getNextAvailableMegaphone();
    }

    public void setAvatarMegaphoneCooldown() {
        setNextAvailableAvatarMegaphone(Util.getCurrentTimeLong() + GameConstants.AVATAR_MEGAPHONE_COOLTIME);
    }

    public long getAvatarMegaphoneRemainingCooldown() {
        return Math.max(0, getNextAvailableAvatarMegaphone() - Util.getCurrentTimeLong());
    }

    public boolean isOnAvatarMegaphoneCooldown() {
        return Util.getCurrentTimeLong() < getNextAvailableAvatarMegaphone();
    }

    public void setTripleMegaphoneCooldown() {
        setNextAvailableTripleMegaphone(Util.getCurrentTimeLong() + GameConstants.TRIPLE_MEGAPHONE_COOLTIME);
    }

    public long getTripleMegaphoneRemainingCooldown() {
        return Math.max(0, getNextAvailableTripleMegaphone() - Util.getCurrentTimeLong());
    }

    public boolean isOnTripleMegaphoneCooldown() {
        return Util.getCurrentTimeLong() < getNextAvailableTripleMegaphone();
    }

    public void initBeforeWarp() {
        initEquips();
        initDamageSkin();
        initAndroid(false);
        initBaseStats();
        initGuild();
        clearOutdatedCooltimes();
        checkAndSetPetVac();
        checkAndRemoveExpiredItems();
        initTimers();
        setNextAvailableConsumeItemTime(0);
        setLastFieldSwitchTime();
        updateMatrixSlots();
    }

    private void updateMatrixSlots() {
        // Add new matrixslots if MAX_NODE_SLOTS got expanded
        for (int i = getMatrixSlots().size(); i < GameConstants.MAX_NODE_SLOTS; i++) {
            getMatrixSlots().add(new MatrixSlot(this, i));
        }
    }

    private void initTimers() {
        // nothing for now
    }

    private void stopTimers() {
        if (getJobHandler() != null) {
            getJobHandler().stopTimers();
        }
        EventManager.stopTimer(itemExpiryTimer);
        itemExpiryTimer = null;
    }

    public Set<Integer> getIgnoredItems() {
        if (ignoredItems == null) {
            ignoredItems = ignoredItemsDao.getIgnoredItems(this);
        }

        return ignoredItems;
    }

    public void setIgnoredItems(Set<Integer> ignoredItems) {
        this.ignoredItems = ignoredItems;
    }

    public boolean hasIgnoredItem(int ignoredItem) {
        return getIgnoredItems().contains(ignoredItem);
    }

    public void addIgnoredItem(int ignoredItemId) {
        getIgnoredItems().add(ignoredItemId);
    }

    public boolean isInIgnoredItemList(Drop drop) {
        var ignoredItems = getIgnoredItems();
        return drop.isMoney() ? ignoredItems.contains(Integer.MAX_VALUE) : ignoredItems.contains(drop.getItem().getItemId());
    }

    public void updatePetIgnoredItemList() {
        var ignoredItems = getIgnoredItems();
        // TODO: Fix this server side
    }

    public int getNewBagItemIndex(InvType invType) {
        var size = BagItemModule.getBagItemOwners(this, invType).size();
        if (size >= 0 && (invType == ETC ? GameConstants.BAG_ITEM_MAX_ETC : GameConstants.BAG_ITEM_MAX_INSTALL_CONSUME) > size) {
            return size;
        }
        return -1;
    }

    public int getLastBagItemIndexOpened() {
        return lastBagItemIndexOpened;
    }

    public void setLastBagItemIndexOpened(int lastBagItemIndexOpened) {
        this.lastBagItemIndexOpened = lastBagItemIndexOpened;
    }

    public void setIterativeBuyInfo(IterativeBuyInfo iterativeBuyInfo) {
        this.iterativeBuyInfo = iterativeBuyInfo;
    }

    public IterativeBuyInfo getIterativeBuyInfo() {
        return iterativeBuyInfo;
    }

    public void changeKaiserColour(int extern, int inner, boolean premium) {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(QuestConstants.KAISER_MORPH_COLOUR);

        q.setProperty("extern", extern);
        q.setProperty("inner", inner);
        q.setProperty("premium", premium ? 1 : 0);

        write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
        getField().broadcastPacket(UserRemote.kaiserColorOrMorphChange(this, extern, inner, premium), this);
    }

    public int getKaiserColourInner() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(QuestConstants.KAISER_MORPH_COLOUR);

        return q.getIntProperty("inner");
    }

    public int getKaiserColourExtern() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(QuestConstants.KAISER_MORPH_COLOUR);

        return q.getIntProperty("extern");
    }

    public boolean getKaiserColourPremium() {
        QuestManager qm = getQuestManager();
        Quest q = qm.getOrCreateQuestById(QuestConstants.KAISER_MORPH_COLOUR);

        return q.getIntProperty("premium") == 1;
    }

    public long getLastKeydownMPConsumption() {
        return lastKeydownMPConsumption;
    }

    public void setLastKeydownMPConsumption(long lastKeydownMPConsumption) {
        this.lastKeydownMPConsumption = lastKeydownMPConsumption;
    }

    public void damagePerc(int damR) {
        damage((int) (getMaxHP() * (damR / 100D)), true);
    }

    public long getNextAvailableMegaphone() {
        return nextAvailableMegaphone;
    }

    public void setNextAvailableMegaphone(long nextAvailableMegaphone) {
        this.nextAvailableMegaphone = nextAvailableMegaphone;
    }

    public long getNextAvailableAvatarMegaphone() {
        return nextAvailableAvatarMegaphone;
    }

    public void setNextAvailableAvatarMegaphone(long nextAvailableAvatarMegaphone) {
        this.nextAvailableAvatarMegaphone = nextAvailableAvatarMegaphone;
    }

    public long getNextAvailableTripleMegaphone() {
        return nextAvailableTripleMegaphone;
    }

    public void setNextAvailableTripleMegaphone(long nextAvailableTripleMegaphone) {
        this.nextAvailableTripleMegaphone = nextAvailableTripleMegaphone;
    }

    public void broadcastRemoteAvatarModified() {
        byte mask = AvatarModifiedMask.AvatarLook.getVal();
        if (JobConstants.isZero(getJob())) {
            mask = AvatarModifiedMask.getAvatarLookVal();
        }
        getField().broadcastPacket(UserRemote.avatarModified(this, mask, (byte) 0), this);

        if (getCopy() != null) {
            write(UserRemote.avatarModified(getCopy(), mask, (byte) 0));
        }
    }

    public Set<Emoticon> getEmoticons() {
        if (emoticons == null) {
            emoticons = emoticonDao.byChar(this);
        }
        return emoticons;
    }

    public void setEmoticons(Set<Emoticon> emoticons) {
        this.emoticons = emoticons;
    }

    public void removeEmoticon(Emoticon emoticon) {
        if (emoticon != null) {
            getEmoticons().remove(emoticon);
            emoticonDao.delete(emoticon);
        }
    }

    public Set<EmoticonShortcut> getEmoticonShortcuts() {
        if (emoticonShortcuts == null) {
            emoticonShortcuts = emoticonShortcutDao.byChar(this);
        }
        return emoticonShortcuts;
    }

    public void setEmoticonShortcuts(Set<EmoticonShortcut> emoticonShortcuts) {
        this.emoticonShortcuts = emoticonShortcuts;
    }

    public void removeEmoticonShortcut(EmoticonShortcut emoticonShortcut) {
        if (emoticonShortcut != null) {
            getEmoticonShortcuts().remove(emoticonShortcut);
            emoticonShortcutDao.delete(emoticonShortcut);
        }
    }

    public long getNextAvailableConsumeItemTime() {
        return nextAvailableConsumeItemTime;
    }

    public void setNextAvailableConsumeItemTime(long nextAvailableConsumeItemTime) {
        this.nextAvailableConsumeItemTime = nextAvailableConsumeItemTime;
    }

    public void setLastAuctionCriteria(AuctionItemSearchCriteria lastAuctionCriteria) {
        this.lastAuctionCriteria = lastAuctionCriteria;
    }

    public AuctionItemSearchCriteria getLastAuctionCriteria() {
        return lastAuctionCriteria;
    }

    public Set<Item> getRemovedItems() {
        return removedItems;
    }

    public void addRemovedItem(Item item) {
        getRemovedItems().add(item);
        if (getRemovedItems().size() >= ItemDao.REMOVE_ITEMS_BATCH_SIZE) {
            itemDao.delete(getRemovedItems());
            getRemovedItems().clear();
        }
    }

    public boolean isInInterface() {
        return isInAuctionHouse() || isInCashShop() || isInTrunk();
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public long getLastFieldSwitchTime() {
        return lastFieldSwitchTime;
    }

    public void setLastFieldSwitchTime() {
        this.lastFieldSwitchTime = System.currentTimeMillis();
    }

    public boolean canWarpTo(Field field) {
        return (field.getInfo().getLvLimit() == 0 || getLevel() >= field.getInfo().getLvLimit())
                /*&& (field.getInfo().getQrLimit() == 0 || getQuestManager().hasQuestCompleted(field.getInfo().getQrLimit()))*/;
    }

    public void giveLinkSkillToAccount() {
        short level = getLevel();
        short job = getJob();

        int linkSkill = SkillConstants.getLinkSkillByJob(getJob());
        byte linkSkillLevel = (byte) SkillConstants.getLinkSkillLevelByCharLevel(job, level);
        int linkSkillID = SkillConstants.getOriginalOfLinkedSkill(linkSkill);
        int linkMaxLevel = 0;
        SkillInfo si = SkillData.getSkillInfoById(linkSkillID);
        if (si != null) {
            linkMaxLevel = si.getMaxLevel();
        }
        if (SkillConstants.isStackingLinkSkill(linkSkill)) {
            linkMaxLevel = SkillConstants.getMasterLevelForStackingLinkSkill(linkSkill);
        }
        linkSkillLevel = (byte) Math.min(linkSkillLevel, linkMaxLevel);
        if (linkSkillID != 0 && linkSkillLevel > 0) {
            Skill skill = getSkill(linkSkillID, true);
            if (skill.getCurrentLevel() != linkSkillLevel) {
                addSkill(linkSkillID, linkSkillLevel, linkMaxLevel);
            }
            Account acc = getAccount();
            LinkSkill ls = LinkSkillsModule.getLinkSkillByOriginId(acc, getId());
            if (ls == null) {
                ls = new LinkSkill(acc, getId(), -1, linkSkill, linkSkillLevel);
                acc.addLinkSkill(ls);
            } else if (ls.getLevel() < linkSkillLevel) {
                ls.setLinkSkillID(linkSkill);
                ls.setLevel(linkSkillLevel);
                ls.setOriginID(getId());
            }
        }
    }

    public void update() {
        getTemporaryStatManager().update();
    }

    public boolean addDamageSkin(int itemID) {
        Account acc = getAccount();
        DamageSkinType error = null;
        if (acc.getDamageSkins().size() >= GameConstants.DAMAGE_SKIN_MAX_SIZE) {
            error = DamageSkinType.Res_Fail_SlotCount;
        } else if (acc.getDamageSkinByItemID(itemID) != null) {
            error = DamageSkinType.Res_Fail_AlreadyExist;
        }
        if (error != null) {
            write(UserLocal.damageSkinSaveResult(DamageSkinType.Req_Reg, error, null));
        } else {
            QuestManager qm = getQuestManager();
            Quest q = qm.getQuestById(QuestConstants.DAMAGE_SKIN);
            if (q == null) {
                q = QuestData.createQuestFromId(QuestConstants.DAMAGE_SKIN);
                qm.addQuest(q);
            }
            consumeItem(itemID, 1);
            DamageSkinSaveData dssd = DamageSkinSaveData.getByItemID(itemID);
            q.setQrValue(String.valueOf(dssd.getDamageSkinID()));
            acc.addDamageSkin(dssd);
            setDamageSkin(dssd);
            write(UserLocal.damageSkinSaveResult(DamageSkinType.Req_Reg,
                    DamageSkinType.Res_Success, this));
            write(UserPacket.setDamageSkin(this));
            write(WvsContext.message(MessagePacket.questRecordMessage(q)));
        }
        return error == null;
    }

    public void activateCustomEffect(String res, int fadeDuration) {
        var qm = getQuestManager();
        var quest = qm.getOrCreateQuestById(QuestConstants.SW_CUSTOM_EFFECT);
        if (quest.hasProperty("NoEffect") && quest.getProperty("NoEffect").equals("1")) {
            return;
        }

        getJobHandler().activateCustomEffect(res, fadeDuration);
    }

    public void deactivateCustomEffect() {
        getJobHandler().deactivateCustomEffect();
    }

    public Vessel getVessel() {
        if (vessel == null) {
            vessel = vesselDao.byChar(this);
        }
        return vessel;
    }

    public void setVessel(Vessel vessel) {
        this.vessel = vessel;
    }

    public void openVesselUI() {
        getVessel().openVesselUI(this);
    }

    public void openVoyageUI() {
        write(FieldPacket.openUI(UIType.SAILING));
    }

    /**
     * Invoked on the start of each new day (server Time)
     */
    public void onNewDay() {
        chatMessage("Your dailies have been refreshed.");
        Server.getInstance().getDailiesManager().reset(this, true);
        getAccount().refreshDailyEntriesList();
        Server.getInstance().getDailiesManager().resetQuests(this);
    }

    /**
     * If user was not online when 'onServerNewDay' was invoked. Apply it upon login.
     */
    public void applyNewDayUponLogin() {
        Server.getInstance().getDailiesManager().reset(this, true);
        Server.getInstance().getDailiesManager().resetQuests(this);
    }

    public Gun getGun() {
        return gun;
    }

    public void setGun(Gun gun) {
        this.gun = gun;
    }

    public Instance getReEnterableInstance(int enterFieldId) {
        var channel = getWorld().getChannelById(getChannel());

        var tuple = channel.getInstances().stream()
                .filter(t -> t.getLeft() == enterFieldId                    // Instance must have same enterFieldId
                        && t.getRight().canReEnter(this)                // Instance must contain CharId
                        && !t.getRight().isBeingDeleted                        // Instance must NOT be in the process of being deleted
                        && !t.getRight().getInstanceType().equals(FieldInstanceType.SOLO)) // Instance must not be a SOLO instance
                .findFirst()
                .orElse(null);
        if (tuple == null) {
            return null;
        }

        return tuple.getRight(); // instance
    }

    public void reEnterInstance(Instance instance) {
        setInstance(instance);
        instance.reEnter(this);
    }

    public void setTransferLifes(Set<Life> transferLifes) {
        this.transferLifes = transferLifes;
    }

    public Set<Life> getTransferLifes() {
        return transferLifes;
    }

    public void addFirstEnterReward(FirstEnterReward firstEnterReward) {
        getFirstEnterRewards().add(firstEnterReward);
        firstEnterRewardDao.saveOrUpdate(getAccount(), getFirstEnterRewards());
    }

    public void checkFirstEnterReward() {
        write(WvsContext.firstEnterReward(getFirstEnterRewards(), FirstEnterRewardPacketType.Load_Items, 0));
    }

    public void removeFirstEnterReward(FirstEnterReward firstEnterReward) {
        getFirstEnterRewards().remove(firstEnterReward);
        firstEnterRewardDao.delete(firstEnterReward);
    }

    //Used when chr doesn't have an instanced account yet.
    public Set<FirstEnterReward> getFirstEnterRewards(Account account) {
        if (firstEnterRewards == null) {
            firstEnterRewards = firstEnterRewardDao.getFirstEnterRewardsByAccount(this, account);
        }
        return firstEnterRewards;
    }

    public Set<FirstEnterReward> getFirstEnterRewards() {
        if (firstEnterRewards == null) {
            firstEnterRewards = firstEnterRewardDao.getFirstEnterRewardsByAccount(this, getAccount());
        }
        return firstEnterRewards;
    }

    public SurpriseMission getSurpriseMission() {
        return surpriseMission;
    }

    public void setSurpriseMission(SurpriseMission surpriseMission) {
        this.surpriseMission = surpriseMission;
    }

    public HyperStatsManager getHyperStatsManager() {
        if (hyperStatsManager == null) {
            hyperStatsManager = hyperStatsManagerDao.byChar(this);
        }
        return hyperStatsManager;
    }

    public void setHyperStatsManager(HyperStatsManager hyperStatsManager) {
        this.hyperStatsManager = hyperStatsManager;
    }

    public MiniRoom getMiniRoom() {
        return miniRoom;
    }

    public void setMiniRoom(MiniRoom miniRoom) {
        this.miniRoom = miniRoom;
    }

    public List<MiniGameRecord> getMiniGameRecords() {
        if (miniGameRecords == null) {
            miniGameRecords = miniGameRecordDao.byChar(this);
        }
        return miniGameRecords;
    }

    public void setMiniGameRecords(List<MiniGameRecord> miniGameRecords) {
        this.miniGameRecords = miniGameRecords;
    }

    public MiniGameRecord getMiniGameRecordByType(int typeVal) {
        var record = getMiniGameRecords().stream().filter(mgr -> mgr.getMiniRoomType() == typeVal).findFirst().orElse(null);
        if (record == null) {
            record = new MiniGameRecord();
            record.setMiniRoomType(typeVal);
            getMiniGameRecords().add(record);
        }
        return record;
    }
}
