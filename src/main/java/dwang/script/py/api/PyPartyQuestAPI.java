package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.MonsterPark;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.OzConstants;
import net.swordie.ms.constants.QuestConstants;

import java.text.SimpleDateFormat;
import java.util.Locale;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyPartyQuestAPI.java
 * @Description TODO
 * @createTime 2026-02-27 16:59
 */

public interface PyPartyQuestAPI extends DwangScriptBaseApi {

    default String getDay() {
        return new SimpleDateFormat("EEEE", Locale.ENGLISH).format(System.currentTimeMillis());
    }

    default int getMPExpByMobId(int templateId) {
        return MonsterPark.getExpByMobId(templateId);
    }

    default int getMPReward() {
        return MonsterPark.getRewardByDay();
    }

    default long getPQExp() {
        return getPQExp(getChr());
    }

    default long getPQExp(Char chr) {
        return GameConstants.PARTY_QUEST_EXP_FORMULA(chr);
    }

    // true if everyone is good. false is someone is above max floors per day
    default boolean checkOzFloorRequirement(Char chr, Party party) {
        if (party == null) {
            var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
            return q.getIntProperty("tf") < OzConstants.MAX_FLOORS_PER_DAY;
        } else {
            for (var c : party.getPartyMembersInField(chr)) {
                var q = c.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
                if (q.getIntProperty("tf") >= OzConstants.MAX_FLOORS_PER_DAY) {
                    return false;
                }
            }
            return true;
        }
    }
}
