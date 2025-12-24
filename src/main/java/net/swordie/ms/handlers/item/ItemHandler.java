package net.swordie.ms.handlers.item;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.partyquests.towerofoz.OzTowerModule;
import net.swordie.ms.client.soulcollection.BossSoulType;
import net.swordie.ms.client.soulcollection.SoulCollectionModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.loaders.containerclasses.MakingSkillRecipe;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Portal;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import static net.swordie.ms.enums.ChatType.*;
import static net.swordie.ms.enums.InvType.*;

public class ItemHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.USER_PORTAL_SCROLL_USE_REQUEST)
    public static void handleUserPortalScrollUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.PortalScrollLimit.getVal()) > 0 || !field.isChannelField()) {
            chr.chatMessage("You may not use a return scroll in this map.");
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); //tick
        short slot = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        ItemInfo ii = ItemData.getItemInfoByID(itemID);
        Field toField;

        if (itemID != 2030000) {
            toField = chr.getOrCreateFieldByCurrentInstanceType(ii.getMoveTo());
        } else {
            toField = chr.getOrCreateFieldByCurrentInstanceType(field.getInfo().getReturnMap());
        }
        Portal portal = toField.getInfo().getDefaultPortal();
        chr.warp(toField, portal);
        chr.consumeItem(itemID, 1);
    }


    @Handler(op = InHeader.USER_STAT_CHANGE_ITEM_CANCEL_REQUEST)
    public static void handleUserStatChangeItemCancelRequest(Char chr, InPacket inPacket) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int itemID = inPacket.decodeInt();
        tsm.removeStatsBySkill(itemID);
        tsm.sendResetStatPacket();
    }


    @Handler(op = InHeader.USER_CONSUME_CASH_ITEM_USE_REQUEST)
    public static void handleUserConsumeCashItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Inventory cashInv = chr.getInventoryByType(InvType.CASH);
        inPacket.decodeInt(); // tick
        short pos = inPacket.decodeShort();
        int itemId = inPacket.decodeInt();
        Item item = cashInv.getItemBySlot(pos);
        ItemInfo itemInfo = ItemData.getItemInfoByID(itemId);
        if (item == null || item.getItemId() != itemId) {
            return;
        }
        int prefix = itemId / 10000;
        if (prefix == 553) {
            ItemHandlerModule.handleRewardItem(chr, itemInfo, item);
        } else if (prefix == 539) {
            ItemHandlerModule.handleAvatarMegaphone(c, inPacket, chr, itemId, item);
        } else if (prefix == 519) {
            ItemHandlerModule.handlePetSkillItem(inPacket, chr, itemId, item);
        } else if (prefix == 504) {
            // only hyper for now
            if (itemId == ItemConstants.HYPER_TELEPORT_ROCK) {
                ItemHandlerModule.handleTeleportRock(c, inPacket, chr);
            }
        } else if (prefix == 537) {
            ItemHandlerModule.displayAdBoard(chr, inPacket.decodeString());
        }
        else if (itemId == 5060000 || itemId == 5060010) { // Item Tag || Item Tag Clear
            ItemHandlerModule.handleItemTag(chr, inPacket, item);
        } else {
            Equip medal = (Equip) chr.getEquippedInventory().getFirstItemByBodyPart(BodyPart.Medal);
            int medalInt = 0;
            if (medal != null) {
                medalInt = (medal.getAnvilId() == 0 ? medal.getItemId() : medal.getAnvilId()); // Check for Anvilled medal
            }
            String medalString = (medalInt == 0 ? "" : String.format("<%s> ", StringData.getItemStringById(medalInt)));

            switch (itemId) {
                case 5050001:
                case 5050002:
                case 5050003:
                case 5050004:
                    ItemHandlerModule.handleSingleSpReset(chr, inPacket, itemId % 10, item);
                    break;
                case 5051001: // Full SP reset
                    ItemHandlerModule.handleFullSpReset(chr, item);
                    break;
                case 5050015:
                    ItemHandlerModule.handleBeastTamerSpReset(chr, inPacket, item);
                    break;
                case ItemConstants.RED_CUBE: // Red Cube
                case ItemConstants.BLACK_CUBE: // Black cube
                    ItemHandlerModule.handleCube(c, inPacket, chr, pos, itemId, item);
                    break;
                case 5062024: // Violet cube
                    ItemHandlerModule.handleVioletCube(inPacket, chr, itemId);
                    break;
                case ItemConstants.BONUS_POT_CUBE: // Bonus Potential Cube
                case ItemConstants.SPECIAL_BONUS_POT_CUBE: // [Special] Bonus Potential Cube
                case ItemConstants.WHITE_BONUS_POT_CUBE: // White Bonus Potential Cube
                    ItemHandlerModule.handleBonusCube(c, inPacket, chr, pos, itemId, item);
                    break;
                case 5750001: // Nebulite Diffuser
                    ItemHandlerModule.handleNebuliteDiffuser(inPacket, chr, item);
                    break;
                case 5072000: // Super Megaphone
                    ItemHandlerModule.handleSuperMegaphone(inPacket, chr, medalString, item);
                    break;
                case 5076000: // Item Megaphone
                    ItemHandlerModule.handleItemMegaphone(inPacket, chr, medalString, item);
                    break;
                case 5077000: // Triple Megaphone
                    ItemHandlerModule.handleTripleMegaphone(inPacket, chr, medalString, item);
                    break;
                case 5062400: // Fusion anvil
                case 5062405:
                    ItemHandlerModule.handleFusionAnvil(inPacket, chr, item);
                    break;
                case 5520001:
                    ItemHandlerModule.handlePlatinumScissorsOfKarma(inPacket, chr, item);
                    break;
                case 5060081: // Familiar Slot Expansion Coupon
                    ItemHandlerModule.handleFamiliarSlotExpansionCoupon(inPacket, chr, item);
                    break;
                case 5060075: // Red Familiar Card (Familiar Cube)
                case 5743005: // Red Familiar Card (Familiar Cube)
                    ItemHandlerModule.handleRedFamiliarCard(inPacket, chr, item);
                    break;
                case 5060076: // Familiar Breakthrough Card
                    ItemHandlerModule.handleFamiliarBreakthroughCard(inPacket, chr, item);
                    break;
                case 5155000:
                case 5155004:
                case 5155005:
                    ItemHandlerModule.handleCartasPearl(inPacket, chr, item);
                    break;
                case 5064100: // Shield Scroll (Safety Scroll)
                    ItemHandlerModule.handleAddEquipAttributeScroll(inPacket, chr, item, EquipAttribute.UpgradeCountProtection);
                    break;
                case 5064000: // Shielding Ward (Protection Scroll)
                    ItemHandlerModule.handleAddEquipAttributeScroll(inPacket, chr, item, EquipAttribute.ProtectionScroll);
                    break;
                default:
                    chr.chatMessage(Mob, String.format("Cash item %d is not implemented, notify Sjonnie pls.", itemId));
                    log.debug(String.format("Cash item %d is not implemented, rest packet: %s.", itemId, inPacket));
                    chr.dispose();
                    return;
            }
        }
        chr.dispose();
    }

    @Handler(op = InHeader.USER_FREE_MIRACLE_CUBE_ITEM_USE_REQUEST)
    public static void hanldeUserFreeMiracleCubeItemUseRequest(Client c, InPacket inPacket)
    {
        Char chr = c.getChr();
        Inventory cashInv = chr.getInventoryByType(InvType.CONSUME);
        inPacket.decodeInt(); // tick
        short pos = inPacket.decodeShort();
        Item item = cashInv.getItemBySlot(pos);
        switch(item.getItemId())
        {
            case ItemConstants.OCCULT_CUBE:
            case ItemConstants.CRAFTSMAN_CUBE:
            case ItemConstants.MEISTER_CUBE:
                ItemHandlerModule.handleCube(c, inPacket, chr, pos, item.getItemId(), item);
                break;
        }
    }

    @Handler(ops = {InHeader.USER_ARCANE_SYMBOL_REQUEST, InHeader.USER_AUTHENTIC_SYMBOL_REQUEST})
    public static void handleUserArcaneSymbolRequest(Char chr, InPacket inPacket) {
        int type = inPacket.decodeInt();
        int fromPos = inPacket.decodeInt();
        // toPos = int
        switch (type) {
            case 0:
                // merge
                Equip fromEq = (Equip) chr.getEquipInventory().getItemBySlot(fromPos);
                Equip toEq = (Equip) chr.getEquippedInventory().getItemByItemID(fromEq == null ? 0 : fromEq.getItemId());
                if (fromEq == null || toEq == null || fromEq.getItemId() != toEq.getItemId() || !ItemConstants.isSymbol(toEq.getItemId())) {
                    chr.boxMessage("Could not find one of the symbols.");
                    return;
                }
                if (toEq.getSymbolExp() >= ItemConstants.getRequiredSymbolExp(toEq.getSymbolLevel(), toEq.getItemId())) {
                    chr.boxMessage("Your symbol already is at max exp.");
                    return;
                }
                if (fromEq.getSymbolLevel() > toEq.getSymbolLevel()) {
                    chr.boxMessage("Your merging symbol's level is higher than your equipped symbol's level.");
                    return;
                }
                chr.consumeItem(fromEq);
                toEq.setSymbolExp(Math.min(toEq.getSymbolExp() + fromEq.getSymbolExp(), ItemConstants.getRequiredSymbolExp(toEq.getSymbolLevel(), toEq.getItemId())));
                toEq.updateToChar(chr);
                break;
            case 1:
                // enhance
                Equip symbol = (Equip) chr.getEquippedInventory().getItemBySlot(fromPos);
                int reqSymbolExp = ItemConstants.getRequiredSymbolExp(symbol.getSymbolLevel(), symbol.getItemId());
                var symbolType = SymbolType.byItemId(symbol.getItemId());
                if (!ItemConstants.isSymbol(symbol.getItemId())
                        || (symbol.getSymbolLevel() >= (symbolType == SymbolType.Arcane ? ItemConstants.MAX_ARCANE_SYMBOL_LEVEL : ItemConstants.MAX_AUTH_SYMBOL_LEVEL))
                        || symbol.getSymbolExp() < reqSymbolExp) {
                    chr.chatMessage("Could not find a valid symbol.");
                    return;
                }
                long cost = ItemConstants.getSymbolMoneyReqByLevel(symbol.getSymbolLevel(), symbol.getItemId());
                if (cost > chr.getMoney()) {
                    chr.chatMessage("You do not have enough mesos to level up your symbol.");
                    return;
                }
                chr.deductMoney(cost);
                symbol.setSymbolLevel((short) (symbol.getSymbolLevel() + 1));
                symbol.initSymbolStats(symbol.getSymbolLevel(), symbol.getSymbolExp() - reqSymbolExp, chr.getJob());
                symbol.updateToChar(chr);
                break;
            case 2:
                // mass merge
                int itemId = fromPos;
                toEq = (Equip) chr.getEquippedInventory().getItemByItemID(itemId);
                if (toEq == null || !ItemConstants.isSymbol(itemId)) {
                    chr.chatMessage("Could not find an arcane symbol to transfer to.");
                    return;
                }
                if (toEq.hasSymbolExpForLevelUp()) {
                    chr.chatMessage("First level your symbol before trying to add more symbols onto it.");
                    return;
                }
                Set<Equip> matchingSymbols = new HashSet<>();
                for (Item item : chr.getEquipInventory().getItems()) {
                    if (item.getItemId() == toEq.getItemId() && ((Equip) item).getSymbolLevel() == 1) {
                        matchingSymbols.add((Equip) item);
                    }
                }
                for (Equip eqSymbol : matchingSymbols) {
                    chr.consumeItem(eqSymbol);
                    toEq.addSymbolExp(eqSymbol.getTotalSymbolExp());
                    if (toEq.hasSymbolExpForLevelUp()) {
                        break;
                    }
                }
                toEq.updateToChar(chr);
                break;
        }
    }


    @Handler(op = InHeader.USER_STAT_CHANGE_ITEM_USE_REQUEST)
    public static void handleUserStatChangeItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.StatChangeItemConsumeLimit.getVal()) > 0) {
            chr.dispose();
            return;
        }

        var statChangeItemCooltimeSec = field.getInfo().getConsumeItemCoolTime();
        var consumeTimeDelta = chr.getNextAvailableConsumeItemTime() - System.currentTimeMillis();
        if (statChangeItemCooltimeSec > 0 && consumeTimeDelta > 0) {
            chr.chatMessage("You cannot use consumable items (%d second(s) left).", consumeTimeDelta / 1000);
            chr.dispose();
            return;
        }

        if (FieldConstants.isWillP2Field(chr.getField().getId()) && !WillModule.canUseConsumable(chr)) {
            chr.chatMessage("You will need the power of moonlight in order to use that here.");
            chr.dispose();
            return;
        }

        inPacket.decodeInt(); // tick
        short slot = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        Item item = chr.getConsumeInventory().getItemBySlot(slot);
        if (item == null || item.getItemId() != itemID) {
            return;
        }
        if (statChangeItemCooltimeSec > 0) {
            chr.setNextAvailableConsumeItemTime(System.currentTimeMillis() + statChangeItemCooltimeSec * 1000);
            chr.write(UserLocal.userConsumeItemCooltime());
        }
        chr.useStatChangeItem(item, true);
    }


    @Handler(op = InHeader.USER_SCRIPT_ITEM_USE_REQUEST)
    public static void handleUserScriptItemUseRequest(Client c, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        short slot = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        int quant = inPacket.decodeInt();
        Char chr = c.getChr();
        Item item = chr.getConsumeInventory().getItemBySlot(slot);
        if (item == null || item.getItemId() != itemID) {
            item = chr.getCashInventory().getItemBySlot(slot);
        }
        if (item == null || item.getItemId() != itemID) {
            chr.dispose();
            return;
        }


        // Damage Skin Check
        if (DamageSkinConstants.isHandledDamageSkinItemId(itemID)) {
            var success = chr.addDamageSkin(itemID);
            if (success) {
                var itemName = StringData.getItemStringById(itemID);
                chr.chatMessage(String.format("the %s has been added to your account's damage skin collection.", itemName != null ? itemName : "Unknown Damage Skin"));
            }
            return;
        }


        // Oz Pill
        if (ItemConstants.isOzPill(itemID)) {
            if (OzTowerModule.usePill(chr, itemID)) {
                chr.consumeItem(item);
            }
            chr.dispose();
            return;
        }


        String script = String.valueOf(itemID);
        ItemInfo ii = ItemData.getItemInfoByID(itemID);
        if (ii.getScript() != null && !"".equals(ii.getScript())) {
            script = ii.getScript();
        }
        chr.getScriptManager().startScript(itemID, script, ScriptType.Item);
        chr.dispose();
    }


    @Handler(op = InHeader.USER_EQUIPMENT_ENCHANT_WITH_SINGLE_UI_REQUEST)
    public static void handleUserEquipmentEnchantWithSingleUIRequest(Client c, InPacket inPacket) {
        byte equipmentEnchantType = inPacket.decodeByte();

        Char chr = c.getChr();
        EquipmentEnchantType eeType = EquipmentEnchantType.getByVal(equipmentEnchantType);

        if (eeType == null) {
            log.error(String.format("Unknown enchant UI request %d", equipmentEnchantType));
            chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
            return;
        }

        switch (eeType) {
            case ScrollUpgradeRequest:
                ItemHandlerModule.doEnchantScrollUpgrade(c, inPacket, chr);
                break;
            case ScrollUpgradeDisplay:
                ItemHandlerModule.displayEnchantScrollUpgrade(c, inPacket, chr);
                break;
            case HyperUpgradeResult:
                ItemHandlerModule.doEnchantHyperUpgrade(c, inPacket, chr);
                break;
            case TransmissionResult:
                ItemHandlerModule.doEnchantTransmission(c, inPacket, chr);
                break;
            case HyperUpgradeDisplay:
                ItemHandlerModule.displayEnchantHyperUpgrade(c, inPacket, chr);
                break;
            case MiniGameDisplay:
                c.write(FieldPacket.miniGameDisplay(eeType));
                break;
            case ScrollTimerEffective:
            case ShowHyperUpgradeResult:
                break;
            default:
                log.debug("Unhandled Equipment Enchant Type: " + eeType);
                chr.write(FieldPacket.showUnknownEnchantFailResult((byte) 0));
                break;
        }
    }

    @Handler(op = InHeader.USER_SKILL_LEARN_ITEM_USE_REQUEST)
    public static void handleUserLearnItemUseRequest(Client c, InPacket inPacket) {
        inPacket.decodeInt(); //tick
        short pos = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        Char chr = c.getChr();

        ItemInfo ii = ItemData.getItemInfoByID(itemID);
        if (ii == null || !chr.hasItem(itemID)) {
            chr.chatMessage("Could not find that item.");
            return;
        }
        int masterLevel = ii.getMasterLv();
        int reqSkillLv = ii.getReqSkillLv();
        int skillid = 0;
        Map<ScrollStat, Integer> vals = ii.getScrollStats();
        int chance = vals.getOrDefault(ScrollStat.success, 100);

        for (int skill : ii.getSkills()) {
            if (chr.hasSkill(skill)) {
                skillid = skill;
                break;
            }
        }
        Skill skill = chr.getSkill(skillid);
        if (skill == null) {
            chr.chatMessage(Notice2, "An error has occured. Mastery Book ID: " + itemID + ",  skill ID: " + skillid + ".");
            chr.dispose();
            return;
        }
        if (skillid == 0 || (skill.getMasterLevel() >= masterLevel) || skill.getCurrentLevel() < reqSkillLv) {
            chr.chatMessage(SystemNotice, "You cannot use this Mastery Book.");
            chr.dispose();
            return;
        }

        if (skill.getCurrentLevel() > reqSkillLv && skill.getMasterLevel() < masterLevel) {
            chr.chatMessage(Mob, "Success Chance: " + chance + "%.");
            chr.consumeItem(itemID, 1);
            if (Util.succeedProp(chance)) {
                skill.setMasterLevel(masterLevel);
                chr.addSkill(skill);
                chr.write(WvsContext.changeSkillRecordResult(skill));
                chr.chatMessage(Notice2, "[Mastery Book] Item id: " + itemID + "  set Skill id: " + skillid + "'s Master Level to: " + masterLevel + ".");
            } else {
                chr.chatMessage(Notice2, "[Mastery Book] Item id: " + itemID + " was used, however it was unsuccessful.");
            }
        }
        chr.dispose();
    }

    @Handler(op = InHeader.USER_ITEM_SKILL_SOCKET_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserItemSkillSocketUpdateItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); // tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        Item item = chr.getConsumeInventory().getItemBySlot(uPos);
        InvType invType = ePos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (item == null || equip == null || !ItemConstants.isWeapon(equip.getItemId())
                || !ItemConstants.isSoulEnchanter(item.getItemId()) || !ItemConstants.canEquipHavePotential(equip)
                || equip.getReqLevel() + equip.getiIncReq() < ItemConstants.MIN_LEVEL_FOR_SOUL_SOCKET) {
            chr.dispose();
            return;
        }
        int successProp = ItemData.getItemInfoByID(item.getItemId()).getScrollStats().get(ScrollStat.success);
        boolean success = Util.succeedProp(successProp);
        if (success) {
            equip.setSoulSocketId((short) (item.getItemId() % ItemConstants.SOUL_ENCHANTER_BASE_ID));
            equip.updateToChar(chr);

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copySoulOptionsFrom(equip);
                otherEquip.updateToChar(chr);

                chr.write(ZeroPool.egoEquipComplete(true, true));
            }
        }
        chr.getField().broadcastPacket(UserPacket.showItemSkillSocketUpgradeEffect(chr.getId(), success));
        chr.consumeItem(item);
    }

    @Handler(op = InHeader.USER_ITEM_SKILL_OPTION_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserItemSkillOptionUpdateItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); // tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        Item item = chr.getConsumeInventory().getItemBySlot(uPos);

        var inv = ePos < 0 ? chr.getEquippedInventory() : chr.getEquipInventory();

        Equip equip = (Equip) inv.getItemBySlot(ePos);
        if (item == null || equip == null || !ItemConstants.isWeapon(equip.getItemId())
                || !ItemConstants.isSoul(item.getItemId()) || equip.getSoulSocketId() == 0) {
            chr.dispose();
            return;
        }

        int curSoulOptionId = equip.getSoulOptionId();
        equip.setSoulOptionId((short) (1 + item.getItemId() % ItemConstants.SOUL_ITEM_BASE_ID));

        if (ePos < 0) {
            if (curSoulOptionId > 0) {
                int soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(curSoulOptionId);
                if (chr.hasSkill(soulSkillID)) {
                    chr.removeSkillAndSendPacket(soulSkillID);
                }
            }
            if (equip.getSoulOptionId() > 0) {
                var soulSkillID = SoulCollectionConstants.getSoulSkillFromSoulID(equip.getSoulOptionId());
                var soulType = SoulCollectionConstants.getBossSoulTypeBySoulId(equip.getSoulOptionId());
                var soulSkillLv = 1;
                if (soulType != null) {
                    soulSkillLv = SoulCollectionModule.getSoulSkillLevelBySoulType(chr, soulType);
                }
                chr.addSkill(soulSkillID, soulSkillLv, 2);
            }
        }
        short option = ItemConstants.getSoulOptionFromSoul(item.getItemId());
        if (option == 0) {
            option = (short) ItemConstants.getRandomSoulOption();
        }
        equip.setSoulOption(option);
        equip.updateToChar(chr);

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copySoulOptionsFrom(equip);
            otherEquip.updateToChar(chr);

            chr.write(ZeroPool.egoEquipComplete(true, true));
        }

        chr.consumeItem(item);
        chr.getField().broadcastPacket(UserPacket.showItemSkillOptionUpgradeEffect(chr.getId(), true, false, ePos, uPos));

        chr.getTemporaryStatManager().removeStat(CharacterTemporaryStat.SoulMP);
        chr.getTemporaryStatManager().removeStat(CharacterTemporaryStat.FullSoulMP);
        if (ePos < 0) {
            chr.initSoulMP();
        }
    }

    @Handler(op = InHeader.USER_WEAPON_TEMP_ITEM_OPTION_REQUEST)
    public static void handleUserWeaponTempItemOptionRequest(Char chr, InPacket inPacket) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(CharacterTemporaryStat.SoulMP)) {
            Option o = new Option();
            o.nOption = tsm.getOption(CharacterTemporaryStat.SoulMP).nOption;
            o.xOption = tsm.getOption(CharacterTemporaryStat.SoulMP).xOption;
            o.rOption = tsm.getOption(CharacterTemporaryStat.SoulMP).rOption;
            tsm.putCharacterStatValue(CharacterTemporaryStat.FullSoulMP, o);
            tsm.sendSetStatPacket();
        }
        chr.dispose();
    }

    @Handler(op = InHeader.USER_PROTECT_BUFF_DIE_ITEM_REQUEST)
    public static void handleUserProtectBuffDieItemRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        boolean used = inPacket.decodeByte() != 0;
        if (used) {
            // grabs the first one from the list of buffItems
            Item buffProtector = chr.getBuffProtectorItem();
            if (buffProtector != null) {
                chr.setBuffProtector(true);
                chr.consumeItem(buffProtector);
                chr.write(UserLocal.setBuffProtector(buffProtector.getItemId(), true));
            } else {
                chr.getOffenseManager().addOffense(String.format("Character id %d tried to use a buff without having the appropriate item.", chr.getId()));
            }
        }
    }

    @Handler(op = InHeader.USER_DEFAULT_WING_ITEM)
    public static void handleUserDefaultWingItem(Char chr, InPacket inPacket) {
        int wingItem = inPacket.decodeInt();
        if (wingItem == 5010093) { // AB
            chr.getAvatarData().getCharacterStat().setWingItem(wingItem);
            chr.getField().broadcastPacket(UserRemote.setDefaultWingItem(chr), chr);
        }
    }

    @Handler(op = InHeader.USER_RECIPE_OPEN_ITEM_USE_REQUEST)
    public static void handleUserRecipeOpenItemUseRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt();// tick
        short pos = inPacket.decodeShort();// // nPOS
        int itemId = inPacket.decodeInt();// nItemID

        Item item = chr.getInventoryByType(CONSUME).getItemBySlot(pos);
        if (item.getItemId() != itemId) {
            chr.dispose();
            return;
        }
        if (chr != null && chr.getHP() > 0 && ItemConstants.isRecipeOpenItem(itemId)) {
            ItemInfo recipe = ItemData.getItemInfoByID(itemId);
            if (recipe != null) {
                int recipeId = recipe.getSpecStats().getOrDefault(SpecStat.recipe, 0);
                int reqSkillLevel = recipe.getSpecStats().getOrDefault(SpecStat.reqSkillLevel, 0);
                MakingSkillRecipe msr = SkillData.getRecipeById(recipeId);
                if (msr != null && msr.isNeedOpenItem()) {
                    if (chr.getSkillLevel(msr.getReqSkillID()) < reqSkillLevel || chr.getSkillLevel(recipeId) > 0) {
                        chr.chatMessage("You need a higher Profession level to learn this recipe.");
                        return;
                    }
                    chr.consumeItem(itemId, 1);
                    chr.addSkill(recipeId, 1, 1);
                }
            }
        }
    }

    @Handler(op = InHeader.USER_ACTIVATE_NICK_ITEM)
    public static void handleUserActivateNickItem(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        int nickItem = inPacket.decodeInt();

        if (nickItem != 0 && !chr.hasItem(nickItem)) {
            chr.getOffenseManager().addOffense("Tried to use nickitem " + nickItem + " without having it.");
            return;
        }

        chr.setNickItem(nickItem);
        chr.getField().broadcastPacket(UserRemote.setActiveNickItem(chr, null), chr);
    }

    @Handler(op = InHeader.USER_BAG_ITEM_USE_REQUEST)
    public static void handleUserBagItemUseRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        short pos = inPacket.decodeShort();
        int itemId = inPacket.decodeInt();
        byte invType = inPacket.decodeByte();

        Item bagOwner = chr.getInventoryByType(InvType.getInvTypeByVal(invType)).getItemBySlot(pos);
        if (bagOwner == null || !ItemConstants.isBagItem(itemId)) {
            chr.dispose();
            return;
        }
        boolean firstTime = false;
        if (bagOwner.getBagItemIndex() == -1) { // Open BagItem for first time
            bagOwner.openBagItemFirstTime(chr);
            if (bagOwner.getBagItemIndex() == -1) {
                chr.chatMessage(String.format("You have reached the limit of bags in your %s tab", getInvTypeByVal(invType).toString()));
                chr.dispose();
                return;
            }
            chr.write(WvsContext.inventoryOperation(true, false, InventoryOperation.Add, pos, pos, pos, bagOwner));
            firstTime = true;
        }

        chr.write(UserLocal.bagItemUseResult(bagOwner.getBagItemIndex(), bagOwner.getItemId(), firstTime));
        chr.setLastBagItemIndexOpened(bagOwner.getBagItemIndex());
        chr.dispose();
    }

    @Handler(op = InHeader.USER_KAISER_COLOR_CHANGE_ITEM_USE_REQUEST)
    public static void handleUserKaiserColourChangeItemUseRequest(Char chr, InPacket inPacket) {
        int nPos = inPacket.decodeInt();
        int itemId = inPacket.decodeInt();
        inPacket.decodeByte();

        if (!chr.hasItem(itemId)) {
            chr.dispose();
            return;
        }

        Item item = chr.getInventoryByType(CONSUME).getItemBySlot(nPos);
        if (item == null) {
            chr.dispose();
            return;
        }

        ItemHandlerModule.handleKaiserChangeColorCoupon(chr, item);
        chr.dispose();
    }

    @Handler(op = InHeader.USER_LOTTERY_ITEM_USE_REQUEST)
    public static void handleUserLotteryItemUseRequest(Char chr, InPacket inPacket) {
        int nPos = inPacket.decodeShort();
        int itemId = inPacket.decodeInt();
        int unk1 = inPacket.decodeByte();
        int unk2 = inPacket.decodeByte();
        int quantity = inPacket.decodeInt();

        Item item = chr.getInventoryByType(CONSUME).getItemBySlot(nPos);
        if (item == null) {
            chr.dispose();
            return;
        }

        ItemHandlerModule.handleUserLotteryItemUseRequest(chr, item, unk1, unk2, quantity);
        chr.dispose();
    }

    @Handler(op = InHeader.USER_SELECT_SOUL_SKILL_UP_REQUEST)
    public static void handleUserSelectSoulSkillUpRequest(Char chr, InPacket inPacket) {
        // Packet sent when dragging Boss Soul into 'Soul Collection' UI.
        var bossSoulTypeVal = inPacket.decodeInt();
        var uPos = inPacket.decodeInt(); // consume slot position
        var unk1 = inPacket.decodeInt();
        var unk2 = inPacket.decodeInt();

        var bossSoulType = BossSoulType.getByVal(bossSoulTypeVal);

        Item item = chr.getInventoryByType(CONSUME).getItemBySlot(uPos);
        if (item == null || bossSoulType == null) {
            chr.dispose();
            return;
        }

        ItemHandlerModule.handleSoulCollection(chr, item, bossSoulType);
        chr.dispose();
    }
}
