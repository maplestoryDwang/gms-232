package net.swordie.ms.life.npc;

public class PlacedNpcTemplate {
    private int id;           
    private int npcid;        
    private int mapid;        
    private int x;            
    private int y;            
    private int cy;           
    private int rx0;          
    private int rx1;          
    private int fh;           

    public PlacedNpcTemplate() {
    }

    public PlacedNpcTemplate(int npcid, int mapid, int x, int y, int cy, int rx0, int rx1, int fh) {
        this.npcid = npcid;
        this.mapid = mapid;
        this.x = x;
        this.y = y;
        this.cy = cy;
        this.rx0 = rx0;
        this.rx1 = rx1;
        this.fh = fh;
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

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getCy() {
        return cy;
    }

    public void setCy(int cy) {
        this.cy = cy;
    }

    public int getRx0() {
        return rx0;
    }

    public void setRx0(int rx0) {
        this.rx0 = rx0;
    }

    public int getRx1() {
        return rx1;
    }

    public void setRx1(int rx1) {
        this.rx1 = rx1;
    }

    public int getFh() {
        return fh;
    }

    public void setFh(int fh) {
        this.fh = fh;
    }

    @Override
    public String toString() {
        return "PlacedNpcTemplate{" +
                "id=" + id +
                ", npcid=" + npcid +
                ", mapid=" + mapid +
                ", x=" + x +
                ", y=" + y +
                ", cy=" + cy +
                ", rx0=" + rx0 +
                ", rx1=" + rx1 +
                ", fh=" + fh +
                '}';
    }
}
