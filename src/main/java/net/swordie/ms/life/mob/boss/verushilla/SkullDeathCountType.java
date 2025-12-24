package net.swordie.ms.life.mob.boss.verushilla;

/**
 * Created on 21/08/2020.
 *
 * @author Asura
 */
public enum SkullDeathCountType {
    Red(0),
    Green(1),
    Gone(2),
    ;

    private int val;

    SkullDeathCountType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
