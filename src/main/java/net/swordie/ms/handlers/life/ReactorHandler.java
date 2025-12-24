package net.swordie.ms.handlers.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.ReactorPool;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.enums.HarvestResultType;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ReactorData;
import net.swordie.ms.loaders.containerclasses.ReactorInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class ReactorHandler {

    private static final Logger log = LogManager.getLogger();
    private static final int HARVEST_REACTOR_BASE = 100000;
    private static final int HARVEST_REACTOR_END = 299999;


    @Handler(op = InHeader.REACTOR_HIT)
    public static void handleReactorHit(Char chr, InPacket inPacket) {
        var objId = inPacket.decodeInt();
        var mask = inPacket.decodeInt(); // 3 = chrLeft | 2 = chrRight
        var delay = inPacket.decodeShort();
        var ignored = inPacket.decodeInt(); // always 0

        Life life = chr.getField().getLifeByObjectID(objId);
        if (!(life instanceof Reactor)) {
            return;
        }
        Reactor reactor = (Reactor) life;
        int templateID = reactor.getTemplateId();
        ReactorInfo ri = ReactorData.getReactorInfoByID(templateID);
        String action = ri.getAction();
        if (action.isBlank()) {
            action = templateID + "action";
        }
        chr.getScriptManager().startScript(templateID, objId, action, ScriptType.Reactor);
    }

    @Handler(op = InHeader.REACTOR_CLICK)
    public static void handleReactorClick(Char chr, InPacket inPacket) {
        int objID = inPacket.decodeInt();
        Life life = chr.getField().getLifeByObjectID(objID);
        if (!(life instanceof Reactor)) {
            log.debug("Could not find reactor with objID " + objID);
            var reactor = new Reactor(0);
            reactor.setObjectId(objID);
            chr.write(ReactorPool.reactorRemove(reactor));
            return;
        }
        Reactor reactor = (Reactor) life;
        int templateID = reactor.getTemplateId();
        ReactorInfo ri = ReactorData.getReactorInfoByID(templateID);
        String action = ri.getAction();
        if (action.isBlank()) {
            action = templateID + "action";
        }
        chr.getScriptManager().startScript(templateID, objID, action, ScriptType.Reactor);
    }

    @Handler(op = InHeader.REACTOR_RECT_IN_MOB)
    public static void handleReactorRectInMob(Char chr, InPacket inPacket) {
        var objId = inPacket.decodeInt();
        var mobObjId = inPacket.decodeInt();

        var mobLife = chr.getField().getLifeByObjectID(mobObjId);
        var reactorLife = chr.getField().getLifeByObjectID(objId);
        if (mobLife instanceof Mob && reactorLife instanceof Reactor) {
            var mob = (Mob) mobLife;
            var reactor = (Reactor) reactorLife;
            Events.onReactorRectInMob(chr, mob, reactor);

            int templateID = reactor.getTemplateId();
            ReactorInfo ri = ReactorData.getReactorInfoByID(templateID);
            String action = ri.getAction();
            if (action.isBlank()) {
                action = templateID + "action";
            }
            chr.getScriptManager().startScript(templateID, objId, action, ScriptType.Reactor);
        }
    }

    @Handler(op = InHeader.REACTOR_KEY)
    public static void handleReactorKey(Char chr, InPacket inPacket) {
        int objID = inPacket.decodeInt();
        int lifeID = inPacket.decodeInt();
        var ignored = inPacket.decodeShort();
        Mob mob = (Mob) chr.getField().getLifeByObjectID(lifeID);
        mob.die(false);
        Field field = chr.getField();
        for (Char character : field.getChars()) {
            character.getTemporaryStatManager().increaseGolluxStack();
        }
    }

    @Handler(ops = {InHeader.REACTOR_GATHER, InHeader.GATHER_REQUEST})
    public static void handleReactorGather(Char chr, InPacket inPacket) {
        int objId = inPacket.decodeInt();
        var field = chr.getField();

        var life = field.getLifeByObjectID(objId);
        if (!(life instanceof Reactor)) {
            chr.chatMessage("Could not find that reactor.");
            chr.dispose();
            return;
        }

        var reactor = (Reactor) life;
        var templateId = reactor.getTemplateId();

        if (templateId < HARVEST_REACTOR_BASE || templateId > HARVEST_REACTOR_END) {
            chr.chatMessage("Invalid reactor to harvest from.");
            chr.dispose();
            return;
        }

        chr.write(UserLocal.gatherRequestResult(objId, HarvestResultType.Success));
    }
}
