package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * Created on 02/06/2020.
 *
 * @author Asura
 */
public class SecondAtomPool {

    public static OutPacket createSecondAtom(Char chr, SecondAtom secondAtom) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_SECOND_ATOM);

        outPacket.encodeInt(chr.getId());
        outPacket.encode(secondAtom);

        return outPacket;
    }

    public static OutPacket secondAtomCommandResult(Char chr, byte[] arr) {
        OutPacket outPacket = new OutPacket(OutHeader.SECOND_ATOM_COMMAND_RESULT);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeArr(arr);

/*        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // unk

            int size2 = 0;
            outPacket.encodeInt(size2); // unk
            for (int j = 0; j < size2; j++) {

                outPacket.encodeInt(0); // unk
                // vftable call
            }
        }*/

        return outPacket;
    }

    public static OutPacket createMultipleSecondAtoms(Char chr, List<SecondAtom> secondAtomList) {
        return createMultipleSecondAtoms(chr, secondAtomList, false);
    }

    public static OutPacket createMultipleSecondAtoms(Char chr, List<SecondAtom> secondAtomList, boolean startInfinity) {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_MULTIPLE_SECOND_ATOMS);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(secondAtomList.size());
        for (SecondAtom atom : secondAtomList) {
            outPacket.encode(atom);
        }
        outPacket.encodeInt(startInfinity ? 1 : 0);

        return outPacket;
    }

    public static OutPacket secondAtomAttack(Char chr, int secondAtomObjId, int attackingSwordCount) {
        OutPacket outPacket = new OutPacket(OutHeader.SECOND_ATOM_ATTACK);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(secondAtomObjId);
        outPacket.encodeInt(attackingSwordCount); // number of swords / 2

        return outPacket;
    }

    public static OutPacket secondAtomCollisionResult(Char chr, Map<Integer, Integer> attackMap) { // <SecondAtomObjId, MobObjId>
        OutPacket outPacket = new OutPacket(OutHeader.SECOND_ATOM_COLLISION_RESULT);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(attackMap.size());
        for (Map.Entry<Integer, Integer> entry : attackMap.entrySet()) {
            outPacket.encodeInt(entry.getKey());
            outPacket.encodeInt(entry.getValue());
            var loop = 0;
            outPacket.encodeInt(loop);
            for (int i = 0; i < loop; i++) {
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
            }
        }

        return outPacket;
    }

    public static OutPacket removeSecondAtom(Char chr, int secondAtomObjId) {
        return removeSecondAtom(chr, Collections.singletonList(secondAtomObjId));
    }

    public static OutPacket removeSecondAtom(Char chr, SecondAtom secondAtom) {
        return removeSecondAtom(chr, Collections.singletonList(secondAtom.getObjectId()));
    }

    public static OutPacket removeSecondAtom(Char chr, List<Integer> secondAtomObjIdList) {
        OutPacket outPacket = new OutPacket(OutHeader.REMOVE_SECOND_ATOM);

        outPacket.encodeInt(chr.getId());

        outPacket.encodeInt(secondAtomObjIdList.size());
        for (int objId : secondAtomObjIdList) {
            outPacket.encodeInt(objId);
        }

        outPacket.encodeInt(0); // (getDataIndex() >= 1 && getDataIndex() <= 6) ? 1 : 0
        outPacket.encodeInt(0); // new 228

        return outPacket;
    }
}
