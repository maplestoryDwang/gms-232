package net.swordie.ms.world;

public enum WorldType {
    PcBang,
    Normal,
    Reboot,
    Burning,
    Lab,
    ; // Probably

    public boolean isDropRestricted() {
        return this == Reboot || this == Lab;
    }
}
