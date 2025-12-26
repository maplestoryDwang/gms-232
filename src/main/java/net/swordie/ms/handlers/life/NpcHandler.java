package net.swordie.ms.handlers.life;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.trunk.Trunk;
import net.swordie.ms.client.trunk.TrunkDlg;
import net.swordie.ms.client.trunk.TrunkType;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.life.modules.NpcHandlerModule;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.movement.Movement;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.NpcData;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.containerclasses.QuestInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.gach.GachaponConstants;
import net.swordie.ms.world.gach.result.GachaponDlgType;
import net.swordie.ms.world.gach.result.GachaponResult;
import net.swordie.ms.world.shop.NpcShopDlg;
import net.swordie.ms.world.shop.ShopRequestType;
import net.swordie.orm.dao.ItemDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class NpcHandler {

    private static final Logger log = LogManager.getLogger();
    private static final ItemDao itemDao = (ItemDao) SworDaoFactory.getByClass(Item.class);


    @Handler(op = InHeader.USER_SELECT_NPC)
    public static void handleUserSelectNpc(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if(chr == null || !chr.isOnline() || chr.getUser() == null) {
            log.error(String.format("[CharId: %d] tried to open npc while being offline.", chr.getId()));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }
        int npcID = inPacket.decodeInt();
        Position playerPos = inPacket.decodePosition();
        Life life = chr.getField().getLifeByObjectID(npcID);
        if (!(life instanceof Npc)) {
            chr.chatMessage("Could not find that npc.");
            return;
        }
        Npc npc = (Npc) life;
        int templateID = npc.getTemplateId();
        if ((npc.getTrunkGet() > 0 || npc.getTrunkPut() > 0) && !chr.isInTrunk()) {
            chr.setInTrunk(true);
            chr.write(FieldPacket.trunkDlg(TrunkDlg.open(templateID, chr.getAccount().getTrunk())));
            return;
        }
        String script = npc.getScripts().get(0);
        if (npc.isShop()) {
            NpcShopDlg nsd = NpcData.getShopById(templateID);
            if (nsd != null && nsd.getItems().size() > 0) {
                chr.getScriptManager().stop(ScriptType.Npc); // reset contents before opening shop?
                if (chr.getShop() == null) {
                    chr.chatMessage(ChatType.Mob, "Shop: " + templateID);
                    chr.setShop(nsd);
                    if(templateID == 9001212) {
                        chr.write(ShopDlg.shopCollectorInit());
                    }

                    chr.write(ShopDlg.openShop(chr, 0, nsd));
                }
                return;
            } else {
                script = GameConstants.DEFAULT_SHOP_SCRIPT;
            }
        }
        if (script == null) {
            script = String.valueOf(npc.getTemplateId());
        }
        if (!chr.isTalkingToNpc()) {
            chr.setTalkingToNpc(true);
            chr.getScriptManager().startScript(npc.getTemplateId(), npcID, script, ScriptType.Npc);
        } else {
            chr.chatMessage("You already talking to an npc. Use @check if this is not intended.");
        }
    }

    @Handler(op = InHeader.USER_COMPLETE_NPC_SPEECH)
    public static void handleUserCompleteNpcSpeech(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        QuestManager qm = chr.getQuestManager();
        int questID = inPacket.decodeInt();
        int npcTemplateID = inPacket.decodeInt();
        int speech = inPacket.decodeByte();

        int objectID = inPacket.decodeInt();
        Life life = chr.getField().getLifeByObjectID(objectID);
        if (!(life instanceof Npc)) {
            chr.chatMessage("Could not find that npc.");
            return;
        }
        if (qm.hasQuestInProgress(questID)) {
            QuestInfo qi = QuestData.getQuestInfoById(questID);
            String scriptName = qi.getSpeech().get(speech - 1);
            if (scriptName == null || scriptName.equalsIgnoreCase("")) {
                chr.chatMessage("Could not find that speech - quest id " + questID + ", speech " + speech);
            }
            if (scriptName.contains("NpcSpeech=")) {
                if (scriptName.endsWith("/")) {
                    scriptName = scriptName + Integer.toString(npcTemplateID) + Integer.toString(speech) + "/";
                }
                Quest quest = chr.getQuestManager().getQuestById(questID);
                if (quest != null) {
                    quest.setQrValue(scriptName);
                    chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
                }
            } else {
                chr.getScriptManager().startScript(questID, scriptName, ScriptType.Quest);
            }
        }
    }

    @Handler(op = InHeader.USER_SHOP_REQUEST)
    public static void handleUserShopRequest(Char chr, InPacket inPacket) {
        byte type = inPacket.decodeByte();
        ShopRequestType shr = ShopRequestType.getByVal(type);
        if (shr == null) {
            log.error(String.format("Unhandled shop request type %d", type));
        }
        NpcShopDlg nsd = chr.getShop();
        if (nsd == null) {
            chr.chatMessage("You are currently not in a shop.");
            return;
        }
        switch (shr) {
            case Buy:
                ShopModule.handleShopBuy(chr, inPacket, nsd);
                break;
            case Recharge:
                ShopModule.handleShopRecharge(chr, inPacket);
                break;
            case Sell:
                ShopModule.handleShopSell(chr, inPacket, nsd);
                break;
            case Close:
                chr.setShop(null);
                break;
            default:
                log.error(String.format("Unhandled shop request type %s", shr));
        }
        chr.dispose();
    }

    @Handler(op = InHeader.USER_TRUNK_REQUEST)
    public static void handleUserTrunkRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Trunk trunk = chr.getAccount().getTrunk();
        byte req = inPacket.decodeByte();
        TrunkType trunkType = TrunkType.getByVal(req);
        if (trunkType == null) {
            log.error(String.format("Unknown trunk request type %d.", req));
            return;
        }
        switch (trunkType) {
            case TrunkReq_Money:
                NpcHandlerModule.handleTrunkGetMoney(inPacket, chr, trunk);
                break;
            case TrunkReq_GetItem:
                NpcHandlerModule.handleTrunkGetItem(inPacket, chr, trunk);
                break;
            case TrunkReq_PutItem:
                NpcHandlerModule.handleTrunkPutItem(inPacket, chr, trunk);
                break;
            case TrunkReq_SortItem:
                trunk.sortItems();
                chr.write(FieldPacket.trunkDlg(TrunkDlg.update(TrunkType.TrunkRes_SortItem, trunk)));
                break;
            case TrunkReq_CloseDialog:
                chr.setInTrunk(false);
                chr.dispose();
                break;
            default:
                log.error(String.format("Unhandled trunk request type %s.", trunkType));
        }
    }

    @Handler(op = InHeader.GACHAPON_REQUEST)
    public static void handleGachaponRequest(Char chr, InPacket inPacket) {
        // TODO: Handle error messages with popup dialog like GMS.
        // TODO: Add rewards to gachapon.
        final int type = inPacket.decodeByte();
        final GachaponResult result = GachaponResult.getByVal(type);

        if (result == null) {
            log.error("[Gachapon] Found unknown gachapon result " + type);
            chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
            return;
        }
        if (chr == null) {
            chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
            return;
        }
        switch (result) {
            case SUCCESS:
                final int ticketID = inPacket.decodeInt();
                GachaponDlgType dialog = GachaponConstants.getDlgByTicket(ticketID);
                if (dialog == null || !chr.hasItem(ticketID)) {
                    chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
                    return;
                }
                final int reward = GachaponConstants.getRandomItem(dialog);
                if (reward == -1) {
                    chr.chatMessage(ChatType.Mob, "Cannot find reward ID");
                    chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
                    return;
                }
                if (!chr.canHoldItem(reward, 1)) {
                    chr.chatMessage(ChatType.Mob, "Cannot hold reward ID " + reward);
                    chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
                    return;
                }
                Equip equip = ItemData.getEquipDeepCopy(reward, true);
                if (equip == null) {
                    Item item = ItemData.getItemDeepCopy(reward, true);
                    if (item == null) {
                        chr.write(GachaponDlg.gachResult(GachaponResult.ERROR));
                        chr.chatMessage(ChatType.Mob, "Item is null" + reward);
                        return;
                    }
                    item.setQuantity(1);
                    chr.addItemToInventory(item);
                    chr.write(GachaponDlg.gachResult(GachaponResult.SUCCESS, item, (short) 1));
                    chr.getGachaponManager().addItem(dialog, item, (short) 1);
                } else {
                    chr.addItemToInventory(equip);
                    chr.write(GachaponDlg.gachResult(GachaponResult.SUCCESS, equip, (short) 1));
                    chr.getGachaponManager().addItem(dialog, equip, (short) 1);
                }
                chr.consumeItem(chr.getCashInventory().getItemByItemID(ticketID));
                chr.getField().broadcastPacket(UserPacket.setGachaponEffect(chr));
                break;
            case EXIT:
                chr.write(GachaponDlg.gachResult(GachaponResult.EXIT));
                break;
        }
    }

    @Handler(op = InHeader.EVOLVING_REQUEST)
    public static void handleEvolvingRequest(Client c, InPacket inpacket) {
        byte unk = inpacket.decodeByte();
        int unk2 = inpacket.decodeInt();
        int timestamp = inpacket.decodeInt();
        byte unk3 = inpacket.decodeByte();
        Char chr = c.getChr();
            chr.warp(957019000);
    }

    @Handler(op = InHeader.NPC_MOVE)
    public static void handleNpcMove(Char chr, InPacket inPacket) {
        int objectID = inPacket.decodeInt();
        byte oneTimeAction = inPacket.decodeByte();
        byte chatIdx = inPacket.decodeByte();
        int duration = inPacket.decodeInt();
        Life life = chr.getField().getLifeByObjectID(objectID);
        if (life instanceof Npc && ((Npc) life).isMove()) {
            Npc npc = (Npc) chr.getField().getLifeByObjectID(objectID);
            boolean move = npc.isMove();
            MovementInfo movementInfo = new MovementInfo(npc.getPosition(), npc.getVPosition());
            byte keyPadState = 0;
            if (move) {
                movementInfo.decode(inPacket);
                for (Movement m : movementInfo.getMovements()) {
                    Position pos = m.getPosition();
                    Position vPos = m.getVPosition();
                    if (pos != null) {
                        npc.setPosition(pos);
                    }
                    if (vPos != null) {
                        npc.setvPosition(vPos);
                    }
                    npc.setMoveAction(m.getMoveAction());
                    npc.setFh(m.getFh());
                }
                if (inPacket.getUnreadAmount() > 0) {
                    keyPadState = inPacket.decodeByte(); // not always encoded?
                }
            }
            chr.getField().broadcastPacket(NpcPool.npcMove(objectID, oneTimeAction, chatIdx, duration, move,
                    movementInfo, keyPadState));
        }
    }
}
