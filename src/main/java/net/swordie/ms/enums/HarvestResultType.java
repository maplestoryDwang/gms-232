package net.swordie.ms.enums;

public enum HarvestResultType {
    Unk0(0),
    Unk1(1),
    HerbalismLevelTooLow(2),
    HerbalismNoSkill(3),
    MiningNoSkill(4),
    NotEnoughFatigue(5),
    TooFarAway(6),
    HarvestingCancelled(7),
    AlreadyInUse(8),
    CannotCollectYet(9),
    UnknownError(10),
    CannotHarvestWhileOnChair(11),
    LevelTooLow(12),

    Success(15),
    NoHerbalismTools(16),
    NoMiningTools(17);

    private int value;

    HarvestResultType(int val) {
        value = val;
    }

    public int getValue() {
        return value;
    }
}
