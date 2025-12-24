package net.swordie.ms.handlers.item;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.BroadcastMsg;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.ZeroPool;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Map;

import static net.swordie.ms.enums.ChatType.Mob;
import static net.swordie.ms.enums.ChatType.SystemNotice;
import static net.swordie.ms.enums.EquipBaseStat.*;
import static net.swordie.ms.enums.InvType.*;

public class ItemUpgradeHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.USER_EX_ITEM_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserExItemUpgradeItemUseRequest(Client c, InPacket inPacket) {
        inPacket.decodeInt(); //tick
        var usePosition = inPacket.decodeShort();
        var eqpPosition = inPacket.decodeShort();
        var enchantSkill = inPacket.decodeByte() != 0;

        Char chr = c.getChr();
        Item flame = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(usePosition);
        var invType = eqpPosition < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(eqpPosition);

        if (flame == null || equip == null || !ItemConstants.canEquipHaveFlame(equip)) {
            chr.chatMessage(SystemNotice, "Could not find flame or equip.");
            chr.dispose();
            return;
        }

        if (!ItemConstants.isRebirthFlame(flame.getItemId())) {
            chr.chatMessage(SystemNotice, "This item is not a rebirth flame.");
            chr.dispose();
            return;
        }

        Map<ScrollStat, Integer> vals = ItemData.getItemInfoByID(flame.getItemId()).getScrollStats();
        if (vals.size() > 0) {
            int reqEquipLevelMax = vals.getOrDefault(ScrollStat.reqEquipLevelMax, 250);

            if (equip.getReqLevel() + equip.getiIncReq() > reqEquipLevelMax) {
                c.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("Equipment level does not meet scroll requirements.")));
                chr.dispose();
                return;
            }

            boolean success = Util.succeedProp(vals.getOrDefault(ScrollStat.success, 100));

            if (success) {
                boolean eternalFlame = vals.getOrDefault(ScrollStat.createType, 6) >= 7;
                equip.randomizeFlameStats(eternalFlame); // Generate high stats if it's an eternal/RED flame only.

                if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                    int otherEquipPos = Math.abs(eqpPosition) == 10 ? 11 : 10;
                    Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                    otherEquip.copyFlameStatsFrom(equip);
                    otherEquip.updateToChar(chr);

                    chr.write(ZeroPool.egoEquipComplete(true, true));
                }
            }

            c.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, flame.getItemId(), equip.getItemId(), false));
            equip.updateToChar(chr);
            chr.consumeItem(flame);
            chr.write(WvsContext.rebirthFlameResult(flame.getItemId(), equip.getBagIndexWithEquipped(), 0));
        }

        chr.dispose();
    }

    @Handler(op = InHeader.USER_MEMORIAL_CUBE_OPTION_REQUEST)
    public static void handleUserMemorialCubeOptionRequest(Char chr, InPacket inPacket) {
        MemorialCubeInfo mci = chr.getMemorialCubeInfo();
        if (mci == null) {
            return;
        }

        inPacket.decodeInt(); // tick
        boolean chooseBefore = inPacket.decodeByte() == 7;
        mci.applyPotential(chooseBefore);
        mci.getEquip().updateToChar(chr);
        chr.setMemorialCubeInfo(null);
    }

    @Handler(op = InHeader.GOLD_HAMMER_REQUEST)
    public static void handleGoldHammerRequest(Char chr, InPacket inPacket) {
        if (chr.getClient().getWorld().isReboot()) {
            chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Error, 1, 0));
            chr.getOffenseManager().addOffense(String.format("Character %d attempted to hammer in reboot world.", chr.getId()));
            return;
        }

        inPacket.decodeInt(); // tick
        int iPos = inPacket.decodeInt(); // hammer slot
        int hammerID = inPacket.decodeInt(); // hammer item id
        int eInvType = inPacket.decodeInt(); // use hammer? useless though
        int ePos = inPacket.decodeInt(); // equip slot

        InvType invType = InvType.getInvTypeByVal(eInvType);
        if (invType.equals(EQUIP) && ePos < 0) {
            invType = EQUIPPED;
        }

        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot((short) ePos);
        Item hammer = chr.getInventoryByType(CONSUME).getItemBySlot((short) iPos);
        short maxHammers = ItemConstants.MAX_HAMMER_SLOTS;

        if (equip != null) {
            var defaultEquip = ItemData.getEquipInfoById(equip.getItemId());
            if (defaultEquip.isHasIUCMax()) {
                maxHammers = defaultEquip.getIucMax();
            }
        }

        if (equip == null || !ItemConstants.canEquipGoldHammer(equip) ||
                hammer == null || !ItemConstants.isGoldHammer(hammer) || hammerID != hammer.getItemId()) {
            chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Error, 1, 0));
            chr.getOffenseManager().addOffense(String.format("Character %d tried to use hammer (id %d) on an invalid equip (id %d)",
                    chr.getId(), hammer == null ? 0 : hammer.getItemId(), equip == null ? 0 : equip.getItemId()));
            return;
        }

        Map<ScrollStat, Integer> vals = ItemData.getItemInfoByID(hammer.getItemId()).getScrollStats();

        if (vals.size() > 0) {
            if (equip.getIuc() >= maxHammers) {
                chr.getOffenseManager().addOffense(String.format("Character %d tried to use hammer (id %d) an invalid equip (id %d)",
                        chr.getId(), hammerID, equip.getItemId()));
                chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Error, 2, 0));
                return;
            }

            boolean success = Util.succeedProp(vals.getOrDefault(ScrollStat.success, 100));

            if (success) {
                equip.addStat(iuc, 1); // +1 hammer used
                equip.addStat(tuc, 1); // +1 upgrades available
                equip.updateToChar(chr);

                if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                    int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                    Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                    otherEquip.copySecondaryStatsFrom(equip);
                    otherEquip.updateToChar(chr);

                    chr.write(ZeroPool.egoEquipComplete(true, true));
                }

                chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Success, 0, equip.getIuc()));
            } else {
                chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Fail, 1, equip.getIuc()));
            }

            chr.consumeItem(hammer.getItemId(), 1);
        }
    }

    @Handler(op = InHeader.GOLD_HAMMER_COMPLETE)
    public static void handleGoldHammerComplete(Char chr, InPacket inPacket) {
        int returnResult = inPacket.decodeInt();
        int result = inPacket.decodeInt();
        if (returnResult == GoldHammerResult.Success.getVal() || returnResult == GoldHammerResult.Fail.getVal()) {
            //I think its ok to just send back the result given.
            chr.write(WvsContext.goldHammerItemUpgradeResult(GoldHammerResult.Done, result, 0));
        } else {
            chr.getOffenseManager().addOffense(String.format("Character %d have invalid gold hammer complete returnResult %d",
                    chr.getId(), returnResult));
        }
    }

    @Handler(op = InHeader.USER_UPGRADE_ASSIST_ITEM_USE_REQUEST)
    public static void handleUserUpgradeAssistItemUseRequest(Client c, InPacket inPacket) {

        Char chr = c.getChr();
        if (c.getWorld().isReboot()) {
            log.error(String.format("Character %d attempted to scroll in reboot world.", chr.getId()));
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); //tick
        short uPos = inPacket.decodeShort(); //Use Position
        var invType = InvType.getInvTypeByVal(inPacket.decodeShort());
        short ePos = inPacket.decodeShort(); //Eqp Position
        byte bEnchantSkill = inPacket.decodeByte(); //no clue what this means exactly
//        short idk = inPacket.decodeShort(); //No clue what this is, stayed  00 00  throughout different tests
        Item scroll = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(uPos);
        invType = ePos < 0 ? EQUIPPED : invType;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (scroll == null || equip == null) {
            chr.chatMessage(SystemNotice, "Could not find scroll or equip.");
            return;
        }
        int scrollID = scroll.getItemId();
        switch (scrollID) {
            case 2532000: // Safety Scroll
            case 2532001: // Pet Safety Scroll
            case 2532002: // Safety Scroll
            case 2532003: // Safety Scroll
            case 2532004: // Pet Safety Scroll
            case 2532005: // Safety Scroll
                equip.addAttribute(EquipAttribute.UpgradeCountProtection);
                break;
            case 2530000: // Lucky Day
            case 2530002: // Lucky Day
            case 2530003: // Pet Lucky Day
            case 2530004: // Lucky Day
            case 2530006: // Pet Lucky Day
                equip.addAttribute(EquipAttribute.LuckyDay);
                break;
            case 2531000: // Protection Scroll
            case 2531001:
            case 2531004:
            case 2531005:
                equip.addAttribute(EquipAttribute.ProtectionScroll);
                break;
        }
        c.write(FieldPacket.showItemUpgradeEffect(chr.getId(), true, false, scrollID, equip.getItemId(), false));

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyAttributesFrom(equip);
            otherEquip.updateToChar(chr);

            chr.write(ZeroPool.egoEquipComplete(true, true));
        }

        equip.updateToChar(chr);
        chr.consumeItem(scroll);
    }

    @Handler(op = InHeader.USER_HYPER_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserHyperUpgradeItemUseRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var usePos = inPacket.decodeShort();
        var equipPos = inPacket.decodeShort();

        var scroll = chr.getConsumeInventory().getItemBySlot(usePos);
        var equip = equipPos < 0
                ? chr.getEquippedInventory().getItemBySlot(Math.abs(equipPos))
                : chr.getEquipInventory().getItemBySlot(equipPos);

        if (scroll == null || !(equip instanceof Equip)) {
            chr.chatMessage("Could not find the scroll or the equip.");
            chr.dispose();
            return;
        }

        boolean advanced = false;
        boolean safeguard = false;

        switch (scroll.getItemId()) {
            case 2049301: // Normal EE
            case 2049307:
                break;
            case 2049023: // AEE
            case 2049300:
            case 2049303:
            case 2049306:
            case 2049323:
                advanced = true;
                break;
            case 2049325: // Noboom AEE
                advanced = true;
                safeguard = true;
                break;
        }

        boolean success = ItemHandlerModule.enhanceItem(chr, (Equip) equip, advanced, safeguard);
        if (!success) {
            chr.dispose();
        } else {
            chr.consumeItem(scroll);
        }
    }

    @Handler(op = InHeader.USER_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserUpgradeItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (c.getWorld().isReboot()) {
            log.error(String.format("Character %d attempted to scroll in reboot world.", chr.getId()));
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); //tick
        short uPos = inPacket.decodeShort(); //Use Position
        var invType = InvType.getInvTypeByVal(inPacket.decodeShort());
        short ePos = inPacket.decodeShort(); //Eqp Position
        byte bEnchantSkill = inPacket.decodeByte(); //no clue what this means exactly
        short idk = inPacket.decodeShort(); //No clue what this is, stayed  00 00  throughout different tests

        Item scroll = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(uPos);
        int scrollID = scroll.getItemId();
        var ii = ItemData.getItemInfoByID(scrollID);

        invType = ePos < 0 ? EQUIPPED : invType;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);

        if (equip == null || equip.hasSpecialAttribute(EquipSpecialAttribute.Vestige)) {
            chr.chatMessage(SystemNotice, "Could not find scroll or equip.");
            chr.dispose();
            return;
        }

        if (ItemConstants.isSymbol(equip.getItemId()) || !ii.canBeUsedOnItem(equip)) {
            chr.chatMessage("Invalid item to use this item on.");
            chr.dispose();
            return;
        }

        boolean success = true;
        boolean boom = false;
        Map<ScrollStat, Integer> vals = ii.getScrollStats();
        if (vals.size() > 0) {
            boolean recover = vals.getOrDefault(ScrollStat.recover, 0) != 0;
            boolean reset = vals.getOrDefault(ScrollStat.reset, 0) + vals.getOrDefault(ScrollStat.perfectReset, 0) != 0;
            if (equip.getBaseStat(tuc) <= 0 && (!recover && !reset)) {
                chr.chatMessage("This item cannot be scrolled.");
                chr.dispose();
                return;
            }
            boolean useTuc = !recover && !reset;
            int successChance = vals.getOrDefault(ScrollStat.success, 100)
                    + chr.getAvatarData().getCharacterStat().getExtraScrollChance(equip);
            int curse = vals.getOrDefault(ScrollStat.cursed, 0);

            success = Util.succeedProp(successChance);
            if (success) {
                boolean chaos = vals.containsKey(ScrollStat.randStat);
                if (chaos) {
                    boolean noNegative = vals.containsKey(ScrollStat.noNegative);
                    int max = vals.containsKey(ScrollStat.incRandVol) ? ItemConstants.INC_RAND_CHAOS_MAX : ItemConstants.RAND_CHAOS_MAX;
                    for (EquipBaseStat ebs : ScrollStat.getRandStats()) {
                        int cur = (int) equip.getBaseStat(ebs);
                        if (cur == 0) {
                            continue;
                        }
                        int randStat = Util.getRandom(max);
                        randStat = !noNegative && Util.succeedProp(50) ? -randStat : randStat;
                        equip.addStat(ebs, randStat);
                    }
                }
                if (recover) {
                    Equip fullTucEquip = ItemData.getEquipDeepCopy(equip.getItemId(), false);
                    int maxTuc = fullTucEquip.getTuc() + equip.getIuc();
                    if (equip.getTuc() + equip.getCuc() >= maxTuc) {
                        chr.chatMessage("This item has no open slots to recover.");
                    } else {
                        equip.addStat(tuc, 1);
                    }
                } else if (reset) {
                    equip.resetStats();

                    if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                        int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                        Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                        otherEquip.resetStats();
                    }

                } else {
                    for (Map.Entry<ScrollStat, Integer> entry : vals.entrySet()) {
                        ScrollStat ss = entry.getKey();
                        int val = entry.getValue();
                        if (ss.getEquipStat() != null) {
                            equip.addStat(ss.getEquipStat(), val);
                        }
                    }
                }
                if (useTuc) {
                    equip.addStat(tuc, -1);
                    equip.addStat(cuc, 1);
                }

                if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                    chr.write(ZeroPool.egoEquipComplete(true, true));
                }
            } else {
                if (curse > 0) {
                    boom = Util.succeedProp(curse);
                    if (boom && !equip.hasAttribute(EquipAttribute.ProtectionScroll)) {
                        chr.consumeItem(equip);
                    } else {
                        boom = false;
                    }
                }
                if (useTuc && !equip.hasAttribute(EquipAttribute.UpgradeCountProtection)) {
                    equip.addStat(tuc, -1);
                }

                if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                    chr.write(ZeroPool.egoEquipComplete(false, true));
                }
            }
            equip.removeAttribute(EquipAttribute.ProtectionScroll);
            equip.removeAttribute(EquipAttribute.LuckyDay);
            if (useTuc) {
                equip.removeAttribute(EquipAttribute.UpgradeCountProtection);
            }
            c.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, scrollID, equip.getItemId(), boom));
            if (!boom) {
                equip.recalcEnchantmentStats();
                equip.updateToChar(chr);

                if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                    int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                    Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                    otherEquip.copySecondaryStatsFrom(equip);
                    otherEquip.updateToChar(chr);
                }
            }
            chr.consumeItem(scroll);
        } else {
            chr.chatMessage("Could not find scroll data.");
            chr.dispose();
        }
    }

    @Handler(op = InHeader.USER_ITEM_OPTION_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserItemOptionUpgradeItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); //tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        byte bEnchantSkill = inPacket.decodeByte(); // bool or byte?
        Item scroll = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(uPos);
        var invType = ePos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (scroll == null || equip == null) {
            chr.chatMessage(SystemNotice, "Could not find scroll or equip.");
            chr.dispose();
            return;
        } else if (!ItemConstants.canEquipHavePotential(equip)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add potential an ineligible item (id %d)", chr.getId(), equip.getItemId()));
            chr.dispose();
            return;
        }
        int scrollID = scroll.getItemId();
        Map<ScrollStat, Integer> vals = ItemData.getItemInfoByID(scrollID).getScrollStats();
        int chance = vals.getOrDefault(ScrollStat.success, 100);
        int curse = vals.getOrDefault(ScrollStat.cursed, 0);
        boolean success = Util.succeedProp(chance);
        if (success) {
            short val;
            int thirdLineChance = ItemConstants.THIRD_LINE_CHANCE;
            switch (scrollID / 10) {
                case 204940: // Rare Pot
                case 204941:
                case 204942:
                case 204943:
                case 204944:
                case 204945:
                case 204946:
                    val = ItemGrade.HiddenRare.getVal();
                    equip.setHiddenOptionBase(val, thirdLineChance);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(false);
                    }
                    break;
                case 204970: // Epic pot
                case 204971:
                    val = ItemGrade.HiddenEpic.getVal();
                    equip.setHiddenOptionBase(val, thirdLineChance);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(false);
                    }
                    break;
                case 204974: // Unique Pot
                case 204975:
                case 204976:
                case 204979:
                    val = ItemGrade.HiddenUnique.getVal();
                    equip.setHiddenOptionBase(val, thirdLineChance);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(false);
                    }
                    break;
                case 204978: // Legendary Pot
                    val = ItemGrade.HiddenLegendary.getVal();
                    equip.setHiddenOptionBase(val, thirdLineChance);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(false);
                    }
                    break;

                default:
                    chr.chatMessage(Mob, "Unhandled scroll " + scrollID);
                    chr.dispose();
                    log.error("Unhandled scroll " + scrollID);
                    return;
            }

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);

                chr.write(ZeroPool.egoEquipComplete(true, true));
            }
        }

        c.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, scrollID, equip.getItemId(), false));
        equip.updateToChar(chr);
        chr.consumeItem(scroll);
    }

    @Handler(op = InHeader.USER_ADDITIONAL_SLOT_EXTEND_ITEM_USE_REQUEST)
    public static void handleUserAdditionalSlotExtendItemUseRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        Item item = chr.getConsumeInventory().getItemBySlot(uPos);
        var invType = ePos < 0 ? EQUIPPED : EQUIP;
        Item equipItem = chr.getInventoryByType(invType).getItemBySlot(ePos);

        if (item == null || equipItem == null) {
            chr.chatMessage("Could not find either the use item or the equip.");
            return;
        }

        int itemID = item.getItemId();
        Equip equip = (Equip) equipItem;

        if (((Equip) equipItem).getOptionBonus(2) != 0) {
            chr.chatMessage("This item already has 3 bonus potentials.");
            chr.dispose();
            return;
        }

        int successChance = ItemData.getItemInfoByID(itemID).getScrollStats().getOrDefault(ScrollStat.success, 100);
        boolean success = Util.succeedProp(successChance);
        if (success) {
            switch (itemID / 100) {
                case 20483: // Equipment bonus stamps
                    equip.setOption(2, equip.getRandomOption(true, 2), true);
                    break;
                default:
                    log.error("Unhandled slot extend item " + itemID);
                    chr.chatMessage("Unhandled slot extend item " + itemID);
                    return;
            }
            equip.updateToChar(chr);

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);

                chr.write(ZeroPool.egoEquipComplete(true, true));
            }
        }
        chr.consumeItem(item);
        chr.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, itemID, equip.getItemId(), false));
    }

    @Handler(op = InHeader.USER_ITEM_SLOT_EXTEND_ITEM_USE_REQUEST)
    public static void handleUserItemSlotExtendItemUseRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        Item item = chr.getConsumeInventory().getItemBySlot(uPos);
        var invType = ePos < 0 ? EQUIPPED : EQUIP;
        Item equipItem = chr.getInventoryByType(invType).getItemBySlot(ePos);

        if (item == null || equipItem == null) {
            chr.chatMessage("Could not find either the use item or the equip.");
            chr.dispose();
            return;
        }

        int itemID = item.getItemId();
        Equip equip = (Equip) equipItem;

        if (((Equip) equipItem).getOptionBase(2) != 0) {
            chr.chatMessage("This item already has 3 potentials.");
            chr.dispose();
            return;
        }

        int successChance = ItemData.getItemInfoByID(itemID).getScrollStats().getOrDefault(ScrollStat.success, 100);
        boolean success = Util.succeedProp(successChance);
        if (success) {
            switch (itemID / 100) {
                case 20495: // Equipment stamps
                    equip.setOption(2, equip.getRandomOption(false, 2), false);
                    break;
                default:
                    log.error("Unhandled slot extend item " + itemID);
                    chr.chatMessage("Unhandled slot extend item " + itemID);
                    return;
            }
            equip.updateToChar(chr);

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);

                chr.write(ZeroPool.egoEquipComplete(true, true));
            }
        }
        chr.consumeItem(item);
        chr.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, itemID, equip.getItemId(), false));
    }

    @Handler(op = InHeader.USER_ADDITIONAL_OPT_UPGRADE_ITEM_USE_REQUEST)
    public static void handleUserAdditionalOptUpgradeItemUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (c.getWorld().isReboot()) {
            log.error(String.format("Character %d attempted to use bonus potential in reboot world.", chr.getId()));
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); //tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        byte bEnchantSkill = inPacket.decodeByte();
        Item scroll = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(uPos);
        var invType = ePos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (scroll == null || equip == null) {
            chr.chatMessage(SystemNotice, "Could not find scroll or equip.");
            return;
        }
        int scrollID = scroll.getItemId();
        boolean success;
        Map<ScrollStat, Integer> vals = ItemData.getItemInfoByID(scrollID).getScrollStats();
        int chance = vals.getOrDefault(ScrollStat.success, 100);
        int curse = vals.getOrDefault(ScrollStat.cursed, 0);
        success = Util.succeedProp(chance);
        if (success) {
            short val;
            int thirdLineChance = ItemConstants.THIRD_LINE_CHANCE;
            switch (scrollID) {
                case 2048305: // Bonus Pot
                case 2048308:
                case 2048309:
                case 2048310:
                case 2048311:
                case 2048313:
                case 2048314:
                case 2048316:
                case 2048329:
                    val = ItemGrade.HiddenRare.getVal();
                    equip.setHiddenOptionBonus(val, thirdLineChance);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(true);
                    }
                    break;
                case 2048306: // Special Bonus Pot
                case 2048307:
                case 2048315:
                case 2048331:
                    val = ItemGrade.HiddenRare.getVal();
                    equip.setHiddenOptionBonus(val, 100);

                    if (ItemConstants.isLongOrBigSword(equip.getItemId())) { // Zero cannot use 'release option'
                        equip.releaseOptions(true);
                    }
                    break;
                default:
                    chr.chatMessage(Mob, "Unhandled scroll " + scrollID);
                    break;
            }

            if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
                int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
                Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
                otherEquip.copyItemOptionsFrom(equip);
                otherEquip.updateToChar(chr);

                chr.write(ZeroPool.egoEquipComplete(true, true));
            }
        }
        c.write(FieldPacket.showItemUpgradeEffect(chr.getId(), success, false, scrollID, equip.getItemId(), false));
        equip.updateToChar(chr);
        chr.consumeItem(scroll);
    }

    @Handler(op = InHeader.USER_ITEM_RELEASE_REQUEST)
    public static void handleUserItemReleaseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); //tick
        short uPos = inPacket.decodeShort();
        short ePos = inPacket.decodeShort();
        Item item = chr.getInventoryByType(InvType.CONSUME).getItemBySlot(uPos); // old system with magnifying glasses
        var invType = ePos < 0 ? EQUIPPED : EQUIP;
        Equip equip = (Equip) chr.getInventoryByType(invType).getItemBySlot(ePos);
        if (equip == null) {
            chr.chatMessage(SystemNotice, "Could not find equip.");
            return;
        }
        boolean base = equip.getOptionBase(0) < 0;
        boolean bonus = equip.getOptionBonus(0) < 0;
        if (base && bonus) {
            equip.releaseOptions(true);
            equip.releaseOptions(false);
        } else {
            equip.releaseOptions(bonus);
        }

        if (JobConstants.isZero(chr.getJob()) && ItemConstants.isLongOrBigSword(equip.getItemId())) {
            int otherEquipPos = Math.abs(ePos) == 10 ? 11 : 10;
            Equip otherEquip = (Equip) chr.getEquippedInventory().getItemBySlot(otherEquipPos);
            otherEquip.copyItemOptionsFrom(equip);
            otherEquip.updateToChar(chr);

            chr.write(ZeroPool.egoEquipComplete(true, true));
        }

        c.write(FieldPacket.showItemReleaseEffect(chr.getId(), ePos, bonus));
        if (invType.equals(EQUIPPED)) {
            chr.getInventoryByType(invType).recalcBaseStats(chr);
        }
        equip.updateToChar(chr);
    }
}
