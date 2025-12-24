package net.swordie.ms.handlers.voyage;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.voyage.VoyageFieldInfo;
import net.swordie.ms.client.character.commerce.voyage.VoyageInfoType;
import net.swordie.ms.client.character.commerce.voyage.VoyageRequestType;
import net.swordie.ms.client.character.commerce.voyage.voyagefield.VoyageFieldType;
import net.swordie.ms.client.character.dailies.DailiesManager;
import net.swordie.ms.client.character.dailies.DailyType;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.VoyageFieldPool;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.UIType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashMap;
import java.util.Map;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public class VoyageHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.VOYAGE_COMPLETE_REQUEST)
    public static void handleVoyageCompleteRequest(Char chr, InPacket inPacket) {
        var val = inPacket.decodeByte();

        if (val == 3 && chr.getInstance() != null && FieldConstants.isVoyageField(chr.getFieldID())) {
            chr.getScriptManager().warpInstanceOut(865000001, 0);
        }
    }

    @Handler(op = InHeader.VOYAGE_REQUEST)
    public static void handleVoyageRequest(Char chr, InPacket inPacket) {
        var val = inPacket.decodeByte();
        var voyageReq = VoyageRequestType.getByVal(val);

        if (voyageReq == null) {
            log.error(String.format("Unhandled Voyage Request | %d", val));
            return;
        }

        switch (voyageReq) {
            case VesselUpgrade:
                var vessel = chr.getVessel();
                if (vessel != null) {
                    vessel.upgrade();
                    vessel.updateToChar(chr);
                }
                break;

            case EnterVoyage:
                var unk = inPacket.decodeByte();
                var route = inPacket.decodeByte();
                var cargoSize = inPacket.decodeInt();
                Map<Integer, Integer> cargo = new HashMap<>();
                for (int i = 0; i < cargoSize; i++) {
                    cargo.put(inPacket.decodeInt(), inPacket.decodeInt());
                }

                vessel = chr.getVessel();

                if (vessel == null) {
                    chr.chatMessage("You don't have a vessel.");
                    chr.dispose();
                    return;
                }

                if (chr.getParty() != null) {
                    chr.chatMessage("You cannot enter whilst in a party.");
                    chr.dispose();
                    return;
                }

                var vi = EtcData.getVoyageInfoById(route);
                if (vi == null) {
                    chr.dispose();
                    return;
                }

                var energyCost = vi.getEnergyCost();
                if (!vessel.hasEnoughEnergy(energyCost)) {
                    chr.chatMessage("You do not have enough energy.");
                    chr.dispose();
                    return;
                }

                if (chr.getInstance() != null) {
                    chr.chatMessage("You are in an instance already.");
                    chr.dispose();
                    return;
                }


                chr.getScriptManager().warpInstanceIn(865000100, 0);
                var instance = chr.getInstance();
                if (instance != null) {
                    chr.write(FieldPacket.closeUI(UIType.VESSEL)); // ensure the UI is closed when entering.
                    chr.write(FieldPacket.closeUI(UIType.SAILING)); // ensure the UI is closed when entering.

                    chr.getVessel().reduceEnergy(energyCost);
                    var voyageDuration = vi.getTimeSec();

                    instance.addProperty("voyage", (int) route);
                    instance.addProperty("duration", voyageDuration);
                    instance.addProperty("shortenedDuration", 0);
                    instance.addProperty("kills", 0);
                    instance.addProperty("lastHorde", -1);
                    instance.addProperty("startTime", Util.getCurrentTime());

                    var info = new VoyageFieldInfo(VoyageFieldType.VoyageStarted);
                    info.voyageId = route;
                    chr.getInstance().broadcast(VoyageFieldPool.voyageFieldInfo(info));

                    info = new VoyageFieldInfo(VoyageFieldType.VoyageDuration);
                    info.voyageId = route;
                    chr.getInstance().broadcast(VoyageFieldPool.voyageFieldInfo(info));

                    DailiesManager.update(DailyType.CommerceVoyage, chr); // Set LastUsed for Daily Reset
                }
                break;

            case UnlockVoyageRoute:
                var routeId = inPacket.decodeByte();
                chr.write(WvsContext.updateVoyageInfo(VoyageInfoType.UnlockVoyageRoute, routeId));

                var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.VOYAGES);
                q.setProperty(String.valueOf(routeId), 0);
                break;
        }
    }

}
