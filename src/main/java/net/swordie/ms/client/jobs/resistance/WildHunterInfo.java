package net.swordie.ms.client.jobs.resistance;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.QuestConstants;

/**
 * Created on 2/1/2018.
 */
public class WildHunterInfo {
    private int[] capturedMob = new int[5];
    private byte idx;
    private byte ridingType;

    public WildHunterInfo() {
        idx = -1;
    }

    public int[] getCapturedMob() {
        return capturedMob;
    }

    public void setCapturedMob(int[] capturedMob) {
        this.capturedMob = capturedMob;
    }

    public byte getIdx() {
        return idx;
    }

    public void setIdx(byte idx) {
        this.idx = idx;
    }

    public byte getRidingType() {
        return ridingType;
    }

    public void setRidingType(byte ridingType) {
        this.ridingType = ridingType;
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(10 * (getIdx() + 1));
        for (int mob : getCapturedMob()) {
            outPacket.encodeInt(mob);
        }
    }

    public int getTemplateID() {
        int res = 0;
        if (getRidingType() > 0 && getRidingType() < 10) { // 1~9 has jaguars
            res = 9304000 + (getRidingType() - 1);
        }
        return res;
    }

    public int getCapturedJaguars(Char chr) {
        Quest quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.WILD_HUNTER_JAGUAR_STORAGE_ID);
        quest.convertQRValueToProperties();
        return quest.getProperties().size();
    }

    public int getJaguarFlag(Char chr) {
        Quest quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.WILD_HUNTER_JAGUAR_STORAGE_ID);
        quest.convertQRValueToProperties();

        var flag = 0x0;
        for (JaguarFlag jf : JaguarFlag.values()) {
            var id = jf.getId() + 1;
            if (quest.hasProperty("" + id)) {
                flag += jf.getFlag();
            }
        }

        return flag;
    }
}
