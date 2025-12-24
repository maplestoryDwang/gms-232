package net.swordie.ms.loaders.containerclasses;

import net.swordie.ms.client.character.chair.CustomChairType;

import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 13/07/2020.
 *
 * @author Asura
 */
public class CustomChairInfo {

    private CustomChairType chairType;

    // Celeb Chair
    // Traits Chair
    private String trait = "";
    private Map<Integer, Integer> linkChair = new HashMap<>(); // Unlock Lv -> Linked Chair

    // RollingHouseChair
    private int partsCount = 0;

    // HashTag Chair
    private int totalQrNum = 0;

    // Score Chair  ScaleAvatar Chair  Waste Chair  SaveTime Chair  TrickOrTreat Chair  RollingHouseChair
    private int questID = -1;
    private String questEx = "";

    // Waste Chair
    private int saveQrID = -1;

    public CustomChairType getChairType() {
        return chairType;
    }

    public void setChairType(CustomChairType chairType) {
        this.chairType = chairType;
    }

    public String getTrait() {
        return trait;
    }

    public void setTrait(String trait) {
        this.trait = trait;
    }

    public Map<Integer, Integer> getLinkChair() {
        return linkChair;
    }

    public void setLinkChair(Map<Integer, Integer> linkChair) {
        this.linkChair = linkChair;
    }

    public void addLinkChair(int lv, int linkChair) {
        getLinkChair().put(lv, linkChair);
    }

    public int getPartsCount() {
        return partsCount;
    }

    public void setPartsCount(int partsCount) {
        this.partsCount = partsCount;
    }

    public int getTotalQrNum() {
        return totalQrNum;
    }

    public void setTotalQrNum(int totalQrNum) {
        this.totalQrNum = totalQrNum;
    }

    public int getQuestID() {
        return questID;
    }

    public void setQuestID(int questID) {
        this.questID = questID;
    }

    public String getQuestEx() {
        return questEx;
    }

    public void setQuestEx(String questEx) {
        this.questEx = questEx;
    }

    public int getSaveQrID() {
        return saveQrID;
    }

    public void setSaveQrID(int saveQrID) {
        this.saveQrID = saveQrID;
    }

    public void write(RandomAccessFile raf) throws IOException {
        raf.writeInt(getChairType().getVal());
        switch (getChairType()) {
            case SaveTimeChair:
            case TrickOrTreatChair:
                raf.writeInt(getQuestID());
                break;
            case TraitsChair:
                raf.writeUTF(getTrait());
                // Fall through intended
            case CelebChair:
                raf.writeShort(getLinkChair().size());
                for (Map.Entry<Integer, Integer> entry : getLinkChair().entrySet()) {
                    raf.writeInt(entry.getKey());
                    raf.writeInt(entry.getValue());
                }
                break;
            case RollingHouseChair:
                raf.writeInt(getQuestID());
                raf.writeInt(getPartsCount());
                break;
            case HashTagChair:
                raf.writeInt(getQuestID());
                raf.writeInt(getTotalQrNum());
                break;
            case ScoreChair:
            case ScaleAvatarChair:
                raf.writeInt(getQuestID());
                raf.writeUTF(getQuestEx());
                break;
            case WasteChair:
                raf.writeUTF(getQuestEx());
                raf.writeInt(getQuestID());
                raf.writeInt(getSaveQrID());
                break;
        }
    }

    public static CustomChairInfo load(RandomAccessFile raf) throws IOException {
        CustomChairInfo cci = new CustomChairInfo();
        cci.setChairType(CustomChairType.getByVal(raf.readInt()));

        switch (cci.getChairType()) {
            case SaveTimeChair:
            case TrickOrTreatChair:
                cci.setQuestID(raf.readInt());
                break;
            case TraitsChair:
                cci.setTrait(raf.readUTF());
                // Fall through intended
            case CelebChair:
                var size = raf.readShort();
                for (int i = 0; i < size; i++) {
                    cci.addLinkChair(raf.readInt(), raf.readInt());
                }
                break;
            case RollingHouseChair:
                cci.setQuestID(raf.readInt());
                cci.setPartsCount(raf.readInt());
                break;
            case HashTagChair:
                cci.setQuestID(raf.readInt());
                cci.setTotalQrNum(raf.readInt());
                break;
            case ScoreChair:
            case ScaleAvatarChair:
                cci.setQuestID(raf.readInt());
                cci.setQuestEx(raf.readUTF());
                break;
            case WasteChair:
                cci.setQuestEx(raf.readUTF());
                cci.setQuestID(raf.readInt());
                cci.setSaveQrID(raf.readInt());
                break;
        }

        return cci;
    }
}
