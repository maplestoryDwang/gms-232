package net.swordie.ms.enums;

import net.swordie.ms.util.Util;

/**
 * @author Sjonnie
 * Created on 2/13/2019.
 */
public enum UiScript {
    DamageSkinHelp(12),

    UnionRaidStart(17),

    FamiliarHelp(35),

    Guild(50),
    ;

    private int val;

    UiScript(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }

    public static UiScript getByVal(int val) {
        return Util.findWithPred(values(), us -> us.getVal() == val);
    }
}
