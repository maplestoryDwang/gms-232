package net.swordie.ms.life.mob.boss.will;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.enums.ObstacleAtomCreateType;
import net.swordie.ms.enums.ObstacleAtomEnum;
import net.swordie.ms.enums.WeatherEffNoticeType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;

import java.util.Collections;
import java.util.HashSet;
import java.util.concurrent.TimeUnit;

public class WillModule {

    private static final int P1_DIMENSION_FH_DIFF = 2179;
    private static final int BLUE_FH_Y = 159;
    private static final int PURPLE_FH_Y = -2020;
    private static final int OBSTACLE_ATOM_HEIGHT = 600;

    private static final Rect BLUE_DIM_RECT = new Rect(-800, -1000, 700, 200);
    private static final Rect PURPLE_DIM_RECT = new Rect(-800, -1000 - P1_DIMENSION_FH_DIFF, 700, 200 - P1_DIMENSION_FH_DIFF);
    private static final Long HIT_OA_COOLTIME = 500L; // 750ms

    private static final String WEB_MASK_PROP = "NarrowWebMask";
    private static final String WEB_FULL_PROP = "NarrowWebFull";

    public static final int WILL_STRIKE_COUNT = 6;

    private static final int WILL_P2_TEST_SETS = 5;
    private static final int WILL_P2_TEST_STRIKES_PER_SET = 3;

    private static final NarrowWeb[] NARROW_WEBS = new NarrowWeb[] {
            new NarrowWeb(0, 0, new Position(-338, -225)),
            new NarrowWeb(1, 0, new Position(-370, -100)),
            new NarrowWeb(2, 0, new Position(-265, -125)),
            new NarrowWeb(3, 2, new Position(-130, -290)),
            new NarrowWeb(4, 0, new Position(70, -240)),
            new NarrowWeb(5, 0, new Position(190, -290)),
            new NarrowWeb(6, 0, new Position(290, -265)),
            new NarrowWeb(7, 1, new Position(420, -280)),
            new NarrowWeb(8, 2, new Position(625, -200)),
            new NarrowWeb(9, 1, new Position(645, 0)),
            new NarrowWeb(10, 0, new Position(685, 125)),
            new NarrowWeb(11, 0, new Position(550, 140)),
            new NarrowWeb(12, 1, new Position(750, 240)),
            new NarrowWeb(13, 0, new Position(620, 230)),
            new NarrowWeb(14, 2, new Position(620, 430)),
            new NarrowWeb(15, 0, new Position(420, 400)),
            new NarrowWeb(16, 0, new Position(340, 450)),
            new NarrowWeb(17, 0, new Position(240, 380)),
            new NarrowWeb(18, 1, new Position(100, 400)),
            new NarrowWeb(19, 0, new Position(-30, 410)),
            new NarrowWeb(20, 0, new Position(-130, 360)),
            new NarrowWeb(21, 0, new Position(-180, 450)),
            new NarrowWeb(22, 1, new Position(-280, 380)),
            new NarrowWeb(23, 2, new Position(-490, 470)),
            new NarrowWeb(24, 0, new Position(-400, 360)),
            new NarrowWeb(25, 1, new Position(-700, 415)),
            new NarrowWeb(26, 0, new Position(-600, 320)),
            new NarrowWeb(27, 1, new Position(-750, 270)),
            new NarrowWeb(28, 0, new Position(-620, 200)),
            new NarrowWeb(29, 2, new Position(-750, 50)),
            new NarrowWeb(30, 1, new Position(-600, -100)),
            new NarrowWeb(31, 1, new Position(-750, -300)),
            new NarrowWeb(32, 0, new Position(-720, -150)),
            new NarrowWeb(33, 0, new Position(-620, -220)),
            new NarrowWeb(34, 1, new Position(-480, -290)),
            new NarrowWeb(35, 0, new Position(-470, -150)),
            new NarrowWeb(36, 1, new Position(180, -150)),
            new NarrowWeb(37, 1, new Position(0, -125)),
            new NarrowWeb(38, 0, new Position(-150, -75)),
            new NarrowWeb(39, 0, new Position(325, -150)),
            new NarrowWeb(40, 0, new Position(425, -160)),
            new NarrowWeb(41, 0, new Position(425, -60)),
            new NarrowWeb(42, 0, new Position(525, -30)),
            new NarrowWeb(43, 0, new Position(535, 50)),
            new NarrowWeb(44, 1, new Position(-535, 30)),
            new NarrowWeb(45, 1, new Position(480, 280)),
            new NarrowWeb(46, 0, new Position(-460, -50)),
            new NarrowWeb(47, 1, new Position(400, 75)),
            new NarrowWeb(48, 1, new Position(300, -50)),
            new NarrowWeb(49, 2, new Position(-460, 230)),
            new NarrowWeb(50, 2, new Position(-160, 79)),
            new NarrowWeb(51, 1, new Position(-360, 30)),
            new NarrowWeb(52, 1, new Position(-250, 250)),
            new NarrowWeb(53, 0, new Position(375, 220)),
            new NarrowWeb(54, 0, new Position(335, 350)),
            new NarrowWeb(55, 0, new Position(270, 75)),
            new NarrowWeb(56, 1, new Position(120, 0)),
            new NarrowWeb(57, 0, new Position(0, 75)),
            new NarrowWeb(58, 1, new Position(0, 200)),
            new NarrowWeb(59, 0, new Position(-130, 270)),
            new NarrowWeb(60, 0, new Position(-10, 320)),
            new NarrowWeb(61, 2, new Position(200, 200)),
    };

    private static final Rect WEB_CLEANSE_RECT = new Rect(-450, -450, 450, 450);

    public static void doWillTest1(Field field) {
        if (!FieldConstants.isWillP1Field(field.getId())) {
            return;
        }

        var mainWill = (Mob) field.getLifeByTemplateIds(BossConstants.REAL_WILL_P1, BossConstants.HARD_REAL_WILL_P1);
        var blueWill = (Mob) field.getLifeByTemplateIds(BossConstants.BLUE_WILL_P1, BossConstants.HARD_BLUE_WILL_P1);
        var purpleWill = (Mob) field.getLifeByTemplateIds(BossConstants.PURPLE_WILL_P1, BossConstants.HARD_PURPLE_WILL_P1);
        var wills = Util.makeSet(mainWill, blueWill, purpleWill);

        var newHp = Math.max(blueWill.getHp(), purpleWill.getHp());

        wills.forEach(w -> {
            w.setHp(newHp);
            field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(w)));
        });

        if (mainWill.isOnTriggerThreshold()) {
            doTriggerBlockTestPrepare(field);
        } else if (mainWill.getHp() > 0){
            doNormalTest(field);
        } else {
            wills.forEach(w -> w.die(false));
        }
    }

    private static void doNormalTest(Field field) {
        boolean blue = Util.getRandomBool();
        Rect warningRect = blue ? PURPLE_DIM_RECT : BLUE_DIM_RECT;
        var templateId = blue ? BossConstants.BLUE_WILL_P1 : BossConstants.PURPLE_WILL_P1;
        var ddi = new DestroyDimensionInfo(true, warningRect);

        broadcastWeatherText(field, "Will is destroying a dimension! Stay in the dimension with the eye to avoid being destroyed as well!");
        field.broadcastPacket(WillFieldPacket.useSkill(WillSkillPacket.destroyDimension(templateId, Collections.singleton(ddi))));

        EventManager.addEvent(() -> destroyDimension(field, blue), 4, TimeUnit.SECONDS);
    }

    private static void destroyDimension(Field field, boolean blue) {
        field.getChars().forEach(chr -> {
            if (isInBlueDimension(chr.getPosition()) == blue) {
                chr.damagePerc(100);
                chr.write(UserPacket.effect(Effect.mobSkillSpecial(true, MobSkillID.BossWillAttack, 5)));
            }
        });
    }

    private static void doTriggerBlockTestPrepare(Field field) {
        var mainWill = (Mob) field.getLifeByTemplateIds(BossConstants.REAL_WILL_P1, BossConstants.HARD_REAL_WILL_P1);
        var blueWill = (Mob) field.getLifeByTemplateIds(BossConstants.BLUE_WILL_P1, BossConstants.HARD_BLUE_WILL_P1);
        var purpleWill = (Mob) field.getLifeByTemplateIds(BossConstants.PURPLE_WILL_P1, BossConstants.HARD_PURPLE_WILL_P1);
        var wills = Util.makeSet(mainWill, blueWill, purpleWill);

        for (var will : wills) {
            will.setBlockEverything(true);
        }

        broadcastWeatherText(field, "Attack the Pupil to redirect the moonlight. Use this to create the moonlight barrier.");
        field.spawnMob(BossConstants.BEHOLDERS_EYE_BLUE, 0, BLUE_FH_Y, false, Long.MAX_VALUE);
        field.spawnMob(BossConstants.BEHOLDERS_EYE_PURPLE, 0, PURPLE_FH_Y, false, Long.MAX_VALUE);
        field.setProperty(BossConstants.WILL_FIELD_FAIL_KEY, false);
        EventManager.addEvent(() -> doTriggerBlockTest(field), 20, TimeUnit.SECONDS);
    }

    private static void doTriggerBlockTest(Field field) {
        var mainWill = (Mob) field.getLifeByTemplateIds(BossConstants.REAL_WILL_P1, BossConstants.HARD_REAL_WILL_P1);
        var blueWill = (Mob) field.getLifeByTemplateIds(BossConstants.BLUE_WILL_P1, BossConstants.HARD_BLUE_WILL_P1);
        var purpleWill = (Mob) field.getLifeByTemplateIds(BossConstants.PURPLE_WILL_P1, BossConstants.HARD_PURPLE_WILL_P1);
        var wills = Util.makeSet(mainWill, blueWill, purpleWill);

        for (var will : wills) {
            will.setBlockEverything(false);
        }

        // fail = die during phase, success = hit a light orb during phase
        var fail = field.hasProperty(BossConstants.WILL_FIELD_FAIL_KEY)
                && (Boolean)field.getProperty(BossConstants.WILL_FIELD_FAIL_KEY);
        var success = field.hasProperty(BossConstants.WILL_FIELD_SAFE_KEY)
                && (Boolean)field.getProperty(BossConstants.WILL_FIELD_SAFE_KEY);

        field.getChars().forEach(chr -> {
            chr.write(UserPacket.effect(Effect.mobSkillSpecial(true, MobSkillID.BossWillAttack, 5)));
            if (!success) {
                chr.damagePerc(100);
            } else {
                chr.write(FieldPacket.teleport(new Position(chr.getPosition().getX(), BLUE_FH_Y), chr));
            }
        });

        if (!fail && success) {
            wills.forEach(w -> w.getHpTriggerBlockPercs().remove());
            var willIds = FieldConstants.isHardWillField(field.getId())
                            ? Util.makeList(BossConstants.HARD_REAL_WILL_P1, BossConstants.HARD_BLUE_WILL_P1, BossConstants.HARD_PURPLE_WILL_P1)
                            : Util.makeList(BossConstants.REAL_WILL_P1, BossConstants.BLUE_WILL_P1, BossConstants.PURPLE_WILL_P1);
            field.broadcastPacket(WillFieldPacket.willTriggerBlockP1(
                    mainWill.getHpTriggerBlockPercs(),
                    willIds)
            );
            wills.forEach(w -> {
                field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(w)));
                w.setForcedSkill(w.getSkillByMobSkillInfo(MobSkillID.BossWillAttack.getVal(), WillSkillType.Groggy.getVal()));
                if (w.getHpTriggerBlockPercs().size() == 0) {
                    w.die(false);
                }
            });
        }

        field.setProperty(BossConstants.WILL_FIELD_SAFE_KEY, false);
    }

    public static void onWillFieldAtomCollision(Field field, int atomType) {
        if (atomType != ObstacleAtomEnum.WillTriggerTestSafe.getType()) {
            return;
        }

        var fieldKey = BossConstants.WILL_FIELD_SAFE_KEY;
        if ((!field.hasProperty(fieldKey) || !(Boolean)field.getProperty(fieldKey))
                && field.getLifeByTemplateId(BossConstants.BEHOLDERS_EYE_PURPLE) != null) {
            field.setProperty(fieldKey, true);
            broadcastWeatherText(field, "The light energy has been absorbed! If you stay alive, Will will become incapacitated.");

            var beholderLifes = Util.makeSet(field.getLifeByTemplateId(BossConstants.BEHOLDERS_EYE_BLUE),
                    field.getLifeByTemplateId(BossConstants.BEHOLDERS_EYE_PURPLE));

            for (var life : beholderLifes) {
                if (life instanceof Mob) {
                    var mob = ((Mob) life);
                    var option = new Option(1, MobSkillID.BossWillAttack.getVal(), 0);
                    option.slv = WillSkillType.P1Trigger.getVal();

                    mob.getTemporaryStat().addMobSkillOptionsAndBroadCast(MobStat.Invincible, option);
                }
            }
        }
    }

    private static boolean isInBlueDimension(Position pos) {
        return pos.getY() > -1000;
    }

    public static void handleBeholderEyeHit(Field field, Mob mob) {
        var key = BossConstants.WILL_FIELD_P1_HIT_OA_KEY;
        if (!field.hasProperty(key) || ((Long) field.getProperty(key) + HIT_OA_COOLTIME) < System.currentTimeMillis()) {
            var blue = isInBlueDimension(mob.getPosition());
            var atomType = Util.getRandomBool() ? ObstacleAtomEnum.WillTriggerTestDangerous : ObstacleAtomEnum.WillTriggerTestSafe;
            var damage = atomType == ObstacleAtomEnum.WillTriggerTestSafe ? 0 : 50;
            var pos = new Position(
                    -200 + (Util.getRandom(400)),
                    (blue ? PURPLE_FH_Y : BLUE_FH_Y) - OBSTACLE_ATOM_HEIGHT
            );
            var speed = Util.getRandom(10, 15);
            var oai = new ObstacleAtomInfo(atomType, pos, pos.add(new Position(0, -OBSTACLE_ATOM_HEIGHT)), damage, 0,
                    0, speed, speed, 0);
            field.broadcastPacket(FieldPacket.createObstacle(ObstacleAtomCreateType.NORMAL, null, null, Collections.singleton(oai)));
            field.setProperty(key, System.currentTimeMillis());
        }
    }

    public static void spawnEye(Mob mob) {
        var field = mob.getField();
        var blue = isInBlueDimension(mob.getPosition());

        var x1 = -250;
        var y = -370;
        var x2 = 250;

        var attackBoundaries = new Rect(-690, -601, 695,160);
        if (!blue) {
            attackBoundaries.setTop(-2621);
            attackBoundaries.setBottom(-2019);
        }

        field.broadcastPacket(WillFieldPacket.willSummonSkill(0, mob.getTemplateId(), new Position(x1, y)));
        field.broadcastPacket(WillFieldPacket.willSummonSkill(0, mob.getTemplateId(), new Position(x2, y)));
        field.broadcastPacket(WillFieldPacket.willSummonSkill(1, mob.getTemplateId(), null,
                300, 100, 1800, 5, attackBoundaries));
    }

    // Phase 2 ---------------------------------------------------------------------------------------------------------

    public static boolean canUseConsumable(Char chr) {
        return System.currentTimeMillis() < chr.getBossInfo().getWillPotionUseTime();
    }

    public static void doWillTest2(Field field) {
        var willLife = field.getLifeByTemplateIds(BossConstants.WILL_P2, BossConstants.HARD_WILL_P2);
        if (willLife instanceof Mob) {
            var will = (Mob) willLife;
            if (will.isOnTriggerThreshold()) {
                prepareWillTest2(field, will);
            }
        }
    }

    private static void prepareWillTest2(Field field, Mob will) {
        broadcastWeatherText(field, "The Mirror of Lies reverses attacks. When the crack appears, face the attack.");

        will.setBlockEverything(true);
        var dummy = field.getLifeByTemplateIds(BossConstants.HARD_WILL_P2_DUMMY_1, BossConstants.WILL_P2_DUMMY_1);
        if (dummy instanceof Mob) {
            ((Mob) dummy).setBlockEverything(true);
        }
        field.setProperty(BossConstants.WILL_FIELD_FAIL_KEY, false);

        // 5 sets, 3x pillars (1s between strikes in a set, 3s between sets)
        prepareWillTest2StrikeSets(field, will);
    }

    private static void prepareWillTest2StrikeSets(Field field, Mob will) {
        field.setProperty(BossConstants.WILL_FIELD_P2_TEST_SET_COUNT, 0);
        setRandomReflection(field);
        field.addEvent(EventManager.addFixedRateEvent(() -> WillModule.doWillP2StrikeSet(field, will),
                3000, 5000, WILL_P2_TEST_SETS + 1)); // +1 for the last "set" (applying fail/succeed)
    }

    private static void setRandomReflection(Field field) {
        var reflection = Util.getRandomBool();
        field.setProperty(BossConstants.WILL_FIELD_P2_REFLECTED, reflection);
    }

    private static void doWillP2StrikeSet(Field field, Mob will) {
        var curTestSetCount = field.hasProperty(BossConstants.WILL_FIELD_P2_TEST_SET_COUNT)
                ? (int)field.getProperty(BossConstants.WILL_FIELD_P2_TEST_SET_COUNT)
                : 0;
        if (curTestSetCount == WILL_P2_TEST_SETS) {
            // when last set is done
            field.removeProperty(BossConstants.WILL_FIELD_P2_REFLECTED);
            field.removeProperty(BossConstants.WILL_FIELD_P2_TEST_SET_COUNT);
            var failed = (boolean)field.getProperty(BossConstants.WILL_FIELD_FAIL_KEY);
            if (failed) {
                broadcastWeatherText(field, "You have failed the Mirror of Lies test! Will should be vulnerable again in some time...");
                will.setBlockEverything(false);
                field.broadcastPacket(WillFieldPacket.willTriggerBlockP2(
                        will.getHpTriggerBlockPercs())
                );
                var dummy = field.getLifeByTemplateIds(BossConstants.WILL_P2_DUMMY_1, BossConstants.HARD_WILL_P2_DUMMY_1);
                if (dummy instanceof Mob) {
                    ((Mob) dummy).setBlockEverything(false);
                }
            } else {
                broadcastWeatherText(field, "Now's your chance! Attack Will while he's open!");
                will.getHpTriggerBlockPercs().remove();
                will.setBlockEverything(false);
                field.broadcastPacket(WillFieldPacket.willTriggerBlockP2(
                        will.getHpTriggerBlockPercs())
                );
                var dummy = field.getLifeByTemplateIds(BossConstants.WILL_P2_DUMMY_1, BossConstants.HARD_WILL_P2_DUMMY_1);
                if (dummy instanceof Mob) {
                    ((Mob) dummy).setBlockEverything(false);
                }

                will.setForcedSkill(will.getSkillByMobSkillInfo(MobSkillID.BossWillAttack.getVal(), WillSkillType.Groggy.getVal()));
            }
            field.removeProperty(BossConstants.WILL_FIELD_FAIL_KEY);
        } else {
            for (int i = 0; i < WILL_P2_TEST_STRIKES_PER_SET; i++) {
                field.addEvent(EventManager.addEvent(() -> createReflectedDownwardStrike(field, will.getTemplateId()), i * 1000));
            }
            field.addEvent(EventManager.addEvent(() -> setRandomReflection(field), 1000 + WILL_P2_TEST_STRIKES_PER_SET * 1000));
            field.setProperty(BossConstants.WILL_FIELD_P2_TEST_SET_COUNT, curTestSetCount + 1);
        }
    }

    public static void createDownwardStrike(Mob mob, Field field, WillSkillType willAttack) {
        var strikeInfos = new HashSet<StrikeInfo>();
        int y;
        int x = Util.getRandom(75) - 550;
        if (FieldConstants.isWillP1Field(field.getId())) {
            y = mob.getPosition().getY();
        } else {
            y = 200;
        }
        for (int i = 0; i < WillModule.WILL_STRIKE_COUNT; i++) {
            strikeInfos.add(new StrikeInfo(i, new Position(x, y - 159), Util.getRandomBool()));
            x += 300;
        }
        field.broadcastPacket(WillFieldPacket.useSkill(
                WillSkillPacket.downwardStrikes(
                        mob.getTemplateId(),
                        willAttack,
                        4,
                        1200,
                        9000,
                        new Rect(-40, -600, 40, 10),
                        strikeInfos
                )
        ));
    }

    public static void createReflectedDownwardStrike(Field field, int templateId) {
        boolean reflected = field.hasProperty(BossConstants.WILL_FIELD_P2_REFLECTED) && (boolean)field.getProperty(BossConstants.WILL_FIELD_P2_REFLECTED);
        int type = field.hasProperty(BossConstants.WILL_FIELD_FAIL_KEY) ? 9 : 4; // 90% hp (type 9) in P2 test
        var strikeInfos = new HashSet<StrikeInfo>();
        var x = Util.getRandom(75) -550;
        for (int i = 0; i < WILL_STRIKE_COUNT; i++) {
            strikeInfos.add(new StrikeInfo(i, new Position(x, 0), reflected));
            x += 300;
        }
        field.broadcastPacket(WillFieldPacket.useSkill(
                WillSkillPacket.reflectedDownwardStrikes(
                        templateId,
                        reflected,
                        type,
                        1200,
                        9000,
                        new Rect(-40, -600, 40, 10),
                        strikeInfos
                )
        ));
    }

    // Phase 3 ---------------------------------------------------------------------------------------------------------

    public static void spawnNarrowWeb(Field field) {
        if (field.hasProperty(WEB_FULL_PROP) && (boolean) field.getProperty(WEB_FULL_PROP)) {
            return;
        }

        long webMask = 0;
        if (field.hasProperty(WEB_MASK_PROP)) {
            webMask = (long) field.getProperty(WEB_MASK_PROP);
        }
        for (int i = 0; i < NARROW_WEBS.length; i++) {
            if ((webMask & (1L << i)) == 0) {
                webMask |= 1L << i;
                var web = NARROW_WEBS[i].deepCopy();
                field.spawnLife(web, null);
                field.setProperty(WEB_MASK_PROP, webMask);
                break;
            }
        }

        if (webMask == 0x3fffffffffffffffL) {
            field.setProperty(WEB_FULL_PROP, true);
            field.broadcastPacket(WvsContext.weatherEffectNotice(
                    WeatherEffNoticeType.BossWill,
                    "Will's spider webs have taken over, the moonlight will no longer be able to cleanse them!",
                    7500
            ));
        }
    }

    public synchronized static void removeClosestWebs(Field field, Char chr) {
        if (field.hasProperty(WEB_FULL_PROP) && (boolean) field.getProperty(WEB_FULL_PROP)) {
            chr.chatMessage("Will's webs have taken over! Moonlight will no longer be able to cleanse them.");
            return;
        }

        var closeLifes = field.getLifes().values();

        for (int i = 0; i < 2; i++) {
            NarrowWeb toRemove = null;
            var chrPos = chr.getPosition();
            for (var closeLife : closeLifes) {
                if (closeLife instanceof NarrowWeb
                        && (toRemove == null || closeLife.getPosition().distanceTo(chrPos) < toRemove.getPosition().distanceTo(chrPos))) {
                    toRemove = (NarrowWeb) closeLife;
                }
            }

            if (toRemove == null) {
                return;
            }

            field.removeLife(toRemove);
            closeLifes.remove(toRemove);

            // remove this id from the web mask
            var oldMask = (long) field.getProperty(WEB_MASK_PROP);
            long newMask = oldMask ^ (1L << toRemove.getId());
            field.setProperty(WEB_MASK_PROP, newMask);
        }
    }

    public static void broadcastWeatherText(Field field, String weatherText) {
        field.broadcastPacket(WvsContext.weatherEffectNotice(
                WeatherEffNoticeType.BossWill,
                weatherText,
                7500
        ));
    }

    public static void createInfection(Field field) {
        var eligibleChars = new HashSet<Char>();
        for (var chr : field.getChars()) {
            if (chr.getBossInfo().getWillInfection() == null && !chr.isDead()) {
                eligibleChars.add(chr);
            }
        }

        if (eligibleChars.size() == 0) {
            return;
        }

        var randomChr = Util.getRandomFromCollection(eligibleChars);
        createWillInfection(randomChr);
    }

    private static void createWillInfection(Char chr) {
        var field = chr.getField();
        var tsm = chr.getTemporaryStatManager();

        long curDamage = 0L;
        var will = field.getLifeByTemplateIds(BossConstants.WILL_P3, BossConstants.HARD_WILL_P3);
        if (will instanceof Mob) {
            curDamage = ((Mob) will).getDamageDone(chr);
        }

        var infection = new WillInfection(true, chr.getId(), false, chr.getPosition().deepCopy(), curDamage);
        chr.getBossInfo().setWillInfection(infection);
        field.spawnLife(infection, null);

        var option = new Option(100, MobSkillID.BossWillAttack.getVal(), WillSkillType.Infection.getVal(), BossConstants.WILL_INFECTION_TIME);
        tsm.putCharacterStatValue(CharacterTemporaryStat.IndiePMdR, option);

        EventManager.addEvent(() -> checkWillInfectionDamage(chr), BossConstants.WILL_INFECTION_DAMAGE_CHECK_TIME, TimeUnit.SECONDS);
        EventManager.addFixedRateEvent(() -> field.broadcastPacket(
                WillFieldPacket.infectionAttack(infection)),
                BossConstants.WILL_INFECTION_INITIAL_DELAY,
                BossConstants.WILL_INFECTION_DELAY,
                13
        );
        EventManager.addEvent(() -> field.removeLife(infection), BossConstants.WILL_INFECTION_TIME, TimeUnit.SECONDS);
    }

    private static void checkWillInfectionDamage(Char chr) {
        var field = chr.getField();
        var infection = chr.getBossInfo().getWillInfection();
        var curDamage = infection.getDamageDone();

        var newDamage = 0L;
        var will = field.getLifeByTemplateIds(BossConstants.WILL_P3, BossConstants.HARD_WILL_P3);
        if (will instanceof Mob) {
            newDamage = ((Mob) will).getDamageDone(chr);
        }

        if (newDamage == curDamage) {
            chr.die();
            infection.setPosition(chr.getPosition().deepCopy());
            field.broadcastPacket(WillFieldPacket.infectionTransform(infection));
            createInfection(field);
        }
    }

}
