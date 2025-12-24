package net.swordie.ms.life.mob.skill;

public enum FieldSkillID {

    OrangeTornado(100000),

    BlackMageChainSpearPrepare(100004),
    BlackMageLaser(100005),
    BlackMagePowerOfDestruction(100006),
    LocalLaserAttackByIntervalLaser(100007),    // BlackMageBlackChain
    SummonedSequenceOnAndAttack(100008),        // BlackMageShriekingWall
    BlackMageInvisMob(100009),
    BlackMageMorningStar(100010),
    CenterDirRotationAttack(100011),            // BlackMageBall
    BlacMageTraceBall(1000012),                 // BlackMagePiercingGaze
    DynamicObjectOnAndAttack(1000013),          // BlackMageCreation
    Monochrome_AreaWarning(1000014),            // BlackMageGodlikeLaser
    CreationAreaWarning(1000015),               // BlackMageCurseCreationExplosion
    Monochrome_AreaWarning2(1000016),           // BlackMageExplosion
    BlackMageCrimsonLightning(1000017),

    AkeshiBite(1000018),
    LocalLaserAttackByPos(1000019),             // AkeshiLaser

    GloomTentacle(100020),
    GloomSummon(100021),
    GloomTerrorFlame(100022),

    SerenCrossLasers(100023),
    SerenMegaAttack(100024),

    ;

    private int id;

    FieldSkillID(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }
}
