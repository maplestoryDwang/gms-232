package net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate;

import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 16/06/2021.
 *
 * @author Asura
 */
public class SecondAtomChaseUser implements ISecondAtomState {

    @Override
    public void encode(SecondAtom sa, OutPacket outPacket) {
        outPacket.encodeInt(0); // Find use
        outPacket.encodeInt(0); // Find use
    }

    @Override
    public void decode(SecondAtom sa, InPacket inPacket) {
        inPacket.decodeInt(); // Find use
        inPacket.decodeInt(); // Find use
    }
}
