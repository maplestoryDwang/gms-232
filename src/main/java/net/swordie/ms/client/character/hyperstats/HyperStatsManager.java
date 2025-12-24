package net.swordie.ms.client.character.hyperstats;

import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.orm.dao.HyperStatInfoDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 01/02/2022.
 *
 * @author Asura
 */
public class HyperStatsManager implements Encodable {

    private static final HyperStatInfoDao hyperStatInfoDao = (HyperStatInfoDao) SworDaoFactory.getByClass(HyperStatInfo.class);

    private int id;
    private int currentPreset = 0;
    private List<HyperStatInfo> hyperStatSkills;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCurrentPreset() {
        return currentPreset;
    }

    public void setCurrentPreset(int currentPreset) {
        this.currentPreset = currentPreset;
    }

    public List<HyperStatInfo> getHyperStatSkills() {
        if (hyperStatSkills == null) {
            hyperStatSkills = hyperStatInfoDao.byHyperStatsManager(this);
        }
        return hyperStatSkills;
    }

    public void setHyperStatSkills(List<HyperStatInfo> hyperStatSkills) {
        this.hyperStatSkills = hyperStatSkills;
    }

    public List<HyperStatInfo> getHyperStatSkillsByPreset(int presetIndex) {
        return getHyperStatSkills().stream().filter(info -> info.getPresetIndex() == presetIndex).collect(Collectors.toList());
    }

    public void resetPreset(int presetIndex) {
        hyperStatInfoDao.deleteByPreset(this, presetIndex);
        getHyperStatSkills().removeIf(i -> i.getPresetIndex() == presetIndex);
    }

    public void addHyperStatInfoToPreset(HyperStatInfo info) {
        var previousHyperStat = getHyperStatSkills().stream().filter(i -> i.equals(info)).findFirst().orElse(null);
        if (previousHyperStat == null) {
            getHyperStatSkills().add(info);
            return;
        }
        previousHyperStat.setPresetIndex(info.getPresetIndex());
        previousHyperStat.setLevel(info.getLevel());
        previousHyperStat.setSkillId(info.getSkillId());
    }

    @Override
    public void encode(OutPacket outPacket) {
        for (var i = 0; i < GameConstants.HYPER_STATS_MAX_PRESETS; i++) {
            var infos = getHyperStatSkillsByPreset(i);
            outPacket.encodeInt(infos.size());
            for (var hyperStatInfo : infos) {
                outPacket.encode(hyperStatInfo);
            }
        }
    }
}
