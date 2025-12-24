package net.swordie.ms.client.character.skills.temp;

import net.swordie.ms.enums.BaseStat;

import java.util.Arrays;

/**
 * Created on 23-1-2020.
 *
 * @author Asura
 */
public enum DiceStat {
    MHPR,
    MMPR,
    CR,
    CR_MIN,
    CR_MAX,
    EVAR,
    AR,
    ER,
    PDDR,
    MDDR,
    PDR,
    MDR,
    PIDR,
    PDAMR,
    MDAMR,
    PADR,
    MADR,
    EXP,
    IED,
    ASRR,
    TERR,
    MESO,
    UNK,
    ;

    public static BaseStat getBaseStatByDiceStat(DiceStat diceStat) {
        switch (diceStat) {
            case MHPR:
                return BaseStat.mhpR;
            case MMPR:
                return BaseStat.mmpR;
            case CR:
                return BaseStat.cr;
            case CR_MIN:
                return BaseStat.crDmg;
            case CR_MAX:
                return BaseStat.crDmg;
            case EVAR:
                return BaseStat.evaR;
            case PDDR:
                return BaseStat.pddR;
            case MDDR:
                return BaseStat.mddR;
            case PIDR:
                return BaseStat.damR;
            case PADR:
                return BaseStat.padR;
            case MADR:
                return BaseStat.madR;
            case EXP:
                return BaseStat.expR;
            case IED:
                return BaseStat.ied;
            case ASRR:
                return BaseStat.asr;
            case TERR:
                return BaseStat.ter;
            case MESO:
                return BaseStat.mesoR;
        }
        return null;
    }

    public static DiceStat getByOrdinal(int val) {
        return Arrays.stream(values()).filter(ds -> ds.ordinal() == val).findFirst().orElse(null);
    }
}
