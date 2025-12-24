package net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate;

import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.OutPacket;

/**
 * Created on 16/06/2021.
 *
 * @author Asura
 */
public interface ISecondAtomState {

    void encode(SecondAtom sa, OutPacket outPacket);

    void decode(SecondAtom sa, InPacket inPacket);

}
