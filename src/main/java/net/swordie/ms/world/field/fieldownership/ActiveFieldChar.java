package net.swordie.ms.world.field.fieldownership;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.util.Util;

/**
 * Created on 15/02/2022.
 *
 * @author Asura
 */
public class ActiveFieldChar {
    private final Char chr;
    private final long firstActionTime;
    private long lastActionTime;

    public ActiveFieldChar(Char chr, long lastActionTime) {
        this.chr = chr;
        this.firstActionTime = lastActionTime;
        this.lastActionTime = lastActionTime;
    }

    public Char getChr() {
        return chr;
    }

    public long getFirstActionTime() {
        return firstActionTime;
    }

    public long getLastActionTime() {
        return lastActionTime;
    }

    public void updateLastActionTime() {
        lastActionTime = Util.getCurrentTimeLong();
    }


    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof ActiveFieldChar)) {
            return false;
        }
        ActiveFieldChar other = (ActiveFieldChar) obj;
        return other.getChr() == getChr();
    }

    @Override
    public String toString() {
        return "ActiveFieldChar{" +
                "chr=" + chr +
                ", since=" + (((Util.getCurrentTimeLong() - lastActionTime) / 1000) / 60) +
                '}';
    }
}
