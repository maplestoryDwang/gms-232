package net.swordie.ms.client.jobs.adventurer.magician;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class IceLightning extends Magician {
    public static final int COLD_BEAM = 2201008;
    public static final int FREEZING_CRUSH = 2200011;
    public static final int FROST_CLUTCH = 2220015;
    public static final int MP_EATER_IL = 2200000;
    public static final int MAGIC_BOOSTER_IL = 2201010;
    public static final int CHILLING_STEP = 2201009;
    public static final int MEDITATION_IL = 2201001;


    public static final int ICE_STRIKE = 2211002;
    public static final int GLACIER_CHAIN = 2211010;
    public static final int TELEPORT_MASTERY_IL = 2211007;
    public static final int ELEMENTAL_DECREASE_IL = 2211008;


    public static final int CHAIN_LIGHTNING = 2221006;
    public static final int FREEZING_BREATH = 2221011;
    public static final int BLIZZARD = 2221007;
    public static final int BLIZZARD_FA = 2220014;
    public static final int FROZEN_ORB = 2221012;
    public static final int INFINITY_IL = 2221004;
    public static final int ELQUINES = 2221005;
    public static final int ARCANE_AIM_IL = 2220010;
    public static final int MAPLE_WARRIOR_IL = 2221000;
    public static final int HEROS_WILL_IL = 2221008;
    public static final int ELEMENTAL_ADAPTATION_IL = 2211012;
    public static final int THUNDER_STORM = 2211011;
    public static final int TELEPORT_MASTERY_RANGE_IL = 2221045;
    public static final int EPIC_ADVENTURE_IL = 2221053;
    public static final int ABSOLUTE_ZERO_AURA = 2221054;
    public static final int LIGHTNING_ORB = 2221052;


    // V skills
    public static final int ICE_AGE = 400021002;
    public static final int ICE_AGE_TILE = 400020002;
    public static final int BOLT_BARRAGE = 400021030;
    public static final int BOLT_BARRAGE_TILE = 400021040;
    public static final int BOLT_BARRAGE_TILE_2 = 400021031;
    public static final int SPIRIT_OF_SNOW = 400021067;
    public static final int JUPITER_THUNDER = 400021094;
    public static final int JUPITER_THUNDER_2 = 400021112;


    public static final List<Integer> unreliableMemIL = new ArrayList<Integer>() {{
                add(2001008); // Energy Bolt
                add(COLD_BEAM);
                add(2201005); // Thunder Bolt
                add(ICE_STRIKE);
                add(GLACIER_CHAIN);
                add(THUNDER_STORM);
                add(CHAIN_LIGHTNING);
                add(BLIZZARD);
                add(FROZEN_ORB);
                add(INFINITY_IL);
                add(ELQUINES);
                add(LIGHTNING_ORB); // Lightning Orb
                add(EPIC_ADVENTURE_IL);
    }};

    public IceLightning(Char chr) {
        super(chr);
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isIceLightning(id);
    }

    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }
        //Freezing Crush / Frozen Clutch
        applyFreezingCrushOnMob(attackInfo, attackInfo.skillId);

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case ELQUINES:
                o1.nOption = 5;
                o1.rOption = skillID;
                o1.tOption = 5;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);

                    // [Ice Lightning] Custom Skill Change
                    if (mob != null && chr.hasSkill(ICE_AGE) && SkillChangeConstants.ELQUINES_PROC_ICE_AGE_TILE) {
                        AffectedArea aa = AffectedArea.getPassiveAA(chr, ICE_AGE_TILE, chr.getSkillLevel(ICE_AGE));
                        aa.setPosition(mob.getPosition());
                        aa.setRect(aa.getPosition().getRectAround(new Rect(-100, -100, 100, 50)));
                        aa.setCurFoothold();
                        aa.setDuration(SkillChangeConstants.ELQUINES_ICE_AGE_TILE_DURATION);
                        aa.setDelay((short) 11);
                        chr.getField().spawnAffectedArea(aa);
                    }

                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                }
                break;
            case TELEPORT_MASTERY_IL:
            case CHAIN_LIGHTNING:
            case Bishop.SHINING_RAY:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case FREEZING_BREATH:
                Rect rect = chr.getPosition().getRectAround(si.getFirstRect());
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                o2.nOption = -si.getValue(x, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);

                o3.nOption = -si.getValue(y, slv);
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                for (Life life : chr.getField().getLifesInRect(rect)) {
                    if (life instanceof Mob && ((Mob) life).getHp() > 0) {
                        Mob mob = (Mob) life;
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o2);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o3);
                    }
                }
                if (tsm.getOptByCTSAndSkill(NotDamaged, skillID) == null) {
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(NotDamaged, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case ICE_AGE:
                rect = chr.getRectAround(si.getFirstRect());
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                var si2 = SkillData.getSkillInfoById(ICE_AGE_TILE);
                for (Foothold fh : chr.getField().getInfo().getFootholdsInRect(rect)) {
                    AffectedArea aa = AffectedArea.getAffectedArea(chr, attackInfo);
                    aa.setSkillID(ICE_AGE_TILE);
                    aa.setPosition(fh.getRandomPosition());
                    aa.setDelay((short) 8);
                    aa.setRect(aa.getPosition().getRectAround(si2.getFirstRect()));
                    aa.setFh(fh.getId());
                    chr.getField().spawnAffectedArea(aa);
                }
                break;
            case SPIRIT_OF_SNOW:
                applyFreezingCrushOnMob(attackInfo, attackInfo.skillId);
                applyFreezingCrushOnMob(attackInfo, attackInfo.skillId);
                break;
            case BOLT_BARRAGE_TILE:
            case BOLT_BARRAGE_TILE_2:
                Life life = chr.getField().getLifeByObjectID(attackInfo.affectedAreaObjId);
                if (!(life instanceof AffectedArea)) {
                    return;
                }
                chr.getField().removeLife(life);
                break;
            case THUNDER_STORM:
                // [IceLightning] Custom Skill Change
                if (attackInfo.mobCount == 1 && chr.hasSkill(BOLT_BARRAGE) && SkillChangeConstants.BOLT_BARRAGE_PROC_BY_THUNDERSTORM) {
                    Field field = chr.getField();
                    for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                        Mob mob = mai.mob;
                        if (mob == null) {
                            continue;
                        }

                        AffectedArea aa = AffectedArea.getPassiveAA(chr, BOLT_BARRAGE_TILE, chr.getSkillLevel(BOLT_BARRAGE));
                        aa.setPosition(mob.getPosition().add(new Position(Util.getRandom(-100, 100), 0)));
                        aa.setRect(aa.getRectAround(SkillData.getSkillInfoById(BOLT_BARRAGE_TILE).getFirstRect()));
                        aa.setDuration(1000);
                        aa.setDelay((short) 7);
                        field.spawnAffectedArea(aa);
                    }
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void applyFreezingCrushOnMob(AttackInfo attackInfo, int skillID) {
        if (!chr.hasSkill(FREEZING_CRUSH)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        int slv = chr.getSkillLevel(skillID);
        if (si != null && (si.getElemAttr().contains("i") || si.getElemAttr().contains("l"))) {
            Option o1 = new Option();
            o1.rOption = COLD_BEAM;
            o1.tOption = si.getValue(time, slv);
            boolean isIceSkill = si.getElemAttr().contains("i");
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();

                int counter = 1;
                if (mts.hasCurrentMobStat(MobStat.Speed)) {
                    counter = mts.getCurrentOptionsByMobStat(MobStat.Speed).mOption;
                    if (counter < 5 && isIceSkill) {
                        counter++;
                    } else if (counter > 0 && !isIceSkill) {
                        counter--;
                    }
                }
                o1.nOption = -15 * counter;
                o1.mOption = counter;
                mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);
            }
        }
    }

    @Override
    public int getFinalAttackSkill() {
        SkillInfo si = SkillData.getSkillInfoById(BLIZZARD_FA);
        if (chr.getSkill(BLIZZARD) != null && chr.hasSkillOnCooldown(BLIZZARD)) {
            int slv = chr.getSkill(BLIZZARD).getCurrentLevel();

            // [IceLightning] Custom Skill Change
            if (SkillChangeConstants.BYPASS_PROC_ON_BLIZZARD_FA || Util.succeedProp(si.getValue(prop, slv))) {
                return BLIZZARD_FA;
            }
        }
        return super.getFinalAttackSkill();
    }

    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (skillId) {
            case TELEPORT:
                // [Ice Lightning] Custom Skill Change
                if (SkillChangeConstants.CHILLING_STEP_BOSSING_MODE) {
                    if (tsm.hasStat(ChillingStep) && chr.hasSkill(IceLightning.CHILLING_STEP)) {
                        if (tsm.getOption(ChillingStep).nOption == 1) {
                            createChillStepAA();
                        } else if (tsm.getOption(ChillingStep).nOption == 2) {
                            createCustomChillStepAA();
                        }
                    }
                } else {
                    if (tsm.hasStat(ChillingStep) && chr.hasSkill(IceLightning.CHILLING_STEP)) {
                        createChillStepAA();
                    }
                }
                break;
            case ELEMENTAL_ADAPTATION_IL:
                o1.nOption = 1;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(AntiMagicShell, o1);
                break;
            case THUNDER_STORM:
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(true);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case CHILLING_STEP:

                var nOpt = tsm.hasStat(ChillingStep) ? tsm.getOption(ChillingStep).nOption : 0;

                switch (nOpt) {
                    case 0: // Normal ChillStep
                        o1.nOption = 1;
                        o1.rOption = skillId;
                        tsm.putCharacterStatValue(ChillingStep, o1);
                        break;
                    case 1: // Custom ChillStep
                        o1.nOption = 2;
                        o1.rOption = skillId;
                        tsm.putCharacterStatValue(ChillingStep, o1);
                        break;
                    case 2: // Remove ChillStep
                        tsm.removeStatsBySkill(skillId);
                        break;
                }
                break;
            case ABSOLUTE_ZERO_AURA:
                if (tsm.hasStat(IceAura) && tsm.getOption(IceAura).xOption == tsm.getChr().getId()) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = slv;
                    o1.rOption = skillId;
                    o1.xOption = chr.getId();
                    o1.bOption = 0; // isPartyMember
                    tsm.putCharacterStatValue(IceAura, o1);

                    o2.nOption = si.getValue(SkillStat.x, slv);
                    o2.rOption = skillId;
                    tsm.putCharacterStatValue(IndieStance, o2);
                    o3.nOption = si.getValue(SkillStat.y, slv);
                    o3.rOption = skillId;
                    tsm.putCharacterStatValue(DamageReduce, o3);
                    o4.nOption = si.getValue(z, slv);
                    o4.rOption = skillId;
                    tsm.putCharacterStatValue(IndieAsrR, o4);
                    tsm.putCharacterStatValue(IndieTerR, o4);
                }
                break;
            case SPIRIT_OF_SNOW:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case BOLT_BARRAGE:
                Position chrPos = inPacket.decodePosition();
                boolean isLeft = inPacket.decodeByte() != 0;
                Position[] positions = new Position[inPacket.decodeInt()]; // amount of Positions
                for (int i = 0; i < positions.length; i++) {
                    positions[i] = inPacket.decodePositionInt();
                }
                Position bossPos = null;

                if (SkillChangeConstants.BOLT_BARRAGE_STICK_TO_BOSS) { // [Ice Lightning] Custom Skill Change
                    Position lastPos = positions[positions.length - 1];
                    Rect rect;
                    if (isLeft) {
                        Position lt = new Position(lastPos.getX(), lastPos.getY() - 500);
                        Position rb = chrPos;
                        rect = new Rect(lt, rb);
                    } else {
                        Position lt = new Position(chrPos.getX(), chrPos.getY() - 500);
                        Position rb = lastPos;
                        rect = new Rect(lt, rb);
                    }


                    Mob boss = field.getMobs().stream().filter(m -> m.isBoss() && rect.hasPositionInside(m.getPosition())).max(Comparator.comparingLong(Mob::getHp)).orElse(null);
                    if (boss != null) {
                        bossPos = boss.getPosition();
                    }
                }

                int duration = 3000; // ms
                int delay = 2;
                int distancePerBolt = 200;
                int i = 0;
                for (Position position : positions) {
                    AffectedArea aa = AffectedArea.getPassiveAA(chr, BOLT_BARRAGE_TILE, slv);
                    if ((bossPos != null) && ((!isLeft && position.getX() > bossPos.getX()) || (isLeft && bossPos.getX() > position.getX()))) {
                        position = new Position(bossPos.getX(), position.getY());
                    }
                    aa.setPosition(position);
                    aa.setRect(aa.getRectAround(SkillData.getSkillInfoById(BOLT_BARRAGE_TILE).getFirstRect()));
                    aa.setDelay((short) (delay * i));
                    aa.setDuration(duration + (i * distancePerBolt));
                    field.spawnAffectedArea(aa);
                    i++;
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    public void handleRemoveJupiterThunder(int shocksRemaining) {
        var finalCdR = shocksRemaining * (chr.getSkillStatValueD(t, JUPITER_THUNDER) * 1000);
        chr.reduceSkillCoolTime(JUPITER_THUNDER, (int) finalCdR);
    }

    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skillID == CHILLING_STEP) {
            if (SkillChangeConstants.CHILLING_STEP_BOSSING_MODE) {
                var nOpt = tsm.hasStat(ChillingStep)
                        ? tsm.getOption(ChillingStep).nOption
                        : removedOptions.containsKey(ChillingStep)
                            ? removedOptions.get(ChillingStep).nOption
                            : 0;
                if (nOpt == 1) {
                    Option o1 = new Option(2, skillID, 0);
                    tsm.putCharacterStatValue(ChillingStep, o1);
                    tsm.sendSetStatPacket();
                } else if (nOpt == 2) {
                    tsm.removeStatsBySkill(skillID);
                }
            } else {
                tsm.removeStatsBySkill(skillID);
            }
        }
    }

    public void doIceAura() {
        if (chr.hasSkillOnCooldown(-ABSOLUTE_ZERO_AURA) || !chr.getTemporaryStatManager().hasStat(IceAura)) {
            return;
        }

        var si = SkillData.getSkillInfoById(ABSOLUTE_ZERO_AURA);
        var slv = chr.getSkillLevel(ABSOLUTE_ZERO_AURA);
        Rect rect = chr.getRectAround(si.getFirstRect());
        for (Mob mob : chr.getField().getMobsInRect(rect).stream().limit(15).collect(Collectors.toList())) {
            applyIceAuraOnMob(mob, si, slv);
        }
        chr.addSkillCoolTime(-ABSOLUTE_ZERO_AURA, 3000);
    }

    public void applyIceAuraOnMob(Mob mob, SkillInfo si, int slv) {
        Option o = new Option();
        var mts = mob.getTemporaryStat();

        if (!mob.isBoss()) {
            o.nOption = 1;
            o.rOption = IceLightning.ICE_STRIKE; // for Blue effect
            o.tOption = si.getValue(time, slv);
            mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o);
        }
    }

    private void createChillStepAA() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo chillingStepInfo = SkillData.getSkillInfoById(IceLightning.CHILLING_STEP);
        int slv = chr.getSkill(IceLightning.CHILLING_STEP).getCurrentLevel();
        int range = 168 + (tsm.hasStatBySkillId(TELEPORT_MASTERY_RANGE_IL) ? 100 : 0);
        int count = range / 3;
        if (Util.succeedProp(chillingStepInfo.getValue(prop, slv))) {
            for (int i = 0; i < range; i += count) {
                AffectedArea aa = AffectedArea.getPassiveAA(chr, IceLightning.CHILLING_STEP, (byte) slv);
                int x = chr.isLeft() ? chr.getPosition().getX() - i : chr.getPosition().getX() + i;
                int y = chr.getPosition().getY();
                aa.setPosition(new Position(x, y));
                aa.setRect(aa.getPosition().getRectAround(chillingStepInfo.getRects().get(0)));
                aa.setCurFoothold();
                aa.setDelay((short) 4);
                aa.setSkillID(IceLightning.CHILLING_STEP);
                chr.getField().spawnAffectedArea(aa);
            }
        }
    }

    // [Ice Lightning] Custom Skill Change
    private void createCustomChillStepAA() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int range = 168 + (tsm.hasStatBySkillId(TELEPORT_MASTERY_RANGE_IL) ? 100 : 0);
        int count = range / SkillChangeConstants.CHILLING_STEP_ICE_AGE_TILE_COUNT;
        if (chr.hasSkill(ICE_AGE) && Util.succeedProp(SkillChangeConstants.CHILLING_STEP_BOSS_MODE_PROC_CHANCE)) {
            for (int i = 0; i < range; i += count) {
                AffectedArea aa = AffectedArea.getPassiveAA(chr, ICE_AGE_TILE, (byte) chr.getSkillLevel(ICE_AGE));
                int x = chr.isLeft() ? chr.getPosition().getX() - i : chr.getPosition().getX() + i;
                int y = chr.getPosition().getY();
                aa.setPosition(new Position(x, y));
                aa.setRect(aa.getPosition().getRectAround(new Rect(-30, -40, 50, 20)));
                aa.setCurFoothold();
                aa.setDuration(SkillChangeConstants.CHILLING_STEP_ICE_AGE_TILE_DURATION);
                aa.setDelay((short) 4);
                chr.getField().spawnAffectedArea(aa);
            }
        }
    }

    @Override
    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        if (skillId == CHILLING_STEP) {
            chr.getJobHandler().handleSkillRemove(chr, skillId, new HashMap<>());
            return;
        }
        super.handleSkillPrepareStop(chr, skillId, sui);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------
}
