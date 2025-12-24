package net.swordie.ms.life.mob;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.ExpIncreaseInfo;
import net.swordie.ms.client.character.quest.QuestManagerHandler;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyDamageInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.MobSkillAttackInfo;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.connection.packet.BattleRecordMan;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.life.modules.MobModule;
import net.swordie.ms.life.AppearingFoothold;
import net.swordie.ms.life.DeathType;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.skill.*;
import net.swordie.ms.loaders.MobData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobInfo;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Triple;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.modules.EliteFieldModule;
import net.swordie.ms.world.field.modules.RuneStoneFieldModule;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class Mob extends Life {

    private static final Logger log = LogManager.getLogger();
    private static final long DR_REACTION_TIME = 3000; // 3 seconds

    private int afterAttack;
    private int currentAction;
    private int scale;
    private int eliteGrade;
    private int eliteType;
    private int targetUserIdFromServer;
    private long hp;
    private long mp;
    private byte calcDamageIndex = 1, moveAction, appearType;
    private Position prevPos;
    private Foothold curFoodhold;
    private Foothold homeFoothold;
    private ShootingMoveStat shootingMoveStat;
    private ForcedMobStat forcedMobStat;
    private MobTemporaryStat temporaryStat;
    private Map<Char, Long> damageDone = new HashMap<>();
    private Set<DropInfo> drops = new HashSet<>();
    private Map<Integer, Long> skillCooldowns = new HashMap<>();
    private long nextPossibleSkillTime = 0;
    private List<MobSkill> eliteSkills = new ArrayList<>();
    private List<MobSkill> skillDelays = new CopyOnWriteArrayList<>();
    private boolean inAttack;
    private List<EscortDest> escortDest = new ArrayList<>();
    private int currentDestIndex = 0;
    private int escortStopDuration = 0;
    private int mobSpawnerId;
    private int attackCooldown;
    private long nextSummonPossible;
    private Map<String, Object> properties = new HashMap<>();
    private boolean broadcastLeaveField;
    private Set<MobSkill> blockedSkills;
    private Set<Integer> blockedAttacks;
    private Set<Integer> spawnedMobs;

    // Lotus
    private List<AppearingFoothold> appearingFootholds = new ArrayList<>();
    private List<Rect> purpleAttacks = new ArrayList<>();

    private boolean buffed;
    private long reflectTime;
    private Map<Tuple<Integer, Integer>, List<Rect>> skillDelayRects;
    private boolean split;
    private boolean isBlockEverything;
    private boolean isBlockAttack;
    private int option;
    private int effectItemID;
    private int phase;
    private int curZoneDataType;
    private int refImgMobID;
    private int lifeReleaseOwnerAID;
    private String lifeReleaseOwnerName;
    private String lifeReleaseMobName;
    private int summonEffect;
    private MobSkill forcedSkill;
    private Queue<Integer> hpTriggerBlockPercs;
    private long nextAggressiveRankingUpdate = 0;
    private MobSkill preparedSkill;
    private MobSkill preparedSkillFromAttack;
    private int mobGroupSpawnProgress = 0;

    public Mob(int templateId) {
        super(templateId);
        forcedMobStat = new ForcedMobStat();
        temporaryStat = new MobTemporaryStat(this);
        scale = 100;
        calcDamageIndex = 1;
        blockedSkills = new HashSet<>();
        blockedAttacks = new HashSet<>();
    }

    public Queue<Integer> getHpTriggerBlockPercs() {
        if (hpTriggerBlockPercs == null) {
            hpTriggerBlockPercs = new LinkedList<>();
        }
        return hpTriggerBlockPercs;
    }

    public void addHpTriggerBlockPerc(int triggerBlockPerc) {
        getHpTriggerBlockPercs().add(triggerBlockPerc);
    }

    public Set<DropInfo> getDrops() {
        return drops;
    }

    public void setDrops(Set<DropInfo> drops) {
        this.drops = drops;
    }

    public ForcedMobStat getForcedMobStat() {
        return forcedMobStat;
    }

    public void setForcedMobStat(ForcedMobStat forcedMobStat) {
        this.forcedMobStat = forcedMobStat;
    }

    public int getAfterAttack() {
        return afterAttack;
    }

    public void setAfterAttack(int afterAttack) {
        this.afterAttack = afterAttack;
    }

    public int getCurrentAction() {
        return currentAction;
    }

    public void setCurrentAction(int currentAction) {
        this.currentAction = currentAction;
    }

    public int getScale() {
        return scale;
    }

    public void setScale(int scale) {
        this.scale = scale;
    }

    public int getEliteGrade() {
        return eliteGrade;
    }

    public void setEliteGrade(int eliteGrade) {
        this.eliteGrade = eliteGrade;
    }

    public int getEliteType() {
        return eliteType;
    }

    public void setEliteType(int eliteType) {
        this.eliteType = eliteType;
    }

    public int getTargetUserIdFromServer() {
        return targetUserIdFromServer;
    }

    public void setTargetUserIdFromServer(int targetUserIdFromServer) {
        this.targetUserIdFromServer = targetUserIdFromServer;
    }

    public long getHp() {
        return hp;
    }

    /**
     * Returns the current HP of the mob, in percentage in relation to the maximum HP.
     *
     * @return current HP percantage
     */
    public double getHpPerc() {
        return 100 * ((double) getHp() / getMaxHp());
    }

    public synchronized void setHp(long hp) {
        this.hp = hp;
    }

    public byte getCalcDamageIndex() {
        return calcDamageIndex;
    }

    public void setCalcDamageIndex(byte calcDamageIndex) {
        this.calcDamageIndex = calcDamageIndex;
    }

    public byte getMoveAction() {
        return moveAction;
    }

    public void setMoveAction(byte moveAction) {
        this.moveAction = moveAction;
    }

    public byte getAppearType() {
        return appearType;
    }

    public void setAppearType(byte appearType) {
        this.appearType = appearType;
    }

    public Position getPrevPos() {
        return prevPos;
    }

    public void setPrevPos(Position prevPos) {
        this.prevPos = prevPos;
    }

    public Foothold getCurFoodhold() {
        return curFoodhold;
    }

    public void setCurFoodhold(Foothold curFoodhold) {
        this.curFoodhold = curFoodhold;
    }

    public ShootingMoveStat getShootingMoveStat() {
        return shootingMoveStat;
    }

    public void setShootingMoveStat(ShootingMoveStat shootingMoveStat) {
        this.shootingMoveStat = shootingMoveStat;
    }

    public Foothold getHomeFoothold() {
        return homeFoothold;
    }

    public void setHomeFoothold(Foothold homeFoothold) {
        this.homeFoothold = homeFoothold;
    }

    public long getMaxHp() {
        return getForcedMobStat().getMaxHP();
    }

    public long getExp() {
        return getForcedMobStat().getExp();
    }

    public void setMaxHp(long maxHp) {
        getForcedMobStat().setMaxHP(maxHp);
    }

    public long getMp() {
        return mp;
    }

    public void setMp(long mp) {
        this.mp = mp;
    }

    public long getMaxMp() {
        return getForcedMobStat().getMaxMP();
    }

    public void setMaxMp(long maxMp) {
        getForcedMobStat().setMaxMP(maxMp);
    }

    public int getLevel() {
        return getForcedMobStat().getLevel();
    }

    public void setLevel(int level) {
        getForcedMobStat().setLevel(level);
    }

    public int getPad() {
        return getForcedMobStat().getPad();
    }

    public void setPad(int pad) {
        getForcedMobStat().setPad(pad);
    }

    public int getMad() {
        return getForcedMobStat().getMad();
    }

    public void setMad(int mad) {
        getForcedMobStat().setMad(mad);
    }

    public int getPdr() {
        return getForcedMobStat().getPdr();
    }

    public int getMdr() {
        return getForcedMobStat().getMdr();
    }

    public void setTemporaryStat(MobTemporaryStat temporaryStat) {
        this.temporaryStat = temporaryStat;
    }

    public MobTemporaryStat getTemporaryStat() {
        return temporaryStat;
    }

    public void damageBySkill(Char dmgDealer, int skillId, int slv, int hits, long damage) {
        this.getField().broadcastPacket(MobPool.damagedBySkill(this.getObjectId(), damage, dmgDealer.getId(), skillId, slv, hits));
        this.damage(dmgDealer, damage);
    }

    /**
     * Damages a mob.
     *
     * @param totalDamage the total damage that should be applied to the mob
     */
    public void damage(Char damageDealer, long totalDamage) {
        var mobInfo = getMobInfo();
        if (isSplit() && getOriginMob() != null) {
            getOriginMob().damage(damageDealer, totalDamage);
        }

        if (getTemporaryStat().hasInvincibilityStat()) {
            return;
        }

        // kinda hacky, but meh
        if (MobConstants.isZakumBody(getTemplateId())
                && getField().getMobs().stream().anyMatch(m -> MobConstants.isZakumArm(m.getTemplateId()))) {
            return;
        }

        addDamage(damageDealer, totalDamage);

        long maxHP = getMaxHp();
        long oldHp = getHp();
        long newHp = oldHp - totalDamage;
        if (hpTriggerBlockPercs != null && hpTriggerBlockPercs.size() > 0) {
            var maxBlockedHp = getMaxHp() * (getHpTriggerBlockPercs().peek() / 100D);
            newHp = (long) Math.max(newHp, maxBlockedHp);
        } else {
            newHp = Math.max(newHp, 0);
        }
        long actualDamageDealt = oldHp - newHp;
        setHp(newHp);

        // Legion Raid
        if (MobConstants.isUnionRaidBoss(getTemplateId()) &&
                FieldConstants.isUnionRaidField(getField().getId()) &&
                damageDealer.getUnionRaid() != null) {
            damageDealer.getUnionRaid().damageDoneToRaidBoss(this, totalDamage, oldHp, newHp);
            return; // can't 'actually' damage mob.
        }

        damageDealer.getJobHandler().handleMobDamaged(damageDealer, this, actualDamageDealt);
        Events.onMobDamaged(damageDealer, this, actualDamageDealt, oldHp, newHp);

        double percDamage = ((double) newHp / maxHP);
        if (oldHp > 0 && newHp <= 0) {
            // Boss sponges
            if (getTemplateId() == 8810214 || getTemplateId() == 8810018 || getTemplateId() == 8810118) {
                new HashSet<>(getField().getMobs()).forEach(m -> m.die(true));
            }
            die(true);
            if (getTemplateId() == 9300811 && damageDealer.hasQuestInProgress(38022)) {
                damageDealer.getScriptManager().setQRValue(38022, "clear", false);
            }
            if (mobInfo.isBoss() && mobInfo.getHpTagColor() != 0) {
                getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(this)));
            }
        } else if (mobInfo.isBoss() && mobInfo.getHpTagColor() != 0) {
            getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(this)));
            displayAggroRank();
        } else if (!mobInfo.isBoss()) {
            getField().broadcastPacket(MobPool.hpIndicator(getObjectId(), (byte) (percDamage * 100)));
        }

        damageCorrespondingSponge(damageDealer, actualDamageDealt);
    }

    private void damageCorrespondingSponge(Char damageDealer, long actualDamageDealt) {
        if ((getTemplateId() >= 8810202 && getTemplateId() <= 8810209)) {
            Life life = damageDealer.getField().getLifeByTemplateId(8810214);
            if (life != null) {
                Mob mob = (Mob) life;
                mob.damage(damageDealer, actualDamageDealt);
                damageDealer.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob)));
            }
        }
        if ((getTemplateId() >= 8810002 && getTemplateId() <= 8810009)) {
            Life life = damageDealer.getField().getLifeByTemplateId(8810018);
            if (life != null) {
                Mob mob = (Mob) life;
                mob.damage(damageDealer, actualDamageDealt);
                damageDealer.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob)));
            }
        }
        if ((getTemplateId() >= 8810102 && getTemplateId() <= 8810109)) {
            Life life = damageDealer.getField().getLifeByTemplateId(8810118);
            if (life != null) {
                Mob mob = (Mob) life;
                mob.damage(damageDealer, actualDamageDealt);
                damageDealer.getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob)));
            }
        }
    }

    public MobInfo getMobInfo() {
        return MobData.getMobInfoById(getTemplateId());
    }

    public void displayAggroRank() {
        if (Util.getCurrentTimeLong() < nextAggressiveRankingUpdate) {
            return;
        }

        var dmgDone = getDamageDone();
        var rankInfoNames = new ArrayList<Tuple<Long, String>>();
        var totalDmgDone = dmgDone.values().stream().mapToLong(d -> d).sum();

        for (var entry : dmgDone.entrySet()) {
            var chr = entry.getKey();
            var dmg = entry.getValue();
            var dmgR = (int) (dmgDone.size() == 1 ? 100 : (((double) dmg / totalDmgDone) * 100D));

            rankInfoNames.add(new Tuple<>(dmg, String.format("%s(%d", chr.getName(), dmgR) + "%)"));
        }

        rankInfoNames.sort((o1, o2) -> o2.getLeft().compareTo(o1.getLeft()));

        var sortedList = rankInfoNames.stream().limit(6).collect(Collectors.toList());

        for (Char c : damageDone.keySet()) {
            c.write(UserLocal.aggroRankInfoName(sortedList));
        }

        nextAggressiveRankingUpdate = Util.getCurrentTimeLong() + GameConstants.AGGRESSIVE_RANKING_UPDATE_DELAY;
    }

    public synchronized void heal(int amount) {
        long oldHp = getHp();
        long newHp = oldHp + amount;
        if (newHp > getMaxHp()) {
            newHp = getMaxHp();
        } else if (newHp < 0) {
            newHp = 0;
        }
        setHp(newHp);
        long diff = newHp - oldHp;
        if (getField() != null & diff != 0) {
            getField().broadcastPacket(MobPool.damaged(getObjectId(), diff, (byte) 0, getHp(), getMaxHp()));
        }
        if (oldHp > 0 && newHp <= 0) {
            die(true);
        }
    }

    public synchronized void healMP(int amount) {
        long oldMp = getMp();
        long newMp = oldMp + amount;
        if (newMp > getMaxMp()) {
            newMp = getMaxMp();
        } else if (newMp < 0) {
            newMp = 0;
        }
        setMp(newMp);
    }

    public synchronized void die(boolean drops) {
        var mobInfo = getMobInfo();

        Field field = getField();
        setBroadcastLeaveField(true);
        getField().removeLife(getObjectId());

        // Shade - Soul Splitter
        Mob copy = getCopyMob();
        if (copy != null) {
            copy.die(false);
        }
        if (isSplit()) {
            getField().broadcastPacket(MobPool.leaveField(getObjectId(), DeathType.ANIMATION_DEATH));
            return;
        }

        distributeExp();
        if (drops && !FieldConstants.isNoItemDropField(getField().getId())) {
            dropDrops(); // xd
        }
        for (Char chr : getDamageDone().keySet()) {
            if (chr.hasSoulWeapon() && chr.hasNotMaxSoulMP()) {
                chr.createSoulOrb(this.getPosition());
            }
            if (!chr.getAccount().getMonsterCollection().hasMob(getTemplateId())) {
                chr.getAccount().getMonsterCollection().addMobAndUpdateClient(getTemplateId(), chr);
            }
        }

        // Spread QuestCounter for MobKill throughout the entire party
        if (getMostDamageChar() != null) {
            var handleMobKillForQuestChrList = new ArrayList<Char>() {{
                add(getMostDamageChar());
                var party = getMostDamageChar().getParty();
                if (party != null) {
                    addAll(party.getPartyMembersInSameField(getMostDamageChar()));
                }
            }};
            handleMobKillForQuestChrList.forEach(pChr -> QuestManagerHandler.handleMobKill(pChr.getQuestManager(), this));
        }
        Char mostDmgChr = getMostDamageChar();
        if (mostDmgChr != null) {
            RuneStoneFieldModule.trySpawnRune(getMostDamageChar(), getField());
            if (mostDmgChr.isBattleRecordOn()) {
                mostDmgChr.write(BattleRecordMan.enemiesDefeatedInc());
            }
        }

        MobTemporaryStat tsm = getTemporaryStat();
        tsm.removeAllMobStats(false);

        EliteFieldModule.checkSpawnElite(field, this);

        // TEST
        reviveMob();
        if (mobInfo.isBoss() && mobInfo.getHpTagColor() != 0) {
            getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(this)));
        } else {
            getField().broadcastPacket(MobPool.hpIndicator(getObjectId(), (byte) 0));
        }
        if (isBroadcastLeaveField()) {
            // do this later so all relevant packets arrive before indicating mob has died
            field.broadcastPacket(MobPool.leaveField(getObjectId(), DeathType.ANIMATION_DEATH));
        }

        // Mobs that are part of a boss but have their own templateId (Such as GrossoPolpo and his Arms)
        var attachedMobs = MobConstants.getAttachedMobs(getTemplateId());
        for (var attachedMob : attachedMobs) {
            var life = getField().getLifeByTemplateId(attachedMob);
            if (life instanceof Mob) {
                var mob = (Mob) life;
                mob.die(false);
            }
        }

        getField().onMobDeath(this);
        clear();
    }

    public void dropDrops() {
        dropDrops(false);
    }

    public void dropDrops(boolean bypassRuneAntiBot) {
        int ownerID = 0;
        Char mostDamageChar = getMostDamageChar();

        if (MobConstants.isPublicDropsMob(getTemplateId())) { // Ensure that drops are not locked to an owner.
            mostDamageChar = null;
        }

        int level = mostDamageChar == null ? 0 : mostDamageChar.getLevel();
        short job = 0;
        if (mostDamageChar != null) {
            ownerID = mostDamageChar.getId();
            job = mostDamageChar.getJob();
        }
        int fhID = getFh();
        if (fhID == 0) {
            Foothold fhBelow = getField().findFootHoldBelow(getPosition());
            if (fhBelow != null) {
                fhID = fhBelow.getId();
            }
        }
        Set<DropInfo> dropInfoSet = new HashSet<>(getDrops());

        // Add drops based on loot pool of the mob
        dropInfoSet.addAll(BossLootConstants.getLootPoolByTemplateId(getTemplateId()));

        // Add consumable/equip drops based on min(charLv, mobLv)
        level = Math.min(level, getForcedMobStat().getLevel());
        dropInfoSet.addAll(ItemConstants.getConsumableMobDrops(level));
        dropInfoSet.addAll(ItemConstants.getEquipMobDrops(job, level));

        if (BossLootConstants.isDropPowerCrystal(getTemplateId())) {
            for(Char chr : getDamageDone().keySet()) {
                dropInfoSet.add(new DropInfo(ItemConstants.INTENSE_POWER_CRYSTAL, 10000));
            }
        }

        // DropRate & MesoRate Increases
        int mostDamageCharDropRate = mostDamageChar != null ? mostDamageChar.getTotalStat(BaseStat.dropR) : 100;
        mostDamageCharDropRate *= GameConstants.MOB_DROP_RATE;
        int mostDamageCharMesoRate = mostDamageChar != null ? mostDamageChar.getTotalStat(BaseStat.mesoR) : 100;
        mostDamageCharMesoRate *= GameConstants.MOB_MESO_RATE;
        int dropRateMob = (getTemporaryStat().hasCurrentMobStat(MobStat.Treasure)
                ? getTemporaryStat().getCurrentOptionsByMobStat(MobStat.Treasure).yOption
                : 0); // Item Drop Rate
        int mesoRateMob = (getTemporaryStat().hasCurrentMobStat(MobStat.Treasure)
                ? getTemporaryStat().getCurrentOptionsByMobStat(MobStat.Treasure).zOption
                : 0); // Meso Drop Rate

        var runeAntibotRate = 1D;
        if (!bypassRuneAntiBot) {
            runeAntibotRate = RuneStoneFieldModule.getRuneCurseMultiplier(getMostDamageChar(), getField());
        }
        int totalMesoRate = (int) ((mesoRateMob + mostDamageCharMesoRate) * (runeAntibotRate / 100D));
        int totalDropRate = (int) ((dropRateMob + mostDamageCharDropRate) * (runeAntibotRate / 100D));
        getField().drop(dropInfoSet, getField().getInfo().getFootholdById(fhID), getPosition(), ownerID, totalMesoRate,
                totalDropRate, getMobInfo().getExplosiveReward() != 0, this);

        // VacItems
        if (mostDamageChar != null && !(mostDamageChar.hasSkillOnCooldown(CustomConstants.PET_VAC_SKILL_ID))) {
            mostDamageChar.vacItems();
            mostDamageChar.addSkillCoolTime(CustomConstants.PET_VAC_SKILL_ID, CustomConstants.PET_VAC_DELAY);
        }
    }

    public Map<Char, Long> getDamageDone() {
        return damageDone;
    }

    public void setDamageDone(Map<Char, Long> damageDone){
        this.damageDone = damageDone;
    }

    public long getDamageDone(Char chr) {
        return getDamageDone().getOrDefault(chr, 0L);
    }

    /**
     * Adds a damage amount to the given Char's current damage. Purely used for keeping track of total damage done by
     * a Char.
     *
     * @param chr    the Char the damage originates from
     * @param damage the damage done
     */
    public synchronized void addDamage(Char chr, long damage) {
        long cur = 0;
        if (getDamageDone().containsKey(chr)) {
            cur = getDamageDone().get(chr);
        }
        if (damage <= getHp()) {
            cur += damage;
        } else {
            cur += getHp();
        }
        getDamageDone().put(chr, cur);
    }

    public void distributeExp() {
        long exp = getForcedMobStat().getExp();
        long totalDamage = getDamageDone().values().stream().mapToLong(l -> l).sum();
        Map<Party, PartyDamageInfo> damagePercPerParty = new HashMap<>();
        for (Char chr : getDamageDone().keySet()) {
            double damagePerc = getDamageDone().get(chr) / (double) totalDamage;
            int mobExpRate = chr.getLevel() < 10 ? 1 : GameConstants.MOB_EXP_RATE;
            long appliedExpPre = (long) (exp * damagePerc * mobExpRate);
            long appliedExpPost = appliedExpPre;
            ExpIncreaseInfo eei = new ExpIncreaseInfo();

            // Burning Field
            if (getField().getBurningFieldLevel() > 0) {
                int burningFieldBonusExp = (int) (appliedExpPre * getField().getBonusExpByBurningFieldLevel() / 100);
                eei.setRestFieldBonusExp(burningFieldBonusExp);
                eei.setRestFieldExpRate(getField().getBonusExpByBurningFieldLevel());
                appliedExpPost += burningFieldBonusExp;
            }

            // + Exp% MobStats
            if (getTemporaryStat().hasCurrentMobStat(MobStat.Treasure) && getTemporaryStat().getCurrentOptionsByMobStat(MobStat.Treasure).xOption > 0) { // xOption for Exp%
                int expIncrease = getTemporaryStat().getCurrentOptionsByMobStat(MobStat.Treasure).xOption;
                long mobStatBonusExp = ((appliedExpPre * expIncrease) / 100);
                eei.setBaseAddExp((int) mobStatBonusExp);
                appliedExpPost += mobStatBonusExp;
            }

            // Rune anti-bot multi
            var runeCurseMulti = RuneStoneFieldModule.getRuneCurseMultiplier(chr, getField()) / 100D;
            appliedExpPost *= runeCurseMulti;

            if (runeCurseMulti < 1D) {
                getField().getRuneStone().showRuneCurseMessageToChr(chr);
            }

            eei.setLastHit(true);
            eei.setIncEXP(appliedExpPre);
            chr.addExp(appliedExpPost, eei);
            if (isBoss() && chr.getGuild() != null) {
                chr.getGuild().addCommitmentToChar(chr, (int) Math.min(getExp() * GameConstants.CONITRUBITION_PER_EXP, Integer.MAX_VALUE)); // independant of any xp buffs
            }

            if (Util.succeedProp(GameConstants.NX_DROP_CHANCE)) {
                int nx = (int) (damagePerc * getNxDropAmount() * (RuneStoneFieldModule.getRuneCurseMultiplier(chr, getField()) / 100D));
                chr.addNx(nx);
            }

            Party party = chr.getParty();
            if (party != null) {
                if (!damagePercPerParty.containsKey(party)) {
                    damagePercPerParty.put(party, new PartyDamageInfo(party, this));
                }
                damagePercPerParty.get(party).addDamageInfo(chr, damagePerc);
            }
        }

        for (PartyDamageInfo pdi : damagePercPerParty.values()) {
            pdi.distributeExp(getMostDamageChar());
        }
    }

    public Char getMostDamageChar() {
        Tuple<Char, Long> max = new Tuple<>(null, (long) -1);
        for (Map.Entry<Char, Long> entry : getDamageDone().entrySet()) {
            Char chr = entry.getKey();
            long damage = entry.getValue();
            if (damage > max.getRight()) {
                max.setLeft(chr);
                max.setRight(damage);
            }
        }
        return max.getLeft();
    }

    public MobSkill getAttackById(int attackID) {
        return Util.findWithPred(getMobInfo().getAttacks(), att -> att.getSkillIdx() == attackID);
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Mob) {
            Mob mob = (Mob) obj;
            return mob.getTemplateId() == getTemplateId() && mob.getObjectId() == getObjectId() && mob.getField().equals(getField());
        }
        return false;
    }

    public boolean isAlive() {
        return getHp() > 0;
    }

    public void reviveMob() {
        var revives = getMobInfo().getRevives();
        if (revives.size() > 0) {
            for (int reviveTemplateID : revives) {

                if (MobConstants.isDoNotReviveMob(reviveTemplateID)) {
                    continue;
                }

                Mob mob = MobData.getMobDeepCopyById(reviveTemplateID);
                if (mob == null) {
                    log.warn("Mob.java::reviveMob() | Could not find mob with template " + reviveTemplateID);
                    continue;
                }
                mob.setNotRespawnable(true);
                mob.setPosition(getPosition());

                mob = MobConstants.alterMobRevive(mob); // Slightly alter the mob revival based on mob's info.

                getField().spawnLife(mob, null);

                // game pls
                MobModule.afterMobSpawnByRevive(mob);
            }
        }
    }

    private Map<Integer, Long> getSkillCooldowns() {
        return skillCooldowns;
    }

    public boolean hasSkillOffCooldown(int skillID, int slv) {
        return System.currentTimeMillis() >= getSkillCooldowns().getOrDefault(skillID | (slv << 16), Long.MIN_VALUE);
    }

    public boolean hasAttackOffCooldown(int attackID) {
        return System.currentTimeMillis() >= getSkillCooldowns().getOrDefault(-attackID, Long.MIN_VALUE);
    }

    public void putSkillCooldown(int skillID, int slv, long nextUseableTime) {
        getSkillCooldowns().put(skillID | (slv << 16), nextUseableTime);
    }

    public void putAttackOnCooldown(int skillID, int delayForNextAttack) {
        getSkillCooldowns().put(-skillID, System.currentTimeMillis() + delayForNextAttack);
    }

    public boolean hasSkillDelayExpired() {
        return System.currentTimeMillis() > getNextPossibleSkillTime();
    }

    /**
     * Sets when a next skill can be used (in ms from current time).
     *
     * @param delay The delay until the next skill can be used
     */
    public void setSkillDelay(long delay) {
        setNextPossibleSkillTime(System.currentTimeMillis() + delay);
    }

    private long getNextPossibleSkillTime() {
        return nextPossibleSkillTime;
    }

    private void setNextPossibleSkillTime(long nextPossibleSkillTime) {
        this.nextPossibleSkillTime = nextPossibleSkillTime;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Char controller = getField().getLifeToControllers().get(this);
        if (onlyChar == null) {
            for (Char chr : getField().getCharsReadOnly()) {
                chr.write(MobPool.enterField(this, false));
                chr.write(MobPool.changeController(this, false, controller == chr));
                sendTriggerBlock(chr);
            }
        } else {
            onlyChar.write(MobPool.enterField(this, false));
            onlyChar.write(MobPool.changeController(this, false, controller == onlyChar));
            sendTriggerBlock(onlyChar);
        }
    }

    private void sendTriggerBlock(Char chr) {
        if (hpTriggerBlockPercs != null) {
            chr.write(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(this)));
            switch (getField().getId()) {
                case BossConstants.WILL_FIELD_P1:
                case BossConstants.WILL_HARD_FIELD_P1:
                    chr.write(WillFieldPacket.willTriggerBlockP1(hpTriggerBlockPercs, Collections.singletonList(getTemplateId())));
                    break;
                case BossConstants.WILL_FIELD_P2:
                case BossConstants.WILL_HARD_FIELD_P2:
                    chr.write(WillFieldPacket.willTriggerBlockP2(hpTriggerBlockPercs));
                    break;
            }
        }
    }

    public void spawnEliteMobRuneOfDarkness() {
        Mob elite = MobData.getMobDeepCopyById(getTemplateId());
        elite.setHomePosition(getPosition().deepCopy());
        elite.setPosition(getPosition().deepCopy());
        elite.setCurFoodhold(getCurFoodhold().deepCopy());
        elite.setHomeFoothold(getCurFoodhold().deepCopy());
        elite.setNotRespawnable(true);
        List<Triple<Integer, Double, Double>> eliteInfos = GameConstants.getEliteInfoByMobLevel(elite.getForcedMobStat().getLevel());
        Triple<Integer, Double, Double> eliteInfo = Util.getRandomFromCollection(eliteInfos);
        int eliteGrade = eliteInfo.getLeft();
        long newHp = (long) (eliteInfo.getMiddle() * elite.getMaxHp());
        long newExp = (long) (eliteInfo.getRight() * elite.getForcedMobStat().getExp());
        elite.setEliteType(1);
        elite.setEliteGrade(eliteGrade);
        Map<Integer, Integer> possibleSkillsMap = SkillData.getEliteMobSkillsByGrade(eliteGrade);
        List<Tuple<Integer, Integer>> possibleSkills = new ArrayList<>();
        possibleSkillsMap.forEach((k, v) -> possibleSkills.add(new Tuple(k, v)));
        for (int i = 0; i < GameConstants.ELITE_MOB_SKILL_COUNT; i++) {
            Tuple<Integer, Integer> randomSkill = Util.getRandomFromCollection(possibleSkills);
            elite.addEliteSkill(randomSkill.getLeft(), randomSkill.getRight());
            possibleSkills.remove(randomSkill);
        }
        elite.setMaxHp(newHp);
        elite.setHp(newHp);
        elite.getForcedMobStat().setExp(newExp);
        getField().spawnLife(elite, null);
    }

    public List<MobSkill> getEliteSkills() {
        return eliteSkills;
    }

    public void addEliteSkill(int skillID, int skillLevel) {
        MobSkill ms = new MobSkill();
        ms.setSkillIdx(-1);
        ms.setSkillID(skillID);
        ms.setLevel(skillLevel);
        getEliteSkills().add(ms);
    }

    public List<MobSkill> getSkillDelays() {
        return skillDelays;
    }

    public boolean isInAttack() {
        return inAttack;
    }

    public void setInAttack(boolean inAttack) {
        this.inAttack = inAttack;
    }

    public void killedByChar(Char chr, AttackInfo attackInfo) {
        // Combo Counter per Kill
        chr.comboKillLogic(this);

        // Any special skills
        chr.getJobHandler().handleMobDeath(attackInfo, this);

        // Random portal spawn: is channel field, is not on cd, has min mob level, and field has no portal already
        chr.trySpawnRandomPortal();

        if (CustomConstants.LIE_DETECTOR_ENABLED) {
            chr.tryDoLieDetection();
        }
    }

    public List<EscortDest> getEscortDest() {
        return escortDest;
    }

    public void addEscortDest(int destPosX, int destPosY, int attr) {
        addEscortDest(destPosX, destPosY, attr, 0, 0);
    }

    public void addEscortDest(int destPosX, int destPosY, int attr, int mass, int stopDuration) {
        escortDest.add(new EscortDest(destPosX, destPosY, attr, mass, stopDuration));
    }

    public int getCurrentDestIndex() {
        return currentDestIndex;
    }

    public void setCurrentDestIndex(int currentDestIndex) {
        this.currentDestIndex = currentDestIndex;
    }

    public int getEscortStopDuration() {
        return escortStopDuration;
    }

    public void setEscortStopDuration(int escortStopDuration) {
        this.escortStopDuration = escortStopDuration;
    }

    public void clearEscortDest() {
        escortDest = new ArrayList<>();
    }

    public void escortFullPath(int oldAttr) {
        getField().broadcastPacket(MobPool.escortFullPath(this, oldAttr, false));
    }

    public boolean isFinishedEscort() {
        return escortDest.size() == 0;
    }

    @Override
    public void notifyControllerChange(Char controller) {
        for (Char chr : getField().getChars()) {
            chr.write(MobPool.changeController(this, false, controller == chr));
        }
    }

    @Override
    public void onFieldEnter() {
        super.onFieldEnter();

        var removeAfter = getMobInfo().getRemoveAfter();
        if (removeAfter > 0) {
            EventManager.addEvent(() -> {
                if (isAlive()) {
                    die(false);
                }
            }, removeAfter, TimeUnit.SECONDS);
        }
    }

    public void encodeInit(OutPacket outPacket) {
        var mobInfo = getMobInfo();
        // CMob::Init
        outPacket.encodePosition(getPosition());
        outPacket.encodeByte(getMoveAction());
        int tid = getTemplateId();
        if (tid == 8910000 || tid == 8910100 || tid == 9990033) { // is_banban_boss
            outPacket.encodeByte(0); // fake?
        }

        if (getCurFoodhold() == null) {
            setCurFoodhold(getField().findFootHoldBelow(getPosition()));
            if (getCurFoodhold() == null) {
                setCurFoodhold(getField().getInfo().getFootholdById(0));
            }
            if (getHomeFoothold() == null) {
                setHomeFoothold(getCurFoodhold());
            }
        }

        outPacket.encodeShort(getCurFoodhold() == null ? -1 : getCurFoodhold().getId());
        outPacket.encodeShort(getHomeFoothold() == null ? -1 : getHomeFoothold().getId());
        byte appearType = getAppearType();
        outPacket.encodeByte(appearType);
        if (appearType == -3 || appearType >= 0) {
            // init -> -2, -1 else
            outPacket.encodeInt(getOption());
        }
        outPacket.encodeByte(-1); // teamForMCarnival
        outPacket.encodeLong(getHp());

        outPacket.encodeInt(getEffectItemID());

        if (mobInfo.isPatrolMob()) {
            outPacket.encodeInt(getPosition().getX() - mobInfo.getRange());
            outPacket.encodeInt(getPosition().getX() + mobInfo.getRange());
            outPacket.encodeInt(mobInfo.getDetectX());
            outPacket.encodeInt(mobInfo.getSenseX());
        }

        outPacket.encodeInt(getPhase());
        outPacket.encodeInt(getCurZoneDataType());
        outPacket.encodeInt(getRefImgMobID());

        outPacket.encodeInt(isLeft() ? 1 : 0); // ?

        outPacket.encodeInt(getAfterAttack());
        outPacket.encodeInt(getCurrentAction());
        outPacket.encodeInt(0); // new 188
        outPacket.encodeByte(isLeft());

        int size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // ?
            outPacket.encodeInt(0); // extra time?
        }
        outPacket.encodeInt(getScale());
        outPacket.encodeInt(getEliteGrade());
        if (getEliteGrade() >= 0) {
            outPacket.encodeInt(getEliteSkills().size());
            for (MobSkill skill : getEliteSkills()) {
                outPacket.encodeInt(skill.getSkillID()); // skill id
                outPacket.encodeInt(skill.getLevel()); // skill level
            }
            outPacket.encodeInt(getEliteType()); // 1 normal, 3 elite boss probably
        }
        ShootingMoveStat sms = getShootingMoveStat();
        outPacket.encodeByte(sms != null);
        if (sms != null) {
            sms.encode(outPacket);
        }
        // new 188
        boolean bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            outPacket.encodeInt(0);
            outPacket.encodeInt(0); // time related
        }
        // end 188
        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // nType
            outPacket.encodeInt(0); // key?
        }
        // new 199
        boolean encode = false;
        outPacket.encodeByte(encode);
        if (encode) {
            outPacket.encodeArr(new byte[120]); // decodeBuffer
        }
        outPacket.encodeString(""); // new 199
        if (mobInfo.isTargetFromSvr()) {
            outPacket.encodeInt(getTargetUserIdFromServer());
        }

        // big jump

        encode = false;
        outPacket.encodeByte(encode);
        if (encode) {
            for (int i = 0; i < 8; i++) {
                outPacket.encodeInt(0);
            }
            outPacket.encodeLong(0);
        }

        outPacket.encodeByte(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0); // new 228

        outPacket.encodeInt(0);
        outPacket.encodeInt(0); // >1 => mob is invisible, invincible and doesn't attack.

        outPacket.encodeInt(0); // new 228
        outPacket.encodeInt(0); // new 228

        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0);
        }

        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        // everything after is gone?

        outPacket.encodeString("");

        outPacket.encodeByte(0); // sub: nHitPartsCount: str per size

        // sub
        outPacket.encodeByte(0);
        outPacket.encodeInt(0);
        // ~sub

        outPacket.encodeArr(new byte[15]);
    }

    public int getNxDropAmount() {
        int base = MobConstants.getBaseNxDropAmount(this);
        return Util.getRandom(base, (base + base / 10)) * GameConstants.MOB_NX_RATE; // base + 10% random
    }

    public void handleDamageReflect(Char chr, int skillID, long totalDamage, boolean isMagicAttack) {
        MobTemporaryStat mts = getTemporaryStat();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        boolean hasIgnoreCounterCts =
                tsm.hasStat(CharacterTemporaryStat.IgnoreAllCounter)
                        || tsm.hasStat(CharacterTemporaryStat.IgnoreAllImmune)
                        || tsm.hasStat(CharacterTemporaryStat.Invincible);
        boolean ignoreCounter = hasIgnoreCounterCts || SkillConstants.isIgnoreDRSkill(skillID);
        if (hasDamageReflect() && !ignoreCounter) {
            // DR is always P and M
            // nOption = % of hp, mOption = chance to reflect
            Option o;
            if (isMagicAttack) {
                o = mts.getCurrentOptionsByMobStat(MobStat.MCounter);
            } else {
                o = mts.getCurrentOptionsByMobStat(MobStat.PCounter);
            }
            if (o != null) {
                int damage = o.nOption;
                int prop = o.mOption;
                if (prop >= 100 || Util.succeedProp(prop)) {
                    int hpDamage = damage;
                    chr.damage(hpDamage);
                    getField().broadcastPacket(UserPacket.userHitByCounter(chr.getId(), hpDamage));
                }
            }
        }
    }

    public void applyHitDiseaseToPlayer(Char chr, MobSkill mobSkill) {
        if (mobSkill != null && mobSkill.getDisease() != 0) {
            MobSkillModule.applyEffect(chr, mobSkill);
        }
    }

    public Mob getOriginMob() {
        if (getTemporaryStat().hasCurrentMobStat(MobStat.SeperateSoulC)) {
            return (Mob) getField().getLifeByObjectID(getTemporaryStat().getCurrentOptionsByMobStat(MobStat.SeperateSoulC).rOption);
        }
        return null;
    }

    public Mob getCopyMob() {
        if (getTemporaryStat().hasCurrentMobStat(MobStat.SeperateSoulP)) {
            return (Mob) getField().getLifeByObjectID(getTemporaryStat().getCurrentOptionsByMobStat(MobStat.SeperateSoulP).rOption);
        }
        return null;
    }

    public MobSkill getRandomAvailableSkill() {
        if (isBlockEverything() || !Util.succeedProp(GameConstants.MOB_SKILL_CHANCE)) {
            return null;
        }

        List<MobSkill> list = new ArrayList<>();
        for (MobSkill ms : getSkills()) {
            if (canUseSkill(ms)) {
                list.add(ms);
            }
        }
        return Util.getRandomFromCollection(list);
    }

    public boolean canUseSkill(MobSkill ms) {
        MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(ms.getSkillID(), ms.getLevel());
        int reqHp = msi.getSkillStatIntValue(MobSkillStat.hp);
        int minHp = msi.getSkillStatIntValue(MobSkillStat.minHP);
        // skill exists, is off cooldown, and mob is between required hp percentage to cast skill
        return (MobConstants.isZakumArm(getTemplateId()) || MobConstants.isZakumBody(getTemplateId()) || !ms.isOnlyFsm())
                && !isBlockedSkill(ms)
                && hasSkillOffCooldown(ms.getSkillID(), ms.getLevel())
                && (reqHp == 0 || getHpPerc() <= reqHp)
                && getHpPerc() >= minHp;
    }

    public int getMobSpawnerId() {
        return mobSpawnerId;
    }

    public void setMobSpawnerId(int mobSpawnerId) {
        this.mobSpawnerId = mobSpawnerId;
    }

    public void teleport(int xPos, int yPos) {
        Rect possibleRect = getPosition().getRectAround(new Rect(-xPos, -yPos, xPos, yPos));
        setPosition(new Position(Util.getRandom(possibleRect.getLeft(), possibleRect.getRight()),
                Util.getRandom(possibleRect.getTop(), possibleRect.getBottom())));
        getField().broadcastPacket(MobPool.teleportRequest(this, 2, getPosition()));
    }

    public void teleport(Position position, int skillAfter) {
        setPosition(position);
        getField().broadcastPacket(MobPool.teleportRequest(this, skillAfter, getPosition()));
    }

    public void buff(double multi) {
        if(MobConstants.isCantBuffMob(templateId)) {return;}
        ForcedMobStat fms = getForcedMobStat();
        setMaxHp((long) (getMaxHp() * multi));
        setHp((long) (getHp() * multi));
        fms.setExp((long) (fms.getExp() * multi));
        setPad((int) (getPad() + Math.sqrt(multi)));
        setMad((int) (getMad() + Math.sqrt(multi)));
        setBuffed(true);
    }

    public int getAttackCooldown() {
        return attackCooldown;
    }

    public void setAttackCooldown(int attackCooldown) {
        this.attackCooldown = attackCooldown;
    }

    /**
     * Sets the amount of time before this mob can summon an "afterdead" summon (like Queen).
     *
     * @param nextSummonPossible amount of seconds until next possible summon
     */
    public void setNextSummonPossible(int nextSummonPossible) {
        this.nextSummonPossible = System.currentTimeMillis() + nextSummonPossible * 1000;
    }

    public boolean canResummon() {
        return nextSummonPossible <= System.currentTimeMillis();
    }

    public Map<String, Object> getProperties() {
        return properties;
    }

    public boolean hasProperty(String key) {
        return getProperties().containsKey(key);
    }

    public Object getProperty(String key) {
        return getProperties().get(key);
    }

    public void setProperty(String key, Object value) {
        getProperties().put(key, value);
    }

    public void setProperties(Map<String, Object> properties) {
        this.properties = properties;
    }

    public void setBroadcastLeaveField(boolean broadcastLeaveField) {
        this.broadcastLeaveField = broadcastLeaveField;
    }

    public boolean isBroadcastLeaveField() {
        return broadcastLeaveField;
    }

    public List<AppearingFoothold> getAppearingFootholds() {
        return appearingFootholds;
    }

    public void addAppearingFoothold(AppearingFoothold afh) {
        getAppearingFootholds().add(afh);
    }

    public List<Rect> getPurpleAttacks() {
        return purpleAttacks;
    }

    public void setPurpleAttacks(List<Rect> purpleAttacks) {
        this.purpleAttacks = purpleAttacks;
    }

    public void addPurpleAttack(Rect rect) {
        getPurpleAttacks().add(rect);
    }

    public void setBuffed(boolean buffed) {
        this.buffed = buffed;
    }

    public boolean isBuffed() {
        return buffed;
    }

    public DropInfo generateMesoDrop() {
        int baseMoney = Math.min(2, getNxDropAmount());

        var drop = new DropInfo(GameConstants.MAX_DROP_CHANCE,
                GameConstants.MIN_MONEY_MULT * baseMoney,
                GameConstants.MAX_MONEY_MULT * baseMoney
        );
        drop.generateNextDrop();

        return drop;
    }

    public void setSelfDestructionTimer() {
        int timeToSelfDestruct = getMobInfo().getSelfDestructionAfter();
        if (timeToSelfDestruct > 0) {
            EventManager.addEvent(this::selfDestruct, timeToSelfDestruct, TimeUnit.SECONDS);
        }
    }

    public void disappear() {
        getField().removeLife(getObjectId());
        getField().broadcastPacket(MobPool.leaveField(getObjectId(), DeathType.DISAPPEAR));

    }

    public void selfDestruct() {
        getField().removeLife(getObjectId());
        getField().broadcastPacket(MobPool.leaveField(getObjectId(), DeathType.values()[Math.abs(getMobInfo().getSelfDestructionAction())]));
    }

    private Set<MobSkill> getBlockedSkills() {
        return blockedSkills;
    }

    public void addBlockedSkill(MobSkill ms) {
        if (ms != null) {
            getBlockedSkills().add(ms);
        }
    }

    public void removeBlockedSkill(MobSkill ms) {
        if (ms != null) {
            getBlockedSkills().remove(ms);
        }
        getField().broadcastPacket(MobPool.mobAttackBlock(this, getBlockedAttacks()));
    }

    private Set<Integer> getBlockedAttacks() {return blockedAttacks;}

    public void addBlockedAttack(int attackID){
        getBlockedAttacks().add(attackID);

        getField().broadcastPacket(MobPool.mobAttackBlock(this, getBlockedAttacks()));
    }

    public void removeBlockedAttack(int attackID){
        getBlockedAttacks().remove(attackID);
        getField().broadcastPacket(MobPool.mobAttackBlock(this, getBlockedAttacks()));
    }

    public void addBlockedSkill(MobSkillID mobSkillID, int slv) {
        addBlockedSkill(getSkillByMobSkillInfo(mobSkillID.getVal(), slv));
    }

    public void removeBlockedSkill(MobSkillID mobSkillID, int slv) {
        removeBlockedSkill(getSkillByMobSkillInfo(mobSkillID.getVal(), slv));
    }

    public boolean isBlockedSkill(MobSkill ms) {
        return getBlockedSkills().stream().anyMatch(m -> m.getLevel() == ms.getLevel() && m.getSkillID() == ms.getSkillID());
    }

    private Set<Integer> getSpawnedMobs() {
        if (spawnedMobs == null) {
            spawnedMobs = new HashSet<>();
        }
        return spawnedMobs;
    }

    public void addSpawnedMob(int mobId) {
        getSpawnedMobs().add(mobId);
    }

    public boolean hasSpawnedMob(int mobId) {
        return getSpawnedMobs().contains(mobId);
    }

    public void removeSpawnedMob(int mobId) {
        getSpawnedMobs().remove(mobId);
    }

    public void setReflectTime(long reflectTime) {
        this.reflectTime = reflectTime;
    }

    public long getReflectTime() {
        return reflectTime;
    }

    public boolean hasDamageReflect() {
        var mts = getTemporaryStat();
        var hasCounterStat = mts.hasCurrentMobStat(MobStat.PCounter) || mts.hasCurrentMobStat(MobStat.MCounter);
        return hasCounterStat && System.currentTimeMillis() > getReflectTime() + DR_REACTION_TIME;
    }

    public void clearCharInfo() {
        getDamageDone().clear();
    }

    public void addSkillDelayRects(int msId, int slv, List<Rect> skillDelayRects) {
        getSkillDelayRects().put(new Tuple<>(msId, slv), skillDelayRects);
    }

    private Map<Tuple<Integer, Integer>, List<Rect>> getSkillDelayRects() {
        if (skillDelayRects == null) {
            skillDelayRects = new HashMap<>();
        }
        return skillDelayRects;
    }

    public List<Rect> getSkillDelayRects(MobSkillID msID, int slv) {
        return getSkillDelayRects().get(new Tuple<>(msID.getVal(), slv));
    }

    public boolean isSplit() {
        return split;
    }

    public void setSplit(boolean split) {
        this.split = split;
    }

    public int getOption() {
        return option;
    }

    public void setOption(int option) {
        this.option = option;
    }

    public int getEffectItemID() {
        return effectItemID;
    }

    public void setEffectItemID(int effectItemID) {
        this.effectItemID = effectItemID;
    }

    public int getPhase() {
        return phase;
    }

    public void setPhase(int phase) {
        this.phase = phase;
    }

    public int getCurZoneDataType() {
        return curZoneDataType;
    }

    public void setCurZoneDataType(int curZoneDataType) {
        this.curZoneDataType = curZoneDataType;
    }

    public int getRefImgMobID() {
        return refImgMobID;
    }

    public void setRefImgMobID(int refImgMobID) {
        this.refImgMobID = refImgMobID;
    }

    public int getLifeReleaseOwnerAID() {
        return lifeReleaseOwnerAID;
    }

    public void setLifeReleaseOwnerAID(int lifeReleaseOwnerAID) {
        this.lifeReleaseOwnerAID = lifeReleaseOwnerAID;
    }

    public String getLifeReleaseOwnerName() {
        return lifeReleaseOwnerName;
    }

    public void setLifeReleaseOwnerName(String lifeReleaseOwnerName) {
        this.lifeReleaseOwnerName = lifeReleaseOwnerName;
    }

    public String getLifeReleaseMobName() {
        return lifeReleaseMobName;
    }

    public void setLifeReleaseMobName(String lifeReleaseMobName) {
        this.lifeReleaseMobName = lifeReleaseMobName;
    }

    public void setSummonEffect(int summonEffect) {
        this.summonEffect = summonEffect;
    }

    public int getSummonEffect() {
        return summonEffect;
    }

    public List<MobSkill> getSkills() {
        var mobInfo = getMobInfo();
        var skills = new ArrayList<MobSkill>();
        if (mobInfo.getSkills() != null) {
            skills.addAll(mobInfo.getSkills());
        }
        skills.addAll(getEliteSkills());
        return skills;
    }

    public boolean isBoss() {
        return getMobInfo().isBoss();
    }

    public MobSkill getSkillByMobSkillInfo(MobSkillInfo mobSkill) {
        return getSkillByMobSkillInfo(mobSkill.getSkillId(), mobSkill.getLevel());
    }

    public MobSkill getSkillByMobSkillInfo(int id, int slv) {
        return getSkills().stream()
                .filter(ms -> ms.getSkillID() == id && ms.getLevel() == slv)
                .findFirst().orElse(null);
    }

    public MobSkill findPrepareSkill(MobSkillAttackInfo msai) {
        var mobSkillId = msai.skillID;
        var mobSkillSlv = msai.slv;

        var preparedSkill = getPreparedSkill();
        if (preparedSkill == null) {
            return null;
        }

        return mobSkillId == preparedSkill.getSkillID() && mobSkillSlv == preparedSkill.getLevel()
                ? preparedSkill
                : null;
    }

    public void setForcedSkill(MobSkill forcedSkill) {
        this.forcedSkill = forcedSkill;
    }

    public MobSkill getForcedSkill() {
        return forcedSkill;
    }

    public void setForcedSkill(int level, int slv) {
        var skill = getSkillByMobSkillInfo(level, slv);
        if (skill != null) {
            setForcedSkill(skill);
        }
    }

    public boolean isOnTriggerThreshold() {
        if (hpTriggerBlockPercs == null) {
            return false;
        }
        return getHpPerc() - 2 <= getHpTriggerBlockPercs().peek();
    }

    public boolean isBlockEverything() {
        return isBlockEverything;
    }

    public void setBlockEverything(boolean blockEverything) {
        isBlockEverything = blockEverything;
    }

    public boolean isBlockAttack() {
        return isBlockAttack;
    }

    public void setBlockAttack(boolean blockAttack) {
        isBlockAttack = blockAttack;
    }

    public void clear() {
        clearCharInfo();
        getTemporaryStat().clear();
    }

    public void update() {
        getTemporaryStat().update();
    }

    public void changePhase(int phase) {
        setPhase(phase);
        getField().broadcastPacket(MobPool.changePhase(getObjectId(), getPhase()));
    }

    public void changeZoneId(int zoneId) {
        setCurZoneDataType(zoneId);
        getField().broadcastPacket(FieldPacket.changeMobZone(getObjectId(), getCurZoneDataType()));
    }

    public void setPreparedSkill(MobSkill preparedSkill) {
        this.preparedSkill = preparedSkill;
    }

    public MobSkill getPreparedSkill() {
        return preparedSkill;
    }

    public MobSkill getPreparedSkillFromAttack() {
        return preparedSkillFromAttack;
    }

    public void setPreparedSkillFromAttack(MobSkill preparedSkillFromAttack) {
        this.preparedSkillFromAttack = preparedSkillFromAttack;
    }

    public MobSkill getSkillByIdx(int idx) {
        return getSkills().stream()
                .filter(s -> s.getSkillIdx() == idx)
                .findFirst().orElse(null);
    }

    public boolean hasBlockedSkill(MobSkill mobSkill) {
        return getBlockedSkills().contains(mobSkill);
    }

    public int getMobGroupSpawnProgress() {
        return mobGroupSpawnProgress;
    }

    public void increaseMobGroupSpawnProgress() {
        this.mobGroupSpawnProgress += 1;
    }
}
