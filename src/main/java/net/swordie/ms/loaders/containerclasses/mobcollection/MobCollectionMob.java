package net.swordie.ms.loaders.containerclasses.mobcollection;

public class MobCollectionMob {
    private int groupPosition;
    private int regionPosition;
    private int mobTemplateId;

    public MobCollectionMob() {
    }

    public MobCollectionMob(int groupPosition, int regionPosition, int mobTemplateId) {
        this.groupPosition = groupPosition;
        this.regionPosition = regionPosition;
        this.mobTemplateId = mobTemplateId;
    }

    public int getGroupPosition() {
        return groupPosition;
    }

    public void setGroupPosition(int groupPosition) {
        this.groupPosition = groupPosition;
    }

    public int getMobTemplateId() {
        return mobTemplateId;
    }

    public void setMobTemplateId(int mobTemplateId) {
        this.mobTemplateId = mobTemplateId;
    }

    public int getRegionPosition() {
        return regionPosition;
    }

    public void setRegionPosition(int regionPosition) {
        this.regionPosition = regionPosition;
    }
}
