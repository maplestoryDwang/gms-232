package net.swordie.ms.loaders.containerclasses;

import javax.persistence.*;

/**
 * @author Sjonnie
 * Created on 7/23/2018.
 */
@Entity
@Table(name = "monster_collection")
public class MonsterCollectionMobInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int mobID;
    private int region;
    private int session;
    private int groupId;
    private int groupPosition;
    private int regionPosition;

    public MonsterCollectionMobInfo() {
    }

    public MonsterCollectionMobInfo(int mobID, int region, int session, int groupId, int groupPosition, int regionPosition) {
        this.mobID = mobID;
        this.region = region;
        this.session = session;
        this.groupId = groupId;
        this.groupPosition = groupPosition;
        this.regionPosition = regionPosition;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMobID() {
        return mobID;
    }

    public void setMobID(int mobID) {
        this.mobID = mobID;
    }

    public int getRegion() {
        return region;
    }

    public void setRegion(int region) {
        this.region = region;
    }

    public int getSession() {
        return session;
    }

    public void setSession(int session) {
        this.session = session;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public int getGroupPosition() {
        return groupPosition;
    }

    public void setGroupPosition(int groupPosition) {
        this.groupPosition = groupPosition;
    }

    public int getRegionPosition() {
        return regionPosition;
    }

    public void setRegionPosition(int regionPosition) {
        this.regionPosition = regionPosition;
    }
}
