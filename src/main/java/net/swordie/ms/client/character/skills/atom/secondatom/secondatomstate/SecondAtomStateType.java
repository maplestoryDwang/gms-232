package net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate;

/**
 * Created on 16/06/2021.
 *
 * @author Asura
 */
public enum SecondAtomStateType {
    ChaseUser(1),
    ;

    private int val;

    public int getVal() {
        return val;
    }

    SecondAtomStateType(int val) {
        this.val = val;
    }}
