package net.swordie.ms.enums;

import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.OzConstants;
import net.swordie.ms.util.Util;

import java.util.Arrays;
import java.util.Set;

public enum BossCooldown {
    // # hours

    // Easy
    ZakumEasy(10, BossConstants.EASY_ZAKUM_BODY),
    HorntailEasy(10, BossConstants.HORNTAIL_EASY),
    ScarlionTarga(10),
    MagnusEasy(1, BossConstants.EASY_MAGNUS_TEMPLATE), // for 5th job quest
    CygnusEasy(6, BossConstants.CYGNUS_EASY),
    VonLeonEasy(6, BossConstants.VON_LEON_EASY),
    ArkariumEasy(10, BossConstants.ARKARIUM_EASY),
    PapulatusEasy(10, BossConstants.PAPULATUS_EASY_P2),

    // Normal
    Hilla(14, 8870000),
    Horntail(14, BossConstants.HORNTAIL_NORMAL),
    Zakum(14, 8800002),
    VonLeon(14, BossConstants.VON_LEON_NORMAL),
    PinkBean(16, BossConstants.PINK_BEAN + 1),
    Queen(16, BossConstants.CRIMSON_QUEEN_NORMAL_BOX),
    Pierre(16, BossConstants.PIERRE_NORMAL_BOX),
    VonBon(16, BossConstants.VON_BON_NORMAL),
    Vellum(16, BossConstants.VELLUM_NORMAL),
    Ranmaru(16, BossConstants.RANMARU_NORMAL_BODY),
    Arkarium(16, 8860000),
    Magnus(16, 8880002),
    Cygnus(16, 8850011),
    Gollux(22, BossConstants.GOLLUX_REWARD_EASY, BossConstants.GOLLUX_REWARD_NORMAL, BossConstants.GOLLUX_REWARD_HARD, BossConstants.GOLLUX_REWARD_HELL),
    Papulatus(22, 8500012),
    Lotus(22, 8950002),
    Damien(22, 8880101),
    Lucid(22, 8880167, 8880177),
    Will(22, BossConstants.WILL_P3),
    VerusHilla(22, BossConstants.VERUS_HILLA),
    Gloom(22, 8644650),

    // Hard (Chaos)
    ZakumHard(22, 8800102),
    HillaHard(22, 8870100),
    HorntailHard(22, 8810118),
    VonLeonHard(22, BossConstants.VON_LEON_HARD),
    PinkBeanHard(22, BossConstants.CHAOS_PINK_BEAN_P2),
    QueenHard(22, BossConstants.CRIMSON_QUEEN_CHAOS_BOX),
    PierreHard(22, BossConstants.PIERRE_CHAOS_BOX),
    VonBonHard(22, BossConstants.VON_BON_CHAOS),
    VellumHard(22, BossConstants.VELLUM_CHAOS),
    RanmaruHard(22, BossConstants.RANMARU_HARD_BODY_5),
    MagnusHard(22, 8880000),
    PapulatusHard(22, 8500022),
    LotusHard(68, 8950102),
    Dorothy(46, OzConstants.DOROTHY),
    DamienHard(68, 8880111),
    LucidHard(68), // add lucid id here once we have it
    WillHard(68, BossConstants.HARD_WILL_P3),
    VerusHillaHard(68),
    GloomHard(68),
    BlackMage(92),
    ;

    private final int cooldownMinutes;
    private final Set<Integer> templateIds;

    BossCooldown(int cooldownHours, int... templateIds) {
        this.cooldownMinutes = cooldownHours * 60;
        this.templateIds = Util.makeSet(templateIds);
    }

    public int getCooldownMinutes() {
        return cooldownMinutes;
    }

    public static BossCooldown byTemplateId(int templateId) {
        return Arrays.stream(values()).filter(bc -> bc.templateIds.contains(templateId)).findAny().orElse(null);
    }

}
