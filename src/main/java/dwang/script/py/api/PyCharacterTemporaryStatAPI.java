package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.TSIndex;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.RideVehicle;

/**
 * @author  dwang
 * @date 2026/2/27
 * @description
 */
public interface PyCharacterTemporaryStatAPI extends DwangScriptBaseApi {

    
    default void giveCTS(CharacterTemporaryStat cts, int nOption, int rOption, int time) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        Option o = new Option();
        o.nOption = nOption;
        o.rOption = rOption;
        o.tOption = time;
        tsm.putCharacterStatValue(cts, o);
        tsm.sendSetStatPacket();
    }

    
    default void removeCTS(CharacterTemporaryStat cts) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        tsm.removeStat(cts);
    }

    
    default void removeBuffBySkill(int skillId) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        tsm.removeStatsBySkill(skillId);
    }

    
    default boolean hasCTS(CharacterTemporaryStat cts) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        return tsm.hasStat(cts);
    }

    
    default int getnOptionByCTS(CharacterTemporaryStat cts) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        return hasCTS(cts) ? tsm.getOption(cts).nOption : 0;
    }

    
    default void rideVehicle(int mountID) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicle);

        tsb.setNOption(mountID);
        tsb.setROption(0);
        tsm.putCharacterStatValue(RideVehicle, tsb.getOption());
        tsm.sendSetStatPacket();
    }

    default void consumeLiver() {
        if (JobConstants.isShade( getInitData(). getChr().getJob())) {
            ((Shade)  getInitData(). getChr().getJobHandler()).extendSpiritBondMax();
        }
    }
}
