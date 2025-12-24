package net.swordie.ms.client.character.skills.atom.secondatom.secondatomstate;

/**
 * Created on 16/06/2021.
 *
 * @author Asura
 */
public class SecondAtomStateModule {

    public static ISecondAtomState getStateByType(SecondAtomStateType type) {
        switch (type) {
            case ChaseUser:
                return new SecondAtomChaseUser();
        }

        return null;
    }

    public static SecondAtomStateType getTypeByState(ISecondAtomState state) {
        if (state == null) {
            return null;
        }

        if (state.getClass() == SecondAtomChaseUser.class) {
            return SecondAtomStateType.ChaseUser;
        }

        return null;
    }

}
