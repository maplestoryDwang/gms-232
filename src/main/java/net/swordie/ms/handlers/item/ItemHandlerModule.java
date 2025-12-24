package net.swordie.ms.handlers.item;

import net.swordie.ms.Server;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.BroadcastMsg;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.avatar.EarStyle;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.familiar.FamiliarCodexUpdateMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedType;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.soulcollection.BossSoulType;
import net.swordie.ms.client.soulcollection.SoulCollectionModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.pet.PetSkill;
import net.swordie.ms.loaders.FieldData;
import net.swordie.ms.loaders.ForbiddenWordsData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.text.NumberFormat;
import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.AccountType.Player;
import static net.swordie.ms.enums.ChatType.SystemNotice;
import static net.swordie.ms.enums.EquipBaseStat.tuc;
import static net.swordie.ms.enums.InvType.EQUIP;
import static net.swordie.ms.enums.InvType.EQUIPPED;

public class ItemHandlerModule {
    private static final Logger log = LogManager.getLogger();

    protected static void handleRewardItem(Char chr, ItemInfo itemInfo, Item item) {
        // Reward items
        Item reward = itemInfo.getRandomReward();
        chr.consumeItem(item);
        chr.addItemToInventory(reward);
    }

    protected static void handleFusionAnvil(InPacket inPacket, Char chr, Item item) {
        int appearancePos = inPacket.decodeInt();
        int functionPos = inPacket.decodeInt();
        Inventory inv = chr.getEquipInventory();
        Equip appearance = (Equip) inv.getItemBySlot(appearancePos);
        Equip function = (Equip) inv.getItemBySlot(functionPos);
        if (appearance != null && function != null && appearance.getItemId() / 10000 == function.getItemId() / 10000) {
            function.getOptions().set(6, appearance.getItemId() % 10000);
            function.updateToChar(chr);
        }
        chr.consumeItem(item);
    }

    protected static void handleTripleMegaphone(InPacket inPacket, Char chr, String medalString, Item item) {
        if (chr.isOnMegaphoneCooldown()) {
            long remainingCooldown = chr.getMegaphoneRemainingCooldown() / 1000;
            var minutes = remainingCooldown / 60;
            var seconds = remainingCooldown % 60;
            chr.chatMessage(String.format("You are on cooldown! Remaining time: %d minutes and %d seconds", minutes, seconds));
            return;
        }

        boolean whisperIcon;
        World world;
        BroadcastMsg smega;
        byte stringListSize = inPacket.decodeByte();
        List<String> stringList = new ArrayList<>();
        for (int i = 0; i < stringListSize; i++) {
            stringList.add(String.format("%s%s : %s", medalString, chr.getName(), inPacket.decodeString()));
        }

        // Forbidden Words Check
        var isForbidden = false;
        for (var chat : stringList) {
            isForbidden = ForbiddenWordsData.isForbiddenChat(chat);
            if (isForbidden) {
                break;
            }
        }
        if (isForbidden) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        whisperIcon = inPacket.decodeByte() != 0;

        world = chr.getClient().getWorld();
        smega = BroadcastMsg.tripleMegaphone(stringList,
                (byte) chr.getClient().getChannelInstance().getChannelId(), whisperIcon, chr);
        world.broadcastPacketByChr(chr, WvsContext.broadcastMsg(smega));
        chr.consumeItem(item);
        chr.setTripleMegaphoneCooldown();
    }

    protected static void handleItemMegaphone(InPacket inPacket, Char chr, String medalString, Item item) {
        if (chr.isOnMegaphoneCooldown()) {
            long remainingCooldown = chr.getMegaphoneRemainingCooldown() / 1000;
            var minutes = remainingCooldown / 60;
            var seconds = remainingCooldown % 60;
            chr.chatMessage(String.format("You are on cooldown! Remaining time: %d minutes and %d seconds", minutes, seconds));
            return;
        }

        String text;
        boolean whisperIcon;
        InvType invType;
        World world;
        BroadcastMsg smega;
        text = inPacket.decodeString();

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(text)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        whisperIcon = inPacket.decodeByte() != 0;
        var subType = inPacket.decodeInt();
        if (subType == 0 || subType == 1) {
            var equipSelected = subType == 1;
            invType = EQUIP;
            int itemPosition = 0;
            if (equipSelected) {
                invType = InvType.getInvTypeByVal(inPacket.decodeInt());
                itemPosition = inPacket.decodeInt();
                if (invType.isEquipType() && itemPosition < 0) {
                    invType = EQUIPPED;
                }
            }
            Item broadcastedItem = chr.getInventoryByType(invType).getItemBySlot(itemPosition);

            world = chr.getClient().getWorld();
            smega = BroadcastMsg.itemMegaphone(String.format("%s%s : %s", medalString, chr.getName(), text),
                    (byte) chr.getClient().getChannelInstance().getChannelId(), whisperIcon, equipSelected,
                    broadcastedItem, chr);
            world.broadcastPacketByChr(chr, WvsContext.broadcastMsg(smega));
            chr.consumeItem(item);
            chr.setMegaphoneCooldown();
        } else {
            chr.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("This is not implemented yet.")));
        }
    }

    protected static void handleSuperMegaphone(InPacket inPacket, Char chr, String medalString, Item item) {
        if (chr.isOnMegaphoneCooldown()) {
            long remainingCooldown = chr.getMegaphoneRemainingCooldown() / 1000;
            var minutes = remainingCooldown / 60;
            var seconds = remainingCooldown % 60;
            chr.chatMessage(String.format("You are on cooldown! Remaining time: %d minutes and %d seconds", minutes, seconds));
            return;
        }

        String text = inPacket.decodeString();

        // Forbidden Words Check
        if (ForbiddenWordsData.isForbiddenChat(text)) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        boolean whisperIcon = inPacket.decodeByte() != 0;
        World world = chr.getClient().getWorld();
        BroadcastMsg smega = BroadcastMsg.megaphone(
                String.format("%s%s : %s", medalString, chr.getName(), text),
                (byte) chr.getClient().getChannelInstance().getChannelId(), whisperIcon, chr);
        world.broadcastPacketByChr(chr, WvsContext.broadcastMsg(smega));
        chr.consumeItem(item);
        chr.setMegaphoneCooldown();
    }

    protected static boolean handleNebuliteDiffuser(InPacket inPacket, Char chr, Item item) {
        short ePos;
        Equip equip;
        ePos = inPacket.decodeShort();
        InvType invType = ePos < 0 ? EQUIPPED : EQUIP;
        equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (equip == null || equip.getSocket(0) == 0 || equip.getSocket(0) == ItemConstants.EMPTY_SOCKET_ID) {
            chr.chatMessage("That item currently does not have an active socket.");
            chr.dispose();
            return true;
        }
        equip.setSocket(0, ItemConstants.EMPTY_SOCKET_ID);
        equip.updateToChar(chr);

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copySocketsFrom(equip);
            otherEquip.updateToChar(chr);

            chr.write(ZeroPool.egoEquipComplete(true, true));
        }

        chr.consumeItem(item);
        return false;
    }

    protected static boolean handleBonusCube(Client c, InPacket inPacket, Char chr, short pos, int itemId, Item item) {
        short ePos;
        InvType invType;
        Equip equip;
        int tierUpChance;
        short hiddenValue;
        boolean tierUp;
        if (c.getWorld().isReboot()) {
            chr.getOffenseManager().addOffense(String.format("Character %d attempted to use a bonus potential cube in reboot world.", chr.getId()));
            chr.dispose();
            return true;
        }
        ePos = (short) inPacket.decodeInt();
        invType = ePos < 0 ? EQUIPPED : EQUIP;
        equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (equip == null) {
            chr.chatMessage(SystemNotice, "Could not find equip.");
            return true;
        } else if (equip.getBonusGrade() < ItemGrade.Rare.getVal()) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to use cube (id %d) an equip without a potential (id %d)", chr.getId(), itemId, equip.getItemId()));
            chr.dispose();
            return true;
        }

        List<Integer> oldOptions = new ArrayList<>(equip.getOptions());
        tierUpChance = ItemConstants.getTierUpChance(itemId);
        hiddenValue = ItemGrade.getHiddenGradeByVal(equip.getBonusGrade()).getVal();
        tierUp = !(hiddenValue >= ItemGrade.HiddenLegendary.getVal()) && Util.succeedProp(tierUpChance);
        if (tierUp) {
            hiddenValue++;
        }
        equip.setHiddenOptionBonus(hiddenValue, ItemConstants.THIRD_LINE_CHANCE);
        equip.releaseOptions(true);
        if (itemId != ItemConstants.WHITE_BONUS_POT_CUBE) {
            c.write(FieldPacket.bonusCubeResult(chr, tierUp, itemId, ePos, equip));
            c.write(FieldPacket.showItemReleaseEffect(chr.getId(), ePos, true));
        } else {
            if (chr.getMemorialCubeInfo() == null) {
                chr.setMemorialCubeInfo(new MemorialCubeInfo(equip, itemId, oldOptions));
            }
            chr.getField().broadcastPacket(UserPacket.showItemMemorialEffect(chr.getId(), true, itemId, ePos, pos));
            c.write(WvsContext.whiteCubeResult(equip, item.getBagIndex(), chr.getMemorialCubeInfo()));
        }
        if (itemId != ItemConstants.WHITE_BONUS_POT_CUBE) {
            equip.updateToChar(chr);
            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);
            }
        }
        chr.consumeItem(item);
        return false;
    }

    protected static boolean handleVioletCube(InPacket inPacket, Char chr, int itemId) {
        short ePos;
        InvType invType;
        Equip equip;
        Equip oldEquip;
        ePos = (short) inPacket.decodeInt();
        invType = ePos < 0 ? EQUIPPED : EQUIP;
        equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (equip == null) {
            chr.chatMessage(SystemNotice, "Could not find equip.");
            chr.dispose();
            return true;
        } else if (equip.getBaseGrade() < ItemGrade.Rare.getVal()) {
            String msg = String.format("Character %d tried to use cube (id %d) an equip without a potential (id %d)", chr.getId(), itemId, equip.getItemId());
            chr.getOffenseManager().addOffense(msg);
            chr.dispose();
            return true;
        }
        oldEquip = equip.deepCopy();

        OutPacket outPacket = new OutPacket(OutHeader.UNK_690);
        outPacket.encodeInt(chr.getId());
        outPacket.encodeByte(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);
        outPacket.encodeInt(1);

        chr.write(outPacket);
        return false;
    }

    protected static boolean handleCube(Client c, InPacket inPacket, Char chr, short pos, int itemID, Item item) {
        short ePos = (short) inPacket.decodeInt();
        InvType invType = ePos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (equip == null) {
            chr.chatMessage(SystemNotice, "Could not find equip.");
            chr.dispose();
            return true;
        } else if (equip.getBaseGrade() < ItemGrade.Rare.getVal()) {
            String msg = String.format("Character %d tried to use cube (id %d) an equip without a potential (id %d)", chr.getId(), itemID, equip.getItemId());
            chr.getOffenseManager().addOffense(msg);
            chr.dispose();
            return true;
        }

        List<Integer> oldOptions = new ArrayList<>(equip.getOptions());
        boolean tierUp = equip.applyCube(chr, itemID, false);
        switch (itemID) {
            case ItemConstants.RED_CUBE:
                c.write(FieldPacket.redCubeResult(chr, tierUp, itemID, ePos, equip));
                c.write(FieldPacket.showItemReleaseEffect(chr.getId(), ePos, false));
                break;
            case ItemConstants.BLACK_CUBE:
                if (chr.getMemorialCubeInfo() == null) {
                    chr.setMemorialCubeInfo(new MemorialCubeInfo(equip, itemID, oldOptions));
                }
                chr.getField().broadcastPacket(UserPacket.showItemMemorialEffect(chr.getId(), true, itemID, ePos, pos));
                c.write(WvsContext.blackCubeResult(equip, item.getBagIndex(), chr.getCashInventory().getQuantity(itemID) - 1, chr.getMemorialCubeInfo()));
                break;
            case ItemConstants.OCCULT_CUBE:
            case ItemConstants.CRAFTSMAN_CUBE:
            case ItemConstants.MEISTER_CUBE:
                c.write(FieldPacket.inGameCubeResult(chr, tierUp, itemID, ePos, equip));
                c.write(FieldPacket.showItemReleaseEffect(chr.getId(), ePos, false));
        }
        if (itemID != ItemConstants.BLACK_CUBE) {
            equip.updateToChar(chr);
            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);
            }
        }
        chr.consumeItem(item);
        return false;
    }

    protected static boolean handleTeleportRock(Client c, InPacket inPacket, Char chr) {
        //can't teleport with hyper tele rock while in instance.
        if(chr.getField().getInstance() != null) {
            chr.chatMessage("You can't use a hyper teleport rock inside an instance");
            return false;
        }
        inPacket.decodeByte(); // unk
        short type = inPacket.decodeByte();
        if (type == 0) {
            int fieldId = inPacket.decodeInt();
            Field field = chr.getOrCreateFieldByCurrentInstanceType(fieldId);
            if (field == null || (chr.getField().getInfo().getFieldLimit() & FieldOption.TeleportItemLimit.getVal()) > 0 ||
                    !FieldData.getWorldMapFields().contains(fieldId)) {
                chr.chatMessage("You may not warp to that map, as you cannot teleport from your current map.");
                chr.dispose();
                return true;
            }

            if (!chr.canWarpTo(field)) {
                chr.boxMessage("You cannot teleport to that map. Check that your level is high enough and that you have all required quests completed.");
                chr.dispose();
                return true;
            }

            chr.setInstance(null);
            chr.warp(field);
        } else {
            String targetName = inPacket.decodeString();
            int worldID = chr.getClient().getChannelInstance().getWorldId().getVal();
            World world = Server.getInstance().getWorldById(worldID);
            Char targetChr = world.getCharByName(targetName);

            if(targetChr.getUser().getAccountType() != Player){
                chr.boxMessage("You can't warp to admins");
                return false;
            }

            // Target doesn't exist
            if (targetChr == null) {
                chr.chatMessage(String.format("%s is not online.", targetName));
                chr.dispose();
                return true;
            }

            Position targetPosition = targetChr.getPosition();

            Field targetField = targetChr.getField();
            if (targetField == null || (targetField.getInfo().getFieldLimit() & FieldOption.TeleportItemLimit.getVal()) > 0) {
                chr.chatMessage("You may not warp to that map, as the targeted map cannot be teleported to.");
                chr.dispose();
                return true;
            }

            if (!chr.canWarpTo(targetField)) {
                chr.boxMessage("You cannot teleport to that map. Check that your level is high enough and that you have all required quests completed.");
                chr.dispose();
                return true;
            }

            if (targetChr.getInstance() != null) {
                // Target is in an instanced Map
                chr.chatMessage(String.format("%s is currently in an instance.", targetName));
            } else if (targetChr.isInCashShop() || targetChr.isInAuctionHouse()) {
                chr.chatMessage("%s is currently in the Cash Shop or Auction House.", targetName);
            } else if (targetChr.getChannel() != c.getChannel()) {
                // Change channels & warp & teleport
                int fieldId = targetChr.getFieldID();
                chr.setInstance(null);
                chr.changeChannelAndWarp(targetChr.getChannel(), fieldId);
            } else if (targetChr.getFieldID() != chr.getFieldID()) {
                // warp & teleport
                chr.setInstance(null);
                chr.warp(targetField);
                chr.write(FieldPacket.teleport(targetPosition, chr));
            } else {
                // teleport
                chr.write(FieldPacket.teleport(targetPosition, chr));
            }
        }
        return false;
    }

    protected static boolean handlePetSkillItem(InPacket inPacket, Char chr, int itemID, Item item) {
        // Pet Skill Items
        long sn = inPacket.decodeLong();
        PetSkill ps = ItemConstants.getPetSkillFromID(itemID);
        if (ps == null) {
            chr.chatMessage(String.format("Unhandled pet skill item %d", itemID));
            return true;
        }
        Item pi = chr.getCashInventory().getItemBySN(sn);
        if (!(pi instanceof PetItem)) {
            chr.chatMessage("Could not find that pet.");
            return true;
        }
        boolean add = itemID < 5191000; // add property doesn't include the "Slimming Medicine"
        PetItem petItem = (PetItem) pi;
        if (add) {
            petItem.addPetSkill(ps);
        } else {
            petItem.removePetSkill(ps);
        }
        petItem.updateToChar(chr);
        chr.consumeItem(item);
        return false;
    }

    protected static void handleAvatarMegaphone(Client c, InPacket inPacket, Char chr, int itemID, Item item) {
        // Avatar Megaphones
        if (chr.isOnAvatarMegaphoneCooldown()) {
            long remainingCooldown = chr.getAvatarMegaphoneRemainingCooldown() / 1000;
            var minutes = remainingCooldown / 60;
            var seconds = remainingCooldown % 60;
            chr.chatMessage(String.format("You are on cooldown! Remaining time: %d minutes and %d seconds", minutes, seconds));
            return;
        }

        List<String> lineList = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            String line = inPacket.decodeString();
            lineList.add(line);
        }

        // Forbidden Words Check
        var isForbidden = false;
        for (var chat : lineList) {
            isForbidden = ForbiddenWordsData.isForbiddenChat(chat);
            if (isForbidden) {
                break;
            }
        }
        if (isForbidden) {
            chr.chatMessage("An error occurred. Try again later.");
            return;
        }
        // Forbidden Words Check

        boolean whisperIcon = inPacket.decodeByte() != 0;
        World world = c.getWorld();
        world.broadcastPacketByChr(chr, WvsContext.setAvatarMegaphone(chr, itemID, lineList, whisperIcon));
        chr.consumeItem(item);
        chr.setAvatarMegaphoneCooldown();
    }

    protected static void handleFullSpReset(Char chr, Item item) {
        var cs = chr.getAvatarData().getCharacterStat();
        var isExtendSpJob = JobConstants.isExtendSpJob(chr.getJob());
        var extendSp = cs.getExtendSP();

        List<Skill> skillsToReset = new ArrayList<>();
        var totalReturnedSp = 0;
        for (var spSet : extendSp.getSpSet()) {
            int returnedSp = 0;
            var skills = chr.getSkillsByJobLevel(spSet.getJobLevel());
            for (var skill : skills) {
                var si = SkillData.getSkillInfoById(skill.getSkillId());
                if ((si == null || si.getFixLevel() == 0) && !si.isInvisible()) {
                    returnedSp += skill.getCurrentLevel();
                    skill.setCurrentLevel(0);
                    skillsToReset.add(skill);
                }
            }
            if (isExtendSpJob) {
                spSet.setSp(spSet.getSp() + returnedSp);
            } else {
                totalReturnedSp += returnedSp;
            }
        }

        if (!isExtendSpJob) {
            cs.addSp(totalReturnedSp);
        }

        skillsToReset.forEach(chr::addSkill);
        chr.write(WvsContext.changeSkillRecordResult(skillsToReset, true, false, false, false));

        Map<Stat, Object> stats = new HashMap<>();
        if (isExtendSpJob) {
            stats.put(Stat.sp, extendSp);
        } else {
            stats.put(Stat.sp, cs.getSp());
        }
        chr.write(WvsContext.statChanged(stats));
        chr.consumeItem(item);
    }

    protected static void handleSingleSpReset(Char chr, InPacket inPacket, int jobLevel, Item item) {
        int toSkillId = inPacket.decodeInt();
        int fromSkillId = inPacket.decodeInt();

        if (!SkillConstants.isValidSkillForJobAndJobLevel(toSkillId, chr.getJob(), jobLevel)
        || !SkillConstants.isValidSkillForJobAndJobLevel(fromSkillId, chr.getJob(), jobLevel)) {
            chr.chatMessage("Invalid skill to reset from/to.");
            return;
        }

        var toSkill = chr.getSkill(toSkillId);
        var fromSkill = chr.getSkill(fromSkillId);

        var toSi = SkillData.getSkillInfoById(toSkillId);
        var fromSi = SkillData.getSkillInfoById(fromSkillId);

        if (fromSkill == null || fromSkill.getCurrentLevel() < 1 || fromSi.getFixLevel() != 0) {
            chr.chatMessage("You don't have enough SP to reset from that skill.");
            return;
        }

        if (toSkill != null && toSkill.getCurrentLevel() >= toSkill.getMaxLevel() || toSi.getFixLevel() != 0) {
            chr.chatMessage("That skill is already at its maximum level.");
            return;
        }

        toSkill.incCurrentLevel(1);
        fromSkill.incCurrentLevel(-1);

        chr.addSkill(toSkill);
        chr.addSkill(fromSkill);

        toSkill.updateToChar(chr);
        fromSkill.updateToChar(chr);
    }

    protected static void handlePlatinumScissorsOfKarma(InPacket inPacket, Char chr, Item item) {
        inPacket.decodeInt();
        var slot = inPacket.decodeInt();

        var psokItem = chr.getEquipInventory().getItemBySlot(slot);
        if (psokItem == null) {
            chr.chatMessage("Could not find that item.");
            chr.dispose();
            return;
        }

        if (psokItem.applyPsok(chr)) {
            chr.consumeItem(item);
        }
    }

    protected static void displayEnchantHyperUpgrade(Client c, InPacket inPacket, Char chr) {
        var ePos = inPacket.decodeInt();
        var safeGuard = inPacket.decodeByte() != 0;
        var inv = ePos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();
        ePos = Math.abs(ePos);
        var equip = (Equip) inv.getItemBySlot(ePos);
        safeGuard &= equip.canSafeguardHyperUpgrade();
        if (equip == null || equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige) || !ItemConstants.isUpgradable(equip.getItemId())) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to enchant a non-enchantable equip (pos %d, itemid %d).",
                    chr.getId(), ePos, equip == null ? 0 : equip.getItemId()));
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }
        var cost = GameConstants.getEnchantmentMesoCost(equip);

        var destroyProp = GameConstants.getEnchantmentDestroyRate(equip);
        if (safeGuard) {
            cost *= 2;
        }
        c.write(FieldPacket.hyperUpgradeDisplay(equip,
                equip.getInfo().isSuperiorEqp() ? equip.getChuc() > 0 : equip.getChuc() > 10 && equip.getChuc() % 5 != 0,
                cost,
                0,
                0,
                GameConstants.getEnchantmentSuccessRate(equip),
                0,
                destroyProp,
                0,
                equip.getDropStreak() >= 2)
        );
    }

    protected static void displayEnchantScrollUpgrade(Client c, InPacket inPacket, Char chr) {
        int ePos = inPacket.decodeInt();
        var inv = ePos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();
        ePos = Math.abs(ePos);
        var equip = (Equip) inv.getItemBySlot(ePos);
        if (c.getWorld().isReboot()) {
            chr.getOffenseManager().addOffense(String.format("Character %d attempted to scroll in reboot world (pos %d, itemid %d).",
                    chr.getId(), ePos, equip == null ? 0 : equip.getItemId()));
            chr.dispose();
            return;
        }
        if (equip == null || equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige) || !ItemConstants.isUpgradable(equip.getItemId())) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to scroll a non-scrollable equip (pos %d, itemid %d).",
                    chr.getId(), ePos, equip == null ? 0 : equip.getItemId()));
            chr.dispose();
            return;
        }
        var suis = ItemConstants.getScrollUpgradeInfosByEquip(equip);
        c.write(FieldPacket.scrollUpgradeDisplay(false, suis));
    }

    protected static void doEnchantTransmission(Client c, InPacket inPacket, Char chr) {
        inPacket.decodeInt(); // tick
        short toPos = inPacket.decodeShort();
        short fromPos = inPacket.decodeShort();

        var fromInv = fromPos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();
        var toInv = toPos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();

        Equip fromEq = (Equip) fromInv.getItemBySlot(fromPos);
        Equip toEq = (Equip) toInv.getItemBySlot(toPos);

        if (fromEq == null || toEq == null || fromEq.getItemId() != toEq.getItemId()
                || !fromEq.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            log.error(String.format("Equip transmission failed: from = %s, to = %s", fromEq, toEq));
            c.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }
        fromEq.removeVestige();
        fromEq.setChuc((short) 0);
        chr.consumeItem(toEq);
        fromEq.updateToChar(chr);
        c.write(FieldPacket.showTranmissionResult(fromEq, toEq));
    }

    protected static void doEnchantHyperUpgrade(Client c, InPacket inPacket, Char chr) {
        inPacket.decodeInt(); //tick
        int eqpPos = inPacket.decodeShort();
        boolean extraChanceFromMiniGame = inPacket.decodeByte() != 0;
        if (extraChanceFromMiniGame) {
            inPacket.decodeInt();
        }
        inPacket.decodeInt();
        inPacket.decodeInt();

        boolean equippedInv = eqpPos < 0;
        var inv = equippedInv ? chr.getEquippedInventory() : chr.getEquipInventory();
        var equip = (Equip) inv.getItemBySlot(Math.abs(eqpPos));

        boolean safeGuard = inPacket.decodeByte() != 0 && equip.canSafeguardHyperUpgrade();

        if (equip == null) {
            chr.chatMessage("Could not find the given equip.");
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        if (!ItemConstants.isUpgradable(equip.getItemId())
                || (equip.getBaseStat(tuc) != 0 && !c.getWorld().isReboot())
                || chr.getEquipInventory().getEmptySlots() == 0
                || equip.getChuc() >= GameConstants.getMaxStars(equip)
                || equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            chr.chatMessage("Equipment cannot be enhanced.");
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        long cost = GameConstants.getEnchantmentMesoCost(equip);
        if (safeGuard) {
            cost *= 2;
        }

        if (chr.getMoney() < cost) {
            chr.chatMessage("Mesos required: " + NumberFormat.getNumberInstance(Locale.US).format(cost));
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        Equip oldEquip = equip.deepCopy();
        int successProp = GameConstants.getEnchantmentSuccessRate(equip);
        if (extraChanceFromMiniGame) {
            successProp *= 1.045;
        }

        int destroyProp = safeGuard ? 0 : GameConstants.getEnchantmentDestroyRate(equip);
        if (equippedInv && destroyProp > 0 && chr.getEquipInventory().getEmptySlots() == 0) {
            c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("You do not have enough space in your "
                    + "equip inventory in case your item gets destroyed.")));
            return;
        }

        var rng = Util.getRandom(0, 1000);

        var success = rng < successProp;
        boolean boom = rng < successProp + destroyProp; // also includes success, but that's checked first
        boolean canDegrade = equip.getInfo().isSuperiorEqp() ? equip.getChuc() > 0 : equip.getChuc() > 10 && equip.getChuc() % 5 != 0;
        if (success) {
            equip.setChuc((short) (equip.getChuc() + 1));
            equip.setDropStreak(0);
            boom = false;
        } else if (boom) {
            equip.setChuc((short) 0);
            equip.makeVestige();
            boom = true;

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                chr.deductMoney(cost);
                c.write(FieldPacket.showUpgradeResult(oldEquip, equip, success, boom, canDegrade));
                chr.dispose();
                chr.getScriptManager().startScript(0, "ego_equip_boom", ScriptType.Npc);
                return;
            }

        } else if (canDegrade) {
            equip.setChuc((short) (equip.getChuc() - 1));
            equip.setDropStreak(equip.getDropStreak() + 1);
        }
        chr.deductMoney(cost);
        equip.recalcEnchantmentStats();
        oldEquip.recalcEnchantmentStats();
        equip.updateToChar(chr);

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(eqpPos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyChucFrom(equip);
            otherEquip.updateToChar(chr);
        }

        c.write(FieldPacket.showUpgradeResult(oldEquip, equip, success, boom, canDegrade));
        chr.dispose();
    }

    public static boolean enhanceItem(Char chr, Equip equip, boolean advanced, boolean safeguard) {
        if (equip == null) {
            chr.chatMessage("Could not find the given equip.");
            return false;
        }

        if (equip.cannotBeEnhanced(chr)) {
            chr.chatMessage("Equipment cannot be enhanced.");
            return false;
        }

        long cost = GameConstants.getEnchantmentMesoCost(equip);
        long nxCost = 0;

        if (chr.getMoney() < cost) {
            chr.chatMessage("Mesos required: " + NumberFormat.getNumberInstance(Locale.US).format(cost));
            return false;
        }

        Equip oldEquip = equip.deepCopy();
        int successProp = GameConstants.getEnchantmentSuccessRate(equip);
        if (advanced) {
            successProp += 100;
            nxCost = GameConstants.getEnchantmentNxCost(equip, cost);
        }

        if (chr.getNX() < nxCost) {
            chr.chatMessage("NX required: " + NumberFormat.getNumberInstance(Locale.US).format(nxCost));
            return false;
        }

        int destroyProp = safeguard ? 0 : GameConstants.getEnchantmentDestroyRate(equip);
        if (equip.getInvType() == EQUIPPED && destroyProp > 0 && chr.getEquipInventory().getEmptySlots() == 0) {
            chr.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("You do not have enough space in your "
                    + "equip inventory in case your item gets destroyed.")));
            return false;
        }

        var rng = Util.getRandom(0, 1000);

        var success = rng < successProp;
        boolean boom = rng < successProp + destroyProp; // also includes success, but that's checked first
        boolean canDegrade = equip.getInfo().isSuperiorEqp() ? equip.getChuc() > 0 : equip.getChuc() > 10 && equip.getChuc() % 5 != 0;
        if (success) {
            equip.setChuc((short) (equip.getChuc() + 1));
            equip.setDropStreak(0);
        } else if (boom) {
            equip.setChuc((short) 0);
            if (ItemConstants.isLongOrBigSword(equip.getItemId())) {
            } else {
                equip.makeVestige();
            }
            boom = true;

/*
            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                chr.deductMoney(cost);
                chr.write(FieldPacket.showUpgradeResult(oldEquip, equip, success, boom, canDegrade));
                chr.dispose();
                chr.getScriptManager().startScript(0, "ego_equip_boom", ScriptType.Npc);
                return false;
            }*/

        } else if (canDegrade) {
            equip.setChuc((short) (equip.getChuc() - 1));
            equip.setDropStreak(equip.getDropStreak() + 1);
        }
        chr.deductMoney(cost);
        chr.deductNX((int) nxCost);
        equip.recalcEnchantmentStats();
        oldEquip.recalcEnchantmentStats();
        equip.updateToChar(chr);

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(equip.getBagIndex()) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyChucFrom(equip);
            otherEquip.updateToChar(chr);
        }

        return true;
    }

    protected static void doEnchantScrollUpgrade(Client c, InPacket inPacket, Char chr) {
        inPacket.decodeInt();// tick
        short pos = inPacket.decodeShort();
        int scrollIndex = inPacket.decodeInt();
        Inventory inv = pos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();
        pos = (short) Math.abs(pos);
        Equip equip = (Equip) inv.getItemBySlot(pos);
        Equip prevEquip = equip.deepCopy();

        if (equip == null || equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to enchant a non-scrollable equip (pos %d, itemid %d).",
                    chr.getId(), pos, equip == null ? 0 : equip.getItemId()));
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        List<ScrollUpgradeInfo> suis = ItemConstants.getScrollUpgradeInfosByEquip(equip);
        if (scrollIndex < 0 || scrollIndex >= suis.size()) {
            chr.getOffenseManager().addOffense(String.format("Characer %d tried to spell trace scroll with an invalid scoll ID (%d, "
                    + "itemID %d).", chr.getId(), scrollIndex, equip.getItemId()));
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        ScrollUpgradeInfo sui = suis.get(scrollIndex);
        chr.consumeItem(ItemConstants.SPELL_TRACE_ID, sui.getCost());
        boolean success = sui.applyTo(equip, chr);
        equip.recalcEnchantmentStats();
        String desc = success ? "Your item has been upgraded." : "Your upgrade has failed.";
        chr.write(FieldPacket.showScrollUpgradeResult(false, success ? 1 : 0, desc, prevEquip, equip));

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(pos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyScrollStatsFrom(equip);
            otherEquip.copyAttributesFrom(equip);
            otherEquip.updateToChar(chr);
        }

        equip.updateToChar(chr);
        suis = ItemConstants.getScrollUpgradeInfosByEquip(equip);
        c.write(FieldPacket.scrollUpgradeDisplay(false, suis));

        var props = new HashMap<String, Object>();
        props.put("equip", equip);

        chr.getScriptManager().startScript(0, "custom_reapply_helper_scrolls", ScriptType.Npc, props);
    }

    public static void handleBeastTamerSpReset(Char chr, InPacket inPacket, Item item) {
        if (!JobConstants.isBeastTamer(chr.getJob())) {
            chr.chatMessage("Only Beast Tamers can use this item.");
            chr.dispose();
            return;
        }

        int rootId;

        switch (inPacket.decodeInt()) {
            case 1: // Bear
                rootId = 11200;
                break;
            case 2: // Leopard
                rootId = 11210;
                break;
            case 3: // Hawk
                rootId = 11211;
                break;
            case 4: // Cat
                rootId = 11212;
                break;
            default:
                chr.chatMessage("Unknown BT SP reset request.");
                return;
        }

        var sp = 0;
        Set<Skill> resetSkills = new HashSet<>();

        for (var skill : chr.getSkills()) {
            if (skill.getRootId() == rootId) {
                sp += skill.getCurrentLevel();
                skill.setCurrentLevel(0);
                resetSkills.add(skill);
            }
        }

        chr.addStatAndSendPacket(Stat.sp, sp);
        chr.write(WvsContext.changeSkillRecordResult(resetSkills));

        chr.consumeItem(item);
    }

    public static void handleFamiliarSlotExpansionCoupon(InPacket inPacket, Char chr, Item item) {
        var slotInc = 5; // item increases familiar slots by 5 slots.

        FamiliarCodexManager fcm = chr.getFamiliarCodexManager();
        fcm.incFamiliarSlots(slotInc);
        fcm.updateForClient(FamiliarCodexUpdateMask.FamiliarSlots.getVal());
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.FamiliarSlotExpanded, true));
        chr.consumeItem(item);
    }

    public static void handleRedFamiliarCard(InPacket inPacket, Char chr, Item item) {
        int familiarId = inPacket.decodeInt();
        Familiar f = chr.getFamiliarByID(familiarId);
        f.rerollPotentialLines(chr);
        if (Util.succeedProp(GameConstants.RANK_UP_CHANCE)) {
            f.doGradeUp(chr);
        }
        chr.write(UserLocal.familiarAddResult(f, FamiliarModifiedMask.PotLines0.getVal() + FamiliarModifiedMask.PotLines1.getVal()));
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.ReleaseOption, true));
        chr.consumeItem(item);
    }

    public static void handleFamiliarBreakthroughCard(InPacket inPacket, Char chr, Item item) {
        byte unk = inPacket.decodeByte();
        int familiarId = inPacket.decodeInt();
        Familiar f = chr.getFamiliarByID(familiarId);
        var curCap = f.getCapLevel();
        f.incCapLevel();
        var newCap = f.getCapLevel();
        boolean success = newCap > curCap;
        chr.write(UserLocal.familiarModifyResult(FamiliarModifiedType.MaxLvIncreased, success));
        if (success) {
            chr.consumeItem(item);
        }
    }

    public static void handleKaiserChangeColorCoupon(Char chr, Item item) {
        var itemId = item.getItemId();

        var extern = chr.getKaiserColourExtern();
        var inner = chr.getKaiserColourInner();
        var premium = chr.getKaiserColourPremium();
        switch (itemId) {
            case ItemConstants.FINAL_FORM_MAIN_COLOR_CHANGE_COUPON:
                extern = Util.getRandom(0, 75) * 10;
                break;
            case ItemConstants.FINAL_FORM_SUB_COLOR_CHANGE_COUPON:
                inner = Util.getRandom(0, 75) * 10;
                break;
            case ItemConstants.FINAL_FORM_PREMIUM_BLACK_COUPON:
                extern = 842;
                inner = 0;
                premium = true;
                break;
            case ItemConstants.FINAL_FORM_RESET_COUPON:
                extern = 0;
                inner = 0;
                premium = false;
                break;
        }
        chr.changeKaiserColour(extern, inner, premium);
        chr.consumeItem(item);
    }

    public static void handleItemTag(Char chr, InPacket inPacket, Item item) {
        var equipPos = inPacket.decodeShort();
        Equip equip = (Equip) chr.getEquippedInventory().getItemBySlot(equipPos);
        if (item.getItemId() == 5060010) {
            if (equip.getOwner().length() == 0) {
                chr.chatMessage("This item does not have an owner.");
                return;
            }
            equip.setOwner("");
        } else {
            if (equip.getOwner().length() > 0) {
                chr.chatMessage("This item already has an owner.");
                return;
            }
            equip.setOwner(chr.getName());

        }
        equip.updateToChar(chr);
        chr.consumeItem(item);
    }

    public static void displayAdBoard(Char chr, String msg) {
        if (msg.length() == 0) {
            chr.chatMessage("You cannot put up an empty message.");
            return;
        }

        if (msg.length() > GameConstants.MAX_AD_BOARD_MSG_LEN) {
            chr.chatMessage("This messsage is too long.");
            return;
        }
        chr.setADBoardRemoteMsg(msg);
        chr.getField().broadcastPacket(UserPacket.adBoard(chr));
    }

    public static void handleUserLotteryItemUseRequest(Char chr, Item item, int unk1, int unk2, int quantity) {

        var itemId = item.getItemId();

        if (ItemConstants.isLotteryItem(itemId)) {
            List<DropInfo> rewardPool = new ArrayList<>(LotteryItemConstants.getRewardPoolFromLotteryItem(itemId));
            Collections.shuffle(rewardPool);

            if (rewardPool.size() == 0) {
                chr.chatMessage("This Lottery Item does not have any rewards");
                return;
            }

            if (chr.getEquipInventory().isFull() || chr.getConsumeInventory().isFull() || chr.getEtcInventory().isFull() || chr.getInstallInventory().isFull()) {
                chr.chatMessage("Make sure you have enough space in your inventory");
                return;
            }

            if (unk1 == 0 && unk2 == 0) {
                // Click to Spin
                chr.write(UserLocal.doLotteryUI(item, rewardPool.stream().map(DropInfo::getItemID).collect(Collectors.toList())));
            }

            if (unk1 == 1 && unk2 == 1) {
                // Spinning
            }

            if (unk1 == 1 && unk2 == 0) {
                // Finished Spinning
                var rewardedItem = LotteryItemConstants.getRandomItemFromRewardPool(itemId);
                chr.consumeItem(item.getItemId(), quantity); // consume lottery box
                chr.addItemToInventory(rewardedItem.getItemID(), rewardedItem.getQuantity()); // give reward
                chr.write(UserPacket.effect(Effect.lotteryUIResult(rewardedItem.getItemID(), rewardedItem.getQuantity()))); // effects that go with the lottery UI
                chr.write(UserPacket.effect(Effect.lotteryUse(itemId))); // effects that go with the lottery UI

                // Ensure next reward is not the same quantity
                rewardedItem.generateNextDrop();
            }
        }

        switch (itemId) {
            case ItemConstants.RANDOM_CHAIR_BOX:
                var script = "consume_" + itemId;
                chr.getScriptManager().startScript(itemId, script, ScriptType.Item);
                break;
        }
    }

    public static void handleCartasPearl(InPacket inPacket, Char chr, Item item) {
        var newEarVal = inPacket.decodeInt();

        if (newEarVal >= EarStyle.values().length) {
            chr.chatMessage("Unknown selected value.");
            return;
        }

        var avatarLook = chr.getAvatarData().getAvatarLook();

        if (newEarVal == avatarLook.getEarStyle().ordinal()) {
            chr.chatMessage("You already have this ear shape.");
            return;
        }

        var newStyle = EarStyle.values()[newEarVal];
        avatarLook.setEarStyle(newStyle);
        if (chr.getAvatarData().getZeroAvatarLook() != null) {
            chr.getAvatarData().getZeroAvatarLook().setEarStyle(newStyle);
        }

        chr.consumeItem(item);

        chr.getField().broadcastPacket(UserRemote.avatarModified(chr, AvatarModifiedMask.AvatarLook.getVal(), (byte) 0), chr);
    }

    public static void handleSoulCollection(Char chr, Item item, BossSoulType bossSoulType) {

        SoulCollectionModule.addSoulToCollection(chr, chr.getAccount(), bossSoulType, item);
        chr.consumeItem(item);
    }

    public static void handleAddEquipAttributeScroll(InPacket inPacket, Char chr, Item scroll, EquipAttribute equipAttribute) {
        var invTypeNum = inPacket.decodeShort();
        var equipPos = inPacket.decodeShort();

        var invType = equipPos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(equipPos);
        if (scroll == null || equip == null) {
            chr.chatMessage(SystemNotice, "Could not find scroll or equip.");
            return;
        }

        equip.addAttribute(equipAttribute);

        chr.write(FieldPacket.showItemUpgradeEffect(chr.getId(), true, false, scroll.getItemId(), equip.getItemId(), false));

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(equipPos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyAttributesFrom(equip);
            otherEquip.updateToChar(chr);

            chr.write(ZeroPool.egoEquipComplete(true, true));
        }

        equip.updateToChar(chr);
        chr.consumeItem(scroll);
    }
}
