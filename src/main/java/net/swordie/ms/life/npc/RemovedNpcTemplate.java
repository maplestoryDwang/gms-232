package net.swordie.ms.life.npc;

public class RemovedNpcTemplate {
    private int id;
    private int npcid;
    private int mapid;

    public RemovedNpcTemplate() {
    }

    public RemovedNpcTemplate(int npcid, int mapid) {
        this.npcid = npcid;
        this.mapid = mapid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNpcid() {
        return npcid;
    }

    public void setNpcid(int npcid) {
        this.npcid = npcid;
    }

    public int getMapid() {
        return mapid;
    }

    public void setMapid(int mapid) {
        this.mapid = mapid;
    }

    @Override
    public String toString() {
        return "RemovedNpcTemplate{" +
                "id=" + id +
                ", npcid=" + npcid +
                ", mapid=" + mapid +
                '}';
    }
}
