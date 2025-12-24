package net.swordie.ms.handlers.user;

import com.google.common.primitives.Ints;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.GuideForceAtomInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.jupiterthunder.JupiterThunder;
import net.swordie.ms.client.character.skills.jupiterthunder.JupiterThunderUpdateInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.Zero;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.client.jobs.adventurer.Kinesis;
import net.swordie.ms.client.jobs.adventurer.archer.BowMaster;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.adventurer.magician.IceLightning;
import net.swordie.ms.client.jobs.adventurer.pirate.Buccaneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Cannoneer;
import net.swordie.ms.client.jobs.adventurer.pirate.Corsair;
import net.swordie.ms.client.jobs.adventurer.pirate.Pirate;
import net.swordie.ms.client.jobs.adventurer.warrior.DarkKnight;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.client.jobs.anima.HoYoung;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.client.jobs.cygnus.BlazeWizard;
import net.swordie.ms.client.jobs.cygnus.NightWalker;
import net.swordie.ms.client.jobs.cygnus.WindArcher;
import net.swordie.ms.client.jobs.flora.Ark;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.legend.Aran;
import net.swordie.ms.client.jobs.legend.Phantom;
import net.swordie.ms.client.jobs.legend.SkillStealManager;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.client.jobs.nova.Kain;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.jobs.resistance.*;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.client.jobs.resistance.demon.DemonSlayer;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.DebuffObjectType;
import net.swordie.ms.enums.FoxManActionType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.PsychicLock;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.FieldAttackObj;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.life.mob.skill.MobSkillModule;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.StolenSkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.time;
import static net.swordie.ms.enums.StealMemoryType.REMOVE_STEAL_MEMORY;
import static net.swordie.ms.enums.StealMemoryType.STEAL_SKILL;
import static net.swordie.ms.life.mob.skill.MobSkillID.GiveMeHeal;

public class JobSkillHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.CREATE_KINESIS_PSYCHIC_AREA)
    public static void handleCreateKinesisPsychicArea(Char chr, InPacket inPacket) {
        PsychicArea pa = new PsychicArea();
        pa.action = inPacket.decodeInt();
        pa.actionSpeed = inPacket.decodeInt();
        pa.localPsychicAreaKey = inPacket.decodeInt() + 1;
        pa.psychicAreaKey = inPacket.decodeInt();
        pa.skillID = inPacket.decodeInt();
        pa.slv = inPacket.decodeShort();
        pa.duration = inPacket.decodeInt();
        pa.isLeft = inPacket.decodeByte() != 0;
        pa.skeletonFilePathIdx = inPacket.decodeShort();
        pa.skeletonAniIdx = inPacket.decodeShort();
        pa.skeletonLoop = inPacket.decodeShort();
        pa.start = inPacket.decodePositionInt();
        pa.success = true;
        if (!chr.hasSkill(pa.skillID)) {
            return;
        }
        chr.addPsychicArea(pa.localPsychicAreaKey, pa);
        chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), pa.skillID, chr.getSkillLevel(pa.skillID), inPacket, new SkillUseInfo());
        chr.getField().broadcastPacket(FieldPacket.createPsychicArea(chr.getId(), pa));

        if (SkillChangeConstants.BPM_NO_COST_NOT_HITTING_MOBS && pa.skillID == Kinesis.ULTIMATE_BPM) {
            ((Kinesis) chr.getJobHandler()).lastBPMHit = Util.getCurrentTime();
        }
    }

    @Handler(op = InHeader.DO_ACTIVE_PSYCHIC_AREA)
    public static void handleDoActivePsychicArea(Char chr, InPacket inPacket) {
        int localKey = inPacket.decodeInt();
        short unk = inPacket.decodeShort(); // unk
        Position position = inPacket.decodePositionInt();
        PsychicArea pa = chr.getPsychicAreas().getOrDefault(localKey, null);
        if (pa == null) {
            return;
        }
        //pa.localPsychicAreaKey = localKey;
        pa.psychicAreaKey = localKey;
        chr.write(UserLocal.doActivePsychicArea(pa));

        if (pa.skillID == Kinesis.ULTIMATE_BPM) {
            chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), pa.skillID, chr.getSkillLevel(pa.skillID), inPacket, new SkillUseInfo());
        }
    }

    @Handler(op = InHeader.DEBUFF_PSYCHIC_AREA)
    public static void handleDebuffPsychicArea(Char chr, InPacket inPacket) {
        List<Mob> mobList = new ArrayList<>();

        int skillId = inPacket.decodeInt();
        int slv = inPacket.decodeShort();
        int localKey = inPacket.decodeInt();
        boolean isLeft = inPacket.decodeByte() != 0;
        Position position = inPacket.decodePositionInt();

        PsychicArea pa = chr.getPsychicAreas().getOrDefault(localKey, null);
        if (pa == null || !JobConstants.isKinesis(chr.getJob()) || chr.getSkillLevel(skillId) <= 0) {
            return;
        }

        short loopSize = inPacket.decodeShort();
        for (int i = 0; i < loopSize; i++) {
            int mobObjId = inPacket.decodeInt();

            Mob mob = (Mob) chr.getField().getLifeByObjectID(mobObjId);
            if (mob == null) {
                continue;
            }
            mobList.add(mob);
        }

        short unk = inPacket.decodeShort(); // not sure

        if (mobList.size() > 0) {
            ((Kinesis) chr.getJobHandler()).applyMindAreaDebuff(skillId, position, mobList);
        }
    }

    @Handler(op = InHeader.RELEASE_PSYCHIC_AREA)
    public static void handleReleasePsychicArea(Char chr, InPacket inPacket) {
        int localPsychicAreaKey = inPacket.decodeInt();
        chr.getField().broadcastPacket(UserPool.releasePsychicArea(chr, localPsychicAreaKey));
        chr.removePsychicArea(localPsychicAreaKey);
    }

    @Handler(op = InHeader.CREATE_PSYCHIC_LOCK)
    public static void handleCreatePsychicLock(Char chr, InPacket inPacket) {
        Field f = chr.getField();
        PsychicLock pl = new PsychicLock();
        pl.skillID = inPacket.decodeInt();
        pl.slv = inPacket.decodeShort();
        pl.action = inPacket.decodeInt();
        pl.actionSpeed = inPacket.decodeInt();
        int i = 1;
        while (inPacket.decodeByte() != 0) {
            PsychicLockBall plb = new PsychicLockBall();
            plb.localKey = inPacket.decodeInt();
            plb.psychicLockKey = inPacket.decodeInt();
            plb.psychicLockKey = i++;
            int mobID = inPacket.decodeInt();
            Life life = f.getLifeByObjectID(mobID);
            plb.mob = life == null ? null : (Mob) life;
            plb.stuffID = inPacket.decodeShort();
            plb.unk = inPacket.decodeInt();
            plb.usableCount = inPacket.decodeShort();
            plb.posRelID = inPacket.decodeByte();
            plb.start = inPacket.decodePositionInt();
            plb.rel = inPacket.decodePositionInt();
            pl.psychicLockBalls.add(plb);
        }
        if (!chr.hasSkill(pl.skillID)) {
            return;
        }
        chr.setPsychicLock(pl);
        chr.getField().broadcastPacket(UserPacket.createPsychicLock(chr.getId(), pl));
    }

    @Handler(op = InHeader.RESET_PATH_PSYCHIC_LOCK)
    public static void handleResetPathPsychicLock(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();
        int slv = inPacket.decodeShort();
        int action = inPacket.decodeInt();
        int actionSpeed = inPacket.decodeInt();
        boolean left = inPacket.decodeByte() != 0;

        Map<Integer, Integer> skillMap = new HashMap<>();
        int loopSize = inPacket.decodeInt();
        for (int i = 0; i < loopSize; i++) {
            int skillID2 = inPacket.decodeInt();
            int slv2 = inPacket.decodeInt();
            skillMap.put(skillID2, slv2);
        }

        Map<Integer, Integer> lockMap = new HashMap<>();
        int loopSize2 = inPacket.decodeInt();
        for (int i = 0; i < loopSize2; i++) {
            int id = inPacket.decodeInt();
            int mobId = inPacket.decodeInt(); // either mobObjId or 0
            lockMap.put(id, mobId);
        }

        if (skillID == Kinesis.ULTIMATE_PSYCHIC_SHOT && JobConstants.isKinesis(chr.getJob())) {
            ((Kinesis) chr.getJobHandler()).kinesisPPAttack(skillID, chr.getSkillLevel(skillID), SkillData.getSkillInfoById(skillID));
        }

        chr.getField().broadcastPacket(UserPool.recreatePathPsychicLock(chr, skillID, slv, action, actionSpeed, left, skillMap, lockMap), chr);
    }

    @Handler(op = InHeader.RELEASE_PSYCHIC_LOCK)
    public static void handleReleasePsychicLock(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();
        int slv = inPacket.decodeInt();
        if (!chr.hasSkill(skillID)) {
            return;
        }
        int id = inPacket.decodeInt();
        int mobID = inPacket.decodeInt();
        int stuffId = inPacket.decodeInt();
        Position position = inPacket.decodePositionInt();

        if (mobID != 0) {
            List<Integer> l = new ArrayList<>();
            l.add(mobID);
            chr.getField().broadcastPacket(UserPool.releasePsychicLockMob(chr, l));
        } else {
            chr.getField().broadcastPacket(UserPool.releasePsychicLock(chr, id));
        }
        chr.setPsychicLock(null);
    }

    @Handler(op = InHeader.PSYCHIC_OVER_REQUEST)
    public static void handlePsychicOverRequest(Char chr, InPacket inPacket) {
        // No Packet Data

        if (JobConstants.isKinesis(chr.getJob())) {
            ((Kinesis) chr.getJobHandler()).psychicOverRequest();
        }
    }


    @Handler(op = InHeader.REQUEST_ARROW_PLATTER_OBJ)
    public static void handleRequestArrowPlatterObj(Char chr, InPacket inPacket) {
        boolean flip = inPacket.decodeByte() != 0;
        Position position = inPacket.decodePositionInt(); // ignoring this, we just take the char's info we know
        int skillID = BowMaster.ARROW_PLATTER;
        Skill skill = chr.getSkill(skillID);
        if (skill != null && skill.getCurrentLevel() > 0) {
            Field field = chr.getField();
            Set<FieldAttackObj> currentFaos = field.getFieldAttackObjects();
            // remove the old arrow platter
            currentFaos.stream()
                    .filter(fao -> fao.getOwnerID() == chr.getId() && fao.getTemplateId() == 1)
                    .findAny().ifPresent(field::removeLife);
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            int slv = skill.getCurrentLevel();
            FieldAttackObj fao = new FieldAttackObj(1, chr.getId(), chr.getPosition().deepCopy(), flip);
            field.spawnLife(fao, chr);
            field.broadcastPacket(FieldAttackObjPool.objCreate(fao), chr);
            ScheduledFuture sf = EventManager.addEvent(() -> field.removeLife(fao.getObjectId(), true),
                    si.getValue(SkillStat.u, slv), TimeUnit.SECONDS);
            field.addLifeSchedule(fao, sf);
            field.broadcastPacket(FieldAttackObjPool.setAttack(fao.getObjectId(), 0));
            chr.setSkillCooldown(skillID, slv);
        }
        chr.dispose();
    }


    @Handler(op = InHeader.USER_FLAME_ORB_REQUEST)
    public static void handleUserFlameOrbRequest(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();
        int slv = inPacket.decodeByte();
        short dir = inPacket.decodeShort();
        if (!JobConstants.isBlazeWizard(chr.getJob()) || !chr.hasSkill(skillID)) {
            return;
        }

        ((BlazeWizard) chr.getJobHandler()).createOrbitalFlameForceAtom(skillID, dir);
    }

    @Handler(op = InHeader.ZERO_TAG)
    public static void handleZeroTag(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        int newTF = inPacket.decodeInt();
        int oldTF = inPacket.decodeInt();
        if (JobConstants.isZero(chr.getJob())) {
            ((Zero) chr.getJobHandler()).zeroTag();
        }
    }

    @Handler(op = InHeader.ZERO_LAST_ASSIST_STATE)
    public static void handleZeroLastAssistState(Char chr, InPacket inPacket) {
        if (JobConstants.isZero(chr.getJob())) {
            chr.getField().broadcastPacket(UserRemote.zeroLastAssistState(chr), chr);
        }
    }

    @Handler(op = InHeader.USER_ZERO_SKILL_COOLTIME_REQUEST)
    public static void handleZeroSkillCooltimeRequest(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        int slv = chr.getSkillLevel(skillID);
        if (slv > 0) {
            chr.addSkillCoolTime(skillID, si.getValue(SkillStat.cooltime, slv) * 1000);
        }
    }

    @Handler(op = InHeader.REQUEST_SET_BLESS_OF_DARKNESS)
    public static void handleRequestSetBlessOfDarkness(Client c, InPacket inPacket) {

    }

    @Handler(op = InHeader.RW_MULTI_CHARGE_CANCEL_REQUEST)
    public static void handleRWMultiChargeCancelRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        byte size = inPacket.decodeByte();

        List<Integer> chargeSkills = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            int skillid = inPacket.decodeInt();
            if (skillid > 0) {
                chargeSkills.add(skillid);
            }
        }

        field.broadcastPacket(UserRemote.rwMultiChargeCancelRequest(chr, chargeSkills), chr);
    }

    @Handler(op = InHeader.RELEASE_RW_GRAB)
    public static void handleReleaseRWGrab(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int mobObjId = inPacket.decodeInt();

        chr.getField().broadcastPacket(UserRemote.releaseRWGrab(chr, skillId, mobObjId), chr);
    }

    @Handler(op = InHeader.FOX_MAN_ACTION_SET_USE_REQUEST)
    public static void handleFoxManActionSetUseRequest(Char chr, InPacket inPacket) {
        if (!JobConstants.isKanna(chr.getJob()) || !chr.hasSkill(Kanna.HAKU_REBORN)) {
            return;
        }
        inPacket.decodeInt(); // tick
        int foxManActionVal = inPacket.decodeInt(); //bSkill Number
        FoxManActionType fmActionType = FoxManActionType.getByVal(foxManActionVal);
        switch (fmActionType) {
            case HakuGift:
                ((Kanna) chr.getJobHandler()).hakuHakusGift();
                break;
            case FoxFire:
                ((Kanna) chr.getJobHandler()).hakuFoxFire();
                break;
            case HakuBlessing:
                ((Kanna) chr.getJobHandler()).hakuHakuBlessing();
                break;
            case BreathOfTheUnseen:
                ((Kanna) chr.getJobHandler()).hakuBreathUnseen();
                break;
        }
        chr.write(FoxManPacket.foxManShowExclResult(chr));
    }

    @Handler(op = InHeader.USER_CREATE_HOLIDOM_REQUEST)
    public static void handleUserCreateHolidomRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        inPacket.decodeByte(); //unk
        var objectId = inPacket.decodeInt();
        int skillID = inPacket.decodeInt();
        Position position = inPacket.decodePositionInt();

        var life = field.getLifeByObjectID(objectId);
        if (!(life instanceof AffectedArea)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to interact with AffectedArea (%d) whilst there isn't any on the field.", chr.getId(), skillID));
            return;
        }

        AffectedArea aa = (AffectedArea) life;

        switch (skillID) {
            case Bishop.HOLY_FOUNTAIN:
                chr.heal((int) (chr.getMaxHP() / ((double) 100 / 40)));
                break;

            case Cannoneer.POOLMAKER_AA:
                Cannoneer.openPoolmakerChest(chr, aa);
                break;

            case Lara.MANIFESTATION_WIND_SWING_ACTIVE_1:
                var tsm = chr.getTemporaryStatManager();
                var o = new Option(1, Lara.WIND_SWING_FLY_SKILLID, 4500);
                tsm.putCharacterStatValue(CharacterTemporaryStat.NewFlying, o);
                tsm.sendSetStatPacket();
                break;
        }
    }

    @Handler(op = InHeader.REQUEST_DEC_COMBO)
    public static void handleRequestDecCombo(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (JobConstants.isAran(chr.getJob())) {
            Aran aranJobHandler = ((Aran) chr.getJobHandler());
            aranJobHandler.setComboAndBroadcast(aranJobHandler.getCombo() - 10);
        }
    }

    @Handler(op = InHeader.REQUEST_SET_HP_BASE_DAMAGE)
    public static void handleRequestSetHpBaseDamage(Char chr, InPacket inPacket) {
        if (JobConstants.isDemonAvenger(chr.getJob())) {
            ((DemonAvenger) chr.getJobHandler()).sendHpUpdate();
        }
    }

    @Handler(op = InHeader.USER_REQUEST_FLYING_SWORD_START)
    public static void handleUserRequestFlyingSwordStart(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int targetCount = inPacket.decodeInt();

        int maxCount = chr.hasSkill(Kaiser.TEMPEST_BLADES_FIVE) ? 5 : 3;
        int[] targets = new int[maxCount];
        for (int i = 0; i < targetCount; i++) {
            targets[i] = inPacket.decodeInt();
        }

        if (JobConstants.isKaiser(chr.getJob())) {
            ((Kaiser) chr.getJobHandler()).createFlyingSwordForceAtom(skillId, Ints.asList(targets));
        }
    }


    @Handler(op = InHeader.USER_REQUEST_STEAL_SKILL_LIST)
    public static void handleUserRequestStealSkillList(Client c, InPacket inPacket) {
        // Sent when selecting a target whilst in 'Skill Swipe' mode.
        int targetChrID = inPacket.decodeInt();

        Char chr = c.getChr();
        Char targetChr = chr.getField().getCharByID(targetChrID);
        Set<Skill> targetSkillsList = targetChr.getSkills();

        chr.write(UserLocal.resultStealSkillList(targetSkillsList, 4, targetChrID, targetChr.getJob()));
        chr.dispose();
    }

    @Handler(op = InHeader.USER_REQUEST_STEAL_SKILL_MEMORY)
    public static void handleUserRequestStealSkillMemory(Char chr, InPacket inPacket) {
        // Sent when selecting a skill to steal.
        int stolenSkillId = inPacket.decodeInt();
        int targetChrID = inPacket.decodeInt();
        boolean add = inPacket.decodeByte() == 0;   // 0 = add  |  1 = remove

        Char targetChr = chr.getField().getCharByID(targetChrID);

        Skill stolenSkill = SkillData.getSkillDeepCopyById(stolenSkillId);
        if (stolenSkill == null) {
            chr.dispose();
            return;
        }

        int stolenSkillMaxLv = stolenSkill.getMasterLevel();
        int stolenSkillCurLv = targetChr == null ? stolenSkillMaxLv : targetChr.getSkill(stolenSkillId).getCurrentLevel();

        if (add) {
            // Add Stolen Skill
            var stolenSkillInfo = StolenSkillData.getStolenSkillInfoBySkillId(stolenSkillId);


            // Null Check
            if (stolenSkillInfo == null) {
                chr.chatMessage(String.format("Unknown Stolen Skill (%d).", stolenSkillId));
                chr.dispose();
                return;
            }

            var tabPos = stolenSkillInfo.getTabPos();

            // Check if Player already has skill, if so compare skill levels
            var curStolenSkill = SkillStealManager.getStolenSkillBySkillId(chr, stolenSkillId);
            if (curStolenSkill != null) {
                if (curStolenSkill.getCurrentlv() >= stolenSkillCurLv) {
                    chr.chatMessage("You already have this stolen skill.");
                } else {
                    curStolenSkill.setCurrentlv(stolenSkillCurLv);
                    chr.write(UserLocal.changeStealMemoryResult(STEAL_SKILL, tabPos, curStolenSkill.getPosition(), curStolenSkill.getSkillId(), curStolenSkill.getCurrentlv(), stolenSkillMaxLv));
                }
                chr.dispose();
                return;
            }

            // Check if Player has enough space to steal the skill
            if (!SkillStealManager.hasEnoughSpace(chr, tabPos)) {
                chr.chatMessage("You do not have enough space.");
                chr.dispose();
                return;
            }

            // Extract First Empty Position, if -1. Means no Space
            var realPosition = SkillStealManager.getFirstEmptyPosition(chr, tabPos);
            if (realPosition == -1) {
                chr.chatMessage("You do not have enough space.");
                chr.dispose();
                return;
            }

            var adjusted = SkillStealManager.getAdjustedPositionByRealPosition(realPosition);
            if (adjusted == null) {
                chr.chatMessage("Could not continue with stealing skills due to an unknown error.");
                chr.dispose();
                return;
            }

            var adjustedTab = adjusted.getLeft();
            var adjustedPosition = adjusted.getRight();

            SkillStealManager.addStolenSkill(chr, stolenSkillId, stolenSkillCurLv, realPosition);
            chr.write(UserLocal.changeStealMemoryResult(STEAL_SKILL, adjustedTab, adjustedPosition, stolenSkillId, stolenSkillCurLv, stolenSkillMaxLv));
        } else {
            // Remove Stolen Skill

            var curStolenSkill = SkillStealManager.getStolenSkillBySkillId(chr, stolenSkillId);
            if (curStolenSkill == null) {
                chr.dispose();
                return;
            }

            SkillStealManager.removeStolenSkill(chr, curStolenSkill.getSkillId());
            var adjusted = SkillStealManager.getAdjustedPositionByRealPosition(curStolenSkill.getPosition());
            if (adjusted == null) {
                chr.dispose();
                return;
            }

            var adjustedTab = adjusted.getLeft();
            var adjustedPosition = adjusted.getRight();

            chr.write(UserLocal.changeStealMemoryResult(REMOVE_STEAL_MEMORY, adjustedTab, adjustedPosition, 0, 0, 0));
        }

        chr.dispose();
    }

    @Handler(op = InHeader.USER_REQUEST_SET_STEAL_SKILL_SLOT)
    public static void handleUserRequestSetStealSkillSlot(Char chr, InPacket inPacket) {
        int impeccableSkillId = inPacket.decodeInt();
        int stolenSkillId = inPacket.decodeInt();

        SkillStealManager.addChosenSkill(chr, stolenSkillId, impeccableSkillId);
        chr.write(UserLocal.resultSetStealSkill(true, impeccableSkillId, stolenSkillId));
        chr.dispose();
    }

    @Handler(op = InHeader.ENTER_OPEN_GATE_REQUEST)
    public static void handleEnterOpenGateRequest(Char chr, InPacket inPacket) {
        int chrId = inPacket.decodeInt();
        Position position = inPacket.decodePosition();
        byte gateId = inPacket.decodeByte();

        // Probably needs remote player position handling
        chr.dispose(); // Necessary as going through the portal will stuck you
    }

    @Handler(op = InHeader.USER_SET_DRESS_CHANGED_REQUEST)
    public static void handleUserSetDressChangedRequest(Char chr, InPacket inPacket) {
        boolean on = inPacket.decodeByte() != 0;
//        chr.write(UserLocal.setDressChanged(on, true)); // causes client to send this packet again
    }

    @Handler(op = InHeader.BEAST_TAMER_REGROUP_REQUEST)
    public static void handleBeastTamerRegroupRequest(Char chr, InPacket inPacket) {
        byte unk = inPacket.decodeByte();
        int skillId = inPacket.decodeInt();

        if (skillId == BeastTamer.REGROUP) {
            BeastTamer.beastTamerRegroup(chr);
        } else {
            // log.error(String.format("Unhandled Beast Tamer Request %d", skillId));
            // chr.chatMessage(String.format("Unhandled Beast Tamer Request %d", skillId));
        }
    }

    @Handler(op = InHeader.DEMONIC_BLAST_KEYDOWN_COST)
    public static void handleDemonicBlastKeydownCost(Char chr, InPacket inPacket) {
        var skillId = inPacket.decodeInt();
        var stage = inPacket.decodeInt();

        if (skillId == DemonAvenger.DEMONIC_BLAST_HOLDDOWN && JobConstants.isDemonAvenger(chr.getJob())) {
            ((DemonAvenger) chr.getJobHandler()).demonicBlastKeydownCost();
        }
    }

    @Handler(op = InHeader.REVENANT_FURY_UPDATE)
    public static void handleRevanantFuryUpdate(Char chr, InPacket inPacket) {
        var start = inPacket.decodeInt() == 1; // start
        var unk = inPacket.decodeInt();
        var tick = inPacket.decodeInt();
        var unk2 = inPacket.decodeInt();

        if (JobConstants.isDemonAvenger(chr.getJob()) && chr.getTemporaryStatManager().hasStat(CharacterTemporaryStat.Revenant)) {
            ((DemonAvenger) chr.getJobHandler()).updateRevenant();
        }
    }

    @Handler(op = InHeader.USER_JAGUAR_CHANGE_REQUEST)
    public static void handleUserJaguarChangeRequest(Char chr, InPacket inPacket) {
        final int questID = QuestConstants.WILD_HUNTER_JAGUAR_STORAGE_ID;
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getQuestById(questID);
        if (quest == null) {
            return;
        }
        int fromID = inPacket.decodeInt();
        int toID = inPacket.decodeInt();
        String value = quest.getProperty("" + (toID + 1));
        if (value != null) {
            WildHunterInfo whi = chr.getWildHunterInfo();
            whi.setIdx((byte) toID);
            whi.setRidingType((byte) toID);
            chr.write(WvsContext.wildHunterInfo(whi));
            // could make WildHunterInfo an entity for this
            Quest chosenQuest = qm.getQuestById(QuestConstants.WILD_HUNTER_JAGUAR_CHOSEN_ID);
            if (chosenQuest == null) {
                chosenQuest = QuestData.createQuestFromId(QuestConstants.WILD_HUNTER_JAGUAR_CHOSEN_ID);
                qm.addQuest(chosenQuest);
            }
            chosenQuest.setQrValue("" + toID);
            ((WildHunter) chr.getJobHandler()).updateJaguars();
        } else {
            chr.chatMessage("You do not have that jaguar.");
        }
    }

    @Handler(op = InHeader.XENON_CORE_OVERLOAD)
    public static void handleXenonCoreOverload(Char chr, InPacket inPacket) {
        ((Xenon) chr.getJobHandler()).coreOverloadManaConsumption();
    }

    @Handler(op = InHeader.LOADED_DICE_SELECTION_RESULT)
    public static void handleLoadedDiceSelectionResult(Char chr, InPacket inPacket) {
        int diceSelection = inPacket.decodeInt();
        if (chr.getQuestManager().getQuestById(GameConstants.LOADED_DICE_SELECTION) == null) {
            chr.getScriptManager().createQuestWithQRValue(GameConstants.LOADED_DICE_SELECTION, diceSelection + "");
        } else {
            chr.getScriptManager().setQRValue(GameConstants.LOADED_DICE_SELECTION, diceSelection + "");
        }
    }

    @Handler(ops = {InHeader.PEACEMAKER_EXPLOSION_CONTACT_COUNT, InHeader.PEACEMAKER_TRAVEL_CONTACT_COUNT})
    public static void handlePeacemakerContactCount(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int objId = inPacket.decodeInt();
        int unk1 = inPacket.decodeInt();
        Rect rect = inPacket.decodeIntRect();
        int contactCount = inPacket.decodeInt();
        int unk2 = inPacket.decodeInt();

        if (JobConstants.isBishop(chr.getJob())) {
            ((Bishop) chr.getJobHandler()).givePeacemakerBuffs(skillId, rect, contactCount);
        }
    }

    @Handler(op = InHeader.BULLET_BARRAGE_DURATION_EXTENSION_REQUEST)
    public static void handleBulletBarrageDurationExtensionRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();

        switch (skillId) {
            case Corsair.BULLET_BARRAGE:
                if (JobConstants.isCorsair(chr.getJob())) {
                    ((Corsair) chr.getJobHandler()).extendBulletBarrageDuration();
                }
                break;
        }
    }

    @Handler(op = InHeader.SEND_SUMMON_ATTACK_STATE_CHANGE)
    public static void handleSendSummonAttackStateChange(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        short job = chr.getJob();
        switch (skillId) {
            case DemonAvenger.DIMENSIONAL_SWORD_SUMMON:
                if (JobConstants.isDemonAvenger(job)) {
                    ((DemonAvenger) chr.getJobHandler()).changeDimensionalSword();
                }
                break;
            case AngelicBuster.MIGHTY_MASCOT:
                if (JobConstants.isAngelicBuster(job)) {
                    ((AngelicBuster) chr.getJobHandler()).doBubbleBreath();
                }
                break;
        }
    }

    @Handler(op = InHeader.GREATER_DARK_SERVANT_SWAP_REQUEST)
    public static void handleGreaterDarkServantSwapRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();

        if (!chr.hasSkill(skillId)) {
            return;
        }

        switch (skillId) {
            case NightWalker.GREATER_DARK_SERVANT:
                ((NightWalker) chr.getJobHandler()).swapWithServant();
                break;
        }
    }

    @Handler(op = InHeader.INHUMAN_SPEED_FORCE_ATOM_REQUEST)
    public static void handleInhumanSpeedForceAtomRequest(Char chr, InPacket inPacket) {
        int mobId = inPacket.decodeInt();
        int time = inPacket.decodeInt(); // tick

        if (JobConstants.isBowMaster(chr.getJob())) {
            ((BowMaster) chr.getJobHandler()).createInhumanSpeedForceAtom(mobId);
        }
    }

    @Handler(op = InHeader.CRYSTAL_SKILL_REQUEST)
    public static void handleCrystalSkillRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();

        if (JobConstants.isIllium(chr.getJob()) && ((Illium) chr.getJobHandler()).getCrystal() != null) {
            ((Illium) chr.getJobHandler()).handleCrystalSkillRequest(skillId);
        }
    }

    @Handler(op = InHeader.ILLIUM_RESONANCE_LINK)
    public static void handleIlliumResonanceLink(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int skillID = inPacket.decodeInt();
        if (skillID != Illium.RESONANCE) {
            return;
        }
        int unk = inPacket.decodeInt();
        int unk2 = inPacket.decodeInt();
        int mobLoop = inPacket.decodeInt();
        List<Mob> mobs = new ArrayList<>();
        for (int i = 0; i < mobLoop; i++) {
            int mobID = inPacket.decodeInt();
            Mob mob = (Mob) field.getLifeByObjectID(mobID);
            if (mob != null) {
                mobs.add(mob);
            }
        }
        int chrLoop = inPacket.decodeInt();
        List<Char> chrs = new ArrayList<>();
        for (int i = 0; i < chrLoop; i++) {
            // is in party check, is not null check
            int chrId = inPacket.decodeInt();
            Char pChr = field.getCharByID(chrId);
            if (pChr != null && chr.isInAPartyWith(pChr)) {
                chrs.add(pChr);
            }
        }
        if (JobConstants.isIllium(chr.getJob())) {
            ((Illium) chr.getJobHandler()).giveResonanceBenefits(mobs, chrs);
        }
    }

    @Handler(op = InHeader.SPOTLIGHT_STACK_REQUEST)
    public static void handleSpotlightStackRequest(Char chr, InPacket inPacket) {
        boolean giveBuff = inPacket.decodeByte() != 0; // remove if 0;
        int stackAmount = inPacket.decodeInt();

        if (JobConstants.isAngelicBuster(chr.getJob()) && chr.hasSkill(AngelicBuster.SUPER_STAR_SPOTLIGHT)) {
            ((AngelicBuster) chr.getJobHandler()).giveSpotlightBuff(giveBuff, stackAmount);
        }
    }

    @Handler(op = InHeader.USER_CREATE_LUCK_OF_THE_DRAW)
    public static void handleUserCreateLuckOfTheDraw(Char chr, InPacket inPacket) {
        if (JobConstants.isPhantom(chr.getJob()) && chr.hasSkill(Phantom.LUCK_OF_THE_DRAW)) {
            ((Phantom) chr.getJobHandler()).createLuckOfTheDrawForceAtom();
        }
    }

    @Handler(op = InHeader.USER_KEY_DOWN_STEP_REQUEST)
    public static void handleUserKeyDownStepRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int keydownDurationMS = inPacket.decodeInt();

        if (keydownDurationMS <= 0) {
            return;
        }

        if (JobConstants.isPaladin(chr.getJob()) && skillId == Paladin.GRAND_GUARDIAN && chr.hasSkill(Paladin.GRAND_GUARDIAN)) {
            ((Paladin) chr.getJobHandler()).increaseGrandGuardianState();
        } else if (JobConstants.isBlaster(chr.getJob()) && skillId == Blaster.HYPER_MAGNUM_PUNCH && chr.hasSkill(Blaster.HYPER_MAGNUM_PUNCH)) {
            ((Blaster) chr.getJobHandler()).increaseHyperMagnumPunch(keydownDurationMS);
        }
    }

    @Handler(op = InHeader.USER_UPDATE_DEBUFF_OBJ)
    public static void handleUserDebuffObjUpdate(Char chr, InPacket inPacket){
        int id = inPacket.decodeInt();
        DebuffObjectType debuffObjectType = DebuffObjectType.getByVal(inPacket.decodeInt());
        switch (debuffObjectType){
            case SleepGas:
                MobSkillInfo mobskillInfo = SkillData.getMobSkillInfoByIdAndLevel(182, 1);
                TemporaryStatManager tsm = chr.getTemporaryStatManager();
                Option o = new Option(182);
                o.slv = 1;
                o.tOption = 5;
                o.nOption = 1;
                tsm.putCharacterStatValueFromMobSkill(GiveMeHeal.getAffectedCTS(), o);
                tsm.sendSetStatPacket();
                break;
        }
    }

    @Handler(op = InHeader.USER_UPDATE_LAPIDIFICATION)
    public static void handleUserLapidificationUpdate(Char chr, InPacket inPacket){
        if (chr.isDead()) {
            chr.getTemporaryStatManager().removeStat(CharacterTemporaryStat.Lapidification);
            return;
        }
          int progress = inPacket.decodeInt();
          if(progress == 0){
              chr.getTemporaryStatManager().removeStat(CharacterTemporaryStat.Lapidification, false);
          }
    }

    @Handler(op = InHeader.KEY_DOWN_SKILL_COST)
    public static void handleKeyDownSkillCost(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();

        chr.getJobHandler().handleKeyDownSkillCost(skillId);
    }

    @Handler(ops = {InHeader.BEAST_FORM_WING_OFF, InHeader.SKILL_COMMAND_LOCK_ARK})
    public static void handleBeastFormWingOff(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID_2; // questId 1544
        Quest quest = chr.getQuestManager().getOrCreateQuestById(questId);
        var exVariable = "";
        switch (skillId) {
            case WindArcher.ALBATROSS:
                // alba=
                exVariable = "alba";
                break;
            case Mechanic.HOMING_BEACON:
            case Mechanic.ADV_HOMING_BEACON:
                // 35101002=
                exVariable = "35101002";
                break;
            case WildHunter.FELINE_BERSERK:
                // wing=
                exVariable = "wing";
                break;
            case Ark.SPELL_BULLETS:
            case Ark.VENGEFUL_HATE:
                // <skillId>=
                exVariable = String.format("%d", skillId);
                break;

            default:
                exVariable = String.format("%d", skillId);
                break;
        }

        if (exVariable.length() > 0) {
            if (!quest.hasProperty(exVariable)) {
                quest.setProperty(exVariable, 1);
            } else {
                quest.setQrValue("");
                quest.getProperties().clear();
            }
        }

        if (quest != null) {
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
            chr.showSkillOnOffEffect();
        }
    }

    @Handler(op = InHeader.SKILL_COMMAND_LOCK_ARAN)
    public static void handleSkillCommandLockAran(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID;
        Quest quest = chr.getQuestManager().getQuestById(questId);
        int lockId = -1;
        String pre = "";

        if (JobConstants.isAran(chr.getJob())) {
            switch (skillId) {
                case Aran.COMBAT_STEP:
                    lockId = 0;
                    break;
                case Aran.SMASH_WAVE:
                    lockId = 1;
                    break;
                case Aran.FINAL_CHARGE:
                    lockId = 2;
                    break;
                case Aran.FINAL_TOSS:
                    lockId = 3;
                    break;
                case Aran.ROLLING_SPIN:
                    lockId = 4;
                    break;
                case Aran.JUDGEMENT_DRAW:
                    lockId = 5;
                    break;
                case Aran.GATHERING_HOOK:
                    lockId = 6;
                    break;
                case Aran.FINAL_BLOW:
                    lockId = 7;
                    break;
                case Aran.FINISHER_STORM_OF_FEAR:
                    lockId = 8;
                    break;
                case Aran.FINISHER_HUNTER_PREY:
                    lockId = 9;
                    break;
                case Aran.MAHAS_CARNAGE:
                    lockId = 10;
                    break;
            }
        } else if (JobConstants.isDemon(chr.getJob())) {
            pre = "ds";
            switch (skillId) {
                case DemonSlayer.DARK_WINDS:
                    lockId = 0;
                    break;
            }
        } else if (JobConstants.isAdventurerPirate(chr.getJob())) {
            switch (skillId) {
                // TODO: Sniff pre
                case Pirate.DASH:
                    lockId = 0;
                    break;
            }
        }
        if (lockId < 0) {
            chr.chatMessage(String.format("Unhandled Skill Lock SkillID: %d", skillId));
            return;
        }
        if (quest == null) {
            chr.getScriptManager().createQuestWithQRValue(questId, String.format("%s%d=1", pre, lockId));
        } else {
            if (quest.getProperty(String.format("%s%d", pre, lockId)) == null) { // doesn't have the skill in qrValue yet
                quest.setProperty(String.format("%s%d", pre, lockId), "1");
            } else {
                quest.setProperty(String.format("%s%d", pre, lockId), quest.getIntProperty(String.format("%s%d", pre, lockId)) == 1 ? "0" : "1");
            }
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        }

        chr.dispose();
    }

    @Handler(op = InHeader.USER_SKILL_KEYDOWN_CHARGE_REQUEST)
    public static void handleUserSkillKeydownChargeRequest(Char chr, InPacket inPacket) {
        boolean charging = inPacket.decodeByte() != 0;

        if (JobConstants.isXenon(chr.getJob()) && chr.hasSkill(Xenon.OMEGA_BLASTER)) {
            if (charging) {
                // Done by the TSM
            } else {
                ((Xenon) chr.getJobHandler()).useOmegaBlasterAttack();
            }
        }
    }

    @Handler(op = InHeader.USER_UPDATE_PARTY_BUFF_AREA)
    public static void handleUserUpdatePartyBuffArea(Char chr, InPacket inPacket) {
        if (JobConstants.isBishop(chr.getJob())) {
            ((Bishop) chr.getJobHandler()).giveBenedictionBuff();
        }
    }

    @Handler(op = InHeader.DIVINE_ECHO_EXPIRE_REQUEST)
    public static void handleDivineEchoExpireRequest(Char chr, InPacket inPacket) {
        Paladin.removeDivineEchoLinkedBuffs(chr);
    }

    @Handler(op = InHeader.DEMON_BLOOD_SPILL_REQUEST)
    public static void handleDemonBloodSpillRequest(Char chr, InPacket inPacket) {
        if (JobConstants.isDemonAvenger(chr.getJob())) {
            ((DemonAvenger) chr.getJobHandler()).giveDemonFrenzy();
        }
    }

    @Handler(op = InHeader.STACK_OVER_TIME_SKILL_INCREASE_REQUEST)
    public static void handleStackOverTimeSkillIncreaseRequest(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();

        var jobId = chr.getJob();
        if (chr.getJobHandler() == null) {
            return;
        }
        switch (skillID) {
            case Pathfinder.CARDINAL_TORRENT:
            case Pathfinder.CARDINAL_TORRENT_ADVANCED:
                if (JobConstants.isPathFinder(jobId)) {
                    ((Pathfinder) chr.getJobHandler()).incrementSwiftStrikeCharge(); // db?
                }
                break;

            case BattleMage.ALTAR_OF_ANNIHILATION:
                if (JobConstants.isBattleMage(jobId)) {
                    ((BattleMage) chr.getJobHandler()).incrementAltarAnnihilationCount();
                }
                break;

            case Cannoneer.BIG_HUGE_GIGANTIC_ROCKET:
                if (JobConstants.isCannonShooter(jobId) && chr.getJobHandler() instanceof Cannoneer) {
                    ((Cannoneer) chr.getJobHandler()).increaseCannonOfMassDestruction();
                }
                break;

            case Illium.CRYSTALLINE_SPIRIT:
                if (JobConstants.isIllium(jobId)) {
                    ((Illium) chr.getJobHandler()).increaseCrystallineSpirit();
                }
                break;

            case Buccaneer.SERPENT_VORTEX:
                if (JobConstants.isBuccaneer(jobId)) {
                    ((Buccaneer) chr.getJobHandler()).increaseSerpentVortex();
                }
                break;

            case Paladin.MIGHTY_MJOLNIR:
                if (JobConstants.isPaladin(jobId)) {
                    ((Paladin) chr.getJobHandler()).increaseMightyMjolnir();
                }
                break;

            case Bishop.DIVINE_PUNIHSMENT:
                if (JobConstants.isBishop(jobId)) {
                    ((Bishop) chr.getJobHandler()).increaseDivinePunishment();
                }
                break;
        }
    }

    @Handler(op = InHeader.AURA_SKILL_UPDATE_REQUEST)
    public static void handleBuffIncStackRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        int auraSize = inPacket.decodeInt();
        for (int i = 0; i < auraSize; i++) {
            inPacket.decodeInt();
            int skillId = inPacket.decodeInt();
            int slv = inPacket.decodeInt();
            int auraOwnerChrId = inPacket.decodeInt();
            inPacket.decodeInt();
            inPacket.decodeInt();


            if (JobConstants.isAran(chr.getJob()) && skillId == Aran.BLIZZARD_TEMPEST_MOB) {
                ((Aran) chr.getJobHandler()).applyDireWolfCurse();

            } else {
                SkillInfo si = SkillData.getSkillInfoById(skillId);
                var isAuraOwner = chr.getId() == auraOwnerChrId;
                if (isAuraOwner) {
                    if (chr.getParty() != null) {
                        Rect auraRect = chr.getRectAround(si.getFirstRect());
                        var partyChrs = chr.getParty().getPartyMembersInSameField(chr);
                        for (var partyChr : partyChrs) {
                            if (auraRect.hasPositionInside(partyChr.getPosition())) {
                                if (!partyChr.getTemporaryStatManager().hasStatBySkillId(skillId)) {
                                    chr.getJobHandler().handleSkill(chr, partyChr.getTemporaryStatManager(), skillId, slv, null, null);
                                }
                            } else if (partyChr.getTemporaryStatManager().hasStatBySkillId(skillId)) {
                                // Remove if chr has aura and is not in Rect
                                partyChr.getTemporaryStatManager().removeStatsBySkill(skillId);
                            }
                        }
                    }
                } else {
                    var auraOwner = field.getCharByID(auraOwnerChrId);
                    if (auraOwner == null) {
                        // Owner is in another field or offline -> Remove aura
                        tsm.removeStatsBySkill(skillId);
                        continue;
                    }

                    if (chr.getParty() == null || !chr.getParty().hasPartyMember(auraOwnerChrId)) {
                        // Owner is not in the party -> Remove aura
                        tsm.removeStatsBySkill(skillId);
                        continue;
                    }

                    if (!(auraOwner.getRectAround(si.getFirstRect()).hasPositionInside(chr.getPosition()))) {
                        // Chr is not within range of the Owner Aura
                        tsm.removeStatsBySkill(skillId);
                        continue;
                    }

                    if (!auraOwner.getTemporaryStatManager().hasStatBySkillId(skillId)) {
                        tsm.removeStatsBySkill(skillId);
                        continue;
                    }
                }

                if (JobConstants.isBattleMage(chr.getJob()) && isAuraOwner) {
                    ((BattleMage) chr.getJobHandler()).additionalAuraEffects(skillId);
                }
                if (JobConstants.isIceLightning(chr.getJob()) && isAuraOwner) {
                    ((IceLightning) chr.getJobHandler()).doIceAura();
                }
            }
        }
    }

    @Handler(op = InHeader.MOD_SPECTRA_ENERGY)
    public static void handleModSpectraEnergy(Char chr, InPacket inPacket) {
        int spectra = inPacket.decodeInt();
        if (JobConstants.isArk(chr.getJob())) {
            ((Ark) chr.getJobHandler()).modifySpectraEnergy();
        }
    }

    @Handler(op = InHeader.INCREASE_SKILL_STACK_REQUEST)
    public static void handleIncreaseSkillStackRequest(Char chr, InPacket inPacket) {
        int stack = inPacket.decodeInt();
        int skillID = inPacket.decodeInt();

        if (chr.hasSkill(skillID)) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            Option o1 = new Option();

            switch (skillID) {
                case Job.SOLUS_ARK_LINK:
                case 150010241:
                    if (skillID != Job.SOLUS_ARK_LINK) {
                        skillID = SkillConstants.getLinkedSkillOfOriginal(skillID);
                    }
                    SkillInfo si = SkillData.getSkillInfoById(skillID);

                    var linkedSkill = LinkSkillsModule.getLinkSkillByLinkSkillId(chr.getAccount(), skillID);

                    if (linkedSkill == null) {
                        return;
                    }

                    int slv = linkedSkill.getLevel();
                    //int slv = chr.getAccount().getLinkSkillByLinkSkillId(skillID).getLevel(); // No Linked to Chr check
                    if (slv <= 0) {
                        return;
                    }
                    int curStack = tsm.hasStat(CharacterTemporaryStat.Solus) ? tsm.getOption(CharacterTemporaryStat.Solus).nOption : 0;
                    int diff = stack - curStack;
                    if (diff <= 1 && diff >= -1 && stack <= 5 && stack >= 0) {
                        int tOpt = si.getValue(time, slv) + 1;
                        o.nOption = stack;
                        o.rOption = skillID;
                        o.tOption = tOpt;
                        tsm.putCharacterStatValue(CharacterTemporaryStat.Solus, o);

                        o1.nOption = si.getValue(SkillStat.q, slv) + (stack * si.getValue(SkillStat.y, slv));
                        o1.rOption = skillID;
                        o1.tOption = tOpt;
                        tsm.putCharacterStatValue(CharacterTemporaryStat.IndieDamR, o1);
                        tsm.sendSetStatPacket();
                    }
                    break;
            }
        }
    }

    @Handler(op = InHeader.TIDE_OF_BATTLE_INCREASE_STACK_REQUEST)
    public static void handleTideOfBattleIncreaseStackRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick

        int skillID = 150000017; // Tide of Battle  origin
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        int slv = LinkSkillsModule.getLinkSkillByLinkSkillId(chr.getAccount(), Job.TIDE_OF_BATTLE).getLevel();
        //int slv = chr.getAccount().getLinkSkillByLinkSkillId(Job.TIDE_OF_BATTLE).getLevel(); // No Linked to Chr check
        if (slv <= 0) {
            return;
        }

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Option o1 = new Option();

        int stack = 1;
        if (tsm.hasStat(CharacterTemporaryStat.TideOfBattle)) {
            stack = tsm.getOption(CharacterTemporaryStat.TideOfBattle).nOption;
            if (stack < si.getValue(SkillStat.x, slv)) {
                stack++;
            }
        }

        int tOpt = si.getValue(time, slv);
        o.nOption = stack;
        o.rOption = skillID;
        o.tOption = tOpt;
        tsm.putCharacterStatValue(CharacterTemporaryStat.TideOfBattle, o);

        o1.nOption = stack * si.getValue(SkillStat.y, slv);
        o1.rOption = skillID;
        o1.tOption = tOpt;
        tsm.putCharacterStatValue(CharacterTemporaryStat.IndieDamR, o1);
        tsm.sendSetStatPacket();
    }

    @Handler(op = InHeader.USER_LASER_INFO_FOR_REMOTE)
    public static void handleUserLaserInfoForRemote(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int direction = inPacket.decodeInt(); // direction
        int slv = inPacket.decodeInt(); // slv

        field.broadcastPacket(UserRemote.laserInfoForRemote(chr, direction, slv), chr);
    }

    @Handler(op = InHeader.GUIDE_FORCE_ATOM_FOR_REMOTE) // Used by Illium's Javelin Atoms
    public static void handleGuideForceAtomForRemote(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        var gfai = new GuideForceAtomInfo();
        gfai.chrId = chr.getId();
        gfai.type = inPacket.decodeInt();
        gfai.faKey = inPacket.decodeInt();
        gfai.interactionObjId = inPacket.decodeInt();
        gfai.count = 1;

        gfai.rect = new Rect();
        switch (gfai.type) {
            case 1:

                break;
            case 2:
                gfai.count = inPacket.decodeInt();
                gfai.flip = inPacket.decodeByte() != 0;
                break;

            case 3:
                gfai.path1 = inPacket.decodeInt();
                gfai.path2 = inPacket.decodeInt();
                break;

            default:
                gfai.rect = inPacket.decodeShortRect();
        }

        field.broadcastPacket(FieldPacket.guideForceAtom(gfai), chr);
    }

    @Handler(op = InHeader.CLIENT_SYNC_COOLTIME_REQUEST)
    public static void handleClientSyncCooltimeRequest(Char chr, InPacket inPacket) {
        int loopSize = inPacket.decodeInt();

        Map<Integer, Integer> cooltimeMap = new HashMap<>();
        for (int i = 0; i < loopSize; i++) {
            int skillID = inPacket.decodeInt();
            int unk = inPacket.decodeInt(); // Remaining time  Client side

            if (unk <= 0 || chr.getRemainingCoolTime(skillID) <= 0) {
                cooltimeMap.put(skillID, 0);
            }
        }

        if (cooltimeMap.size() > 0) {
            chr.write(UserLocal.skillCooltimeSetM(cooltimeMap));
        }
    }

    @Handler(op = InHeader.USER_REQUEST_SET_OFF_TRINITY)
    public static void handleUserRequestSetOffTrinity(Char chr, InPacket inPacket) {
        if (JobConstants.isAngelicBuster(chr.getJob())) {
            ((AngelicBuster) chr.getJobHandler()).setTrinityOff();
        }
    }

    @Handler(op = InHeader.BULLET_BLAST_RELOAD_REQUEST)
    public static void handleBulletBlastReloadRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        byte unk = inPacket.decodeByte();

        if (skillId == Blaster.BULLET_BLAST && JobConstants.isBlaster(chr.getJob()) && chr.hasSkill(Blaster.BULLET_BLAST)) {
            ((Blaster) chr.getJobHandler()).bulletBlastReloadRequest(skillId);
        }
    }

    @Handler(op = InHeader.V_BLESSING_UPDATE_REQUEST)
    public static void handleVBlessingUpdateRequest(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int skillId2 = inPacket.decodeInt();

        switch (skillId) {
            case DarkKnight.DARKNESS_AURA:
                if (JobConstants.isDarkKnight(chr.getJob())) {
                    ((DarkKnight) chr.getJobHandler()).increaseDarknessAuraProtectiveShield();
                }
                break;

            case BattleMage.ABYSSAL_LIGHTNING_PORTAL:
                if (JobConstants.isBattleMage(chr.getJob())) {
                    var size = inPacket.decodeInt();
                    for (int i = 0; i < size; i++) {
                        var pos = inPacket.decodePositionInt();
                        ((BattleMage) chr.getJobHandler()).createAbyssalPortal(pos);
                    }
                }
                break;

            case Illium.CRYSTAL_GATE_PORTAL:// Illium
                var pos = inPacket.decodePositionInt(); // chr Pos
                if (JobConstants.isIllium(chr.getJob())) {
                    ((Illium) chr.getJobHandler()).giveCrystalGateBuff(pos);
                }
                break;

            case HoYoung.MASTER_ELIXIR:
                if (JobConstants.isHoYoung(chr.getJob())) {
                    ((HoYoung) chr.getJobHandler()).giveMasterElixirBenefit();
                }
                break;

            case Xenon.CORE_OVERLOAD_ATTACK:
                if (JobConstants.isXenon(chr.getJob())) {
                    ((Xenon) chr.getJobHandler()).doOverloadModeAttack();
                }
                break;

            default:
                chr.getJobHandler().updateBlessingVSkill(skillId);
                break;
        }
    }

    @Handler(op = InHeader.USER_DRAGON_LINK_REQUEST)
    public static void handleUserDragonLinkRequest(Char chr, InPacket inPacket) {
        // No Packet Info
        if (JobConstants.isKaiser(chr.getJob())) {
            ((Kaiser) chr.getJobHandler()).activateDragonLink();
        }
    }

    @Handler(op = InHeader.XENON_CORE_INC_REQUEST)
    public static void handleXenonCoreIncRequest(Char chr, InPacket inPacket) {
        // No Packet Info
        if (JobConstants.isXenon(chr.getJob())) {
            ((Xenon) chr.getJobHandler()).incrementSupply();
        }
    }

    @Handler(op = InHeader.TRY_REGISTER_TELEPORT)
    public static void handleTryRegisterTeleport(Char chr, InPacket inPacket) {
        var skillId = inPacket.decodeInt();

        if (JobConstants.isPhantom(chr.getJob()) && skillId == Phantom.SHROUD_WALK) {

        }
    }

    @Handler(op = InHeader.JUPITER_THUNDER_CREATE_REQUEST)
    public static void handleJupiterThunderCreateRequest(Char chr, InPacket inPacket) {
        var skillId = inPacket.decodeInt();
        var unk1 = inPacket.decodeInt(); // 120
        var unk2 = inPacket.decodeInt(); // 1
        var unk3 = inPacket.decodeInt(); // 1

        Rect rect = inPacket.decodeIntRect();

        var slv = chr.getSkillLevel(skillId);
        if (slv <= 0 || chr.hasSkillOnCooldown(skillId)) {
            return;
        }
        var jupiterThunder = JupiterThunder.getByInfo(chr, skillId, slv, rect, unk1, unk2, unk3);

        chr.createJupiterThunder(jupiterThunder);
        chr.setSkillCooldown(skillId, slv);
    }

    @Handler(op = InHeader.JUPITER_THUNDER_REMOVE_REQUEST)
    public static void handleJupiterThunderRemoveRequest(Char chr, InPacket inPacket) {
        var objectId = inPacket.decodeInt();
        var size = inPacket.decodeInt();
        for (int i = 0; i < size; i++) {
            var shocksRemaining = inPacket.decodeInt();

            var jt = chr.getJupiterThunderById(objectId);
            if (jt != null && jt.getOwner().equals(chr)) {
                chr.removeJupiterThunder(objectId);
                chr.write(UserPacket.jupiterThunderRemoved(jt));

                if (JobConstants.isIceLightning(chr.getJob()) && jt.getSkillId() == IceLightning.JUPITER_THUNDER) {
                    ((IceLightning) chr.getJobHandler()).handleRemoveJupiterThunder(shocksRemaining);
                }
            }
        }
    }

    @Handler(op = InHeader.JUPITER_THUNDER_UPDATE_REQUEST)
    public static void handleJupiterThunderUpdateRequest(Char chr, InPacket inPacket) {
        var size = inPacket.decodeInt();
        for (int i = 0; i < size; i++) {
            var objectId = inPacket.decodeInt();

            var jt = chr.getJupiterThunderById(objectId);
            if (jt == null || !(jt.getOwner().equals(chr))) {
                return;
            }

            var jtui = new JupiterThunderUpdateInfo();

            var chrId = inPacket.decodeInt();
            var skillId = inPacket.decodeInt();
            jtui.objectId = objectId;
            jtui.unk2 = inPacket.decodeInt();
            jtui.curTime = inPacket.decodeInt();
            jtui.w = inPacket.decodeInt();
            jtui.y = inPacket.decodeInt();
            jtui.z = inPacket.decodeInt();

            chr.write(UserPacket.jupiterThunderUpdateResult(jt, jtui));
        }
    }

    @Handler(op = InHeader.USER_SKILL_INFO)
    public static void handleUserSkillInfoRequest(Char chr, InPacket inPacket) {
        // UserSkill Decoding
        var sui = new SkillUseInfo();
        new UserSkillUseInfo(sui).decode(inPacket);

        chr.getJobHandler().handleUserSkillInfo(sui);
    }

    @Handler(op = InHeader.KAIN_DEATHBLESSING_REQUEST)
    public static void handleKainDeathBlessingRequest(Char chr, InPacket inPacket) {
        List<Integer> mobList = new ArrayList<>();
        var size = inPacket.decodeInt();

        for (int i = 0; i < size; i++) {
            mobList.add(inPacket.decodeInt());
        }

        if (JobConstants.isKain(chr.getJob())) {
            ((Kain) chr.getJobHandler()).applyDeathBlessing(mobList);
        }
    }

    @Handler(op = InHeader.KAIN_STACK_OVER_TIME_SKILL_INCREASE_REQUEST)
    public static void handleKainStackOverTimeSkillIncreaseRequest(Char chr, InPacket inPacket) {
        var skillId = inPacket.decodeInt();

        if (!JobConstants.isKain(chr.getJob())) {
            return;
        }

        ((Kain) chr.getJobHandler()).increaseStackOverTimeSkill(skillId);
    }

    @Handler(op = InHeader.LARA_DRAGON_VEIN_READING_REQUEST)
    public static void handleLaraDragonVeinReadingRequest(Char chr, InPacket inPacket) {
        byte unk0 = inPacket.decodeByte();
        int veinIncrement = inPacket.decodeInt();
        byte veinType = inPacket.decodeByte();
        Position pos = inPacket.decodePositionInt();
        int unk = inPacket.decodeInt();

        if (JobConstants.isLara(chr.getJob())) {
            ((Lara) chr.getJobHandler()).createDragonVein(veinIncrement, veinType, pos, unk);
        }
    }

    @Handler(op = InHeader.LARA_STACK_OVER_TIME_SKILL_INCREASE_REQUEST)
    public static void handleLaraStackOverTimeSkillIncreaseRequest(Char chr, InPacket inPacket) {
        var skillId = inPacket.decodeInt();
        var curTime = inPacket.decodeInt();

        if (JobConstants.isLara(chr.getJob())) {
            ((Lara) chr.getJobHandler()).stackSkillManager(skillId);
        }
    }
}
