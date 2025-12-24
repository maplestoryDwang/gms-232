package net.swordie.ms.client.character.quest;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.progress.QuestProgressItemRequirement;
import net.swordie.ms.client.character.quest.progress.QuestProgressMobRequirement;
import net.swordie.ms.client.character.quest.progress.QuestProgressMoneyRequirement;
import net.swordie.ms.client.character.quest.progress.QuestProgressRequirement;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.loaders.MobData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.QuestProgressRequirementDao;
import net.swordie.orm.dao.SworDaoFactory;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;


/**
 * Created on 12/20/2017.
 */
@Entity
@Table(name = "quests")
public class Quest extends TrackedObject {

    private static final QuestProgressRequirementDao questProgressRequirementDao = (QuestProgressRequirementDao) SworDaoFactory.getByClass(QuestProgressRequirement.class);

    private long id;

    private int QRKey;
    private String customQrValue;
    private String customQrExValue;

    private QuestStatus status;

    private List<QuestProgressRequirement> progressRequirements;

    private FileTime completedTime;

    private Map<String, String> properties = new HashMap<>();
    private Map<String, String> propertiesEx = new HashMap<>();

    public Quest() {

    }

    public Quest(int QRKey, QuestStatus status) {
        this();
        this.QRKey = QRKey;
        this.status = status;
    }

    public int getQRKey() {
        return QRKey;
    }

    public void setQRKey(int QRKey) {
        this.QRKey = QRKey;
    }

    public QuestStatus getStatus() {
        return status;
    }

    public void setStatus(QuestStatus status) {
        this.status = status;
    }

    public Quest deepCopy() {
        Quest quest = new Quest();
        quest.setQRKey(getQRKey());
        for (QuestProgressRequirement qpr : getProgressRequirements()) {
            quest.addQuestProgressRequirement(qpr);
        }
        quest.setStatus(getStatus());
        return quest;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(QRKey, customQrValue, status, completedTime);
    }

    public List<QuestProgressRequirement> getProgressRequirements() {
        if (progressRequirements == null) {
            progressRequirements = questProgressRequirementDao.byQuest(this);
        }
        return progressRequirements;
    }

    public void addQuestProgressRequirement(QuestProgressRequirement qpr) {
        getProgressRequirements().add(qpr);
    }

    public List<QuestProgressMobRequirement> getMobReqs() {
        return getProgressRequirements().stream()
                .filter(qpr -> qpr instanceof QuestProgressMobRequirement)
                .map(qpr -> (QuestProgressMobRequirement) qpr)
                .collect(Collectors.toList());
    }

    public List<QuestProgressItemRequirement> getItemReqs() {
        return getProgressRequirements().stream()
                .filter(qpr -> qpr instanceof QuestProgressItemRequirement)
                .map(qpr -> (QuestProgressItemRequirement) qpr)
                .collect(Collectors.toList());
    }

    public QuestProgressMobRequirement getMobReqByMobID(int mobID) {
        return getMobReqs().stream().filter(qpmr -> qpmr.getMobID() == mobID).findFirst().orElse(null);
    }

    public boolean hasMobReq(int mobID) {
        return getMobReqByMobID(mobID) != null;
    }

    public FileTime getCompletedTime() {
        return completedTime;
    }

    public void completeQuest() {
        setStatus(QuestStatus.Completed);
        setCompletedTime(FileTime.currentTime());
    }

    public void setCompletedTime(FileTime completedTime) {
        this.completedTime = completedTime;
    }

    public boolean isComplete(Char chr) {
        return getProgressRequirements().stream().allMatch(pr -> pr.isComplete(chr));
    }

    public void handleMobKill(int mobID) {
        var mob = MobData.getMobInfoById(mobID);
        if (mob == null) {
            return;
        }
        // get requirement for which this mob (or a containing QuestCountGroup) is a part of
        QuestProgressMobRequirement qpmr = (QuestProgressMobRequirement) getProgressRequirements()
                .stream()
                .filter(q -> q instanceof QuestProgressMobRequirement
                        && ((((QuestProgressMobRequirement) q).getMobID() == mobID)
                        || mob.getParentMobSet().contains(((QuestProgressMobRequirement) q).getMobID())))
                .findFirst().get();
        // should never return null, as this method should only be called when this quest indeed has this mob
        if (qpmr.getCurrentCount() < qpmr.getRequiredCount()) {
            qpmr.incCurrentCount(1);
        }
    }

    @Override
    public String toString() {
        return String.format("%d, %s", getQRKey(), getQRValue());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean hasMoneyReq() {
        return getProgressRequirements().stream().anyMatch(q -> q instanceof QuestProgressMoneyRequirement);
    }

    public void addMoney(int money) {
        getProgressRequirements().stream()
                .filter(q -> q instanceof QuestProgressMoneyRequirement)
                .map(q -> (QuestProgressMoneyRequirement) q)
                .findAny().ifPresent(qpmr -> qpmr.addMoney(money));
    }

    public String getCustomQrValue() {
        return customQrValue;
    }

    public void setQrValue(String customQrValue) {
        this.customQrValue = customQrValue;
    }

    public String getCustomQrValueEx() {
        return customQrExValue;
    }

    public void setQrValueEx(String customQrExValue) {
        this.customQrExValue = customQrExValue;
    }

    public String getQRValue() {
        var customQrVal = getCustomQrValue();
        if (customQrVal != null && !customQrVal.equalsIgnoreCase("")) {
            return customQrVal;
        } else {
            StringBuilder sb = new StringBuilder();
            if (getProgressRequirements() == null) {
                return "";
            }
            List<QuestProgressMobRequirement> requirements = new ArrayList<>(getMobReqs());
            requirements.sort(Comparator.comparingInt(QuestProgressMobRequirement::getOrder));
            if (QuestConstants.M0_QR_QUESTS.contains(getQRKey())) {
                for (QuestProgressMobRequirement qpmr : requirements) {
                    sb.append("m0=" + qpmr.getValue());
                }
            } else {
                for (QuestProgressMobRequirement qpmr : requirements) {
                    sb.append(Util.leftPaddedString(3, '0', qpmr.getValue()));
                }
            }
            return sb.toString();
        }
    }


    public void convertQRValueToProperties() {
        String val = getQRValue();
        String[] props = val.split(";");
        for (String prop : props) {
            String[] keyVal = prop.split("=");
            if (keyVal.length == 2) {
                setProperty(keyVal[0], keyVal[1]);
            }
        }
    }

    public Map<String, String> getProperties() {
        return properties;
    }

    public boolean hasProperty(String key) {
        convertQRValueToProperties();
        return getProperties().keySet().contains(key);
    }

    public void setProperty(String key, String value) {
        getProperties().put(key, value);
        setQRValueToProperties();
    }

    public void setProperty(String key, int value) {
        getProperties().put(key, String.valueOf(value));
        setQRValueToProperties();
    }

    public void setProperty(String key, long value) {
        getProperties().put(key, String.valueOf(value));
        setQRValueToProperties();
    }

    public void setQRValueToProperties() {
        StringBuilder stringBuilder = new StringBuilder();
        for (Map.Entry<String, String> entry : getProperties().entrySet()) {
            stringBuilder.append(entry.getKey()).append("=").append(entry.getValue()).append(";");
        }
        setQrValue(stringBuilder.toString());
    }

    public String getProperty(String key) {
        convertQRValueToProperties();
        return getProperties().getOrDefault(key, null);
    }

    public int getIntProperty(String key) {
        convertQRValueToProperties();
        return Integer.parseInt(getProperties().getOrDefault(key, "0"));
    }

    public long getLongProperty(String key) {
        convertQRValueToProperties();
        return Long.parseLong(getProperties().getOrDefault(key, "0"));
    }

    public boolean isCompletedToday() {
        var completeTime = getCompletedTime();
        return completeTime != null && completeTime.toLocalDateTime().toLocalDate()
                .isEqual(LocalDateTime.now().toLocalDate());
    }

    public String getQRExValue() {
        var customQrVal = getCustomQrValueEx();
        if (customQrVal != null) {
            return customQrVal;
        }
        return "";
    }

    public void convertQRExValueToPropertiesEx() {
        String val = getQRExValue();
        String[] props = val.split(";");
        for (String prop : props) {
            String[] keyVal = prop.split("=");
            if (keyVal.length == 2) {
                setPropertyEx(keyVal[0], keyVal[1]);
            }
        }
    }

    public Map<String, String> getPropertiesEx() {
        return propertiesEx;
    }

    public boolean hasPropertyEx(String key) {
        convertQRExValueToPropertiesEx();
        return getPropertiesEx().keySet().contains(key);
    }

    public void setPropertyEx(String key, String value) {
        getPropertiesEx().put(key, value);
        setQRExValueToPropertiesEx();
    }

    public void setPropertyEx(String key, int value) {
        getPropertiesEx().put(key, String.valueOf(value));
        setQRExValueToPropertiesEx();
    }

    public void setPropertyEx(String key, long value) {
        getPropertiesEx().put(key, String.valueOf(value));
        setQRExValueToPropertiesEx();
    }

    public void setQRExValueToPropertiesEx() {
        StringBuilder stringBuilder = new StringBuilder();
        for (Map.Entry<String, String> entry : getPropertiesEx().entrySet()) {
            stringBuilder.append(entry.getKey()).append("=").append(entry.getValue()).append(";");
        }
        setQrValueEx(stringBuilder.toString());
    }

    public String getPropertyEx(String key) {
        convertQRExValueToPropertiesEx();
        return getPropertiesEx().getOrDefault(key, null);
    }

    public int getIntPropertyEx(String key) {
        convertQRExValueToPropertiesEx();
        return Integer.parseInt(getPropertiesEx().getOrDefault(key, "0"));
    }

    public long getLongPropertyEx(String key) {
        convertQRExValueToPropertiesEx();
        return Long.parseLong(getPropertiesEx().getOrDefault(key, "0"));
    }
}
