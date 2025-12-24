package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.FieldType;
import net.swordie.ms.enums.customscripts.CustomFieldClearScript;
import net.swordie.ms.enums.customscripts.CustomPortalScript;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.containerclasses.FieldInfo;
import net.swordie.ms.loaders.containerclasses.monsterdefense.MonsterDefenseInfo;
import net.swordie.ms.loaders.containerclasses.monsterdefense.MonsterDefenseMobGenInfo;
import net.swordie.ms.loaders.containerclasses.monsterdefense.MonsterDefenseWaveInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.*;
import java.util.*;

/**
 * Created on 12/21/2017.
 */
public class FieldData {

    private static final String FIELDS_FILE = ServerConstants.DAT_DIR + "/fields.dat";
    private static Map<Integer, FieldInfo> fields = new HashMap<>();
    private static Map<Integer, Integer> fieldOffsets;
    private static List<Integer> worldMapFields = new ArrayList<>();
    private static final Logger log = LogManager.getRootLogger();
    private static final boolean LOG_UNKS = false;

    public static void main(String[] args) {
        generateDatFiles();
    }

    private static void saveFields(String file) {
        int tableSize = getFields().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        fieldOffsets = new HashMap<>();
        try (RandomAccessFile os = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
            os.seek(tableSize);
            for (FieldInfo field : getFields().values()) {
                int curPos = (int) os.getFilePointer();
                fieldOffsets.put(field.getId(), curPos);

                os.writeInt(field.getId());
                os.writeInt(field.getFieldType().getVal());
                os.writeBoolean(field.isTown());
                os.writeBoolean(field.isSwim());
                os.writeLong(field.getFieldLimit());
                os.writeInt(field.getReturnMap());
                os.writeInt(field.getForcedReturn());
                os.writeDouble(field.getMobRate());
                os.writeBoolean(field.isFly());
                os.writeUTF(field.getOnFirstUserEnter());
                os.writeUTF(field.getOnUserEnter());
                os.writeUTF(field.getFieldScript());
                os.writeBoolean(field.isReactorShuffle());
                os.writeBoolean(field.isExpeditionOnly());
                os.writeBoolean(field.isPartyOnly());
                os.writeBoolean(field.isNeedSkillForFly());
                os.writeInt(field.getFixedMobCapacity());
                os.writeInt(field.getCreateMobInterval());
                os.writeInt(field.getTimeOut());
                os.writeInt(field.getTimeLimit());
                os.writeInt(field.getLvLimit());
                os.writeInt(field.getQrLimit());
                os.writeInt(field.getLvForceMove());
                os.writeInt(field.getConsumeItemCoolTime());
                os.writeInt(field.getLink());
                os.writeInt(field.getBossMobID());
                os.writeInt(field.getVrTop());
                os.writeInt(field.getVrLeft());
                os.writeInt(field.getVrBottom());
                os.writeInt(field.getVrRight());
                os.writeInt(field.getBarrier());
                os.writeInt(field.getBarrierArc());
                os.writeShort(field.getFootholds().size());
                for (Foothold fh : field.getFootholds().values()) {
                    os.writeInt(fh.getId());
                    os.writeInt(fh.getLayerId());
                    os.writeInt(fh.getGroupId());
                    os.writeInt(fh.getX1());
                    os.writeInt(fh.getY1());
                    os.writeInt(fh.getX2());
                    os.writeInt(fh.getY2());
                    os.writeInt(fh.getNext());
                    os.writeInt(fh.getPrev());
                    os.writeInt(fh.getForce());
                    os.writeBoolean(fh.isForbidFallDown());
                    os.writeBoolean(fh.cantGo());
                }
                os.writeShort(field.getPortals().size());
                for (Portal p : field.getPortals()) {
                    os.writeInt(p.getId());
                    os.writeInt(p.getType().getVal());
                    os.writeUTF(p.getName());
                    os.writeInt(p.getTargetMapId());
                    os.writeUTF(p.getTargetPortalName());
                    os.writeInt(p.getX());
                    os.writeInt(p.getY());
                    os.writeInt(p.getHorizontalImpact());
                    os.writeInt(p.getVerticalImpact());
                    os.writeUTF(p.getScript());
                    os.writeBoolean(p.isOnlyOnce());
                    os.writeInt(p.getDelay());
                    os.writeBoolean(p.getEnabled());
                }
                os.writeShort(field.getLifes().size());
                for (Life l : field.getLifes().values()) {
                    os.writeUTF(l.getLifeType());
                    os.writeInt(l.getTemplateId());
                    os.writeInt(l.getX());
                    os.writeInt(l.getY());
                    os.writeInt(l.getMobTime());
                    os.writeBoolean(l.isFlip());
                    os.writeBoolean(l.isHide());
                    os.writeInt(l.getFh());
                    os.writeInt(l.getCy());
                    os.writeInt(l.getRx0());
                    os.writeInt(l.getRx1());
                    os.writeUTF(l.getLimitedName());
                    os.writeBoolean(l.isUseDay());
                    os.writeBoolean(l.isUseNight());
                    os.writeBoolean(l.isHold());
                    os.writeBoolean(l.isNoFoothold());
                    os.writeBoolean(l.isDummy());
                    os.writeBoolean(l.isSpine());
                    os.writeBoolean(l.isMobTimeOnDie());
                    os.writeInt(l.getRegenStart());
                    os.writeInt(l.getMobAliveReq());
                }
                os.writeShort(field.getDirectionInfo().size());
                for (Map.Entry<Integer, List<String>> direction : field.getDirectionInfo().entrySet()) {
                    os.writeInt(direction.getKey());
                    os.writeShort(direction.getValue().size());
                    for (String directionInfo : direction.getValue()) {
                        os.writeUTF(directionInfo);
                    }
                }
                os.writeShort(field.getAreaControl().size());
                for (var name : field.getAreaControl()) {
                    os.writeUTF(name);
                }

                var hasMonsterDefense = field.getMonsterDefenseInfo() != null;
                os.writeBoolean(hasMonsterDefense);
                if (hasMonsterDefense) {
                    field.getMonsterDefenseInfo().write(os);
                }
            }
            IOHelper.writeOffsetTable(fieldOffsets, os);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void loadFieldInfoFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Map002.wz";
        WzFile wzFile = new WzFile(wzDir);
        WzObject<?, ?> mainDir = wzFile.getChild("Map");
        String[] maps = new String[]{"Map0", "Map1", "Map2", "Map3", "Map4", "Map5", "Map6", "Map7", "Map8", "Map9"};
        for (String mapRegion : maps) {
            for (Object mapObj : mainDir.getChild(mapRegion)) {
                WzObject<?, ?> map = (WzObject<?, ?>) mapObj;
                int id = Integer.parseInt(map.getName().replace(".img", ""));
                FieldInfo field = new FieldInfo(id);
                // info
                WzObject<?, ?> infoNode = map.getChild("info");
                field.setTown(((WzProperty<Integer>) infoNode.getChild("town", 0)).getValue() != 0);
                field.setSwim(((WzProperty<Integer>) infoNode.getChild("swim", 0)).getValue() != 0);
                field.setFly(((WzProperty<Integer>) infoNode.getChild("fly", 0)).getValue() != 0);
                field.setReactorShuffle(((WzProperty<Integer>) infoNode.getChild("reactorShuffle", 0)).getValue() != 0);
                field.setExpeditionOnly(((WzProperty<Integer>) infoNode.getChild("expeditionOnly", 0)).getValue() != 0);
                field.setPartyOnly(((WzProperty<Integer>) infoNode.getChild("partyOnly", 0)).getValue() != 0);
                field.setPartyOnly(((WzProperty<Integer>) infoNode.getChild("isNeedSkillForFly", 0)).getValue() != 0);

                field.setReturnMap(((WzProperty<Integer>) infoNode.getChild("returnMap", 0)).getValue());
                field.setForcedReturn(((WzProperty<Integer>) infoNode.getChild("forcedReturn", 0)).getValue());
                field.setFixedMobCapacity(((WzProperty<Integer>) infoNode.getChild("fixedMobCapacity", 0)).getValue());
                field.setCreateMobInterval(((WzProperty<Integer>) infoNode.getChild("createMobInterval", 0)).getValue());
                field.setTimeOut(((WzProperty<Integer>) infoNode.getChild("timeOut", 0)).getValue());
                field.setTimeLimit(((WzProperty<Integer>) infoNode.getChild("timeLimit", 0)).getValue());
                field.setLvLimit(((WzProperty<Integer>) infoNode.getChild("lvLimit", 0)).getValue());
                field.setQrLimit(((WzProperty<Integer>) infoNode.getChild("qrLimit", 0)).getValue());
                field.setLvForceMove(((WzProperty<Integer>) infoNode.getChild("lvForceMove", 0)).getValue());
                field.setConsumeItemCoolTime(((WzProperty<Integer>) infoNode.getChild("consumeItemCoolTime", 0)).getValue());
                field.setLink(((WzProperty<String>) infoNode.getChild("link", 0)).getIntValue());
                field.setBossMobID(((WzProperty<Integer>) infoNode.getChild("bossMobID", 0)).getValue());
                field.setVrTop(((WzProperty<Integer>) infoNode.getChild("VRTop", 0)).getValue());
                field.setVrLeft(((WzProperty<Integer>) infoNode.getChild("VRLeft", 0)).getValue());
                field.setVrBottom(((WzProperty<Integer>) infoNode.getChild("VRBottom", 0)).getValue());
                field.setVrRight(((WzProperty<Integer>) infoNode.getChild("VRRight", 0)).getValue());
                field.setBarrier(((WzProperty<Integer>) infoNode.getChild("barrier", 0)).getValue());
                field.setBarrierArc(((WzProperty<Integer>) infoNode.getChild("barrierArc", 0)).getValue());
                field.setFieldLimit(((WzProperty<Integer>) infoNode.getChild("fieldLimit", 0)).getValue());
                field.setMobRate(((WzProperty<Float>) infoNode.getChild("mobRate", 0)).getValue());
                field.setOnFirstUserEnter(((WzProperty<String>) infoNode.getChild("onFirstUserEnter", "")).getValue());
                field.setOnUserEnter(((WzProperty<String>) infoNode.getChild("onUserEnter", "")).getValue());
                field.setFieldScript(((WzProperty<String>) infoNode.getChild("fieldScript", "")).getValue());
                WzProperty<?> fieldTypeProp = ((WzProperty<?>) infoNode.getChild("fieldType", -1));
                FieldType fieldType = null;
                if (fieldTypeProp.getPropertyType().isInteger()) {
                    fieldType = FieldType.getByVal(((WzProperty<Integer>) fieldTypeProp).getValue());
                }
                if (fieldType == null) {
                    fieldType = FieldType.DEFAULT;
                }
                field.setFieldType(fieldType);

                // mosnterDefense
                WzObject<?, ?> monsterDefenseNode = map.getChild("monsterDefense");
                if (monsterDefenseNode != null) {
                    var defenseInfo = new MonsterDefenseInfo();

                    var mobGenPosNode = monsterDefenseNode.getChild("mobGenPos");
                    if (mobGenPosNode != null) {
                        for (WzObject<?, ?> mobGenPosNodeChild : mobGenPosNode) {
                            var idString = mobGenPosNodeChild.getName();
                            if (!Util.isNumber(idString)) {
                                continue;
                            }
                            var mobGenId = Integer.parseInt(idString);

                            var monsterDefenseMobGenInfo = new MonsterDefenseMobGenInfo();
                            monsterDefenseMobGenInfo.setId(mobGenId);
                            monsterDefenseMobGenInfo.setLeft(((WzProperty) mobGenPosNodeChild.getChild("left", 0)).getIntValue() == 1);
                            monsterDefenseMobGenInfo.setX(((WzProperty) mobGenPosNodeChild.getChild("x", 0)).getIntValue());
                            monsterDefenseMobGenInfo.setY(((WzProperty) mobGenPosNodeChild.getChild("y", 0)).getIntValue());

                            defenseInfo.getMobGens().put(mobGenId, monsterDefenseMobGenInfo);
                        }
                    }

                    var waveNode = monsterDefenseNode.getChild("wave");
                    if (waveNode != null) {
                        for (WzObject<?, ?> waveInfoNodes : waveNode) {
                            var waveNumberString = waveInfoNodes.getName();
                            if (!Util.isNumber(waveNumberString)) {
                                continue;
                            }
                            var waveNumber = Integer.parseInt(waveNumberString);

                            var waveInfoList = new ArrayList<MonsterDefenseWaveInfo>();
                            for (WzObject<?, ?> waveInfoNode : waveInfoNodes) {
                                var waveInfo = new MonsterDefenseWaveInfo();
                                waveInfo.setMobGenId(((WzProperty) waveInfoNode.getChild("genPos", 0)).getIntValue());
                                if (waveInfo.getMobGenId() == 0) {
                                    waveInfo.setMobGenId(((WzProperty) waveInfoNode.getChild("mobGen", 0)).getIntValue());
                                }
                                waveInfo.setMobId(((WzProperty) waveInfoNode.getChild("mobID", 0)).getIntValue());
                                waveInfo.setWaveAfter(((WzProperty) waveInfoNode.getChild("waveAfter", 0)).getIntValue());

                                waveInfoList.add(waveInfo);
                            }

                            defenseInfo.getWaves().put(waveNumber, waveInfoList);
                        }
                    }

                    defenseInfo.setStartInterval(((WzProperty) monsterDefenseNode.getChild("startInterval", 0)).getIntValue());

                    var delayTimeNode = monsterDefenseNode.getChild("delayTime");
                    if (delayTimeNode != null) {
                        defenseInfo.setCountState(((WzProperty) delayTimeNode.getChild("countState", 0)).getIntValue());
                        defenseInfo.setCreateMobDelay(((WzProperty) delayTimeNode.getChild("createMobDelay", 0)).getIntValue());
                        defenseInfo.setFinishState(((WzProperty) delayTimeNode.getChild("finishState", 0)).getIntValue());
                        defenseInfo.setPlayState(((WzProperty) delayTimeNode.getChild("playState", 0)).getIntValue());
                        defenseInfo.setPrepareState(((WzProperty) delayTimeNode.getChild("prepareState", 0)).getIntValue());
                        defenseInfo.setStopState(((WzProperty) delayTimeNode.getChild("stopState", 0)).getIntValue());
                    }

                    var endCondition = monsterDefenseNode.getChild("endCondition");
                    if (endCondition != null) {
                        defenseInfo.setKillCount(((WzProperty) endCondition.getChild("killCount", 0)).getIntValue());
                        defenseInfo.setPlayTime(((WzProperty) endCondition.getChild("playTime", 0)).getIntValue());
                    }

                    field.setMonsterDefenseInfo(defenseInfo);
                }

                // foothold
                WzObject<?, ?> fhNode = map.getChild("foothold");
                if (fhNode != null) {
                    for (WzObject<?, ?> layerIdNode : fhNode) {
                        int layerId = Integer.parseInt(layerIdNode.getName());
                        for (WzObject<?, ?> groupIdNode : layerIdNode) {
                            int groupId = Integer.parseInt(groupIdNode.getName());
                            for (WzObject<?, ?> idNode : groupIdNode) {
                                int fhId = Integer.parseInt(idNode.getName());
                                Foothold fh = new Foothold(fhId, layerId, groupId);
                                fh.setX1(((WzProperty<Integer>) idNode.getChild("x1", 0)).getValue());
                                fh.setY1(((WzProperty<Integer>) idNode.getChild("y1", 0)).getValue());
                                fh.setX2(((WzProperty<Integer>) idNode.getChild("x2", 0)).getValue());
                                fh.setY2(((WzProperty<Integer>) idNode.getChild("y2", 0)).getValue());
                                fh.setNext(((WzProperty<Integer>) idNode.getChild("next", 0)).getValue());
                                fh.setPrev(((WzProperty<Integer>) idNode.getChild("prev", 0)).getValue());
                                fh.setForce(((WzProperty<Integer>) idNode.getChild("force", 0)).getIntValue());
                                fh.setForbidFallDown(((WzProperty<Integer>) idNode.getChild("forbidFallDown", 0)).getValue() != 0);
                                fh.setCantGo(((WzProperty<Integer>) idNode.getChild("cantGo", 0)).getValue() != 0);
                                field.addFoothold(fh);
                            }
                        }
                    }
                }

                // portal
                WzObject<?, ?> portalNode = map.getChild("portal");
                if (portalNode != null) {
                    for (WzObject<?, ?> idNode : portalNode) {
                        int portalId = Integer.parseInt(idNode.getName());
                        Portal portal = new Portal(portalId);
                        portal.setType(PortalType.getTypeByInt(((WzProperty<Integer>) idNode.getChild("pt", 0)).getValue()));
                        portal.setName(((WzProperty<String>) idNode.getChild("pn", "")).getValue());
                        portal.setTargetMapId(((WzProperty<Integer>) idNode.getChild("tm", 0)).getValue());
                        portal.setTargetPortalName(((WzProperty<String>) idNode.getChild("tn", "")).getValue());
                        portal.setX(((WzProperty<Integer>) idNode.getChild("x", 0)).getValue());
                        portal.setY(((WzProperty<Integer>) idNode.getChild("y", 0)).getValue());
                        portal.setHorizontalImpact(((WzProperty<Integer>) idNode.getChild("horizontalImpact", 0)).getValue());
                        portal.setVerticalImpact(((WzProperty<Integer>) idNode.getChild("verticalImpact", 0)).getValue());
                        portal.setScript(((WzProperty<String>) idNode.getChild("script", "")).getValue());
                        portal.setOnlyOnce(((WzProperty<Integer>) idNode.getChild("onlyOnce", 0)).getValue() != 0);
                        portal.setDelay(((WzProperty<Integer>) idNode.getChild("delay", 0)).getValue());
                        portal.setEnabled(portal.getType() != PortalType.PortalChangable && portal.getType() != PortalType.PortalChangableInvisible);
                        CustomPortalScript.applyCustomScript(portal, field.getId(), portalId);

                        field.addPortal(portal);
                    }
                }

                // life
                WzObject<?, ?> mainLifeNode = map.getChild("life");
                if (mainLifeNode != null) {
                    Set<WzObject<?, ?>> lifeNodes = new HashSet<>();
                    if (mainLifeNode.hasChild("isCategory")) {
                        for (WzObject subLifeNode : mainLifeNode) {
                            if (!subLifeNode.getName().equalsIgnoreCase("isCategory")) {
                                lifeNodes.add(subLifeNode);
                            }
                        }
                    } else {
                        lifeNodes.add(mainLifeNode);
                    }
                    for (WzObject<?, ?> lifeNode : lifeNodes) {
                        for (WzObject<?, ?> idNode : lifeNode) {
                            if (!idNode.hasChild("type")) {
                                continue;
                            }

                            Life life = new Life(0);
                            life.setLifeType(((WzProperty<String>) idNode.getChild("type")).getValue());
                            life.setTemplateId(((WzProperty<Integer>) idNode.getChild("id", 0)).getIntValue());
                            life.setX(((WzProperty<Integer>) idNode.getChild("x", 0)).getValue());
                            life.setY(((WzProperty<Integer>) idNode.getChild("y", 0)).getValue());
                            life.setMobTime(((WzProperty<Integer>) idNode.getChild("mobTime", 0)).getValue());
                            life.setFlip(((WzProperty<Integer>) idNode.getChild("f", 0)).getValue() != 0);
                            life.setHide(((WzProperty<Integer>) idNode.getChild("hide", 0)).getValue() != 0);
                            life.setFh(((WzProperty<Integer>) idNode.getChild("fh", 0)).getValue());
                            life.setCy(((WzProperty<Integer>) idNode.getChild("cy", 0)).getValue());
                            life.setRx0(((WzProperty<Integer>) idNode.getChild("rx0", 0)).getValue());
                            life.setRx1(((WzProperty<Integer>) idNode.getChild("rx1", 0)).getValue());
                            life.setLimitedName(((WzProperty<String>) idNode.getChild("limitedName", "")).getValue());
                            life.setUseDay(((WzProperty<Integer>) idNode.getChild("useDay", 0)).getValue() != 0);
                            life.setUseNight(((WzProperty<Integer>) idNode.getChild("useNight", 0)).getValue() != 0);
                            life.setHold(((WzProperty<Integer>) idNode.getChild("hold", 0)).getValue() != 0);
                            life.setNoFoothold(((WzProperty<Integer>) idNode.getChild("nofoothold", 0)).getValue() != 0);
                            life.setDummy(((WzProperty<Integer>) idNode.getChild("dummy", 0)).getValue() != 0);
                            life.setSpine(((WzProperty<Integer>) idNode.getChild("spine", 0)).getValue() != 0);
                            life.setMobTimeOnDie(((WzProperty<Integer>) idNode.getChild("mobTimeOnDie", 0)).getValue() != 0);
                            life.setRegenStart(((WzProperty<Integer>) idNode.getChild("regenStart", 0)).getValue());
                            life.setMobAliveReq(((WzProperty<Integer>) idNode.getChild("mobAliveReq", 0)).getValue());

                            field.addLife(life);
                        }
                    }
                }

                // reactor
                WzObject<?, ?> reactorNode = map.getChild("reactor");
                if (reactorNode != null) {
                    for (WzObject<?, ?> reactorIdNode : reactorNode) {
                        Reactor reactor = new Reactor(0);

                        reactor.setLifeType("r");
                        reactor.setTemplateId(((WzProperty<Integer>) reactorIdNode.getChild("id", 0)).getIntValue());
                        reactor.setX(((WzProperty<Integer>) reactorIdNode.getChild("x", 0)).getIntValue());
                        reactor.setY(((WzProperty<Integer>) reactorIdNode.getChild("y", 0)).getValue());
                        reactor.setReactorTime(((WzProperty<Integer>) reactorIdNode.getChild("reactorTime", 0)).getValue());
                        reactor.setFlip(((WzProperty<Integer>) reactorIdNode.getChild("f", 0)).getValue() != 0);
                        reactor.setName(((WzProperty<String>) reactorIdNode.getChild("name", "")).getValue());
                        reactor.setPhantomForest(((WzProperty<Integer>) reactorIdNode.getChild("phantomForest", 0)).getValue() != 0);

                        field.addLife(reactor);
                    }
                }

                // direction
                WzObject<?, ?> directionInfoNode = map.getChild("directionInfo");
                if (directionInfoNode != null) {
                    for (WzObject<?, ?> idNode : directionInfoNode) {
                        if (idNode.hasChild("EventQ")) {
                            List<String> directionInfo = new ArrayList<>();
                            for (Object eventObj : idNode.getChild("EventQ")) {
                                WzObject<?, ?> event = (WzObject<?, ?>) eventObj;
                                directionInfo.add(((WzProperty<String>) event).getValue());
                            }
                            field.addDirectionInfo(Integer.parseInt(idNode.getName()), directionInfo);
                        }
                    }
                }

                // areaControl
                WzObject<?, ?> areaCtrlNode = map.getChild("areaCtrl");
                if (areaCtrlNode != null) {
                    for (WzObject<?, ?> nameNode : areaCtrlNode) {
                        field.addAreaControl(nameNode.getName());
                    }
                }

                getFields().put(field.getId(), field);
                map.clear();
            }
        }
    }

    public static Map<Integer, FieldInfo> getFields() {
        return fields;
    }

    public static List<Integer> getWorldMapFields() {
        return worldMapFields;
    }

    public static FieldInfo getFieldInfoById(int id) {
        var field = getFields().get(id);
        if (field == null) {
            field = getFieldFromFile(id);
        }
        return field;
    }

    private static FieldInfo getFieldFromFile(int id) {
        if (fieldOffsets == null) {
            fieldOffsets = new HashMap<>();
            IOHelper.loadOffsets(fieldOffsets, FIELDS_FILE);
        }
        if (!fieldOffsets.containsKey(id)) {
            return null;
        }
        FieldInfo field = null;
        int offset = fieldOffsets.get(id);
        try (RandomAccessFile raf = new RandomAccessFile(FIELDS_FILE, IOHelper.READ_MODE)) {
            raf.seek(offset);
            field = new FieldInfo(raf.readInt());
            field.setFieldType(FieldType.getByVal(raf.readInt()));
            field.setTown(raf.readBoolean());
            field.setSwim(raf.readBoolean());
            field.setFieldLimit(raf.readLong());
            field.setReturnMap(raf.readInt());
            field.setForcedReturn(raf.readInt());
            field.setMobRate(raf.readDouble());
            field.setFly(raf.readBoolean());
            field.setOnFirstUserEnter(raf.readUTF());
            field.setOnUserEnter(raf.readUTF());
            field.setFieldScript(raf.readUTF());
            field.setReactorShuffle(raf.readBoolean());
            field.setExpeditionOnly(raf.readBoolean());
            field.setPartyOnly(raf.readBoolean());
            field.setNeedSkillForFly(raf.readBoolean());
            field.setFixedMobCapacity(raf.readInt());
            field.setCreateMobInterval(raf.readInt());
            field.setTimeOut(raf.readInt());
            field.setTimeLimit(raf.readInt());
            field.setLvLimit(raf.readInt());
            field.setQrLimit(raf.readInt());
            field.setLvForceMove(raf.readInt());
            field.setConsumeItemCoolTime(raf.readInt());
            field.setLink(raf.readInt());
            field.setBossMobID(raf.readInt());
            field.setVrTop(raf.readInt());
            field.setVrLeft(raf.readInt());
            field.setVrBottom(raf.readInt());
            field.setVrRight(raf.readInt());
            field.setBarrier(raf.readInt());
            field.setBarrierArc(raf.readInt());

            int minX = Integer.MAX_VALUE, minY = Integer.MAX_VALUE;
            int maxX = Integer.MIN_VALUE, maxY = Integer.MIN_VALUE;

            short fhSize = raf.readShort();
            for (int j = 0; j < fhSize; j++) {
                Foothold fh = new Foothold(
                        raf.readInt(), raf.readInt(), raf.readInt()
                );
                fh.setX1(raf.readInt());
                fh.setY1(raf.readInt());
                fh.setX2(raf.readInt());
                fh.setY2(raf.readInt());
                fh.setNext(raf.readInt());
                fh.setPrev(raf.readInt());
                fh.setForce(raf.readInt());
                fh.setForbidFallDown(raf.readBoolean());
                fh.setCantGo(raf.readBoolean());
                field.addFoothold(fh);

                if (fh.getX1() < minX) {
                    minX = fh.getX1();
                }
                if (fh.getY1() < minY) {
                    minY = fh.getY1();
                }
                if (fh.getX2() > maxX) {
                    maxX = fh.getX2();
                }
                if (fh.getY2() > maxY) {
                    maxY = fh.getY2();
                }

            }

            short portalSize = raf.readShort();
            for (int j = 0; j < portalSize; j++) {
                Portal p = new Portal(raf.readInt());
                p.setType(PortalType.getTypeByInt(raf.readInt()));
                p.setName(raf.readUTF());
                p.setTargetMapId(raf.readInt());
                p.setTargetPortalName(raf.readUTF());
                p.setX(raf.readInt());
                p.setY(raf.readInt());
                p.setHorizontalImpact(raf.readInt());
                p.setVerticalImpact(raf.readInt());
                p.setScript(raf.readUTF());
                p.setOnlyOnce(raf.readBoolean());
                p.setDelay(raf.readInt());
                p.setEnabled(raf.readBoolean());
                field.addPortal(p);
            }
            short lifeSize = raf.readShort();
            for (int j = 0; j < lifeSize; j++) {
                Life l = new Life(0);
                l.setLifeType(raf.readUTF());
                l.setTemplateId(raf.readInt());
                l.setX(raf.readInt());
                l.setY(raf.readInt());
                l.setHomePosition(new Position(l.getX(), l.getY()));
                l.setMobTime(raf.readInt());
                l.setFlip(raf.readBoolean());
                l.setHide(raf.readBoolean());
                l.setFh(raf.readInt());
                l.setCy(raf.readInt());
                l.setRx0(raf.readInt());
                l.setRx1(raf.readInt());
                l.setLimitedName(raf.readUTF());
                l.setUseDay(raf.readBoolean());
                l.setUseNight(raf.readBoolean());
                l.setHold(raf.readBoolean());
                l.setNoFoothold(raf.readBoolean());
                l.setDummy(raf.readBoolean());
                l.setSpine(raf.readBoolean());
                l.setMobTimeOnDie(raf.readBoolean());
                l.setRegenStart(raf.readInt());
                l.setMobAliveReq(raf.readInt());
                if ("m".equalsIgnoreCase(l.getLifeType())) {
                    MobGen mobGen = l.createMobGenFromLife();
                    if (mobGen != null) {
                        field.addLife(mobGen);
                    } else {
                        log.error(String.format("Could not find mobgen! Field id = %d, MobGen id = %d", field.getId(), l.getTemplateId()));
                    }
                } else if ("n".equalsIgnoreCase(l.getLifeType())) {
                    Npc npc = l.createNpcFromLife();
                    if (npc != null) {
                        field.addLife(npc);
                    } else {
                        log.error(String.format("Could not find npc! Field id = %d, Npc id = %d", field.getId(), l.getTemplateId()));
                    }
                } else if ("r".equalsIgnoreCase(l.getLifeType())) {
                    Reactor reactor = l.createReactorFromLife();
                    if (reactor != null) {
                        field.addLife(reactor);
                    }
                } else {
                    field.addLife(l);
                }
            }
            short directionSize = raf.readShort();
            for (int j = 0; j < directionSize; j++) {
                int key = raf.readInt();
                List<String> directions = new ArrayList<>();
                short directionsSize = raf.readShort();
                for (int k = 0; k < directionsSize; k++) {
                    directions.add(raf.readUTF());
                }
                field.addDirectionInfo(key, directions);
            }

            // Area Control
            short size = raf.readShort();
            for (int i = 0; i < size; i++) {
                field.addAreaControl(raf.readUTF());
            }

            // MonsterDefense
            var hasMonsterDefense = raf.readBoolean();
            if (hasMonsterDefense) {
                var monsterDefenseInfo = new MonsterDefenseInfo();
                monsterDefenseInfo.read(raf);
                field.setMonsterDefenseInfo(monsterDefenseInfo);
            }


            if (field.getVrLeft() == 0 && field.getVrRight() == 0) {
                // no vr info available
                field.setVrLeft(minX);
                field.setVrTop(minY - 1000);
                field.setVrRight(maxX);
                field.setVrBottom(maxY);
            }
            field.setFieldClearScript(CustomFieldClearScript.byFieldId(field.getId()));
            var mobGens = field.getMobGens();
            field.setFixedMobCapacity((int) (mobGens.size() * GameConstants.DEFAULT_FIELD_MOB_RATE_BY_MOBGEN_COUNT));

            int avgLv = 0;
            for (var mobGenLife : mobGens) {
                var mobGen = (MobGen) mobGenLife;
                avgLv += mobGen.getMob().getForcedMobStat().getLevel();
            }
            if (mobGens.size() > 0) {
                avgLv /= mobGens.size();
                field.setAverageMobLevel(avgLv);
            }

            getFields().put(field.getId(), field);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return field;
    }

    private static void loadWorldMapFromWz() {
        String wzDir = ServerConstants.WZ_DIR + "/Map.wz";
        WzFile file = new WzFile(wzDir);
        WzObject<?, ?> worldMap = file.getChild("WorldMap");
        for (WzObject<?, ?> map : worldMap) {
            WzObject<?, ?> mapList = map.getChild("MapList");
            if (mapList != null) {
                for (WzObject<?, ?> node : mapList) {
                    WzObject<?, ?> mapNo = node.getChild("mapNo");
                    for (WzObject<?, ?> val : mapNo) {
                        WzProperty<?> prop = (WzProperty<?>) val;
                        int fieldId = prop.getIntValue();
                        if (!worldMapFields.contains(fieldId)) {
                            worldMapFields.add(fieldId);
                        }
                    }
                }
            }
        }
    }

    private static void saveWorldMap(String dir) {
        File file = new File(dir);
        try (DataOutputStream dataOutputStream = new DataOutputStream(new FileOutputStream(file))) {
            dataOutputStream.writeInt(worldMapFields.size());
            for (int fieldId : worldMapFields) {
                dataOutputStream.writeInt(fieldId);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void loadWorldMap() {
        long start = System.currentTimeMillis();
        try (DataInputStream dataInputStream = new DataInputStream(new FileInputStream(ServerConstants.DAT_DIR + "/worldMap.dat"))) {
            int size = dataInputStream.readInt();
            for (int i = 0; i < size; i++) {
                worldMapFields.add(dataInputStream.readInt());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        log.info(String.format("Loaded world map fields from data file in %dms.", System.currentTimeMillis() - start));
    }

    public static void generateDatFiles() {
        log.info("Started generating field data.");
        long start = System.currentTimeMillis();
        loadFieldInfoFromWz();
        loadCustomNpcs();
        saveFields(FIELDS_FILE);
        loadWorldMapFromWz();
        saveWorldMap(ServerConstants.DAT_DIR + "/worldMap.dat");
        log.info(String.format("Completed generating field data in %dms.", System.currentTimeMillis() - start));
    }

    private static void loadCustomNpcs() {
        // just do it like this for now, shouldn't be many npcs anyway
        var field = getFields().get(910000000); // Free Market

        int objectId = 0;
        for (var entry : field.getLifes().entrySet()) {
            if (entry.getValue().getTemplateId() == 9000133) {
                // Wonky
                objectId = entry.getKey();
                break;
            }
        }

        if (objectId != 0) {
            field.getLifes().remove(objectId);
        }

        var fredrick = new Life(9030000);
        fredrick.setLifeType("n");
        fredrick.setCy(-176);
        fredrick.setFh(81);
        fredrick.setRx0(-907);
        fredrick.setRx1(-807);
        fredrick.setX(-857);
        fredrick.setY(-184);
        fredrick.setPosition(new Position(fredrick.getX(), fredrick.getY()));

        field.addLife(fredrick);
    }

    public static Field getFieldCopyById(int id) {
        return getFieldCopyById(id, false);
    }

    public static Field getFieldCopyById(int id, boolean isChannelField) {
        if (id == FieldConstants.UNKNOWN_FIELD_ID) {
            id = FieldConstants.HENESYS_FIELD_ID;
        }

        FieldInfo field = getFieldInfoById(id);
        if (field == null) {
            log.error("Could not find field " + id);
            return null;
        }

        return field.toField(isChannelField);
    }



    public static void clear() {
        getFields().clear();
        if (fieldOffsets != null) {
            fieldOffsets = null;
        }
    }

}
