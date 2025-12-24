package net.swordie.ms.loaders;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.jwzlib.WzFile;
import net.swordie.ms.jwzlib.WzObject;
import net.swordie.ms.jwzlib.WzProperty;
import net.swordie.ms.life.mob.ForcedMobStat;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.CallSkillWithData;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.loaders.containerclasses.MobInfo;
import net.swordie.ms.loaders.containerclasses.MobTransformInfo;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.awt.*;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created on 12/30/2017.
 */
public class MobData {
    private static final Object lockObj = new Object();
    private static final String MOBS_FILE = ServerConstants.DAT_DIR + "/mobs.dat";
    private static final Logger log = LogManager.getRootLogger();

    private static Map<Integer, MobInfo> mobs = new HashMap<>();
    private static Map<Integer, Integer> mobOffsets;

    public static Map<Integer, MobInfo> getMobs() {
        return mobs;
    }

    public static void addMob(MobInfo mob) {
        getMobs().put(mob.getTemplateId(), mob);
    }

    public static void generateDatFiles() {
        log.info("Started generating mob data.");
        long start = System.currentTimeMillis();
        loadMobsFromWz();
        QuestData.linkMobData();
        saveToFile(MOBS_FILE);
        log.info(String.format("Completed generating mob data in %dms.", System.currentTimeMillis() - start));
    }

    public static MobInfo getMobInfoById(int id) {
        var mob = getMobs().get(id);
        if (mob == null) {
            mob = loadMobFromFile(id);
        }
        return mob;
    }



    public static Mob getMobDeepCopyById(int id) {
        MobInfo mobInfo = getMobInfoById(id);
        Mob mob = null;
        if (mobInfo != null) {
            mob = mobInfo.toMob();
        } else {
            log.error("Could not find mob " + id);
            return mob;
        }
        mob.setObjectId(-1);
        return mob;
    }

    private static void saveToFile(String file) {
        int tableSize = getMobs().size() * 8 + 4; // 4 for id, 4 for offset pos, single 4 for size
        mobOffsets = new HashMap<>();
        try (RandomAccessFile raf = new RandomAccessFile(file, IOHelper.READ_WRITE_MODE)) {
            raf.seek(tableSize);
            for (var mob : getMobs().values()) {
                mobOffsets.put(mob.getTemplateId(), (int) raf.getFilePointer());
                ForcedMobStat fms = mob.getForcedMobStat();
                raf.writeInt(mob.getTemplateId());
                raf.writeInt(fms.getLevel());
                raf.writeInt(mob.getFirstAttack());
                raf.writeLong(fms.getMaxHP());
                raf.writeLong(fms.getMaxMP());
                raf.writeInt(fms.getPad());
                raf.writeInt(fms.getPdr());
                raf.writeInt(fms.getMad());
                raf.writeInt(fms.getMdr());
                raf.writeInt(fms.getAcc());
                raf.writeInt(fms.getEva());
                raf.writeLong(fms.getPushed());
                raf.writeLong(fms.getExp());
                raf.writeInt(mob.getSummonType());
                raf.writeInt(mob.getCategory());
                raf.writeUTF(mob.getMobType() == null ? "" : mob.getMobType());
                raf.writeInt(mob.getLink());
                raf.writeInt(fms.getSpeed());
                raf.writeDouble(mob.getFs());
                raf.writeUTF(mob.getElemAttr() == null ? "" : mob.getElemAttr());
                raf.writeInt(mob.getHpTagColor());
                raf.writeInt(mob.getHpTagBgcolor());
                raf.writeBoolean(mob.isHPgaugeHide());
                raf.writeBoolean(mob.isBoss());
                raf.writeBoolean(mob.isUndead());
                raf.writeBoolean(mob.isNoRegen());
                raf.writeBoolean(mob.isInvincible());
                raf.writeBoolean(mob.isHideName());
                raf.writeBoolean(mob.isHideHP());
                raf.writeBoolean(mob.isChangeable());
                raf.writeBoolean(mob.isNoFlip());
                raf.writeBoolean(mob.isTower());
                raf.writeBoolean(mob.isPartyBonusMob());
                raf.writeBoolean(mob.isUseReaction());
                raf.writeBoolean(mob.isPublicReward());
                raf.writeBoolean(mob.isMinion());
                raf.writeBoolean(mob.isForward());
                raf.writeBoolean(mob.isRemoteRange());
                raf.writeBoolean(mob.isIgnoreFieldOut());
                raf.writeBoolean(mob.isIgnoreMoveImpact());
                raf.writeBoolean(mob.isSkeleton());
                raf.writeBoolean(mob.isHideUserDamage());
                raf.writeBoolean(mob.isIndividualReward());
                raf.writeBoolean(mob.isNotConsideredFieldSet());
                raf.writeBoolean(mob.isNoDoom());
                raf.writeBoolean(mob.isUseCreateScript());
                raf.writeBoolean(mob.isBlockUserMove());
                raf.writeBoolean(mob.isKnockback());
                raf.writeBoolean(mob.isRemoveQuest());
                raf.writeBoolean(mob.isOnFieldSetSummon());
                raf.writeBoolean(mob.isUserControll());
                raf.writeBoolean(mob.isNoDebuff());
                raf.writeBoolean(mob.isTargetFromSvr());
                raf.writeUTF(mob.getChangeableMobType() == null ? "" : mob.getChangeableMobType());
                raf.writeInt(mob.getRareItemDropLevel());
                raf.writeInt(mob.getHpRecovery());
                raf.writeInt(mob.getMpRecovery());
                raf.writeInt(mob.getMbookID());
                raf.writeInt(mob.getChaseSpeed());
                raf.writeInt(mob.getExplosiveReward());
                raf.writeInt(mob.getCharismaEXP());
                raf.writeInt(mob.getFlySpeed());
                raf.writeInt(mob.getWp());
                raf.writeInt(mob.getSummonEffect());
                raf.writeInt(mob.getFixedDamage());
                raf.writeInt(mob.getRemoveAfter());
                raf.writeInt(mob.getBodyDisease());
                raf.writeInt(mob.getBodyDiseaseLevel());
                raf.writeInt(mob.getPoint());
                raf.writeInt(mob.getPartyBonusR());
                raf.writeInt(mob.getPassiveDisease());
                raf.writeInt(mob.getCoolDamage());
                raf.writeInt(mob.getCoolDamageProb());
                raf.writeInt(mob.getDamageRecordQuest());
                raf.writeInt(mob.getSealedCooltime());
                raf.writeInt(mob.getWillEXP());
                raf.writeUTF(mob.getFixedMoveDir() == null ? "" : mob.getFixedMoveDir());
                raf.writeBoolean(mob.isSelfDestruction());
                raf.writeInt(mob.getSelfDestructionAction());
                raf.writeInt(mob.getSelfDestructionAfter());
                raf.writeBoolean(mob.isEscortMob());
                raf.writeBoolean(mob.isBanMap());
                if (mob.isBanMap()) {
                    raf.writeInt(mob.getBanType());
                    raf.writeInt(mob.getBanMsgType());
                    raf.writeUTF(mob.getBanMsg());
                    raf.writeShort(mob.getBanMapFields().size());
                    for (Tuple<Integer, String> banMap : mob.getBanMapFields()) {
                        raf.writeInt(banMap.getLeft());
                        raf.writeUTF(banMap.getRight());
                    }
                }
                raf.writeBoolean(mob.isPatrolMob());
                if (mob.isPatrolMob()) {
                    raf.writeInt(mob.getRange());
                    raf.writeInt(mob.getDetectX());
                    raf.writeInt(mob.getSenseX());
                }
                raf.writeShort(mob.getQuests().size());
                for (int i : mob.getQuests()) {
                    raf.writeInt(i);
                }
                raf.writeShort(mob.getRevives().size());
                for (int i : mob.getRevives()) {
                    raf.writeInt(i);
                }
                raf.writeShort(mob.getMobSet().size());
                for (int i : mob.getMobSet()) {
                    raf.writeInt(i);
                }
                raf.writeShort(mob.getParentMobSet().size());
                for (int i : mob.getParentMobSet()) {
                    raf.writeInt(i);
                }
                raf.writeShort(mob.getSkills().size());
                raf.writeShort(mob.getAttacks().size());
                List<MobSkill> all = mob.getSkills();
                all.addAll(mob.getAttacks());
                for (MobSkill ms : all) {
                    raf.writeInt(ms.getSkillIdx());
                    raf.writeInt(ms.getSkillID());
                    raf.writeByte(ms.getAction());
                    raf.writeInt(ms.getLevel());
                    raf.writeInt(ms.getEffectAfter());
                    raf.writeInt(ms.getSkillAfter());
                    raf.writeByte(ms.getPriority());
                    raf.writeBoolean(ms.isOnlyFsm());
                    raf.writeBoolean(ms.isOnlyOtherSkill());
                    raf.writeBoolean(ms.isDoFirst());
                    raf.writeBoolean(ms.isAfterDead());
                    raf.writeInt(ms.getSkillForbid());
                    raf.writeInt(ms.getAfterAttack());
                    raf.writeInt(ms.getAfterAttackCount());
                    raf.writeInt(ms.getAfterDelay());
                    raf.writeInt(ms.getFixDamR());
                    raf.writeInt(ms.getPreSkillIndex());
                    raf.writeInt(ms.getPreSkillCount());
                    raf.writeInt(ms.getCastTime());
                    raf.writeInt(ms.getCoolTime());
                    raf.writeInt(ms.getDelay());
                    raf.writeInt(ms.getUseLimit());
                    raf.writeInt(ms.getDisease());
                    raf.writeBoolean(ms.getRange() != null);
                    if(ms.getRange() != null) {
                        raf.writeInt(ms.getRange().getLeft());
                        raf.writeInt(ms.getRange().getTop());
                        raf.writeInt(ms.getRange().getRight());
                        raf.writeInt(ms.getRange().getBottom());
                    }
                    raf.writeUTF(ms.getInfo());
                    raf.writeUTF(ms.getText());
                    raf.writeUTF(ms.getSpeak());
                    raf.writeBoolean(ms.getCallSkillWithData() != null);
                    if (ms.getCallSkillWithData() != null) {
                        raf.writeInt(ms.getCallSkillWithData().getSkill());
                        raf.writeInt(ms.getCallSkillWithData().getLevel());
                        raf.writeInt(ms.getCallSkillWithData().getDelay());
                    }
                    raf.writeShort(ms.getCallSkills() == null ? 0 : ms.getCallSkills().size());
                    if(ms.getCallSkills() != null) {
                        for (var callSkill : ms.getCallSkills()){
                            raf.writeInt(callSkill.getSkill());
                            raf.writeInt(callSkill.getLevel());
                            raf.writeInt(callSkill.getDelay());
                        }
                    }
                }

                // Mob Zones
                raf.writeShort(mob.getMobZones().size());
                for (var entry : mob.getMobZones().entrySet()) {
                    var mobZoneId = entry.getKey();
                    var rect = entry.getValue();

                    raf.writeInt(mobZoneId);

                    raf.writeInt(rect.getLeft());
                    raf.writeInt(rect.getTop());
                    raf.writeInt(rect.getRight());
                    raf.writeInt(rect.getBottom());
                }

                //mob Transform
                MobTransformInfo transformInfo = mob.getTransformInfo();
                raf.writeBoolean(transformInfo != null);
                if(transformInfo != null){
                    raf.writeInt(transformInfo.getTransformCooltime());
                    raf.writeInt(transformInfo.getTransformHPTriggerOn());
                    raf.writeInt(transformInfo.getTransformHPTriggerOff());
                    raf.writeBoolean(transformInfo.isLinkHP());
                    List<Integer> transformTargets = transformInfo.getTransformTargets();
                    raf.writeShort(transformTargets.size());
                    for(int i = 0; i < transformTargets.size(); i++){
                        raf.writeInt(transformTargets.get(i));
                    }
                    Map<Integer, Tuple<Integer, Integer>> transformSkills = transformInfo.getTransformSkills();
                    raf.writeShort(transformSkills.size());
                    for(var entry : transformSkills.entrySet()){
                        raf.writeInt(entry.getKey());
                        raf.writeInt(entry.getValue().getLeft());
                        raf.writeInt(entry.getValue().getRight());
                    }
                }
            }
            IOHelper.writeOffsetTable(mobOffsets, raf);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static MobInfo loadMobFromFile(int id) {
        synchronized (lockObj) {
            if (mobOffsets == null) {
                mobOffsets = new HashMap<>();
                IOHelper.loadOffsets(mobOffsets, MOBS_FILE);
            }
        }

        if (!mobOffsets.containsKey(id)) {
            log.error("[MobData] Could not find mob " + id);
            return null;
        }

        MobInfo mob = null;
        try (RandomAccessFile raf = new RandomAccessFile(MOBS_FILE, IOHelper.READ_MODE)) {
            raf.seek(mobOffsets.get(id));
            mob = new MobInfo(raf.readInt());
            ForcedMobStat fms = mob.getForcedMobStat();
            fms.setLevel(raf.readInt());
            mob.setFirstAttack(raf.readInt());
            fms.setMaxHP(raf.readLong());
            fms.setMaxMP(raf.readLong());
            fms.setPad(raf.readInt());
            fms.setPdr(raf.readInt());
            fms.setMad(raf.readInt());
            fms.setMdr(raf.readInt());
            fms.setAcc(raf.readInt());
            fms.setEva(raf.readInt());
            fms.setPushed(raf.readLong());
            fms.setExp(raf.readLong());
            mob.setSummonType(raf.readInt());
            mob.setCategory(raf.readInt());
            mob.setMobType(raf.readUTF());
            mob.setLink(raf.readInt());
            fms.setSpeed(raf.readInt());
            mob.setFs(raf.readDouble());
            mob.setElemAttr(raf.readUTF());
            mob.setHpTagColor(raf.readInt());
            mob.setHpTagBgcolor(raf.readInt());
            mob.setHPgaugeHide(raf.readBoolean());
            mob.setBoss(raf.readBoolean());
            mob.setUndead(raf.readBoolean());
            mob.setNoRegen(raf.readBoolean());
            mob.setInvincible(raf.readBoolean());
            mob.setHideName(raf.readBoolean());
            mob.setHideHP(raf.readBoolean());
            mob.setChangeable(raf.readBoolean());
            mob.setNoFlip(raf.readBoolean());
            mob.setTower(raf.readBoolean());
            mob.setPartyBonusMob(raf.readBoolean());
            mob.setUseReaction(raf.readBoolean());
            mob.setPublicReward(raf.readBoolean());
            mob.setMinion(raf.readBoolean());
            mob.setForward(raf.readBoolean());
            mob.setRemoteRange(raf.readBoolean());
            mob.setIgnoreFieldOut(raf.readBoolean());
            mob.setIgnoreMoveImpact(raf.readBoolean());
            mob.setSkeleton(raf.readBoolean());
            mob.setHideUserDamage(raf.readBoolean());
            mob.setIndividualReward(raf.readBoolean());
            mob.setNotConsideredFieldSet(raf.readBoolean());
            mob.setNoDoom(raf.readBoolean());
            mob.setUseCreateScript(raf.readBoolean());
            mob.setBlockUserMove(raf.readBoolean());
            mob.setKnockback(raf.readBoolean());
            mob.setRemoveQuest(raf.readBoolean());
            mob.setOnFieldSetSummon(raf.readBoolean());
            mob.setUserControll(raf.readBoolean());
            mob.setNoDebuff(raf.readBoolean());
            mob.setTargetFromSvr(raf.readBoolean());
            mob.setChangeableMobType(raf.readUTF());
            mob.setRareItemDropLevel(raf.readInt());
            mob.setHpRecovery(raf.readInt());
            mob.setMpRecovery(raf.readInt());
            mob.setMbookID(raf.readInt());
            mob.setChaseSpeed(raf.readInt());
            mob.setExplosiveReward(raf.readInt());
            mob.setCharismaEXP(raf.readInt());
            mob.setFlySpeed(raf.readInt());
            mob.setWp(raf.readInt());
            mob.setSummonEffect(raf.readInt());
            mob.setFixedDamage(raf.readInt());
            mob.setRemoveAfter(raf.readInt());
            mob.setBodyDisease(raf.readInt());
            mob.setBodyDiseaseLevel(raf.readInt());
            mob.setPoint(raf.readInt());
            mob.setPartyBonusR(raf.readInt());
            mob.setPassiveDisease(raf.readInt());
            mob.setCoolDamage(raf.readInt());
            mob.setCoolDamageProb(raf.readInt());
            mob.setDamageRecordQuest(raf.readInt());
            mob.setSealedCooltime(raf.readInt());
            mob.setWillEXP(raf.readInt());
            mob.setFixedMoveDir(raf.readUTF());
            mob.setSelfDestruction(raf.readBoolean());
            mob.setSelfDestructionAction(raf.readInt());
            mob.setSelfDestructionAfter(raf.readInt());
            mob.setEscortMob(raf.readBoolean());
            boolean banMap = raf.readBoolean();
            if (banMap) {
                mob.setBanMap(true);
                mob.setBanType(raf.readInt());
                mob.setBanMsgType(raf.readInt());
                mob.setBanMsg(raf.readUTF());
                short size = raf.readShort();
                for (int i = 0; i < size; i++) {
                    mob.addBanMap(raf.readInt(), raf.readUTF());
                }
            }
            boolean patrolMob = raf.readBoolean();
            if (patrolMob) {
                mob.setPatrolMob(true);
                mob.setRange(raf.readInt());
                mob.setDetectX(raf.readInt());
                mob.setSenseX(raf.readInt());
            }
            short size = raf.readShort();
            for (int i = 0; i < size; i++) {
                mob.addQuest(raf.readInt());
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                mob.addRevive(raf.readInt());
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                mob.addMob(raf.readInt());
            }
            size = raf.readShort();
            for (int i = 0; i < size; i++) {
                mob.addParentMob(raf.readInt());
            }
            short skillSize = raf.readShort();
            short attackSize = raf.readShort();
            for (int i = 0; i < skillSize + attackSize; i++) {
                MobSkill ms = new MobSkill();
                ms.setSkillIdx(raf.readInt());
                ms.setSkillID(raf.readInt());
                ms.setAction(raf.readByte());
                ms.setLevel(raf.readInt());
                ms.setEffectAfter(raf.readInt());
                ms.setSkillAfter(raf.readInt());
                ms.setPriority(raf.readByte());
                ms.setOnlyFsm(raf.readBoolean());
                ms.setOnlyOtherSkill(raf.readBoolean());
                ms.setDoFirst(raf.readBoolean());
                ms.setAfterDead(raf.readBoolean());
                ms.setSkillForbid(raf.readInt());
                ms.setAfterAttack(raf.readInt());
                ms.setAfterAttackCount(raf.readInt());
                ms.setAfterDelay(raf.readInt());
                ms.setFixDamR(raf.readInt());
                ms.setPreSkillIndex(raf.readInt());
                ms.setPreSkillCount(raf.readInt());
                ms.setCastTime(raf.readInt());
                ms.setCoolTime(raf.readInt());
                ms.setDelay(raf.readInt());
                ms.setUseLimit(raf.readInt());
                ms.setDisease(raf.readInt());
                boolean hasRange = raf.readBoolean();
                if(hasRange) {
                    int left = raf.readInt();
                    int top = raf.readInt();
                    int right = raf.readInt();
                    int bottom = raf.readInt();
                    ms.setRange(new Rect(left, top, right, bottom));
                }
                ms.setInfo(raf.readUTF());
                ms.setText(raf.readUTF());
                ms.setSpeak(raf.readUTF());
                var hasCallSkill = raf.readBoolean();
                if (hasCallSkill) {
                    // skill, level, delay
                    ms.setCallSkillWithData(new CallSkillWithData(raf.readInt(), raf.readInt(), raf.readInt()));
                }
                int callskillSize = raf.readShort();
                if (callskillSize > 0) {
                    List<CallSkillWithData> callSkills = new ArrayList<>();
                    for (int j = 0; j < callskillSize; j++) {
                        CallSkillWithData skill = new CallSkillWithData();
                        skill.setSkill(raf.readInt());
                        skill.setLevel(raf.readInt());
                        skill.setDelay(raf.readInt());
                        callSkills.add(skill);
                    }
                    ms.setCallSkills(callSkills);
                }
                if (i < skillSize) {
                    mob.addSkill(ms);
                } else {
                    mob.addAttack(ms);
                }
            }

            // Mob Zone
            short mobZoneSize = raf.readShort();
            for (int i = 0; i < mobZoneSize; i++) {
                var mobZoneId = raf.readInt();

                var left = raf.readInt();
                var top = raf.readInt();
                var right = raf.readInt();
                var bottom = raf.readInt();
                var rect = new Rect(left, top, right, bottom);
                mob.addMobZone(mobZoneId, rect);
            }

            //Mob Transform
            boolean hasTransformInfo = raf.readBoolean();
            if(hasTransformInfo){
                MobTransformInfo transformInfo = new MobTransformInfo();
                transformInfo.setTransformCooltime(raf.readInt());
                transformInfo.setTransformHPTriggerOn(raf.readInt());
                transformInfo.setTransformHPTriggerOff(raf.readInt());
                transformInfo.setLinkHP(raf.readBoolean());
                int transformTargetSize = raf.readShort();
                List<Integer> transformTargets = new ArrayList<>();

                for(int i = 0; i < transformTargetSize; i++){
                    transformTargets.add(raf.readInt());
                }
                transformInfo.setTransformTargets(transformTargets);

                int transformSkillsSize = raf.readShort();
                Map<Integer, Tuple<Integer, Integer>> transformSkills = new HashMap<>();
                for(int i = 0; i < transformSkillsSize; i++){
                    int key = raf.readInt();
                    int left = raf.readInt();
                    int right = raf.readInt();
                    transformSkills.put(key, new Tuple<>(left, right));
                }
                transformInfo.setTransformSkills(transformSkills);
                mob.setTransformInfo(transformInfo);
            }

            addMob(mob);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return mob;
    }


    public static void loadMobsFromWz() {
        String[] wzDirs = new String[]{"/Mob.wz", "/Mob2.wz", "/Mob001.wz", "/Mob002.wz"};

        List<WzFile> files = new ArrayList<>();
        for (String dir : wzDirs) {
            WzFile fileDir = new WzFile(ServerConstants.WZ_DIR + dir);
            files.add(fileDir);
        }

        for (WzFile file : files) {
            for (WzObject<?, ?> idNode : file) {
                if (!Util.isNumber(idNode.getName().replace(".img", ""))) {
                    continue;
                }
                int id = Integer.parseInt(idNode.getName().replace(".img", ""));
                MobInfo mob = new MobInfo(id);
                ForcedMobStat fms = mob.getForcedMobStat();
                WzObject<?, ?> infoNode = idNode.getChild("info");
                fms.setPad(((WzProperty) infoNode.getChild("PADamage", 0)).getIntValue());
                fms.setLevel(((WzProperty) infoNode.getChild(1, "level", "Level")).getIntValue());
                mob.setFirstAttack(((WzProperty) infoNode.getChild(0, "firstattack", "firstAttack")).getIntValue());

                WzProperty hpProp = (WzProperty) infoNode.getChild(1337L, "finalmaxHP", "maxHP");
                if (hpProp.getPropertyType() == WzProperty.Type.COMPRESSED_LONG) {
                    fms.setMaxHP(((WzProperty<Long>) hpProp).getValue());
                } else if (hpProp.getPropertyType() == WzProperty.Type.STRING && !Util.isNumber(hpProp.getValue().toString())) {
                    fms.setMaxHP(1337);
                } else {
                    fms.setMaxHP(hpProp.getLongValue());
                }

                fms.setMaxMP(((WzProperty) infoNode.getChild("maxMP", 0)).getIntValue());
                fms.setPdr(((WzProperty) infoNode.getChild("PDRate", 0)).getIntValue());
                fms.setMad(((WzProperty) infoNode.getChild("MADamage", 0)).getIntValue());
                fms.setMdr(((WzProperty) infoNode.getChild("MDRate", 0)).getIntValue());
                fms.setAcc(((WzProperty) infoNode.getChild("acc", 0)).getIntValue());
                fms.setEva(((WzProperty) infoNode.getChild("eva", 0)).getIntValue());
                WzProperty pushedProp = ((WzProperty) infoNode.getChild("pushed", "1"));
                if (pushedProp.getPropertyType() == WzProperty.Type.STRING) {
                    fms.setPushed(Long.parseLong(((WzProperty<String>) pushedProp).getValue()));
                } else {
                    fms.setPushed(pushedProp.getIntValue());
                }
                fms.setExp(((WzProperty) infoNode.getChild("exp", 0)).getIntValue());
                mob.setSummonType(((WzProperty) infoNode.getChild("summonType", 0)).getIntValue());
                mob.setCategory(((WzProperty) infoNode.getChild("category", 0)).getIntValue());
                mob.setMobType(((WzProperty<String>) infoNode.getChild("mobType", "")).getValue());
                mob.setLink(((WzProperty) infoNode.getChild("link", 0)).getIntValue());
                fms.setSpeed(((WzProperty) infoNode.getChild(0, "speed", "Speed")).getIntValue());

                // MobZones
                WzObject<?, ?> mobZoneNode = infoNode.getChild("mobZone");
                if (mobZoneNode != null) {
                    for (WzObject<?, ?> mobZone : mobZoneNode) {
                        int mobZoneId = 0;
                        String mobZoneIdString = mobZone.getName();
                        if (!Util.isNumber(mobZoneIdString)) {
                            continue;
                        }
                        mobZoneId = Integer.parseInt(mobZoneIdString);

                        if (mobZone.hasChild("lt") && mobZone.hasChild("rb")) {
                            WzProperty<Point> ltProp = (WzProperty<Point>) mobZone.getChild("lt");
                            WzProperty<Point> rbProp = (WzProperty<Point>) mobZone.getChild("rb");
                            mob.addMobZone(mobZoneId, new Rect(ltProp.getValue(), rbProp.getValue()));
                        }

                    }
                }

                WzProperty fsProp = ((WzProperty) infoNode.getChild("fs", 0f));
                if (fsProp.getPropertyType() == WzProperty.Type.BYTE_FLOAT) {
                    mob.setFs(((WzProperty<Float>) fsProp).getValue());
                } else if (fsProp.getPropertyType() == WzProperty.Type.DOUBLE) {
                    mob.setFs(((WzProperty<Double>) fsProp).getValue());
                } else {
                    mob.setFs(fsProp.getIntValue());
                }
                mob.setElemAttr(((WzProperty<String>) infoNode.getChild("elemAttr", "")).getValue());
                mob.setHpTagColor(((WzProperty) infoNode.getChild("hpTagColor", 0)).getIntValue());
                mob.setHpTagBgcolor(((WzProperty) infoNode.getChild("hpTagBgcolor", 0)).getIntValue());
                mob.setHPgaugeHide(((WzProperty) infoNode.getChild("HPgaugeHide", 0)).getIntValue() != 0);
                mob.setBoss(((WzProperty) infoNode.getChild("boss", 0)).getIntValue() != 0);
                mob.setUndead(((WzProperty) infoNode.getChild(0, "undead", "Undead")).getIntValue() != 0);
                mob.setNoRegen(((WzProperty) infoNode.getChild("noregen", 0)).getIntValue() != 0);
                mob.setInvincible(((WzProperty) infoNode.getChild(0, "invincible", "invincibe")).getIntValue() != 0);
                mob.setHideName(((WzProperty) infoNode.getChild(0, "hideName", "hidename")).getIntValue() != 0);
                mob.setHideHP(((WzProperty) infoNode.getChild("hideHP", 0)).getIntValue() != 0);
                mob.setChangeable(((WzProperty) infoNode.getChild("changeableMob", 0)).getIntValue() != 0);
                mob.setNoFlip(((WzProperty) infoNode.getChild("noFlip", 0)).getIntValue() != 0);
                mob.setTower(((WzProperty) infoNode.getChild("tower", 0)).getIntValue() != 0);
                mob.setPartyBonusMob(((WzProperty) infoNode.getChild("partyBonusMob", 0)).getIntValue() != 0);
                mob.setUseReaction(((WzProperty) infoNode.getChild("useReaction", 0)).getIntValue() != 0);
                mob.setPublicReward(((WzProperty) infoNode.getChild("publicReward", 0)).getIntValue() != 0);
                mob.setMinion(((WzProperty) infoNode.getChild("minion", 0)).getIntValue() != 0);
                mob.setForward(((WzProperty) infoNode.getChild("forward", 0)).getIntValue() != 0);
                mob.setIsRemoteRange(((WzProperty) infoNode.getChild("isRemoteRange", 0)).getIntValue() != 0);
                mob.setIgnoreFieldOut(((WzProperty) infoNode.getChild("ignoreFieldOut", 0)).getIntValue() != 0);
                mob.setIgnoreMoveImpact(((WzProperty) infoNode.getChild("ignoreMoveImpact", 0)).getIntValue() != 0);
                mob.setSkeleton(((WzProperty) infoNode.getChild("skeleton", 0)).getIntValue() != 0);
                mob.setHideUserDamage(((WzProperty) infoNode.getChild("hideUserDamage", 0)).getIntValue() != 0);
                mob.setIndividualReward(((WzProperty) infoNode.getChild("individualReward", 0)).getIntValue() != 0);
                mob.setNotConsideredFieldSet(((WzProperty) infoNode.getChild("notConsideredFieldSet", 0)).getIntValue() != 0);
                mob.setNoDoom(((WzProperty) infoNode.getChild("noDoom", 0)).getIntValue() != 0);
                mob.setUseCreateScript(((WzProperty) infoNode.getChild("useCreateScript", 0)).getIntValue() != 0);
                mob.setBlockUserMove(((WzProperty) infoNode.getChild("blockUserMove", 0)).getIntValue() != 0);
                mob.setKnockback(((WzProperty) infoNode.getChild("knockback", 0)).getIntValue() != 0);
                mob.setRemoveQuest(((WzProperty) infoNode.getChild("removeQuest", 0)).getIntValue() != 0);
                mob.setOnFieldSetSummon(((WzProperty) infoNode.getChild("onFieldSetSummon", 0)).getIntValue() != 0);
                mob.setUserControll(((WzProperty) infoNode.getChild("userControll", 0)).getIntValue() != 0);
                mob.setNoDebuff(((WzProperty) infoNode.getChild("noDebuff", 0)).getIntValue() != 0);
                mob.setTargetFromSvr(((WzProperty) infoNode.getChild("targetFromSvr", 0)).getIntValue() != 0);
                mob.setChangeableMobType(((WzProperty<String>) infoNode.getChild("changeableMob_Type", "")).getValue());
                mob.setRareItemDropLevel(((WzProperty) infoNode.getChild("rareItemDropLevel", 0)).getIntValue());
                mob.setHpRecovery(((WzProperty) infoNode.getChild("hpRecovery", 0)).getIntValue());
                mob.setMpRecovery(((WzProperty) infoNode.getChild("mpRecovery", 0)).getIntValue());
                mob.setMbookID(((WzProperty) infoNode.getChild("mbookID", 0)).getIntValue());
                mob.setChaseSpeed(((WzProperty) infoNode.getChild("chaseSpeed", 0)).getIntValue());
                mob.setExplosiveReward(((WzProperty) infoNode.getChild("explosiveReward", 0)).getIntValue());
                mob.setCharismaEXP(((WzProperty) infoNode.getChild("charismaEXP", 0)).getIntValue());
                mob.setFlySpeed(((WzProperty) infoNode.getChild(0, "flyspeed", "flySpeed", "FlySpeed")).getIntValue());
                mob.setWp(((WzProperty) infoNode.getChild("wp", 0)).getIntValue());
                mob.setSummonEffect(((WzProperty) infoNode.getChild("summonEffect", 0)).getIntValue());
                mob.setFixedDamage(((WzProperty) infoNode.getChild("fixedDamage", 0)).getIntValue());
                mob.setRemoveAfter(((WzProperty) infoNode.getChild("removeAfter", 0)).getIntValue());
                mob.setBodyDisease(((WzProperty) infoNode.getChild("bodyDisease", 0)).getIntValue());
                mob.setBodyDiseaseLevel(((WzProperty) infoNode.getChild("bodyDiseaseLevel", 0)).getIntValue());
                mob.setPoint(((WzProperty) infoNode.getChild("point", 0)).getIntValue());
                mob.setPartyBonusR(((WzProperty) infoNode.getChild("partyBonusR", 0)).getIntValue());
                mob.setPassiveDisease(((WzProperty) infoNode.getChild("PassiveDisease", 0)).getIntValue());
                mob.setCoolDamage(((WzProperty) infoNode.getChild("coolDamage", 0)).getIntValue());
                mob.setCoolDamageProb(((WzProperty) infoNode.getChild("coolDamageProb", 0)).getIntValue());
                mob.setDamageRecordQuest(((WzProperty) infoNode.getChild("damageRecordQuest", 0)).getIntValue());
                mob.setSealedCooltime(((WzProperty) infoNode.getChild("sealedCooltime", 0)).getIntValue());
                mob.setWillEXP(((WzProperty) infoNode.getChild("willEXP", 0)).getIntValue());
                mob.setFixedMoveDir(((WzProperty) infoNode.getChild("fixedMoveDir", "")).getValue().toString());

                WzObject<?, ?> patrolNode = infoNode.getChild("patrol");
                if (patrolNode != null) {
                    mob.setPatrolMob(true);
                    mob.setRange(((WzProperty) patrolNode.getChild("range", 0)).getIntValue());
                    mob.setDetectX(((WzProperty) patrolNode.getChild("detectX", 0)).getIntValue());
                    mob.setSenseX(((WzProperty) patrolNode.getChild("senseX", 0)).getIntValue());
                }

                WzObject<?, ?> banNode = infoNode.getChild("ban");
                if (banNode != null) {
                    mob.setBanMap(true);
                    mob.setBanType(((WzProperty) banNode.getChild("banType", 0)).getIntValue());
                    mob.setBanMsgType(((WzProperty) banNode.getChild("banMsgType", 0)).getIntValue());
                    mob.setBanMsg(((WzProperty<String>) banNode.getChild("banMsg", "")).getValue());
                    WzObject<?, ?> banMapNode = banNode.getChild("banMap");
                    for (WzObject<?, ?> banMapId : banMapNode) {
                        int banFieldId = ((WzProperty) banMapId.getChild("field", 0)).getIntValue();
                        String banPortalId = ((WzProperty<String>) banMapId.getChild("portal", "")).getValue();
                        if (banFieldId != 0) {
                            mob.addBanMap(banFieldId, banPortalId);
                        }
                    }
                }

                WzObject<?, ?> reviveNode = infoNode.getChild("revive");
                if (reviveNode != null) {
                    for (WzObject<?, ?> reviveId : reviveNode) {
                        WzProperty reviveProp = (WzProperty) reviveId;
                        if (reviveProp.getValue() != null) {
                            mob.addRevive(reviveProp.getIntValue());
                        }
                    }
                }

                String[] attackSkill = new String[]{"skill", "attack"};
                for (String name : attackSkill) {
                    boolean attack = name.equals("attack");
                    WzObject<?, ?> skillInfoNode = infoNode.getChild(name);
                    if (skillInfoNode != null) {
                        for (WzObject<?, ?> skillNode : skillInfoNode) {
                            if (!Util.isNumber(skillNode.getName())) {
                                continue;
                            }
                            MobSkill mobSkill = new MobSkill();
                            mobSkill.setSkillIdx(Integer.parseInt(skillNode.getName()));
                            mobSkill.setSkillID(((WzProperty) skillNode.getChild("skill", 0)).getIntValue());
                            mobSkill.setAction((byte) ((WzProperty) skillNode.getChild("action", 0)).getIntValue());
                            mobSkill.setLevel(((WzProperty) skillNode.getChild("level", 0)).getIntValue());
                            mobSkill.setEffectAfter(((WzProperty) skillNode.getChild("effectAfter", 0)).getIntValue());
                            mobSkill.setSkillAfter(((WzProperty) skillNode.getChild("skillAfter", 0)).getIntValue());
                            mobSkill.setPriority((byte) ((WzProperty) skillNode.getChild("priority", 0)).getIntValue());
                            mobSkill.setOnlyFsm(((WzProperty) skillNode.getChild("onlyFsm", 0)).getIntValue() != 0);
                            mobSkill.setOnlyOtherSkill(((WzProperty) skillNode.getChild("onlyOtherSkill", 0)).getIntValue() != 0);
                            mobSkill.setDoFirst(((WzProperty) skillNode.getChild("doFirst", 0)).getIntValue() != 0);
                            mobSkill.setAfterDead(((WzProperty) skillNode.getChild("afterDead", 0)).getIntValue() != 0);
                            mobSkill.setSkillForbid(((WzProperty) skillNode.getChild("skillForbid", 0)).getIntValue());
                            mobSkill.setAfterAttack(((WzProperty) skillNode.getChild("afterAttack", 0)).getIntValue());
                            mobSkill.setAfterAttackCount(((WzProperty) skillNode.getChild("afterAttackCount", 0)).getIntValue());
                            mobSkill.setAfterDelay(((WzProperty) skillNode.getChild("afterDelay", 0)).getIntValue());
                            mobSkill.setFixDamR(((WzProperty) skillNode.getChild("fixDamR", 0)).getIntValue());
                            mobSkill.setPreSkillIndex(((WzProperty) skillNode.getChild("preSkillIndex", 0)).getIntValue());
                            mobSkill.setPreSkillCount(((WzProperty) skillNode.getChild("preSkillCount", 0)).getIntValue());
                            mobSkill.setCastTime(((WzProperty) skillNode.getChild("castTime", 0)).getIntValue());
                            mobSkill.setCoolTime(((WzProperty) skillNode.getChild("cooltime", 0)).getIntValue());
                            mobSkill.setDelay(((WzProperty) skillNode.getChild("delay", 0)).getIntValue());
                            mobSkill.setUseLimit(((WzProperty) skillNode.getChild("useLimit", 0)).getIntValue());
                            mobSkill.setDisease(((WzProperty) skillNode.getChild("disease", 0)).getIntValue());
                            mobSkill.setInfo(((WzProperty<String>) skillNode.getChild("info", "")).getValue());
                            mobSkill.setText(((WzProperty<String>) skillNode.getChild("text", "")).getValue());
                            mobSkill.setSpeak(((WzProperty<String>) skillNode.getChild("speak", "")).getValue());

                            var callSkillWithDataNode = skillNode.getChild("callSkillWithData");
                            if (callSkillWithDataNode != null) {
                                var skill = ((WzProperty<Integer>) callSkillWithDataNode.getChild("skill", 0)).getValue();
                                var level = ((WzProperty<Integer>) callSkillWithDataNode.getChild("level", 0)).getValue();
                                var delay = ((WzProperty<Integer>) callSkillWithDataNode.getChild("delay", 0)).getValue();

                                mobSkill.setCallSkillWithData(new CallSkillWithData(skill, level, delay));
                            }

                            var callSkillNode = skillNode.getChild("callSkill");
                            if(callSkillNode != null) {
                                List<CallSkillWithData> skills = new ArrayList<>();
                                for (WzObject<?, ?> callskill : callSkillNode) {
                                    if (!Util.isNumber(callskill.getName())) {
                                        continue;
                                    }
                                    CallSkillWithData skill = new CallSkillWithData();
                                    skill.setSkill(((WzProperty<Integer>) callskill.getChild("skill", 0)).getValue());
                                    skill.setLevel(((WzProperty<Integer>) callskill.getChild("level", 0)).getValue());
                                    skill.setDelay(((WzProperty<Integer>) callskill.getChild("delay", 0)).getValue());
                                    skills.add(skill);
                                }
                                mobSkill.setCallSkills(skills);
                            }

                            //Additional attack info, used for queen
                            var attackNode = idNode.getChild("attack" + Integer.toString(mobSkill.getSkillIdx() + 1));
                            if(attackNode != null){
                                var additionalAttackInfoNode = attackNode.getChild("info");
                                if(additionalAttackInfoNode != null){
                                    var attackRangeNode = additionalAttackInfoNode.getChild("range");
                                    if(attackRangeNode != null){
                                        WzProperty<Point> lt = (WzProperty<Point>) attackRangeNode.getChild("lt");
                                        WzProperty<Point> rb = (WzProperty<Point>) attackRangeNode.getChild("rb");
                                        if(lt != null && rb != null) {
                                            mobSkill.setRange(new Rect(lt.getValue(), rb.getValue()));
                                        }
                                    }
                                }
                            }

                            if (attack) {
                                mob.addAttack(mobSkill);
                            } else {
                                mob.addSkill(mobSkill);
                            }
                        }
                    }
                }

                WzObject<?, ?> selfDestruct = infoNode.getChild("selfDestruction");
                if (selfDestruct != null) {
                    mob.setSelfDestruction(true);
                    mob.setSelfDestructionAction(((WzProperty) selfDestruct.getChild("action", 0)).getIntValue());
                    mob.setSelfDestructionAfter(((WzProperty) selfDestruct.getChild("removeAfter", 0)).getIntValue());
                }
                mob.setEscortMob(((WzProperty) infoNode.getChild("escort", 0)).getIntValue() != 0);

                WzObject<?, ?> transform = infoNode.getChild("trans");
                MobTransformInfo transformInfo = null;
                List<Integer> transformTargets = new ArrayList<>();
                if(transform != null){
                    transformInfo = new MobTransformInfo();

                    for(WzObject<?, ?> node : transform){
                        if(Util.isNumber(node.getName())){
                            transformTargets.add(((WzProperty)node).getIntValue());
                        }
                    }
                    transformInfo.setTransformTargets(transformTargets);

                    transformInfo.setTransformCooltime(((WzProperty)infoNode.getChild("cooltime", 0)).getIntValue());
                    transformInfo.setTransformHPTriggerOn(((WzProperty)infoNode.getChild("hpTriggerOn", 100)).getIntValue());
                    transformInfo.setTransformHPTriggerOff(((WzProperty)infoNode.getChild("hpTriggerOff", 0)).getIntValue());
                    transformInfo.setLinkHP(((WzProperty)infoNode.getChild("linkHP", 0)).getIntValue() == 1);

                    WzObject<?, ?> skills = infoNode.getChild("skill");
                    if(skills != null){
                        Map<Integer, Tuple<Integer, Integer>> transformSkills = new HashMap<>();
                        for(WzObject<?, ?> node : skills){
                            int slv = ((WzProperty)node.getChild("level", 0)).getIntValue();
                            int skillID = ((WzProperty)node.getChild("skill", 0)).getIntValue();
                            transformSkills.put(Integer.valueOf(node.getName()), new Tuple<>(skillID, slv));
                        }
                        transformInfo.setTransformSkills(transformSkills);
                    }
                    mob.setTransformInfo(transformInfo);
                }

                getMobs().put(mob.getTemplateId(), mob);
                idNode.clear();
            }
        }

        // Quest count group
        WzObject<?, ?> qcg = files.get(0).getChild("QuestCountGroup");
        for (WzObject<?, ?> qcgNode : qcg) {
            int id = Integer.parseInt(qcgNode.getName().replace(".img", ""));
            MobInfo mob = getMobs().get(id);
            if (mob == null) {
                mob = new MobInfo(id);
                addMob(mob);
            }
            var infoNode = qcgNode.getChild("info");
            if (infoNode != null) {
                for (WzObject<?, ?> idNode : infoNode) {
                    WzProperty prop = (WzProperty) idNode;
                    if (Util.isNumber(prop.getName()) && prop.getValue() != null) {
                        mob.addMob(prop.getIntValue());
                    }
                }
            }
        }

        for (MobInfo mob : getMobs().values()) {
            for (int childId : mob.getMobSet()) {
                MobInfo child = getMobs().get(childId);
                if (child != null) {
                    child.addParentMob(mob.getTemplateId());
                }
            }
        }
    }


    public static void main(String[] args) {
        generateDatFiles();
    }

    public static void clear() {
        getMobs().clear();
        if (mobOffsets != null) {
            mobOffsets = null;
        }
    }
}
