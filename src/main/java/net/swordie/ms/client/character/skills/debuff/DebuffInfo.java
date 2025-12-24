package net.swordie.ms.client.character.skills.debuff;

/**
 * Created on 04/06/2021.
 *
 * @author Asura
 */
public class DebuffInfo {
    public boolean ignoreBoss; // true -> Don't apply Debuff on Mob
    public int proc = 100; // Proc rate

    public DebuffInfo() {
    }

    public DebuffInfo(boolean ignoreBoss, int proc) {
        this.ignoreBoss = ignoreBoss;
        this.proc = proc;
    }

    public DebuffInfo(boolean ignoreBoss) {
        this.ignoreBoss = ignoreBoss;
    }

    public DebuffInfo(int proc) {
        this.proc = proc;
    }
}
