package net.swordie.ms.handlers.life;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.shootobject.ShootObject;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.flora.Illium;
import net.swordie.ms.client.jobs.legend.Luminous;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.jobs.resistance.WildHunter;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class SummonedHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.SUMMONED_MOVE)
    public static void handleSummonedMove(Char chr, InPacket inPacket) {
        // CVecCtrlSummoned::EndUpdateActive
        int summonID = inPacket.decodeInt();
        Life life = chr.getField().getLifeByObjectID(summonID);
        if (life instanceof Summon) {
            Summon summon = (Summon) life;
            MovementInfo movementInfo = new MovementInfo(inPacket);
            movementInfo.applyTo(summon);
            chr.getField().broadcastPacket(Summoned.summonedMove(chr.getId(), summonID, movementInfo), chr);
        }
    }


    @Handler(op = InHeader.SUMMONED_REMOVE)
    public static void handleSummonedRemove(Client c, InPacket inPacket) {
        int id = inPacket.decodeInt();

        Char chr = c.getChr();
        Summon summon = (Summon) chr.getField().getLifeByObjectID(id);
        if (summon == null || summon.getChr() != c.getChr()) {
            return;
        }
        int skillId = summon.getSkillID();
        if (skillId == BattleMage.CONDEMNATION
                || skillId == BattleMage.CONDEMNATION_I
                || skillId == BattleMage.CONDEMNATION_II
                || skillId == BattleMage.CONDEMNATION_III) {

            ((BattleMage) chr.getJobHandler()).removeCondemnationBuff(summon);
        }

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (skillId != Luminous.BAPTISM_OF_LIGHT_AND_DARKNESS && tsm.hasStatBySkillId(skillId)) {
            tsm.removeStatsBySkill(skillId);
        }
        chr.getField().removeLife(id, false);
    }

    @Handler(op = InHeader.SUMMONED_HIT)
    public static void handleSummonedHit(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();

        int summonObjId = inPacket.decodeInt();
        byte attackId = inPacket.decodeByte();
        int damage = inPacket.decodeInt();
        int mobTemplateId = inPacket.decodeInt();
        boolean isLeft = inPacket.decodeByte() != 0;
        int mobObjId = 0;
        if (inPacket.getUnreadAmount() >= 4) {
            mobObjId = inPacket.decodeInt();
        }

        Life life = field.getLifeByObjectID(summonObjId);
        if (!(life instanceof Summon)) {
            return;
        }

        ((Summon) life).onHit(damage, mobTemplateId);
    }

    @Handler(op = InHeader.SUMMONED_SKILL)
    public static void handleSummonedSkill(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();

        int objectID = inPacket.decodeInt();
        int skillId = inPacket.decodeInt();
        inPacket.decodeByte();
        inPacket.decodeInt(); // current Time

        if (field.getLifeByObjectID(objectID) != null && field.getLifeByObjectID(objectID) instanceof Summon) {
            Summon summon = (Summon) field.getLifeByObjectID(objectID);
            summon.onSkillUse(skillId, inPacket);
        }
    }

    @Handler(op = InHeader.SUMMONED_CREATE_SHOOT_OBJ)
    public static void handleSummonedCreateShootOBj(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        ShootObjectSkillInfo shootObjectSkillInfo = new ShootObjectSkillInfo(chr);

        int summonObjId = inPacket.decodeInt();
        Life life = field.getLifeByObjectID(summonObjId);
        if (!(life instanceof Summon) || ((Summon) life).getChr() != chr) {
            return;
        }
        int action = inPacket.decodeByte();
        shootObjectSkillInfo.setSummonOwner((Summon) life);

        shootObjectSkillInfo.setSkillId(inPacket.decodeInt());
        shootObjectSkillInfo.setSlv(inPacket.decodeInt());
        shootObjectSkillInfo.setAction(inPacket.decodeInt());
        shootObjectSkillInfo.setActionSpeed(inPacket.decodeInt());
        shootObjectSkillInfo.setProjectileItemId(inPacket.decodeInt()); // unsure
        shootObjectSkillInfo.setPosition(inPacket.decodePosition());

        shootObjectSkillInfo.extraEncodeInt1 = inPacket.decodeInt();
        shootObjectSkillInfo.extraEncodeInt2 = inPacket.decodeInt();
        shootObjectSkillInfo.extraEncodeInt3 = inPacket.decodeInt(); // xPos int
        shootObjectSkillInfo.extraEncodeInt4 = inPacket.decodeInt(); // yPos int
        shootObjectSkillInfo.extraEncodeInt5 = inPacket.decodeInt();
        shootObjectSkillInfo.extraEncodeByte = inPacket.decodeByte();
        shootObjectSkillInfo.extraEncodeInt6 = inPacket.decodeInt();

        int loopSize = inPacket.decodeInt();
        for (int i = 0; i < loopSize; i++) {
            ShootObject shootObject = new ShootObject(chr, inPacket);
            shootObjectSkillInfo.getShootObjects().add(shootObject);
        }

        Job jobHandler = chr.getJobHandler();
        jobHandler.handleShootObj(chr, shootObjectSkillInfo);

        chr.write(UserLocal.shootObjectCreated(shootObjectSkillInfo));
        field.broadcastPacket(Summoned.summonedSkill((Summon) life, (byte) action, shootObjectSkillInfo.getSkillId(), shootObjectSkillInfo), chr);
    }

    @Handler(op = InHeader.SUMMONED_ACTION_CHANGE_REQUEST)
    public static void handleSummonedActionChangeRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int summonObjId = inPacket.decodeInt();
        byte action = inPacket.decodeByte();

        Life life = field.getLifeByObjectID(summonObjId);
        if (life instanceof Summon && ((Summon) life).getChr() == chr) {
            var summon = (Summon) life;
            if (summon.getSkillID() == AngelicBuster.MIGHTY_MASCOT && summon.isJaguarActive() && summon.getState() == 1) { // state means it has gotten a remove request whilst in bubble breath
                field.removeLife(summon.getObjectId(), true);
            }

            field.broadcastPacket(Summoned.summonedActionChange((Summon) life, action), chr);
        }
    }

    @Handler(op = InHeader.SUMMONED_SKILL_ATTACK)
    public static void handleSummonedSkillAttack(Char chr, InPacket inPacket) {
        int summonObjId = inPacket.decodeInt();
        int unk1 = inPacket.decodeInt();
        int summonSkillId = inPacket.decodeInt(); // Skill ID the Summon originates from
        int summonAttackId = inPacket.decodeInt(); // Attack Skill Id
        //int attackTime = inPacket.decodeInt(); // attack time ms

        Summon summon = (Summon) chr.getField().getLifeByObjectID(summonObjId);
        if (summon != null && summon.getChr() == chr && summon.getSkillID() == summonSkillId) {
            summon.onAttack(summonAttackId);
        }

    }

    @Handler(op = InHeader.SUMMONED_SECOND_ATOM_ATTACK_REQUEST)
    public static void handleSummonedSecondAtomAttackRequest(Char chr, InPacket inPacket) {
        var summonObjId = inPacket.decodeInt();
        var unk1 = inPacket.decodeInt();
        var unk2 = inPacket.decodeByte();

        Summon summon = (Summon) chr.getField().getLifeByObjectID(summonObjId);
        if (summon != null && summon.getChr() == chr) {
            summon.onAttack(summon.getSkillID());
        }
    }

    @Handler(op = InHeader.RECALL_SUMMON)
    public static void handleRecallSummon(Char chr, InPacket inPacket) {
        int skillId = inPacket.decodeInt();
        int slv = inPacket.decodeInt();
        byte isLeft = inPacket.decodeByte();
        short unk = inPacket.decodeShort();

        if (!chr.hasSkill(skillId)) {
            return;
        }

        switch (skillId) {
            case Kaiser.NOVA_GUARDIANS:
                ((Kaiser) chr.getJobHandler()).recallNovaGuardians();
                break;
            case BattleMage.GRIM_HARVEST:
                ((BattleMage) chr.getJobHandler()).recallGrimHarvest();
                break;
            case WildHunter.JAGUAR_STORM:
                ((WildHunter) chr.getJobHandler()).recallJaguars();
                break;
        }
    }

    @Handler(op = InHeader.SUMMONED_ASSIST_ATTACK_DONE)
    public static void handleAssistAttackDone(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int objId = inPacket.decodeInt();
        byte unk = inPacket.decodeByte();

        Life life = field.getLifeByObjectID(objId);
        if (life instanceof Summon) {
            // Handle
        }
    }

    @Handler(op = InHeader.SUMMONED_INTERACTION_REQUEST)
    public static void handleInteractionRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int objId = inPacket.decodeInt();
        inPacket.decodeInt(); // time or crc
        int skillID = inPacket.decodeInt(); // summon Obj SkillID
        int interactionSkillID = inPacket.decodeInt();

        Life life = field.getLifeByObjectID(objId);
        if (JobConstants.isIllium(chr.getJob()) && life instanceof Summon && ((Summon) life).getChr() == chr) {
            if (((Illium) chr.getJobHandler()).getCrystal() != null) {
                ((Illium) chr.getJobHandler()).useCrystallineSpiritSkill((Summon) life, interactionSkillID);
            }
        }
    }
}
