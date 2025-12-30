package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.FirstEnterReward;
import net.swordie.ms.client.character.Macro;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.client.character.cards.MonsterBookInfo;
import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.client.character.items.Inventory;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.keys.FuncKeyMap;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.skills.ChosenSkill;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillCooltime;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.social.minigamerecord.MiniGameRecord;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import net.swordie.ms.life.Familiar;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class CharDao implements SworDao<Char> {

    private static final Logger log = LogManager.getLogger(CharDao.class);

    private static final AvatarDataDao avatarDataDao = (AvatarDataDao) SworDaoFactory.getByClass(AvatarData.class);
    private static final InventoryDao inventoryDao = (InventoryDao) SworDaoFactory.getByClass(Inventory.class);
    private static final FuncKeyMapDao funcKeyMapDao = (FuncKeyMapDao) SworDaoFactory.getByClass(FuncKeyMap.class);
    private static final QuestManagerDao questManagerDao = (QuestManagerDao) SworDaoFactory.getByClass(QuestManager.class);
    private static final GuildDao guildDao = (GuildDao) SworDaoFactory.getByClass(Guild.class);
    private static final MonsterBookInfoDao monsterBookInfoDao = (MonsterBookInfoDao) SworDaoFactory.getByClass(MonsterBookInfo.class);
    private static final FamiliarCodexManagerDao familiarCodexManagerDao = (FamiliarCodexManagerDao) SworDaoFactory.getByClass(FamiliarCodexManager.class);
    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);
    private static final VesselDao vesselDao = (VesselDao) SworDaoFactory.getByClass(Vessel.class);
    private static final FirstEnterRewardDao firstEnterRewardDao = (FirstEnterRewardDao) SworDaoFactory.getByClass(FirstEnterReward.class);

    private static final SkillCooltimeDao skillCooltimeDao = (SkillCooltimeDao) SworDaoFactory.getByClass(SkillCooltime.class);
    private static final SkillDao skillDao = (SkillDao) SworDaoFactory.getByClass(Skill.class);
    private static final FriendDao friendDao = (FriendDao) SworDaoFactory.getByClass(Friend.class);
    private static final CharacterPotentialDao cpDao = (CharacterPotentialDao) SworDaoFactory.getByClass(CharacterPotential.class);
    private static final FamiliarDao familiarDao = (FamiliarDao) SworDaoFactory.getByClass(Familiar.class);
    private static final MacroDao macroDao = (MacroDao) SworDaoFactory.getByClass(Macro.class);
    private static final StolenSkillDao stolenSkillDao = (StolenSkillDao) SworDaoFactory.getByClass(StolenSkill.class);
    private static final ChosenSkillDao chosenSkillDao = (ChosenSkillDao) SworDaoFactory.getByClass(ChosenSkill.class);
    private static final MatrixRecordDao matrixRecordDao = (MatrixRecordDao) SworDaoFactory.getByClass(MatrixRecord.class);
    private static final MatrixSlotDao matrixSlotDao = (MatrixSlotDao) SworDaoFactory.getByClass(MatrixSlot.class);
    private static final IgnoredItemsDao ignoredItemsDao = (IgnoredItemsDao) SworDaoFactory.getByClass(IgnoredItemsDao.class);
    private static final EmoticonDao emoticonDao = (EmoticonDao) SworDaoFactory.getByClass(Emoticon.class);
    private static final EmoticonShortcutDao emoticonShortcutDao = (EmoticonShortcutDao) SworDaoFactory.getByClass(EmoticonShortcut.class);
    private static final HyperStatsManagerDao hyperStatsManagerDao = (HyperStatsManagerDao) SworDaoFactory.getByClass(HyperStatsManager.class);
    private static final MiniGameRecordDao miniGameRecordDao = (MiniGameRecordDao) SworDaoFactory.getByClass(MiniGameRecord.class);


    public Char getById(int id) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM characters c " +
                        "INNER JOIN avatardata ad on ad.id = c.avatardata " +
                        "INNER JOIN avatarlook al on al.id = ad.avatarlook " +
                        "LEFT JOIN avatarlook zal on zal.id = ad.zeroavatarlook " +
                        "INNER JOIN characterstats cs on cs.id = ad.characterstat " +
                        "INNER JOIN questmanagers qm on qm.id = c.questmanager " +
                        "INNER JOIN inventories i1 on i1.id = c.equippedinventory " +
                        "INNER JOIN inventories i2 on i2.id = c.equipinventory " +
                        "INNER JOIN inventories i3 on i3.id = c.consumeinventory " +
                        "INNER JOIN inventories i4 on i4.id = c.etcinventory " +
                        "INNER JOIN inventories i5 on i5.id = c.installinventory " +
                        "INNER JOIN inventories i6 on i6.id = c.cashinventory " +
                        "LEFT JOIN inventories i7 on i7.id = c.decinventory " +
                        "INNER JOIN monsterbookinfos mbi on mbi.id = c.monsterbook " +
                        "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                        "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                        "LEFT JOIN familiarcodexmanager fcm on fcm.id = c.familiarcodexmanager " +
                        "WHERE c.id = ?",
                "c", id);
        if (objs.size() > 0) {
            return (Char) objs.get(0);
        }
        return null;
    }

    public Char getByName(String name) {
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM characters c " +
                        "INNER JOIN avatardata ad on ad.id = c.avatardata " +
                        "INNER JOIN avatarlook al on al.id = ad.avatarlook " +
                        "LEFT JOIN avatarlook zal on zal.id = ad.zeroavatarlook " +
                        "INNER JOIN characterstats cs on cs.id = ad.characterstat " +
                        "INNER JOIN questmanagers qm on qm.id = c.questmanager " +
                        "INNER JOIN inventories i1 on i1.id = c.equippedinventory " +
                        "INNER JOIN inventories i2 on i2.id = c.equipinventory " +
                        "INNER JOIN inventories i3 on i3.id = c.consumeinventory " +
                        "INNER JOIN inventories i4 on i4.id = c.etcinventory " +
                        "INNER JOIN inventories i5 on i5.id = c.installinventory " +
                        "INNER JOIN inventories i6 on i6.id = c.cashinventory " +
                        "LEFT JOIN inventories i7 on i7.id = c.decinventory " +
                        "INNER JOIN monsterbookinfos mbi on mbi.id = c.monsterbook " +
                        "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                        "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                        "LEFT JOIN familiarcodexmanager fcm on fcm.id = c.familiarcodexmanager " +
                        "WHERE cs.name = ?",
                "c", name);
        if (objs.size() > 0) {
            return (Char) objs.get(0);
        }
        return null;
    }

    public Char getByNameAndWorld(String name, int worldID){
        var objs = DatabaseManager.executeSelect(this,
                "SELECT * FROM characters c " +
                        "INNER JOIN accounts acc on acc.id = c.accid "+
                        "INNER JOIN avatardata ad on ad.id = c.avatardata " +
                        "INNER JOIN avatarlook al on al.id = ad.avatarlook " +
                        "LEFT JOIN avatarlook zal on zal.id = ad.zeroavatarlook " +
                        "INNER JOIN characterstats cs on cs.id = ad.characterstat " +
                        "INNER JOIN questmanagers qm on qm.id = c.questmanager " +
                        "INNER JOIN inventories i1 on i1.id = c.equippedinventory " +
                        "INNER JOIN inventories i2 on i2.id = c.equipinventory " +
                        "INNER JOIN inventories i3 on i3.id = c.consumeinventory " +
                        "INNER JOIN inventories i4 on i4.id = c.etcinventory " +
                        "INNER JOIN inventories i5 on i5.id = c.installinventory " +
                        "INNER JOIN inventories i6 on i6.id = c.cashinventory " +
                        "LEFT JOIN inventories i7 on i7.id = c.decinventory " +
                        "INNER JOIN monsterbookinfos mbi on mbi.id = c.monsterbook " +
                        "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                        "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                        "LEFT JOIN familiarcodexmanager fcm on fcm.id = c.familiarcodexmanager " +
                        "WHERE cs.name = ? and acc.worldid = ?",
                "c", name, worldID);
        if (objs.size() > 0) {
            return (Char) objs.get(0);
        }
        return null;
    }

    public void saveOrUpdate(Account account, Char chr) {
        if (chr == null) {
            return;
        }
        boolean needsId = chr.getId() == 0;

        // delete
        itemDao.delete(chr.getRemovedItems());
        chr.getRemovedItems().clear();

        // 1 to 1
        avatarDataDao.saveOrUpdate(chr.getAvatarData());
        for (var inv : chr.getInventories()) {
            inventoryDao.saveOrUpdate(inv);
        }
        questManagerDao.saveOrUpdate(chr.getQuestManager());
        monsterBookInfoDao.saveOrUpdate(chr.getMonsterBookInfo());
        familiarCodexManagerDao.saveOrUpdate(chr.getFamiliarCodexManager());

        if (chr.getGuild() != null) {
            guildDao.saveOrUpdate(chr.getGuild());
        }

        String query;
        if (needsId) {
            query = "INSERT INTO characters(" +
                    "guild, " +
                    "rewardPoints, " +
                    "userId, " +
                    "questManager, " +
                    "equippedInventory, " +
                    "equipInventory, " +
                    "consumeInventory, " +
                    "etcInventory, " +
                    "installInventory, " +
                    "cashInventory, " +
                    "decInventory, " +
                    "avatarData, " +
                    "monsterBook, " +
                    "hyperRockFields, " +
                    "partyID, " +
                    "previousFieldID, " +
                    "location, " +
                    "towerChairs, " +
                    "quickslotKeys, " +
                    "petfunckeymap, " +
                    "accid, " +
                    "familiarcodexmanager, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE characters SET " +
                    "guild = ?," +
                    "rewardPoints = ?," +
                    "userId = ?," +
                    "questManager = ?," +
                    "equippedInventory = ?," +
                    "equipInventory = ?," +
                    "consumeInventory = ?," +
                    "etcInventory = ?," +
                    "installInventory = ?," +
                    "cashInventory = ?," +
                    "decInventory = ?," +
                    "avatarData = ?," +
                    "monsterBook = ?," +
                    "hyperRockFields = ?," +
                    "partyID = ?," +
                    "previousFieldID = ?," +
                    "location = ?," +
                    "towerChairs = ?," +
                    "quickslotKeys = ?," +
                    "petfunckeymap = ?," +
                    "accid = ?," +
                    "familiarcodexmanager = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                chr.getGuildId(),
                chr.getRewardPoints(),
                chr.getUserId(),
                chr.getQuestManager() == null ? null : chr.getQuestManager().getId(),
                chr.getEquippedInventory() == null ? null : chr.getEquippedInventory().getId(),
                chr.getEquipInventory() == null ? null : chr.getEquipInventory().getId(),
                chr.getConsumeInventory() == null ? null : chr.getConsumeInventory().getId(),
                chr.getEtcInventory() == null ? null : chr.getEtcInventory().getId(),
                chr.getInstallInventory() == null ? null : chr.getInstallInventory().getId(),
                chr.getCashInventory() == null ? null : chr.getCashInventory().getId(),
                chr.getDecInventory() == null ? null : chr.getDecInventory().getId(),
                chr.getAvatarData() == null ? null : chr.getAvatarData().getId(),
                chr.getMonsterBookInfo() == null ? null : chr.getMonsterBookInfo().getId(),
                InlinedIntArrayConverter.toDbColumn(chr.getHyperRockFields()),
                chr.getPartyID(),
                chr.getPreviousFieldID(),
                chr.getLocation(),
                InlinedIntArrayConverter.toDbColumn(chr.getTowerChairs()),
                InlinedIntArrayConverter.toDbColumn(chr.getQuickslotKeys()),
                InlinedIntArrayConverter.toDbColumn(chr.getPetFuncKeyMap()),
                account.getId(),
                chr.getFamiliarCodexManager().getId(),
                chr.getId()
        );
        if (needsId) {
            chr.setId((int) id);
        }

        // 1 to *
        skillCooltimeDao.saveOrUpdate(chr, chr.getSkillCoolTimes());
        skillDao.saveOrUpdate(chr, chr.getSkills());
        friendDao.saveOrUpdate(chr, chr.getFriends());
        cpDao.saveOrUpdate(chr, chr.getPotentials());
        familiarDao.saveOrUpdate(chr, chr.getFamiliarCodexManager());
        macroDao.saveOrUpdate(chr, chr.getMacros());
        stolenSkillDao.saveOrUpdate(chr, chr.getStolenSkills());
        chosenSkillDao.saveOrUpdate(chr, chr.getChosenSkills());
        matrixRecordDao.saveOrUpdate(chr, chr.getMatrixRecords());
        matrixSlotDao.saveOrUpdate(chr, chr.getMatrixSlots());
        funcKeyMapDao.saveOrUpdate(chr, chr.getFuncKeyMap());
        ignoredItemsDao.saveOrUpdate(chr, chr.getIgnoredItems());
        emoticonDao.saveOrUpdate(chr, chr.getEmoticons());
        emoticonShortcutDao.saveOrUpdate(chr, chr.getEmoticonShortcuts());
        vesselDao.saveOrUpdate(chr, chr.getVessel());
        if(account != null) {
            firstEnterRewardDao.saveOrUpdate(account, chr.getFirstEnterRewards(account));
        }
        hyperStatsManagerDao.saveOrUpdate(chr, chr.getHyperStatsManager());
        miniGameRecordDao.saveOrUpdate(chr, chr.getMiniGameRecords());
    }

    public void saveOrUpdate(Char chr) {
        if (chr == null) {
            return;
        }
        boolean needsId = chr.getId() == 0;

        // 1 to 1
        avatarDataDao.saveOrUpdate(chr.getAvatarData());
        for (var inv : chr.getInventories()) {
            inventoryDao.saveOrUpdate(inv);
        }

        questManagerDao.saveOrUpdate(chr.getQuestManager());
        monsterBookInfoDao.saveOrUpdate(chr.getMonsterBookInfo());
        familiarCodexManagerDao.saveOrUpdate(chr.getFamiliarCodexManager());

        if (chr.getGuild() != null) {
            guildDao.saveOrUpdate(chr.getGuild());
        }

        String query;
        if (needsId) {
            query = "INSERT INTO characters(" +
                    "guild, " +
                    "rewardPoints, " +
                    "userId, " +
                    "questManager, " +
                    "equippedInventory, " +
                    "equipInventory, " +
                    "consumeInventory, " +
                    "etcInventory, " +
                    "installInventory, " +
                    "cashInventory, " +
                    "decInventory, " +
                    "avatarData, " +
                    "monsterBook, " +
                    "hyperRockFields, " +
                    "partyID, " +
                    "previousFieldID, " +
                    "location, " +
                    "towerChairs, " +
                    "quickslotKeys, " +
                    "petfunckeymap, " +
                    "familiarcodexmanager, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE characters SET " +
                    "guild = ?," +
                    "rewardPoints = ?," +
                    "userId = ?," +
                    "questManager = ?," +
                    "equippedInventory = ?," +
                    "equipInventory = ?," +
                    "consumeInventory = ?," +
                    "etcInventory = ?," +
                    "installInventory = ?," +
                    "cashInventory = ?," +
                    "decInventory = ?," +
                    "avatarData = ?," +
                    "monsterBook = ?," +
                    "hyperRockFields = ?," +
                    "partyID = ?," +
                    "previousFieldID = ?," +
                    "location = ?," +
                    "towerChairs = ?," +
                    "quickslotKeys = ?," +
                    "petfunckeymap = ?," +
                    "familiarcodexmanager = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                chr.getGuildId(),
                chr.getRewardPoints(),
                chr.getUserId(),
                chr.getQuestManager() == null ? null : chr.getQuestManager().getId(),
                chr.getEquippedInventory() == null ? null : chr.getEquippedInventory().getId(),
                chr.getEquipInventory() == null ? null : chr.getEquipInventory().getId(),
                chr.getConsumeInventory() == null ? null : chr.getConsumeInventory().getId(),
                chr.getEtcInventory() == null ? null : chr.getEtcInventory().getId(),
                chr.getInstallInventory() == null ? null : chr.getInstallInventory().getId(),
                chr.getCashInventory() == null ? null : chr.getCashInventory().getId(),
                chr.getDecInventory() == null ? null : chr.getDecInventory().getId(),
                chr.getAvatarData() == null ? null : chr.getAvatarData().getId(),
                chr.getMonsterBookInfo() == null ? null : chr.getMonsterBookInfo().getId(),
                InlinedIntArrayConverter.toDbColumn(chr.getHyperRockFields()),
                chr.getPartyID(),
                chr.getPreviousFieldID(),
                chr.getLocation(),
                InlinedIntArrayConverter.toDbColumn(chr.getTowerChairs()),
                InlinedIntArrayConverter.toDbColumn(chr.getQuickslotKeys()),
                InlinedIntArrayConverter.toDbColumn(chr.getPetFuncKeyMap()),
                chr.getFamiliarCodexManager().getId(),
                chr.getId()
        );
        if (needsId) {
            chr.setId((int) id);
        }

        // 1 to *
        skillCooltimeDao.saveOrUpdate(chr, chr.getSkillCoolTimes());
        skillDao.saveOrUpdate(chr, chr.getSkills());
        friendDao.saveOrUpdate(chr, chr.getFriends());
        cpDao.saveOrUpdate(chr, chr.getPotentials());
        familiarDao.saveOrUpdate(chr, chr.getFamiliars());
        macroDao.saveOrUpdate(chr, chr.getMacros());
        stolenSkillDao.saveOrUpdate(chr, chr.getStolenSkills());
        chosenSkillDao.saveOrUpdate(chr, chr.getChosenSkills());
        matrixRecordDao.saveOrUpdate(chr, chr.getMatrixRecords());
        matrixSlotDao.saveOrUpdate(chr, chr.getMatrixSlots());
        funcKeyMapDao.saveOrUpdate(chr, chr.getFuncKeyMap());
        ignoredItemsDao.saveOrUpdate(chr, chr.getIgnoredItems());
        emoticonDao.saveOrUpdate(chr, chr.getEmoticons());
        emoticonShortcutDao.saveOrUpdate(chr, chr.getEmoticonShortcuts());
        vesselDao.saveOrUpdate(chr, chr.getVessel());
        if(chr.getAccount() != null) {
            firstEnterRewardDao.saveOrUpdate(chr.getAccount(), chr.getFirstEnterRewards());
        }
        hyperStatsManagerDao.saveOrUpdate(chr, chr.getHyperStatsManager());
        miniGameRecordDao.saveOrUpdate(chr, chr.getMiniGameRecords());
    }

    public void delete(Char chr) {
        if (chr == null || chr.getId() == 0) {
            log.debug("Trying to delete object " + chr + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM characters WHERE ID = ?", chr.getId());
        DatabaseManager.executeQuery("DELETE FROM unionmembers WHERE charid = ?", chr.getId());
    }


    @Override
    public Char fromResultSet(ResultSet resultSet, String alias) {
        Char chr = null;

        try {
            chr = new Char();
            chr.setId(resultSet.getInt(alias + ".id"));
            chr.setUserId(resultSet.getInt(alias + ".userid"));
            chr.setGuildId(resultSet.getInt(alias + ".guild"));
            chr.setRewardPoints(resultSet.getInt(alias + ".rewardPoints"));
            chr.setPartyID(resultSet.getInt(alias + ".partyid"));
            chr.setPreviousFieldID(resultSet.getInt(alias + ".previousFieldID"));
            chr.setQuickslotKeys(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".quickslotKeys")));
            chr.setTowerChairs(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".towerChairs")));
            chr.setHyperRockFields(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".hyperrockfields")));
            chr.setPetFuncKeyMap(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".petfunckeymap")));
            chr.setLocation(resultSet.getInt(alias + ".location"));

            chr.setAvatarData(avatarDataDao.fromResultSet(resultSet, "ad"));
            chr.setEquippedInventory(inventoryDao.fromResultSet(resultSet, "i1"));
            chr.setEquipInventory(inventoryDao.fromResultSet(resultSet, "i2"));
            chr.setConsumeInventory(inventoryDao.fromResultSet(resultSet, "i3"));
            chr.setEtcInventory(inventoryDao.fromResultSet(resultSet, "i4"));
            chr.setInstallInventory(inventoryDao.fromResultSet(resultSet, "i5"));
            chr.setCashInventory(inventoryDao.fromResultSet(resultSet, "i6"));
            chr.setDecInventory(inventoryDao.fromResultSet(resultSet, "i7"));
            chr.setQuestManager(questManagerDao.fromResultSet(resultSet, "qm"));
            chr.setMonsterBookInfo(monsterBookInfoDao.fromResultSet(resultSet, "mbi"));
            chr.setFamiliarCodexManager(familiarCodexManagerDao.getById(resultSet.getInt(alias + ".familiarcodexmanager"), "fcm"));
            if (chr.getFamiliarCodexManager() != null) {
                chr.getFamiliarCodexManager().setChr(chr);
            } else {
                chr.setFamiliarCodexManager(new FamiliarCodexManager(chr));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return chr;
    }

    public void saveOrUpdate(Account account, Set<Char> characters) {
        if (account == null) {
            return;
        }
        for (var chr : new HashSet<>(characters)) {
            saveOrUpdate(account, chr);
        }
    }

    public Set<Char> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM characters c " +
                "INNER JOIN avatardata ad on ad.id = c.avatardata " +
                "INNER JOIN avatarlook al on al.id = ad.avatarlook " +
                "LEFT JOIN avatarlook zal on zal.id = ad.zeroavatarlook " +
                "INNER JOIN characterstats cs on cs.id = ad.characterstat " +
                "INNER JOIN questmanagers qm on qm.id = c.questmanager " +
                "INNER JOIN inventories i1 on i1.id = c.equippedinventory " +
                "INNER JOIN inventories i2 on i2.id = c.equipinventory " +
                "INNER JOIN inventories i3 on i3.id = c.consumeinventory " +
                "INNER JOIN inventories i4 on i4.id = c.etcinventory " +
                "INNER JOIN inventories i5 on i5.id = c.installinventory " +
                "INNER JOIN inventories i6 on i6.id = c.cashinventory " +
                "LEFT JOIN inventories i7 on i7.id = c.decinventory " +
                "INNER JOIN monsterbookinfos mbi on mbi.id = c.monsterbook " +
                "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                "LEFT JOIN familiarcodexmanager fcm on fcm.id = c.familiarcodexmanager " +
                "WHERE c.accid = ? and cs.characterid != 0", "c", account.getId());
        Set<Char> chars = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                chars.add((Char) obj);
            }
        }
        return chars;
    }

    public void savePartyId(Char chr) {
        DatabaseManager.executeQuery("UPDATE characters SET partyID = ? WHERE id = ?", chr.getPartyID(), chr.getId());
    }

    public void updateLocation(Char chr) {
        DatabaseManager.executeQuery("UPDATE characters SET location = ? WHERE id = ?", chr.getLocation(), chr.getId());
    }

    public void saveFirstEnterRewards(Account account){
        firstEnterRewardDao.saveOrUpdate(account, account.getCurrentChr().getFirstEnterRewards());
    }
}
