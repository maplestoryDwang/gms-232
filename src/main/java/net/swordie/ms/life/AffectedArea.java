package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Zero;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.pirate.Pirate;
import net.swordie.ms.client.jobs.adventurer.thief.NightLord;
import net.swordie.ms.client.jobs.adventurer.thief.Shadower;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.client.jobs.common.OzSkillHandler;
import net.swordie.ms.client.jobs.cygnus.BlazeWizard;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.legend.Aran;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.jobs.resistance.Xenon;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSword;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSwordPath;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.mob.skill.MobSkillModule;
import net.swordie.ms.life.mob.skill.MobSkillStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.world.field.ClockPacket;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ScheduledFuture;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.client.jobs.sengoku.Kanna.*;

/**
 * Created on 1/6/2018.
 */
public class AffectedArea extends Life {
    private static final Logger log = LogManager.getLogger();

    private Char owner;
    private Rect rect, skillRect, rect2;
    private int skillID;
    private int force;
    private int option;
    private int elemAttr;
    private int chrLv;
    private int mobLv;
    private int slv;
    private byte aaType;
    private short delay;
    private boolean flip;
    private int duration;
    private ScheduledFuture aaTimer;
    private int idk;
    private int mobOwnerOID;
    private int mobOwnerTID;
    private byte idk2;
    public boolean byMistEruption;

    public AffectedArea(int templateId) {
        super(templateId);
    }

    public Rect getRect() {
        return rect;
    }

    public void setRect(Rect rect) {
        this.rect = rect;
    }

    public Rect getSkillRect() {
        return skillRect;
    }

    public void setSkillRect(Rect skillRect) {
        this.skillRect = skillRect;
    }

    public Rect getRect2() {
        return rect2;
    }

    public void setRect2(Rect rect2) {
        this.rect2 = rect2;
    }

    public int getCharID() {
        return owner == null ? 0 : owner.getId();
    }

    public void setOwner(Char owner) {
        this.owner = owner;
    }

    public Char getOwner() {
        return owner;
    }

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public int getForce() {
        return force;
    }

    public void setForce(int force) {
        this.force = force;
    }

    public int getOption() {
        return option;
    }

    public void setOption(int option) {
        this.option = option;
    }

    public int getElemAttr() {
        return elemAttr;
    }

    public void setElemAttr(int elemAttr) {
        this.elemAttr = elemAttr;
    }

    public int getChrLv() {
        return chrLv;
    }

    public void setChrLv(int chrLv) {
        this.chrLv = chrLv;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    public byte getAaType() {
        return aaType;
    }

    public void setAaType(byte aaType) {
        this.aaType = aaType;
    }

    public short getDelay() {
        return delay;
    }

    public void setDelay(short delay) {
        this.delay = delay;
    }

    public boolean isFlip() {
        return flip;
    }

    public void setFlip(boolean flip) {
        this.flip = flip;
    }

    public int getMobOwnerOID() {
        return mobOwnerOID;
    }

    public void setMobOwnerOID(int mobOwnerOID) {
        this.mobOwnerOID = mobOwnerOID;
    }

    public int getMobOwnerTID() {
        return mobOwnerTID;
    }

    public void setMobOwnerTID(int mobOwnerTID) {
        this.mobOwnerTID = mobOwnerTID;
    }

    public byte getIdk2() {
        return idk2;
    }

    public void setIdk2(byte idk2) {
        this.idk2 = idk2;
    }

    public static AffectedArea getAffectedArea(Char chr, AttackInfo attackInfo) {
        return getAffectedArea(chr, attackInfo, chr.getPosition());
    }

    public static AffectedArea getAffectedArea(Char chr, AttackInfo attackInfo, Position pos) {
        if (pos == null) {
            pos = chr.getPosition();
        }

        AffectedArea aa = new AffectedArea(attackInfo.skillId);
        aa.setSkillID(attackInfo.skillId);
        aa.setSlv(attackInfo.slv);
        aa.setElemAttr(attackInfo.elemAttr);
        aa.setForce(attackInfo.force);
        aa.setOption(attackInfo.option);
        aa.setOwner(chr);
        aa.setChrLv(chr.getLevel());
        aa.setFh(chr.getFoothold());
        aa.setPosition(pos);
        return aa;
    }

    public static AffectedArea getPassiveAA(Char chr, int skillId, int slv) {
        return getPassiveAA(chr, skillId, slv, chr.getPosition());
    }

    public static AffectedArea getPassiveAA(Char chr, int skillID, int slv, Position position) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        AffectedArea aa = new AffectedArea(skillID);
        aa.setOwner(chr);
        aa.setChrLv(chr.getLevel());
        aa.setSkillID(skillID);
        aa.setSlv(slv);

        if (position == null) {
            position = chr.getPosition();
        }
        aa.setPosition(position);

        if (si != null && si.getFirstRect() != null) {
            aa.setRect(aa.getRectAround(si.getFirstRect()));
        }
        aa.setFh(chr.getFoothold());
        return aa;
    }

    public static AffectedArea getMobAA(Mob mob, short skill, short slv, MobSkillInfo msi) {
        AffectedArea aa = new AffectedArea(0);

        aa.setAaType((byte) 1); // From Mob Type
        aa.setSkillID(skill);
        aa.setMobOwnerOID(mob.getObjectId());
        aa.setMobOwnerTID(mob.getTemplateId());
        aa.setSlv(slv);
        aa.setMobLv(mob.getLevel());
        aa.setDuration(msi.getSkillStatIntValue(MobSkillStat.time) * 1000);
        aa.setChrLv(mob.getLevel());
        if (msi.getLt() != null) {
            aa.setRect(mob.getPosition().getRectAround(new Rect(msi.getLt(), msi.getRb())));
        } else {
            var otherMsi = SkillData.getMobSkillInfoByIdAndLevel(msi.getOtherSkillID(), msi.getOtherSkillLev());
            if (otherMsi != null) {
                aa.setRect(mob.getPosition().getRectAround(new Rect(otherMsi.getLt(), otherMsi.getRb())));
            } else {
                log.info("Unhandled AA Rect for mob skill:" + skill + " SLV:" + slv);
            }
        }

        return aa;
    }

    public boolean isMobOwnedAA() {
        return getAaType() == 1;
    }

    public void handleMobInside(Mob mob) {

        Char chr = getField().getCharByID(getCharID());
        if (chr != null) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            int skillID = getSkillID();
            Skill skill = chr.getSkill(getSkillID());
            int slv = getSlv();
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            MobTemporaryStat mts = mob.getTemporaryStat();
            Option o = new Option();
            Option o1 = new Option();
            Option o2 = new Option();
            Option o3 = new Option();
            switch (skillID) {
                case FirePoison.POISON_MIST:
                    if (!mts.hasBurnFromSkillAndOwner(skillID, getCharID())) {
                        int dotDmg = si.getValue(dot, slv);
                        int dotDuration = (int) (si.getValue(dotTime, slv) * chr.getTotalStat(BaseStat.dotBuffTimeR) / 100D);
                        if (chr.hasSkill(FirePoison.MIST_ERUPTION)) {
                            dotDmg = chr.getSkillStatValue(SkillStat.x, FirePoison.MIST_ERUPTION); // passive DoT dmg boost to Poison Mist
                        }
                        if (chr.hasSkill(FirePoison.POISON_MIST_CRIPPLE)) {
                            dotDmg += chr.getSkillStatValue(dot, FirePoison.POISON_MIST_CRIPPLE);
                        }
                        if (chr.hasSkill(FirePoison.POISON_MIST_AFTERMATH)) {
                            dotDuration += chr.getSkillStatValue(SkillStat.dotTime, FirePoison.POISON_MIST_AFTERMATH);
                        }
                        mts.createAndAddBurnedInfo(chr, mob, skillID, slv, dotDmg, si.getValue(dotInterval, slv), dotDuration, 1);
                    }
                    break;
                case BowMaster.FLAME_SURGE:
                case EXORCIST_CHARM:
                    if (!mts.hasBurnFromSkillAndOwner(skillID, getCharID())) {
                        mts.createAndAddBurnedInfo(chr, skill);
                    }
                    break;
                case RuneStone.LIBERATE_THE_DESTRUCTIVE_RUNE:
                    if (!mts.hasBurnFromSkillAndOwner(skillID, getCharID())) {
                        mts.createAndAddBurnedInfo(chr, skillID, slv);
                    }
                    break;
                case Shade.SPIRIT_TRAP:
                    o.nOption = 1;
                    o.rOption = skillID;
                    o.tOption = si.getValue(time, slv);
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o);
                    break;
                case NightLord.FRAILTY_CURSE:
                    if (!mob.isBoss() || chr.hasSkill(NightLord.FRAILTY_CURSE_BOSS_RUSH)) {
                        o.nOption = si.getValue(SkillStat.y, slv) - chr.getSkillStatValue(s, NightLord.FRAILTY_CURSE_SLOW); // already negative in SI
                        o.rOption = skillID;
                        o.tOption = si.getValue(time, slv);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o);
                        o1.nOption = -si.getValue(w, slv) - chr.getSkillStatValue(v, NightLord.FRAILTY_CURSE_ENHANCE);
                        o1.rOption = skillID;
                        o1.tOption = si.getValue(time, slv);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.PAD, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MAD, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o1);
                    }
                    break;
                case Zero.TIME_DISTORTION:
                    mts.removeBuffs();
                    o.nOption = 1;
                    o.rOption = skillID;
                    o.tOption = 5;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o);
                    o1.nOption = si.getValue(SkillStat.x, slv);
                    o1.rOption = skillID;
                    o1.tOption = 5;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.AddDamParty, o1);
                    break;
                case Aran.FINAL_CHARGE:
                    o.nOption = 1;
                    o.rOption = skillID;
                    o.tOption = 3;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Freeze, o);
                    break;
                case Pirate.PIRATES_BANNER:
                    o.nOption = -si.getValue(z, slv);
                    o.rOption = skillID;
                    o.tOption = 5;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o);
                    mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o);
                    break;
                case BeastTamer.CATS_CRADLE_BLITZKRIEG:
                    o.nOption = getCharID();
                    o.rOption = skillID;
                    o.tOption = 7;
                    mts.addStatOptionsAndBroadcast(chr, MobStat.CradleBlitzkrieg, o);
                    if (!mts.hasBurnFromSkillAndOwner(skillID, getCharID())) {
                        mts.createAndAddBurnedInfo(chr, mob, skillID, slv, si.getValue(damage, slv), 1, 4, 1);
                    }
                    break;
            }
        }

        MobSkillID msID = MobSkillID.getMobSkillIDByVal(skillID);
        if (msID != MobSkillID.Unk) {
            switch (msID) {
                case AreaTimezone: //slv 1 = decrease, slv 2 = increase
                    if (getField().getInstance() != null) {
                        boolean left = slv == 1;
                        int time = (int) (getField().getInstance().getRemainingTime() / 1000L);
                        if (left) {
                            time = Math.max(1, time - BossConstants.VON_BON_TIME_SHIFT);
                        } else {
                            time = Math.min(BossConstants.VON_BON_TIME, time + BossConstants.VON_BON_TIME_SHIFT);
                        }
                        getField().broadcastPacket(FieldPacket.clock(ClockPacket.shiftTimer(left, time)));

                        //Update Timeout
                        getField().getInstance().setTimeoutNoBroadcast(time);
                        break;
                    }
            }

        }
    }

    public void handleCharInside(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasAffectedArea(this)) {
            return;
        }
        tsm.addAffectedArea(this);
        if (isMobOwnedAA()) {
            switch (getMobOwnerTID()) {
                case 8920102: //Crimson Queen
                    if (chr.getTemporaryStatManager().hasStat(FireBomb)) {
                        chr.getTemporaryStatManager().removeStat(FireBomb);
                    }
                    chr.damage(50000 / getField().getCharsInRect(this.rect).size(), true); //Breath damage / amount of players in the breath
                    break;


                case 8920002: //Chaos crimson queen
                    if (chr.getTemporaryStatManager().hasStat(FireBomb)) {
                        chr.getTemporaryStatManager().removeStat(FireBomb);
                    }
                    chr.damage(80000 / getField().getCharsInRect(this.rect).size(), true); //Breath damage / amount of players in the breath
                    break;
                case BossConstants.CHAOS_CRIMSON_QUEEN_JOYOUS:
                    //Suck damage AA
                    if(getSkillID() != MobSkillID.AreaForce.getVal()) {
                        chr.damage(chr.getHP(), true); //Suck center damage
                    }
                    break;
                default:
                    var mobSkill = SkillData.getMobSkillInfoByIdAndLevel(getSkillID(), getSlv());
                    var ownerMob = getOwnerMob();
                    if (mobSkill != null && ownerMob != null) {
                        var ownerSkill = ownerMob.getSkillByMobSkillInfo(mobSkill);
                        if (ownerSkill != null) {
                            MobSkillModule.applyEffect(chr, ownerSkill);
                        }

                        var otherId = mobSkill.getOtherSkillID();
                        var otherSlv = mobSkill.getOtherSkillLev();
                        if (otherId != 0) {
                            var otherSkill = ownerMob.getSkillByMobSkillInfo(otherId, otherSlv);
                            if (otherSkill != null) {
                                MobSkillModule.applyEffect(chr, otherSkill);
                            }
                        }
                    }
                    break;
            }
        } else {
            int skillID = getSkillID();
            int slv = getSlv();
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            Option o = new Option();
            Option o1 = new Option();
            Option o2 = new Option();
            Option o3 = new Option();
            Option o4 = new Option();
            switch (skillID) {
                case Zero.TIME_DISTORTION:
                    tsm.removeAllDebuffs();
                    o2.rOption = skillID;
                    o2.nOption = si.getValue(indieBooster, slv);
                    tsm.putCharacterStatValue(IndieBooster, o2); // Indie
                    break;
                case BlazeWizard.BURNING_CONDUIT:
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(indieDamR, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1); // Indie
                    o2.rOption = skillID;
                    o2.nOption = si.getValue(indieBooster, slv);
                    tsm.putCharacterStatValue(IndieBooster, o2); // Indie
                    break;
                case BELLFLOWER_BARRIER:
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(bdR, slv) + (getOwner().hasSkill(BELLFLOWER_BARRIER_BOSS_RUSH_H) ? 20 : 0);
                    tsm.putCharacterStatValue(IndieBDR, o1); // Indie
                    o2.rOption = skillID;
                    o2.nOption = si.getValue(indieDamR, slv);
                    tsm.putCharacterStatValue(IndieDamR, o2);
                    break;
                case BLOSSOM_BARRIER:
                    o1.nOption = si.getValue(SkillStat.x, slv);
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(DamageReduce, o1);
                    o2.nOption = si.getValue(SkillStat.y, slv);
                    o2.rOption = skillID;
                    tsm.putCharacterStatValue(AsrR, o2);
                    tsm.putCharacterStatValue(TerR, o2);
                    o3.nOption = si.getValue(prop, slv);
                    o3.rOption = skillID;
                    tsm.putCharacterStatValue(IndieStance, o3);
                    break;
                case BeastTamer.CHAMP_CHARGE_CAT_FINISHER:
                    o1.nOption = si.getValue(q2, slv);
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(DamageReduce, o1);
                    break;
                case Aran.MAHAS_DOMAIN:
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(IndieACC, o1);
                    break;
                case Shadower.SMOKE_SCREEN:
                    o2.rOption = skillID;
                    o2.nOption = si.getValue(SkillStat.x, slv);
                    tsm.putCharacterStatValue(IndieCrDmg, o2);
                    break;
                case Shadower.SHADOW_VEIL:
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(IndieACC, o1);
                    break;
                case Xenon.TEMPORAL_POD:
                    o1.nOption = 1;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(OnCapsule, o1);
                    break;
                case Xenon.HYPOGRAM_FIELD_FUSION:
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(indieDamR, slv);
                    o1.wOption = getOwner().getId();
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    break;
                case Xenon.HYPOGRAM_FIELD_SUPPORT:
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(indieMhpR, slv);
                    o1.wOption = getOwner().getId();
                    tsm.putCharacterStatValue(IndieMHPR, o1);
                    break;
                case Pirate.PIRATES_BANNER:
                    o1.rOption = skillID;
                    o1.nOption = si.getValue(indieStatRBasic, slv);
                    tsm.putCharacterStatValue(IndieStatR, o1);
                    break;
                case SPIRITS_DOMAIN:
                    int stateMultiplier = getOption() + 1;
                    o1.nOption = si.getValue(SkillStat.x, slv) * stateMultiplier;
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                    o2.nOption = si.getValue(w, slv) * stateMultiplier;
                    o2.rOption = skillID;
                    tsm.putCharacterStatValue(IndieAsrR, o2);
                    if (stateMultiplier == 3) {
                        o3.nOption = -2;
                        o3.rOption = skillID;
                        tsm.putCharacterStatValue(IndieBooster, o3);
                    }
                    break;
                case Pathfinder.OBSIDIAN_BARRIER_BURST:
                case Pathfinder.OBSIDIAN_BARRIER_TORRENT:
                    o1.nOption = si.getValue(SkillStat.y, slv);
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(DamageReduce, o1);
                    break;

                case OzSkillHandler.RING_OF_RESTRAINT:
                    if (chr == getOwner()) {
                        o1.nOption = si.getValue(indiePadR, slv);
                        o1.rOption = skillID;
                        tsm.putCharacterStatValue(IndiePADR, o1);
                        o2.nOption = si.getValue(indieMadR, slv);
                        o2.rOption = skillID;
                        tsm.putCharacterStatValue(IndieMADR, o2);
                    }
                    break;
                case BattleMage.PARTY_SHIELD:
                    o1.nOption = si.getValue(SkillStat.y, slv) + getOwner().getSkillStatValue(SkillStat.y, BattleMage.PARTY_SHIELD_ENHANCE);
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(PartyBarrier, o1);
                    break;
                case Lara.MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1:
                    var buffSkillId = Lara.MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_2;
                    var buffInfo = SkillData.getSkillInfoById(buffSkillId);
                    var tOpt = chr.getId() == getOwner().getId() ? buffInfo.getValue(time, slv) : 20;
                    o1.nOption = buffInfo.getValue(indieDamR, slv);
                    o1.rOption = buffSkillId;
                    o1.tOption = tOpt;
                    tsm.putCharacterStatValue(IndieDamR, o1, true);
                    break;
                case Lara.MANIFESTATION_WIND_SWING_ACTIVE_1:
                    buffSkillId = Lara.MANIFESTATION_WIND_SWING_ACTIVE_2;
                    buffInfo = SkillData.getSkillInfoById(buffSkillId);
                    tOpt = chr.getId() == getOwner().getId() ? buffInfo.getValue(time, slv) : 20;
                    o1.nOption = buffInfo.getValue(indieBooster, slv);
                    o1.rOption = buffSkillId;
                    o1.tOption = tOpt;
                    tsm.putCharacterStatValue(IndieBooster, o1, true);
                    o2.nOption = buffInfo.getValue(indieSpeed, slv);
                    o2.rOption = buffSkillId;
                    o2.tOption = tOpt;
                    tsm.putCharacterStatValue(IndieSpeed, o2, true);
                    o3.nOption = buffInfo.getValue(indieJump, slv);
                    o3.rOption = buffSkillId;
                    o3.tOption = tOpt;
                    tsm.putCharacterStatValue(IndieJump, o3, true);
                    break;
                case Lara.ARBOR_AWAY_1:
                    o1.nOption = si.getValue(indieBDR, slv);
                    o1.rOption = skillID;
                    tsm.putCharacterStatValue(IndieBDR, o1);
                    o2.nOption = si.getValue(SkillStat.x, slv);
                    o2.rOption = skillID;
                    tsm.putCharacterStatValue(IndieCrDmg, o2);
                    o3.nOption = si.getValue(indieStance, slv);
                    o3.rOption = skillID;
                    tsm.putCharacterStatValue(IndieStance, o3);
                    break;
            }
            tsm.sendSetStatPacket();
        }
    }

    public void activateTimer(int initialDelayMS, int delayMS) {
        EventManager.stopTimer(aaTimer);
        aaTimer = EventManager.addFixedRateEvent(this::doScheduledFuture, initialDelayMS, delayMS);
    }

    private void doScheduledFuture() {
        int skillID = getSkillID();
        SkillInfo si = SkillData.getSkillInfoById(getSkillID());
        int slv = getSlv();
        Field field = getField();
        List<Char> chrList = field.getCharsInRect(getRect()); // probably should add a party members check.
        List<Mob> mobList = field.getMobsInRect(getRect());
        switch (skillID) {
            case Xenon.TEMPORAL_POD:
                for (Char chr : chrList) {
                    TemporaryStatManager tsm = chr.getTemporaryStatManager();
                    if (tsm.hasStat(OnCapsule) && !chr.hasSkillOnCooldown(SkillConstants.XENON_POD_FOR_COOLDOWN)) {
                        for (var skillId : chr.getSkillCoolTimes().keySet()) {
                            if (SkillData.getSkillInfoById(skillId) != null && !SkillData.getSkillInfoById(skillId).isNotCooltimeReset()) {
                                chr.reduceSkillCoolTime(skillId, 1000);

                            }
                        }
                        chr.addSkillCoolTime(SkillConstants.XENON_POD_FOR_COOLDOWN, 950);
                    }
                }
                break;
            case Aran.MAHAS_DOMAIN:
                for (Char chr : chrList) {
                    TemporaryStatManager tsm = chr.getTemporaryStatManager();
                    tsm.removeAllDebuffs();
                    chr.heal((int) ((chr.getMaxHP() * si.getValue(w, slv)) / 100D));
                    chr.healMP((int) ((chr.getMaxMP() * si.getValue(w, slv)) / 100D));
                }
                break;
            case SPIRITS_DOMAIN:
                int stateMultiplier = getOption() + 1;
                int healed = si.getValue(SkillStat.y, slv) * stateMultiplier;
                for (Char chr : chrList) {
                    chr.heal(chr.getHPPerc(healed));
                    chr.healMP((int) ((chr.getMaxMP() * healed) / 100D));
                }
                break;
            case BLOSSOM_BARRIER: // Only if Mana Vein is nearby
            case BELLFLOWER_BARRIER:
            case MANA_VEIN:
                si = SkillData.getSkillInfoById(MANA_VEIN);
                int healedMana = si.getValue(w, slv);
                if (skillID != MANA_VEIN) {
                    healedMana -= getOwner().getSkillStatValue(w, WARDING_BARRIER);
                }
                int finalHealedMana = healedMana;
                chrList.stream().filter(c -> c == getOwner()).findFirst().ifPresent(chrInsideAA -> chrInsideAA.healMP(finalHealedMana));
                break;
            case BeastTamer.PURR_ZONE:
                for (Char chr : chrList) {
                    chr.heal(si.getValue(hp, slv));
                }
                for (var mob : mobList) {
                    mob.damageBySkill(getOwner(), getSkillID(), getSlv(), 1, getOwner().getDamageCalc()
                            .calcPDamageForPvM(mob, skillID, slv, si.getValue(damage, slv)));
                }
                break;
            case Lara.ERUPTION_SUNRISE_WELL_ACTIVE_2:
                var secondAtomSI = SkillData.getSkillInfoById(Lara.ERUPTION_SUNRISE_WELL_ACTIVE_3);
                List<SecondAtom> saList = new ArrayList<>();
                for (var sai : secondAtomSI.getSecondAtomInfos()) {
                    var sa = SecondAtom.createFromInfo(getOwner(), Lara.ERUPTION_SUNRISE_WELL_ACTIVE_3, sai);
                    sa.setPosition(getRect().getRandomPositionInside());
                    sa.setCustomList(new ArrayList<>() {{
                        add(sa.getPosition().getX());
                        add(sa.getPosition().getY());
                    }});
                    saList.add(sa);
                }
                if (saList.size() > 0) {
                    getOwner().spawnSecondAtoms(saList);
                }
                break;
            case Lara.ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_2:
                secondAtomSI = SkillData.getSkillInfoById(Lara.ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_3);
                saList = new ArrayList<>();
                for (var sai : secondAtomSI.getSecondAtomInfos()) {
                    var sa = SecondAtom.createFromInfo(getOwner(), Lara.ERUPTION_SUNRISE_WELL_UPGRADE_4_ACTIVE_3, sai);
                    sa.setPosition(getRect().getRandomPositionInside());
                    sa.setCustomList(new ArrayList<>() {{
                        add(sa.getPosition().getX());
                        add(sa.getPosition().getY());
                    }});
                    saList.add(sa);
                }
                if (saList.size() > 0) {
                    getOwner().spawnSecondAtoms(saList);
                }
                break;
            case Lara.MANIFESTATION_SUNLIGHT_FILLED_GROUND_ACTIVE_1:
                for (var chr : chrList) {
                    chr.heal(chr.getHPPerc(si.getValue(hp, slv)));
                }
                break;
            case Lara.ARBOR_AWAY_1:
                for (var chr : chrList) {
                    var cTsm = chr.getTemporaryStatManager();
                    cTsm.removeAllDebuffs();
                }
                break;
            default:
                log.error(String.format("Unhandled AffectedArea Timer. SkillId: %d", skillID));
                EventManager.stopTimer(aaTimer);
                break;
        }
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void handleAARemoved() {
        Field field = getField();

        // Mob Affected Areas
        if (getAaType() == 1) {

            // Demian Flying Sword Affected Area.
            if (getSkillID() == 131 && getSlv() == 28) {
                DemianFlyingSword sword = (DemianFlyingSword) field.getLifeByObjectID(getIdk());
                if (sword != null) {
                    List<Position> path;
                    if (new Random().nextBoolean()) {
                        path = DemianFlyingSwordPath.flyingSwordPathBouncing1;
                    } else {
                        path = DemianFlyingSwordPath.flyingSwordPathBouncing2;
                    }
                    sword.setDemianFlyingSwordPath(DemianFlyingSwordPath.flyingSwordBouncingPath(path));
                    sword.startPath();
                    sword.target();
                }
            }

            // Char Affected Areas
        } else {

            switch (getSkillID()) {
                case Illium.LONGINUS_ZONE:
                    ((Illium) getOwner().getJobHandler()).swReactOnLonginusZone(getRect());
                    break;
            }

        }
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Field field = getField();
        if (onlyChar == null) {
            field.broadcastPacket(FieldPacket.affectedAreaCreated(this));
        } else {
            onlyChar.write(FieldPacket.affectedAreaCreated(this));
            field.checkCharInAffectedAreas(onlyChar);
        }
    }

    @Override
    public void broadcastLeavePacket() {
        EventManager.stopTimer(aaTimer);
        handleAARemoved(); // events to happen upon removal of AffectedArea
        Field field = getField();
        field.broadcastPacket(FieldPacket.affectedAreaRemoved(this, byMistEruption));
        for (Char chr : field.getCharsReadOnly()) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.hasAffectedArea(this)) {
                tsm.removeAffectedArea(this);
            }
        }
    }

    public void setIdk(int idk) {
        this.idk = idk;
    }

    public int getIdk() {
        return idk;
    }

    public Mob getOwnerMob() {
        var life = getField().getLifeByObjectID(getMobOwnerOID());
        if (life instanceof Mob) {
            return (Mob) life;
        }
        return null;
    }

    public int getMobLv() {
        return mobLv;
    }

    public void setMobLv(int mobLv) {
        this.mobLv = mobLv;
    }
}
