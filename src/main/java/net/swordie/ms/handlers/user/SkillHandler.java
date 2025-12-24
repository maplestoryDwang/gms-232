package net.swordie.ms.handlers.user;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.b2body.B2Body;
import net.swordie.ms.client.character.damage.DamageSkinSaveData;
import net.swordie.ms.client.character.damage.DamageSkinType;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.shootobject.ShootObject;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.adventurer.magician.FirePoison;
import net.swordie.ms.client.jobs.anima.HoYoung;
import net.swordie.ms.client.jobs.cygnus.NightWalker;
import net.swordie.ms.client.jobs.legend.Evan;
import net.swordie.ms.client.jobs.legend.Phantom;
import net.swordie.ms.client.jobs.resistance.BattleMage;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.VCoreData;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.loaders.containerclasses.VNodeInfo;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.ErrorLogger;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.Comparator.comparingDouble;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.KeyDownAreaMoving;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.KeyDownMoving;

public class SkillHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.USER_SKILL_CANCEL_REQUEST)
    public static void handleUserSkillCancelRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (inPacket.getUnreadAmount() == 0) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        int skillId = inPacket.decodeInt();

        if (SkillConstants.isKeyDownSkill(skillId)) {
            if (tsm.hasStat(CharacterTemporaryStat.IndieKeyDownTime)) {
                tsm.removeStat(CharacterTemporaryStat.IndieKeyDownTime);
            }

            chr.setKeyDownSkillInfo(null);
            chr.getJobHandler().handleCancelKeyDownSkill(chr, SkillConstants.getCorrectCooltimeSkillID(skillId));
            chr.getField().broadcastPacket(UserRemote.skillCancel(chr.getId(), skillId), chr);
            log.debug(String.format("Stop skill keydown  |  SkillId = %d", skillId));
        } else {
            if (skillId == net.swordie.ms.client.jobs.resistance.Mechanic.HUMANOID_MECH || skillId == net.swordie.ms.client.jobs.resistance.Mechanic.TANK_MECH) {
                tsm.removeStatsBySkill(skillId + 100); // because of special use
                tsm.sendResetStatPacket(true);
            } else {
                tsm.sendResetStatPacket();
            }
        }

        var removedOptions = tsm.removeStatsBySkill(skillId);

        chr.getJobHandler().handleSkillRemove(chr, skillId, removedOptions);
    }


    @Handler(op = InHeader.USER_FORCE_ATOM_COLLISION)
    public static void handleForceAtomCollision(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        int size = inPacket.decodeInt();
        int skillId = inPacket.decodeInt();
        int size2 = inPacket.decodeInt();

        for (int i = 0; i < size2; i++) {
            int skillId2 = inPacket.decodeInt();
            int forceAtomKey = inPacket.decodeInt();
            Position position = inPacket.decodePositionInt();
            chr.getJobHandler().handleGuidedForceAtomCollision(forceAtomKey, skillId2, position);
        }

        for (int i = 0; i < size; i++) {
            ForceAtomCollisionInfo faci = new ForceAtomCollisionInfo();
            faci.skillId = skillId;
            faci.forceAtomKey = inPacket.decodeInt();
            inPacket.decodeByte();
            faci.mobObjId = inPacket.decodeInt();
            faci.createTime = inPacket.decodeInt();
            faci.ownerId = inPacket.decodeInt(); // sometimes also the mobId (?)
            faci.position = inPacket.decodePositionInt();
            faci.success = inPacket.decodeByte() != 0;
            faci.skillId2 = inPacket.decodeInt(); // skill Id

            ForceAtom fa = chr.getForceAtomByKey(faci.forceAtomKey);
            if (fa == null) {
                return;
            }
            int forceAtomType = fa.getForceAtomEnum().getForceAtomType();

            if (skillId == BattleMage.GRIM_HARVEST) {
                faci.grimHarvestDurationExtension = inPacket.decodeInt();
            }

            if (skillId != DemonAvenger.NETHER_SHIELD_ATOM && skillId != Phantom.LUCK_OF_THE_DRAW_ATOM) {
                if ((skillId != NightWalker.SHADOW_BAT_FROM_MOB_ATOM || faci.success) && forceAtomType != 33) {
                    if (forceAtomType == 37 || forceAtomType == 38 || forceAtomType == 44 || forceAtomType == 45) {
                        faci.unk3 = inPacket.decodeInt();
                    } else if (forceAtomType == 32) { // BladeFall
                        faci.bladeFallSkillId = inPacket.decodeInt(); // SkillID
                        faci.bladeFallPosition = inPacket.decodePosition(); // Position
                        inPacket.decodeInt();
                        faci.bladeFallOption = inPacket.decodeInt(); // Option
                    }
                } else {
                    faci.ownerId2 = inPacket.decodeInt(); // ownerId
                    faci.position2 = inPacket.decodePositionInt(); // Position
                }
            } else {
                faci.ownerId2 = inPacket.decodeInt(); // ownerId
            }

            chr.getJobHandler().handleForceAtomCollision(fa, faci);
        }
    }


    @Handler(op = InHeader.USER_ACTIVATE_DAMAGE_SKIN)
    public static void handleUserActivateDamageSkin(Client c, InPacket inPacket) {
        int damageSkin = inPacket.decodeInt();

        Char chr = c.getChr();
        if (c.getAccount().hasDamageSkin(damageSkin) || damageSkin == 0) {
            chr.setDamageSkin(damageSkin);
        } else {
            chr.getOffenseManager().addOffense("Tried using not-owned damage skin " + damageSkin);
        }
    }

    @Handler(op = InHeader.USER_ACTIVATE_DAMAGE_SKIN_PREMIUM)
    public static void handleUserActivateDamageSkinPremium(Client c, InPacket inPacket) {
        int damageSkin = inPacket.decodeInt();

        Char chr = c.getChr();
        if (c.getAccount().hasDamageSkin(damageSkin) || damageSkin == 0) {
            chr.setPremiumDamageSkin(damageSkin);
        } else {
            chr.getOffenseManager().addOffense("Tried using not-owned damage skin " + damageSkin);
        }
    }


    @Handler(op = InHeader.USER_DAMAGE_SKIN_SAVE_REQUEST)
    public static void handleUserDamageSkinSaveRequest(Char chr, InPacket inPacket) {
        byte typeVal = inPacket.decodeByte();
        short skinId = inPacket.decodeShort();
        DamageSkinType dst = DamageSkinType.getByVal(typeVal);
        if (dst == null || dst.getVal() >= DamageSkinType.Res_Success.getVal()) {
            log.error("Unknown DamageSkinType " + dst);
            return;
        }
        DamageSkinSaveData curSkin = chr.getDamageSkin();
        Account acc = chr.getAccount();
        QuestManager qm = chr.getQuestManager();
        DamageSkinSaveData dssd = acc.getDamageSkinBySkinID(skinId);
        if (dssd == null) {
            chr.write(UserLocal.damageSkinSaveResult(dst, DamageSkinType.Res_Fail_Unknown, chr));
            return;
        }
        switch (dst) {
            case Req_Remove:
                acc.removeDamageSkin(dssd);
                chr.write(UserLocal.damageSkinSaveResult(dst, DamageSkinType.Res_Success, chr));
                break;
            case Req_Active:
                if (curSkin != null && dssd.getDamageSkinID() == curSkin.getDamageSkinID()) {
                    chr.write(UserLocal.damageSkinSaveResult(dst, DamageSkinType.Res_Fail_AlreadyActive, chr));
                    return;
                }
                chr.setDamageSkin(dssd);
                chr.write(UserLocal.damageSkinSaveResult(dst, DamageSkinType.Res_Success, chr));

                Quest q = qm.getQuestById(QuestConstants.DAMAGE_SKIN);
                if (q == null) {
                    q = QuestData.createQuestFromId(QuestConstants.DAMAGE_SKIN);
                    qm.addQuest(q);
                }
                q.setQrValue(dssd.getDamageSkinID() + "");
                chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
                break;
        }
    }

    @Handler(op = InHeader.USER_CREATE_AURA_BY_GRENADE)
    public static void handleUserCreateAuraByGrenade(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        int objID = inPacket.decodeInt();
        int skillID = inPacket.decodeInt();
        int skillID2 = SkillConstants.getActualSkillIDfromSkillID(skillID);
        if (!chr.hasSkill(skillID) && !chr.hasSkill(skillID2)) {
            chr.getOffenseManager().addOffense("Tried creating an aura by grenade with unavailable skill.", 0, skillID);
            return;
        }
        Position position = inPacket.decodePosition();
        byte isLeft = inPacket.decodeByte();
        SkillInfo fci = SkillData.getSkillInfoById(skillID);
        int slv = chr.getSkill(skillID2).getCurrentLevel();
        AffectedArea aa = AffectedArea.getPassiveAA(chr, skillID, slv);
        aa.setPosition(position);
        aa.setSkillID(skillID);
        aa.setSlv(slv);
        aa.setRect(aa.getPosition().getRectAround(fci.getFirstRect()));
        aa.setDuration(3000 * SkillChangeConstants.ADVANCED_TILES_DURATION_MULTIPLIER); // [Zero] Custom Skill Change
        chr.getField().spawnAffectedArea(aa);
    }


    // Skill refactor
/*
    public static void handleUserSkillUseRequest2(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        SkillUseInfo sui = new SkillUseInfo();

        if (GameConstants.getMaplerunnerField(field.getId()) == -1
                && ((field.getFieldLimit() & FieldOption.SkillLimit.getVal()) > 0
                || (field.getFieldLimit() & FieldOption.MoveSkillOnly.getVal()) > 0)) {
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); // get_update_time
        int skillID = inPacket.decodeInt();
        if (JobConstants.isZero(chr.getJob())) {
            inPacket.decodeByte(); // COutPacket::Encode1((COutPacket *)&v74, 0); :thinking:
        }
        int slv = inPacket.decodeInt();
        new ProcessType().decode(inPacket); // Not using anything from Process type as of now
        int option = inPacket.decodeInt();
        if (((option >> 4) & 1) != 0) {
            inPacket.decodeShort();
            inPacket.decodeShort();
        }

        // DoActiveSkill_Summon
        if (SkillConstants.isSummon(skillID)) {
            if (skillID == 35111002) {
                sui.rockNshockSize = inPacket.decodeByte();
                if (sui.rockNshockSize == 2) {
                    for (int i = 0; i < 2; i++) {
                        sui.rockNshockLifes[i] = inPacket.decodeInt();
                    }
                }
            }
            sui.position = inPacket.decodePosition();
            sui.isLeft = inPacket.decodeByte() != 0;
            inPacket.decodeByte(); // unk
            inPacket.decodeByte(); // hardcoded 0 (?)
        }

        // DoActiveSkill_TownPortal
        else if (skillID == Bishop.MYSTIC_DOOR || skillID == Job.DECENT_MYSTIC_DOOR_V || skillID == BeastTamer.EKA_EXPRESS) {
            sui.position = inPacket.decodePosition();
            inPacket.decodeByte(); // unk

        


        // SendSkillUseRequest
        } else {
            if (SkillConstants.isAntiRepeatBuff(skillID) || SkillConstants.someUpgradeSkillCheck(skillID)) {
                sui.position = inPacket.decodePosition(); // chrPos
            }
            if (SkillConstants.isNoProjectileConsumptionSkill(skillID)) {
                sui.projectileItemId = inPacket.decodeInt();
            }
            // Affected Areas
            if (skillID == 100001261        // Time Distortion
                    || skillID == 80001408    // No-Name Skill
                    || skillID == 25111206    // Spirit Trap
                    || skillID == 12121005    // Burning Conduit
                    || skillID == 21121068    // Maha's Domain
                    || skillID == 37110002    // Hammer Smash
                    || skillID == 80001839    // Bellflower Barrier
                    || skillID == 80001840    // Blossom Barrier
                    || skillID == 25111012    // Spirit Frenzy
                    || skillID == 25121055    // Spirit Incarnation
                    || skillID == 400020051    // Ludicrous Speed
                    || skillID == 400021039    // Champ Charge
                    || skillID == 33121016    // Drill Salvo
                    || skillID == 33111013    // Hunting Assistant Unit
                    || skillID == 131001107    // Posie
                    || skillID == 131001207    // Breezy
                    || skillID == 51120057    // Radiant Cross - Spread
                    || skillID == 400031012    // Primal Fury
                    || skillID == 400001017    // Pirate's Banner
                    || (skillID == 400021041 || skillID > 400021048 && skillID <= 400021050)) {
                sui.position = inPacket.decodePosition();
            } else {
                if (skillID != 400020046) {
                    if (skillID == 152121041) {
                        sui.position = inPacket.decodePosition();
                    }
                    // if (a4) {
                    if (skillID == Paladin.GUARDIAN || skillID == Bishop.DISPEL || skillID == BeastTamer.MEOW_CURE) {

                        if (skillID == Paladin.GUARDIAN) {   // Guardian (Pally Revive)
                            inPacket.decodeInt(); // Resurrected Character?
                        }
                        if (skillID == Bishop.DISPEL || skillID == BeastTamer.MEOW_CURE) {
                            inPacket.decodeShort();
                            inPacket.decodeByte();
                        }
                    }
                    // }

                    // if (a5) {

                    // }
                }
            }
        }
    }
*/


    @Handler(op = InHeader.USER_SKILL_USE_REQUEST)
    public static void handleUserSkillUseRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        Field field = chr.getField();
        if (GameConstants.getMaplerunnerField(field.getId()) == -1 && !FieldConstants.isBypassFieldLimitCheckField(field.getId())
                && ((field.getInfo().getFieldLimit() & FieldOption.SkillLimit.getVal()) > 0
                || (field.getInfo().getFieldLimit() & FieldOption.MoveSkillOnly.getVal()) > 0)) {
            chr.dispose();
            return;
        }
        SkillUseInfo skillUseInfo = new SkillUseInfo();
        inPacket.decodeInt(); // crc
        int skillID = inPacket.decodeInt();
        if (SkillConstants.isZeroSkill(skillID)) {
            inPacket.decodeByte(); // unk
        }
        int slv = inPacket.decodeInt();
        skillUseInfo.skillID = skillID;
        skillUseInfo.slv = slv;
        new UserSkillUseInfo(skillUseInfo).decode(inPacket);
        // new sub 232
        inPacket.decodeByte();
        inPacket.decodeShort();
        // ~sub
        int option = inPacket.decodeInt();
        if (((option >>> 4) & 1) != 0) {
            inPacket.decodeShort();
            inPacket.decodeShort();
        }
        skillUseInfo.byUnreliableMemory = option == 1824;
        if (chr.checkAndSetSkillCooltime(skillID, new AttackInfo(), skillUseInfo, SkillUseSource.SkillUseRequest) // Check Cooldown and Set Cooldown
                && chr.applyMpCon(skillID, slv, new AttackInfo(), skillUseInfo, SkillUseSource.SkillUseRequest) // Check MP and Apply MP Consumption
        ) {
            if (!SkillConstants.isNoEncodeSkillEffect(skillID)) {
                Effect effect = Effect.skillUse(skillID, chr.getLevel(), slv, 0);
                effect.setSkillUseInfo(skillUseInfo);
                chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);
                Char copy = chr.getCopy();
                if (copy != null) {
                    chr.write(UserRemote.effect(copy.getId(), effect));
                }
            }
            log.debug("SkillID: " + skillID);
            c.getChr().chatMessage(ChatType.Mob, "SkillID: " + skillID);
            Job sourceJobHandler = c.getChr().getJobHandler();
            if (sourceJobHandler == null) {
                ErrorLogger.logAsClientError(String.format("Unknown Job Handler for character %d with jobId %d", chr.getId(), chr.getJob()));
            }
            SkillInfo si = SkillData.getSkillInfoById(skillID);
            if (chr.getParty() != null
                    && si != null
                    && (SkillConstants.isMassSpellSkill(skillID)
                    && si.getRects().size() > 0)
            ) {
                Rect r = si.getFirstRect();
                if (r != null) {
                    Rect rectAround = chr.getRectAround(r);
                    for (PartyMember pm : chr.getParty().getOnlineMembers()) {
                        if (pm.getChr() != null
                                && chr.isInSameField(pm.getChr())
                                && rectAround.hasPositionInside(pm.getChr().getPosition())) {
                            Char ptChr = pm.getChr();
                            Effect effect = Effect.skillAffected(skillID, slv, 0);
                            if (ptChr != chr) { // Caster shouldn't get the Affected Skill Effect
                                chr.getField().broadcastPacket(
                                        UserRemote.effect(ptChr.getId(), effect), ptChr);
                                ptChr.write(UserPacket.effect(effect));
                            }
                            sourceJobHandler.handleSkill(chr, ptChr.getTemporaryStatManager(), skillID, slv, inPacket, skillUseInfo);
                        }
                    }
                }
            } else {
                sourceJobHandler.handleSkill(chr, chr.getTemporaryStatManager(), skillID, slv, inPacket, skillUseInfo);
            }
        }
        if (!SkillConstants.isNoDisposeSkill(skillID)) {
            chr.dispose();
        }
    }

    @Handler(op = InHeader.SET_SON_OF_LINKED_SKILL_REQUEST)
    public static void handleSetSonOfLinkedSkillRequest(Char chr, InPacket inPacket) {
        int skillID = inPacket.decodeInt();
        int sonID = inPacket.decodeInt();
        short jobID = chr.getJob();
        Account acc = chr.getAccount();
        Char son = acc.getCharacters().stream().filter(c -> c.getId() == sonID).findAny().orElse(null);
        // remove old link skill if another with the same skill exists
        acc.getLinkSkills().stream()
                .filter(ls -> SkillConstants.getOriginalOfLinkedSkill(ls.getLinkSkillID()) == skillID)
                .findAny()
                .ifPresent(oldLinkSkill -> acc.removeLinkSkillByOwnerID(oldLinkSkill.getUsingID()));
        // if the skill is not null and we expect this link skill id from the given job
        int linkSkillID = SkillConstants.getLinkSkillByJob(jobID);
        if (son != null && SkillConstants.getOriginalOfLinkedSkill(linkSkillID) == skillID) {
            acc.addLinkSkill(chr, sonID, linkSkillID);
            chr.write(WvsContext.setSonOfLinkedSkillResult(LinkedSkillResultType.SetSonOfLinkedSkillResult_Success,
                    son.getId(), son.getName(), skillID, null));
        } else {
            chr.write(WvsContext.setSonOfLinkedSkillResult(LinkedSkillResultType.SetSonOfLinkedSkillResult_Fail_Unknown,
                    0, null, 0, null));
        }
    }

    @Handler(op = InHeader.USER_THROW_GRENADE)
    public static void handleUserThrowGrenade(Char chr, InPacket inPacket) {
        SkillUseInfo skillUseInfo = new SkillUseInfo();

        Position pos = inPacket.decodePositionInt();
        Position pos2 = inPacket.decodePositionInt();
        int keyDown = inPacket.decodeInt();
        int skillID = inPacket.decodeInt();
        int bySummonedID = inPacket.decodeInt(); // slv according to ida, but let's just take that server side
        boolean left = inPacket.decodeByte() != 0;
        int attackSpeed = inPacket.decodeInt();
        int grenadeID = inPacket.decodeInt();
        Skill skill = chr.getSkill(SkillConstants.getLinkedSkill(skillID));
        int slv = skill == null ? 0 : skill.getCurrentLevel();
        SkillInfo actualSkillIdSI = SkillData.getSkillInfoById(SkillConstants.getActualSkillIDfromSkillID(skillID));

        if (chr.checkAndSetSkillCooltime(skillID, new AttackInfo(),skillUseInfo, SkillUseSource.ThrowGrenadeRequest) // Check Cooldown and Set Cooldown
                && chr.applyMpCon(skillID, slv, new AttackInfo(), skillUseInfo, SkillUseSource.ThrowGrenadeRequest) // Check MP and Apply MP Consumption
        ) {
            chr.getField().broadcastPacket(UserRemote.throwGrenade(chr.getId(), grenadeID, pos, keyDown, skillID,
                    bySummonedID, slv, left, attackSpeed), chr);
            Job jobHandler = chr.getJobHandler();
            jobHandler.handleSkill(chr, chr.getTemporaryStatManager(), skillID, (byte) slv, inPacket, skillUseInfo);
        }

        var copy = chr.getCopy();
        if (copy != null) {
            chr.write(UserRemote.throwGrenade(copy.getId(), Util.getRandom(10000), pos, keyDown, skillID,
                    bySummonedID, slv, left, attackSpeed));
        }
    }

    @Handler(op = InHeader.USER_DESTROY_GRENADE)
    public static void handleUserDestroyGrenade(Char chr, InPacket inPacket) {
        int grenadeID = inPacket.decodeInt();
        byte unk = inPacket.decodeByte();
        int skillID = inPacket.decodeInt();
        chr.getField().broadcastPacket(UserRemote.destroyGrenade(chr.getId(), grenadeID), chr);
    }

    @Handler(op = InHeader.USER_B2_BODY_REQUEST)
    public static void handleB2BodyRequest(Char chr, InPacket inPacket) { // TODO  turn the 'friction' switch off, once I find it..
        short requestType = inPacket.decodeShort();
        int chrId = inPacket.decodeInt();

        switch (requestType) {
            case 0:
                byte unk1 = inPacket.decodeByte();
                int b2BodyId = inPacket.decodeInt();
                byte type = inPacket.decodeByte();
                Position position = inPacket.decodePosition();
                short nRadius = 0;
                short fRadius = 0;
                if (type == 5) {
                    nRadius = inPacket.decodeShort();
                    fRadius = inPacket.decodeShort();
                }
                short scale = inPacket.decodeShort();
                int skillId = inPacket.decodeInt();
                int slv = inPacket.decodeShort();
                short unk2 = inPacket.decodeShort(); // 0 encoded
                int duration = inPacket.decodeInt(); // in MS
                short unk3 = inPacket.decodeShort(); // 10 encoded

                B2Body b2Body = new B2Body(chr, b2BodyId, type, position, nRadius, fRadius, scale, skillId, slv, duration);
                chr.write(UserLocal.b2BodyResult(requestType, b2Body));
                chr.write(UserLocal.b2BodyResultNew(requestType, b2Body));
                break;
            case 3:
                b2BodyId = inPacket.decodeInt();
                skillId = inPacket.decodeInt();
                slv = inPacket.decodeInt();
                int maxSpeedX = inPacket.decodeInt();
                int maxSpeedY = inPacket.decodeInt();
                b2Body = new B2Body(chr, b2BodyId, skillId, slv, maxSpeedX, maxSpeedY);
                chr.write(UserLocal.b2BodyResult(requestType, b2Body));
                break;
            case 4:
                b2BodyId = inPacket.decodeInt();
                position = inPacket.decodePosition();
                skillId = inPacket.decodeInt();
                boolean left = inPacket.decodeByte() != 0;
                unk1 = inPacket.decodeByte(); // 0 encoded
                slv = inPacket.decodeShort();
                unk2 = inPacket.decodeShort(); // 0 encoded
                unk3 = inPacket.decodeShort(); // 10 encoded
                maxSpeedX = inPacket.decodeInt();
                maxSpeedY = inPacket.decodeInt();
                b2Body = new B2Body(chr, b2BodyId, skillId, slv, maxSpeedX, maxSpeedY);
                b2Body.setPosition(position);
                chr.write(UserLocal.b2BodyResultNew(requestType, b2Body));
                break;
            case 5:
                // Lotus Bouncing Ball Leaving sends  B2BodyRequest type 5
                //
                break;
            default:
                log.error(String.format("Unhandled B2Body Request Type: %d", requestType));
                chr.chatMessage(String.format("Unhandled B2Body Request Type: %d", requestType));
                break;
        }
    }

    @Handler(op = InHeader.USER_SKILL_PREPARE_START)
    public static void handleUserSkillPrepareStart(Char chr, InPacket inPacket) {
        SkillUseInfo sui = new SkillUseInfo();
        int skillID = inPacket.decodeInt();
        sui.skillID = skillID;
        sui.slv = inPacket.decodeInt();

        new UserSkillUseInfo(sui).decode(inPacket);
        short attackActionAndLeft = inPacket.decodeShort();
        sui.isLeft = ((attackActionAndLeft >>> 15) & 1) != 0;
        sui.attackAction = (short) (attackActionAndLeft & 0x7FFF);
        sui.attackSpeed = inPacket.decodeByte();
        sui.attackActionType = inPacket.decodeByte(); // 0
        if (SkillConstants.isSentientArrowOrTornadoFlight(skillID)) {
            sui.position = inPacket.decodePosition();
        }
        int curTime = inPacket.decodeInt();
        if (skillID == NightWalker.SHADOW_STITCH) {
            sui.position = inPacket.decodePosition();
        }

        if (SkillConstants.isKeyDownSkill(skillID)) {
            log.debug(String.format("Start skill prepare  |  SkillId = %d", skillID));

            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o1 = new Option();
            if (skillID == Evan.DRAGON_MASTER_2) {
                o1.nOption = 100; // speed change
                o1.rOption = skillID;
                tsm.putCharacterStatValue(KeyDownMoving, o1);
            } else if (SkillConstants.isKeydownAreaMovingSkill(skillID)) {
                o1.nOption = 16;
                o1.rOption = skillID;
                tsm.putCharacterStatValue(KeyDownAreaMoving, o1);
            }
            tsm.sendSetStatPacket();

            chr.getJobHandler().handleKeyDownSkill(chr, skillID, inPacket);
            KeyDownSkillInfo kdsi = KeyDownSkillInfo.getBy(sui.skillID, sui.slv, sui.isLeft, sui.attackAction, sui.attackSpeed, chr.getPosition());
            chr.setKeyDownSkillInfo(kdsi);
            chr.getField().broadcastPacket(UserRemote.skillPrepare(chr, kdsi), chr);
            if (chr.getCopy() != null) {
                chr.write(UserRemote.skillPrepare(chr.getCopy(), kdsi));
            }
        } else {
            chr.getJobHandler().handleSkillPrepareStart(chr, skillID, sui);
        }
    }

    @Handler(ops = {InHeader.USER_SKILL_PREPARE_STOP})
    public static void handleUserSkillPrepareStop(Char chr, InPacket inPacket, InHeader header) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Field field = chr.getField();
        if (!FieldConstants.isBypassFieldLimitCheckField(field.getId()) && (field.getInfo().getFieldLimit() & FieldOption.SkillLimit.getVal()) > 0
                || (field.getInfo().getFieldLimit() & FieldOption.MoveSkillOnly.getVal()) > 0) {
            chr.dispose();
            return;
        }
        int skillId = inPacket.decodeInt();
        boolean bool = inPacket.decodeByte() != 0; // unk

        if (skillId == HoYoung.DREAM_GARDEN && chr.hasSkillOnCooldown(HoYoung.DREAM_GARDEN)) {
            return;
        }

        if (SkillConstants.isKeyDownSkill(skillId)) {
            chr.setKeyDownSkillInfo(null);
            chr.getJobHandler().handleCancelKeyDownSkill(chr, SkillConstants.getCorrectCooltimeSkillID(skillId));
            chr.getField().broadcastPacket(UserRemote.skillCancel(chr.getId(), skillId), chr);
            log.debug(String.format("Stop skill keydown  |  SkillId = %d", skillId));
        }

        chr.getJobHandler().handleSkillPrepareStop(chr, skillId, new SkillUseInfo());
    }

    @Handler(op = InHeader.USER_SKILL_KEYDOWN_STOP)
    public static void handleUserSkillKeydownStop(Char chr, InPacket inPacket) {
    }

    @Handler(op = InHeader.USER_KEY_DOWN_AREA_MOVING)
    public static void handleUserKeyDownAreaMoving(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        List<Byte> movePaths = new ArrayList<>();
        int length = inPacket.decodeByte();
        for (int i = 0; i < length; i++) {
            movePaths.add(inPacket.decodeByte());
        }

        field.broadcastPacket(UserRemote.keyDownAreaMovingPath(chr, movePaths), chr);
    }

    @Handler(op = InHeader.MATRIX_UPDATE_REQUEST)
    public static void handleMatrixUpdateRequest(Char chr, InPacket inPacket) {
        List<MatrixRecord> mrs = chr.getSortedMatrixRecords();
        int typeVal = inPacket.decodeInt();
        MatrixUpdateRequest type = MatrixUpdateRequest.getByVal(typeVal);
        if (type == null) {
            log.error(String.format("Unknown matrix update request type %d", typeVal));
            return;
        }
        switch (type) {
            case Activate: //
                int nodeId = inPacket.decodeInt();
                int otherNodeId = inPacket.decodeInt(); // if there's a node already on the Position
                int otherNodeId_toPos = inPacket.decodeInt(); // toPosition of the nodeID that will be force moved
                int pos = inPacket.decodeInt();
                boolean byDrag = inPacket.decodeByte() != 0; // by Dragging Node with the Cursor
                if (nodeId >= mrs.size() || pos >= chr.getMaxMatrixSlots()) {
                    return;
                }
                if (!byDrag && pos < 0) {
                    pos = chr.getFirstOpenMatrixSlot(); // Check  Locked Slots
                }
                if (pos == -1337) {
                    chr.chatMessage("You have no empty node slots.");
                    return;
                }
                MatrixRecord mr = mrs.get(nodeId);
                if (!mr.isActive()) {
                    // Check if new position is filled by another Node.
                    if (otherNodeId >= 0) {
                        MatrixRecord oldMR = mrs.get(otherNodeId);
                        if (oldMR != null) {
                            if (otherNodeId_toPos < 0) {
                                oldMR.addSkillsToChar(chr, true);
                            }
                            oldMR.setPosition(otherNodeId_toPos);
                        }
                    }

                    mr.activate(chr, pos);
                    chr.write(WvsContext.matrixUpdate(chr, true, typeVal, nodeId));
                }
                break;
            case Deactivate: //
                nodeId = inPacket.decodeInt();
                pos = inPacket.decodeInt();
                if (nodeId >= 0 && nodeId < mrs.size()) {
                    mr = mrs.get(nodeId);
                    if (mr.isActive()) {
                        mr.addSkillsToChar(chr, true);
                        mr.setPosition(pos);
                        chr.write(WvsContext.matrixUpdate(chr, true, typeVal, nodeId));
                    }
                }
                break;
            case Enhance: //
                int upgradePos = inPacket.decodeInt();
                int size = inPacket.decodeInt();
                mr = mrs.get(upgradePos);
                Set<MatrixRecord> removeMrs = new HashSet<>();
                for (int i = 0; i < size; i++) {
                    pos = inPacket.decodeInt();
                    if (pos >= 0 && pos < mrs.size()) {
                        MatrixRecord mr2 = mrs.get(pos);
                        if (!mr2.isActive() && mr2.getIconID() == mr.getIconID()) {
                            removeMrs.add(mr2);
                        }
                    }
                }
                int exp = 0;
                int oldSlv = mr.getSlv();
                removeMrs.forEach(chr::removeMatrixRecord);
                for (MatrixRecord removeMr : removeMrs) {
                    exp += VCoreData.getNodeInfo(removeMr).getExpEnforce();
                }
                mr.setExp(mr.getExp() + exp);
                VNodeInfo vni = VCoreData.getNodeInfo(mr);
                if (mr.isActive()) {
                    mr.addSkillsToChar(chr, true);
                }
                while (mr.getExp() >= vni.getNextExp() && mr.getSlv() < mr.getMaxLevel()) {
                    mr.setExp(mr.getExp() - vni.getNextExp());
                    mr.setSlv(Math.min(mr.getMaxLevel(), mr.getSlv() + 1));
                    vni = VCoreData.getNodeInfo(mr);
                }
                if (mr.isActive()) {
                    mr.addSkillsToChar(chr, false);
                }
                chr.write(WvsContext.nodeEnhanceResult(upgradePos, exp, oldSlv, mr.getSlv()));
                chr.write(WvsContext.matrixUpdate(chr, true, typeVal, -1));
                break;
            case Disassemble: //
                pos = inPacket.decodeInt();
                if (pos >= 0 && pos < mrs.size()) {
                    mr = mrs.get(pos);
                    if (!mr.isActive() || !mr.isLocked()) {
                        int shards = VCoreData.getNodeInfo(mr).getExtract();
                        chr.addNodeShards(shards);
                        chr.removeMatrixRecord(mr);
                        chr.write(WvsContext.nodeDisassembleResult(shards));
                        chr.write(WvsContext.matrixUpdate(chr, true, typeVal, -1));
                    } else {
                        chr.chatMessage("Cannot disassemble a node that is inactive or locked.");
                    }
                }
                break;
            case DisassembleGroup: //
                size = inPacket.decodeInt();
                removeMrs = new HashSet<>();
                int shards = 0;
                for (int i = 0; i < size; i++) {
                    pos = inPacket.decodeInt();
                    if (pos >= 0 && pos < mrs.size()) {
                        mr = mrs.get(pos);
                        if (!mr.isActive() && !mr.isLocked()) {
                            removeMrs.add(mr);
                            shards += VCoreData.getNodeInfo(mr).getExtract();
                        }
                    }
                }
                chr.addNodeShards(shards);
                removeMrs.forEach(chr::removeMatrixRecord);
                chr.write(WvsContext.nodeDisassembleResult(shards));
                chr.write(WvsContext.matrixUpdate(chr, true, typeVal, 0));
                break;
            case CraftNode: //
                int iconID = inPacket.decodeInt();
                int quantity = inPacket.decodeInt();
                if (quantity < 1 || quantity > 99) {
                    chr.boxMessage("Invalid quantity.");
                    return;
                }
                int shardCost = GameConstants.getNodeCreateShardCost(iconID) * quantity;
                List<VCoreInfo> infos = new ArrayList<>(VCoreData.getPossibilitiesByJob(chr.getJob()));
                VCoreInfo vci = Util.findWithPred(infos, v -> v.getIconID() == iconID);
                infos.remove(Util.findWithPred(infos, v -> v.getIconID() == vci.getIconID()));
                if (vci == null) {
                    chr.boxMessage("Use a node from your own job.");
                    return;
                }
                if (shardCost > chr.getNodeShards()) {
                    chr.boxMessage("You don't have enough node shards.");
                    return;
                }
                mr = null;
                for (int i = 0; i < quantity; i++) {
                    infos = new ArrayList<>(VCoreData.getPossibilitiesByJob(chr.getJob()));
                    infos.remove(Util.findWithPred(infos, v -> v.getIconID() == vci.getIconID()));

                    mr = new MatrixRecord(chr);
                    mr.setIconID(vci.getIconID());
                    mr.setMaxLevel(vci.getMaxLevel());
                    mr.setSkillID1(vci.getSkillID());
                    mr.setSlv(1);
                    if (vci.isEnforce()) {
                        for (int j = 0; j < 2; j++) {
                            VCoreInfo randVci = Util.getRandomFromCollection(infos.stream().filter(VCoreInfo::isEnforce).collect(Collectors.toList()));
                            infos.remove(randVci);
                            switch (j) {
                                case 0:
                                    mr.setSkillID2(randVci.getSkillID());
                                    break;
                                case 1:
                                    mr.setSkillID3(randVci.getSkillID());
                                    break;
                            }
                        }
                    }
                    chr.addMatrixRecord(mr);
                }
                chr.addNodeShards(-shardCost);
                chr.write(WvsContext.nodeCraftResult(mr, quantity));
                chr.write(WvsContext.matrixUpdate(chr, true, typeVal, 0));
                break;
            case Swap: //
                int switcherId = inPacket.decodeInt(); // the main node that is dragged
                int switchedId = inPacket.decodeInt(); // one that is automatically swapped as well
                int fromPos = inPacket.decodeInt();
                int toPos = inPacket.decodeInt();

                if (switcherId >= 0 && switcherId < mrs.size() && toPos < chr.getMaxMatrixSlots()) {
                    mr = mrs.get(switcherId);
                    mr.addSkillsToChar(chr, true); // remove Skill
                    mr.setPosition(toPos);
                    mr.addSkillsToChar(chr, false); // add Skill
                    if (switchedId >= 0 && switchedId < mrs.size()) {
                        MatrixRecord otherMr = mrs.get(switchedId);
                        otherMr.addSkillsToChar(chr, true); // remove Skill
                        otherMr.setPosition(fromPos);
                        otherMr.addSkillsToChar(chr, false); // add Skill
                    }
                    chr.write(WvsContext.matrixUpdate(chr, true, typeVal, switcherId));
                }
                break;

            case EnhanceSlot: //
                int slotPos = inPacket.decodeInt();
                inPacket.decodeInt(); // -1
                if ((slotPos >= 0 && slotPos < GameConstants.MAX_NODE_SLOTS) && (chr.getAvailableMatrixPoints() > 0)) {
                    MatrixSlot ms = chr.getMatrixSlotByPosition(slotPos);
                    mr = chr.getMatrixRecordByPosition(slotPos);
                    if (ms != null) {
                        if (mr != null) {
                            mr.addSkillsToChar(chr, true); // remove Skill
                        }
                        ms.setEnhancementLv(Math.min(ms.getEnhancementLv() + 1, 5));
                        if (mr != null) {
                            mr.addSkillsToChar(chr, false); // add Skill
                        }
                    }
                }
                chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
                break;
            case EnhanceReset: //
                int cost = 1000000;
                if (chr.getMoney() >= cost) {
                    chr.resetMatrixSlotEnhancements();
                    chr.deductMoney(cost);
                }
                chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
                break;
            case ExpandSlot:
                slotPos = inPacket.decodeInt();
                inPacket.decodeInt(); // -1

                int nReqLevel = 200 + ((slotPos - 4) * 5);
                int nLevelGap = nReqLevel - chr.getLevel();
                long mesoCost = VCoreData.getMesoCost(chr.getLevel(), nLevelGap <= 5 ? 0 : 1);

                if (chr.getMoney() >= mesoCost) {
                    MatrixSlot ms = chr.getMatrixSlotByPosition(slotPos);
                    if (ms != null && !ms.isUnlockedByPurchase()) {
                        ms.setUnlockedByPurchase(true);
                    }
                    chr.deductMoney(mesoCost);
                    chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
                }
                break;

            case LockRecord:
            case UnlockRecord:
                var recordId = inPacket.decodeInt();
                if (recordId < 0 || recordId >= mrs.size()) {
                    chr.chatMessage("Could not find that node.");
                    chr.write(WvsContext.exclRequest());
                    return;
                }

                var record = mrs.get(recordId);
                record.setLocked(!record.isLocked());
                chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
                break;
            default:
                log.error(String.format("Unhandled matrix update request type %s", type));
        }
    }

    @Handler(op = InHeader.MATRIX_CRAFT_NODESTONE_REQUEST)
    public static void handleMatrixCraftNodestoneRequest(Char chr, InPacket inPacket) {
        Npc npc = (Npc) chr.getField().getLifeByTemplateId(1540945); // Archelle
        chr.getScriptManager().startScript(npc.getTemplateId(), npc.getObjectId(), "craft_nodestone", ScriptType.Npc);
    }

    @Handler(op = InHeader.SHOOT_OBJECT_CREATE_REQUEST)
    public static void handleShootObjectCreateRequest(Char chr, InPacket inPacket) {
        SkillUseInfo skillUseInfo = new SkillUseInfo();

        ShootObjectSkillInfo shootObjectSkillInfo = new ShootObjectSkillInfo(chr);

        shootObjectSkillInfo.setSkillId(inPacket.decodeInt());
        shootObjectSkillInfo.setSlv(inPacket.decodeInt());

        skillUseInfo.skillID = shootObjectSkillInfo.getSkillId();
        skillUseInfo.slv = shootObjectSkillInfo.getSlv();
        new UserSkillUseInfo(skillUseInfo).decode(inPacket);

        shootObjectSkillInfo.setAction(inPacket.decodeInt()); // action
        shootObjectSkillInfo.setActionSpeed(inPacket.decodeInt()); // action Speed
        shootObjectSkillInfo.setProjectileItemId(inPacket.decodeInt());
        shootObjectSkillInfo.setProjectileItemPosition(inPacket.decodeInt());
        byte unk3 = inPacket.decodeByte();
        byte unk4 = inPacket.decodeByte();
        int unk5 = inPacket.decodeInt();
        shootObjectSkillInfo.setPosition(inPacket.decodePosition());

        shootObjectSkillInfo.setEncodeExtra(inPacket.decodeByte() != 0);
        if (shootObjectSkillInfo.isEncodeExtra()) {
            shootObjectSkillInfo.extraEncodeInt1 = inPacket.decodeInt();
            shootObjectSkillInfo.extraEncodeInt2 = inPacket.decodeInt();
            shootObjectSkillInfo.extraEncodeInt3 = inPacket.decodeInt();
            shootObjectSkillInfo.extraEncodeInt4 = inPacket.decodeInt();
            shootObjectSkillInfo.extraEncodeInt5 = inPacket.decodeInt();
            shootObjectSkillInfo.extraEncodeByte = inPacket.decodeByte();
            shootObjectSkillInfo.extraEncodeInt6 = inPacket.decodeInt();
        }

        int loopSize = inPacket.decodeInt();
        for (int i = 0; i < loopSize; i++) {
            ShootObject shootObject = new ShootObject(chr, inPacket);
            shootObjectSkillInfo.getShootObjects().add(shootObject);
        }

        if (chr.checkAndSetSkillCooltime(skillUseInfo.skillID, new AttackInfo(), skillUseInfo, SkillUseSource.ShootObjCreateRequest) // Check Cooldown and Set Cooldown
                && chr.applyMpCon(skillUseInfo.skillID, skillUseInfo.slv, new AttackInfo(), skillUseInfo,SkillUseSource.ShootObjCreateRequest) // Check MP and Apply MP Consumption
        ) {
            Job jobHandler = chr.getJobHandler();
            jobHandler.handleShootObj(chr, shootObjectSkillInfo);

            chr.write(UserLocal.shootObjectCreated(shootObjectSkillInfo));
            chr.getField().broadcastPacket(UserRemote.shootObject(shootObjectSkillInfo), chr);
            if (chr.getCopy() != null) {
                shootObjectSkillInfo.setChr(chr.getCopy());
                chr.write(UserRemote.shootObject(shootObjectSkillInfo));
            }
        }
    }

    @Handler(op = InHeader.MAKING_SKILL_REQUEST)
    public static void handleMakingSkillRequest(Char chr, InPacket inPacket) {
        var typeVal = inPacket.decodeInt();
        if (typeVal > MakingSkillType.Fuse.getVal()) {
            chr.chatMessage("Unknown profession request.");
            return;
        }

        var type = MakingSkillRequestType.values()[typeVal];
        switch (type) {
            case MakeRecipe:
                int recipeID = inPacket.decodeInt();
                SkillHandlerModule.handleMakeRecipe(chr, recipeID);
                break;
            case Extract:
                inPacket.decodeInt();
                int size = inPacket.decodeInt();
                var makingSkillItems = new ArrayList<MakingSkillItem>();

                for (int i = 0; i < size; i++) {
                    var makingSkillItem = new MakingSkillItem();
                    makingSkillItem.setRecipeId(inPacket.decodeInt());
                    makingSkillItem.setItemId(inPacket.decodeInt());
                    makingSkillItem.setIdk1(inPacket.decodeInt());
                    makingSkillItem.setIdk2(inPacket.decodeInt());
                    makingSkillItem.setIdk3(inPacket.decodeInt());
                    makingSkillItem.setItemPos(inPacket.decodeInt());

                    SkillHandlerModule.extractItem(chr, makingSkillItem.getItemId(), makingSkillItem.getItemPos());
                    makingSkillItems.add(makingSkillItem);
                }

                chr.getField().broadcastPacket(FieldPacket.makingSkillResult(chr.getId(),
                        92049000,
                        MakingSkillType.Extraction,
                        MakingSkillType.Success_Cool,
                        makingSkillItems,
                        null,
                        0
                ));
                break;
            default:
                log.error("Unhandled MakingSkillRequestType " + type);
                break;
        }
    }


    @Handler(op = InHeader.SHOOT_OBJECT_EXPLODE_REQUEST)
    public static void handleShootObjectExplodeRequest(Char chr, InPacket inPacket) {
        int size = inPacket.decodeInt();
        List<Integer> shootObjectIdList = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            shootObjectIdList.add(inPacket.decodeInt());
        }

        if (JobConstants.isFirePoison(chr.getJob()) && chr.hasSkill(FirePoison.POISON_NOVA)) {
            ((FirePoison) chr.getJobHandler()).setExplodeShootObjList(shootObjectIdList);
        }
    }

    @Handler(op = InHeader.LINK_SKILL_REQUEST)
    public static void handleLinkSkillRequest(Char chr, InPacket inPacket) {
        int linkSkillId = inPacket.decodeInt();
        int originId = inPacket.decodeInt();
        int usingId = inPacket.decodeInt();
        Account acc = chr.getAccount();

        LinkSkill linkSkill = LinkSkillsModule.getLinkSkillByOriginId(acc, originId);
        if (linkSkill == null) {
            // No Such LinkSkill
            chr.write(WvsContext.linkSkillResult(0, LinkSkillResult.UnknownError));
            return;
        }
        int skillID = linkSkill.getLinkSkillID();
        if (linkSkill.getUsingID() == 0) { // Active
            chr.write(WvsContext.linkSkillResult(skillID, LinkSkillResult.AlreadyActive));
            return;
        }

        for (LinkSkill ls : LinkSkillsModule.getAvailableLinkSkills(acc, chr).values()) {
            LinkSkillsModule.activateLinkSkill(acc, chr, ls);
        }
    }

    @Handler(op = InHeader.UNLINK_SKILL_REQUEST)
    public static void handleUnlinkSkillRequest(Char chr, InPacket inPacket) {
        int linkSkillId = inPacket.decodeInt();
        Account acc = chr.getAccount();

        LinkSkillsModule.deactivateLinkSkill(acc, chr, linkSkillId);
    }

    @Handler(op = InHeader.USER_CREATE_AREA_DOT_REQUEST)
    public static void handleUserCreateAreaDoTRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // unk
        int skillId = inPacket.decodeInt();
        int unk = inPacket.decodeInt(); // unk

        short loopSize = inPacket.decodeShort();
        for (int i = 0; i < loopSize; i++) {
            Rect rect = inPacket.decodeIntRect();
        }
        chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), skillId, chr.getSkillLevel(skillId), inPacket, new SkillUseInfo());
    }


}
