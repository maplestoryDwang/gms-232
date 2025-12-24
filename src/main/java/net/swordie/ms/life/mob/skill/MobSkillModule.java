package net.swordie.ms.life.mob.skill;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserPool;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.ObstacleAtomCreateType;
import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.DeathType;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.mob.boss.lucid.FairyDust;
import net.swordie.ms.life.mob.boss.lucid.LucidSkillType;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.mob.boss.will.WillSkillPacket;
import net.swordie.ms.life.mob.boss.will.WillSkillType;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelperFactory;
import net.swordie.ms.world.field.instance.instancehelper.boss.HardHillaInstanceHelper;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.life.mob.skill.MobSkillStat.*;

public class MobSkillModule {

    private static final Logger log = LogManager.getLogger();

    public static void handlePapulatusSkill(MobTemporaryStat mts, short slv, MobSkillInfo msi, Field field, Option o, Option o2) {
        switch (slv) {
            case 1:
            case 2:
                // 30 sec timer thing
                applyPapulatusTimer(mts, msi, field, o, o2);
                break;
        }
    }

    public static void handleLucidSkill(Mob mob, short slv, MobSkillInfo msi, Field field) {
        LucidSkillType lucidSkillType = LucidSkillType.getSkillByVal(slv);
        Random random = new Random();
        switch (lucidSkillType) {
            case FlowerTrap1:
            case FlowerTrap2:
            case FlowerTrap3:
                field.broadcastPacket(LucidFieldPacket.doLucidSkillFlowerTrap(mob.getPosition(), random.nextInt(3), random.nextBoolean()));
                break;
            case FairyDust:
            case FairyDust2:
                List<Object> fairyDustList = new ArrayList<>();
                int numberOfFairyDust = msi.getSkillStatIntValue(w) - random.nextInt(msi.getSkillStatIntValue(w2));
                for (int i = 0; i < numberOfFairyDust; i++) {
                    fairyDustList.add(new FairyDust(
                            random.nextInt(3),
                            (msi.getSkillStatIntValue(s2) - random.nextInt(msi.getSkillStatIntValue(s))),
                            lucidSkillType == LucidSkillType.FairyDust2 ? random.nextInt(359) : random.nextInt(140) + 200,
                            msi.getSkillStatIntValue(u))
                    );
                }
                field.broadcastPacket(LucidFieldPacket.doLucidSkillFairyDust(fairyDustList));
                break;
            case LaserRain:
                List<Object> laserIntervalList = new ArrayList<>() {
                    {
                        for (int i = 0; i < msi.getSkillStatIntValue(z); i++) {
                            add(msi.getSkillStatIntValue(w));
                        }
                    }
                };
                field.broadcastPacket(LucidFieldPacket.doLucidSkillLaserRain(laserIntervalList, msi.getSkillStatIntValue(s)));
                break;
            case Teleport:
                field.broadcastPacket(LucidFieldPacket.doLucidSkillTeleport(random.nextInt(8)));
                break;
            case Dragon:
                boolean isLeft = random.nextBoolean();
                if (field.getId() == 450004150) {
                    field.broadcastPacket(LucidFieldPacket.lucidDragonCreated(1, new Position(), new Position(), isLeft));
                } else {
                    int createPosX = isLeft ? -138 : 1498;
                    int createPosY = (random.nextBoolean() ? -1312 : 238);
                    int posX = createPosX;
                    int posY = mob.getY();
                    field.broadcastPacket(LucidFieldPacket.lucidDragonCreated(2, new Position(posX, posY), new Position(createPosX, createPosY), isLeft));
                }
                break;
            case Rush:
                field.broadcastPacket(LucidFieldPacket.doLucidSkillRush());
                break;
            case WelcomeBarrage:
                field.broadcastPacket(LucidFieldPacket.lucidWelcomeBarrage(2));
                field.broadcastPacket(LucidFieldPacket.lucidStainedGlassOnOff(false, Arrays.asList("Bblue1", "Bblue2", "Bblue3", "Bred1", "Bred2", "Bred3", "Mred2", "Mred3", "Myellow1", "Myellow2", "Myellow3")));
                field.broadcastPacket(LucidFieldPacket.lucidFlyingMode(true));
                field.broadcastPacket(LucidFieldPacket.lucidWelcomeBarrage(3, 50, 120, 500, 3));
                field.broadcastPacket(LucidFieldPacket.lucidWelcomeBarrage(4, 180, 150, 30, 30, 700, 12, 5, 1));
                field.broadcastPacket(LucidFieldPacket.lucidWelcomeBarrage(3, 50, 100, 500, 4));
                mob.putSkillCooldown(msi.getSkillId(), slv, System.currentTimeMillis() + BossConstants.LUCID_WELCOME_BARRAGE_COOLTIME); // Skill Info doens't have  Interval value
                break;
        }
    }

    public static void createLaserAttack(MobTemporaryStat mts, MobSkillInfo msi, Option o) {
        if (!mts.hasCurrentMobStat(MobStat.Laser)) {
            o.nOption = 1;
            o.wOption = msi.getSkillStatIntValue(w);
            o.uOption = msi.getSkillStatIntValue(z);
            mts.addMobSkillOptionsAndBroadCast(MobStat.Laser, o);
        }
    }

    public static void fireAtRandomAttacks(Mob mob, short slv, MobSkillInfo msi, Field field) {
        if (mob.getPurpleAttacks().size() > 0) {
            Rect r = mob.getPurpleAttacks().get(0);
            for (Char bChr : field.getChars().stream().filter(c -> r.hasPositionInside(c.getPosition())).collect(Collectors.toList())) {
                bChr.write(UserPacket.effect(Effect.mobSkillHit(msi.getSkillId(), slv)));
                bChr.damage(bChr.getHPPerc(msi.getSkillStatIntValue(MobSkillStat.fixDamR)), true);
            }
            mob.getPurpleAttacks().remove(r);
        } else {
            log.warn("No purple attacks for mob " + mob.getTemplateId());
        }
    }

    public static void broadcastCastingBar(Mob mob, MobSkillInfo msi, Field field) {
        field.broadcastPacket(MobPool.castingBarSkill(mob.getObjectId(), MobCastingBarSkill.start(msi.getLevel(),
                msi.getSkillStatIntValue(castingTime), false, false)));

        EventManager.addEvent(() -> onCastingBarEnd(mob, msi, field), msi.getSkillStatIntValue(castingTime));
    }

    private static void onCastingBarEnd(Mob mob, MobSkillInfo msi, Field field) {
        if (!field.getMobs().contains(mob)) {
            // Mob has disappeared while casting the cast bar
            return;
        }

        switch (msi.getLevel()) {
            case 13: // Zakum regen
                var otherSkill = mob.getSkillByIdx(1);
                field.broadcastPacket(MobPool.castingBarSkill(mob.getObjectId(), MobCastingBarSkill.end(
                        true, 30, otherSkill.getSkillID(), otherSkill.getLevel(), 0
                )));
                mob.setForcedSkill(otherSkill);
                field.removeLife(mob);
                otherSkill.applyEffect(mob, true);
                break;
        }
    }

    public static void tossChars(Mob mob, MobSkillInfo msi, Field field) {
        for (Char bChr : field.getChars()) {
            bChr.write(UserPool.tossedByMobSkill(bChr.getId(), mob, msi));
        }
    }

    public static void createBounceAttack(Mob mob, short slv, MobSkillInfo msi, Field field) {
        boolean isConvex = slv == 6 || slv == 13 || slv == 14 || slv == 16;
        if (mob.getAppearingFootholds().size() > 0 || !isConvex) {
            mob.getAppearingFootholds().forEach(afh -> field.addLifeForTime(afh, BossConstants.LOTUS_FALLING_FOOTHOLD_DURATION * 1000));
            mob.getField().broadcastPacket(MobPool.createBounceAttackSkill(mob, msi, isConvex, mob.getAppearingFootholds()));
            mob.getAppearingFootholds().clear();
        }
    }

    public static void createObstacleAttack(Mob mob, MobSkillInfo msi, Field field) {
        var xPos = msi.getSkillStatIntValue(x2); // Starting Position  offset from mob.getPositions()
        int yPos = msi.getSkillStatIntValue(y2); // Starting Position  offset from mob.getPositions()
        int mobTemplateId = msi.getSkillStatIntValue(x); // why?
        var skillAfter = msi.getSkillStatIntValue(MobSkillStat.skillAfter);
        Position position = new Position(mob.getX() + xPos, mob.getY() + yPos);
        switch (msi.getLevel()) {
            case 2: // Demian Phase 1
            case 4: // Demian Phase 2
                ObstacleAtomEnum oae = msi.getLevel() == 2 ? ObstacleAtomEnum.DemianYellowOrb : ObstacleAtomEnum.DemianRedOrb;
                ObstacleAtomCreateType oact = ObstacleAtomCreateType.RADIAL;
                ObstacleRadianInfo ori = new ObstacleRadianInfo(mobTemplateId, position.getX(), position.getY(), position.getX(), 0);
                Set<ObstacleAtomInfo> obstacleAtomInfos = new HashSet<>();
                int atomsCreated = msi.getLevel() == 2 ? 50 : 200;
                for (int i = 0; i < atomsCreated; i++) {
                    Position endPos = new Position(mob.getX() + new Random().nextInt(1600) - 800, mob.getY());
                    ObstacleAtomInfo oai = new ObstacleAtomInfo(oae.getType(), 1, position, endPos,
                            oae.getHitBox(), 90, 0, 1000 + (i * 100), yPos, 100, 2, (int) ObstacleAtomInfo.getLengthByPositions(position, endPos) - 50,
                            0);
                    obstacleAtomInfos.add(oai);
                }
                field.broadcastPacket(FieldPacket.createObstacle(oact, null, ori, obstacleAtomInfos));
                break;
            default:
                log.debug(String.format("[MobSkill::applyEffect] Unhandled ObstacleAttack, slv = %d", msi.getLevel()));
                break;
        }
    }

    public static void summonMobs(Mob mob, MobSkillInfo msi, Field field, boolean afterDead) {
        Rect rect;
        Position spawnPos = mob.getPosition();
        if (msi.getLt() != null) {
            rect = mob.getRectAround(new Rect(msi.getLt(), msi.getRb()));
            if(mob.getTemplateId() == 9601695){ //Goo PQ Boss, can't spawn below (If there's more of these we should put it in an actual constants func)
                rect = mob.getRectAround(new Rect(msi.getLt().getX(), mob.getY() - 5, msi.getRb().getX(), mob.getY()));
            }
            spawnPos = rect.getRandomPositionInside();
        }
        int summonEffect = msi.getSkillStatIntValue(MobSkillStat.summonEffect);
        Set<Mob> spawnedMobs = field.getMobs().stream()
                .filter(m -> m.getMobSpawnerId() == mob.getObjectId())
                .collect(Collectors.toSet());

        var toSpawnIds = new ArrayList<>(msi.getInts());
        if (afterDead) {
            if (!mob.canResummon()) {
                // mob is still on cooldown for summon
                return;
            }
            // randomize which one gets spawned if isAfterDead
            Collections.shuffle(new ArrayList<>(toSpawnIds));
        }
        int xOffset = 0;
        for (int mobId : msi.getInts()) {
            long spawnedSize = spawnedMobs.stream().filter(m -> m.getTemplateId() == mobId).count();
            int maxSpawned = msi.getSkillStatIntValue(limit);
            boolean spawnOnce = maxSpawned == -1;
            if (maxSpawned <= 0) {
                maxSpawned = 100;
            }
            int targetType = msi.getSkillStatIntValue(MobSkillStat.targetType);
            if (targetType == 1) { //target type 1 is on a position
                spawnPos = Util.getRandomFromCollection(field.getChars()).getPosition();
            } else {

                //Dont spawn monsters on multiple platforms

                if (msi.getSkillStatIntValue(MobSkillStat.summonEffect) == -2) { //Random positions
                    spawnPos = field.getRandomPosOnWalkableFoothold(100, true);
                } else {
                    Foothold targetFH = mob.getField().findFootHoldBelow(new Position(spawnPos.getX() + xOffset, spawnPos.getY()));
                    if (targetFH != null) {
                        if (targetFH.getX2() > spawnPos.getX() + xOffset + 25) {
                            xOffset += 25;
                        }
                    }
                }
            }

            if (spawnedSize < maxSpawned
                    || (spawnOnce && field.getMobs().stream().noneMatch(spawnedMob -> spawnedMob.getTemplateId() == mobId))) {
                Mob m = mob.getField().spawnMob(mobId, spawnPos.getX() + xOffset, spawnPos.getY(), false, -1);
                if(msi.getSkillStatIntValue(linkHP) == 1) {
                    m.setHp(mob.getHp());
                    m.getForcedMobStat().setMaxHP(mob.getMaxHp());
                }
                m.setSummonEffect(summonEffect);
                m.setMobSpawnerId(mob.getObjectId());
                m.setSelfDestructionTimer();

                if (afterDead) {
                    m.setHp(mob.getHp());
                    m.getForcedMobStat().setMaxHP(mob.getMaxHp());
                    break; // only spawn 1 mob if afterDead is true
                }

            }
        }
        if (afterDead) {
            // maybe grab animation from wz, so far it's just -2 (no ani)
            field.broadcastPacket(MobPool.leaveField(mob.getObjectId(), DeathType.EXPLODE));

            field.removeLife(mob.getObjectId());
            mob.setNextSummonPossible(GameConstants.MOB_RESUMMON_COOLDOWN);
        }
        if (msi.getMobGroups().size() > 0) {
            List<Integer> mobGroup = msi.getMobGroups().get(0);
            if (mobGroup.size() - 1 > mob.getMobGroupSpawnProgress()) {
                Mob m = mob.getField().spawnMob(mobGroup.get(mob.getMobGroupSpawnProgress()), spawnPos.getX() + xOffset, spawnPos.getY(), false, 0);
                m.setSummonEffect(summonEffect);
                m.setMobSpawnerId(mob.getObjectId());
                m.setSelfDestructionTimer();
                mob.increaseMobGroupSpawnProgress();
            } else{
                switch(mob.getTemplateId()){
                    case BossConstants.CYGNUS_EASY: //Only FSM skill when all have knights have already spawned
                        mob.setForcedSkill(200, 222);
                        break;
                }
            }
        }
    }

    public static void createMagnet(Mob mob, MobSkillInfo msi, Option o, Set<Char> chars, Field field) {
        o.nOption = msi.getSkillStatIntValue(x);
        for (Char c : chars) {
            TemporaryStatManager tsm = c.getTemporaryStatManager();
            o.nOption = mob.getPosition().getX();
            tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.Magnet, o);
            Option o2 = o.deepCopy();
            o2.nOption = msi.getSkillStatIntValue(x);
            tsm.putCharacterStatValue(CharacterTemporaryStat.MagnetArea, o2);
            tsm.sendSetStatPacket();
        }
    }

    public static void giveTotalImmunity(Mob mob, MobTemporaryStat mts, MobSkillInfo msi, Option o, Option o2) {
        givePadImmunityAndCounter(mob, mts, msi, o, o2);
        giveMadImmunityAndCounter(mob, mts, msi, o, o2);
    }

    public static void givePadImmunityAndCounter(Mob mob, MobTemporaryStat mts, MobSkillInfo msi, Option o, Option o2) {
        mob.setReflectTime(System.currentTimeMillis());
        o.nOption = msi.getSkillStatIntValue(x);
        o.mOption = 100;
        o.bOption = msi.getSkillStatIntValue(MobSkillStat.delay);
        o.wOption = msi.getSkillStatIntValue(y);
        mts.addMobSkillOptionsAndBroadCast(MobStat.PCounter, o);

        o2.nOption = 1;
        mts.addMobSkillOptionsAndBroadCast(MobStat.PImmune, o2);
    }

    public static void giveMadImmunityAndCounter(Mob mob, MobTemporaryStat mts, MobSkillInfo msi, Option o, Option o2) {
        mob.setReflectTime(System.currentTimeMillis());
        o.nOption = msi.getSkillStatIntValue(x);
        o.mOption = 100;
        o.bOption = msi.getSkillStatIntValue(MobSkillStat.delay);
        o.wOption = msi.getSkillStatIntValue(y);
        mts.addMobSkillOptionsAndBroadCast(MobStat.MCounter, o);

        o2.nOption = 1;
        mts.addMobSkillOptionsAndBroadCast(MobStat.MImmune, o2);
    }

    public static void giveFullImmunity(Mob mob, MobTemporaryStat mts, MobSkillInfo msi, Option o){
        // apply P/MImmune
        o.nOption = 1;
        mts.addMobSkillOptionsAndBroadCast(MobStat.PImmune, o);
        mts.addMobSkillOptionsAndBroadCast(MobStat.MImmune, o);
    }

    public static void teleportMob(Mob mob, MobSkillInfo msi, Field field) {
        int skillAfter = msi.getSkillStatIntValue(x);
        int xPos = Math.abs(msi.getSkillStatIntValue(y));
        Position newPos = new Position(mob.isLeft() ? mob.getX() - xPos : mob.getX() + xPos, mob.getY());
        if(xPos == 0){ //If no defined position, do a random teleport
            var chars = field.getCharsReadOnly();
            if(chars.size() > 0) {
                var randomChr = new ArrayList<>(chars).get(Util.getRandom(chars.size() - 1));
                newPos = randomChr.getPosition();
            } else {
                newPos = field.getRandomPosOnWalkableFoothold(200, false);
            }

        }

        if (mob.getTemplateId() == BossConstants.VELLUM_CHAOS) {
            newPos = mob.isLeft() ? new Position(1032, 443) : new Position(-1776, 443);
        }

        if (MobConstants.isDamien(mob.getTemplateId())) {
            field.broadcastPacket(MobPool.demianDelayedAttackCreate(mob, msi.getSkillId(), msi.getLevel(), msi));
            return;
        }
        if (MobConstants.isZakumBody(mob.getTemplateId())) {
            var chars = field.getCharsReadOnly();
            var randomChr = new ArrayList<>(chars).get(Util.getRandom(chars.size() - 1));
            skillAfter = 2;
            if (randomChr != null) {
                // Only allow it to go jump on the floor, no platforms
                mob.teleport(new Position(randomChr.getPosition().getX(), 86), skillAfter);
                return;
            }
        }
        if (mob.getTemplateId() == BossConstants.VON_LEON_EASY || mob.getTemplateId() == BossConstants.VON_LEON_NORMAL || mob.getTemplateId() == BossConstants.VON_LEON_HARD) {
            var chars = field.getCharsReadOnly();
            var randomChr = new ArrayList<>(chars).get(Util.getRandom(chars.size() - 1));
            mob.teleport(new Position(mob.getMostDamageChar() != null ? mob.getMostDamageChar().getPosition().getX() : randomChr.getPosition().getX(), mob.getPosition().getY()), skillAfter);
            return;
        }
        mob.teleport(newPos, skillAfter);
    }

    public static void giveImmunity(MobTemporaryStat mts, MobSkillInfo msi, Option o, MobStat pImmune) {
        if (!mts.hasCurrentMobStat(MobStat.PImmune) && !mts.hasCurrentMobStat(MobStat.MImmune)) {
            o.nOption = msi.getSkillStatIntValue(x);
            mts.addMobSkillOptionsAndBroadCast(pImmune, o);
        }
    }

    public static void createAreaPoison(Mob mob, boolean fromOtherSkill, short skill, short slv, MobSkillInfo msi, Field field) {
        var aa = AffectedArea.getMobAA(mob, skill, slv, msi);
        var info = field.getInfo();

        // Lotus  Electric Ground Attack
        if (slv == 26 || slv == 25 || slv == 24 || slv == 27) {
            if (fromOtherSkill) {
                aa.setRect(new Rect(info.getVrLeft(), -29, info.getVrRight(), -14)); // whole map
                aa.setDelay((short) 8);
                EventManager.addEvent(() -> field.spawnAffectedArea(aa), BossConstants.LOTUS_FALLING_FOOTHOLD_SHOCK_TERRAIN_DELAY, TimeUnit.MILLISECONDS);
            }
        } else {
            aa.setPosition(mob.getPosition());
            field.spawnAffectedArea(aa);
        }
    }

    public static void createAffectedArea(Mob mob, short skill, short slv, MobSkillInfo msi, MobSkillID msID, Field field) {
        if (mob.getSkillDelayRects(msID, slv) != null && mob.getSkillDelayRects(msID, slv).size() > 0) {
            for (var skillDelayRect : mob.getSkillDelayRects(msID, slv)) {
                AffectedArea aa = AffectedArea.getMobAA(mob, skill, slv, msi);
                aa.setRect(skillDelayRect);
                aa.setPosition(mob.getPosition());

                field.spawnAffectedArea(aa);
            }
        } else {
            AffectedArea aa = AffectedArea.getMobAA(mob, skill, slv, msi);
            aa.setPosition(mob.getPosition());

            if(msID.equals(MobSkillID.AreaTimezone)){
                Position pos = field.getRandomPosOnWalkableFoothold(150, false);
                aa.setRect(pos.getRectAround(new Rect(msi.getLt(), msi.getRb())));
                aa.setPosition(pos);
            }

            // Lotus  Gravity Pull && Queen pulls
            if (msID.equals(MobSkillID.AreaForceFromUser) || msID.equals(MobSkillID.AreaForce)) {
                Rect rect;
                if (msi.getLt() != null) {
                    aa.setIdk2((byte) 1);
                    rect = new Rect(msi.getLt(), msi.getRb());
                } else {
                    rect = new Rect(field.getInfo().getVrLeft(), field.getInfo().getVrTop(), field.getInfo().getVrRight(), field.getInfo().getVrBottom());
                }
                if(!mob.isLeft()) {
                    rect = rect.horizontalFlipAround(0);
                }
                rect = rect.move(mob.getX(), mob.getY());
                aa.setPosition(mob.getPosition());
                aa.setOption(mob.getPosition().getX()); // option = center point

                if(msi.getSkillStatIntValue(targetType) == 1) { //if a player should be the position
                    Char randomChr = Util.getRandomFromCollection(field.getChars());
                    if(randomChr != null){
                        rect = randomChr.getRectAround(rect);
                        aa.setOption(randomChr.getPosition().getX());
                        aa.setPosition(randomChr.getPosition());
                    }
                }
                aa.setRect(rect);

                int forcex = msi.getSkillStatIntValue(MobSkillStat.forcex);
                int force = msi.getSkillStatIntValue(MobSkillStat.force);

                if(mob.isLeft()) {
                    force *= -1;
                }

                //Queen AreaForce uses forceX as center point
                if(forcex == 0) {
                    forcex = aa.getOption();
                }
                aa.setElemAttr(8); // G
                aa.setForce((force << 16) + forcex);
            }
            field.spawnAffectedArea(aa);
        }
    }

    public static void createAreaPoison(Char chr, int mobID, int attackIdx, Position pos) {
        Mob mob = (Mob) chr.getField().getLifeByObjectID(mobID);
        if(mob == null) { return;}
        MobSkill skill = mob.getAttackById(attackIdx);
        MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel((short) skill.getDisease(), (short) skill.getLevel());
        var aa = AffectedArea.getMobAA(mob, (short) skill.getDisease(), (short) skill.getLevel(), msi);
        aa.setPosition(pos);
        aa.setRect(pos.getRectAround(new Rect(msi.getLt(), msi.getRb())));
        EventManager.addEvent(() -> mob.getField().spawnAffectedArea(aa), BossConstants.CYGNUS_FLAMES_DELAY, TimeUnit.MILLISECONDS);
    }

    public static void applyDiseaseToPlayers(short slv, MobSkillID msID, Set<Char> chars, MobSkill mobSkill) {
        Char chr = chars.size() == 0 ? null : Util.getRandomFromCollection(chars);
        if (chr != null) {
            applyEffect(chr, mobSkill);
        }
        if (msID == MobSkillID.Fear && slv == 26) {
            // Black Mage P2 mass skill
        }
    }

    public static void healMobs(MobSkillInfo msi, Set<Mob> mobs) {
        for (Mob m : mobs) {
            m.heal(msi.getSkillStatIntValue(x));
        }
    }

    public static void giveTempStat(MobTemporaryStat mts, MobSkillInfo msi, Option o, Set<Mob> mobs, MobStat powerUp) {
        // If Mob has been 'Crashed' not allowed to buff up itself or others.
        if (mts.isCrashed()) {
            return;
        }

        o.nOption = msi.getSkillStatIntValue(x);
        mts.addMobSkillOptionsAndBroadCast(powerUp, o);

        for (Mob m : mobs) {
            m.getTemporaryStat().addMobSkillOptionsAndBroadCast(powerUp, o);
        }
    }

    private static void applyPapulatusTimer(MobTemporaryStat mts, MobSkillInfo msi, Field field, Option o, Option o2) {
        o.nOption = 1;
        o.slv = 2;
        o.xOption = o.tOption * 1000;
        mts.addMobSkillOptionsAndBroadCast(MobStat.AddEffect, o, (short) o.tOption);

        var mobIdsToSpawn = new int[]{8500007, 8500008};

        for (var fChr : field.getCharsReadOnly()) {
            var tsm = fChr.getTemporaryStatManager();
            var randTime = Util.getRandom(msi.getSkillStatIntValue(MobSkillStat.userTimeMin),
                    msi.getSkillStatIntValue(MobSkillStat.userTimeMax));
            o2.nOption = 1;
            o2.tOption = randTime;
            o2.slv = 3;
            tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.PapulatusTimeLock, o2);
            tsm.sendSetStatPacket();

            for (var mobId : mobIdsToSpawn) {
                for (int i = 0; i < BossConstants.PAPULATUS_SOLO_TIMER_MOB_COUNT; i++) {
                    var randomPos = field.getRandomWalkableFoothold().getRandomPosition();
                    field.spawnMob(mobId, randomPos.getX(), randomPos.getY(), false, 0);
                }
            }
        }
    }

    public static void applyEffect(Char chr, MobSkill mobSkill) {
        short skill = (short) mobSkill.getSkillID();
        if (skill == 0) {
            skill = (short) mobSkill.getDisease();
        }
        short level = (short) mobSkill.getLevel();
        MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(skill, level);
        MobSkillID msID = MobSkillID.getMobSkillIDByVal(skill);
        Field field = chr.getField();
        Option o = new Option(skill);
        o.slv = level;
        double statusResistancePercent = chr.getTotalStat(BaseStat.asr) == 0 ? 0 : Math.floor(28 * Math.log10(chr.getTotalStat(BaseStat.asr)) + 1) / 100D;
        o.tOption = Math.max(1, (int) ((double) msi.getSkillStatIntValue(time) - (double) msi.getSkillStatIntValue(time) * (statusResistancePercent)));
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        boolean appliedDisease = Util.succeedProp(msi.getSkillStatIntValue(prop) != 0 ? msi.getSkillStatIntValue(prop) : 100);
        switch (msID) {
            case Seal:
            case Darkness:
            case Weakness:
            case Stun:
            case Curse:
            case Slow:
            case Fear:
            case DeathMark:
            case DispelItemOption:
            case Attract:
            case DarkTornado:
            case PainMark:
            case ReverseInput:
            case StopPortion:
                if (appliedDisease) {
                    o.nOption = 1;

                    // Zakum weirdness
                    if (msID == MobSkillID.Stun && level == 75) {
                        o.tOption = msi.getSkillStatIntValue(x);
                    }

                    tsm.putCharacterStatValueFromMobSkill(msID.getAffectedCTS(), o);
                    tsm.sendSetStatPacket();
                }
                break;
            case Lapidification:
                if (appliedDisease && !chr.isDead()) {
                    o.nOption = 1;
                    o.tOption = msi.getSkillStatIntValue(time); //always use base cd for this
                    tsm.putCharacterStatValueFromMobSkill(msID.getAffectedCTS(), o);
                    tsm.sendSetStatPacket();
                }
                break;
            case VenomSnake:
                //Poison CTS
                o.nOption = 1;
                tsm.putCharacterStatValueFromMobSkill(msID.getAffectedCTS(), o);
                tsm.sendSetStatPacket();

                //Morph CTS
                Option o1 = new Option();
                o1.nOption = 130;
                o1.rOption = 0;
                o1.tOption = Math.max(0, (int) ((double) msi.getSkillStatIntValue(time) - (double) msi.getSkillStatIntValue(time) * (statusResistancePercent)));
                tsm.putCharacterStatValue(CharacterTemporaryStat.Morph, o1);
                tsm.sendSetStatPacket();
                break;
            case UserMorph:
                o.nOption = msi.getSkillStatIntValue(x);
                o.rOption = 0;
                tsm.putCharacterStatValue(CharacterTemporaryStat.Morph, o);
                tsm.sendSetStatPacket();
                break;
            case Poison:
            case StopMotion:
                if (appliedDisease) {
                    o.nOption = msi.getSkillStatIntValue(x);
                    tsm.putCharacterStatValueFromMobSkill(msID.getAffectedCTS(), o);
                    tsm.sendSetStatPacket();
                }
                break;
            case Undead:
                if (tsm.hasStat(CharacterTemporaryStat.Undead)) {
                    tsm.removeStat(CharacterTemporaryStat.Undead);
                }
                o.nOption = skill;
                TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.Undead);
                tsb.setNOption(o.nOption);
                tsb.setExpireTerm(o.tOption);
                tsb.setROption(skill | (level << 16));
                tsb.setSlv(o.slv);
                tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.Undead, tsb.getOption());
                tsm.sendSetStatPacket();
                break;
            case FireBomb:
                if (tsm.getOption(CharacterTemporaryStat.FireBomb).nOption < 4) {
                    o.nOption = tsm.getOption(CharacterTemporaryStat.FireBomb).nOption + 1;
                    o.tOption = 900;
                    tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.FireBomb, o);
                    tsm.sendSetStatPacket();
                }
                break;
            case AreaWarning:
                var damage = msi.getSkillStatIntValue(MobSkillStat.fixDamR);
                chr.damagePerc(damage);
                break;
            case Unk:
                log.debug(String.format("[MobSkill::applyEffect(Char)] Unknown mob skillID %d, slv = %d", skill, level));
                break;
            default:
                log.debug(String.format("[MobSkill::applyEffect(Char)] Unhandled mob skillID %s, slv = %d", msID, mobSkill.getLevel()));
                break;
        }
    }

    public static void handleBossWillAttack(Mob mob, MobSkillInfo msi) {
        var slv = msi.getLevel();
        var field = mob.getField();

        var willAttack = WillSkillType.byVal(slv);
        if (willAttack == null) {
            log.error("Unknown will attack type " + slv);
            return;
        }

        var templateId = 0;
        switch (field.getId()) {
            case BossConstants.WILL_FIELD_P2:
                templateId = BossConstants.WILL_P2;
                break;
            case BossConstants.WILL_FIELD_P3:
                templateId = BossConstants.WILL_P3;
                break;
            case BossConstants.WILL_HARD_FIELD_P2:
                templateId = BossConstants.HARD_WILL_P2;
                break;
            case BossConstants.WILL_HARD_FIELD_P3:
                templateId = BossConstants.HARD_WILL_P2;
                break;
        }

        switch (willAttack) {
            case P1AdvancedDownwardStrike:
            case P2AdvancedDownwardStrike:
            case P3AdvancedDownwardStrike:
                WillModule.createDownwardStrike(mob, field, willAttack);
            case P1Trigger:
                break;
            case DestroyDimension:
                break;
            case EnergyBlast:
                break;
            case DistortionMirror:
                break;
            case Groggy:
                break;
            case Infection:
                WillModule.createInfection(field);
                break;
            case LegSproutPlayerLoc:
            case LegSproutNonPlayerLoc:
                field.broadcastPacket(WillFieldPacket.useSkill(
                        WillSkillPacket.useSkill(mob.getTemplateId(), willAttack)
                ));
                break;
            case BarrageOfBullets:
                break;
            case NarrowWeb:
                WillModule.spawnNarrowWeb(field);
                break;
            case ReflectedDownwardStrike:
                WillModule.createReflectedDownwardStrike(field, templateId);
                break;
            case RipIntoTarget:
                break;
            default:
                log.warn(String.format("Unhandled will attack %s, templateId %d", willAttack, mob.getTemplateId()));
                break;
        }
    }

    public static void giveInvincibility(Mob mob, MobTemporaryStat mts, MobSkillInfo msi, Option o, Option o2, MobSkill ms) {
        if (msi.getLevel() == 14) {
            // Will spawn eye
            WillModule.spawnEye(mob);
        }
        else if(msi.getLevel() == 1){ //Shinsoo
            if(mob.getTemplateId() == BossConstants.SHINSOO_CYGNUS_EASY) {
                Mob cygnus = mob.getField().getMobs().stream().filter(fieldMob -> fieldMob.getTemplateId() == BossConstants.CYGNUS_EASY).findFirst().orElse(null);
                if (cygnus != null) {
                    ms.applyEffect(cygnus, true);
                }
            }
            if(mob.getTemplateId() != BossConstants.CYGNUS_EASY) {
                giveTotalImmunity(mob, mts, msi, o, o2);
            }
        }
        else{
            giveTotalImmunity(mob, mts, msi, o, o2);
        }
    }

    public static void onDamage(Mob mob, MobSkillInfo msi, Set<Char> chars) {
        var successChance = msi.getSkillStatIntValue(attackSuccessProp);
        if (successChance == 0) {
            successChance = msi.getSkillStatIntValue(prop);
        }

        for (var chr : chars) {
            if (!chr.isDead() && !chr.isInvincible() && (successChance > 0 || Util.succeedProp(successChance))) {
                var damR = msi.getSkillStatIntValue(fixDamR);
                var damage = msi.getSkillStatIntValue(x);
                if (damR > 0) {
                    chr.damagePerc(damR);
                } else {
                    chr.damage(damage);
                }
            }
        }
    }

    public static Rect getRectByZakumArmAndDamageLevel(int templateId, short level, Rect originalRect) {
        // Arms are from top to bottom, then left to right:
        // 0    4
        // 1    5
        // 2    6
        // 3    7

        var armNum = MobConstants.getZakumArmNum(templateId);

        if (level == 27) { // Platform Clap
            // Top
            if (armNum == 4) {
                return originalRect.move(50, -274);
            }

            // Middle
            if (armNum == 5) {
                return originalRect.move(50, -194);
            }

            // Bottom
            if (armNum == 6) {
                return originalRect.move(50, -94);
            }

            return new Rect();
        } else if ((level >= 33 && level <= 36) || level == 25 || level == 26) { // Floor
            var rect = new Rect(-50, -80, 50, 0);
            switch (armNum) {
                case 0:
                    return new Position(-134, 86).getRectAround(rect);
                case 1:
                    return new Position(-264, 86).getRectAround(rect);
                case 2:
                    return new Position(-394, 86).getRectAround(rect);
                case 3:
                    return new Position(-524, 86).getRectAround(rect);
                case 4:
                    return new Position(22, 86).getRectAround(rect);
                case 5:
                    return new Position(153, 86).getRectAround(rect);
                case 6:
                    return new Position(283, 86).getRectAround(rect);
                case 7:
                    return new Position(433, 86).getRectAround(rect);
                default:
                    return new Rect();
            }
        }

        return new Rect(); // no checks
    }

    public static void banMap(Mob mob, Field field) {
        Char target = mob.getMostDamageChar();
        if (target == null) return;
        if (target.isDead()) return;
        switch (mob.getTemplateId()) {
            case BossConstants.VON_LEON_EASY:
                target.warp(BossConstants.VON_LEON_PRISON_EASY_FIELDID);
                return;
            case BossConstants.VON_LEON_NORMAL:
                target.warp(BossConstants.VON_LEON_PRISON_NORMAL_FIELDID);
                return;
            case BossConstants.VON_LEON_HARD:
                target.warp(BossConstants.VON_LEON_PRISON_HARD_FIELDID);
                return;
            case BossConstants.ARKARIUM_EASY:
                target.warp(BossConstants.ARKARIUM_EASY_BANMAP_FIELDID);
                return;
            case BossConstants.ARKARIUM_NORMAL:
                target.warp(BossConstants.ARKARIUM_NORMAL_BANMAP_FIELDID);
                return;
            case BossConstants.MUNIN:
                target.warp(BossConstants.MUNIN_BANMAP_FIELDID);
                break;
            case BossConstants.CHAOS_MUNIN:
                target.warp(BossConstants.CHAOS_MUNIN_BANMAP_FIELDID);
                break;
        }
        if (mob.getMobInfo().isBanMap()) {
            Tuple<Integer, String> banFieldInfo = mob.getMobInfo().getBanMapFields().get(0);
            if (banFieldInfo != null) {
                target.warp(banFieldInfo.getLeft());
            }
        }
    }


    public static void mobConsume(MobSkillInfo msi, Mob mob, Field field) {
        Rect rect = new Rect(msi.getLt(), msi.getRb());
        rect.move(mob.getX(), mob.getY());
        List<Mob> mobsInRect = field.getMobsInRect(rect).stream().filter(rectMob -> rectMob.getTemplateId() == msi.getInts().get(0)).collect(Collectors.toList());
        int limit = msi.getSkillStatIntValue(MobSkillStat.limit);
        for (Mob rectMob : mobsInRect) {
            if (limit <= 0) break;
            limit--;

            //Consume mob
            mob.heal((int) (rectMob.getHp()));
            rectMob.die(false);
        }
    }

    public static void dazzle(Mob mob, MobSkillInfo msi, Field field, Option o) {
       for (Char chr : field.getChars()) {
           if (!chr.isDead()) {
               o.nOption = mob.getPosition().getX() < chr.getPosition().getX() ? 1 : 2;
               var tsm = chr.getTemporaryStatManager();
               o.tOption = 5;
               tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.Attract, o);
               tsm.sendSetStatPacket();
           }
       }
    }

    public static void hillaVamp(Field field) {
        Instance instance = field.getInstance();
        if (instance != null) {
            HardHillaInstanceHelper instanceHelper = (HardHillaInstanceHelper) InstanceHelperFactory.getHelperByInstance(instance);
            if (instanceHelper != null) {
                instanceHelper.activateVamp();
            }
        }
    }
}
