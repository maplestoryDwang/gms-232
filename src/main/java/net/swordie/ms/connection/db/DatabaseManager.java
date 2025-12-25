package net.swordie.ms.connection.db;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.AccountBossCooldown;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.User;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.anticheat.Offense;
import net.swordie.ms.client.anticheat.OffenseManager;
import net.swordie.ms.client.character.*;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.cards.CharacterCard;
import net.swordie.ms.client.character.cards.MonsterBookInfo;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
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
import net.swordie.ms.client.character.quest.progress.*;
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
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildRequestor;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.bbs.BBSReply;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.connection.db.managers.IDatabaseManager;
import net.swordie.ms.connection.db.managers.SwordieSqlDatabaseManager;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.loaders.containerclasses.EquipDrop;
import net.swordie.ms.loaders.containerclasses.MonsterCollectionGroupRewardInfo;
import net.swordie.ms.loaders.containerclasses.MonsterCollectionMobInfo;
import net.swordie.ms.loaders.containerclasses.MonsterCollectionSessionRewardInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.SystemTime;
import net.swordie.ms.world.auction.AuctionItem;
import net.swordie.ms.world.shop.NpcShopItem;
import net.swordie.ms.world.shop.cashshop.CashItemInfo;
import net.swordie.ms.world.shop.cashshop.CashShopCategory;
import net.swordie.ms.world.shop.cashshop.CashShopItem;
import net.swordie.orm.dao.SworDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.File;
import java.util.List;

/**
 * Created on 12/12/2017.
 */
public class DatabaseManager {
    private static final Logger log = LogManager.getLogger();
    private static final int KEEP_ALIVE_MS = 10 * 60 * 1000; // 10 minutes

    private static final IDatabaseManager databaseManager = new SwordieSqlDatabaseManager();

    public static final Class[] dbClasses = new Class[]{
            User.class,
            FileTime.class,
            SystemTime.class,
            NonCombatStatDayLimit.class,
            CharacterCard.class,
            Item.class,
            Equip.class,
            Inventory.class,
            Skill.class,
            SkillCooltime.class,
            FuncKeyMap.class,
            Keymapping.class,
            SPSet.class,
            ExtendSP.class,
            CharacterStat.class,
            AvatarLook.class,
            AvatarData.class,
            ZeroInfo.class,
            Char.class,
            Account.class,
            QuestManager.class,
            Quest.class,
            QuestProgressRequirement.class,
            QuestProgressLevelRequirement.class,
            QuestProgressItemRequirement.class,
            QuestProgressMobRequirement.class,
            QuestProgressMoneyRequirement.class,
            Guild.class,
            GuildMember.class,
            GuildRequestor.class,
            GuildSkill.class,
            BBSRecord.class,
            BBSReply.class,
            Friend.class,
            Macro.class,
            DamageSkinSaveData.class,
            Trunk.class,
            PetItem.class,
            MonsterBookInfo.class,
            CharacterPotential.class,
            LinkSkill.class,
            Familiar.class,
            StolenSkill.class,
            ChosenSkill.class,
            CashItemInfo.class,
            CashShopItem.class,
            CashShopCategory.class,
            MonsterCollectionSessionRewardInfo.class,
            MonsterCollectionGroupRewardInfo.class,
            MonsterCollectionMobInfo.class,
            MonsterCollection.class,
            MonsterCollectionReward.class,
            MonsterCollectionExploration.class,
            Alliance.class,
            DropInfo.class,
            MatrixRecord.class,
            MatrixSlot.class,
            Offense.class,
            OffenseManager.class,
            NpcShopItem.class,
            EquipDrop.class,
            AuctionItem.class,
            Union.class,
            UnionBoard.class,
            UnionMember.class,
            UnionRaid.class,
            AccountBossCooldown.class,
            Emoticon.class,
            EmoticonShortcut.class,
    };


    public static void init() {
        databaseManager.init(dbClasses);
    }

    /**
     * Sends a simple query to the DB to ensure that the connection stays alive.
     */
    private static void sendHeartBeat() {
        databaseManager.sendHeartBeat();
    }

    public static void saveToDB(Object obj) {
        databaseManager.saveToDB(obj);
    }

    public static void deleteFromDB(Object obj) {
        databaseManager.deleteFromDB(obj);
    }

    public static Object getObjFromDB(Class clazz, int id) {
        return databaseManager.getObjFromDB(clazz, id);
    }

    public static Object getObjFromDB(Class clazz, String name) {
        return databaseManager.getObjFromDB(clazz, name);
    }

    public static Object getObjFromDB(Class clazz, String columnName, Object value) {
        return databaseManager.getObjFromDB(clazz, columnName, value);
    }

    public static Object getObjListFromDB(Class clazz) {
        return databaseManager.getObjListFromDB(clazz);
    }

    public static Object getObjListFromDB(Class clazz, String columnName, Object value) {
        return databaseManager.getObjListFromDB(clazz, columnName, value);
    }

    public static List<Object> executeSelect(SworDao dao, String query, String alias, Object... args) {
        return databaseManager.executeSelect(dao, query, alias, args);
    }

    public static long executeInsert(String query, Object... args) {
        return databaseManager.executeInsert(query, args);
    }

    public static long executeQuery(QueryHolder queryHolder) {
        return executeQuery(queryHolder.getQuery(), queryHolder.getArgs());
    }

    public static long executeQuery(String query, Object... args) {
        if (query == null) {
            return 0;
        }

        return databaseManager.executeQuery(query, args);
    }

    public static boolean executeFile(File file) {
        if (file == null) {
            return false;
        }

        return databaseManager.executeFile(file);
    }

    public static void executeBatchQuery(BatchQueryHolder batchQueryHolder) {
        databaseManager.executeBatchQuery(batchQueryHolder);
    }
}
