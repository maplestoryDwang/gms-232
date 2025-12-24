package net.swordie.ms.handlers.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.familiar.FamiliarCodexUpdateMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedType;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.CFamiliar;
import net.swordie.ms.connection.packet.ShopDlg;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.enums.SpecStat;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.life.modules.FamiliarHandlerModule;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.NpcData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.shop.NpcShopDlg;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class FamiliarHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.FAMILIAR_ADD_REQUEST)
    public static void handleFamiliarAddRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        short slot = inPacket.decodeShort();
        int itemID = inPacket.decodeInt();
        int amountConsumed = inPacket.decodeInt(); // Amount of Familiars used
        Item item = chr.getConsumeInventory().getItemBySlot(slot);

        if (item == null || item.getItemId() != itemID || !ItemConstants.isFamiliar(itemID) || !chr.hasItemCount(itemID, amountConsumed)) {
            chr.chatMessage("Could not find that item.");
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add a familiar it doesn't have. (item id %d)", chr.getId(), itemID));
            chr.dispose();
            return;
        }

        var familiarId = ItemData.getItemInfoByID(item.getItemId()).getFamiliarId();
        var grade = ItemData.getItemInfoByID(item.getItemId()).getGrade();

        List<Familiar> familiars = new ArrayList<>();
        for (int i = 0; i < amountConsumed; i++) {
            if (ItemConstants.isFauxmiliarCard(itemID)) {
                if (itemID == 2871251) {
                    familiarId = 9963000;
                } else {
                    familiarId = 9963001;
                }
            }

            if (familiarId == 0) {
                continue;
            }
            var familiar = new Familiar(familiarId, "", chr, grade);
            chr.addFamiliar(familiar);
            familiars.add(familiar);
        }
        chr.consumeItem(item, amountConsumed);
        chr.write(UserLocal.familiarAddResult(familiars));
        chr.write(UserLocal.familiarBadgeAddResult(chr));
    }

    @Handler(op = InHeader.FAMILIAR_SUMMON_REQUEST)
    public static void handleFamiliarSummonRequest(Char chr, InPacket inPacket) {
        boolean summon = inPacket.decodeByte() != 0; // summon | remove

        if (summon) {
            chr.summonFamiliars();
        } else {
            chr.banishFamiliars();
        }
    }

    @Handler(op = InHeader.FAMILIAR_CODEX_MODIFY_REQUEST)
    public static void handleFamiliarCodexModifyRequest(Char chr, InPacket inPacket) {
        var fcm = chr.getFamiliarCodexManager();
        var mask = inPacket.decodeInt();

        if ((mask & FamiliarCodexUpdateMask.SummonGauge.getVal()) != 0) {
            inPacket.decodeShort(); // summon gauge
        }
        if ((mask & FamiliarCodexUpdateMask.FamiliarSlots.getVal()) != 0) {
            inPacket.decodeShort(); // familiar slots
        }
        if ((mask & FamiliarCodexUpdateMask.FamiliarCount.getVal()) != 0) {
            inPacket.decodeInt(); // familiar count
        }
        if ((mask & FamiliarCodexUpdateMask.Unk8.getVal()) != 0) {
            inPacket.decodeShort(); // unk
        }
        if ((mask & FamiliarCodexUpdateMask.Unk10.getVal()) != 0) {
            inPacket.decodeLong(); // decode Buffer8  not sure about structure
        }
        if ((mask & FamiliarCodexUpdateMask.ModifySetup.getVal()) != 0) {
            if (fcm.isFamiliarsSummoned()) {
                fcm.banishFamiliars();
            }

            int[] activatedFamiliars = new int[GameConstants.ACTIVE_FAMILIARS_SLOTS];
            for (int i = 0; i < GameConstants.ACTIVE_FAMILIARS_SLOTS; i++) {
                activatedFamiliars[i] = inPacket.decodeInt(); // Familiar Unique Id
            }
            fcm.setActiveFamiliars(activatedFamiliars);

            int[] equippedBadges = new int[GameConstants.BADGE_SLOTS];
            for (int i = 0; i < GameConstants.BADGE_SLOTS; i++) {
                equippedBadges[i] = inPacket.decodeByte(); // -1  =  empty slot
            }
            fcm.setActiveBadges(equippedBadges);

            // DecodeInt  unk1
            fcm.updateForClient(FamiliarCodexUpdateMask.ModifySetup.getVal());
        }
        if ((mask & FamiliarCodexUpdateMask.ModifyEquippedBadges.getVal()) != 0) {
            int[] equippedBadges = new int[GameConstants.BADGE_SLOTS];
            for (int i = 0; i < GameConstants.BADGE_SLOTS; i++) {
                equippedBadges[i] = inPacket.decodeByte(); // -1  =  empty slot
            }
            fcm.setActiveBadges(equippedBadges);
            fcm.initQuestsForSlots();
            fcm.updateForClient(FamiliarCodexUpdateMask.ModifyEquippedBadges.getVal());
        }
    }

    @Handler(op = InHeader.FAMILIAR_EDIT_REQUEST)
    public static void handleFamiliarEditRequest(Char chr, InPacket inPacket) {
        var type = inPacket.decodeByte();
        var famModifiedRequest = FamiliarModifiedType.byVal(type);

        if (famModifiedRequest == null) {
            chr.chatMessage("Unknown familiar request.");
            log.debug("Unknown familiar request: " + type);
            return;
        }

        int familiarId = inPacket.decodeInt();

        switch (famModifiedRequest) {
            case Extract:
                FamiliarHandlerModule.handleFamiliarExtract(chr, familiarId, inPacket);
                break;
            case Fuse:
                FamiliarHandlerModule.handleFamiliarFuse(chr, familiarId, inPacket);
                break;
            case Upgrade:
                FamiliarHandlerModule.handleFamiliarUpgrade(chr, familiarId, inPacket);
                break;
            case ToggleLock:
                FamiliarHandlerModule.handleFamiliarToggleLock(chr, familiarId, inPacket);
                break;
            case Rename:
                FamiliarHandlerModule.handleFamiliarRename(chr, familiarId, inPacket);
                break;
            case ReleaseOption:
                FamiliarHandlerModule.handleFamiliarReleaseOption(chr, familiarId, inPacket);
                break;
            default:
                chr.chatMessage("Unhandled familiar request.");
                log.debug("Unhandled familiar request: " + famModifiedRequest);
                break;
        }
    }

    @Handler(op = InHeader.FAMILIAR_SHOP_OPEN_REQUEST)
    public static void handleFamiliarShopOpenRequest(Char chr, InPacket inPacket) {
        if(chr == null || !chr.isOnline()  || chr.getUser() == null) {
            log.error(String.format("[CharId: %d] tried to open familiar shop while being offline.", chr.getId()));
            return;
        }
        var roro = 9133404;

        NpcShopDlg nsd = NpcData.getShopById(roro);
        chr.getScriptManager().stop(ScriptType.Npc); // reset contents before opening shop?
        if (chr.getShop() == null) {
            chr.setShop(nsd);
            chr.write(ShopDlg.openShop(chr, 0, nsd));
        }
    }


    @Handler(op = InHeader.FAMILIAR_MOVE)
    public static void handleFamiliarMove(Char chr, InPacket inPacket) {
        byte idx = inPacket.decodeByte(); // ?
        var familiarTemplateId = inPacket.decodeInt(); // familiar id
        var fcm = chr.getFamiliarCodexManager();
        if (fcm == null || fcm.getCurrentActiveFamiliars() == null || idx >= fcm.getCurrentActiveFamiliars().size()) {
            return;
        }
        Familiar f = chr.getFamiliarCodexManager().getFamiliarByIdx(idx);
        if (f != null && Util.arrayContains(chr.getFamiliarCodexManager().getActiveFamiliars(), (int) f.getId()) && chr.getFamiliarCodexManager().isFamiliarsSummoned()) {
            MovementInfo movementInfo = new MovementInfo(inPacket);
            movementInfo.applyTo(f);
            chr.getField().broadcastPacket(CFamiliar.familiarMove(chr.getId(), f.getIdx(), movementInfo), chr);
        }
    }


    @Handler(op = InHeader.FAMILIAR_SKILL)
    public static void handleFamiliarSkill(Char chr, InPacket inPacket) {
        inPacket.decodeByte();
        int familiarID = inPacket.decodeInt();
        inPacket.decodeByte(); // unk
        inPacket.decodeInt(); // tick

        int familiarBuffItemId = inPacket.decodeInt();

        Familiar f = chr.getFamiliarCodexManager().getFamiliarByTemplateId(familiarID);
        if (f == null) {
            return;
        }

        Item item = ItemData.getItemDeepCopy(familiarBuffItemId);
        if (item == null) {
            return;
        }

        ItemInfo ii = ItemData.getItemInfoByID(familiarBuffItemId);
        if (ii == null) {
            return;
        }

        if (!f.checkFamiliarCon(ii)) {
            return;
        }

        var targetType = ii.getSpecStats().getOrDefault(SpecStat.familiarPassiveSkillTarget, 0);
        switch (targetType) {
            case 0: // Self
                chr.useStatChangeItem(item, false);
                break;

            case 1: // Party Members
                var p = chr.getParty();
                if (p != null) {
                    for (Char pChr : p.getPartyMembersInSameField(chr)) { // Excl chr
                        pChr.useStatChangeItem(item, false);
                    }
                }
                chr.useStatChangeItem(item, false);
                break;

            case 2: // Nearby Players
                Position position = f.getPosition();
                Rect rect = position.getRectAround(GameConstants.FAMILIAR_AFFECT_NEARBY_ALLIES_RECT);
                for (Char fChr : chr.getField().getCharsInRect(rect)) {
                    fChr.useStatChangeItem(item, false);
                }
                break;
        }
    }
}
