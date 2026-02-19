package net.swordie.ms.loaders.containerclasses;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName GrowHelpCareerInfo.java
 * @Description 导航任务的信息
 * @createTime 2026-02-19 15:06
 */

public class GrowHelpCareerInfo {

    private int fieldId;
    private int questId;

    public int getFieldId() {
        return fieldId;
    }

    public void setFieldId(int fieldId) {
        this.fieldId = fieldId;
    }

    public int getQuestId() {
        return questId;
    }

    public void setQuestId(int questId) {
        this.questId = questId;
    }

    public GrowHelpCareerInfo() {
    }

    public GrowHelpCareerInfo(int fieldId, int questId) {
        this.fieldId = fieldId;
        this.questId = questId;
    }
}
