package net.swordie.ms.enums.customscripts;

import net.swordie.ms.client.character.commerce.voyage.VoyageConstants;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.util.Util;

import java.util.Arrays;
import java.util.Set;

public enum CustomMobDeathScript {

    Queen("die_queen", 8920000, 8920001, 8920002, 8920003, 8920100, 8920101, 8920102, 8920103),
    Vellum("die_vellum", 9400942),
    LotusP1("die_lotusP1", 8950000, 8950100, 8240103),
    LotusP2("die_lotusP2", 8950001, 8950101, 8240104),
    LotusP3("die_lotusP3", 8950002, 8950102, 8240105),
    Ravana("die_ravana", 8800200),
    Chrimera("die_chimera", 9300510),
    Curbrock_1("die_curbrock1", 9400930),
    Curbrock_2("die_curbrock2", 9400931),
    QuestCygnus("die_questCygnus", 9300742),
    SilentCrusade("die_silentCrusade", 9300477, 9300878, 9300879, 8090000, 9300510, 9300479, 9300480, 9300511, 9300512, 9300482, 9300475, 9300514, 9300880, 9300478, 9300513, 9300515, 9300516, 9300517, 9300518, 9300519),
    SilentCrusade2("die_silentCrusade2", 9300477 ,9300878 ,9300879 ,8090000 ,9300510 ,9300479 ,9300480 ,9300511 ,9300512 ,9300482 ,9300475 ,9300514 ,9300880 ,9300478 ,9300513 ,9300515 ,9300516 ,9300517 ,9300518 ,9300519),
    PastSelfDS1("die_pastSelfDS1", 9001039),
    PastSelfDS2("die_pastSelfDS2", 9001041),
    Mastema("die_mastema", 9001036),
    Mastema2("die_mastema2", 9001038),
    ChiefPriest("die_chiefPriest", 9601068),
    Hoodlum("die_hoodlum", 2400315),
    Arkarium("die_arkarium", 8644419),
    Specter("die_specter", 2400370), // Ark intro
    PinkBeanStatue("die_pinkbean_statue", BossConstants.ARIEL, BossConstants.REX, BossConstants.MUNIN, BossConstants.CHAOS_ARIEL, BossConstants.CHAOS_REX, BossConstants.CHAOS_MUNIN, BossConstants.SOLOMON, BossConstants.CHAOS_SOLOMON, BossConstants.HUGIN, BossConstants.CHAOS_HUGIN),PapulatusP0("die_papulatus_core", BossConstants.PAPULATUS_EASY_P0, BossConstants.PAPULATUS_NORMAL_P0, BossConstants.PAPULATUS_CHAOS_P0),
    PapulatusP2("die_papulatus_p2", BossConstants.PAPULATUS_EASY_P2, BossConstants.PAPULATUS_NORMAL_P2, BossConstants.PAPULATUS_CHAOS_P2),
    LucidP1("die_lucidP1", 8880140),
    LucidP2("die_lucidP2", 8880150),
    DemianP1("die_demianP1", 8880100, 8880110),
    DemianP2("die_demianP2", 8880101, 8880111),
    BlackMage("die_blackMage", 8880500, 8880501, 8880502, 8880503),
    GolluxField("die_giantBoss_field", 9390630, 9390631, 9390633, 9390634, 9390635, 9390638, 9390640),
    GolluxHead("die_giantBoss_head", 9390602, 9390600, 9390601),
    GolluxArm("die_giantBoss_arm", 9390610, 9390611),
    GolluxHip("die_giantBoss_hip", 9390612),
    WillP1("die_willP1", 8880300, 8880340),
    WillP2("die_willP2", 8880301, 8880341),
    Dojo("die_dojang", 9305600, 9305601, 9305602, 9305603, 9305604, 9305605, 9305606, 9305607, 9305608, 9305619, 9305610, 9305617, 9305612, 9305611, 9305628, 9305682, 9305683, 9305614, 9305620, 9305609, 9305623, 9305625, 9305624, 9305684, 9305658, 9300299, 9305616, 9305690,9305692,9305629,9305630,9305631,9305659,9305633,9305621,9305632,9305694,9305634,9305656,9305639,9305660,9305661,9305627,9305622,9305662,9305635,9305636,9305637,9305638,9305695,9305696,9305663,9305664,9305665,9305666,9305667,9305668,9305669,9305670,9305671,9305697,9305698,9305699,9305700,9305701,9305657,9305702,9305703,9305704,9305705,9305706,9305707,9305708,9601009,9601010,9601011,9601012,9601013,9601014,9305339),
    VoyageMobs("die_voyage_mobs", VoyageConstants.SIREN, VoyageConstants.CAPTAIN_BLOOD_PIRATE, VoyageConstants.OCEAN_REEF_RUNNER, VoyageConstants.CORAL_REEF_RUNNER, VoyageConstants.GROSSO_POLPO, VoyageConstants.LIVYATAN),
    YakuzaBodyGuard("die_yakuzabodyguard", 9400112),
    YakuzaProtector("die_yakuzaprotector", 9400113),
    Magnus("die_magnus", BossConstants.EASY_MAGNUS_TEMPLATE, BossConstants.NORMAL_MAGNUS_TEMPLATE, BossConstants.HARD_MAGNUS_TEMPLATE),
    TwistedDarknessDuplicate("die_twistedDarknessDuplicate", BossConstants.TWISTED_DARKNESS_DUPLICATE),
    ;

    private final Set<Integer> templateIds;
    private final String scriptName;

    CustomMobDeathScript(String scriptName, int... templateIds) {
        this.templateIds = Util.makeSet(templateIds);
        this.scriptName = scriptName;
    }

    public Set<Integer> getTemplateIds() {
        return templateIds;
    }

    public String getScriptName() {
        return scriptName;
    }

    public static String getScriptNameByTemplateId(int templateId) {
        var customMobDeathScript = Arrays.stream(values())
                .filter(cmds -> cmds.getTemplateIds().contains(templateId))
                .findFirst()
                .orElse(null);

        return customMobDeathScript == null ? null : customMobDeathScript.getScriptName();
    }
}
