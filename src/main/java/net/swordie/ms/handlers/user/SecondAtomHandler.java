package net.swordie.ms.handlers.user;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.SecondAtomPool;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 12/06/2020.
 *
 * @author Asura
 */
public class SecondAtomHandler {

    @Handler(op = InHeader.USER_SECOND_ATOM_COMMAND_REQUEST)
    public static void handleUserSecondAtomCommandRequest(Char chr, InPacket inPacket) {
        if (JobConstants.isLara(chr.getJob())) {

            inPacket.decodeInt();
            var secondAtomObjId = inPacket.decodeInt();
            var sa = chr.getSecondAtomById(secondAtomObjId);
            if (sa != null) {
                ((Lara) chr.getJobHandler()).secondAtomCommandRequest(sa);
            }

        } else {
            byte[] arr = inPacket.decodeArr(inPacket.getUnreadAmount()); // Can't be arsed rn

            //int size = inPacket.decodeInt();
            //
            //for (int i = 0; i < size; i++) {
            //    inPacket.decodeInt(); // SecondAtomObjId
            //    // other shit
            //}
            // TODO

            chr.getField().broadcastPacket(SecondAtomPool.secondAtomCommandResult(chr, arr), chr);
        }
    }

    @Handler(op = InHeader.USER_SECOND_ATOM_REMOVE_REQUEST)
    public static void handleUserSecondAtomRemoveRequest(Char chr, InPacket inPacket) {
        int objId = inPacket.decodeInt();

        if (chr.getJobHandler().handleSecondAtomRemoveRequest(objId)) { // Only used for additional things when a second atom is removed.
            chr.removeSecondAtom(Collections.singletonList(objId)); // Removal of SecondAtom
        }
    }

    @Handler(op = InHeader.USER_SECOND_ATOM_COLLISION_REQUEST)
    public static void handleUserSecondAtomCollisionRequest(Char chr, InPacket inPacket) {
        int chrId = inPacket.decodeInt();

        int size = inPacket.decodeInt();

        Map<Integer, Integer> attackMap = new HashMap<>();
        for (int i = 0; i < size; i++) {
            var secondAtomObjId = inPacket.decodeInt();
            var mobObjId = inPacket.decodeInt();
            var loop = inPacket.decodeInt();
            for (int ii = 0; ii < loop; ii++) {
                inPacket.decodeInt();
                inPacket.decodeInt();
            }
            attackMap.put(secondAtomObjId, mobObjId);
        }

        chr.getJobHandler().handleSecondAtomCollisionRequest(attackMap);
        chr.getField().broadcastPacket(SecondAtomPool.secondAtomCollisionResult(chr, attackMap));
    }

}
