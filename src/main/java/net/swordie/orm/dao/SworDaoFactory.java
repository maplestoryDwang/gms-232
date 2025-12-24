package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.AccountBossCooldown;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.User;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.client.blacklist.BlackListEntry;
import net.swordie.ms.client.character.*;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.cards.CharacterCard;
import net.swordie.ms.client.character.cards.MonsterBookInfo;
import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.hyperstats.HyperStatInfo;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.PetItem;
import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.keys.Keymapping;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.quest.progress.QuestProgressRequirement;
import net.swordie.ms.client.character.skills.ChosenSkill;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillCooltime;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.client.dailies.AccountDailyEntries;
import net.swordie.ms.client.dailies.ContentReset;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildRequestor;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.bbs.BBSReply;
import net.swordie.ms.client.rankings.RankingResult;
import net.swordie.ms.client.social.minigamerecord.MiniGameRecord;
import net.swordie.ms.client.soulcollection.SoulCollectionEntry;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.loaders.containerclasses.EquipDrop;
import net.swordie.ms.logging.TradeTransaction;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.ms.world.shop.NpcShopItem;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;

import java.util.HashMap;
import java.util.Map;

public class SworDaoFactory {
    private static SworDao<User> userDao;
    private static SworDao<NonCombatStatDayLimit> nonCombatStatDayLimitDao;
    private static SworDao<CharacterCard> characterCardDao;
    private static SworDao<Item> itemDao;
    private static SworDao<Equip> equipDao;
    private static SworDao<Inventory> inventoryDao;
    private static SworDao<Skill> skillDao;
    private static SworDao<SkillCooltime> skillCooltimeDao;
    private static SworDao<FuncKeyMap> funcKeyMapDao;
    private static SworDao<Keymapping> keymappingDao;
    private static SworDao<SPSet> spSetDao;
    private static SworDao<ExtendSP> extendSPDao;
    private static SworDao<CharacterStat> characterStatDao;
    private static SworDao<AvatarLook> avatarLookDao;
    private static SworDao<AvatarData> avatarDataDao;
    private static SworDao<ZeroInfo> zeroInfoDao;
    private static SworDao<Char> charDao;
    private static SworDao<Account> accountDao;
    private static SworDao<QuestManager> questManagerDao;
    private static SworDao<Quest> questDao;
    private static SworDao<Guild> guildDao;
    private static SworDao<GuildMember> guildMemberDao;
    private static SworDao<GuildRequestor> guildRequestorDao;
    private static SworDao<GuildSkill> guildSkillDao;
    private static SworDao<BBSRecord> bbsRecordDao;
    private static SworDao<BBSReply> bbsReplyDao;
    private static SworDao<Friend> friendDao;
    private static SworDao<Macro> macroDao;
    private static SworDao<DamageSkinSaveData> damageSkinSaveDataDao;
    private static SworDao<Trunk> trunkDao;
    private static SworDao<PetItem> petItemDao;
    private static SworDao<MonsterBookInfo> monsterBookInfoDao;
    private static SworDao<CharacterPotential> characterPotentialDao;
    private static SworDao<LinkSkill> linkSkillDao;
    private static SworDao<Familiar> familiarDao;
    private static SworDao<FamiliarCodexManager> familiarCodexManagerDao;
    private static SworDao<StolenSkill> stolenSkillDao;
    private static SworDao<ChosenSkill> chosenSkillDao;
    private static SworDao<CashItemInfo> cashItemInfoDao;
    private static SworDao<MonsterCollection> monsterCollectionDao;
    private static SworDao<MonsterCollectionReward> monsterCollectionRewardDao;
    private static SworDao<MonsterCollectionExploration> monsterCollectionExplorationDao;
    private static SworDao<Alliance> allianceDao;
    private static SworDao<DropInfo> dropInfoDao;
    private static SworDao<MatrixRecord> matrixRecordDao;
    private static SworDao<MatrixSlot> matrixSlotDao;
    private static SworDao<Offense> offenseDao;
    private static SworDao<OffenseManager> offenseManagerDao;
    private static SworDao<NpcShopItem> npcShopItemDao;
    private static SworDao<EquipDrop> equipDropDao;
    private static SworDao<AuctionItem> auctionItemDao;
    private static SworDao<Union> unionDao;
    private static SworDao<UnionBoard> unionBoardDao;
    private static SworDao<UnionMember> unionMemberDao;
    private static SworDao<UnionRaid> unionRaidDao;
    private static SworDao<AccountBossCooldown> accountBossCooldownDao;
    private static SworDao<FirstEnterReward> firstEnterRewardDao;
    private static SworDao<QuestProgressRequirement> questProgressRequirementDao;
    private static SworDao<Integer> ignoredItemsDao;
    private static SworDao<Emoticon> emoticonDao;
    private static SworDao<EmoticonShortcut> emoticonShortcutDao;
    private static SworDao<Vessel> vesselDao;
    private static SworDao<BlackListEntry> blackListEntryDao;
    private static SworDao<TradeTransaction> tradeTransactionDao;
    private static SworDao<SoulCollectionEntry> soulCollectionEntryDao;
    private static SworDao<RankingResult> rankingResultsDao;
    private static SworDao<HyperStatsManager> hyperStatsManagerDao;
    private static SworDao<HyperStatInfo> hyperStatInfoDao;
    private static SworDao<MiniGameRecord> minigameRecordDao;
    private static SworDao<AccountDailyEntries> accountDailyEntryDao;
    private static SworDao<ContentReset> contentResetDao;

    private static final Map<String, SworDao> namedDaos = new HashMap<>();

    public static void init() {
        namedDaos.put(MonsterCollectionMobsDao.NAME, new MonsterCollectionMobsDao());
    }

    public static SworDao getByClass(Class clazz) {
        if (clazz == User.class) {
            if (userDao == null) {
                userDao = new UserDao();
            }
            return userDao;
        }
        if (clazz == NonCombatStatDayLimit.class) {
            if (nonCombatStatDayLimitDao == null) {
                nonCombatStatDayLimitDao = new NonCombatStatDayLimitDao();
            }
            return nonCombatStatDayLimitDao;
        }
        if (clazz == CharacterCard.class) {
            if (characterCardDao == null) {
                characterCardDao = new CharacterCardDao();
            }
            return characterCardDao;
        }
        if (clazz == Item.class) {
            if (itemDao == null) {
                itemDao = new ItemDao();
            }
            return itemDao;
        }
        if (clazz == Equip.class) {
            if (equipDao == null) {
                equipDao = new EquipDao();
            }
            return equipDao;
        }
        if (clazz == Inventory.class) {
            if (inventoryDao == null) {
                inventoryDao = new InventoryDao();
            }
            return inventoryDao;
        }
        if (clazz == Skill.class) {
            if (skillDao == null) {
                skillDao = new SkillDao();
            }
            return skillDao;
        }
        if (clazz == SkillCooltime.class) {
            if (skillCooltimeDao == null) {
                skillCooltimeDao = new SkillCooltimeDao();
            }
            return skillCooltimeDao;
        }
        if (clazz == FuncKeyMap.class) {
            if (funcKeyMapDao == null) {
                funcKeyMapDao = new FuncKeyMapDao();
            }
            return funcKeyMapDao;
        }
        if (clazz == Keymapping.class) {
            if (keymappingDao == null) {
                keymappingDao = new KeymappingDao();
            }
            return keymappingDao;
        }
        if (clazz == SPSet.class) {
            if (spSetDao == null) {
                spSetDao = new SPSetDao();
            }
            return spSetDao;
        }
        if (clazz == ExtendSP.class) {
            if (extendSPDao == null) {
                extendSPDao = new ExtendSPDao();
            }
            return extendSPDao;
        }
        if (clazz == CharacterStat.class) {
            if (characterStatDao == null) {
                characterStatDao = new CharacterStatDao();
            }
            return characterStatDao;
        }
        if (clazz == AvatarLook.class) {
            if (avatarLookDao == null) {
                avatarLookDao = new AvatarLookDao();
            }
            return avatarLookDao;
        }
        if (clazz == ZeroInfo.class) {
            if (zeroInfoDao == null) {
                zeroInfoDao = new ZeroInfoDao();
            }
            return zeroInfoDao;
        }
        if (clazz == AvatarData.class) {
            if (avatarDataDao == null) {
                avatarDataDao = new AvatarDataDao();
            }
            return avatarDataDao;
        }
        if (clazz == Char.class) {
            if (charDao == null) {
                charDao = new CharDao();
            }
            return charDao;
        }
        if (clazz == Account.class) {
            if (accountDao == null) {
                accountDao = new AccountDao();
            }
            return accountDao;
        }
        if (clazz == QuestManager.class) {
            if (questManagerDao == null) {
                questManagerDao = new QuestManagerDao();
            }
            return questManagerDao;
        }
        if (clazz == Quest.class) {
            if (questDao == null) {
                questDao = new QuestDao();
            }
            return questDao;
        }
        if (clazz == Guild.class) {
            if (guildDao == null) {
                guildDao = new GuildDao();
            }
            return guildDao;
        }
        if (clazz == GuildMember.class) {
            if (guildMemberDao == null) {
                guildMemberDao = new GuildMemberDao();
            }
            return guildMemberDao;
        }
        if (clazz == GuildRequestor.class) {
            if (guildRequestorDao == null) {
                guildRequestorDao = new GuildRequestorDao();
            }
            return guildRequestorDao;
        }
        if (clazz == GuildSkill.class) {
            if (guildSkillDao == null) {
                guildSkillDao = new GuildSkillDao();
            }
            return guildSkillDao;
        }
        if (clazz == BBSRecord.class) {
            if (bbsRecordDao == null) {
                bbsRecordDao = new BBSRecordDao();
            }
            return bbsRecordDao;
        }
        if (clazz == BBSReply.class) {
            if (bbsReplyDao == null) {
                bbsReplyDao = new BBSReplyDao();
            }
            return bbsReplyDao;
        }
        if (clazz == Friend.class) {
            if (friendDao == null) {
                friendDao = new FriendDao();
            }
            return friendDao;
        }
        if (clazz == Macro.class) {
            if (macroDao == null) {
                macroDao = new MacroDao();
            }
            return macroDao;
        }
        if (clazz == DamageSkinSaveData.class) {
            if (damageSkinSaveDataDao == null) {
                damageSkinSaveDataDao = new DamageSkinSaveDataDao();
            }
            return damageSkinSaveDataDao;
        }
        if (clazz == Trunk.class) {
            if (trunkDao == null) {
                trunkDao = new TrunkDao();
            }
            return trunkDao;
        }
        if (clazz == PetItem.class) {
            if (petItemDao == null) {
                petItemDao = new PetItemDao();
            }
            return petItemDao;
        }
        if (clazz == MonsterBookInfo.class) {
            if (monsterBookInfoDao == null) {
                monsterBookInfoDao = new MonsterBookInfoDao();
            }
            return monsterBookInfoDao;
        }
        if (clazz == CharacterPotential.class) {
            if (characterPotentialDao == null) {
                characterPotentialDao = new CharacterPotentialDao();
            }
            return characterPotentialDao;
        }
        if (clazz == LinkSkill.class) {
            if (linkSkillDao == null) {
                linkSkillDao = new LinkSkillDao();
            }
            return linkSkillDao;
        }
        if (clazz == FamiliarCodexManager.class) {
            if (familiarCodexManagerDao == null) {
                familiarCodexManagerDao = new FamiliarCodexManagerDao();
            }
            return familiarCodexManagerDao;
        }
        if (clazz == Familiar.class) {
            if (familiarDao == null) {
                familiarDao = new FamiliarDao();
            }
            return familiarDao;
        }
        if (clazz == StolenSkill.class) {
            if (stolenSkillDao == null) {
                stolenSkillDao = new StolenSkillDao();
            }
            return stolenSkillDao;
        }
        if (clazz == ChosenSkill.class) {
            if (chosenSkillDao == null) {
                chosenSkillDao = new ChosenSkillDao();
            }
            return chosenSkillDao;
        }
        if (clazz == CashItemInfo.class) {
            if (cashItemInfoDao == null) {
                cashItemInfoDao = new CashItemInfoDao();
            }
            return cashItemInfoDao;
        }
        if (clazz == MonsterCollection.class) {
            if (monsterCollectionDao == null) {
                monsterCollectionDao = new MonsterCollectionDao();
            }
            return monsterCollectionDao;
        }
        if (clazz == MonsterCollectionReward.class) {
            if (monsterCollectionRewardDao == null) {
                monsterCollectionRewardDao = new MonsterCollectionRewardDao();
            }
            return monsterCollectionRewardDao;
        }
        if (clazz == MonsterCollectionExploration.class) {
            if (monsterCollectionExplorationDao == null) {
                monsterCollectionExplorationDao = new MonsterCollectionExplorationDao();
            }
            return monsterCollectionExplorationDao;
        }
        if (clazz == Alliance.class) {
            if (allianceDao == null) {
                allianceDao = new AllianceDao();
            }
            return allianceDao;
        }
        if (clazz == DropInfo.class) {
            if (dropInfoDao == null) {
                dropInfoDao = new DropInfoDao();
            }
            return dropInfoDao;
        }
        if (clazz == MatrixRecord.class) {
            if (matrixRecordDao == null) {
                matrixRecordDao = new MatrixRecordDao();
            }
            return matrixRecordDao;
        }
        if (clazz == MatrixSlot.class) {
            if (matrixSlotDao == null) {
                matrixSlotDao = new MatrixSlotDao();
            }
            return matrixSlotDao;
        }
        if (clazz == Offense.class) {
            if (offenseDao == null) {
                offenseDao = new OffenseDao();
            }
            return offenseDao;
        }
        if (clazz == OffenseManager.class) {
            if (offenseManagerDao == null) {
                offenseManagerDao = new OffenseManagerDao();
            }
            return offenseManagerDao;
        }
        if (clazz == NpcShopItem.class) {
            if (npcShopItemDao == null) {
                npcShopItemDao = new NpcShopItemDao();
            }
            return npcShopItemDao;
        }
        if (clazz == EquipDrop.class) {
            if (equipDropDao == null) {
                equipDropDao = new EquipDropDao();
            }
            return equipDropDao;
        }
        if (clazz == AuctionItem.class) {
            if (auctionItemDao == null) {
                auctionItemDao = new AuctionItemDao();
            }
            return auctionItemDao;
        }
        if (clazz == Union.class) {
            if (unionDao == null) {
                unionDao = new UnionDao();
            }
            return unionDao;
        }
        if (clazz == UnionBoard.class) {
            if (unionBoardDao == null) {
                unionBoardDao = new UnionBoardDao();
            }
            return unionBoardDao;
        }
        if (clazz == UnionMember.class) {
            if (unionMemberDao == null) {
                unionMemberDao = new UnionMemberDao();
            }
            return unionMemberDao;
        }
        if (clazz == UnionRaid.class) {
            if (unionRaidDao == null) {
                unionRaidDao = new UnionRaidDao();
            }
            return unionRaidDao;
        }
        if (clazz == AccountBossCooldown.class) {
            if (accountBossCooldownDao == null) {
                accountBossCooldownDao = new AccountBossCooldownDao();
            }
            return accountBossCooldownDao;
        }
        if (clazz == FirstEnterReward.class) {
            if (firstEnterRewardDao == null) {
                firstEnterRewardDao = new FirstEnterRewardDao();
            }
            return firstEnterRewardDao;
        }
        if (clazz == QuestProgressRequirement.class) {
            if (questProgressRequirementDao == null) {
                questProgressRequirementDao = new QuestProgressRequirementDao();
            }
            return questProgressRequirementDao;
        }

        if (clazz == IgnoredItemsDao.class) {
            if (ignoredItemsDao == null) {
                ignoredItemsDao = new IgnoredItemsDao();
            }
            return ignoredItemsDao;
        }
        if (clazz == Emoticon.class) {
            if (emoticonDao == null) {
                emoticonDao = new EmoticonDao();
            }
            return emoticonDao;
        }
        if (clazz == EmoticonShortcut.class) {
            if (emoticonShortcutDao == null) {
                emoticonShortcutDao = new EmoticonShortcutDao();
            }
            return emoticonShortcutDao;
        }
        if (clazz == Vessel.class) {
            if (vesselDao == null) {
                vesselDao = new VesselDao();
            }
            return vesselDao;
        }
        if (clazz == BlackListEntry.class) {
            if (blackListEntryDao == null) {
                blackListEntryDao = new BlackListEntryDao();
            }
            return blackListEntryDao;
        }
        if (clazz == TradeTransaction.class) {
            if (tradeTransactionDao == null) {
                tradeTransactionDao = new TradeTransactionDao();
            }
            return tradeTransactionDao;
        }
        if (clazz == SoulCollectionEntry.class) {
            if (soulCollectionEntryDao == null) {
                soulCollectionEntryDao = new SoulCollectionDao();
            }
            return soulCollectionEntryDao;
        }
        if (clazz == RankingResult.class) {
            if (rankingResultsDao == null) {
                rankingResultsDao = new RankingResultDao();
            }
            return rankingResultsDao;
        }
        if (clazz == HyperStatsManager.class) {
            if (hyperStatsManagerDao == null) {
                hyperStatsManagerDao = new HyperStatsManagerDao();
            }
            return hyperStatsManagerDao;
        }
        if (clazz == HyperStatInfo.class) {
            if (hyperStatInfoDao == null) {
                hyperStatInfoDao = new HyperStatInfoDao();
            }
            return hyperStatInfoDao;
        }
        if (clazz == MiniGameRecord.class) {
            if (minigameRecordDao == null) {
                minigameRecordDao = new MiniGameRecordDao();
            }
            return minigameRecordDao;
        }

        if (clazz == AccountDailyEntries.class) {
            if (accountDailyEntryDao == null) {
                accountDailyEntryDao = new AccountDailyEntriesDao();
            }
            return accountDailyEntryDao;
        }

        if (clazz == ContentReset.class){
            if (contentResetDao == null){
                contentResetDao = new ContentResetDao();
            }
            return contentResetDao;
        }


        throw new UnsupportedOperationException("No DAO found for class " + clazz);
    }

    public SworDao getByName(String name) {
        if (namedDaos.containsKey(name)) {
            return namedDaos.get(name);
        }

        throw new UnsupportedOperationException("No DAO found for name " + name);
    }
}
