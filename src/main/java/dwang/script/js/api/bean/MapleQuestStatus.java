package dwang.script.js.api.bean;

import net.swordie.ms.client.character.quest.Quest;

import java.util.Map;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName MapleQuestStatus.java
 * @Description 包装类脚本使用
 * @createTime 2026-03-16 12:39
 */

public class MapleQuestStatus {
    private int npcId;
    private int forfeited;
    private Quest quest;
    private long completionTime;
    private byte status;
    private String customData;


    public int getNpcId() {
        return npcId;
    }

    public void setNpcId(int npcId) {
        this.npcId = npcId;
    }

    public int getForfeited() {
        return forfeited;
    }

    public void setForfeited(int forfeited) {
        this.forfeited = forfeited;
    }

    public Quest getQuest() {
        return quest;
    }

    public void setQuest(Quest quest) {
        this.quest = quest;
    }

    public long getCompletionTime() {
        return completionTime;
    }

    public void setCompletionTime(long completionTime) {
        this.completionTime = completionTime;
    }

    public byte getStatus() {
        return status;
    }

    public void setStatus(byte status) {
        this.status = status;
    }

    public String getCustomData() {
        return customData;
    }

    public void setCustomData(String customData) {
        this.customData = customData;
    }
}
