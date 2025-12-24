package net.swordie.ms.enums;

/**
 * Created on 1/25/2018.
 */
public enum ExpIncreaseInfoFlags {
    SelectedMobBonusExp(0x1),
    PartyBonusPercentage(0x4),
    PartyBonusExp(0x10),
    WeddingBonusExp(0x20),
    ItemBonusExp(0x40),
    PremiumIPBonusExp(0x80),
    RainbowWeekEventBonusExp(0x100),
    BoomUpEventBonusExp(0x200),
    PlusExpBuffBonusExp(0x400),
    PsdBonusExpRate(0x800),
    IndieBonusExp(0x1000),
    RelaxBonusExp(0x2000),
    InstallItemBonusExp(0x4000),
    AswanWinnerBonusExp(0x8000),
    ExpByIncExpR(0x10000),
    ValuePackBonusExp(0x20000),
    ExpByIncPQExpR(0x40000),
    BaseAddExp(0x80000),
    BloodAllianceBonusExp(0x100000),
    FreezeHotEventBonusExp(0x200000),
    RestField(0x400000),
    UserHPRateBonusExp(0x800000),
    FieldValueBonusExp(0x1000000),
    MobKillBonusExp(0x2000000),
    LiveEventBonusExp(0x4000000),
    CantEncoding(0x8000000), // Can't encoding
    FieldBonusExp(0x10000000), // Field Bonus
    BigBangAttackBonusExp(0x20000000), // Big Bang Attack
    WorldGaugeBonusExp(0x40000000), // World Gauge
    TestEverything(0x80000000), // Bunch of stuff
    // End of int
    GuildKnowhowBonusExp(0x100000000L), // Guild know-how
    Empty(0x200000000L), // Nothing
    SetItemBonusExp(0x400000000L), // Set-item
    SetItemPartyBonusExp(0x800000000L), // Set-item party
    AbsoluteTasteBonusExp(0x1000000000L), // Absolute taste
    SnowflakeRingBonusExp(0x2000000000L), // Snowflake ring
    AccumulatedHuntBonusExp(0x8000000000L), // Accumulated hunt
    ;

    private long val;

    ExpIncreaseInfoFlags(long val) {
        this.val = val;
    }

    public long getVal() {
        return val;
    }
}
