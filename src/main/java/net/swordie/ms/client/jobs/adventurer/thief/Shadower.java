package net.swordie.ms.client.jobs.adventurer.thief;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Shadower extends Thief {

    public static final int CRITICAL_GROWTH = 4200013; //Passive Crit increasing buff
    public static final int MESOGUARD = 4201011; //Buff
    public static final int STEAL = 4201004; //Special Attack (Steal Debuff)?
    public static final int DAGGER_BOOSTER = 4201002; //Buff
    public static final int SHIELD_MASTERY = 4200010;


    public static final int VENOM_SHAD = 4210010; //Passive DoT
    public static final int MESO_EXPLOSION_ATOM = 4210014; // ?
    public static final int ADVANCED_DARK_SIGHT_SHAD = 4210015;
    public static final int INTO_DARKNESS = 4211016;
    public static final int SHADOW_PARTNER_SHAD = 4211008; //Buff
    public static final int DARK_FLARE_SHAD = 4211007; //Summon
    public static final int MESO_EXPLOSION = 4211006; //CreateForceAtom Attack
    public static final int PICK_POCKET = 4211003; //Buff


    public static final int BOOMERANG_STAB = 4221007; //Special Attack (Stun Debuff)
    public static final int MAPLE_WARRIOR_SHAD = 4221000; //Buff
    public static final int SUDDEN_RAID_SHAD = 4221010; //Special Attack
    public static final int MESO_EXPLOSION_ENHANCE = 4220045;
    public static final int SMOKE_SCREEN = 4221006; //Affected Area
    public static final int PRIME_CRITICAL = 4220015; //Passive Buff
    public static final int TOXIC_VENOM_SHAD = 4220011; //Passive DoT
    public static final int SHADOWER_INSTINCT = 4221013; //Buff //Stacks (Body Count)
    public static final int HEROS_WILL_SHAD = 4221008;
    public static final int ASSASSINATE_FINISHER = 4221016;
    public static final int FLIP_THE_COIN = 4221054;
    public static final int EPIC_ADVENTURE_SHAD = 4221053;
    public static final int SHADOW_VEIL = 4221052;


    // V skills
    public static final int SHADOW_ASSAULT_4 = 400041005;
    public static final int SHADOW_ASSAULT_3 = 400041004;
    public static final int SHADOW_ASSAULT_2 = 400041003;
    public static final int SHADOW_ASSAULT = 400041002;
    public static final int TRICKBLADE = 400041025;
    public static final int TRICKBLADE_FINISHER = 400041026;
    public static final int TRICKBLADE_MOB_ATTACK = 400041027;
    public static final int SONIC_BLOW = 400041039;
    public static final int SLASH_SHADOW_FORMATION = 400041069;
    public static final int SLASH_SHADOW_FORMATION_1 = 400041070;
    public static final int SLASH_SHADOW_FORMATION_2 = 400041071;
    public static final int SLASH_SHADOW_FORMATION_3 = 400041072;
    public static final int SLASH_SHADOW_FORMATION_4 = 400041073;

    private ScheduledFuture critGrowthTimer;

    public Shadower(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            EventManager.stopTimer(critGrowthTimer);
            critGrowthTimer = EventManager.addFixedRateEvent(this::incrementCritGrowth, 2000, 2000);
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isShadower(id);
    }

    private void incrementFlipTheCoinStack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();
        Option o2 = new Option();
        SkillInfo FlipTheCoinInfo = SkillData.getSkillInfoById(FLIP_THE_COIN);
        int amount = 1;
        if (tsm.hasStat(FlipTheCoin)) {
            amount = tsm.getOption(FlipTheCoin).nOption;
            if (amount < FlipTheCoinInfo.getValue(y, 1)) {
                amount++;
            }
        }
        o.nOption = amount;
        o.rOption = FLIP_THE_COIN;
        o.tOption = FlipTheCoinInfo.getValue(time, 1);
        tsm.putCharacterStatValue(FlipTheCoin, o);

        //Stats
        o1.rOption = FLIP_THE_COIN;
        o1.nOption = (amount * FlipTheCoinInfo.getValue(x, 1));
        o1.tOption = FlipTheCoinInfo.getValue(time, 1);
        tsm.putCharacterStatValue(IndieCr, o1);
        o2.rOption = FLIP_THE_COIN;
        o2.nOption = (amount * FlipTheCoinInfo.getValue(indieDamR, 1));
        o2.tOption = FlipTheCoinInfo.getValue(time, 1);
        tsm.putCharacterStatValue(IndieDamR, o2);
        tsm.sendSetStatPacket();
    }

    private void activateFlipTheCoin() {
        long totalCrit = chr.getTotalStat(BaseStat.cr);
        if (Util.succeedProp((int) (Math.min(100, totalCrit)))) {
            chr.write(WvsContext.flipTheCoinEnabled((byte) 1));
        }
    }

    private void incrementCritGrowth() {
        if (chr.hasSkill(CRITICAL_GROWTH) || chr.hasSkill(PRIME_CRITICAL)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            SkillInfo si = SkillData.getSkillInfoById(PRIME_CRITICAL);
            int slv = chr.getSkillLevel(PRIME_CRITICAL);
            Option o = new Option();
            int amountCr = (chr.hasSkill(PRIME_CRITICAL) ? si.getValue(x, slv) : 3);
            int amountCd = 1;
            if (tsm.hasStat(CriticalGrowing)) {
                amountCr = tsm.getOption(CriticalGrowing).nOption;
                amountCd = tsm.getOption(CriticalGrowing).xOption;
                long totalCrit = (tsm.getBaseStats().get(BaseStat.cr) == null ? 0 : tsm.getBaseStats().get(BaseStat.cr)) + chr.getBaseStats().get(BaseStat.cr);
                if (totalCrit < 100) {
                    amountCr = amountCr + (chr.hasSkill(PRIME_CRITICAL) ? si.getValue(x, slv) : 3);
                    amountCd = amountCd + (chr.hasSkill(PRIME_CRITICAL) ? si.getValue(w, slv) : 1);
                } else {
                    amountCr = 0;
                    amountCd = 0;
                }
            }
            o.nOption = amountCr;
            o.rOption = chr.hasSkill(PRIME_CRITICAL) ? PRIME_CRITICAL : CRITICAL_GROWTH;
            o.xOption = amountCd > 10 ? 10 : amountCd;
            tsm.putCharacterStatValue(CriticalGrowing, o);
            tsm.sendSetStatPacket();
        }
    }

    private void consumeKillingPoint(int amount) {
        var tsm = chr.getTemporaryStatManager();
        tsm.removeStat(KillingPoint);

        if (chr.hasSkillOnCooldown(SONIC_BLOW)) {
            chr.reduceSkillCoolTime(SONIC_BLOW, amount * 500);
        }
    }

    private void incKillingPoint() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(SHADOWER_INSTINCT);
        if (skill == null) {
            return;
        }
        int amount = 1;
        if (chr.hasSkill(SHADOWER_INSTINCT)) {
            amount = tsm.getOption(KillingPoint).nOption;
            if (amount < 3) {
                amount++;
            }
        }
        o.nOption = amount;
        o.rOption = skill.getSkillId();
        tsm.putCharacterStatValue(KillingPoint, o);
        tsm.sendSetStatPacket();
    }

    private void updatePickPocketCounter() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!chr.hasSkill(PICK_POCKET) || !tsm.hasStat(PickPocket)) {
            return;
        }
        Option o = new Option();
        Skill skill = chr.getSkill(PICK_POCKET);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxMesoCount = si.getValue(y, slv) + (chr.hasSkill(MESO_EXPLOSION_ENHANCE) ? 5 : 0);
        var mesoDropsByPickPocket = Math.min(maxMesoCount, getMesoDropsByPickPocket());

        o.nOption = 1;
        o.rOption = skill.getSkillId();
        o.xOption = mesoDropsByPickPocket;
        tsm.putCharacterStatValue(PickPocket, o);
        tsm.sendSetStatPacket();
    }

    private int getMesoDropsByPickPocket() {
        return (int) chr.getField().getDrops().stream().filter(Drop::isByPickPocket).count();
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
        if (!SkillConstants.isSummon(attackInfo.skillId) && hasHitMobs) {

            // Critical Growth & Prime Critical
            if (chr.hasSkill(CRITICAL_GROWTH)) {
                incrementCritGrowth();
            }

            // Pick Pocket
            if (!SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
                dropFromPickPocket(attackInfo);
            }

            // Shadower Instinct
            incKillingPoint();

            // Shadower Hyper
            if (chr.hasSkill(FLIP_THE_COIN)) {
                activateFlipTheCoin();
            }

        }
        // Updated PickPocket Counter
        updatePickPocketCounter();

        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case STEAL:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();

                        int itemId = 2431835;
                        if (mob.isBoss()) {
                            itemId = 2431850;
                        }
                        Item item = ItemData.getItemDeepCopy(itemId);
                        Drop drop = new Drop(item.getItemId(), item);
                        field.drop(drop, mob.getPosition());

                        if (!mob.isBoss()) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                        }
                    }
                }
                break;
            case BOOMERANG_STAB:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;
            case ASSASSINATE_FINISHER:
                if (!hasHitMobs) {
                    return;
                }

                if (tsm.hasStat(KillingPoint) && tsm.getOption(KillingPoint).nOption >= 3) {
                    consumeKillingPoint(3);
                }

                if (chr.hasSkill(TRICKBLADE)) {
                    int count = 1;
                    int prevMobId = 0;
                    if (tsm.hasStat(TrickBladeMobStat)) {
                        count = tsm.getOption(TrickBladeMobStat).nOption;
                        prevMobId = tsm.getOption(TrickBladeMobStat).xOption;
                    }

                    int finalPrevMobId = prevMobId;
                    boolean hitsPrevMob = attackInfo.mobAttackInfo.stream().anyMatch(mai -> mai.mobId == finalPrevMobId);
                    if (hitsPrevMob) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(finalPrevMobId);
                        if (mob != null) {
                            count++;
                            o1.nOption = count > 3 ? 3 : count;
                            o1.xOption = finalPrevMobId;
                        }
                    } else {
                        o1.nOption = 1;
                        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                            if (mob == null) {
                                continue;
                            }
                            o1.xOption = mob.getObjectId();

                            if (mob.isBoss()) { //  QoL | If attacking boss, boss will get hit.
                                break;
                            }
                        }
                    }
                }
                o1.rOption = attackInfo.skillId;
                o1.tOption = 10;
                tsm.putCharacterStatValue(TrickBladeMobStat, o1);
                tsm.sendSetStatPacket();
                break;
            case TRICKBLADE_FINISHER:
                tsm.removeStatsBySkill(ASSASSINATE_FINISHER);

                si = SkillData.getSkillInfoById(TRICKBLADE);
                slv = (byte) chr.getSkillLevel(TRICKBLADE);
                o1.nOption = 1;
                o1.rOption = TRICKBLADE_FINISHER;
                o1.tOption = si.getValue(s, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void createMesoExplosionForceAtom(List<Drop> droplist) {
        if (!chr.hasSkill(MESO_EXPLOSION)) {
            return;
        }
        Field field = chr.getField();
        ForceAtomEnum fae = ForceAtomEnum.FLYING_MESO;
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        List<Mob> possibleTargetMobs = field.getMobs().stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
        for (Drop drop : droplist) {
            Mob mob = Util.getRandomFromCollection(possibleTargetMobs);
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 2, 3,
                    0, 0, Util.getCurrentTime(), 1, 0,
                    drop.getPosition());
            targetList.add(mob != null ? mob.getObjectId() : 0);
            faiList.add(forceAtomInfo);
        }
        for (Drop drop : droplist) {
            field.removeLife(drop);
        }
        if (faiList.size() > 0) {
            chr.createForceAtom(new ForceAtom(false, chr.getId(), chr.getId(), fae,
                    true, targetList, MESO_EXPLOSION_ATOM, faiList, new Rect(), 0, 300,
                    new Position(), MESO_EXPLOSION_ATOM, new Position(), 0));
        }
    }

    private void dropFromPickPocket(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Field field = chr.getField();

        if (!chr.hasSkill(PICK_POCKET) || tsm.getOptByCTSAndSkill(PickPocket, PICK_POCKET) == null ) {
            return;
        }

        Skill skill = chr.getSkill(PICK_POCKET);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxMesoCount = si.getValue(y, slv) + (chr.hasSkill(MESO_EXPLOSION_ENHANCE) ? 5 : 0);
        int proc = si.getValue(prop, slv) + (chr.hasSkill(MESO_EXPLOSION_ENHANCE) ? 10 : 0);

        var mesoDropsByPickPocket = getMesoDropsByPickPocket();
        if (mesoDropsByPickPocket >= maxMesoCount) {
            return;
        }

        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }

            var dropped = 0;
            for (int i = 0; i < mai.damages.length && mesoDropsByPickPocket < maxMesoCount; i++) {
                if (Util.succeedProp(proc)) {
                    Drop drop = new Drop(-1, 1);
                    drop.setByPickPocket(true);
                    drop.setCanBePickedUpByPet(false);
                    drop.setOwnerID(chr.getId());
                    var newPos = new Position(mob.getPosition().getX() + dropped++ * 15, mob.getPosition().getY());

                    Foothold fh = chr.getField().findFootHoldBelow(newPos);

                    field.drop(drop, mob.getPosition(), new Position(newPos.getX(), fh.getYFromX(newPos.getX())));
                    mesoDropsByPickPocket++;
                }
            }
        }
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (skillId) {
            case SHADOW_VEIL:
                chr.write(WvsContext.skillUseResult(true, skillId));
                // Fall through intended
            case SMOKE_SCREEN:
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getRects().get(0)));
                aa.setDelay((short) 4);
                field.spawnAffectedArea(aa);
                break;
            case MESO_EXPLOSION:
                int rectRange = si.getValue(range, slv);
                Rect rect = new Rect(
                        new Position(
                                chr.getPosition().getX() - rectRange,
                                chr.getPosition().getY() - rectRange),
                        new Position(
                                chr.getPosition().getX() + rectRange,
                                chr.getPosition().getY() + rectRange)
                );
                List<Drop> dropList = field.getDropsInRect(rect).stream()
                        .filter(d -> d.isByPickPocket()
                                && (d.getOwnerID() == chr.getId() || d.getOwnerID() == 0)
                                && d.isMoney())
                        .collect(Collectors.toList());
                createMesoExplosionForceAtom(dropList);
                break;
            case INTO_DARKNESS:
                handleSkill(chr, tsm, DARK_SIGHT, chr.getSkillLevel(DARK_SIGHT), inPacket, new SkillUseInfo());
                break;
            case MESOGUARD:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(MesoGuard, o1);
                break;
            case PICK_POCKET:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(PickPocket, o1);
                updatePickPocketCounter();
                break;
            case SHADOWER_INSTINCT:
                var pad = si.getValue(x, slv);
                if (tsm.hasStat(KillingPoint)) {
                    var killpoints = tsm.getOption(KillingPoint).nOption;
                    var addedPad = killpoints * si.getValue(kp, slv);
                    pad += addedPad;
                    consumeKillingPoint(killpoints);
                }
                o1.nOption = pad;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                break;
            case FLIP_THE_COIN:
                incrementFlipTheCoinStack();
                chr.write(WvsContext.flipTheCoinEnabled((byte) 0));
                break;
            case SHADOW_ASSAULT:
            case SHADOW_ASSAULT_2:
            case SHADOW_ASSAULT_3:
                o1.nOption = SHADOW_ASSAULT_4 - skillId;
                o1.rOption = SHADOW_ASSAULT;
                tsm.putCharacterStatValue(ShadowAssault, o1);
                break;
            case SHADOW_ASSAULT_4:
                tsm.removeStatsBySkill(SHADOW_ASSAULT);
                break;
        }
        tsm.sendSetStatPacket();
    }


    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(MesoGuard) && tsm.hasStat(PickPocket)) {
            var field = chr.getField();
            Skill skill = chr.getSkill(PICK_POCKET);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int maxMesoCount = si.getValue(y, slv) + (chr.hasSkill(MESO_EXPLOSION_ENHANCE) ? 5 : 0);
            int proc = si.getValue(prop, slv) + (chr.hasSkill(MESO_EXPLOSION_ENHANCE) ? 10 : 0);

            var mesoDropsByPickPocket = getMesoDropsByPickPocket();
            if (mesoDropsByPickPocket >= maxMesoCount) {
                return;
            }


            var dropped = 0;
            for (int i = 0; i < maxMesoCount && mesoDropsByPickPocket < maxMesoCount; i++) {
                if (Util.succeedProp(proc)) {
                    Drop drop = new Drop(-1, 1);
                    drop.setByPickPocket(true);
                    drop.setCanBePickedUpByPet(false);
                    drop.setOwnerID(chr.getId());
                    var newPos = new Position(chr.getPosition().getX() + dropped++ * 15, chr.getPosition().getY());

                    Foothold fh = chr.getField().findFootHoldBelow(newPos);

                    field.drop(drop, chr.getPosition(), new Position(newPos.getX(), fh.getYFromX(newPos.getX())));
                    mesoDropsByPickPocket++;
                }
            }
            updatePickPocketCounter();
        }

        super.handleHit(c, inPacket, hitInfo);
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (skillId == Shadower.TRICKBLADE_FINISHER) {
            if (sui.multiAttackInfoSequenceCounter > 1) {
                return 0;
            }
        }
        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (attackInfo.skillId == Shadower.TRICKBLADE_FINISHER) {
            if (sui.multiAttackInfoSequenceCounter > 1) {
                return BypassCooldownCheckType.BypassCheckAndCooldown;
            }
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    @Override
    public void stopTimers() {
        if (critGrowthTimer != null) {
            critGrowthTimer.cancel(true);
        }
        super.stopTimers();
    }

    @Override
    public Long getJobBaseStat(BaseStat baseStat) {

        var shieldMastery = chr.getSkill(SHIELD_MASTERY);
        if (shieldMastery != null) {
            var si = SkillData.getSkillInfoById(shieldMastery.getSkillId());
            var slv = shieldMastery.getCurrentLevel();

            var item = chr.getEquippedItemByBodyPart(BodyPart.Shield);

            if (item != null && (ItemConstants.isShield(item.getItemId()) || ItemConstants.isSecondary(item.getItemId()))) {
                var statMap = new HashMap<BaseStat, Long>();
                statMap.put(BaseStat.pddR, (long) si.getValue(x, slv));
                statMap.put(BaseStat.evaR, (long) si.getValue(er, slv));
                statMap.put(BaseStat.pad, (long) si.getValue(y, slv));

                return statMap.getOrDefault(baseStat, 0L);
            }
        }

        return super.getJobBaseStat(baseStat);
    }
}
