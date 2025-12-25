package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.Gun;
import net.swordie.ms.client.character.b2body.B2Body;
import net.swordie.ms.client.character.damage.DamageSkinType;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.client.character.familiar.FamiliarCodexUpdateMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedMask;
import net.swordie.ms.client.character.familiar.FamiliarModifiedType;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.LarknessManager;
import net.swordie.ms.client.character.skills.PsychicArea;
import net.swordie.ms.client.character.skills.PsychicLockBall;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.shootobject.ShootObject;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.jobs.cygnus.ThunderBreaker;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.PsychicLock;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.Wreckage;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.life.pet.Pet;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.jboss.resteasy.spi.NotImplementedYetException;

import java.util.*;

/**
 * Created on 1/2/2018.
 */
public class UserLocal {
    public static OutPacket noticeMsg(String msg, boolean autoSeparated) {
        OutPacket outPacket = new OutPacket(OutHeader.NOTICE_MSG);

        outPacket.encodeString(msg);
        outPacket.encodeByte(autoSeparated);

        return outPacket;
    }

    public static OutPacket chatMsg(ChatType colour, String msg) {
        OutPacket outPacket = new OutPacket(OutHeader.CHAT_MSG);

        outPacket.encodeShort(colour.getVal());
        outPacket.encodeString(msg);

        return outPacket;
    }

    public static OutPacket videoByScript(String videoPath, boolean isMuted) {
        OutPacket outPacket = new OutPacket(OutHeader.VIDEO_BY_SCRIPT);

        outPacket.encodeString(videoPath);
        outPacket.encodeByte(isMuted);

        return outPacket;
    }

    public static OutPacket jaguarActive(boolean active) {
        OutPacket outPacket = new OutPacket(OutHeader.JAGUAR_ACTIVE);

        outPacket.encodeByte(active);

        return outPacket;
    }

    public static OutPacket jaguarSkill(int skillID) {
        OutPacket outPacket = new OutPacket(OutHeader.JAGUAR_SKILL);

        outPacket.encodeInt(skillID);

        return outPacket;
    }

    public static OutPacket addPopupSay(int npcID, int duration, String message, String effect) {
        OutPacket outPacket = new OutPacket(OutHeader.ADD_POPUP_SAY);

        outPacket.encodeInt(npcID);
        outPacket.encodeInt(duration);
        outPacket.encodeString(message);
        outPacket.encodeString(effect);
        outPacket.encodeByte(false);

        return outPacket;
    }

    public static OutPacket incLarknessReponse(LarknessManager larknessManager) {
        OutPacket outPacket = new OutPacket(OutHeader.INC_LARKNESS_RESPONSE);

        outPacket.encodeInt(larknessManager.getGauge());
        outPacket.encodeByte(larknessManager.getLarknessType().getVal());

        return outPacket;
    }

    public static OutPacket royalGuardAttack(boolean attack) {
        OutPacket outPacket = new OutPacket(OutHeader.ROYAL_GUARD_ATTACK);

        outPacket.encodeByte(attack);

        return outPacket;
    }

    public static OutPacket setOffStateForOffSkill(int skillID) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_OFF_STATE_FOR_OFF_SKILL);

        outPacket.encodeInt(skillID);

        return outPacket;
    }

    public static OutPacket setActionBar(boolean show, ActionBarType type){
      OutPacket outPacket = new OutPacket(OutHeader.ACTION_BAR_RESULT);
      outPacket.encodeInt(show == true ? 5 : 6); //5 for show, 6 for hide
      outPacket.encodeInt(type.getVal()); //type?

      return outPacket;
    }

    public static OutPacket resetStateForOffSkill() {
        OutPacket outPacket = new OutPacket(OutHeader.RESET_STATE_FOR_OFF_SKILL);

        return outPacket;
    }

    public static OutPacket modHayatoCombo(int amount) {
        OutPacket outPacket = new OutPacket(OutHeader.MOD_HAYATO_COMBO);

        outPacket.encodeShort(amount);

        return outPacket;
    }

    public static OutPacket incJudgementStack(byte amount) {
        OutPacket outPacket = new OutPacket(OutHeader.INC_JUDGEMENT_STACK_RESPONSE);

        outPacket.encodeByte(false);
        outPacket.encodeByte(amount);

        return outPacket;
    }

    public static OutPacket changeStealMemoryResult(StealMemoryType type, int stealManagerJobID, int position, int skillid, int stealSkillLv, int stealSkillMaxLv) {
        OutPacket outPacket = new OutPacket(OutHeader.CHANGE_STEAL_MEMORY_RESULT);

        outPacket.encodeByte(1); //Set Excl Request
        outPacket.encodeByte(type.getVal());    //Type

        switch (type) {
            case STEAL_SKILL:
                outPacket.encodeInt(stealManagerJobID); //jobId  1~5 | 1 = 1stJob , 2 = 2ndJob ... ..
                outPacket.encodeInt(position); //impecMemSkillID // nPOS  0,1,2,3
                outPacket.encodeInt(skillid); //skill
                outPacket.encodeInt(stealSkillLv);   //StealSkill Lv
                outPacket.encodeInt(stealSkillMaxLv);   //StealSkill Max Lv
                break;
            case NO_TARGETS:
            case FAILED_UNK_REASON:
                break;
            case REMOVE_STEAL_MEMORY:
                outPacket.encodeInt(stealManagerJobID);
                outPacket.encodeInt(position);
                outPacket.encodeByte(0);
                break;
            case REMOVE_MEMORY_ALL_SLOT:
                outPacket.encodeInt(skillid);
                break;
            case REMOVE_ALL_MEMORY:
                break;
        }

        return outPacket;
    }

    public static OutPacket resultSetStealSkill(boolean set, int impecMemSkilLID, int skillId) {
        OutPacket outPacket = new OutPacket(OutHeader.RESULT_SET_STEAL_SKILL);

        outPacket.encodeByte(1); //Set Excl Request
        outPacket.encodeByte(set); //bSet
        outPacket.encodeInt(impecMemSkilLID); //impecMemSkilLID
        if (set) {
            outPacket.encodeInt(skillId); //skill Id
        }
        return outPacket;
    }

    public static OutPacket resultStealSkillList(Set<Skill> targetSkillsList, int phantomStealResult, int targetChrId, int targetJobId) {
        OutPacket outPacket = new OutPacket(OutHeader.RESULT_STEAL_SKILL_LIST);
        outPacket.encodeByte(0); //Set Excl Request
        outPacket.encodeInt(targetChrId);
        outPacket.encodeInt(phantomStealResult); //   Gets a check  if == 4,   else:   nPhantomStealWrongResult
        if (phantomStealResult == 4) {
            outPacket.encodeInt(targetJobId);
            outPacket.encodeInt(targetSkillsList.size());

            for (Skill skills : targetSkillsList) {
                outPacket.encodeInt(skills.getSkillId());
            }
        }

        return outPacket;
    }

    public static OutPacket setFuncKeyByScript(boolean add, int action, int key) {
        OutPacket outPacket = new OutPacket(OutHeader.FUNCKEY_SET_BY_SCRIPT);
        outPacket.encodeByte(add);
        outPacket.encodeInt(action);
        outPacket.encodeInt(key);

        return outPacket;
    }

    public static OutPacket damageSkinSaveResult(DamageSkinType req, DamageSkinType res, Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.DAMAGE_SKIN_SAVE_RESULT);

        outPacket.encodeByte(req.getVal());
        if (req.getVal() <= 2) {
            outPacket.encodeByte(res.getVal());
            if (res == DamageSkinType.Res_Success) {
                chr.encodeDamageSkins(outPacket);
            }
        } else if (req == DamageSkinType.Req_SendInfo) {
            chr.encodeDamageSkins(outPacket);
        }
        return outPacket;
    }

    public static OutPacket explosionAttack(int skillID, Position position, int mobID, int count) {
        OutPacket outPacket = new OutPacket(OutHeader.EXPLOSION_ATTACK);

        outPacket.encodeInt(skillID);
        outPacket.encodePositionInt(position);
        outPacket.encodeInt(mobID);
        outPacket.encodeInt(count);

        return outPacket;
    }

    public static OutPacket setNextShootExJablin() {
        OutPacket outPacket = new OutPacket(OutHeader.SET_NEXT_SHOOT_EX_JABLIN);

        return outPacket;
    }

    public static OutPacket cadenaVoidStrikeRequest(Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.CADENA_VOID_STRIKE_REQUEST);

        outPacket.encodePositionInt(position);

        return outPacket;
    }

    public static OutPacket userRandAreaAttackRequest(Mob mob, int skillID) {
        OutPacket outPacket = new OutPacket(OutHeader.USER_RAND_AREA_ATTACK_REQUEST);

        outPacket.encodeInt(skillID);
        outPacket.encodeInt(1); //# of mobs to attack

        outPacket.encodePositionInt(mob.getPosition());
        outPacket.encodeInt(mob.getObjectId());

        return outPacket;
    }

    public static OutPacket userBonusAttackRequest(int skillId) {
        return userBonusAttackRequest(skillId, new ArrayList<>(), 0);
    }

    public static OutPacket userBonusAttackRequest(int skillId, List<Integer> mobObjIdList) {
        return userBonusAttackRequest(skillId, mobObjIdList, 0);
    }

    public static OutPacket userBonusAttackRequest(int skillId, List<Integer> mobObjIdList, int hits) {
        return userBonusAttackRequest(skillId, mobObjIdList, hits, 0, null, true);
    }

    public static OutPacket userBonusAttackRequest(int skillId, List<Integer> mobObjIdList, int hits, int lightningStrikes, Rect rect, boolean left) {
        OutPacket outPacket = new OutPacket(OutHeader.USER_BONUS_ATTACK_REQUEST);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(mobObjIdList.size()); // mobs hit
        outPacket.encodeByte(mobObjIdList.size() <= 0); // true ? placeOnChrPosition : placeOnMobPosition
        outPacket.encodeInt(0);
        outPacket.encodeInt(hits);
        for (int mobObjId : mobObjIdList) {
            outPacket.encodeInt(mobObjId);
            outPacket.encodeInt(skillId == ThunderBreaker.LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_2 || skillId == ThunderBreaker.LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_1 ? 134 : 0);
            if (skillId == 400041030) { // Thief V - Venom Explosion
                outPacket.encodeInt(2);
            }
        }

        if (skillId == ThunderBreaker.LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_2 || skillId == ThunderBreaker.LIGHTNING_SPEAR_MULTISTRIKE_THUNDERBOLT_1) {
            outPacket.encodeInt(lightningStrikes); // count
            outPacket.encodeRectInt(rect);
            outPacket.encodeByte(left);
        }
        if (skillId == 400011133) { // AfterImage Shock (Blaster)
            outPacket.encodeInt(0);
        }

        return outPacket;
    }

    public static OutPacket petActivateChange(Pet pet, boolean active, byte removedReason) {
        OutPacket outPacket = new OutPacket(OutHeader.PET_ACTIVATED);

        outPacket.encodeInt(pet.getOwnerID());
        outPacket.encodeInt(pet.getIdx());
        outPacket.encodeByte(active);
        if (active) {
            outPacket.encodeByte(true); // init
            pet.encode(outPacket);
        } else {
            outPacket.encodeByte(removedReason);
        }

        return outPacket;
    }

    public static OutPacket setDead(boolean tremble) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_DEAD);

        outPacket.encodeByte(tremble);

        return outPacket;
    }

    public static OutPacket openUIOnDead(boolean onDeadRevive, boolean onDeadProtectForBuff, boolean onDeadProtectExpMaplePoint,
                                         boolean onDeadProtectBuffMaplePoint, boolean anniversary, ReviveType reviveType) {
        OutPacket outPacket = new OutPacket(OutHeader.OPEN_UI_DEAD);

        int reviveMask = 0;
        if (onDeadRevive) {
            reviveMask |= 0x1;
        }
        if (onDeadProtectForBuff) {
            reviveMask |= 0x2;
        }
        if (onDeadProtectBuffMaplePoint) {
            reviveMask |= 0x4;
        }
        if (onDeadProtectExpMaplePoint) {
            reviveMask |= 0x8;
        }
        outPacket.encodeInt(reviveMask);
        outPacket.encodeByte(0); // was anniversary, now ignored
        outPacket.encodeInt(reviveType.getVal());
        // new 227 from here
        outPacket.encodeInt(0);
        outPacket.encodeByte(false);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeByte(0); // return if reviveType == 12

        return outPacket;
    }

    public static OutPacket skillCooltimeSetM(int skillID, int cdMS) {
        Map<Integer, Integer> cds = new HashMap<>();
        cds.put(skillID, cdMS);
        return skillCooltimeSetM(cds);
    }

    public static OutPacket skillCooltimeSetM(Map<Integer, Integer> cooldowns) {
        for (var entry : new HashSet<>(cooldowns.entrySet())) {
            cooldowns.put(entry.getKey(), entry.getValue() / 1000);
        }
        return skillCooltimeSet(cooldowns);
    }

    public static OutPacket skillCooltimeSet(Map<Integer, Integer> cooldowns) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_COOLTIME_SET);

        outPacket.encodeInt(cooldowns.size());
        cooldowns.forEach((skillID, cooldown) -> {
            outPacket.encodeInt(skillID);
            outPacket.encodeInt(cooldown);
        });

        return outPacket;
    }

    public static OutPacket skillCooltimeReduce(List<Integer> skillIDs, int cooltimeR) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_COOLTIME_REDUCE);

        outPacket.encodeInt(cooltimeR);
        outPacket.encodeByte(skillIDs.size());
        for (int skillID : skillIDs) {
            outPacket.encodeInt(skillID);
        }

        return outPacket;
    }

    public static OutPacket setBuffProtector(int itemID, boolean active) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_BUFF_PROTECTOR);

        outPacket.encodeInt(itemID);
        outPacket.encodeByte(active);

        return outPacket;
    }

    public static OutPacket deathCountInfo(int deathCount) {
        OutPacket outPacket = new OutPacket(OutHeader.DEATH_COUNT_INFO);

        outPacket.encodeInt(deathCount);

        return outPacket;
    }

    public static OutPacket deathCountInfo2(int deathCount) { // Used for 'KnockOut counter' in Commerci
        OutPacket outPacket = new OutPacket(OutHeader.DEATH_COUNT_INFO_2);

        outPacket.encodeInt(0);
        outPacket.encodeInt(deathCount);

        return outPacket;
    }

    public static OutPacket codexUpdate(FamiliarCodexManager fcm, int mask) {
        OutPacket outPacket = new OutPacket(OutHeader.CODEX_UPDATE);

        outPacket.encodeInt(mask);
        var isFullMask = mask == FamiliarCodexUpdateMask.All.getVal();

        if (isFullMask) {
            // Encode everything, 44 bytes
            outPacket.encodeInt(fcm.getChr().getId());
            outPacket.encodeShort(fcm.getSummonGauge());
            outPacket.encodeShort(fcm.getFamiliarSlots());
            outPacket.encodeInt(fcm.getFamiliars().size());
            outPacket.encodeShort(0);
            outPacket.encodeFT(FileTime.MAX_TIME());
            for (int familiarId : fcm.getActiveFamiliars()) {
                outPacket.encodeInt(familiarId);
            }
            for (int badgeId : fcm.getActiveBadges()) {
                outPacket.encodeByte(badgeId);
            }
            outPacket.encodeByte(fcm.getActiveFamiliarPreset());
            outPacket.encodeByte(fcm.getActiveBadgePreset());
        } else {
            if ((mask & FamiliarCodexUpdateMask.SummonGauge.getVal()) != 0) {
                outPacket.encodeShort(fcm.getSummonGauge());
            }
            if ((mask & FamiliarCodexUpdateMask.FamiliarSlots.getVal()) != 0) {
                outPacket.encodeShort(fcm.getFamiliarSlots());
            }
            if ((mask & FamiliarCodexUpdateMask.FamiliarCount.getVal()) != 0) {
                outPacket.encodeInt(fcm.getFamiliars().size());
            }
            if ((mask & FamiliarCodexUpdateMask.Unk8.getVal()) != 0) {
                outPacket.encodeShort(0);
            }
            if ((mask & FamiliarCodexUpdateMask.Unk10.getVal()) != 0) {
                outPacket.encodeLong(0);
            }
            if ((mask & FamiliarCodexUpdateMask.ModifySetup.getVal()) != 0) {
                for (int familiarId : fcm.getActiveFamiliars()) {
                    outPacket.encodeInt(familiarId);
                }
                for (int badgeId : fcm.getActiveBadges()) {
                    outPacket.encodeByte(badgeId);
                }
                outPacket.encodeByte(fcm.getActiveFamiliarPreset());
                outPacket.encodeByte(fcm.getActiveBadgePreset());

                outPacket.encodeShort(0); // idk
            }
            if ((mask & FamiliarCodexUpdateMask.ModifyEquippedBadges.getVal()) != 0) {
                for (int badgeId : fcm.getActiveBadges()) {
                    outPacket.encodeByte(badgeId);
                }
            }
            if (((mask & FamiliarCodexUpdateMask.ModifyFamiliarPreset.getVal())) != 0) {
                outPacket.encodeByte(fcm.getActiveFamiliarPreset());
            }
            if (((mask & FamiliarCodexUpdateMask.ModifyBadgePreset.getVal())) != 0) {
                outPacket.encodeByte(fcm.getActiveBadgePreset());
            }
        }

        if (!isFullMask) {
            if ((mask & FamiliarCodexUpdateMask.ModifySetup.getVal()) != 0) {
                outPacket.encodeByte(fcm.getActiveFamiliarPreset());

                for (int familiarId : fcm.getActiveFamiliars()) {
                    outPacket.encodeInt(familiarId);
                }
                for (int badgeId : fcm.getActiveBadges()) {
                    outPacket.encodeByte(badgeId);
                }
            }
            if ((mask & FamiliarCodexUpdateMask.ModifyEquippedBadges.getVal()) != 0) {
                outPacket.encodeByte(fcm.getActiveBadgePreset());

                for (int badgeId : fcm.getActiveBadges()) {
                    outPacket.encodeByte(badgeId);
                }
            }
        }

        return outPacket;
    }

    public static OutPacket familiarAddResult(List<Familiar> familiars) {
        return familiarAddResult(familiars, FamiliarModifiedMask.All.getVal());
    }

    public static OutPacket familiarAddResult(Familiar familiar, int mask) {
        return familiarAddResult(Collections.singletonList(familiar), mask);
    }

    public static OutPacket familiarRemoveResult(Familiar familiar) {
        return familiarRemoveResult(Collections.singletonList(familiar));
    }

    public static OutPacket familiarRemoveResult(List<Familiar> familiars) {
        for (int i = 0; i < familiars.size(); i++) {
            Familiar f = familiars.get(i);
            if (f != null) {
                f.setFamiliarID(0); // -> removed
            }
        }
        return familiarAddResult(familiars, 1);
    }

    public static OutPacket familiarAddResult(List<Familiar> familiars, int mask) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_ADD_RESULT);

        outPacket.encodeInt(familiars.size());
        for (Familiar f : familiars) {
            outPacket.encodeInt((int) f.getId());
            f.encode(outPacket, mask);
        }

        return outPacket;
    }

    public static OutPacket familiarModifyResult(FamiliarModifiedType type, Object o) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_MODIFY_RESULT);

        outPacket.encodeByte(type.getVal());
        switch (type) {
            case Extract:
                int points = (int) o;
                outPacket.encodeInt(points);
                break;

            case Fuse:
            case ToggleLock:
                break;

            case Upgrade:
            case Rename:
            case ReleaseOption:
            case RankIncreased:
            case MaxLvIncreased:
            case FamiliarSlotExpanded:
                boolean success = (boolean) o;
                outPacket.encodeByte(success);
                break;
        }

        return outPacket;
    }

    public static OutPacket familiarBadgeAddResult(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.FAMILIAR_BADGE_ADD_RESULT);

        var badgePageInfo = chr.getFamiliarCodexManager().getBadgePageInfo();
        outPacket.encodeInt(badgePageInfo.size());

        for (var entry : badgePageInfo.entrySet()) {
            var page = entry.getKey();
            var info = entry.getValue();

            outPacket.encodeInt(chr.getId());
            outPacket.encodeShort(page);
            for (int i = 0; i < 4; i++) {
                outPacket.encodeInt(info.getCollectedMask()[i]);
            }
        }

        return outPacket;
    }

    public static OutPacket petMove(int id, int petID, MovementInfo movementInfo) {
        OutPacket outPacket = new OutPacket(OutHeader.PET_MOVE);

        outPacket.encodeInt(id);
        outPacket.encodeInt(petID);
        outPacket.encode(movementInfo);

        return outPacket;
    }

    public static OutPacket setDressChanged(boolean on, boolean dressInfinity) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_DRESS_CHANGED);

        outPacket.encodeByte(on);
        outPacket.encodeByte(dressInfinity);
        outPacket.encodeByte(false); // unknown a boolean

        return outPacket;
    }

    public static OutPacket setInGameDirectionMode(boolean lockUI, boolean blackFrame, boolean forceMouseOver) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_IN_GAME_DIRECTION_MODE);

        outPacket.encodeByte(lockUI); // Locks User's UI        - Is 'showUI' in IDA
        outPacket.encodeByte(blackFrame); // Usually 1 in gms? (@aviv)
        if (lockUI) {
            outPacket.encodeByte(forceMouseOver);
            outPacket.encodeByte(!lockUI); // showUI
        }

        return outPacket;
    }

    public static OutPacket inGameDirectionEvent(InGameDirectionEvent igdr) {
        OutPacket outPacket = new OutPacket(OutHeader.IN_GAME_DIRECTION_EVENT);

        outPacket.encode(igdr);

        return outPacket;
    }

    public static OutPacket hireTutor(boolean set) {
        OutPacket outPacket = new OutPacket(OutHeader.HIRE_TUTOR);

        outPacket.encodeByte(set);

        return outPacket;
    }

    public static OutPacket tutorMsg(int id, int duration) {
        OutPacket outPacket = new OutPacket(OutHeader.TUTOR_MSG);

        boolean automated = true;
        outPacket.encodeByte(automated);
        outPacket.encodeInt(id);
        outPacket.encodeInt(duration);

        return outPacket;
    }

    public static OutPacket tutorMsg(String message, int width, int duration) {
        OutPacket outPacket = new OutPacket(OutHeader.TUTOR_MSG);

        boolean automated = false;
        outPacket.encodeByte(automated);
        outPacket.encodeString(message);
        outPacket.encodeInt(width);
        outPacket.encodeInt(duration);

        return outPacket;
    }

    public static OutPacket emotion(int emotion, int duration, boolean byItemOption) {
        OutPacket outPacket = new OutPacket(OutHeader.EMOTION);

        outPacket.encodeInt(emotion);
        outPacket.encodeInt(duration);
        outPacket.encodeByte(byItemOption);

        return outPacket;
    }

    public static OutPacket questResult(QuestType type, int questID, int npcTemplateID, int secondQuestID, boolean startNavigation) {
        OutPacket outPacket = new OutPacket(OutHeader.QUEST_RESULT);

        outPacket.encodeByte(type.getVal());
        outPacket.encodeInt(questID);
        outPacket.encodeInt(npcTemplateID);

        outPacket.encodeInt(secondQuestID); // starts a second quest
        outPacket.encodeByte(startNavigation);

        return outPacket;
    }

    public static OutPacket medalReissueResult(MedalReissueResultType medalReissueResultType, int itemId) {
        OutPacket outPacket = new OutPacket(OutHeader.MEDAL_REISSUE_RESULT);

        outPacket.encodeByte(medalReissueResultType.getVal());
        outPacket.encodeInt(itemId);

        return outPacket;
    }

    public static OutPacket stopKeyDownSkillRequest(int skillID) {
        OutPacket outPacket = new OutPacket(OutHeader.STOP_KEY_DOWN_SKILL_REQUEST);

        outPacket.encodeInt(skillID);

        return outPacket;
    }

    public static OutPacket userConsumeItemCooltime() {
        return new OutPacket(OutHeader.USER_CONSUME_ITEM_COOLTIME);
    }

    public static OutPacket moveParticleEff(String type, Position startPoint, Position endPoint, int moveTime, int totalCount, int oneSprayMin, int oneSprayMax) {
        OutPacket outPacket = new OutPacket(OutHeader.MOVE_PARTICLE_EFF);

        outPacket.encodeString(type);
        outPacket.encodePosition(startPoint);
        outPacket.encodePosition(endPoint);
        outPacket.encodeShort(moveTime);
        outPacket.encodeShort(totalCount);
        outPacket.encodeShort(oneSprayMin);
        outPacket.encodeShort(oneSprayMax);

        return outPacket;
    }

    public static OutPacket balloonMsg(String message, int width, int timeOut, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.BALLOON_MSG);

        outPacket.encodeString(message);
        outPacket.encodeShort(width);// 100
        outPacket.encodeShort(timeOut);// 3
        outPacket.encodeByte(position == null);
        if (position != null) {
            outPacket.encodePosition(position);
        }
        return outPacket;
    }

    public static OutPacket lightningUnionSubAttack(int skillId, int slv) {
        OutPacket outPacket = new OutPacket(OutHeader.LIGHTNING_UNION_SUB_ATTACK);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(ThunderBreaker.LIGHTNING_CASCADE);
        outPacket.encodeInt(slv);

        return outPacket;
    }

    public static OutPacket giantShadowSpearAttack(Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.GIANT_SHADOW_SPEAR_ATTACK);

        outPacket.encodePositionInt(position);

        return outPacket;
    }

    public static OutPacket shootObjectCreated(ShootObjectSkillInfo shootObjectSkillInfo) {
        OutPacket outPacket = new OutPacket(OutHeader.SHOOT_OBJECT_CREATED);

        outPacket.encodeByte(true);
        outPacket.encodeInt(shootObjectSkillInfo.getSkillId());
        outPacket.encodeInt(shootObjectSkillInfo.getSlv());
        outPacket.encodeInt(shootObjectSkillInfo.getShootObjects().size());
        for (ShootObject shootObject : shootObjectSkillInfo.getShootObjects()) {
            outPacket.encodeInt(shootObject.getId());
        }

        return outPacket;
    }

    public static OutPacket doActivePsychicArea(PsychicArea pa) {
        OutPacket outPacket = new OutPacket(OutHeader.DO_ACTIVE_PSYCHIC_AREA);

        outPacket.encodeInt(pa.localPsychicAreaKey);
        outPacket.encodeInt(pa.psychicAreaKey);

        return outPacket;
    }

    public static OutPacket dodgeSkillReady() {
        return new OutPacket(OutHeader.DODGE_SKILL_READY);
    }

    public static OutPacket enterFieldPsychicInfo(int userID, PsychicLock pl, List<PsychicArea> psychicAreas) {
        OutPacket outPacket = new OutPacket(OutHeader.ENTER_FIELD_PSYCHIC_INFO);

        outPacket.encodeByte(true);

        outPacket.encodeInt(userID);
        if (pl == null) {
            outPacket.encodeInt(0);
        } else {
            outPacket.encodeInt(pl.psychicLockBalls.size());
            for (PsychicLockBall plb : pl.psychicLockBalls) {
                boolean hasMob = plb.mob != null;
                outPacket.encodeByte(plb.success);
                outPacket.encodeInt(plb.localKey);
                outPacket.encodeInt(plb.psychicLockKey);
                outPacket.encodeInt(pl.skillID);
                outPacket.encodeShort(pl.slv);
                outPacket.encodeInt(hasMob ? plb.mob.getObjectId() : 0);
                outPacket.encodeShort(plb.stuffID);
                outPacket.encodeInt(plb.unk);
                outPacket.encodeLong(hasMob ? Util.maxInt(plb.mob.getMaxHp()) : 0);
                outPacket.encodeLong(hasMob ? Util.maxInt(plb.mob.getHp()) : 0);
                outPacket.encodeByte(plb.posRelID);
                outPacket.encodePositionInt(plb.start);
                outPacket.encodePositionInt(plb.rel);
            }
        }
        if (psychicAreas == null) {
            outPacket.encodeInt(0);
        } else {
            outPacket.encodeInt(psychicAreas.size());
            for (PsychicArea pa : psychicAreas) {
                pa.encode(outPacket);
            }
        }
        // indicate end
        outPacket.encodeByte(false);

        return outPacket;
    }

    public static OutPacket b2BodyResult(short requestType, B2Body b2Body) {
        OutPacket outPacket = new OutPacket(OutHeader.B2_BODY_RESULT);
        Char chr = b2Body.getChr();
        outPacket.encodeShort(requestType);
        outPacket.encodeInt(chr.getId()); // owner Id
        outPacket.encodeInt(chr.getFieldID());
        short loopsize = 1;

        switch (requestType) {
            case 0:
                outPacket.encodeShort(loopsize); // loop size
                for (int i = 0; i < loopsize; i++) {
                    outPacket.encodeInt(b2Body.getBodyId());
                    outPacket.encodeByte(b2Body.getType());
                    outPacket.encodeByte(true); // redraw
                    outPacket.encodePosition(b2Body.getPosition());
                    if (b2Body.getType() == 5) {
                        outPacket.encodeShort(b2Body.getnRadius());
                        outPacket.encodeShort(b2Body.getfRadius());
                    } else if (b2Body.getType() == 6) {
                        outPacket.encodeInt(0); // unk
                    }
                    outPacket.encodeShort(b2Body.getDuration());
                    outPacket.encodeShort(b2Body.getScale());
                    outPacket.encodeShort(0); // sniffed from GMS
                    outPacket.encodeShort(10); // sniffed from GMS
                    outPacket.encodeInt(b2Body.getSkillId());
                    outPacket.encodeShort(b2Body.getSlv());
                    outPacket.encodeByte(chr.isLeft());
                }
                break;
            case 3:
                outPacket.encodeInt(chr.getId());
                outPacket.encodeInt(b2Body.getSkillId());
                outPacket.encodeInt(b2Body.getMaxSpeedX());
                outPacket.encodeInt(b2Body.getMaxSpeedY());
                break;
            case 4:
                outPacket.encodeShort(loopsize);
                for (int i = 0; i < loopsize; i++) {
                    outPacket.encodeByte(true); // redraw
                    outPacket.encodePosition(b2Body.getPosition());
                    outPacket.encodeInt(b2Body.getDuration());
                    outPacket.encodeShort(0); // unk
                    outPacket.encodeShort(0); // unk
                    outPacket.encodeShort(0); // unk
                    outPacket.encodeInt(b2Body.getSkillId());
                    outPacket.encodeByte(chr.isLeft());
                    outPacket.encodeInt(b2Body.getMaxSpeedX());
                    outPacket.encodeInt(b2Body.getMaxSpeedY());
                }
                break;
            case 5:
                outPacket.encodeInt(b2Body.getSkillId()); // mob Skill Id
                outPacket.encodeInt(b2Body.getSlv()); // mob Skill Lv
                break;
        }

        return outPacket;
    }

    public static OutPacket b2BodyResultNew(short requestType, B2Body b2Body) {
        OutPacket outPacket = new OutPacket(OutHeader.B2_BODY_RESULT_NEW);

        outPacket.encodeInt(requestType);
        outPacket.encodeInt(b2Body.getBodyId());

        return outPacket;
    }

    public static OutPacket registerFadeInOutAnimation(int beginFadeTime, int shadeDuration, int endFadeTime, int shadeIntensity) {
        OutPacket outPacket = new OutPacket(OutHeader.REGISTER_FADE_IN_OUT_ANIMATION);

        outPacket.encodeInt(beginFadeTime);
        outPacket.encodeInt(shadeDuration);
        outPacket.encodeInt(endFadeTime);
        outPacket.encodeInt(shadeIntensity);

        return outPacket;
    }

    public static OutPacket greaterDarkServantSwapResult(Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.GREATER_DARK_SERVANT_SWAP_RESULT);

        outPacket.encodePositionInt(position);

        return outPacket;
    }

    public static OutPacket skillRequestRequest(int skillId) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_REQUEST_REQUEST);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket aceInTheHoleFinisher(int skillId, int slv, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.ACE_IN_THE_HOLE_FINISHER);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(slv);
        outPacket.encodeInt(1);
        outPacket.encodePositionInt(position);

        return outPacket;
    }

    public static OutPacket bonusAttackDelayRequest(int skillId, int delay) {
        return bonusAttackDelayRequest(Collections.singletonList(new Tuple<>(skillId, delay)));
    }

    public static OutPacket bonusAttackDelayRequest(List<Tuple<Integer, Integer>> bonusAttackTuples) {
        OutPacket outPacket = new OutPacket(OutHeader.BONUS_ATTACK_DELAY_REQUEST);

        outPacket.encodeInt(bonusAttackTuples.size());
        for (var entry : bonusAttackTuples) {
            outPacket.encodeInt(entry.getLeft());    // skill Id
            outPacket.encodeInt(entry.getRight());   // delay
        }

        return outPacket;
    }

    public static OutPacket aggroRankInfoName(List<Tuple<Long, String>> chars) {
        OutPacket outPacket = new OutPacket(OutHeader.AGGRO_RANK_INFO_NAME);

        outPacket.encodeInt(chars.size());
        for (var chr : chars) {
            outPacket.encodeString(chr.getRight());
        }

        return outPacket;
    }

    public static OutPacket gatherRequestResult(int objId, HarvestResultType harvestResultType) {
        OutPacket outPacket = new OutPacket(OutHeader.GATHER_REQUEST_RESULT);

        outPacket.encodeInt(objId);
        outPacket.encodeInt(harvestResultType.getValue());

        return outPacket;
    }

    public static OutPacket harvestResult(int objId, HarvestResultType harvestResultType) {
        OutPacket outPacket = new OutPacket(OutHeader.HARVEST_RESULT);

        outPacket.encodeInt(objId);
        outPacket.encodeInt(harvestResultType.getValue());

        return outPacket;
    }

    public static OutPacket groupChairInvite(int inviterChrId) {
        OutPacket outPacket = new OutPacket(OutHeader.GROUP_CHAIR_INVITE);

        outPacket.encodeInt(inviterChrId);

        return outPacket;
    }

    public static OutPacket sitDummyPortableChair(int itemId) {
        OutPacket outPacket = new OutPacket(OutHeader.SIT_DUMMY_PORTABLE_CHAIR);

        outPacket.encodeInt(itemId);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket bagItemUseResult(int bagItemIndex, int itemId, boolean firstTime) {
        OutPacket outPacket = new OutPacket(OutHeader.BAG_ITEM_USE_RESULT);

        outPacket.encodeInt(bagItemIndex);
        outPacket.encodeInt(itemId);
        outPacket.encodeByte(0);
        outPacket.encodeByte(firstTime); // !reOpen

        return outPacket;
    }

    public static OutPacket sendClientResolution() {
        OutPacket outPacket = new OutPacket(OutHeader.SEND_CLIENT_RESOLUTION);

        return outPacket;
    }

    public static OutPacket poolmaker(boolean enable, int remaining, int time) {
        OutPacket outPacket = new OutPacket(OutHeader.POOLMAKER);

        outPacket.encodeByte(enable);
        if (enable) {
            outPacket.encodeInt(remaining);
            outPacket.encodeInt(time);
        }

        return outPacket;
    }

    public static OutPacket egoWeapon(int skillId, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.EGO_WEAPON);

        outPacket.encodeInt(skillId);
        outPacket.encodePositionInt(position);

        return outPacket;
    }

    public static OutPacket lightOfCourage(boolean active, Position position, List<Integer> mobObjIdList) {
        // OutHeader.LIGHT_OF_COURAGE
        throw new NotImplementedYetException("LightOfCourage");

//        OutPacket outPacket = new OutPacket(0);
//
//        outPacket.encodeByte(active);
//
//        if (active) {
//            outPacket.encodePosition(position);
//
//            outPacket.encodeInt(mobObjIdList.size());
//            for (var mobObjId : mobObjIdList) {
//                outPacket.encodeInt(mobObjId);
//            }
//
//            outPacket.encodeInt(mobObjIdList.size());
//            for (var mobObjId : mobObjIdList) {
//                outPacket.encodeInt(mobObjId);
//            }
//        }
//        return outPacket;
    }


    public static OutPacket kainStackOverTimeSkillIncreaseResult(int skillId, int curStack, int maxStack, int requestInterval) {
        OutPacket outPacket = new OutPacket(OutHeader.KAIN_STACK_OVER_TIME_SKILL_INCREASE_RESULT);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(curStack);
        outPacket.encodeInt(maxStack);
        outPacket.encodeInt(requestInterval); // request interval

        return outPacket;
    }


    public static OutPacket deathBlessing(Map<Integer, Integer> deathBlessingMap, int maxStack, int duration) {
        OutPacket outPacket = new OutPacket(OutHeader.DEATH_BLESSING);

        var bActivate = true;
        outPacket.encodeByte(bActivate);
        if (bActivate) {
            outPacket.encodeInt(deathBlessingMap.size());
            for (int mobObjId : deathBlessingMap.keySet()) {
                outPacket.encodeInt(mobObjId);
            }

            outPacket.encodeInt(deathBlessingMap.size());
            for (var entry : deathBlessingMap.entrySet()) {
                var mobObjId = entry.getKey();
                var stack = entry.getValue();

                outPacket.encodeInt(mobObjId);
                outPacket.encodeInt(stack);
                outPacket.encodeInt(maxStack);
                outPacket.encodeInt(duration); // Duration
            }
        }
        return outPacket;
    }


    public static OutPacket deathBlessingMaterialisation(Map<Integer, Integer> deathBlessingMap, int skillId, int delay) {
        OutPacket outPacket = new OutPacket(OutHeader.DEATH_BLESSING_MATERIALISATION);

        outPacket.encodeInt(skillId);
        outPacket.encodeInt(0); // figure out once in-game
        outPacket.encodeInt(deathBlessingMap.size());
        for (var entry : deathBlessingMap.entrySet()) {
            var mobObjId = entry.getKey();
            var consumed = entry.getValue();

            outPacket.encodeInt(mobObjId);
            outPacket.encodeInt(consumed); // amount consumed
            outPacket.encodeInt(delay);
        }

        return outPacket;
    }


    public static OutPacket remainIncenseActivation(int chrId, List<Wreckage> incenseList) {
        OutPacket outPacket = new OutPacket(OutHeader.REMAIN_INCENSE_ACTIVATION);

        outPacket.encodeInt(chrId);
        outPacket.encodeInt(incenseList.size());
        for (var incense : incenseList) {
            outPacket.encodeInt(incense.getObjectId());
            outPacket.encodePositionInt(incense.getPosition());
        }

        return outPacket;
    }

    public static OutPacket recipeCooltimeResult(int recipeId, int cooltimeMs) {
        OutPacket outPacket = new OutPacket(OutHeader.USER_RECIPE_COOLTIME_RESULT);

        outPacket.encodeInt(recipeId);
        outPacket.encodeInt(cooltimeMs);

        return outPacket;
    }

    public static OutPacket clearGun() {
        OutPacket outPacket = new OutPacket(OutHeader.CLEAR_GUN);

        return outPacket;
    }

    public static OutPacket createGun() {
        OutPacket outPacket = new OutPacket(OutHeader.CREATE_GUN);

        return outPacket;
    }

    public static OutPacket setGun(Gun gun) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_GUN);

        outPacket.encode(gun);

        return outPacket;
    }

    public static OutPacket setAmmo(int ammo) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_AMMO);

        outPacket.encodeInt(ammo);

        return outPacket;
    }

    public static OutPacket resultShootAttackInFPSMode() {
        OutPacket outPacket = new OutPacket(OutHeader.RESULT_SHOOT_ATTACK_IN_FPS_MODE);

        outPacket.encodeByte(true);

        return outPacket;
    }

    public static OutPacket doLotteryUI(Item item, List<Integer> rewardPool) {
        OutPacket outPacket = new OutPacket(OutHeader.DO_LOTTERY_UI);

        outPacket.encodeShort(item.getBagIndex());
        outPacket.encodeInt(item.getItemId());
        outPacket.encodeByte(0);
        outPacket.encodeInt(rewardPool.size()); // size
        rewardPool.forEach(outPacket::encodeInt);

        return outPacket;
    }

    public static OutPacket setSlowDown(int glideCoefficient, int timeMS) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_SLOW_DOWN);

        outPacket.encodeShort(glideCoefficient); // 30
        outPacket.encodeShort(timeMS); // 360

        return outPacket;
    }

    public static OutPacket trueNobilityShield(int shieldAmount) {
        OutPacket outPacket = new OutPacket(OutHeader.TRUE_NOBILITY_SHIELD);

        outPacket.encodeInt(shieldAmount);

        return outPacket;
    }

    public static OutPacket kannaSoulBomb(int delay, List<Position> positions) {
        OutPacket outPacket = new OutPacket(OutHeader.KANNA_SOUL_BOMB);

        outPacket.encodeShort(delay);
        outPacket.encodeByte(positions.size());
        positions.forEach(outPacket::encodePosition);

        return outPacket;
    }

    public static OutPacket serverAckMobZoneStateChange(boolean ack) {
        OutPacket outPacket = new OutPacket(OutHeader.SERVER_ACK_MOB_ZONE_STATE_CHANGE);

        outPacket.encodeByte(ack);

        return outPacket;
    }

    public static OutPacket summonSequenceAttackInstructions(int summonSkillId, List<Integer> sequence) {
        OutPacket outPacket = new OutPacket(OutHeader.SUMMON_SEQUENCE_ATTACK_INSTRUCTIONS);

        outPacket.encodeInt(summonSkillId);

        outPacket.encodeInt(sequence.size());
        sequence.forEach(outPacket::encodeInt);

        return outPacket;
    }

    public static OutPacket ursusSurvivorsCounter(int total, int survivors) {
        OutPacket outPacket = new OutPacket(OutHeader.URSUS_SURVIVORS_COUNTER);

        outPacket.encodeInt(total); // total players in field
        outPacket.encodeInt(survivors); // survivors

        return outPacket;
    }
}
