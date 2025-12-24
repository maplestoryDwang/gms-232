package net.swordie.ms.handlers.user;

import net.swordie.ms.Server;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.ExtraSkillInfo;
import net.swordie.ms.client.character.skills.ExtraSkillInfoManager;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.UserSkillUseInfo;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.adventurer.archer.Marksman;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.adventurer.pirate.Buccaneer;
import net.swordie.ms.client.jobs.cygnus.BlazeWizard;
import net.swordie.ms.client.jobs.cygnus.DawnWarrior;
import net.swordie.ms.client.jobs.cygnus.NightWalker;
import net.swordie.ms.client.jobs.legend.Evan;
import net.swordie.ms.client.jobs.legend.Luminous;
import net.swordie.ms.client.jobs.nova.Cadena;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.jobs.resistance.WildHunter;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.enums.FieldOption;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.ChatType.Mob;

public class AttackHandler {

    private static final Logger log = LogManager.getLogger();


    // No handler, gets called from other handlers
    private static void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        int skillID = attackInfo.skillId;
        int slv = attackInfo.slv;
        Field field = chr.getField();

        if (skillID != 0 && (!FieldConstants.isBypassFieldLimitCheckField(field.getId()) && (field.getInfo().getFieldLimit() & FieldOption.SkillLimit.getVal()) > 0
                || (field.getInfo().getFieldLimit() & FieldOption.MoveSkillOnly.getVal()) > 0)
                || attackInfo.skillId == SkillConstants.LEVEL_UP_DAMAGE_SKILL_ID) {
            // don't allow skills on maps where it's not allowed
            // ignore the damage from the level up skill, instakills buffed mobs
            return;
        }

        if (skillID == RuneStone.LIBERATE_THE_DESTRUCTIVE_RUNE
                && (!chr.hasSkillOnCooldown(RuneStone.SEALED_RUNE_POWER)
                || chr.getRemainingCoolTime(RuneStone.SEALED_RUNE_POWER) < 12 * 60 * 1000)
        ) {
            // destro attack only 3 min after rune
            return;
        }

        // Fill in TotalDamageDealt in AttackInfo & Mob info
        for (var mai : attackInfo.mobAttackInfo) {
            mai.mob = field.getLifeByObjectID(Mob.class, mai.mobId); // Find mob
            if (mai.mob != null) {
                mai.totalDamage = Arrays.stream(mai.damages).sum(); // total damage per mob
                mai.mobDies = mai.mob.getHp() <= mai.totalDamage; // check if mob would die

                attackInfo.totalDamageDealt += mai.totalDamage; // add total dmg per mob to attackInfo to get total damage dealt
            }
        }

        if (chr.checkAndSetSkillCooltime(skillID, attackInfo, attackInfo.sui, SkillUseSource.AttackUseRequest) // Check Cooldown and Set Cooldown
                && chr.applyMpCon(skillID, slv, attackInfo, attackInfo.sui, SkillUseSource.AttackUseRequest) // Check MP and Apply MP Consumption
        ) {
            chr.chatMessage(Mob, "SkillID: " + skillID);
            Job sourceJobHandler = chr.getJobHandler();
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            if (!SkillConstants.isNoExtraSkill(skillID) && si != null && si.getExtraSkillInfo().size() > 0) {
                List<Integer> extraSkillList = new ArrayList<>();
                si.getExtraSkillInfo().forEach(map -> extraSkillList.addAll(map.keySet()));
                List<ExtraSkillInfo> esi = ExtraSkillInfoManager.alterExtraSkillInfo(chr, attackInfo, extraSkillList);
                if (esi.size() > 0) {
                    chr.write(FieldPacket.registerExtraSkill(skillID, esi));
                }
            }
            if (si != null && SkillConstants.isMassSpellSkill(skillID) && chr.getParty() != null) {
                Rect r = si.getFirstRect();
                if (r != null) {
                    Rect rectAround = chr.getRectAround(r);
                    for (Char ptChr : chr.getParty().getPartyMembersInField(chr)) {
                        if (rectAround.hasPositionInside(ptChr.getPosition())) {
                            Effect effect = Effect.skillAffected(skillID, slv, 0);
                            if (ptChr != chr) {  // Caster shouldn't get the Affected Skill Effect
                                chr.getField().broadcastPacket(UserRemote.effect(ptChr.getId(), effect), ptChr);
                                ptChr.write(UserPacket.effect(effect));
                                if (!si.isFinalAttack()) {
                                    sourceJobHandler.handleAttack(c, attackInfo);
                                }
                            }

                        }
                    }
                }
            }
            if (SkillConstants.isBroadcastSkillUseRequest(skillID)) {
                Effect effect = Effect.skillUse(skillID, chr.getLevel(), slv, attackInfo.bySummonedID);
                effect.setSkillUseInfo(attackInfo.sui);
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
            }
            if (si != null && !si.isFinalAttack()) {
                sourceJobHandler.handleAttack(c, attackInfo);
            }

            // Final Attack Request
            int faSkill = sourceJobHandler.getFinalAttackSkill();
            if (faSkill > 0) {
                List<Integer> mobsHit = attackInfo.mobAttackInfo.stream().map(mai -> mai.mobId).collect(Collectors.toList());
                chr.write(FieldPacket.finalAttackRequest(chr, skillID, faSkill, mobsHit));
            }

            broadcastDamage(attackInfo, chr); // broadcast damage before applying damage
            int multiKillMessage = 0;
            long mobexp = 0;
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                var mob = mai.mob; // setting done before within this method.
                if (mob == null) {
                    if (mai.mobId < 1000000 || mai.mobId > 100000000) {
                        chr.chatMessage(ChatType.Expedition, String.format("Wrong attack info parse (probably)! SkillID = %d, Mob ID = %d", skillID, mai.mobId));
                    }
                    continue;
                } else if (mob.getHp() > 0) {
                    mob.damage(chr, mai.totalDamage);
                    if (attackInfo.isReflectType()) {
                        var isMagicAttack = attackInfo.attackHeader != null && attackInfo.attackHeader.getValue() == OutHeader.REMOTE_MAGIC_ATTACK.getValue();
                        mob.handleDamageReflect(chr, skillID, mai.totalDamage, isMagicAttack);
                    }
                    //TODO Horntail sponge damage, should make a separate function
                    reflectDamageToSponge(chr, field, mob, mai.totalDamage);
                }
                if (!MobConstants.isUnionRaidBoss(mob.getTemplateId()) && mob.getHp() <= 0) {
                    mob.killedByChar(chr, attackInfo);
                    // MultiKill +1,  per killed mob
                    multiKillMessage++;
                    mobexp = mob.getForcedMobStat().getExp();
                }
            }

            // damage check
            if (Server.DEBUG_MOVEMENT) {
                chr.chatMessage("[A] Pos: [%d, %d] | Left: [%s]", attackInfo.chrPos.getX(), attackInfo.chrPos.getY(), attackInfo.left);
            }

            if (chr.getOffenseManager().doSampleTest()) {
                var damageCalc = chr.getDamageCalc();
                damageCalc.checkDamage(attackInfo);
                damageCalc.checkSkillRange(attackInfo);
                // TODO: checkSkillInterval (against nodelay)
            }

            // MultiKill Message Popup & Exp
            if (multiKillMessage > 2) {
                chr.multiKillMessage(multiKillMessage, mobexp);
            }

        }
        Summon summon = attackInfo.summon;
        if (summon != null && attackInfo.attackHeader == OutHeader.SUMMONED_ATTACK && attackInfo.attackActionType == 25) {
            summon.getField().removeSummon(summon);
        }
    }

    private static void reflectDamageToSponge(Char chr, Field field, Mob mob, long totalDamage) {
        if ((mob.getTemplateId() >= 8810202 && mob.getTemplateId() <= 8810209)) {
            Life life = field.getLifeByTemplateId(8810214);
            if (life != null) {
                Mob mob2 = (Mob) life;
                mob2.damage(chr, totalDamage);
                field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob2)));
            }
        }
        if ((mob.getTemplateId() >= 8810002 && mob.getTemplateId() <= 8810009)) {
            Life life2 = field.getLifeByTemplateId(8810018);
            if (life2 != null) {
                Mob mob2 = (Mob) life2;
                mob2.damage(chr, totalDamage);
                field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob2)));
            }
        }
        if ((mob.getTemplateId() >= 8810102 && mob.getTemplateId() <= 8810109)) {
            Life life3 = field.getLifeByTemplateId(8810118);
            if (life3 != null) {
                Mob mob3 = (Mob) life3;
                mob3.damage(chr, totalDamage);
                field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob3)));
            }
        }
    }

    private static void broadcastDamage(AttackInfo attackInfo, Char chr) {
        // TODO fix all remote 38 attacks
        if (SkillConstants.noEncodeAttack(attackInfo.skillId)) {
            return;
        }
        if (attackInfo.attackHeader != null) {
            switch (attackInfo.attackHeader) {
                case SUMMONED_ATTACK:
                    if (attackInfo.summon == null) {
                        return;
                    }
                    chr.getField().broadcastPacket(Summoned.summonedAttack(chr.getId(), attackInfo, false), chr);
                    if (chr.getCopy() != null) {
                        Summon oldSummon = attackInfo.summon;
                        int oldOID = oldSummon.getObjectId();
                        oldSummon.setObjectId(13371337);
                        Char oldChr = oldSummon.getChr();
                        oldSummon.setChr(chr.getCopy());
                        chr.write(Summoned.summonedAttack(chr.getCopy().getId(), attackInfo, false));
                        oldSummon.setChr(oldChr);
                        oldSummon.setObjectId(oldOID);
                    }
                    break;
                default:
                    chr.getField().broadcastPacket(UserRemote.attack(chr, attackInfo), chr);
                    Char copy = chr.getCopy();
                    if (copy != null) {
                        chr.write(UserRemote.attack(copy, attackInfo));
                    }
            }
        }
    }


    @Handler(op = InHeader.USER_BODY_ATTACK)
    public static void handleBodyAttack(Client c, InPacket inPacket) {
        AttackInfo ai = new AttackInfo();
        ai.sui = new SkillUseInfo();
        ai.attackHeader = OutHeader.REMOTE_BODY_ATTACK;
        ai.inHeader = InHeader.USER_BODY_ATTACK;
        ai.fieldKey = inPacket.decodeByte();
        byte mask = inPacket.decodeByte();
        ai.hits = (byte) (mask & 0xF);
        ai.mobCount = (mask >>> 4) & 0xF;
        inPacket.decodeInt(); // 0
        ai.skillId = inPacket.decodeInt();
        ai.slv = inPacket.decodeInt();
        inPacket.decodeInt(); // crc

        int idk199 = inPacket.decodeInt(); // new 199
        int idk203 = inPacket.decodeInt(); // unk 203


        // START UNKNOWNATTACKPACKETDATA
        decodeUnknownAttackPacketData(inPacket, ai);
        // END UNKNOWNATTACKPACKETDATA


        // START USER SKILL ENCODE FUNC
        ai.sui.skillID = ai.skillId;
        ai.sui.slv = ai.slv;
        new UserSkillUseInfo(ai.sui).decode(inPacket); // Not using anything from Process type as of now
        // END USER SKILL ENCODE FUNC


        ai.areaPAD = inPacket.decodeByte() >>> 3;
        byte nul = inPacket.decodeByte(); // encoded as 0
        short actionMask = inPacket.decodeShort();
        ai.left = ((actionMask >>> 15) & 1) != 0;
        ai.attackAction = (short) (actionMask & 0x7FFF);
        ai.attackCount = inPacket.decodeInt();
        ai.attackSpeed = inPacket.decodeByte(); // encoded as 0
        ai.wt = inPacket.decodeInt();
        ai.ar01Mad = inPacket.decodeInt(); // only done if mage skill
        byte idk2 = inPacket.decodeByte();

        if (ai.skillId > 0) {
            for (int i = 0; i < ai.mobCount; i++) {
                MobAttackInfo mai = new MobAttackInfo();
                mai.mobId = inPacket.decodeInt();
                mai.hitAction = inPacket.decodeByte();
                mai.left = inPacket.decodeByte();
                mai.idk3 = inPacket.decodeByte();
                mai.forceActionAndLeft = inPacket.decodeByte();
                mai.frameIdx = inPacket.decodeByte();
                mai.templateID = inPacket.decodeInt();
                mai.calcDamageStatIndexAndDoomed = inPacket.decodeByte(); // 1st bit for bDoomed, rest for calcDamageStatIndex
                mai.hitX = inPacket.decodeShort();
                mai.hitY = inPacket.decodeShort();

                mai.oldPosX = inPacket.decodeShort(); // ?
                mai.oldPosY = inPacket.decodeShort(); // ?

                // ?
                inPacket.decodeInt();
                inPacket.decodeInt();
                inPacket.decodeShort();

                inPacket.decodeByte(); // new 220

                long[] damages = new long[ai.hits];
                for (int j = 0; j < ai.hits; j++) {
                    damages[j] = inPacket.decodeLong();
                }
                mai.damages = damages;
                mai.mobUpDownYRange = inPacket.decodeInt();
                inPacket.decodeInt(); // crc
                parseAttackInfoPacket(inPacket, mai);
                ai.mobAttackInfo.add(mai);
            }
        }
        ai.pos = inPacket.decodePosition();
        handleAttack(c, ai);
    }


    @Handler(op = InHeader.SUMMONED_ATTACK)
    public static void handleSummonedAttack(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        AttackInfo ai = new AttackInfo();
        ai.sui = new SkillUseInfo();
        int summonedID = inPacket.decodeInt();
        ai.attackHeader = OutHeader.SUMMONED_ATTACK;
        ai.inHeader = InHeader.SUMMONED_ATTACK;
        ai.summon = (Summon) field.getLifeByObjectID(summonedID);
        ai.updateTime = inPacket.decodeInt();
        int skillId = inPacket.decodeInt();
        ai.skillId = skillId;
        ai.sui.skillID = skillId;
        ai.summonSpecialSkillId = inPacket.decodeInt();
        inPacket.decodeByte(); // new 200
        inPacket.decodeByte(); // new 227


        if (SkillConstants.isSummonedVariableRectAttack(ai.summonSpecialSkillId)) {
            inPacket.decodeInt();
        }


        byte leftAndAction = inPacket.decodeByte();
        ai.attackActionType = (byte) (leftAndAction & 0x7F); // attackActionType 25 = ExplosionRemove
        ai.left = (byte) (leftAndAction >>> 7) != 0;
        byte mask = inPacket.decodeByte();
        ai.hits = (byte) (mask & 0xF);
        ai.mobCount = (mask >>> 4) & 0xF;
        inPacket.decodeByte(); // hardcoded 0

        // ~~~ START CSummoned__TryDoingTeslaCoilAttack ADDITION ~~~
        if (SkillConstants.isSummonedTeslaCoilAttack(skillId)) {
            for (int i = 0; i < 3; i++) {
                inPacket.decodeInt(); // rockNshock Obj Id
            }
        }
        // ~~~ END CSummoned__TryDoingTeslaCoilAttack ADDITION ~~~

        ai.pos = inPacket.decodePosition();
        ai.pos = inPacket.decodePosition();
        inPacket.decodeByte();


        if (SkillConstants.isSummonedBox2DAttack(skillId) && ai.attackActionType != 12) {
            inPacket.decodePosition();
        }

        inPacket.decodeInt(); // hardcoded -1
        short idk3 = inPacket.decodeShort();
        int idk4 = inPacket.decodeInt();
        ai.bulletID = inPacket.decodeInt();
        for (int i = 0; i < ai.mobCount; i++) {
            MobAttackInfo mai = new MobAttackInfo();
            mai.mobId = inPacket.decodeInt();
            mai.templateID = inPacket.decodeInt();
            mai.hitAction = inPacket.decodeByte();
            mai.left = inPacket.decodeByte();
            mai.idk3 = inPacket.decodeByte();
            mai.forceActionAndLeft = inPacket.decodeByte();
            mai.frameIdx = inPacket.decodeByte();
            int idk5 = inPacket.decodeInt(); // another template id, same as the one above
            mai.calcDamageStatIndexAndDoomed = inPacket.decodeByte(); // 1st bit for bDoomed, rest for calcDamageStatIndex
            mai.hitX = inPacket.decodeShort();
            mai.hitY = inPacket.decodeShort();
            mai.oldPosX = inPacket.decodeShort(); // ?
            mai.oldPosY = inPacket.decodeShort(); // ?

            int idk7 = inPacket.decodeInt();
            short idk6 = inPacket.decodeShort();
            int idk8 = inPacket.decodeInt();
            int idk9 = inPacket.decodeInt();

            inPacket.decodeByte(); // new 220

            long[] damages = new long[ai.hits];
            for (int j = 0; j < ai.hits; j++) {
                damages[j] = inPacket.decodeLong();
            }
            mai.damages = damages;
            mai.mobUpDownYRange = inPacket.decodeInt();
            parseAttackInfoPacket(inPacket, mai);
            ai.mobAttackInfo.add(mai);
        }
        // if TeslaCoil || JaguarSkill
        // decodeInt
        handleAttack(c, ai);
    }


    @Handler(ops = {InHeader.USER_MELEE_ATTACK,
            InHeader.USER_SHOOT_ATTACK,
            InHeader.USER_MAGIC_ATTACK,
            InHeader.USER_NON_TARGET_FORCE_ATOM_ATTACK,
            InHeader.USER_AREA_DOT_ATTACK,
            InHeader.USER_AFFECTED_AREA_FOR_SCREEN_ATTACK})
    public static void handleAttack(Char chr, InPacket inPacket, InHeader header) {
        AttackInfo ai = new AttackInfo();
        SkillUseInfo skillUseInfo = new SkillUseInfo();
        ai.sui = skillUseInfo;
        ai.inHeader = header;
        switch (header) {
            case USER_MELEE_ATTACK:
                ai.attackHeader = OutHeader.REMOTE_MELEE_ATTACK;
                break;
            case USER_SHOOT_ATTACK:
                ai.boxAttack = inPacket.decodeByte() != 0; // hardcoded in shootAttack (0) and box2d (1)
                ai.attackHeader = OutHeader.REMOTE_SHOOT_ATTACK;
                break;
            case USER_NON_TARGET_FORCE_ATOM_ATTACK:
                inPacket.decodeArr(20); // id/crc/something else
            case USER_MAGIC_ATTACK:
                ai.attackHeader = OutHeader.REMOTE_MAGIC_ATTACK;
                break;
        }
        ai.bulletID = chr.getBulletIDForAttack();
        ai.fieldKey = inPacket.decodeByte();
        byte mask = inPacket.decodeByte();
        ai.hits = (byte) (mask & 0xF);
        ai.mobCount = (mask >>> 4) & 0xF;
        ai.skillId = inPacket.decodeInt();
        ai.slv = inPacket.decodeInt();

        // MeleeAttack || ShootAttack || ForceAtom_NonTarget
        if (header == InHeader.USER_MELEE_ATTACK || header == InHeader.USER_SHOOT_ATTACK
                || header == InHeader.USER_NON_TARGET_FORCE_ATOM_ATTACK) {
            ai.addAttackProc = inPacket.decodeByte();
        }

        inPacket.decodeInt(); // crc
        int idk199 = inPacket.decodeInt(); // new 199
        int idk203 = inPacket.decodeInt(); // unk 203
        var idk232 = inPacket.decodeInt();


        // START UNKNOWNATTACKPACKETDATA
        decodeUnknownAttackPacketData(inPacket, ai);
        // END UNKNOWNATTACKPACKETDATA


        // START USER SKILL ENCODE FUNC
        skillUseInfo.skillID = ai.skillId;
        skillUseInfo.slv = ai.slv;
        new UserSkillUseInfo(skillUseInfo).decode(inPacket);
        // END USER SKILL ENCODE FUNC


        var skillID = ai.skillId;

        // MeleeAttack || ShootAttack || MagicAttack || Box2DAttack
        if (SkillConstants.isKeyDownSkill(skillID) || SkillConstants.isSuperNovaSkill(skillID)) {
            ai.keyDown = inPacket.decodeInt();
        }

        // MeleeAttack || ZeroSub_MeleeAttack
        if (SkillConstants.isGrenadeSkill(skillID)) {
            ai.grenadeId = inPacket.decodeInt();
        }

        // MeleeAttack || ShootAttack || ForceAtom_NonTarget || AreaDotAttack
        if (SkillConstants.isZeroSkill(skillID)) {
            ai.zeroTag = inPacket.decodeByte();
        }

        // MeleeAttack || ShootAttack || TryDoingShootAttackObject
        if (SkillConstants.isUsercloneSummonedAbleSkill(skillID)) {
            ai.bySummonedID = inPacket.decodeInt();
        }

        // MeleeAttack
        if (skillID == Marksman.PERFECT_SHOT_HIT || skillID == 80002819) {
            inPacket.decodePositionInt();
        }

        // MeleeAttack
        if (skillID == NightWalker.SHADOW_SPEAR_AA_LARGE) {
            ai.shadowSpear1 = inPacket.decodeInt();
            ai.shadowSpear2 = inPacket.decodeInt();
        }

        ai.someMask = inPacket.decodeByte();
        ai.buckShot = inPacket.decodeByte();
        // ShootAttack
        if (header == InHeader.USER_SHOOT_ATTACK) {
            int idk3 = inPacket.decodeInt();
            ai.isJablin = inPacket.decodeByte() != 0;
            if (ai.boxAttack) {
                int boxIdk1 = inPacket.decodeInt();
                short boxIdk2 = inPacket.decodeShort();
                short boxIdk3 = inPacket.decodeShort();
            }
        }

        // ForceAtom_NonTarget
        if (SkillConstants.isOrbitalFlameSkill(skillID)) {
            inPacket.decodeInt();
        }

        short maskie = inPacket.decodeShort();
        ai.left = ((maskie >>> 15) & 1) != 0;
        ai.attackAction = (short) (maskie & 0x7FFF);
        ai.requestTime = inPacket.decodeInt();
        ai.attackActionType = inPacket.decodeByte();

        // ShootAttack
        if (skillID == 23111001 || skillID == 80001915 || skillID == 36111010) {
            int idk5 = inPacket.decodeInt();
            int x = inPacket.decodeInt();
            int y = inPacket.decodeInt();
        }

        // FlameBall || MagicAttack || RandAreaAttack || PsychicLockAttack || TryDoingShootAttackObject
        if (header == InHeader.USER_MAGIC_ATTACK && SkillConstants.isEvanForceSkill(skillID)) {
            boolean mirAttack = inPacket.decodeByte() != 0;
        }

        ai.attackSpeed = inPacket.decodeByte();
        ai.tick = inPacket.decodeInt();
        // TODO TryDoingRandAreaAttack shows 1more int after tick. Check In-Game


        if (skillID == 80002459 || skillID == RuneStone.LIBERATE_THE_RUNE_OF_THUNDER_2 || skillID == 80002208 || skillID == 80011549) {
            inPacket.decodeInt(); // mobId
        }

        if (skillID == WildHunter.ANOTHER_BITE) {
            inPacket.decodeInt(); // ?
        }

        if (header == InHeader.USER_AREA_DOT_ATTACK) {
            ai.affectedAreaObjId = inPacket.decodeInt();
        }

        // FlameBall || LightningUnionAttack || ForceAtom_NonTarget
        if (header == InHeader.USER_MAGIC_ATTACK || header == InHeader.USER_NON_TARGET_FORCE_ATOM_ATTACK) {
            int idk = inPacket.decodeInt();
        }

        // MeleeAttack || ShootAttack
        if (header == InHeader.USER_MELEE_ATTACK || header == InHeader.USER_SHOOT_ATTACK) {
            int bulletSlot = inPacket.decodeInt();
        }

        if (header == InHeader.USER_AREA_DOT_ATTACK || header == InHeader.USER_AFFECTED_AREA_FOR_SCREEN_ATTACK) {
            inPacket.decodeInt();
        }

        // MeleeAttack || ShootAttack || ForceAtom_NonTarget
        if (header == InHeader.USER_MELEE_ATTACK || header == InHeader.USER_SHOOT_ATTACK || header == InHeader.USER_NON_TARGET_FORCE_ATOM_ATTACK) {
            ai.finalAttackLastSkillID = inPacket.decodeInt();
            if (ai.finalAttackLastSkillID > 0) {
                ai.finalAttackByte = inPacket.decodeByte();
            }
        }

        // ShootAttack
        if (header == InHeader.USER_SHOOT_ATTACK) {
            int bulletSlot = inPacket.decodeShort();
            byte idk = inPacket.decodeByte();
            ai.rect = inPacket.decodeShortRect();
        }


        // MeleeAttack
        if (skillID == 5111009) { // Spiral Assault
            ai.ignorePCounter = inPacket.decodeByte() != 0;
        }
        if (skillID == 25111005) {
            ai.spiritCoreEnhance = inPacket.decodeInt();
        }

        // MeleeAttack
        if ((skillID == 23121011 || skillID == 80001913) && ai.addAttackProc != 0) {
            ai.addAttackProcRemote = inPacket.decodeByte(); // boolean
        }



        // TESTING STUFF
        if (skillID == NightWalker.RAPID_THROW || skillID == 400041060 || skillID == Buccaneer.HOWLING_FIST) {
            inPacket.decodeInt();
            if (skillID == NightWalker.RAPID_THROW) {
                inPacket.decodeShort();
                inPacket.decodeByte();
            }
        }
        // TESTING STUFF



        // Mob Loop
        for (int i = 0; i < ai.mobCount; i++) {
            MobAttackInfo mai = new MobAttackInfo();
            mai.mobId = inPacket.decodeInt();
            mai.hitAction = inPacket.decodeByte();
            mai.left = inPacket.decodeByte();
            mai.idk3 = inPacket.decodeByte();
            mai.forceActionAndLeft = inPacket.decodeByte();
            mai.frameIdx = inPacket.decodeByte();
            mai.templateID = inPacket.decodeInt();
            mai.calcDamageStatIndexAndDoomed = inPacket.decodeByte(); // 1st bit for bDoomed, rest for calcDamageStatIndex
            mai.hitX = inPacket.decodeShort();
            mai.hitY = inPacket.decodeShort();

            mai.oldPosX = inPacket.decodeShort(); // ?
            mai.oldPosY = inPacket.decodeShort(); // ?

            // FlameBall || MagicAttack
            if (header == InHeader.USER_MAGIC_ATTACK) {
                mai.hpPerc = inPacket.decodeByte();
                if (skillID == 80001835 || skillID == Kanna.SOUL_SHEAR || skillID == 80011046) {
                    mai.magicInfo = (short) inPacket.decodeByte();
                } else {
                    mai.magicInfo = inPacket.decodeShort();
                }
            } else {
                mai.idk6 = inPacket.decodeShort();
            }

            mai.idk8 = inPacket.decodeInt(); // new 199
            mai.idk7 = inPacket.decodeInt();

            inPacket.decodeByte(); // new 220

            mai.damages = new long[ai.hits];
            for (int j = 0; j < ai.hits; j++) {
                mai.damages[j] = inPacket.decodeLong();
            }
            mai.mobUpDownYRange = inPacket.decodeInt();
            inPacket.decodeInt(); // crc

            // MeleeAttack
            if (skillID == 37111005) {
                mai.isResWarriorLiftPress = inPacket.decodeByte() != 0;
            }

            // MeleeAttack
            if (skillID == FirePoison.POISON_NOVA_EXPLOSION) {
                inPacket.decodeByte();
            }

            // PsychicLockAttack
            if (SkillConstants.isKinesisPsychicLockSkill(skillID)) {
                mai.psychicLockInfo1 = inPacket.decodeInt();
                mai.psychicLockInfo2 = inPacket.decodeInt();
            }

            parseAttackInfoPacket(inPacket, mai);
            ai.mobAttackInfo.add(mai);
        }



        if (header == InHeader.USER_MAGIC_ATTACK) { // Extra Encodes for USER_MAGIC_ATTACK
            short forcedX = inPacket.decodeShort();
            short forcedY = inPacket.decodeShort();
            if (SkillConstants.isKinesisPsychicLockSkillExtraEncode(skillID)) {
                inPacket.decodeByte();
            }

            if (SkillConstants.isKinesisPsychicAreaSkill(skillID)) {
                inPacket.decodeInt(); // psychic Area Key (int)
                inPacket.decodeShort(); // psychic Area Key (short)
            }

            // ShootAttackObject
            if (SkillConstants.isSomeAA(skillID) || SkillConstants.isShootObj(skillID)) {
                ai.shootObjId = inPacket.decodeInt(); // ShootObj Id
                ai.pos3 = inPacket.decodePosition(); // end point of ShootObj
                ai.idk5 = inPacket.decodeByte(); // true for isSomePathFinderSkill skills, 0 for others
            }

            if (skillID == BattleMage.DARK_SHOCK) {
                ai.pos3 = inPacket.decodePosition(); // old position
            }

            // RandAreaAttack
            ai.dragon = inPacket.decodeByte() != 0;
            ai.forcedX = forcedX;
            ai.forcedY = forcedY;
            if (ai.dragon) {
                short rcDstRight = inPacket.decodeShort();
                short rectRight = inPacket.decodeShort();
                short x = inPacket.decodeShort();
                short y = inPacket.decodeShort();
                ai.dragonAttackStart = inPacket.decodeByte();
                ai.dragonAttackActionType = inPacket.decodeByte();
                ai.dragonAttackProgess = inPacket.decodeByte();
                ai.rcDstRight = rcDstRight;
                ai.rectRight = rectRight;
                ai.x = x;
                ai.y = y;
            }

            if (skillID == BlazeWizard.IGNITION_EXPLOSION) {
                ai.option = inPacket.decodeInt();
            }

            if (skillID == FirePoison.MIST_ERUPTION) {
                byte size = inPacket.decodeByte();
                int[] mists = new int[size > 0 ? size : 0];
                for (int i = 0; i < mists.length; i++) {
                    mists[i] = inPacket.decodeInt();
                }
                ai.mists = mists;
            }

            if (skillID == FirePoison.POISON_MIST) {
                byte force = inPacket.decodeByte();
                short forcedXSh = inPacket.decodeShort();
                short forcedYSh = inPacket.decodeShort();
                ai.force = force;
                ai.forcedXSh = forcedXSh;
                ai.forcedYSh = forcedYSh;
            }

            if (skillID == 80001835) { // Soul Shear
                byte sizeB = inPacket.decodeByte();
                int[] idkArr2 = new int[sizeB];
                short[] shortArr2 = new short[sizeB];
                for (int i = 0; i < sizeB; i++) {
                    idkArr2[i] = inPacket.decodeInt();
                    shortArr2[i] = inPacket.decodeShort();
                }
                short delay = inPacket.decodeShort();
                ai.mists = idkArr2;
                ai.shortArr = shortArr2;
                ai.delay = delay;
            }


        } else if (header == InHeader.USER_MELEE_ATTACK) { // Extra Encodes for USER_MELEE_ATTACK

            if (skillID == 61121052 || skillID == 36121052 || skillID == 112001018 || skillID == 112001017
                    || SkillConstants.isScreenCenterAttackSkill(skillID)) {
                ai.ptTarget.setX(inPacket.decodeShort());
                ai.ptTarget.setY(inPacket.decodeShort());

            } else if (SkillConstants.isSuperNovaSkill(skillID)) {
                ai.ptTarget.setX(inPacket.decodeShort());
                ai.ptTarget.setY(inPacket.decodeShort());

            } else if (skillID == 101000102) {
                ai.chrPos = inPacket.decodePosition();

            } else if (skillID == 400031016 || skillID == 400041024 || skillID == 80002448 || SkillConstants.isWingedJavelinOrAbyssalCast(skillID)) {
                ai.chrPos = inPacket.decodePosition();

            } else if (skillID == 40011289) {
                ai.chrPos = inPacket.decodePosition();

            } else if (skillID == 40011290) {
                ai.chrPos = inPacket.decodePosition();

            } else if (skillID == 41111001 || skillID == 41111017) {
                ai.chrPos = inPacket.decodePosition();
            } else if (skillID == 41121015) {
                ai.chrPos = inPacket.decodePosition();
            } else {
                ai.chrPos = inPacket.decodePosition();
            }

            // MeleeAttack || ShootObjAttack
            if (SkillConstants.isSomeAA(skillID) || SkillConstants.isShootObj(skillID)) {
                ai.shootObjId = inPacket.decodeInt(); // ShootObj Id
                ai.pos3 = inPacket.decodePosition(); // end point of ShootObj
                ai.idk5 = inPacket.decodeByte(); // true for isSomePathFinderSkill skills, 0 for others
            }

            if (skillID == 21121057) {
                ai.x = inPacket.decodeShort();
                ai.y = inPacket.decodeShort();
            }

            if (SkillConstants.isDivineEchoMimicSkills(skillID) && ai.attackAction == 0) {
                ai.isMimickedBy = inPacket.decodeInt(); // Mimic Chr Id
                inPacket.decodePosition(); // Mimic Chr Position
            }

            if (SkillConstants.isAranFallingStopSkill(skillID) ||
                    skillID == 80001925 || skillID == 80001926 || skillID == 80001927 ||
                    skillID == 80001936 || skillID == 80001937 || skillID == 80001938 ||

                    skillID == 37100002 || skillID == 37110001 || skillID == 37110004) {
                inPacket.decodeByte();
            }

            if (skillID == 21120019 || skillID == 37121052 || SkillConstants.isShadowAssault(skillID)
                    || skillID == DawnWarrior.EQUINOX_SLASH || skillID == 5101004) {
                ai.teleportLeft = inPacket.decodeByte() != 0;
                ai.teleportPt = inPacket.decodePositionInt(); // to Position
            }

            if (skillID != 61121105 && skillID != 61121222 && skillID != 24121052) {

                if (skillID == 101120104) {
                    var size = inPacket.decodeShort();
                    for (int i = 0; i < size; i++) {
                        // Advanced Earth Break Positions
                        ai.positions.add(inPacket.decodePosition());
                    }
                }

            } else {
                //inPacket.decodeInt(); // unk
                ai.Vx = inPacket.decodeShort();
                for (int i = 0; i < ai.Vx; i++) {
                    // Inferno Breath Affected Area Positions
                    ai.positions.add(inPacket.decodePosition());
                }
            }
            if (skillID == 14111006 && ai.grenadeId != 0) {
                ai.grenadePos.setX(inPacket.decodeShort());
                ai.grenadePos.setY(inPacket.decodeShort());
            }
            if (skillID == 80002682) {
                inPacket.decodeInt();
                // while ( X ) {
                //     inPacket.decodeInt();
            }

            // Shit for Evan
            if ((skillID == 0 || skillID == Evan.MAGIC_DEBRIS || skillID == Evan.ENHANCED_MAGIC_DEBRIS) && JobConstants.isEvan(chr.getJob())) {
                if (skillID == 0) {
                    ai.dragon = true;
                    ai.dragonAttackActionType = -1;
                } else {
                    ai.attackActionType = -1;
                }
            }


        } else if (header == InHeader.USER_SHOOT_ATTACK) { // Extra Encodes for USER_SHOOT_ATTACK

            if (SkillConstants.isScreenCenterAttackSkill(skillID)) {
                ai.chrPos = inPacket.decodePosition();
            }

            if (SkillConstants.isUserCloneSummon(skillID) && SkillConstants.isUsercloneSummonedAbleSkill(skillID)) {
                ai.chrPos = inPacket.decodePosition();
            } else {
                ai.chrPos = inPacket.decodePosition();

                // Box2DAttack
                if (ai.boxAttack && false) { // new 227, don't decode pos? At least for Broadside
                    inPacket.decodePosition();
                }

            }

            if (SkillConstants.isAranFallingStopSkill(skillID) ||
                    skillID == 80001925 || skillID == 80001926 || skillID == 80001927 ||
                    skillID == 80001936 || skillID == 80001937 || skillID == 80001938 ||

                    skillID == 37100002 || skillID == 37110001 || skillID == 37110004) {
                inPacket.decodeByte();
            }

            if (skillID / 1000000 == 33) {
                ai.bodyRelMove = inPacket.decodePosition();
            }

            if (SkillConstants.isKeydownSkillRectMoveXY(skillID)) {
                ai.keyDownRectMoveXY = inPacket.decodePosition();
            }

            if (skillID >= 64001009 && skillID <= 64001011) { // Cadena : Chain Pursuit
                inPacket.decodeByte(); // unk
                ai.ptTarget = inPacket.decodePosition(); // pursuit hook end position
            }

            if (skillID == 23121002 || skillID == 80001914) {
                ai.fh = inPacket.decodeByte();
            }

            if ((skillID == 42121002 || skillID == 80011045) && ai.mobCount > 0) {
                inPacket.decodeInt();
            }

            if (SkillConstants.isDragonAction(skillID)) {
                ai.dragon = true;
                ai.dragonAttackStart = inPacket.decodeByte();
                ai.dragonAttackActionType = inPacket.decodeByte();
            }


        } else if (header == InHeader.USER_AREA_DOT_ATTACK || header == InHeader.USER_AFFECTED_AREA_FOR_SCREEN_ATTACK) {
            ai.pos.setX(inPacket.decodeShort());
            ai.pos.setY(inPacket.decodeShort());

            if (header == InHeader.USER_AREA_DOT_ATTACK) {
                ai.affectedAreaObjId = inPacket.decodeInt();
            }


        } else if (header == InHeader.USER_NON_TARGET_FORCE_ATOM_ATTACK) {
            ai.pos.setX(inPacket.decodeShort());
            ai.pos.setY(inPacket.decodeShort());
        }

        handleAttack(chr.getClient(), ai);
    }

    private static void decodeUnknownAttackPacketData(InPacket inPacket, AttackInfo ai) {
        int unk1 = inPacket.decodeByte();
        inPacket.decodeByte(); // new 227
        int unk2 = inPacket.decodeShort(); // BulletItem Position
        int unk3 = inPacket.decodeInt(); // Bullet Item ID
        ai.byUnreliableMemory = inPacket.decodeByte() != 0; // by Unreliable Memory?
        int unk5 = inPacket.decodeByte();
        int unk6 = inPacket.decodeByte(); // new 199
        int unk12 = inPacket.decodeByte(); // new 220

        // Klopt niks van, deze staan wel gewoon in de sub
//        int unk8 = inPacket.decodeInt(); // new 218
        Position pos = inPacket.decodePositionInt(); // EncodeBuffer(8); in IDA  |  Character Position
        int unk11 = inPacket.decodeInt(); // new 218
        int unk13 = inPacket.decodeInt(); // new 220

        int unk7 = inPacket.decodeInt(); // bonus attack Count
        for (int i = 0; i < unk7; i++) { // Used by Dark Shock's Bonus attack
            inPacket.decodeInt();
        }
        var unk14 = inPacket.decodeByte();
    }

    private static void parseAttackInfoPacket(InPacket inPacket, MobAttackInfo mai) {
        // PACKETMAKER::MakeAttackInfoPacket
        mai.type = inPacket.decodeByte();
        mai.currentAnimationName = "";
        mai.unkStr = "";
        if (mai.type == 1) {
            mai.currentAnimationName = inPacket.decodeString();
            mai.unkStr = inPacket.decodeString();
            mai.animationDeltaL = inPacket.decodeInt();
            mai.hitPartRunTimesSize = inPacket.decodeInt();
            mai.hitPartRunTimes = new String[mai.hitPartRunTimesSize];
            for (int j = 0; j < mai.hitPartRunTimesSize; j++) {
                mai.hitPartRunTimes[j] = inPacket.decodeString();
            }
        } else if (mai.type == 2) {
            mai.currentAnimationName = inPacket.decodeString();
            mai.unkStr = inPacket.decodeString();
            mai.animationDeltaL = inPacket.decodeInt();
        }
        mai.packetMakerUnk1 = inPacket.decodeByte();
        mai.packetMakerRect = inPacket.decodeShortRect(); // I guess?
        inPacket.decodePosition(); // new 199
        mai.unk214 = inPacket.decodeByte(); // new 214
        inPacket.decodeInt(); // new 218
    }

    @Handler(op = InHeader.FAMILIAR_ATTACK)
    public static void handleFamiliarAttack(Char chr, InPacket inPacket) {
        AttackInfo ai = new AttackInfo();
        ai.sui = new SkillUseInfo();
        ai.attackHeader = OutHeader.FAMILIAR_INFO;
        ai.fieldKey = inPacket.decodeByte(); // ?
        ai.familiarId = inPacket.decodeInt();

        Familiar f = chr.getFamiliarCodexManager().getFamiliarByTemplateId(ai.familiarId);
        if (f == null || !Util.arrayContains(chr.getFamiliarCodexManager().getActiveFamiliars(), (int) f.getId()) || !chr.getFamiliarCodexManager().isFamiliarsSummoned()) {
            return;
        }
        ai.familiar = f;

        ai.mobCount = inPacket.decodeByte();
        ai.mobCount = 1;
        //ai.hits = inPacket.decodeByte();
        //ai.skillId = inPacket.decodeInt();
        ai.idk = inPacket.decodeByte();
        ai.slv = 1;
        for (int i = 0; i < ai.mobCount; i++) {
            MobAttackInfo mai = new MobAttackInfo();
            mai.mobId = inPacket.decodeInt();
            mai.hitAction = inPacket.decodeByte();
            mai.left = inPacket.decodeByte();
            mai.idk3 = inPacket.decodeByte();
            mai.forceActionAndLeft = inPacket.decodeByte();
            //mai.frameIdx = inPacket.decodeByte();
            //mai.templateID = inPacket.decodeInt();
            //mai.calcDamageStatIndexAndDoomed = inPacket.decodeByte(); // 1st bit for bDoomed, rest for calcDamageStatIndex
            //mai.hitX = inPacket.decodeShort();
            //mai.hitY = inPacket.decodeShort();
            inPacket.decodeByte();
            inPacket.decodeByte(); // ?
            inPacket.decodeByte();
            inPacket.decodeByte();
            ai.hits = 1;
            long[] damages = new long[ai.hits];
            for (int j = 0; j < ai.hits; j++) {
                damages[j] = inPacket.decodeLong(); // still an int :(      Not anymore :pog:
            }
            mai.damages = damages;
            ai.mobAttackInfo.add(mai);
        }
        handleAttack(chr.getClient(), ai);
        // 4 more bytes after this, not sure what it is
    }

}
