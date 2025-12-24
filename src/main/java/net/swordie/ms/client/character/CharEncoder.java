package net.swordie.ms.client.character;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.emoticons.Emoticon;
import net.swordie.ms.client.character.emoticons.EmoticonModule;
import net.swordie.ms.client.character.emoticons.EmoticonShortcut;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.familiar.FamiliarModifiedMask;
import net.swordie.ms.client.character.info.FarmUserInfo;
import net.swordie.ms.client.character.info.ZeroInfoFlag;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.modules.BagItemModule;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.skills.ChosenSkill;
import net.swordie.ms.client.character.skills.CoreAura;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.StolenSkill;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.friend.FriendRecord;
import net.swordie.ms.client.jobs.resistance.WildHunterInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.DBChar;
import net.swordie.ms.enums.InvType;
import net.swordie.ms.life.Android;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

import java.util.*;
import java.util.stream.Collectors;

public class CharEncoder {

    /**
     * Encodes this Char's info inside a given {@link OutPacket}, with given info.
     *
     * @param outPacket The OutPacket this method should encode to.
     * @param mask      Which info should be encoded.
     */
    public static void encode(Char chr, OutPacket outPacket, DBChar mask) {
        // CharacterData::Decode
        outPacket.encodeLong(mask.get());

        outPacket.encodeByte(chr.getCombatOrders());
        for (int i = 0; i < GameConstants.MAX_PET_AMOUNT; i++) {
            if (chr.getPets() != null && i < chr.getPets().size()) {
                outPacket.encodeInt(chr.getPets().get(i).getActiveSkillCoolTime());
            } else {
                outPacket.encodeInt(-1);
            }
        }
        outPacket.encodeByte(0); // unk, not in kmst
        byte sizeByte = 0;
        outPacket.encodeByte(sizeByte);
        for (int i = 0; i < sizeByte; i++) {
            outPacket.encodeInt(0);
        }


        int sizee = 0;
        outPacket.encodeInt(sizee);
        for (int i = 0; i < sizee; i++) {
            outPacket.encodeInt(0); // nKey
            outPacket.encodeLong(0); // pInfo
        }
        boolean bool = false;
        outPacket.encodeByte(bool); // again unsure
        if (bool) {
            outPacket.encodeByte(0);
            sizee = 0;
            outPacket.encodeInt(sizee);
            for (int i = 0; i < sizee; i++) {
                outPacket.encodeLong(0);
            }
            for (int i = 0; i < sizee; i++) {
                outPacket.encodeLong(0);
            }
        }

        if (mask.isInMask(DBChar.Character)) {
            chr.getAvatarData().getCharacterStat().encode(outPacket);
            outPacket.encodeByte(chr.getFriendRecords().size());

            boolean hasBlessingOfFairy = chr.getBlessingOfFairy() != null;
            outPacket.encodeByte(hasBlessingOfFairy);
            if (hasBlessingOfFairy) {
                outPacket.encodeString(chr.getBlessingOfFairy());
            }

            boolean hasBlessingOfEmpress = chr.getBlessingOfEmpress() != null;
            outPacket.encodeByte(hasBlessingOfEmpress);
            if (hasBlessingOfEmpress) {
                outPacket.encodeString(chr.getBlessingOfEmpress());
            }

            outPacket.encodeByte(false); // ultimate explorer, deprecated
        }

        if (mask.isInMask(DBChar.Money)) {
            outPacket.encodeLong(chr.getMoney());
        }

        if (mask.isInMask(DBChar.ItemSlotConsume) || mask.isInMask(DBChar.ExpConsumeItem)) {
            outPacket.encodeInt(chr.getExpConsumeItems().size());
            for (ExpConsumeItem eci : chr.getExpConsumeItems()) {
                eci.encode(outPacket);
            }
        }

        if (mask.isInMask(DBChar.ItemSlotConsume) || mask.isInMask(DBChar.ShopBuyLimit)) {
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeLong(0);
                outPacket.encodeLong(0);
            }
        }

        // Items ------------------------------------------------

        if (mask.isInMask(DBChar.InventorySize)) {
            outPacket.encodeInt(chr.getEquipInventory().getSlots());
            outPacket.encodeInt(chr.getConsumeInventory().getSlots());
            outPacket.encodeInt(chr.getInstallInventory().getSlots());
            outPacket.encodeInt(chr.getEtcInventory().getSlots());
            outPacket.encodeInt(chr.getCashInventory().getSlots());
            outPacket.encodeInt(chr.getDecInventory().getSlots());
        }

        if (mask.isInMask(DBChar.EquipExtension)) {
            outPacket.encodeFT(FileTime.fromType(FileTime.Type.MAX_TIME)); // extra pendant
        }

        if (mask.isInMask(DBChar.ItemSlotEquip)) {
            outPacket.encodeByte(false); // encode equip inv
            List<Item> equippedItems = new ArrayList<>(chr.getEquippedInventory().getItems());
            equippedItems.sort(Comparator.comparingInt(Item::getBagIndex));

            // Normal equipped items
            for (Item item : equippedItems) {
                if (item instanceof Equip && item.getBagIndex() >= BodyPart.BPBase.getVal() && item.getBagIndex() < BodyPart.BPEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);

            // Equip inventory
            for (Item item : chr.getEquipInventory().getItems()) {
                if (!item.isCash()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);

            // NonBPEquip::Decode (10 inventory decodes)
            encodeNonBpEquips(chr, outPacket, false);

            // Android extra info
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeLong(0); // itemId?
                // sub
                Android.encodeDefaultAndroidInfo(outPacket);
            }
        }

        if (mask.isInMask(DBChar.ItemSlotInstall)) {
            // 2 inventories: 20048~20051 and 20001~20049
            outPacket.encodeShort(0);
            outPacket.encodeShort(0);
        }

        if (mask.isInMask(DBChar.CashItemInvInfo)) {
            outPacket.encodeByte(false);

            // Cash equipped items
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.getBagIndex() >= BodyPart.CBPBase.getVal() && item.getBagIndex() <= BodyPart.CBPEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex() - 100);
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);

            // if InvBool
            // Dec (6)
            for (Item item : chr.getDecInventory().getItems()) {
                if (item instanceof Equip) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);

            encodeNonBpEquips(chr, outPacket, true);
        }

        if (mask.isInMask(DBChar.ItemSlotConsume)) {
            // Consume (2)
            for (Item item : chr.getConsumeInventory().getItems().stream().filter(i -> !i.isInBag()).collect(Collectors.toList())) {
                outPacket.encodeShort(item.getBagIndex());
                item.encode(outPacket);
            }
            outPacket.encodeShort(0);
        }


        if (mask.isInMask(DBChar.ItemSlotInstall)) {
            // Install (3)
            for (Item item : chr.getInstallInventory().getItems().stream().filter(i -> !i.isInBag()).collect(Collectors.toList())) {
                outPacket.encodeShort(item.getBagIndex());
                item.encode(outPacket);
            }
            outPacket.encodeShort(0);
        }


        if (mask.isInMask(DBChar.ItemSlotEtc)) {
            // Etc (4)
            for (Item item : chr.getEtcInventory().getItems().stream().filter(i -> !i.isInBag()).collect(Collectors.toList())) {
                outPacket.encodeShort(item.getBagIndex());
                item.encode(outPacket);
            }
            outPacket.encodeShort(0);
        }

        if (mask.isInMask(DBChar.ItemSlotCash)) {
            // Cash (5)
            for (Item item : chr.getCashInventory().getItems()) {
                outPacket.encodeShort(item.getBagIndex());
                item.encode(outPacket);
            }
            outPacket.encodeShort(0);
        }

        // checks should be seperate, but eh
        if (mask.isInMask(DBChar.ItemSlotConsume) || mask.isInMask(DBChar.ItemSlotInstall) || mask.isInMask(DBChar.ItemSlotEtc)) {
            // BagDatas (Consume, Install, Etc)
            for (int i = 2; i <= 4; i++) {
                var type = InvType.getInvTypeByVal(i);
                var itemBagOwners = BagItemModule.getBagItemOwners(chr, type);
                outPacket.encodeInt(itemBagOwners.size());

                for (Item itemBagOwner : itemBagOwners) {
                    var itemBagIndex = itemBagOwner.getBagItemIndex();
                    outPacket.encodeInt(itemBagIndex);

                    if (itemBagIndex < GameConstants.getMaxItemPerBagByType(type) && itemBagIndex >= 0) {
                        // BagData Decode
                        outPacket.encodeInt(itemBagOwner.getItemId());
                        for (Item itemBagItem : BagItemModule.getItemsByBagItemIndex(chr, type, itemBagIndex)) {
                            outPacket.encodeInt(itemBagItem.getBagIndexInBagItem());
                            itemBagItem.encode(outPacket);
                        }

                        outPacket.encodeInt(-1); // mark end of list
                    }
                }
            }
        }

        // End bagdatas

        // Items -----------------------------------------------------------------

        if (mask.isInMask(DBChar.EquipExt)) {
            int val = 0x1337;
            outPacket.encodeInt(val);
            for (int i = 0; i < val; i++) {
                outPacket.encodeInt(542314);
                outPacket.encodeLong(52312);
            }
        }

        // start new 188
        if (mask.isInMask(DBChar.Unk40000000)) { // Something to do with skills
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeLong(0); // 1st half is id, 2nd half level?
                outPacket.encodeLong(0); // time
            }
        }


        // end new 188
        if (mask.isInMask(DBChar.ItemPot)) {
            boolean hasItemPot = chr.getItemPots() != null;
            outPacket.encodeByte(hasItemPot);
            if (hasItemPot) {
                for (int i = 0; i < chr.getItemPots().size(); i++) {
                    chr.getItemPots().get(i).encode(outPacket);
                    outPacket.encodeByte(i != chr.getItemPots().size() - 1);
                }
            }
        }

        if (mask.isInMask(DBChar.SkillRecord)) {
            boolean encodeSkills = chr.getSkills().size() > 0;
            outPacket.encodeByte(encodeSkills);
            if (encodeSkills) {
                Set<Skill> skills = chr.getSkills().stream().filter(s -> !SkillConstants.isUnionSkill(s.getSkillId())).collect(Collectors.toSet());
                outPacket.encodeShort(skills.size());
                for (Skill skill : skills) {
                    outPacket.encodeInt(skill.getSkillId());
                    outPacket.encodeInt(skill.getCurrentLevel());
                    outPacket.encodeFT(FileTime.fromType(FileTime.Type.MAX_TIME));
                    if (SkillConstants.isSkillNeedMasterLevel(skill.getSkillId())) {
                        outPacket.encodeInt(skill.getMasterLevel());
                    }
                }

                var size = 0; // new 228
                outPacket.encodeShort(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);

                    for (int j = 0; j < 6; j++) {
                        outPacket.encodeInt(0);
                    }

                    for (int j = 0; j < 4; j++) {
                        outPacket.encodeInt(0);
                    }

                    outPacket.encodeFT(0);
                    outPacket.encodeByte(0);
                }
            } else {
                short size = 0;
                outPacket.encodeShort(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // nTI
                    outPacket.encodeInt(0); // sValue
                }
                short size2 = 0;
                outPacket.encodeShort(size2);
                for (int i = 0; i < size2; i++) {
                    outPacket.encodeInt(0); // nTI
                }

                short size3 = 0;
                outPacket.encodeShort(size3);
                for (int i = 0; i < size3; i++) {
                    outPacket.encodeInt(0); // nTI
                    outPacket.encodeFT(new FileTime(0)); // pInfo
                }
                short size4 = 0;
                outPacket.encodeShort(size2);
                for (int i = 0; i < size2; i++) {
                    outPacket.encodeInt(0); // nTI
                }

                short size5 = 0;
                outPacket.encodeShort(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // nTI
                    outPacket.encodeInt(0); // sValue
                }
                short size6 = 0;
                outPacket.encodeShort(size2);
                for (int i = 0; i < size2; i++) {
                    outPacket.encodeInt(0); // nTI
                }
            }
            // Applied Link Skills
            Map<Integer, LinkSkill> linkSkills = LinkSkillsModule.getActiveLinkSkills(chr.getAccount(), chr);
            int size = linkSkills.size();
            outPacket.encodeShort(size);
            for (LinkSkill linkSkill : linkSkills.values()) {
                outPacket.encodeInt(linkSkill.getLinkSkillID());
                outPacket.encodeShort(linkSkill.getLevel() - 1);
            }

            // Account Link Skills
            Set<LinkSkill> linkSkills2 = chr.getAccount().getLinkSkills();
            outPacket.encodeInt(linkSkills2.size());
            for (LinkSkill linkSkill : linkSkills2) {
                linkSkill.encode(chr, outPacket);
            }

            // Hyper Stats
            var hyperStats = chr.getHyperStatsManager();
            outPacket.encodeByte(hyperStats.getCurrentPreset());
            hyperStats.encode(outPacket);
        }

        if (mask.isInMask(DBChar.SkillCooltime)) {
            long curTime = System.currentTimeMillis();
            Map<Integer, Long> cooltimes = chr.getSkillCoolTimes();
            outPacket.encodeShort(cooltimes.size());
            cooltimes.forEach((skillId, time) -> {
                outPacket.encodeInt(skillId); // nSkillId
                outPacket.encodeInt((int) ((time - curTime) / 1000)); // nSkillCooltime
            });
        }

        if (mask.isInMask(DBChar.QuestRecord)) {
            // modified/deleted, not completed anyway
            boolean removeAllOldEntries = true;
            outPacket.encodeByte(removeAllOldEntries);
            short size = (short) chr.getQuestManager().getQuestsInProgress().size();
            outPacket.encodeShort(size);
            for (Quest quest : chr.getQuestManager().getQuestsInProgress()) {
                outPacket.encodeInt(quest.getQRKey());
                outPacket.encodeString(quest.getQRValue());
            }
            if (!removeAllOldEntries) {
                // blacklisted quests
                short size2 = 0;
                outPacket.encodeShort(size2);
                for (int i = 0; i < size2; i++) {
                    outPacket.encodeInt(0); // nQRKey
                }
            }
            size = 0;
            outPacket.encodeShort(size);
            // Not sure what this is for
            for (int i = 0; i < size; i++) {
                outPacket.encodeString("");
                outPacket.encodeString("");
            }
        }
        if (mask.isInMask(DBChar.QuestComplete)) {
            boolean removeAllOldEntries = true;
            outPacket.encodeByte(removeAllOldEntries);
            Set<Quest> completedQuests = chr.getQuestManager().getCompletedQuests();
            outPacket.encodeShort(completedQuests.size());
            for (Quest quest : completedQuests) {
                outPacket.encodeInt(quest.getQRKey());
                outPacket.encodeFT(quest.getCompletedTime()); // Timestamp of completion
            }
            if (!removeAllOldEntries) {
                short size = 0;
                outPacket.encodeShort(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // nQRKey?
                }
            }
        }

        if (mask.isInMask(DBChar.MinigameRecord)) {
            var mgrs = chr.getMiniGameRecords();
            outPacket.encodeShort(mgrs.size());
            for (var mgr : mgrs) {
                outPacket.encode(mgr);
            }
        }

        if (mask.isInMask(DBChar.CoupleRecord)) {
            int coupleSize = 0;
            outPacket.encodeShort(coupleSize);
            for (int i = 0; i < coupleSize; i++) {
                new CoupleRecord().encode(outPacket);
            }
            int friendSize = 0;
            outPacket.encodeShort(friendSize);
            for (int i = 0; i < friendSize; i++) {
                new FriendRecord().encode(outPacket);
            }
            int marriageSize = 0;
            outPacket.encodeShort(marriageSize);
            for (int i = 0; i < marriageSize; i++) {
                new MarriageRecord().encode(outPacket);
            }
        }

        if (mask.isInMask(DBChar.MapTransfer)) {
            for (int i = 0; i < 5; i++) {
                outPacket.encodeInt(999999999);
            }
            for (int i = 0; i < 10; i++) {
                outPacket.encodeInt(999999999);
            }
            for (int i = 0; i < 13; i++) {
                outPacket.encodeInt(999999999);
            }
            for (int i = 0; i < 13; i++) {
                var hyperRockFields = chr.getHyperRockFields();
                if (hyperRockFields != null && i < hyperRockFields.size()) {
                    outPacket.encodeInt(hyperRockFields.get(i));
                } else {
                    outPacket.encodeInt(999999999);
                }
            }
        }

        if (mask.isInMask(DBChar.FamiliarCodex)) { // Encoding FamiliarCodex
            FamiliarCodexManager fcm = chr.getFamiliarCodexManager();

            outPacket.encodeInt(chr.getId()); // charId
            outPacket.encodeShort(GameConstants.MAX_SUMMON_GAUGE); // gauge
            outPacket.encodeShort(fcm.getFamiliarSlots()); // slots
            outPacket.encodeInt(chr.getFamiliars().size()); // nFamiliarCount
            outPacket.encodeByte(1);
            outPacket.encodeByte(0);
            outPacket.encodeShort(13929);
            outPacket.encodeByte(fcm.getFamiliarSlots());
            outPacket.encodeShort(0);
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);
            outPacket.encodeByte(1);

            // active familiars (3)
            for (int familiarId : fcm.getActiveFamiliars()) {
                outPacket.encodeInt(familiarId);
            }

            // active badges (8)
            for (int activeBadge : chr.getFamiliarCodexManager().getActiveBadges()) {
                outPacket.encodeByte(activeBadge);
            }
            outPacket.encodeByte(fcm.getActiveFamiliarPreset());
            outPacket.encodeByte(fcm.getActiveBadgePreset());

            // familiar presets
            for (int i = 0; i < 5; i++) {
                if (i == 0) {
                    outPacket.encodeInt(fcm.getActiveFamiliars()[0]);
                    outPacket.encodeInt(fcm.getActiveFamiliars()[1]);
                    outPacket.encodeInt(fcm.getActiveFamiliars()[2]);
                } else {
                    outPacket.encodeInt(0); // fam 1
                    outPacket.encodeInt(0); // fam 2
                    outPacket.encodeInt(0); // fam 3
                }
            }

            for (int i = 0; i < 5; i++) {
                if (i == 0) {
                    for (int activeBadge : chr.getFamiliarCodexManager().getActiveBadges()) {
                        outPacket.encodeByte(activeBadge);
                    }
                } else {
                    for (int j = 0; j < 8; j++) {
                        outPacket.encodeByte(-1); // activeBadge
                    }
                }
            }
        }

        if (mask.isInMask(DBChar.Familiar)) { // Encoding Familiars
            bool = false;
            outPacket.encodeByte(bool); // init?
            outPacket.encodeInt(chr.getFamiliars().size());
            if (bool) {
                for (Familiar familiar : chr.getFamiliars()) {
                    familiar.encode(outPacket, FamiliarModifiedMask.All.getVal());
                }
            } else {
                for (var familiar : chr.getFamiliars()) {
                    outPacket.encodeInt((int) familiar.getId());
                    familiar.encode(outPacket, FamiliarModifiedMask.All.getVal());
                }
            }
        }

        if (mask.isInMask(DBChar.FamiliarCodex)) { // Encoding Badge Collection Info
            var alreadyInit = false;
            var badgePageInfo = chr.getFamiliarCodexManager().getBadgePageInfo();

            outPacket.encodeByte(alreadyInit);
            outPacket.encodeInt(badgePageInfo.size());

            int i = 1;
            for (var entry : badgePageInfo.entrySet()) {
                var page = entry.getKey();
                var info = entry.getValue();

                if (!alreadyInit) {
                    outPacket.encodeInt(page);
                }

                outPacket.encodeInt(chr.getId());
                outPacket.encodeShort(page);
                for (int j = 0; j < 4; j++) {
                    outPacket.encodeInt(info.getCollectedMask()[j]);
                }
            }
        }

        if (mask.isInMask(DBChar.QuestRecordEx)) {
            outPacket.encodeShort(chr.getQuestManager().getEx().size());
            for (Quest quest : chr.getQuestManager().getEx()) {
                outPacket.encodeInt(quest.getQRKey());

                // TODO -> Fix All Quests to have 2 properties. Qr and QrEx
                if (QuestConstants.is2QrQuest(quest.getQRKey())) {
                    outPacket.encodeString(quest.getQRExValue());
                } else {
                    outPacket.encodeString(quest.getQRValue());
                }
            }
        }

        if (mask.isInMask(DBChar.Avatar)) {
            short size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0); // sValue
                new AvatarLook(true).encode(outPacket);
            }
        }
        if (mask.isInMask(DBChar.AvatarLook)) { // new 196 TODO
            int size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeShort(0);
            }
        }
        bool = false;
        outPacket.encodeByte(bool); // new 196
        if (bool && mask.isInMask(DBChar.Unk10000000000)) {
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeString("");
            }
        }

        // New 188
        if (mask.isInMask(DBChar.Unk100000000000)) {
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
            }
        }
        // End 188

        if (mask.isInMask(DBChar.WildHunterInfo)) {
            if (JobConstants.isWildHunter(chr.getAvatarData().getCharacterStat().getJob())) {
                // could make WildHunterInfo an entity for this
                QuestManager qm = chr.getQuestManager();
                WildHunterInfo whi = chr.getWildHunterInfo();
                Quest chosenQuest = qm.getQuestById(QuestConstants.WILD_HUNTER_JAGUAR_CHOSEN_ID);
                int toID = -1;
                if (chosenQuest == null) {
                    chosenQuest = QuestData.createQuestFromId(QuestConstants.WILD_HUNTER_JAGUAR_CHOSEN_ID);
                    qm.addQuest(chosenQuest);
                } else if (Util.isNumber(chosenQuest.getQRValue())) {
                    toID = Integer.parseInt(chosenQuest.getQRValue());
                }
                whi.setIdx((byte) toID);
                whi.setRidingType((byte) toID);
                chosenQuest.setQrValue("" + toID);
                chr.getWildHunterInfo().encode(outPacket); // GW_WildHunterInfo::Decode
            }
        }

        if (mask.isInMask(DBChar.ZeroInfo)) {
            if (JobConstants.isZero(chr.getAvatarData().getCharacterStat().getJob())) {
                if (chr.getZeroInfo() == null) {
                    chr.initZeroInfo();
                }
                chr.getZeroInfo().encode(ZeroInfoFlag.all(), outPacket); // ZeroInfo::Decode
            }
        }

        if (mask.isInMask(DBChar.ShopBuyLimit)) {
            short size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                // Encode shop buy limit
            }
        }

        // new 200
        if (mask.isInMask(DBChar.DamageSkin)) {
            int size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                int size2 = 0;
                outPacket.encodeShort(size2);
                int val = 0;
                outPacket.encodeInt(val);
                if (val > 0) {
                    for (int j = 0; j < size2; j++) {
                        // sub
                        outPacket.encodeInt(0);
                        outPacket.encodeShort(0);
                        outPacket.encodeInt(0);
                        outPacket.encodeShort(0);
                        outPacket.encodeLong(0);
                    }
                }

            }
        }

        if (mask.isInMask(DBChar.StolenSkills)) {
            if (JobConstants.isPhantom(chr.getAvatarData().getCharacterStat().getJob())) {
                for (int i = 0; i < 16; i++) {
                    StolenSkill stolenSkill = chr.getStolenSkillByPosition(i);
                    outPacket.encodeInt(stolenSkill == null ? 0 : stolenSkill.getSkillId());
                }
            } else {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);

                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);

                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);

                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);

                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
            }
        }

        if (mask.isInMask(DBChar.ChosenSkills)) {
            if (JobConstants.isPhantom(chr.getAvatarData().getCharacterStat().getJob())) {
                for (int i = 1; i <= 5; i++) { //Shifted by +1 to accomodate the Skill Management Tabs
                    ChosenSkill chosenSkill = chr.getChosenSkillByPosition(i);
                    outPacket.encodeInt(chosenSkill == null
                            ? 0
                            : chr.isChosenSkillInStolenSkillList(chosenSkill.getSkillId())
                            ? chosenSkill.getSkillId()
                            : 0
                    );
                }
            } else {
                for (int i = 0; i < 5; i++) {
                    outPacket.encodeInt(0);
                }
            }
        }

        if (mask.isInMask(DBChar.CharacterPotential)) { // Character potential
            outPacket.encodeShort(chr.getPotentials().size());
            for (CharacterPotential cp : chr.getPotentials()) {
                cp.encode(outPacket);
            }
        }

        if (mask.isInMask(DBChar.SoulCollection)) {
            var entries = chr.getAccount().getSoulCollectionEntries();
            outPacket.encodeShort(entries.size());
            entries.forEach(outPacket::encode);
        }

        sizee = 0x33;
        outPacket.encodeInt(sizee);
        for (int i = 0; i < sizee; i++) {
            outPacket.encodeString("");
            // sub_73A1A0
            outPacket.encodeInt(0);
            outPacket.encodeString("");
            int size = 0;
            outPacket.encodeInt(size);
            for (int j = 0; j < size; j++) {
                outPacket.encodeByte(0);
            }
        }
        outPacket.encodeByte(0); // idk

        if (mask.isInMask(DBChar.Character)) {
            outPacket.encodeInt(0); // honor level, deprecated
            outPacket.encodeInt(chr.getHonorExp()); // honor exp
        }

        if (mask.isInMask(DBChar.Unk200000000)) {
            boolean shouldIEncodeThis = false;
            outPacket.encodeByte(shouldIEncodeThis);
            if (shouldIEncodeThis) {
                short size = 0;
                outPacket.encodeShort(size);
                for (int i = 0; i < size; i++) {
                    short category = 0;
                    outPacket.encodeShort(category);
                    short size2 = 0;
                    outPacket.encodeShort(size2);
                    for (int i2 = 0; i2 < size2; i2++) {
                        outPacket.encodeInt(0); // nItemId
                        outPacket.encodeInt(0); // nCount
                    }
                }
            } else {
                short size2 = 0;
                outPacket.encodeShort(size2);
                for (int i2 = 0; i2 < size2; i2++) {
                    outPacket.encodeShort(1); // nCategory
                    outPacket.encodeInt(1302000); // nItemId
                    outPacket.encodeInt(3); // nCount
                }

            }
        }

        if (mask.isInMask(DBChar.ReturnEffectInfo)) {
//            getReturnEffectInfo().encode(outPacket); // ReturnEffectInfo::Decode
            outPacket.encodeByte(0);
        }
        if (mask.isInMask(DBChar.DressUpInfo)) {
            new DressUpInfo().encode(outPacket); // GW_DressUpInfo::Decode
        }

        if (mask.isInMask(DBChar.ActiveDamageSkin)) {
            outPacket.encodeInt(250 + chr.getDamageSkin().getDamageSkinID());
            outPacket.encodeInt(chr.getPremiumDamageSkin().getDamageSkinID());
            outPacket.encodeLong(0); // ftLastChanged?
            outPacket.encodeString(chr.getActiveDamageSkin().getDescription());
            outPacket.encodeInt(chr.getActiveDamageSkin().getDamageSkinID());
        }

        if (mask.isInMask(DBChar.CoreInfo)) {
            // GW_Core
            short size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeShort(-1); // nPos
                // sub
                outPacket.encodeInt(-1); // nCoreID
                outPacket.encodeInt(-1); // nLeftCount
            }

            size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeShort(-1); // nPos
                outPacket.encodeInt(-1); // nCoreID
                outPacket.encodeInt(-1); // nLeftCount
            }
        }

        if (mask.isInMask(DBChar.FarmPotential)) {
            new FarmPotential().encode(outPacket); // FARM_POTENTIAL::Decode
        }

        if (mask.isInMask(DBChar.FarmUserInfo)) {
            new FarmUserInfo().encode(outPacket); // FarmUserInfo::Decode
            outPacket.encodeInt(0x10);
            outPacket.encodeInt(0x11);
        }

        if (mask.isInMask(DBChar.MemorialCubeInfo)) {
            if (chr.getMemorialCubeInfo() != null) {
                chr.getMemorialCubeInfo().encode(outPacket);
            } else {
                new MemorialCubeInfo().encode(outPacket); // MemorialCubeInfo::Decode
            }
        }

        // new 200
        if (mask.isInMask(DBChar.MemorialFlameInfo)) {
            outPacket.encodeLong(0);
            outPacket.encodeLong(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeShort(0); // new 223
        }

        if (mask.isInMask(DBChar.LikePoint)) {
            new LikePoint().encode(outPacket);
        }

        if (mask.isInMask(DBChar.RunnerGameRecord)) {
            new RunnerGameRecord().encode(outPacket); // RunnerGameRecord::Decode
        }

        if (mask.isInMask(DBChar.Unk8000000000000)) { // new 196
            // sub
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(-1);
                outPacket.encodeByte(-1);
                outPacket.encodeByte(-1);
                outPacket.encodeByte(-1);
            }
            outPacket.encodeInt(-1);
            outPacket.encodeLong(-1);
            // ~sub

            // sub new 227
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeByte(0);
                outPacket.encodeByte(0);
                outPacket.encodeByte(0);
            }
            outPacket.encodeInt(0);
            // ~sub
        }

        short sizeO = 5; // some thing that opens on login?
        outPacket.encodeShort(sizeO);
        for (int i = 0; i < sizeO; i++) {
            outPacket.encodeInt(i);
            outPacket.encodeString("Effect/Direction11.img/effect/meet/frame0/0");
        }


        if (mask.isInMask(DBChar.MonsterCollection)) {
            Set<MonsterCollectionExploration> mces = chr.getAccount().getMonsterCollection().getMonsterCollectionExplorations();
            outPacket.encodeShort(mces.size());
            for (MonsterCollectionExploration mce : mces) {
                outPacket.encodeInt(mce.getPosition());
                outPacket.encodeString(mce.getValue(true));
            }
        }

        int sizeInt = 0;
        // CharacterData::DecodeTextEquipInfo
        outPacket.encodeInt(sizeInt);
        for (int i = 0; i < sizeInt; i++) {
            outPacket.encodeInt(0);
            outPacket.encodeString("");
        }

        if (mask.isInMask(DBChar.Unk10000000000000)) { // new 196
            int size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(-1);
                outPacket.encodeInt(-1);
            }
        }

        if (mask.isInMask(DBChar.VMatrix)) { // new 188
            List<MatrixRecord> matrixRecords = chr.getSortedMatrixRecords();
            outPacket.encodeInt(matrixRecords.size());
            for (MatrixRecord mr : matrixRecords) {
                outPacket.encode(mr);
            }
            // next part is 196

            outPacket.encodeInt(GameConstants.MAX_NODE_SLOTS);
            for (int i = 0; i < GameConstants.MAX_NODE_SLOTS; i++) {
                MatrixRecord mr = chr.getMatrixRecordByPosition(i);
                MatrixSlot ms = chr.getMatrixSlotByPosition(i);
                outPacket.encodeInt(mr != null ? matrixRecords.indexOf(mr) : -1); // nodeID
                outPacket.encodeInt(i); // matrix Slot position
                outPacket.encodeInt(ms.getEnhancementLv()); // slot enhancement level
                outPacket.encodeByte(ms.isUnlockedByPurchase()); // bShow Unlocked Symbol
            }
        }

        if (mask.isInMask(DBChar.Achievement)) { // new 188
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);

            // sub
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeLong(0);
            // ~

            outPacket.encodeLong(0);
            outPacket.encodeLong(0);

            int size = 0;
            outPacket.encodeInt(size);
            // achievements (id = 1 completed in order to open)
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(1); // achievement id
                outPacket.encodeByte(-1); // sub-mission id (-1 for completion)
                outPacket.encodeByte(2); // achievement state (0/2)
                outPacket.encodeFT(FileTime.currentTime()); // ftCompleteTime
                outPacket.encodeString(""); // sProgressName: mission/{submissionid}/subMission/{sProgressName}
            }

            size = 0;
            outPacket.encodeInt(size);
            // medals
            for (int i = 0; i < size; i++) {
                outPacket.encodeInt(2); // id
                outPacket.encodeByte(1); // state (0 = not unlocked, 1 = achieved, 2 = current selected for insignia)
                outPacket.encodeFT(FileTime.currentTime()); // unlock time
            }
        }

        if (mask.isInMask(DBChar.ItemSlotEtc)) { // new 196
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeLong(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeLong(0);
                outPacket.encodeFT(0);
                outPacket.encodeFT(0);
            }
        }

        // new 203
        if (mask.isInMask(DBChar.Unk200000000000000)) {
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);

            // hardcoded 15 (227, was 9 before)
            for (int i = 0; i < 15; i++) {
                bool = false;
                outPacket.encodeByte(bool);
                if (bool) {
                    outPacket.encodeByte(77);
                    outPacket.encodeByte(77);

                    outPacket.encodeInt(7777777);

                    outPacket.encodeByte(7);
                    outPacket.encodeByte(7);
                    outPacket.encodeByte(7);
                }
            }
        }

        // new 209
        if (mask.isInMask(DBChar.Unk400000000000000)) {
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);

            // hardcoded 15 (227, was 9 before)
            for (int i = 0; i < 15; i++) {
                bool = true;
                outPacket.encodeByte(bool);
                if (bool) {
                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);

                    outPacket.encodeInt(-1);

                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);
                }
            }
        }

        // new 218
        if (mask.isInMask(DBChar.Unk1000000000000000)) {
            // Familiar?
            outPacket.encodeByte(0);
            outPacket.encodeByte(0);

            // hardcoded 15
            for (int i = 0; i < 15; i++) {
                bool = true;
                outPacket.encodeByte(bool);
                if (bool) {
                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);

                    outPacket.encodeInt(-1);

                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);
                    outPacket.encodeByte(-1);
                }
            }
        }

        if (mask.isInMask(DBChar.Emoticon)) {
            int size = GameConstants.EMOTICONS.length;
            outPacket.encodeInt(size);
            for (var emoticon : GameConstants.EMOTICONS) {
                Emoticon emo = EmoticonModule.getEmoticonById(chr, emoticon);

                outPacket.encodeInt(emoticon);

                outPacket.encodeInt(emoticon);
                outPacket.encodeFT(FileTime.MIN_TIME());
                outPacket.encodeShort(emo != null ? emo.getPosition() : 0); // favourites position
            }

            size = GameConstants.EMOTICON_BASES.length;
            outPacket.encodeInt(size);
            for (int i = 1; i <= size; i++) {
                outPacket.encodeShort(i);
                outPacket.encodeInt(GameConstants.EMOTICON_BASES[i - 1]);
            }

            outPacket.encodeShort(GameConstants.EMOTICON_SLOTS); // emoticon slots

            Set<EmoticonShortcut> emoticonShortcuts = chr.getEmoticonShortcuts();
            outPacket.encodeInt(emoticonShortcuts.size());
            for (EmoticonShortcut em : emoticonShortcuts) {
                outPacket.encodeShort(em.getPosition());
                outPacket.encodeInt(em.getEmoticonId());
                outPacket.encodeString(em.getShortcut(), 20);
                outPacket.encodeByte(0);
            }

            emoticonShortcuts = chr.getEmoticonShortcuts();
            outPacket.encodeInt(emoticonShortcuts.size());
            for (EmoticonShortcut em : emoticonShortcuts) {
                outPacket.encodeString(em.getShortcut());
                outPacket.encodeInt(em.getEmoticonId());
                outPacket.encodeString(em.getShortcut(), 20);
                outPacket.encodeByte(0);
            }
        }

        // new 227
        if (mask.isInMask(DBChar.CoreAura)) {
            var size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeLong(0);

                var size2 = 0;
                outPacket.encodeInt(size2);
                for (int j = 0; j < size2; j++) {
                    outPacket.encodeInt(0);
                }
            }
        }

        if (mask.isInMask(DBChar.Commerce)) {
            var vessel = chr.getVessel();
            outPacket.encodeByte(vessel != null);
            if (vessel != null) {
                vessel.encode(outPacket);
            }

            var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.VOYAGES);
            q.convertQRValueToProperties();
            int size = 0;
            outPacket.encodeShort(q.getProperties().size()); // Routes
            for (var entry : q.getProperties().entrySet()) {
                outPacket.encodeByte(Integer.parseInt(entry.getKey()));
                outPacket.encodeInt(Integer.parseInt(entry.getValue()));
                outPacket.encodeInt(0);
            }

            size = 0;
            outPacket.encodeShort(size); // Cargo
            for (int i = 0; i < size; i++) {
                // sub_905D50
                outPacket.encodeInt(0); // ItemId
                outPacket.encodeInt(0); // Quantity
                outPacket.encodeFT(0); // FileTime
            }
        }

        if (mask.isInMask(DBChar.AvatarLook)) {
            outPacket.encodeByte(0);
        }

        if (mask.isInMask(DBChar.AvatarLook)) {
            int size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                // sub
                outPacket.encodeShort(0);
                outPacket.encodeShort(0);
            }
            size = 0;
            outPacket.encodeInt(size);
            for (int i = 0; i < size; i++) {
                // sub
                outPacket.encodeShort(0);
                outPacket.encodeInt(0);
            }
        }

        if (mask.isInMask(DBChar.CoreAura)) {
            // [Link Skill] Custom Skill Change | Link Skills -> Acc. Wide
            Account account = chr.getAccount();
            if (account.getCoreAura() == null) {
                account.setCoreAura(new CoreAura(chr));
            }
            account.getCoreAura().encode(chr, outPacket);
            outPacket.encodeByte(1); // unk
        }

        if (mask.isInMask(DBChar.ActiveDamageSkin)) {
            short size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                outPacket.encodeShort(233);
                outPacket.encodeShort(543);
            }
        }

        if (mask.isInMask(DBChar.RedLeafInfo)) {
            // red leaf information
            outPacket.encodeInt(chr.getUserId());
            outPacket.encodeInt(chr.getId());
            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
            outPacket.encodeArr(new byte[32]); // red leaf info structure probably
        }

        if (mask.isInMask(DBChar.AvatarLook)) {
            bool = false;
            outPacket.encodeByte(bool);
            if (bool) {
                new AvatarLook(true).encode(outPacket);
            }
        }

        if (mask.isInMask(DBChar.AvatarLook)) {
            outPacket.encodeInt(chr.getAvatarData().getAvatarLook().getEarStyle().ordinal() );
            outPacket.encodeInt(chr.getAvatarData().getAvatarLook().getEarStyle().ordinal() );
            outPacket.encodeInt(chr.getAvatarData().getAvatarLook().getEarStyle().ordinal() );
            outPacket.encodeInt(chr.getAvatarData().getAvatarLook().getEarStyle().ordinal() );
            int size = 0;
            outPacket.encodeShort(size);
            for (int i = 0; i < size; i++) {
                // sub_8EE8D0
                outPacket.encodeInt(13713);
                outPacket.encodeInt(12381);
                outPacket.encodeString("aaaaa", 13);
                outPacket.encodeInt(3333);
            }
        }
    }

    private static void encodeNonBpEquips(Char chr, OutPacket outPacket, boolean cash) {
        // Evan
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.EvanBase.getVal() && item.getBagIndex() < BodyPart.EvanEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Mech
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.MechBase.getVal() && item.getBagIndex() <= BodyPart.MechEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Android
        if (cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.APBase.getVal() && item.getBagIndex() <= BodyPart.APEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Angelic Buster
        if (cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.DUBase.getVal() && item.getBagIndex() < BodyPart.DUEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Bits
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.BitsBase.getVal() && item.getBagIndex() < BodyPart.BitsEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Zero
        if (cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.ZeroBase.getVal() && item.getBagIndex() < BodyPart.ZeroEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Maybe zero beta cash?
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.MBPBase.getVal() && item.getBagIndex() < BodyPart.MBPEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Arcane
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.AFBase.getVal() && item.getBagIndex() < BodyPart.AFEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Authentic force
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.AUSBase.getVal() && item.getBagIndex() < BodyPart.AUSEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Totems
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.TotemBase.getVal() && item.getBagIndex() < BodyPart.TotemEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }

        // Haku
        if (!cash) {
            for (Item item : chr.getEquippedInventory().getItems()) {
                if (item instanceof Equip && item.isCash() == cash && item.getBagIndex() >= BodyPart.HakuStart.getVal() && item.getBagIndex() < BodyPart.HakuEnd.getVal()) {
                    outPacket.encodeShort(item.getBagIndex());
                    item.encode(outPacket);
                }
            }
            outPacket.encodeShort(0);
        }
    }

}
