package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.items.ItemBuffs;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.adventurer.archer.Archer;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.pirate.Jett;
import net.swordie.ms.client.jobs.adventurer.thief.BladeMaster;
import net.swordie.ms.client.jobs.adventurer.thief.NightLord;
import net.swordie.ms.client.jobs.adventurer.thief.Thief;
import net.swordie.ms.client.jobs.adventurer.warrior.DarkKnight;
import net.swordie.ms.client.jobs.anima.HoYoung;
import net.swordie.ms.client.jobs.common.ItemSkillHandler;
import net.swordie.ms.client.jobs.cygnus.BlazeWizard;
import net.swordie.ms.client.jobs.cygnus.NightWalker;
import net.swordie.ms.client.jobs.cygnus.WindArcher;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.jobs.resistance.Mechanic;
import net.swordie.ms.client.jobs.resistance.WildHunter;
import net.swordie.ms.client.jobs.resistance.Xenon;
import net.swordie.ms.client.jobs.resistance.demon.Demon;
import net.swordie.ms.client.jobs.sengoku.Hayato;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 1/6/2018.
 */
public class Summon extends Life {

    private static final Logger log = LogManager.getLogger();

    private Char chr;
    private int skillID;
    private int bulletID;
    private int summonTerm;
    private int charLevel;
    private int slv;
    private AssistType assistType;
    private EnterType enterType;
    private byte teslaCoilState;
    private boolean flyMob;
    private boolean beforeFirstAttack;
    private boolean jaguarActive;
    private boolean attackActive;
    private short curFoothold;
    private AvatarLook avatarLook;
    private List<Position> teslaCoilPositions = new ArrayList<>();
    private MoveAbility moveAbility;
    private Position[] kishinPositions = new Position[2];
    private int maxHP;
    private int hp;
    private int count;
    private int state;
    private int mobTemplateId;
    private List<Integer> linkedSummonSkillIds = new ArrayList<>();
    private int actionDelay = 400, movementDelay = 30;
    private boolean deleteOnNextAttack, hasExploded;
    private long gravityCrushDmg, gravityCrushMaxDmg;
    private long spawnTime;
    private int maxWalkDistance = 400; // default 400

    public Summon(int templateId) {
        super(templateId);
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public int getCharLevel() {
        return charLevel;
    }

    public void setCharLevel(int charLevel) {
        this.charLevel = charLevel;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    public int getBulletID() {
        return bulletID;
    }

    public void setBulletID(int bulletID) {
        this.bulletID = bulletID;
    }

    public int getSummonTerm() {
        return summonTerm;
    }

    public void setSummonTerm(int summonTerm) {
        this.summonTerm = 1000 * summonTerm;
    }

    public AssistType getAssistType() {
        return assistType;
    }

    public void setAssistType(AssistType assistType) {
        this.assistType = assistType;
    }

    public EnterType getEnterType() {
        return enterType;
    }

    public void setEnterType(EnterType enterType) {
        this.enterType = enterType;
    }

    public byte getTeslaCoilState() {
        return teslaCoilState;
    }

    public void setTeslaCoilState(byte teslaCoilState) {
        this.teslaCoilState = teslaCoilState;
    }

    public boolean isFlyMob() {
        return flyMob;
    }

    public void setFlyMob(boolean flyMob) {
        this.flyMob = flyMob;
    }

    public boolean isBeforeFirstAttack() {
        return beforeFirstAttack;
    }

    public void setBeforeFirstAttack(boolean beforeFirstAttack) {
        this.beforeFirstAttack = beforeFirstAttack;
    }

    public boolean isJaguarActive() {
        return jaguarActive;
    }

    public void setJaguarActive(boolean jaguarActive) {
        this.jaguarActive = jaguarActive;
    }

    public boolean isAttackActive() {
        return attackActive;
    }

    public void setAttackActive(boolean attackActive) {
        this.attackActive = attackActive;
    }

    public short getCurFoothold() {
        return curFoothold;
    }

    public void setCurFoothold(short curFoothold) {
        this.curFoothold = curFoothold;
    }

    public AvatarLook getAvatarLook() {
        return avatarLook;
    }

    public void setAvatarLook(AvatarLook avatarLook) {
        this.avatarLook = avatarLook;
    }

    public List<Position> getTeslaCoilPositions() {
        return teslaCoilPositions;
    }

    public void setTeslaCoilPositions(List<Position> teslaCoilPositions) {
        this.teslaCoilPositions = teslaCoilPositions;
    }

    public MoveAbility getMoveAbility() {
        return moveAbility;
    }

    public void setMoveAbility(MoveAbility moveAbility) {
        this.moveAbility = moveAbility;
    }

    public int getMobTemplateId() {
        return mobTemplateId;
    }

    public void setMobTemplateId(int mobTemplateId) {
        this.mobTemplateId = mobTemplateId;
    }

    public int getActionDelay() {
        return actionDelay;
    }

    public void setActionDelay(int actionDelay) {
        this.actionDelay = actionDelay;
    }

    public int getMovementDelay() {
        return movementDelay;
    }

    public void setMovementDelay(int movementDelay) {
        this.movementDelay = movementDelay;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public void incCount() {
        incCount(1);
    }

    public void incCount(int add) {
        setCount(getCount() + add);
    }

    public long getSpawnTime() {
        return spawnTime;
    }

    public void setSpawnTime(long spawnTime) {
        this.spawnTime = spawnTime;
    }

    public int getRemainingTime() {
        return (int) (Util.getCurrentTimeLong() - getSpawnTime());
    }

    public int getMaxWalkDistance() {
        return maxWalkDistance;
    }

    public void setMaxWalkDistance(int maxWalkDistance) {
        this.maxWalkDistance = maxWalkDistance;
    }

    public static Summon getSummonBy(Char chr, int skillID, int slv) {
        Summon summon = getSummonByNoCTS(chr, skillID, slv);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        o1.rOption = skillID;
        o1.nOption = 1;
        o1.summon = summon;
        o1.tOption = summon.getSummonTerm();
        o1.setInMillis(true);
        tsm.putCharacterStatValue(IndieSummon, o1, true);
        tsm.sendSetStatPacket();
        return summon;
    }

    public static Summon getSummonByNoCTS(Char chr, int skillID, int slv) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        Summon summon = new Summon(-1);
        summon.setSpawnTime(Util.getCurrentTimeLong());
        summon.setChr(chr);
        summon.setSkillID(skillID);
        summon.setSlv(slv);
        if (SkillConstants.isNoBuffDurationAppliedSkill(skillID)) {
            summon.setSummonTerm(si.getValue(SkillStat.time, slv));
        } else {
            summon.setSummonTerm((int) ((si.getValue(SkillStat.time, slv) * chr.getTotalStat(BaseStat.summonTimeR)) / 100D));
        }
        summon.setCharLevel(chr.getLevel());
        summon.setPosition(chr.getPosition().deepCopy());
        summon.setMoveAction((byte) 4);
        if (chr.getField().findFootHoldBelow(summon.getPosition()) != null) {
            summon.setCurFoothold((short) chr.getField().findFootHoldBelow(summon.getPosition()).getId());
        }
        summon.setMoveAbility(MoveAbility.Walk);
        summon.setAssistType(AssistType.Attack);
        summon.setEnterType(EnterType.Animation);
        summon.setBeforeFirstAttack(true);
        summon.setTemplateId(skillID);
        summon.setAttackActive(true);
        return summon;
    }

    public Position[] getKishinPositions() {
        return kishinPositions;
    }

    public void setKishinPositions(Position[] kishinPositions) {
        this.kishinPositions = kishinPositions;
    }

    public void setMaxHP(int maxHP) {
        this.maxHP = maxHP;
    }

    public int getMaxHP() {
        return maxHP;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public void onSkillUse(int skillId, InPacket inPacket) {
        if (skillId == 0) {
            skillId = getSkillID();
        }
        switch (skillId) {
            case DarkKnight.EVIL_EYE:
                ((DarkKnight) chr.getJobHandler()).healByEvilEye();
                break;

            case DarkKnight.HEX_OF_THE_EVIL_EYE:
                ((DarkKnight) chr.getJobHandler()).giveHexOfTheEvilEyeBuffs(this);
                break;

            case net.swordie.ms.client.jobs.resistance.Mechanic.SUPPORT_UNIT_HEX:
            case net.swordie.ms.client.jobs.resistance.Mechanic.ENHANCED_SUPPORT_UNIT:
                ((Mechanic) chr.getJobHandler()).doSupportUnitSkill(this);
                break;

            case net.swordie.ms.client.jobs.resistance.Mechanic.BOTS_N_TOTS:
                ((Mechanic) chr.getJobHandler()).summonBotsNTotsDogs(this);
                break;

            case Demon.DEFENDER_OF_THE_DEMON:
                ((Demon) chr.getJobHandler()).giveMastemasMark();
                break;

            case Bishop.ANGEL_OF_BALANCE_BENEVOLENCE:
                ((Bishop) chr.getJobHandler()).giveAngelOfBalanceSummonBuff();
                break;

            case Jett.SUBORBITAL_SUMMON_BIG:
                ((Jett) chr.getJobHandler()).flipSuborbitalSummon(inPacket);
                break;

            case Illium.RESONANCE:
                ((Illium) chr.getJobHandler()).doResonanceSkill();
                break;

            case Shade.SPIRITGATE_SUMMONER:
                ((Shade) chr.getJobHandler()).summonSpiritgateSummons(getPosition());
                break;

            case Shade.SPIRIT_BOND_MAX_SUMMON:
                var spiritWard = Shade.SPIRIT_WARD;
                var slv = chr.getSkillLevel(spiritWard);
                Effect effect = Effect.skillUse(spiritWard, chr.getLevel(), slv, getSkillID());
                Effect effect2 = Effect.skillAffected(getSkillID(), getSlv(), 1);

                chr.write(UserPacket.effect(effect));
                getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);

                chr.write(UserPacket.effect(effect2));
                getField().broadcastPacket(UserRemote.effect(chr.getId(), effect2), chr);

                chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), spiritWard, slv, null, null);
                break;

            case BlazeWizard.FIRES_OF_CREATION_FOX:
                ((BlazeWizard) chr.getJobHandler()).doFoxSavageFlameAttack();
                break;

            case NightLord.DARK_LORDS_OMEN:
                ((NightLord) chr.getJobHandler()).createDarkLordOmenForceAtoms(getPosition());
                break;

            case Jett.SUBORBITAL_SUMMON_SMALL_4:
            case Jett.SUBORBITAL_SUMMON_SMALL_3:
            case Jett.SUBORBITAL_SUMMON_SMALL_2:
            case Jett.SUBORBITAL_SUMMON_SMALL_1:
                break;

            case Xenon.HYPOGRAM_FIELD_SUPPORT:
                ((Xenon) chr.getJobHandler()).healHypogramField(this);
                break;

            default:
                int buffItem = SkillConstants.getBuffSkillItem(skillId);
                if (buffItem != 0) {
                    ItemBuffs.giveItemBuffsFromItemID(chr, chr.getTemporaryStatManager(), buffItem);
                } else {
                    chr.chatMessage(String.format("Unhandled Summon Skill: %d, casted by Summon: %d", skillId, getSkillID()));
                }
                break;
        }
        if (skillId != DarkKnight.HEX_OF_THE_EVIL_EYE) {
            var eff = Effect.skillAffected(skillId, (byte) 1, getObjectId());
            chr.write(UserPacket.effect(eff));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff), chr);
        }
    }

    public void onAttack(int attackSkillId) {
        Char chr = getChr();
        if (!chr.hasSkill(attackSkillId)) {
            return;
        }
        Skill skill = chr.getSkill(attackSkillId);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        switch (attackSkillId) {
            case FirePoison.ELEMENTAL_FURY:
            case DarkKnight.RADIANT_EVIL:
                chr.setSkillCooldown(attackSkillId, chr.getSkillLevel(attackSkillId));
                break;

            case net.swordie.ms.client.jobs.resistance.Mechanic.MECHA_CARRIER:
                ((Mechanic) chr.getJobHandler()).createMechaCarrierSummons(this);
                break;

            default:
                chr.chatMessage(String.format("Unhandled Summon Attack: %d. Used by Summon: %d", attackSkillId, getSkillID()));
                log.error(String.format("Unhandled Summon Attack: %d. Used by Summon: %d", attackSkillId, getSkillID()));
                break;
        }
    }

    public void onHit(int damage, int mobTemplateId) {
        Char chr = getChr();
        Skill skill = chr.getSkill(getSkillID());

        if(skill == null) {
            return;
        }

        int summonHP = getHp();
        int newSummonHP = summonHP - damage;

        switch (getSkillID()) {
            case BladeMaster.MIRRORED_TARGET:
                ((Thief) chr.getJobHandler()).giveShadowMeld();
                break;
            case WindArcher.EMERALD_DUST:
                ((WindArcher) chr.getJobHandler()).applyEmeraldDustDebuffToMob(this, mobTemplateId);
                // Fallthrough intended
            case WindArcher.EMERALD_FLOWER:
                ((WindArcher) chr.getJobHandler()).applyEmeraldFlowerDebuffToMob(this, mobTemplateId);
                break;
            case WildHunter.SUMMON_JAGUAR_GREY:
            case WildHunter.SUMMON_JAGUAR_YELLOW:
            case WildHunter.SUMMON_JAGUAR_RED:
            case WildHunter.SUMMON_JAGUAR_PURPLE:
            case WildHunter.SUMMON_JAGUAR_BLUE:
            case WildHunter.SUMMON_JAGUAR_JAIRA:
            case WildHunter.SUMMON_JAGUAR_SNOW_WHITE:
            case WildHunter.SUMMON_JAGUAR_ONYX:
            case WildHunter.SUMMON_JAGUAR_CRIMSON:
                // Invincible
                return;
            case Marksman.ARROW_ILLUSION:
                break;
            default:
                log.error(String.format("Unhandled HP Summon, id = %d", getSkillID()));
                break;
        }

        if(newSummonHP <= 0) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStatsBySkill(skill.getSkillId());
        } else {
            setHp(newSummonHP);
            getChr().write(Summoned.summonedUpdateHPTag(this));
        }
    }

    private void onRemoved() {
        Char chr = getChr();
        int skillId = getSkillID();
        switch (skillId) {
            case Hayato.BATTOUJUTSU_ULTIMATE_WILL:
                ((Hayato) chr.getJobHandler()).gainSwordEnergyFromGodOfBladesSummon(getCount());
                break;
            case Kanna.KISHIN_SHOUKAN:
            case ItemSkillHandler.MONOLITH:
                break;
            case Jett.GRAVITY_CRUSH:
                SkillInfo si = SkillData.getSkillInfoById(skillId);
                int slv = chr.getSkillLevel(skillId);
                break;
            case Kanna.GHOST_YAKSHA_TRAINEE:
            case Kanna.GHOST_YAKSHA_BROTHER:
            case Kanna.GHOST_YAKSHA_LIEUTENANT:
            case Kanna.GHOST_YAKSHA_BOSS:
                ((Kanna) chr.getJobHandler()).updateGreatOniLord(getRemainingTime());
                break;
            case Kanna.YAKSHA_GHOST_GREAT_ONI_LORD:
                var tsm = chr.getTemporaryStatManager();
                tsm.putCharacterStatValue(IndieNotDamaged, new Option(1, 0, 2), true);
                break;
            case Kanna.SPIRITS_DOMAIN:
                AffectedArea aa = getField().getAffectedAreas().stream().filter(sdaa -> sdaa.getOwner() == chr && sdaa.getSkillID() == Kanna.SPIRITS_DOMAIN).findFirst().orElse(null);
                if (aa != null) {
                    getField().removeLife(aa);
                }
                break;
            case Illium.CRYSTAL_SKILL_DEUS:
                getField().getSummons().stream().filter(s -> s.getChr() == chr && s.getSkillID() == Illium.DEUS_SUB).forEach(s -> getField().removeLife(s));
                chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), Illium.EX, chr.getSkillLevel(Illium.EX), null, new SkillUseInfo());
                if (!chr.getTemporaryStatManager().hasStat(WingsOfGlory)) {
                    chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), Illium.MACHINA, chr.getSkillLevel(Illium.MACHINA), null, new SkillUseInfo());
                }
                break;
            case HoYoung.ABSORBING_VORTEX:
                var count = getCount();
                var energy = Math.min(9, count / 4);
                if (energy > 0) {
                    Effect effect = Effect.starVortex(HoYoung.ABSORBING_VORTEX_END, getSlv(), getPosition(), energy);
                    chr.write(UserPacket.effect(effect));

                    // 5%HP/MP Healed per Energy absorbed (party affected)
                    List<Char> chrList = new ArrayList<>() {{
                        add(chr);
                    }};
                    if (chr.getParty() != null) {
                        chrList = chr.getParty().getPartyMembersInField(chr);
                    }
                    for (Char pChr : chrList) {
                        pChr.heal(pChr.getHPPerc((5 * energy)));
                        pChr.healMP(pChr.getMPPerc((5 * energy)));
                    }
                }
                break;
            case HoYoung.TELEPORT_GATE_DOOR:
                var sum = getField().getSummonByChrAndSkillId(getChr(), HoYoung.TELEPORT_GATE_CLONE);
                if (sum != null) {
                    getField().removeSummon(sum);
                }
                break;
            case Archer.FURY_OF_THE_WILD:
                var summonSkillId = 0;
                if (JobConstants.isBowMaster(chr.getJob())) {
                    summonSkillId = BowMaster.PHOENIX;
                } else if (JobConstants.isMarksman(chr.getJob())) {
                    summonSkillId = Marksman.FREEZER;
                } else if (JobConstants.isPathFinder(chr.getJob())) {
                    summonSkillId = Pathfinder.RAVEN;
                }
                if (summonSkillId > 0 && chr.hasSkill(summonSkillId)) {
                    chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), summonSkillId, chr.getSkillLevel(summonSkillId), null, null);
                }
                break;
        }
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public void incState() {
        incState(1);
    }

    public void incState(int inc) {
        setState(getState() + inc);
    }

    public List<Integer> getLinkedSummonSkillIds() {
        return linkedSummonSkillIds;
    }

    public void setLinkedSummonSkillIds(List<Integer> linkedSummonSkillIds) {
        this.linkedSummonSkillIds = linkedSummonSkillIds;
    }

    public long getGravityCrushDmg() {
        return gravityCrushDmg;
    }

    public void setGravityCrushDmg(long gravityCrushDmg) {
        this.gravityCrushDmg = gravityCrushDmg;
    }

    public long getGravityCrushMaxDmg() {
        return gravityCrushMaxDmg;
    }

    public void setGravityCrushMaxDmg(long gravityCrushMaxDmg) {
        this.gravityCrushMaxDmg = gravityCrushMaxDmg;
    }

    public boolean hasChrAsOwner(Char chr) {
        return chr != null && chr.equals(getChr());
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Field field = getField();
        if (onlyChar != null) {
            onlyChar.write(Summoned.summonedCreated(this, enterType));
        } else {
/*            if (getSummonTerm() > 0) {
                ScheduledFuture sf = EventManager.addEvent(() -> field.removeLife(getObjectId(), true), getSummonTerm());
                field.addLifeSchedule(this, sf);
            }*/
            field.broadcastPacket(Summoned.summonedCreated(this, enterType));
        }
    }

    @Override
    public void broadcastLeavePacket() {
        Field field = getField();
        onRemoved();
        LeaveType leaveType = LeaveType.ANIMATION;
        if (getSkillID() == NightWalker.SHADOW_BAT_SKILL) {
            leaveType = LeaveType.BAT_LEAVE_TYPE;
        } else if (SkillConstants.isSelfDestructSummon(getSkillID())) {
            leaveType = LeaveType.SELF_DESTRUCT;
        } else if (SkillConstants.isExplodeOnDeathSummon(getSkillID())) {
            leaveType = LeaveType.SELF_DESTRUCT;
        }
        field.broadcastPacket(Summoned.summonedRemoved(this, leaveType));
    }

    @Override
    public void reenterFieldAfterWarp(Char chr) {
        if (SkillConstants.isChangeFieldWithOwnerSummon(this)) {
            if (BattleMage.CONDEMNATION == getSkillID()
                    || BattleMage.CONDEMNATION_I == getSkillID()
                    || BattleMage.CONDEMNATION_II == getSkillID()
                    || BattleMage.CONDEMNATION_III == getSkillID()) {
                setSlv(getChr().getLevel());
                setCharLevel(getChr().getLevel());
            }
            setPosition(chr.getPosition()); // update Position to new char position
            chr.getField().spawnSummonAndRemoveOld(this);
        } else {
            chr.getTemporaryStatManager().removeStatsBySkill(getSkillID());
        }
    }
}
