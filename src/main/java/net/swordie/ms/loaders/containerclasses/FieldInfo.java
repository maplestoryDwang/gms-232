package net.swordie.ms.loaders.containerclasses;

import moe.maple.miho.space.PhysicalSpace2D;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.TownPortal;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.OzConstants;
import net.swordie.ms.enums.EliteState;
import net.swordie.ms.enums.FieldType;
import net.swordie.ms.life.Life;
import net.swordie.ms.loaders.containerclasses.monsterdefense.MonsterDefenseInfo;
import net.swordie.ms.scripts.ScriptManagerImpl;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import net.swordie.ms.world.field.MobGen;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.fieldownership.FieldOwnershipManager;

import java.util.*;
import java.util.stream.Collectors;

public class FieldInfo {
    private PhysicalSpace2D fhSpace;

    private int vrTop, vrLeft, vrBottom, vrRight;
    private double mobRate;
    private int id;
    private FieldType fieldType;
    private long fieldLimit;
    private int returnMap, forcedReturn, createMobInterval, timeOut, timeLimit, lvLimit, lvForceMove;
    private int consumeItemCoolTime, link;
    private boolean town, swim, fly, reactorShuffle, expeditionOnly, partyOnly, needSkillForFly;
    private final Set<Portal> portals;
    private final Map<Integer, Foothold> footholds;
    private final Map<Integer, Life> lifes;
    private String onFirstUserEnter = "", onUserEnter = "";
    private int fixedMobCapacity;
    private volatile int objectIDCounter = 1000000;
    private String fieldScript = "";
    private String fieldClearScript;
    private ScriptManagerImpl scriptManager;
    private RuneStone runeStone;
    private int burningFieldLevel = GameConstants.BURNING_FIELD_LEVEL_ON_START;
    private long nextEliteSpawnTime = System.currentTimeMillis();
    private int killedElites;
    private EliteState eliteState;
    private int bossMobID;
    private List<TownPortal> townPortalList = new ArrayList<>();
    private final Map<Integer, List<String>> directionInfo;
    private int averageMobLevel;
    private Position highestPos;
    private Position lowestPos;
    private int barrier;
    private int barrierArc;
    private long lastFieldBossSpawnTime;
    private int qrLimit;
    private List<String> areaControl = new ArrayList<>();
    private MonsterDefenseInfo monsterDefenseInfo;

    public FieldInfo(int id) {
        this.id = id;
        portals = new HashSet<>();
        footholds = new HashMap<>();
        lifes = new HashMap<>();
        directionInfo = new HashMap<>();
    }

    public Rect getRect() {
        return new Rect(getVrLeft(), getVrTop(), getVrRight(), getVrBottom());
    }

    public int getVrTop() {
        return vrTop;
    }

    public void setVrTop(int vrTop) {
        this.vrTop = vrTop;
    }

    public int getVrLeft() {
        return vrLeft;
    }

    public void setVrLeft(int vrLeft) {
        this.vrLeft = vrLeft;
    }

    public int getVrBottom() {
        return vrBottom;
    }

    public void setVrBottom(int vrBottom) {
        this.vrBottom = vrBottom;
    }

    public int getVrRight() {
        return vrRight;
    }

    public void setVrRight(int vrRight) {
        this.vrRight = vrRight;
    }

    public double getMobRate() {
        return mobRate;
    }

    public void setMobRate(double mobRate) {
        this.mobRate = mobRate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public FieldType getFieldType() {
        return fieldType;
    }

    public void setFieldType(FieldType fieldType) {
        this.fieldType = fieldType;
    }

    public long getFieldLimit() {
        return fieldLimit;
    }

    public void setFieldLimit(long fieldLimit) {
        this.fieldLimit = fieldLimit;
    }

    public int getReturnMap() {
        if (FieldConstants.isTowerOfOzField(getId())) {
            return OzConstants.OZ_LOBBY;
        }

        return returnMap;
    }

    public void setReturnMap(int returnMap) {
        this.returnMap = returnMap;
    }

    public int getForcedReturn() {
        if (FieldConstants.isTowerOfOzField(getId())) {
            return OzConstants.OZ_LOBBY;
        }

        return forcedReturn;
    }

    public void setForcedReturn(int forcedReturn) {
        this.forcedReturn = forcedReturn;
    }

    public int getCreateMobInterval() {
        return createMobInterval;
    }

    public void setCreateMobInterval(int createMobInterval) {
        this.createMobInterval = createMobInterval;
    }

    public int getTimeOut() {
        return timeOut;
    }

    public void setTimeOut(int timeOut) {
        this.timeOut = timeOut;
    }

    public int getTimeLimit() {
        return timeLimit;
    }

    public void setTimeLimit(int timeLimit) {
        this.timeLimit = timeLimit;
    }

    public int getLvLimit() {
        return lvLimit;
    }

    public void setLvLimit(int lvLimit) {
        this.lvLimit = lvLimit;
    }

    public int getLvForceMove() {
        return lvForceMove;
    }

    public void setLvForceMove(int lvForceMove) {
        this.lvForceMove = lvForceMove;
    }

    public int getConsumeItemCoolTime() {
        return consumeItemCoolTime;
    }

    public void setConsumeItemCoolTime(int consumeItemCoolTime) {
        this.consumeItemCoolTime = consumeItemCoolTime;
    }

    public int getLink() {
        return link;
    }

    public void setLink(int link) {
        this.link = link;
    }

    public boolean isTown() {
        return town;
    }

    public void setTown(boolean town) {
        this.town = town;
    }

    public boolean isSwim() {
        return swim;
    }

    public void setSwim(boolean swim) {
        this.swim = swim;
    }

    public boolean isFly() {
        return fly;
    }

    public void setFly(boolean fly) {
        this.fly = fly;
    }

    public boolean isReactorShuffle() {
        return reactorShuffle;
    }

    public void setReactorShuffle(boolean reactorShuffle) {
        this.reactorShuffle = reactorShuffle;
    }

    public boolean isExpeditionOnly() {
        return expeditionOnly;
    }

    public void setExpeditionOnly(boolean expeditionOnly) {
        this.expeditionOnly = expeditionOnly;
    }

    public boolean isPartyOnly() {
        return partyOnly;
    }

    public void setPartyOnly(boolean partyOnly) {
        this.partyOnly = partyOnly;
    }

    public boolean isNeedSkillForFly() {
        return needSkillForFly;
    }

    public void setNeedSkillForFly(boolean needSkillForFly) {
        this.needSkillForFly = needSkillForFly;
    }

    public Set<Portal> getPortals() {
        return portals;
    }

    public Map<Integer, Foothold> getFootholds() {
        return footholds;
    }

    public Map<Integer, Life> getLifes() {
        return lifes;
    }

    public String getOnFirstUserEnter() {
        return onFirstUserEnter;
    }

    public void setOnFirstUserEnter(String onFirstUserEnter) {
        this.onFirstUserEnter = onFirstUserEnter;
    }

    public String getOnUserEnter() {
        return onUserEnter;
    }

    public void setOnUserEnter(String onUserEnter) {
        this.onUserEnter = onUserEnter;
    }

    public int getFixedMobCapacity() {
        return fixedMobCapacity;
    }

    public void setFixedMobCapacity(int fixedMobCapacity) {
        this.fixedMobCapacity = fixedMobCapacity;
    }
    public String getFieldScript() {
        return fieldScript;
    }

    public void setFieldScript(String fieldScript) {
        this.fieldScript = fieldScript;
    }

    public String getFieldClearScript() {
        return fieldClearScript;
    }

    public void setFieldClearScript(String fieldClearScript) {
        this.fieldClearScript = fieldClearScript;
    }

    public ScriptManagerImpl getScriptManager() {
        return scriptManager;
    }

    public void setScriptManager(ScriptManagerImpl scriptManager) {
        this.scriptManager = scriptManager;
    }

    public RuneStone getRuneStone() {
        return runeStone;
    }

    public void setRuneStone(RuneStone runeStone) {
        this.runeStone = runeStone;
    }

    public int getBurningFieldLevel() {
        return burningFieldLevel;
    }

    public void setBurningFieldLevel(int burningFieldLevel) {
        this.burningFieldLevel = burningFieldLevel;
    }

    public long getNextEliteSpawnTime() {
        return nextEliteSpawnTime;
    }

    public void setNextEliteSpawnTime(long nextEliteSpawnTime) {
        this.nextEliteSpawnTime = nextEliteSpawnTime;
    }

    public int getKilledElites() {
        return killedElites;
    }

    public void setKilledElites(int killedElites) {
        this.killedElites = killedElites;
    }

    public EliteState getEliteState() {
        return eliteState;
    }

    public void setEliteState(EliteState eliteState) {
        this.eliteState = eliteState;
    }

    public int getBossMobID() {
        return bossMobID;
    }

    public void setBossMobID(int bossMobID) {
        this.bossMobID = bossMobID;
    }

    public List<TownPortal> getTownPortalList() {
        return townPortalList;
    }

    public void setTownPortalList(List<TownPortal> townPortalList) {
        this.townPortalList = townPortalList;
    }

    public Map<Integer, List<String>> getDirectionInfo() {
        return directionInfo;
    }

    public int getAverageMobLevel() {
        return averageMobLevel;
    }

    public void setAverageMobLevel(int averageMobLevel) {
        this.averageMobLevel = averageMobLevel;
    }

    public Position getHighestPos() {
        return new Position(getWidth() / 2, getVrTop());
    }

    public Position getLowestPos() {
        return new Position(getWidth() / 2, getVrBottom());
    }

    public int getBarrier() {
        return barrier;
    }

    public void setBarrier(int barrier) {
        this.barrier = barrier;
    }

    public int getBarrierArc() {
        return barrierArc;
    }

    public void setBarrierArc(int barrierArc) {
        this.barrierArc = barrierArc;
    }

    public long getLastFieldBossSpawnTime() {
        return lastFieldBossSpawnTime;
    }

    public void setLastFieldBossSpawnTime(long lastFieldBossSpawnTime) {
        this.lastFieldBossSpawnTime = lastFieldBossSpawnTime;
    }

    public int getQrLimit() {
        return qrLimit;
    }

    public void setQrLimit(int qrLimit) {
        this.qrLimit = qrLimit;
    }

    public void addFoothold(Foothold fh) {
        getFootholds().put(fh.getId(), fh);
    }

    public void addPortal(Portal p) {
        getPortals().add(p);
    }

    public void addLife(Life life) {
        getLifes().put(objectIDCounter++, life);
    }

    public void addDirectionInfo(int key, List<String> directions) {
        getDirectionInfo().put(key, directions);
    }

    public List<String> getAreaControl() {
        return areaControl;
    }

    public void setAreaControl(List<String> areaControl) {
        this.areaControl = areaControl;
    }

    public void addAreaControl(String areaControl) {
        getAreaControl().add(areaControl);
    }

    public Field toField(boolean isChannelField) {
        var field = new Field(getId());

        for (var life : getLifes().values()) {
            if (FieldConstants.isNoSpawnMobOnFieldCreate(field.getId()) && life instanceof MobGen) {
                continue;
            }

            field.addLife(life.deepCopy());
        }
        field.setChannelField(isChannelField);
        field.startFieldScript();
        field.spawnRandomHarvest();
        field.setProperties(new HashMap<>());
        field.setFieldOwnershipManager(new FieldOwnershipManager(field));

        return field;
    }

    public Portal getPortalByName(String name) {
        return Util.findWithPred(getPortals(), portal -> portal.getName().equals(name));
    }

    public Portal getPortalByID(int id) {
        return Util.findWithPred(getPortals(), portal -> portal.getId() == id);
    }

    public Foothold findFootHoldBelow(Position pos) {
        var space = getFhSpace();
        var fh = space.getFootholdUnderneath(pos.getX(), pos.getY());
        if (fh == null) {
            return findFootholdAbove(pos);
        }
        return getFootholdById(fh.id());
    }

    private Foothold findFootholdAbove(Position pos) {
        Set<Foothold> footholds = getFootholds().values()
                .stream()
                .filter(fh -> fh.getX1() <= pos.getX() && fh.getX2() >= pos.getX())
                .collect(Collectors.toSet());
        Foothold res = null;
        int lastY = Integer.MIN_VALUE;
        for (Foothold fh : footholds) {
            int y = fh.getYFromX(pos.getX());
            if (res == null && y <= pos.getY()) {
                res = fh;
                lastY = y;
            } else {
                if (y > lastY && y <= pos.getY()) {
                    res = fh;
                    lastY = y;
                }
            }
        }
        return res;
    }

    public Foothold getFootholdById(int fh) {
        return getFootholds().get(fh);
    }

    public PhysicalSpace2D getFhSpace() {
        if (fhSpace == null) {
            fhSpace = initFhSpace();
        }
        return fhSpace;
    }

    public PhysicalSpace2D initFhSpace() {
        return PhysicalSpace2D.ofBST(
                getLowestPos().toMoe(),
                getHighestPos().toMoe(),
                getFootholds().values().stream()
                        .map(Foothold::toMoe)
                        .collect(Collectors.toSet())
        );
    }

    public Portal getDefaultPortal() {
        Portal p = getPortalByName("sp");
        return p == null ? getPortalByID(0) : p;
    }

    public boolean isOutsideArea(Position position) {
        if (isFly()) {
            return false; // just let users fly back up
        }

        return position.getX() < getVrLeft() || position.getX() > getVrRight()
                || position.getY() < getVrTop() || position.getY() > getVrBottom();
    }

    public int calcHighestFhYValue() {
        int max = Integer.MIN_VALUE;
        for (Foothold fh : getFootholds().values()) {
            if (fh.getY1() > max) {
                max = fh.getY1();
            }
            if (fh.getY2() > max) {
                max = fh.getY2();
            }
        }
        return max;
    }

    public List<Foothold> getFootholdsByGroupId(int groupId) {
        return getFootholds().values().stream().filter(fh -> fh.getGroupId() == groupId).collect(Collectors.toList());
    }

    public Set<Foothold> getFootholdsInRect(Rect rect) {
        Set<Foothold> fields = new HashSet<>();
        for (Foothold fh : getFootholds().values()) {
            if (rect.hasPositionInside(new Position(fh.getX1(), fh.getY2()))
                    || rect.hasPositionInside(new Position(fh.getX2(), fh.getY2()))) {
                fields.add(fh);
            }
        }
        return fields;
    }

    public Collection<Life> getMobGens() {
        return getLifes().values().stream()
                .filter(l -> l instanceof MobGen)
                .collect(Collectors.toSet());
    }

    public int getWidth() {
        return getVrRight() - getVrLeft();
    }

    public List<String> getDirectionNode(int node) {
        return getDirectionInfo().get(node);
    }

    public Life getLifeByObjectId(int objectId) {
        return getLifes().get(objectId);
    }

    public int getHeight() {
        return getVrTop() - getVrBottom();
    }

    public MonsterDefenseInfo getMonsterDefenseInfo() {
        return monsterDefenseInfo;
    }

    public void setMonsterDefenseInfo(MonsterDefenseInfo monsterDefenseInfo) {
        this.monsterDefenseInfo = monsterDefenseInfo;
    }
}
