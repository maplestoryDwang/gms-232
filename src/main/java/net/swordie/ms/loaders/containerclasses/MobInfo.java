package net.swordie.ms.loaders.containerclasses;


import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.BossCooldown;
import net.swordie.ms.enums.customscripts.CustomMobDeathScript;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.ForcedMobStat;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.loaders.DropData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.container.Tuple;

import java.util.*;

public class MobInfo {


    private int templateId;
    private ForcedMobStat forcedMobStat;
    private int firstAttack;
    private int summonType;
    private int category;
    private String mobType;
    private int link;
    private double fs;
    private String elemAttr;
    private int hpTagColor;
    private int hpTagBgcolor;
    private boolean HPgaugeHide;
    private boolean boss;
    private boolean undead;
    private boolean noRegen;
    private boolean invincible;
    private boolean hideName;
    private boolean hideHP;
    private boolean changeable;
    private boolean noFlip;
    private boolean tower;
    private boolean partyBonusMob;
    private boolean useReaction;
    private boolean publicReward;
    private boolean minion;
    private boolean forward;
    private boolean remoteRange;
    private boolean ignoreFieldOut;
    private boolean ignoreMoveImpact;
    private boolean skeleton;
    private boolean hideUserDamage;
    private boolean individualReward;
    private boolean notConsideredFieldSet;
    private boolean noDoom;
    private boolean useCreateScript;
    private boolean blockUserMove;
    private boolean knockback;
    private boolean removeQuest;
    private boolean onFieldSetSummon;
    private boolean userControll;
    private boolean noDebuff;
    private boolean targetFromSvr;
    private String changeableMobType;
    private int rareItemDropLevel;
    private int hpRecovery;
    private int mpRecovery;
    private int mbookID;
    private int chaseSpeed;
    private int explosiveReward;
    private int charismaEXP;
    private int flySpeed;
    private int wp;
    private int summonEffect;
    private int fixedDamage;
    private int removeAfter;
    private int bodyDisease;
    private int bodyDiseaseLevel;
    private int point;
    private int partyBonusR;
    private int passiveDisease;
    private int coolDamage;
    private int coolDamageProb;
    private int damageRecordQuest;
    private int sealedCooltime;
    private int willEXP;
    private String fixedMoveDir;
    private boolean selfDestruction;
    private int selfDestructionAction;
    private int selfDestructionAfter;
    private boolean escortMob;
    private boolean isBanMap;
    private int banType;
    private int banMsgType;
    private String banMsg;
    private List<Tuple<Integer, String>> banMapFields = new ArrayList<>();// field, portal name
    private boolean patrolMob;
    private int range;
    private int detectX;
    private int senseX;
    private boolean isRemoteRange;
    private List<MobSkill> skills = new ArrayList<>();
    private List<MobSkill> attacks = new ArrayList<>();
    private Set<Integer> quests = new HashSet<>();
    private Set<Integer> revives = new HashSet<>();
    private Set<Integer> mobSet = new HashSet<>(); // for quests: a list of mobs
    private Set<Integer> parentMobSet = new HashSet<>(); // for quests: which mobs this mob corresponds to
    private Map<Integer, Rect> mobZones = new HashMap<>(); // mobZones such as Magnus' Blue shield
    private Position homePosition;
    private String lifeType;
    private int x;
    private int y;
    private Position position;
    private int mobTime;
    private boolean flip;
    private boolean hide;
    private int fh;
    private int cy;
    private int rx0;
    private int rx1;
    private String limitedName;
    private boolean useDay;
    private boolean useNight;
    private boolean hold;
    private boolean noFoothold;
    private boolean dummy;
    private boolean spine;
    private boolean mobTimeOnDie;
    private int regenStart;
    private int mobAliveReq;
    private MobTransformInfo transformInfo = null;

    private String deathScript;
    private BossCooldown bossCooldown;

    public MobInfo(int templateId) {
        this.templateId = templateId;
        this.deathScript = CustomMobDeathScript.getScriptNameByTemplateId(templateId);
        this.forcedMobStat = new ForcedMobStat();
        this.bossCooldown = BossCooldown.byTemplateId(templateId);
    }

    public Mob toMob() {
        Mob mob = new Mob(getTemplateId());
        var fms = getForcedMobStat();

        mob.setForcedMobStat(getForcedMobStat().deepCopy());
        mob.setLifeType(getLifeType());
        mob.setTemplateId(getTemplateId());
        mob.setX(getX());
        mob.setY(getY());
        mob.setMobTime(getMobTime());
        mob.setFh(getFh());
        mob.setCy(getCy());
        mob.setRx0(getRx0());
        mob.setRx1(getRx1());
        mob.setLimitedName(getLimitedName());
        mob.setRegenStart(getRegenStart());
        mob.setMobAliveReq(getMobAliveReq());

        mob.setPosition(getHomePosition().deepCopy());

        mob.setAppearType((byte) -2); // new spawn
        mob.setAfterAttack(-1);
        mob.setCurrentAction(-1);
        mob.setEliteGrade(-1);
        mob.setMoveAction((byte) 5); // normal monster?
        mob.setHp(fms.getMaxHP());
        mob.setMaxHp(fms.getMaxHP());
        mob.setMp(fms.getMaxMP());
        mob.setMaxMp(fms.getMaxMP());
        mob.setDrops(new HashSet<>(DropData.getDropInfoByID(mob.getTemplateId())));
        mob.getDrops().add(new DropInfo(GameConstants.MAX_DROP_CHANCE,
                GameConstants.MIN_MONEY_MULT * mob.getForcedMobStat().getLevel(),
                GameConstants.MAX_MONEY_MULT * mob.getForcedMobStat().getLevel()
        ));
        for (DropInfo di : mob.getDrops()) {
            di.generateNextDrop();
        }
        mob.setNextSummonPossible(GameConstants.MOB_RESUMMON_COOLDOWN);

        return mob;
    }

    public int getTemplateId() {
        return templateId;
    }

    public void setTemplateId(int templateId) {
        this.templateId = templateId;
    }

    public ForcedMobStat getForcedMobStat() {
        return forcedMobStat;
    }

    public int getFirstAttack() {
        return firstAttack;
    }

    public void setFirstAttack(int firstAttack) {
        this.firstAttack = firstAttack;
    }

    public int getSummonType() {
        return summonType;
    }

    public void setSummonType(int summonType) {
        this.summonType = summonType;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public String getMobType() {
        return mobType;
    }

    public void setMobType(String mobType) {
        this.mobType = mobType;
    }

    public int getLink() {
        return link;
    }

    public void setLink(int link) {
        this.link = link;
    }

    public double getFs() {
        return fs;
    }

    public void setFs(double fs) {
        this.fs = fs;
    }

    public String getElemAttr() {
        return elemAttr;
    }

    public void setElemAttr(String elemAttr) {
        this.elemAttr = elemAttr;
    }

    public int getHpTagColor() {
        return hpTagColor;
    }

    public void setHpTagColor(int hpTagColor) {
        this.hpTagColor = hpTagColor;
    }

    public int getHpTagBgcolor() {
        return hpTagBgcolor;
    }

    public void setHpTagBgcolor(int hpTagBgcolor) {
        this.hpTagBgcolor = hpTagBgcolor;
    }

    public boolean isHPgaugeHide() {
        return HPgaugeHide;
    }

    public void setHPgaugeHide(boolean hPgaugeHide) {
        this.HPgaugeHide = hPgaugeHide;
    }

    public boolean isBoss() {
        return boss;
    }

    public void setBoss(boolean boss) {
        this.boss = boss;
    }

    public boolean isUndead() {
        return undead;
    }

    public void setUndead(boolean undead) {
        this.undead = undead;
    }

    public boolean isNoRegen() {
        return noRegen;
    }

    public void setNoRegen(boolean noRegen) {
        this.noRegen = noRegen;
    }

    public boolean isInvincible() {
        return invincible;
    }

    public void setInvincible(boolean invincible) {
        this.invincible = invincible;
    }

    public boolean isHideName() {
        return hideName;
    }

    public void setHideName(boolean hideName) {
        this.hideName = hideName;
    }

    public boolean isHideHP() {
        return hideHP;
    }

    public void setHideHP(boolean hideHP) {
        this.hideHP = hideHP;
    }

    public boolean isChangeable() {
        return changeable;
    }

    public void setChangeable(boolean changeable) {
        this.changeable = changeable;
    }

    public boolean isNoFlip() {
        return noFlip;
    }

    public void setNoFlip(boolean noFlip) {
        this.noFlip = noFlip;
    }

    public boolean isTower() {
        return tower;
    }

    public void setTower(boolean tower) {
        this.tower = tower;
    }

    public boolean isPartyBonusMob() {
        return partyBonusMob;
    }

    public void setPartyBonusMob(boolean partyBonusMob) {
        this.partyBonusMob = partyBonusMob;
    }

    public boolean isUseReaction() {
        return useReaction;
    }

    public void setUseReaction(boolean useReaction) {
        this.useReaction = useReaction;
    }

    public boolean isPublicReward() {
        return publicReward;
    }

    public void setPublicReward(boolean publicReward) {
        this.publicReward = publicReward;
    }

    public boolean isMinion() {
        return minion;
    }

    public void setMinion(boolean minion) {
        this.minion = minion;
    }

    public boolean isForward() {
        return forward;
    }

    public void setForward(boolean forward) {
        this.forward = forward;
    }

    public boolean isRemoteRange() {
        return remoteRange;
    }

    public void setRemoteRange(boolean remoteRange) {
        this.remoteRange = remoteRange;
    }

    public boolean isIgnoreFieldOut() {
        return ignoreFieldOut;
    }

    public void setIgnoreFieldOut(boolean ignoreFieldOut) {
        this.ignoreFieldOut = ignoreFieldOut;
    }

    public boolean isIgnoreMoveImpact() {
        return ignoreMoveImpact;
    }

    public void setIgnoreMoveImpact(boolean ignoreMoveImpact) {
        this.ignoreMoveImpact = ignoreMoveImpact;
    }

    public boolean isSkeleton() {
        return skeleton;
    }

    public void setSkeleton(boolean skeleton) {
        this.skeleton = skeleton;
    }

    public boolean isHideUserDamage() {
        return hideUserDamage;
    }

    public void setHideUserDamage(boolean hideUserDamage) {
        this.hideUserDamage = hideUserDamage;
    }

    public boolean isIndividualReward() {
        return individualReward;
    }

    public void setIndividualReward(boolean individualReward) {
        this.individualReward = individualReward;
    }

    public boolean isNotConsideredFieldSet() {
        return notConsideredFieldSet;
    }

    public void setNotConsideredFieldSet(boolean notConsideredFieldSet) {
        this.notConsideredFieldSet = notConsideredFieldSet;
    }

    public boolean isNoDoom() {
        return noDoom;
    }

    public void setNoDoom(boolean noDoom) {
        this.noDoom = noDoom;
    }

    public boolean isUseCreateScript() {
        return useCreateScript;
    }

    public void setUseCreateScript(boolean useCreateScript) {
        this.useCreateScript = useCreateScript;
    }

    public boolean isBlockUserMove() {
        return blockUserMove;
    }

    public void setBlockUserMove(boolean blockUserMove) {
        this.blockUserMove = blockUserMove;
    }

    public boolean isKnockback() {
        return knockback;
    }

    public void setKnockback(boolean knockback) {
        this.knockback = knockback;
    }

    public boolean isRemoveQuest() {
        return removeQuest;
    }

    public void setRemoveQuest(boolean removeQuest) {
        this.removeQuest = removeQuest;
    }

    public boolean isOnFieldSetSummon() {
        return onFieldSetSummon;
    }

    public void setOnFieldSetSummon(boolean onFieldSetSummon) {
        this.onFieldSetSummon = onFieldSetSummon;
    }

    public boolean isUserControll() {
        return userControll;
    }

    public void setUserControll(boolean userControll) {
        this.userControll = userControll;
    }

    public boolean isNoDebuff() {
        return noDebuff;
    }

    public void setNoDebuff(boolean noDebuff) {
        this.noDebuff = noDebuff;
    }

    public boolean isTargetFromSvr() {
        return targetFromSvr;
    }

    public void setTargetFromSvr(boolean targetFromSvr) {
        this.targetFromSvr = targetFromSvr;
    }

    public String getChangeableMobType() {
        return changeableMobType;
    }

    public void setChangeableMobType(String changeableMobType) {
        this.changeableMobType = changeableMobType;
    }

    public int getRareItemDropLevel() {
        return rareItemDropLevel;
    }

    public void setRareItemDropLevel(int rareItemDropLevel) {
        this.rareItemDropLevel = rareItemDropLevel;
    }

    public int getHpRecovery() {
        return hpRecovery;
    }

    public void setHpRecovery(int hpRecovery) {
        this.hpRecovery = hpRecovery;
    }

    public int getMpRecovery() {
        return mpRecovery;
    }

    public void setMpRecovery(int mpRecovery) {
        this.mpRecovery = mpRecovery;
    }

    public int getMbookID() {
        return mbookID;
    }

    public void setMbookID(int mbookID) {
        this.mbookID = mbookID;
    }

    public int getChaseSpeed() {
        return chaseSpeed;
    }

    public void setChaseSpeed(int chaseSpeed) {
        this.chaseSpeed = chaseSpeed;
    }

    public int getExplosiveReward() {
        return explosiveReward;
    }

    public void setExplosiveReward(int explosiveReward) {
        this.explosiveReward = explosiveReward;
    }

    public int getCharismaEXP() {
        return charismaEXP;
    }

    public void setCharismaEXP(int charismaEXP) {
        this.charismaEXP = charismaEXP;
    }

    public int getFlySpeed() {
        return flySpeed;
    }

    public void setFlySpeed(int flySpeed) {
        this.flySpeed = flySpeed;
    }

    public int getWp() {
        return wp;
    }

    public void setWp(int wp) {
        this.wp = wp;
    }

    public int getSummonEffect() {
        return summonEffect;
    }

    public void setSummonEffect(int summonEffect) {
        this.summonEffect = summonEffect;
    }

    public int getFixedDamage() {
        return fixedDamage;
    }

    public void setFixedDamage(int fixedDamage) {
        this.fixedDamage = fixedDamage;
    }

    public int getRemoveAfter() {
        return removeAfter;
    }

    public void setRemoveAfter(int removeAfter) {
        this.removeAfter = removeAfter;
    }

    public int getBodyDisease() {
        return bodyDisease;
    }

    public void setBodyDisease(int bodyDisease) {
        this.bodyDisease = bodyDisease;
    }

    public int getBodyDiseaseLevel() {
        return bodyDiseaseLevel;
    }

    public void setBodyDiseaseLevel(int bodyDiseaseLevel) {
        this.bodyDiseaseLevel = bodyDiseaseLevel;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public int getPartyBonusR() {
        return partyBonusR;
    }

    public void setPartyBonusR(int partyBonusR) {
        this.partyBonusR = partyBonusR;
    }

    public int getPassiveDisease() {
        return passiveDisease;
    }

    public void setPassiveDisease(int passiveDisease) {
        this.passiveDisease = passiveDisease;
    }

    public int getCoolDamage() {
        return coolDamage;
    }

    public void setCoolDamage(int coolDamage) {
        this.coolDamage = coolDamage;
    }

    public int getCoolDamageProb() {
        return coolDamageProb;
    }

    public void setCoolDamageProb(int coolDamageProb) {
        this.coolDamageProb = coolDamageProb;
    }

    public int getDamageRecordQuest() {
        return damageRecordQuest;
    }

    public void setDamageRecordQuest(int damageRecordQuest) {
        this.damageRecordQuest = damageRecordQuest;
    }

    public int getSealedCooltime() {
        return sealedCooltime;
    }

    public void setSealedCooltime(int sealedCooltime) {
        this.sealedCooltime = sealedCooltime;
    }

    public int getWillEXP() {
        return willEXP;
    }

    public void setWillEXP(int willEXP) {
        this.willEXP = willEXP;
    }

    public String getFixedMoveDir() {
        return fixedMoveDir;
    }

    public void setFixedMoveDir(String fixedMoveDir) {
        this.fixedMoveDir = fixedMoveDir;
    }

    public boolean isSelfDestruction() {
        return selfDestruction;
    }

    public void setSelfDestruction(boolean selfDestruction) {
        this.selfDestruction = selfDestruction;
    }

    public int getSelfDestructionAction() {
        return selfDestructionAction;
    }

    public void setSelfDestructionAction(int selfDestructionAction) {
        this.selfDestructionAction = selfDestructionAction;
    }

    public int getSelfDestructionAfter() {
        return selfDestructionAfter;
    }

    public void setSelfDestructionAfter(int selfDestructionAfter) {
        this.selfDestructionAfter = selfDestructionAfter;
    }

    public boolean isEscortMob() {
        return escortMob;
    }

    public void setEscortMob(boolean escortMob) {
        this.escortMob = escortMob;
    }

    public boolean isBanMap() {
        return isBanMap;
    }

    public void setBanMap(boolean banMap) {
        this.isBanMap = banMap;
    }

    public int getBanType() {
        return banType;
    }

    public void setBanType(int banType) {
        this.banType = banType;
    }

    public int getBanMsgType() {
        return banMsgType;
    }

    public void setBanMsgType(int banMsgType) {
        this.banMsgType = banMsgType;
    }

    public String getBanMsg() {
        return banMsg;
    }

    public void setBanMsg(String banMsg) {
        this.banMsg = banMsg;
    }

    public void addBanMap(int fieldID, String portal) {
        this.banMapFields.add(new Tuple<>(fieldID, portal));
    }

    public void setPatrolMob(boolean patrolMob) {
        this.patrolMob = patrolMob;
    }

    public boolean getPatrolMob() {
        return patrolMob;
    }

    public void setRange(int range) {
        this.range = range;
    }

    public int getRange() {
        return range;
    }

    public void setDetectX(int detectX) {
        this.detectX = detectX;
    }

    public int getDetectX() {
        return detectX;
    }

    public void setSenseX(int senseX) {
        this.senseX = senseX;
    }

    public int getSenseX() {
        return senseX;
    }

    public void setIsRemoteRange(boolean isRemoteRange) {
        this.isRemoteRange = isRemoteRange;
    }

    public boolean getIsRemoteRange() {
        return isRemoteRange;
    }

    public void addRevive(int revive) {
        revives.add(revive);
    }

    public List<MobSkill> getAttacks() {
        return attacks;
    }

    public List<MobSkill> getSkills() {
        return skills;
    }

    public void addAttack(MobSkill mobSkill) {
        getAttacks().add(mobSkill);
    }

    public void addSkill(MobSkill mobSkill) {
        getSkills().add(mobSkill);
    }

    public void addMob(int mob) {
        getMobSet().add(mob);
    }

    public Set<Integer> getMobSet() {
        return mobSet;
    }

    public void addParentMob(int parentMob) {
        getParentMobSet().add(parentMob);
    }

    public Set<Integer> getParentMobSet() {
        return parentMobSet;
    }

    public Set<Integer> getQuests() {
        return quests;
    }

    public void addQuest(int quest) {
        getQuests().add(quest);
    }

    public List<Tuple<Integer, String>> getBanMapFields() {
        return banMapFields;
    }

    public boolean isPatrolMob() {
        return patrolMob;
    }

    public Set<Integer> getRevives() {
        return revives;
    }

    public Position getHomePosition() {
        if (homePosition == null) {
            return new Position(0, 0);
        }
        return homePosition;
    }

    public void setHomePosition(Position homePosition) {
        this.homePosition = homePosition;
    }

    public void setLifeType(String lifeType) {
        this.lifeType = lifeType;
    }

    public String getLifeType() {
        return lifeType;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getX() {
        return x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getY() {
        return y;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Position getPosition() {
        return position;
    }

    public void setMobTime(int mobTime) {
        this.mobTime = mobTime;
    }

    public int getMobTime() {
        return mobTime;
    }

    public void setFlip(boolean flip) {
        this.flip = flip;
    }

    public boolean getFlip() {
        return flip;
    }

    public void setHide(boolean hide) {
        this.hide = hide;
    }

    public boolean getHide() {
        return hide;
    }

    public void setFh(int fh) {
        this.fh = fh;
    }

    public int getFh() {
        return fh;
    }

    public void setCy(int cy) {
        this.cy = cy;
    }

    public int getCy() {
        return cy;
    }

    public void setRx0(int rx0) {
        this.rx0 = rx0;
    }

    public int getRx0() {
        return rx0;
    }

    public void setRx1(int rx1) {
        this.rx1 = rx1;
    }

    public int getRx1() {
        return rx1;
    }

    public void setLimitedName(String limitedName) {
        this.limitedName = limitedName;
    }

    public String getLimitedName() {
        return limitedName;
    }

    public void setUseDay(boolean useDay) {
        this.useDay = useDay;
    }

    public boolean getUseDay() {
        return useDay;
    }

    public void setUseNight(boolean useNight) {
        this.useNight = useNight;
    }

    public boolean getUseNight() {
        return useNight;
    }

    public void setHold(boolean hold) {
        this.hold = hold;
    }

    public boolean getHold() {
        return hold;
    }

    public void setNoFoothold(boolean noFoothold) {
        this.noFoothold = noFoothold;
    }

    public boolean getNoFoothold() {
        return noFoothold;
    }

    public void setDummy(boolean dummy) {
        this.dummy = dummy;
    }

    public boolean getDummy() {
        return dummy;
    }

    public void setSpine(boolean spine) {
        this.spine = spine;
    }

    public boolean getSpine() {
        return spine;
    }

    public void setMobTimeOnDie(boolean mobTimeOnDie) {
        this.mobTimeOnDie = mobTimeOnDie;
    }

    public boolean getMobTimeOnDie() {
        return mobTimeOnDie;
    }

    public void setRegenStart(int regenStart) {
        this.regenStart = regenStart;
    }

    public int getRegenStart() {
        return regenStart;
    }

    public void setMobAliveReq(int mobAliveReq) {
        this.mobAliveReq = mobAliveReq;
    }

    public int getMobAliveReq() {
        return mobAliveReq;
    }


    public String getDeathScript() {
        return deathScript;
    }

    public void setDeathScript(String deathScript) {
        this.deathScript = deathScript;
    }

    public BossCooldown getBossCooldown() {
        return bossCooldown;
    }

    public Map<Integer, Rect> getMobZones() {
        return mobZones;
    }

    public void setMobZones(Map<Integer, Rect> mobZones) {
        this.mobZones = mobZones;
    }

    public void addMobZone(int zoneId, Rect mobZone) {
        getMobZones().put(zoneId, mobZone);
    }

    public MobTransformInfo getTransformInfo() {
        return transformInfo;
    }

    public void setTransformInfo(MobTransformInfo transformInfo) {
        this.transformInfo = transformInfo;
    }
}
