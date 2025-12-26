package net.swordie.ms.connection.packet;

import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.client.alliance.AllianceResult;
import net.swordie.ms.client.blacklist.BlackListEntry;
import net.swordie.ms.client.blacklist.BlackListResult;
import net.swordie.ms.client.blacklist.BlackListTabType;
import net.swordie.ms.client.character.*;
import net.swordie.ms.client.character.commerce.vessel.Vessel;
import net.swordie.ms.client.character.commerce.voyage.VoyageInfoType;
import net.swordie.ms.client.character.emoticons.EmoticonType;
import net.swordie.ms.client.character.hyperstats.HyperStatsManager;
import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.items.MemorialCubeInfo;
import net.swordie.ms.client.character.items.PowerCrystal;
import net.swordie.ms.client.character.modules.LinkSkillsModule;
import net.swordie.ms.client.character.potential.CharacterPotential;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.TownPortal;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.MatrixSlot;
import net.swordie.ms.client.character.union.UnionBoard;
import net.swordie.ms.client.friend.result.FriendResult;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.bbs.GuildBBSPacket;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.jobs.resistance.WildHunterInfo;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.party.PartyResult;
import net.swordie.ms.client.rankings.RankingResult;
import net.swordie.ms.client.soulcollection.SoulCollectionEntry;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.RandomPortal;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.EventListData;
import net.swordie.ms.util.AntiMacro;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.InvType.EQUIPPED;

/**
 * Created on 12/22/2017.
 */
public class WvsContext {
    private static final Logger log = LogManager.getRootLogger();

    public static OutPacket exclRequest() {
        return new OutPacket(OutHeader.EXCL_REQUEST);
    }

    public static OutPacket exclRequest2() {
        return new OutPacket(OutHeader.EXCL_REQUEST_2);
    }

    public static OutPacket statChanged(Map<Stat, Object> stats) {
        return statChanged(stats, 0);
    }

    public static OutPacket statChanged(Map<Stat, Object> stats, boolean exclRequest) {
        return statChanged(stats, exclRequest, (byte) -1, (byte) 0, (byte) 0, (byte) 0, false, 0, 0, (short) 0);
    }

    public static OutPacket statChanged(Map<Stat, Object> stats, int subJob) {
        return statChanged(stats, false, (byte) -1, (byte) 0, (byte) 0, (byte) 0, false, 0, 0, (short) subJob);
    }

    public static OutPacket statChanged(Map<Stat, Object> stats, boolean exclRequestSent, byte mixBaseHairColor,
                                        byte mixAddHairColor, byte mixHairBaseProb, byte charmOld, boolean updateRecovery,
                                        int hpRecovery, int mpRecovery, short subJob) {
        OutPacket outPacket = new OutPacket(OutHeader.STAT_CHANGED);

        outPacket.encodeByte(exclRequestSent);
        outPacket.encodeByte(false); // ?
        outPacket.encodeByte(0); // new 227
        // GW_CharacterStat::DecodeChangeStat
        int mask = 0;
        for (Stat stat : stats.keySet()) {
            mask |= stat.getVal();
        }
        outPacket.encodeLong(mask);
        Comparator statComper = Comparator.comparingLong(o -> ((Stat) o).getVal());
        TreeMap<Stat, Object> sortedStats = new TreeMap<>(statComper);
        sortedStats.putAll(stats);
        for (Map.Entry<Stat, Object> entry : sortedStats.entrySet()) {
            Stat stat = entry.getKey();
            Object value = entry.getValue();
            switch (stat) {
                case skin:
                    outPacket.encodeByte((Byte) value);
                    break;
                case face:
                case hair:
                case hp:
                case mhp:
                case mp:
                case mmp:
                case pop:
                case charismaEXP:
                case insightEXP:
                case willEXP:
                case craftEXP:
                case senseEXP:
                case charmEXP:
                case eventPoints:
                case level:
                    outPacket.encodeInt((Integer) value);
                    break;
                case str:
                case dex:
                case inte:
                case luk:
                case ap:
                case fatigue:
                    outPacket.encodeShort((Short) value);
                    break;
                case sp:
                    if (value instanceof ExtendSP) {
                        ((ExtendSP) value).encode(outPacket);
                    } else {
                        outPacket.encodeShort((Short) value);
                    }
                    break;
                case exp:
                case money:
                    outPacket.encodeLong((Long) value);
                    break;
                case dayLimit:
                    ((NonCombatStatDayLimit) value).encode(outPacket);
                    break;
                case characterCard:
                    outPacket.encodeInt(3);
                    outPacket.encodeShort(3);
                    outPacket.encodeInt(3);
                    break;
                case pvp2:
                    outPacket.encodeByte(2);
                    outPacket.encodeByte(2);
                    break;
                case job:
                    outPacket.encodeShort((Short) value);
                    outPacket.encodeShort(subJob);
                    break;
            }
        }

        outPacket.encodeByte(mixBaseHairColor);
        outPacket.encodeByte(mixAddHairColor);
        outPacket.encodeByte(mixHairBaseProb);

        outPacket.encodeByte(charmOld > 0);
        if (charmOld > 0) {
            outPacket.encodeByte(charmOld);
        }

        outPacket.encodeByte(updateRecovery);
        if (updateRecovery) {
            outPacket.encodeInt(hpRecovery);
            outPacket.encodeInt(mpRecovery);
        }
        return outPacket;
    }

    public static OutPacket inventoryOperation(boolean exclRequest, boolean notRemoveAddInfo, InventoryOperation type, short oldPos, short newPos,
                                               int bagPos, Item item) {
        // ignoreExcl if a pet picks up an item
        List<ItemOperation> operations = new ArrayList<>();

        ItemOperation io = new ItemOperation();
        io.item = item;
        io.pos = oldPos;
        io.newPos = newPos;
        io.type = type;
        operations.add(io);

        return inventoryOperation(exclRequest, true, operations);
    }

    public static OutPacket inventoryOperation(boolean exclResult, boolean notAddRemoveInfo, List<ItemOperation> itemOperations) {
        OutPacket outPacket = new OutPacket(OutHeader.INVENTORY_OPERATION);

        outPacket.encodeByte(exclResult);
        outPacket.encodeInt(itemOperations.size());
        outPacket.encodeByte(notAddRemoveInfo);

        byte addMovementInfo = 0;
        for (ItemOperation itemOperation : itemOperations) {
            Item item = itemOperation.item;
            // logic like this in packets :(
            InvType invType = item.getInvType();
            if ((itemOperation.pos > 0 && itemOperation.newPos < 0 && invType == EQUIPPED) || (invType == EQUIPPED && itemOperation.pos < 0)) {
                invType = item.isCash() ? InvType.DEC : InvType.EQUIP;
            }
            boolean isEquippedItem = (invType == EQUIPPED ||
                    (invType.isEquipType() && (itemOperation.pos < 0 || itemOperation.newPos < 0)));

            outPacket.encodeByte(itemOperation.type.getVal());
            outPacket.encodeByte(invType.getVal());
            outPacket.encodeShort(itemOperation.pos);

            switch (itemOperation.type) {
                case Add:
                    outPacket.encode(item);
                    break;
                case UpdateQuantity:
                    outPacket.encodeShort(item.getQuantity());
                    break;
                case Move:
                    outPacket.encodeShort(itemOperation.newPos);
                    if (isEquippedItem) {
                        addMovementInfo = 1;
                    }
                    break;
                case Remove:
                    if (isEquippedItem) {
                        addMovementInfo = 2;
                    }
                    break;
                case ItemExp:
                    outPacket.encodeLong(((Equip) item).getExp());
                    break;
                case Unk232:
                    outPacket.encode(item);
                    break;
                case UpdateBagPos:
                    outPacket.encodeInt(itemOperation.newPos);
                    break;
                case UpdateBagQuantity:
                    outPacket.encodeShort(item.getQuantity());
                    break;
                case BagRemove:
                    break;
                case BagToBag:
                    outPacket.encodeShort(itemOperation.newPos);
                    break;
                case BagNewItem:
                    outPacket.encode(item);
                    break;
                case BagRemoveSlot:
                    break;
            }
        }
        if (addMovementInfo != 0) {
            outPacket.encodeByte(addMovementInfo);
        }

        return outPacket;
    }

    public static OutPacket updateEventNameTag(int[] tags) {
        OutPacket outPacket = new OutPacket(OutHeader.EVENT_NAME_TAG);

        for (int i = 0; i < 5; i++) {
            outPacket.encodeString("");
            if (i >= tags.length) {
                outPacket.encodeByte(-1);
            } else {
                outPacket.encodeByte(tags[i]);
            }
        }

        return outPacket;
    }

    public static OutPacket changeSkillRecordResult(Skill skill) {
        List<Skill> skills = new ArrayList<>();
        skills.add(skill);
        return changeSkillRecordResult(skills, true, false, false, false);
    }

    public static OutPacket changeSkillRecordResult(Collection<Skill> skills) {
        return changeSkillRecordResult(skills, true, false, false, false);
    }

    public static OutPacket changeSkillRecordResult(Collection<Skill> skills, boolean exclRequestSent, boolean showResult,
                                                    boolean removeLinkSkill, boolean sn) {
        OutPacket outPacket = new OutPacket(OutHeader.CHANGE_SKILL_RECORD_RESULT);

        outPacket.encodeByte(exclRequestSent);
        outPacket.encodeByte(showResult);
        outPacket.encodeByte(removeLinkSkill);
        outPacket.encodeShort(skills.size());
        for (Skill skill : skills) {
            outPacket.encodeInt(skill.getSkillId());
            outPacket.encodeInt(skill.getCurrentLevel());
            outPacket.encodeInt(skill.getMasterLevel());
            outPacket.encodeFT(FileTime.fromType(FileTime.Type.PLAIN_ZERO));
        }
        outPacket.encodeByte(sn);

        return outPacket;
    }

    public static OutPacket temporaryStatSet(TemporaryStatManager tsm) {
        OutPacket outPacket = new OutPacket(OutHeader.TEMPORARY_STAT_SET);

        boolean hasMovingAffectingStat = tsm.hasNewMovingEffectingStat(); // encoding flushes new stats
        tsm.encodeForLocal(outPacket);

        outPacket.encodeShort(0);
        outPacket.encodeByte(0);
        outPacket.encodeByte(false);
        outPacket.encodeByte(hasMovingAffectingStat);
        outPacket.encodeByte(false);
        outPacket.encodeByte(false);
        outPacket.encodeByte(false);

        if (hasMovingAffectingStat) {
            outPacket.encodeByte(0);
        }

        outPacket.encodeInt(0); // some mask
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket temporaryStatReset(TemporaryStatManager temporaryStatManager, boolean demount) {
        OutPacket outPacket = new OutPacket(OutHeader.TEMPORARY_STAT_RESET);

        outPacket.encodeByte(true); // 214
        outPacket.encodeByte(true); // 214
        outPacket.encodeByte(true); // 227
        for (int i : temporaryStatManager.getRemovedMask()) {
            outPacket.encodeInt(i);
        }
        temporaryStatManager.encodeRemovedIndieTempStat(outPacket);
        if (temporaryStatManager.hasRemovedMovingEffectingStat()) {
            outPacket.encodeByte(0);
        }
        outPacket.encodeByte(0); // ?
        outPacket.encodeByte(demount);
        outPacket.encodeByte(demount);

        return outPacket;
    }

    public static OutPacket skillUseResult(boolean stillGoing, int skillId) {
        OutPacket outPacket = new OutPacket(OutHeader.SKILL_USE_RESULT);
        // 2221011 - Frozen Breath
        outPacket.encodeByte(stillGoing);
        outPacket.encodeInt(skillId);

        return outPacket;
    }

    public static OutPacket message(MessagePacket messagePacket) {
        var outPacket = new OutPacket(OutHeader.MESSAGE);

        messagePacket.encode(outPacket);

        return outPacket;
    }

    public static OutPacket flipTheCoinEnabled(byte enabled) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_FLIP_THE_COIN_ENABLED);

        outPacket.encodeByte(enabled);

        return outPacket;
    }

    public static OutPacket modComboResponse(int combo, boolean show) {
        OutPacket outPacket = new OutPacket(OutHeader.MOD_COMBO_RESPONSE);

        outPacket.encodeInt(combo);
        outPacket.encodeByte(!show);

        return outPacket;
    }

    public static OutPacket wildHunterInfo(WildHunterInfo whi) {
        OutPacket outPacket = new OutPacket(OutHeader.WILD_HUNTER_INFO);

        whi.encode(outPacket);

        return outPacket;
    }

    public static OutPacket zeroInfo(ZeroInfo currentInfo, short mask) {
        OutPacket outPacket = new OutPacket(OutHeader.ZERO_INFO);

        currentInfo.encode(mask, outPacket);

        return outPacket;
    }

    public static OutPacket zeroInfo(ZeroInfo currentInfo) {
        OutPacket outPacket = new OutPacket(OutHeader.ZERO_INFO);

        currentInfo.encode(outPacket);

        return outPacket;
    }

    public static OutPacket zeroWp(int wpCoin) {
        OutPacket outPacket = new OutPacket(OutHeader.ZERO_WP);

        outPacket.encodeInt(wpCoin);

        return outPacket;
    }

    public static OutPacket gatherItemResult(byte type) {
        OutPacket outPacket = new OutPacket(OutHeader.GATHER_ITEM_RESULT);

        outPacket.encodeByte(0); // doesn't get used
        outPacket.encodeByte(type);

        return outPacket;
    }

    public static OutPacket sortItemResult(byte type) {
        OutPacket outPacket = new OutPacket(OutHeader.SORT_ITEM_RESULT);

        outPacket.encodeByte(0); // doesn't get used
        outPacket.encodeByte(type);

        return outPacket;
    }

    public static OutPacket clearAnnouncedQuest() {
        return new OutPacket(OutHeader.CLEAR_ANNOUNCED_QUEST);
    }

    public static OutPacket partyResult(PartyResult pri) {
        OutPacket outPacket = new OutPacket(OutHeader.PARTY_RESULT);

        outPacket.encode(pri);

        return outPacket;
    }

    public static OutPacket partyMemberCandidateResult(Set<Char> chars) {
        OutPacket outPacket = new OutPacket(OutHeader.PARTY_MEMBER_CANDIDATE_RESULT);

        outPacket.encodeByte(chars.size());
        for (Char chr : chars) {
            outPacket.encodeInt(chr.getId());
            outPacket.encodeString(chr.getName());
            outPacket.encodeShort(chr.getJob());
            outPacket.encodeShort(chr.getAvatarData().getCharacterStat().getSubJob());
            outPacket.encodeInt(chr.getLevel());
        }

        return outPacket;
    }

    public static OutPacket partyCandidateResult(Set<Party> parties) {
        OutPacket outPacket = new OutPacket(OutHeader.PARTY_CANDIDATE_RESULT);

        outPacket.encodeByte(parties.size());
        for (Party party : parties) {
            Char leader = party.getPartyLeader().getChr();

            outPacket.encodeInt(party.getId());
            outPacket.encodeString(leader.getName());
            outPacket.encodeInt(party.getAvgLevel());
            outPacket.encodeByte(party.getMembers().size());
            outPacket.encodeString(party.getName());
            outPacket.encodeByte(party.getMembers().size());

            for (PartyMember pm : party.getMembers()) {
                outPacket.encodeInt(pm.getCharID());
                outPacket.encodeString(pm.getCharName());
                outPacket.encodeShort(pm.getJob());
                outPacket.encodeShort(pm.getSubSob());
                outPacket.encodeInt(pm.getLevel());
                outPacket.encodeByte(pm.equals(party.getPartyLeader()));
                outPacket.encodeByte(0); // new 200
            }
        }

        return outPacket;
    }

    public static OutPacket guildResult(GuildResult gri) {
        OutPacket outPacket = new OutPacket(OutHeader.GUILD_RESULT);

        gri.encode(outPacket);

        return outPacket;
    }

    public static OutPacket guildSearchResult(Collection<Guild> guilds) {
        OutPacket outPacket = new OutPacket(OutHeader.GUILD_SEARCH_RESULT);

        outPacket.encodeByte(3);
        outPacket.encodeByte(4); // new 218
        outPacket.encodeString("xd1"); // query

        outPacket.encodeByte(true);
        outPacket.encodeByte(false); // if encode, sub for recruiting guilds

        outPacket.encodeByte(true);
        outPacket.encodeByte(false); // if encode, sub for pending guilds

        outPacket.encodeInt(0); // new 218

        outPacket.encodeInt(guilds.size());
        for (Guild g : guilds) {
            outPacket.encodeInt(g.getId());
            outPacket.encodeByte(g.getLevel());
            outPacket.encodeString(g.getName());
            outPacket.encodeString(g.getGuildLeader().getName());
            outPacket.encodeShort(g.getMembers().size());
            outPacket.encodeShort(g.getAverageMemberLevel());
            outPacket.encodeByte(false);
            outPacket.encodeFT(FileTime.currentTime());
            outPacket.encodeByte(false);
            outPacket.encodeString(g.getNotice());
            outPacket.encodeInt(g.getMainActivity());
            outPacket.encodeInt(g.getActiveTimes());
            outPacket.encodeInt(g.getAgeGroup());
            outPacket.encodeByte(g.isAppliable());
        }

        return outPacket;
    }


    public static OutPacket allianceResult(AllianceResult ar) {
        OutPacket outPacket = new OutPacket(OutHeader.ALLIANCE_RESULT);

        outPacket.encode(ar);

        return outPacket;
    }

    public static OutPacket guildBBSResult(GuildBBSPacket gbp) {
        OutPacket outPacket = new OutPacket(OutHeader.GUILD_BBS_RESULT);

        outPacket.encode(gbp);

        return outPacket;
    }

    public static OutPacket flameWizardFlameWalkEffect(Char chr) {
        OutPacket outPacket = new OutPacket(OutHeader.FLAME_WIZARD_FLAME_WALK_EFFECT);

        outPacket.encodeInt(chr.getId());

        return outPacket;
    }

    public static OutPacket flameWizardFlareBlink(Char chr, Position newPosition, boolean used) {
        OutPacket outPacket = new OutPacket(OutHeader.FLAME_WIZARD_FLARE_BLINK);

        outPacket.encodeInt(chr.getId()); //chr
        outPacket.encodeByte(used); //used

        if (used) {

            //Blink - Clear + Teleport
            chr.write(FieldPacket.teleport(newPosition, chr));

        } else {

            //Blink - Set Position
            outPacket.encodeByte(used);
            outPacket.encodeShort(1);
            outPacket.encodePosition(newPosition); //2x encode Short (x/y)
            outPacket.encodePosition(new Position()); //2x encode Short (x/y)
        }

        return outPacket;
    }

    public static OutPacket friendResult(FriendResult friendResult) {
        OutPacket outPacket = new OutPacket(OutHeader.FRIEND_RESULT);

        friendResult.encode(outPacket);

        return outPacket;
    }


    // removed v188?
//    public static OutPacket loadAccountIDOfCharacterFriendResult(Set<Friend> friends) {
//        OutPacket outPacket = new OutPacket(OutHeader.LOAD_ACCOUNT_ID_OF_CHARACTER_FRIEND_RESULT);
//
//        outPacket.encodeInt(friends.size());
//        for(Friend fr : friends) {
//            outPacket.encodeInt(fr.getFriendID());
//            outPacket.encodeInt(fr.getFriendAccountID());
//        }
//
//        return outPacket;
//    }

    public static OutPacket macroSysDataInit(List<Macro> macros) {
        OutPacket outPacket = new OutPacket(OutHeader.MACRO_SYS_DATA_INIT);

        outPacket.encodeByte(macros.size());
        for (Macro macro : macros.stream().sorted(Comparator.comparingInt(Macro::getMacroPos)).collect(Collectors.toList())) {
            macro.encode(outPacket);
        }
        return outPacket;
    }

    public static OutPacket monsterBookSetCard(int id) {
//        OutPacket outPacket = new OutPacket(OutHeader.MONSTER_LIFE_INVITE_ITEM_RESULT);
        OutPacket outPacket = new OutPacket(OutHeader.MONSTER_BOOK_SET_CARD);

        outPacket.encodeByte(id > 0); // false -> already added msg
        if (id > 0) {
            outPacket.encodeInt(id);
            outPacket.encodeInt(1); // card count, but we're just going to stuck with 1.
        }

        return outPacket;
    }

    public static OutPacket characterPotentialReset(PotentialResetType prt, int arg) {
        OutPacket outPacket = new OutPacket(OutHeader.CHARACTER_POTENTIAL_RESET);

        outPacket.encodeByte(prt.ordinal());
        switch (prt) {
            case Pos:
                outPacket.encodeShort(arg);
                break;
            case Skill:
                outPacket.encodeInt(arg);
                break;
            case All:
                break;
        }
        return outPacket;
    }

    public static OutPacket characterPotentialSet(CharacterPotential cp) {
        return characterPotentialSet(true, true, cp.getKey(), cp.getSkillID(), cp.getSlv(), cp.getGrade(), true);
    }

    public static OutPacket characterPotentialSet(boolean exclRequest, boolean changed, short pos, int skillID,
                                                  int skillLevel, short grade, boolean updatePassive) {
        OutPacket outPacket = new OutPacket(OutHeader.CHARACTER_POTENTIAL_SET);

        outPacket.encodeByte(exclRequest);
        outPacket.encodeByte(changed);
        if (changed) {
            outPacket.encodeShort(pos);
            outPacket.encodeInt(skillID);
            outPacket.encodeShort(skillLevel);
            outPacket.encodeShort(grade);
            outPacket.encodeByte(updatePassive);
        }

        return outPacket;
    }

    public static OutPacket characterHonorExp(int exp) {
        OutPacket outPacket = new OutPacket(OutHeader.CHARACTER_HONOR_EXP);

        outPacket.encodeInt(exp);

        return outPacket;
    }

    public static OutPacket cashPetPickUpOnOffResult(boolean changed, boolean on) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_PET_PICK_UP_ON_OFF_RESULT);

        outPacket.encodeByte(on);
        outPacket.encodeByte(changed);

        return outPacket;
    }

    public static OutPacket setSonOfLinkedSkillResult(LinkedSkillResultType lsrt, int sonID, String sonName,
                                                      int originalSkillID, String existingParentName) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_SON_OF_LINKED_SKILL_RESULT);

        outPacket.encodeInt(lsrt.getVal());
        outPacket.encodeInt(originalSkillID);
        switch (lsrt) {
            case SetSonOfLinkedSkillResult_Success:
                outPacket.encodeInt(sonID);
                outPacket.encodeString(sonName);
                break;
            case SetSonOfLinkedSkillResult_Fail_ParentAlreadyExist:
                outPacket.encodeString(existingParentName);
                outPacket.encodeString(sonName);
                break;
            case SetSonOfLinkedSkillResult_Fail_Unknown:
                break;
            case SetSonOfLinkedSkillResult_Fail_MaxCount:
                outPacket.encodeString(existingParentName);
                break;
            case SetSonOfLinkedSkillResult_Fail_DBRequestFail:
                break;
        }

        return outPacket;
    }

    public static OutPacket memorialCubeResult(Equip equip, MemorialCubeInfo mci) {
        OutPacket outPacket = new OutPacket(OutHeader.MEMORIAL_CUBE_RESULT);

        outPacket.encodeLong(equip.getSerialNumber());
        mci.encode(outPacket);

        return outPacket;
    }

    public static OutPacket rebirthFlameResult(int flameItemId, int equipPos, int b1) {
        OutPacket outPacket = new OutPacket(OutHeader.REBIRTH_FLAME_RESULT);

        outPacket.encodeInt(flameItemId);
        outPacket.encodeInt(equipPos);
        outPacket.encodeByte(b1);

        return outPacket;
    }

    public static OutPacket blackCubeResult(Equip equip, int cubeIndex, int remainingCount, MemorialCubeInfo mci) {
        OutPacket outPacket = new OutPacket(OutHeader.BLACK_CUBE_RESULT);

        outPacket.encodeLong(equip.getId());
        mci.encode(outPacket);
        outPacket.encodeInt(remainingCount);
        outPacket.encodeInt(cubeIndex);
        outPacket.encodeByte(true); // bShowAnimation

        return outPacket;
    }

    public static OutPacket whiteCubeResult(Equip equip, int cubeIndex, MemorialCubeInfo mci) {
        OutPacket outPacket = new OutPacket(OutHeader.WHITE_ADDITIONAL_CUBE_RESULT);

        outPacket.encodeLong(equip.getSerialNumber());
        mci.encode(outPacket);
        outPacket.encodeInt(cubeIndex);

        return outPacket;
    }

    public static OutPacket broadcastMsg(BroadcastMsg broadcastMsg) {
        OutPacket outPacket = new OutPacket(OutHeader.BROADCAST_MSG);

        broadcastMsg.encode(outPacket);

        return outPacket;
    }

    public static OutPacket setAvatarMegaphone(Char chr, int megaItemId, List<String> lineList, boolean whisperIcon) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_AVATAR_MEGAPHONE);

        outPacket.encodeInt(megaItemId); // Avatar Megaphone Item ID
        outPacket.encodeString(chr.getName());

        for (String line : lineList) {
            outPacket.encodeString(line);
        }
        chr.encodeChatInfo(outPacket, lineList.toString().replace("[", "").replace("]", "").replace(",", "\r\n"));

        outPacket.encodeInt(chr.getChannel() - 1);
        outPacket.encodeByte(whisperIcon);

        chr.getAvatarData().getAvatarLook().encode(outPacket); // encode AvatarLook
        outPacket.encodeByte(0);

        return outPacket;
    }

    public static OutPacket receiveHyperStatSkillResetResult(int charID, boolean exclRequest, boolean success) {
        OutPacket outPacket = new OutPacket(OutHeader.RECEIVE_HYPER_STAT_SKILL_RESET_RESULT);

        outPacket.encodeByte(exclRequest);
        outPacket.encodeInt(charID);
        outPacket.encodeByte(success);

        return outPacket;
    }

    public static OutPacket mapTransferResult(MapTransferType mapTransferType, byte itemType, List<Integer> hyperrockfields) {
        OutPacket outPacket = new OutPacket(OutHeader.MAP_TRANSFER_RESULT);

        outPacket.encodeByte(mapTransferType.getVal()); // Map Transfer Type
        outPacket.encodeByte(itemType); // Item Type (5 = Cash)
        if (mapTransferType == MapTransferType.DeleteListSend || mapTransferType == MapTransferType.RegisterListSend) {
            for (int fieldid : hyperrockfields) {
                outPacket.encodeInt(fieldid); // Target Field ID
            }
        }

        return outPacket;
    }

    public static OutPacket monsterCollectionResult(MonsterCollectionResultType mcrt, InvType invType, int fullSlots) {
        OutPacket outPacket = new OutPacket(OutHeader.MONSTER_COLLECTION_RESULT);

        outPacket.encodeInt(mcrt.ordinal());
        if (invType != null) {
            outPacket.encodeInt(invType.getVal());
        } else {
            outPacket.encodeInt(0);
        }
        outPacket.encodeInt(fullSlots);

        return outPacket;
    }

    public static OutPacket weatherEffectNotice(WeatherEffNoticeType type, String text, int duration) {
        OutPacket outPacket = new OutPacket(OutHeader.WEATHER_EFFECT_NOTICE);

        outPacket.encodeString(text); // Text
        outPacket.encodeInt(type.getVal()); // Weather Notice Type
        outPacket.encodeInt(duration); // Duration in ms
        outPacket.encodeByte(1); // Forced Notice

        return outPacket;
    }

    public static OutPacket resultInstanceTable(String name, int type, int subType, boolean rightResult, int value) {
        OutPacket outPacket = new OutPacket(OutHeader.RESULT_INSTANCE_TABLE.getValue());

        outPacket.encodeString(name);
        outPacket.encodeInt(type); // nCount
        outPacket.encodeInt(subType);
        outPacket.encodeByte(rightResult);
        outPacket.encodeInt(value);

        return outPacket;
    }

    /**
     * Creates a packet to indicate the golden hammer is finished.
     *
     * @param returnResult See below
     * @param result       when returnResult is:
     *                     0 or 1:
     *                     Anything: Golden hammer refinement applied
     *                     2:
     *                     0: Increased available upgrade by 1
     *                     1: Refining using golden hammer failed
     *                     3:
     *                     1: Item is not upgradable
     *                     2: 2 upgrade increases have been used already
     *                     3: You can't vicious hammer non-horntail necklace
     * @param upgradesLeft amount of upgrades left. NOTE: ((v9 >> 8) & 0xFF) - v9 + 2) (where v9 = upgradesLeft)
     * @return the created packet
     */
    public static OutPacket goldHammerItemUpgradeResult(GoldHammerResult returnResult, int result, int upgradesLeft) {
        OutPacket outPacket = new OutPacket(OutHeader.GOLD_HAMMER_ITEM_UPGRADE_RESULT);

        outPacket.encodeByte(true);
        outPacket.encodeByte(returnResult.getVal());
        outPacket.encodeInt(result);
        if (returnResult == GoldHammerResult.Success) {
            outPacket.encodeInt(upgradesLeft);
        }

        return outPacket;
    }

    public static OutPacket returnToCharacterSelect() {
        return new OutPacket(OutHeader.RETURN_TO_CHARACTER_SELECT);
    }

    public static OutPacket returnToTitle() {
        return new OutPacket(OutHeader.RETURN_TO_TITLE);
    }

    public static OutPacket townPortal(TownPortal townPortal) {
        OutPacket outPacket = new OutPacket(OutHeader.TOWN_PORTAL); // As a response to Enter_TP_Request, creates the Door in the TownField

        outPacket.encodeInt(townPortal.getTownFieldId()); // townFieldId
        outPacket.encodeInt(townPortal.getFieldFieldId()); // field FieldId
        outPacket.encodeInt(townPortal.getSkillid()); // Skill Id
        outPacket.encodePosition(new Position()); // fieldField TownPortal Position

        return outPacket;
    }

    public static OutPacket givePopularityResult(PopularityResultType prType, Char targetChr, int newFame, boolean inc) {
        OutPacket outPacket = new OutPacket(OutHeader.GIVE_POPULARITY_RESULT);

        outPacket.encodeByte(prType.getVal());

        switch (prType) {
            case Success:
                outPacket.encodeString(targetChr.getName());
                outPacket.encodeByte(inc); // true = fame  |  false = defame
                outPacket.encodeInt(newFame);
                break;

            case InvalidCharacterId:
            case LevelLow:
            case AlreadyDoneToday:
            case AlreadyDoneTarget:
                break;

            case Notify:
                outPacket.encodeString(targetChr.getName());
                outPacket.encodeByte(inc); // true = fame  |  false = defame
                break;
        }

        return outPacket;
    }

    public static OutPacket requestEventList(int levelReq, boolean show, List<EventListData.EventListDataRecord> eventList) {
        OutPacket outPacket = new OutPacket(OutHeader.REQUEST_EVENT_LIST);

        outPacket.encodeInt(levelReq);
        outPacket.encodeByte(show);
        if (show) {
            outPacket.encodeString("");
            outPacket.encodeByte(0);
            outPacket.encodeInt(0);

            EventListData.encode(outPacket, eventList);

            outPacket.encodeInt(0);
            outPacket.encodeInt(0);
        }

        return outPacket;
    }

    public static OutPacket randomPortalNotice(RandomPortal randomPortal) {
        OutPacket outPacket = new OutPacket(OutHeader.RANDOM_PORTAL_NOTICE);

        outPacket.encodeByte(randomPortal.getAppearType().getVal());
        outPacket.encodeInt(randomPortal.getField().getId());

        return outPacket;
    }

    public static OutPacket randomMissionResult(RandomMissionType type, int arg1, int arg2) {
        OutPacket outPacket = new OutPacket(OutHeader.RANDOM_MISSION_RESULT);

        outPacket.encodeInt(type.getVal());
        outPacket.encodeInt(arg1);
        outPacket.encodeInt(arg2);

        return outPacket;
    }

    public static OutPacket matrixUpdate(Char chr, boolean update, int type, int typeArg) {
        OutPacket outPacket = new OutPacket(OutHeader.MATRIX_UPDATE);

        List<MatrixRecord> matrixRecords = chr.getSortedMatrixRecords();
        outPacket.encodeInt(matrixRecords.size());
        for (MatrixRecord mr : matrixRecords) {
            outPacket.encode(mr);
        }

        outPacket.encodeInt(GameConstants.MAX_NODE_SLOTS);
        for (int i = 0; i < GameConstants.MAX_NODE_SLOTS; i++) {
            MatrixRecord mr = chr.getMatrixRecordByPosition(i);
            MatrixSlot ms = chr.getMatrixSlotByPosition(i);
            outPacket.encodeInt(mr != null ? matrixRecords.indexOf(mr) : -1); // nodeID
            outPacket.encodeInt(i); // matrix Slot position
            outPacket.encodeInt(ms.getEnhancementLv()); // slot enhancement level
            outPacket.encodeByte(ms.isUnlockedByPurchase()); // bShow Unlocked Symbol
        }

        outPacket.encodeByte(update);
        if (update) {
            outPacket.encodeInt(type);
            if (type == MatrixUpdateRequest.Activate.getVal()) {
                outPacket.encodeInt(typeArg);
            }
        }

        return outPacket;
    }

    public static OutPacket nodestoneOpenResult(MatrixRecord mr) {
        OutPacket outPacket = new OutPacket(OutHeader.NODE_STONE_OPEN_RESULT);

        outPacket.encodeInt(mr.getIconID());
        outPacket.encodeInt(1); // ?
        outPacket.encodeInt(mr.getSkillID1());
        outPacket.encodeInt(mr.getSkillID2());
        outPacket.encodeInt(mr.getSkillID3());
        outPacket.encodeInt(0); // ?

        return outPacket;
    }

    public static OutPacket nodeEnhanceResult(int pos, int expGained, int oldSlv, int newSlv) {
        OutPacket outPacket = new OutPacket(OutHeader.NODE_ENHANCE_RESULT);

        outPacket.encodeInt(pos);
        outPacket.encodeInt(expGained);
        outPacket.encodeInt(oldSlv);
        outPacket.encodeInt(newSlv);

        return outPacket;
    }

    public static OutPacket nodeDisassembleResult(int shardsGained) {
        OutPacket outPacket = new OutPacket(OutHeader.NODE_DISASSEMBLE_RESULT);

        outPacket.encodeInt(shardsGained);

        return outPacket;
    }

    public static OutPacket nodeCraftResult(MatrixRecord mr, int quantity) {
        OutPacket outPacket = new OutPacket(OutHeader.NODE_CRAFT_RESULT);

        outPacket.encodeInt(mr.getIconID());
        outPacket.encodeInt(1); // ?
        outPacket.encodeInt(mr.getSkillID1());
        outPacket.encodeInt(mr.getSkillID2());
        outPacket.encodeInt(mr.getSkillID3());
        outPacket.encodeInt(quantity);

        return outPacket;
    }

    public static OutPacket nodeOpenVmatrix(boolean success) { // PIN Correct?
        OutPacket outPacket = new OutPacket(OutHeader.NODE_OPEN_VMATRIX);

        outPacket.encodeInt(2);
        outPacket.encodeByte(success);

        return outPacket;
    }

    public static OutPacket antiMacroResult(final byte[] image,
                                            AntiMacro.AntiMacroResultType notificationType,
                                            AntiMacro.AntiMacroType antiMacroType,
                                            int subType) {
        OutPacket outPacket = new OutPacket(OutHeader.ANTI_MACRO_RESULT);

        var secureOutPacket = new OutPacket();
        secureOutPacket.encodeInt(notificationType.getVal());
        secureOutPacket.encodeInt(antiMacroType.getVal());
        secureOutPacket.encodeInt(subType); // nSubType
        secureOutPacket.encodeString(""); // targetChr
        outPacket.encodeEncryptedBuffer(secureOutPacket.getData());

        if (notificationType == AntiMacro.AntiMacroResultType.AntiMacroRes) {
            switch (antiMacroType.getVal()) {
                case 13:
                case 16:
                case 20:
                case 24:
                case 25:
                case 26:
                case 28:
                case 31:
                    // Violetta
                    outPacket.encodeInt(1);
                    outPacket.encodeInt(2);
                    outPacket.encodeInt(3);
                    outPacket.encodeInt(4);
                    break;
            }
            outPacket.encodeByte(true); // false = transparent no timer, true = solid yes timer
            outPacket.encodeInt(image.length);
            outPacket.encodeArr(image);
        } else {
            outPacket.encodeString("");
        }

        //Wack fix for LD crashing
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket setPassenserRequest(int requestorChrId) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_PASSENGER_REQUEST);

        outPacket.encodeInt(requestorChrId);

        return outPacket;
    }

    public static OutPacket platformarEnterResult(boolean wrap) {
        OutPacket outPacket = new OutPacket(OutHeader.PLATFORMAR_ENTER_RESULT);

        outPacket.encodeByte(wrap);

        return outPacket;
    }

    public static OutPacket platformarOxyzen(int oxyzen) {
        OutPacket outPacket = new OutPacket(OutHeader.PLATFORMAR_OXYZEN);

        outPacket.encodeInt(oxyzen); // casted to long in client side

        return outPacket;
    }

    public static OutPacket setMaplePoints(int maplePoints) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAPLE_POINT);

        outPacket.encodeInt(maplePoints);

        return outPacket;
    }

    public static OutPacket linkSkillResult(int skillID, LinkSkillResult lsr) {
        OutPacket outPacket = new OutPacket(OutHeader.LINK_SKILL_RESULT);

        outPacket.encodeInt(skillID);
        outPacket.encodeInt(lsr.ordinal());

        return outPacket;
    }

    public static OutPacket unlinkedSkillInfo(LinkSkill linkSkill) {
        return unlinkedSkillInfo(Collections.singleton(linkSkill));
    }

    public static OutPacket unlinkedSkillInfo(Set<LinkSkill> linkSkills) {
        OutPacket outPacket = new OutPacket(OutHeader.UNLINKED_SKILL_INFO);

        outPacket.encodeInt(linkSkills.size());
        for (LinkSkill ls : linkSkills) {
            outPacket.encodeInt(ls.getLinkSkillID());
            outPacket.encodeInt(ls.getOriginID());
        }

        return outPacket;
    }

    public static OutPacket linkedSkillInfo(Char chr, LinkSkill linkSkill) {
        OutPacket outPacket = new OutPacket(OutHeader.LINKED_SKILL_INFO);

        linkSkill.encode(chr, outPacket);

        var stackingSkillID = linkSkill.getStackSkill();
        outPacket.encodeInt(stackingSkillID);
        if (stackingSkillID != 0) {
            outPacket.encodeInt(LinkSkillsModule.getStackLinkLevel(chr.getAccount(), stackingSkillID));
        }

        return outPacket;
    }

    public static OutPacket towerChairSettingResult() {
        OutPacket outPacket = new OutPacket(OutHeader.TOWER_CHAIR_SETTING_RESULT);

        return outPacket;
    }

    public static OutPacket unionPresetInfoResult(int preset, boolean unlocked, UnionBoard ub) {
        OutPacket outPacket = new OutPacket(OutHeader.UNION_PRESET_INFO_RESULT);

        outPacket.encodeInt(preset);
        outPacket.encodeByte(unlocked);
        if (unlocked) {
            outPacket.encode(ub);
        }

        return outPacket;
    }

    public static OutPacket powerCrystalInfo(List<Item> powerCrystals) {
        OutPacket outPacket = new OutPacket(OutHeader.POWER_CRYSTAL_INFO);
        outPacket.encodeInt(powerCrystals.size());
        for(Item item : powerCrystals) {
            PowerCrystal powerCrystal = item.getPowerCrystalInfo();
            outPacket.encodeLong(item.getId());
            outPacket.encodeInt(powerCrystal.getBossId());
            outPacket.encodeInt(powerCrystal.getPlayerCount());
            outPacket.encodeLong(powerCrystal.getPrice());
            outPacket.encodeLong(0);
            outPacket.encodeFT(powerCrystal.getObtainedDate());
        }
        return outPacket;
    }

    public static OutPacket firstEnterReward(Set<FirstEnterReward> firstEnterRewards, FirstEnterRewardPacketType type, int receiveQuantity) {
        OutPacket outPacket = new OutPacket(OutHeader.FIRST_ENTER_REWARD);
        outPacket.encodeByte((byte)type.getVal());

        switch (type) {
            case Load_Items: // Item
                int size = firstEnterRewards.size();
                outPacket.encodeLong(0);
                outPacket.encodeInt(size);

                for (FirstEnterReward firstEnterReward : firstEnterRewards) {
                    int mask = 9; // hardcoded
                    outPacket.encodeInt((int)firstEnterReward.getId()); // nIdx
                    if ((mask & 1) != 0) {
                        outPacket.encodeFT(firstEnterReward.getExpireTime());
                        outPacket.encodeFT(firstEnterReward.getExpireTime()); // ftRewardExpireDate
                        outPacket.encodeFT(firstEnterReward.getExpireTime());
                        outPacket.encodeFT(firstEnterReward.getExpireTime());
                    }
                    if ((mask & 2) != 0) {
                        outPacket.encodeInt(2000000);
                        outPacket.encodeInt(2000000);
                        outPacket.encodeInt(2000000);
                        outPacket.encodeInt(2000000);
                        outPacket.encodeInt(2000000);
                        outPacket.encodeInt(2000000);
                        outPacket.encodeString("2000000");
                        outPacket.encodeString("2000000");
                        outPacket.encodeString("2000000");
                    }
                    outPacket.encodeInt(firstEnterReward.getRewardType().getVal()); // nRewardType: 1 = Item, 2 = Item, 3 = Maple Points, 4 = Meso, 5 = EXP
                    int itemId = 0;
                    int quantity = 0;
                    if(firstEnterReward.getRewardType() == FirstEnterRewardType.Item){
                        itemId = firstEnterReward.getItemId();
                        quantity = firstEnterReward.getQuantity();
                    }
                    outPacket.encodeInt(itemId); // nItemId
                    outPacket.encodeInt(quantity); // nQuantity
                    outPacket.encodeInt(12);
                    outPacket.encodeFT(firstEnterReward.getExpireTime());
                    outPacket.encodeInt(13);
                    int maplePoints = 0;
                    if(firstEnterReward.getRewardType() == FirstEnterRewardType.Maple_Points){
                        maplePoints = firstEnterReward.getQuantity();
                    }
                    outPacket.encodeInt(maplePoints); // nMaplePoints

                    long meso = 0L;
                    if(firstEnterReward.getRewardType() == FirstEnterRewardType.Meso){
                        meso = firstEnterReward.getQuantity();
                    }
                    outPacket.encodeLong(meso); // nMeso

                    int exp = 0;
                    if(firstEnterReward.getRewardType() == FirstEnterRewardType.Exp){
                        exp = firstEnterReward.getQuantity();
                    }
                    outPacket.encodeInt(exp); // nExp
                    outPacket.encodeInt(17);
                    outPacket.encodeInt(18);
                    outPacket.encodeString("2000000");
                    outPacket.encodeString("2000000");
                    outPacket.encodeString("2000000");
                    if ((mask & 4) != 0) {
                        outPacket.encodeString("2000000");
                    }
                    if ((mask & 8) != 0) {
                        outPacket.encodeString(firstEnterReward.getDescription());
                    }
                    boolean canClaim = true;
                    outPacket.encodeInt(canClaim ? 0 : 1);
                    outPacket.encodeInt(21);
                }
                break;
            case Nx_Claimed: // Maple Points
                outPacket.encodeInt(1); // nIdx
                outPacket.encodeInt(receiveQuantity); // nAmount
                outPacket.encodeInt(0);
                break;
            case Item_Claimed: // Game Item
                outPacket.encodeInt(1); // nIdx
                outPacket.encodeInt(1302000); // nItemId?
                outPacket.encodeInt(0);
            case Cash_Item_Claimed: // Cash Item
                outPacket.encodeInt(1); // nIdx
                outPacket.encodeInt(1005458); // nItemId?
                outPacket.encodeInt(0);
                break;
            case Meso_Claimed: // Mesos
                outPacket.encodeInt(1); // nIdx
                outPacket.encodeInt(receiveQuantity); // nAmount
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                break;
            case Exp_Claimed: // Exp
                outPacket.encodeInt(1); // nIdx
                outPacket.encodeInt(receiveQuantity); // nAmount
                outPacket.encodeInt(0);
                break;
            case Error: // Error
                outPacket.encodeByte(101); // 101~103, errorType
                break;
            case Error2: // Error 2
                outPacket.encodeByte(101); // 0/33/147, errorType
                break;
            case Meso_Error: // Meso Error
            case Exp_Error: // Exp Error
            case Time_Expired: // Error: Time has passed
                break;
        }

        return outPacket;
    }

    public static OutPacket emoticonResult(EmoticonType type, int emoticonId, short fromPos, short toPos, String shortcut) {
        OutPacket outPacket = new OutPacket(OutHeader.EMOTICON_RESULT);

        outPacket.encodeByte(type.getVal());
        switch (type) {
            case UnlockGroupChatSlot:
                outPacket.encodeShort(0); // nGroupChatIdx
                break;
            case MoveEmoticonGroup:
                outPacket.encodeShort(fromPos);
                outPacket.encodeShort(toPos);
                break;
            case Unk2:
                outPacket.encodeShort(0);
                break;
            case Unk3:
                outPacket.encodeShort(0);
                break;
            case Unk4:
                outPacket.encodeShort(0);
                break;
            case AddEmoticon:
                outPacket.encodeInt(emoticonId);
                outPacket.encodeShort(toPos);
                break;
            case RemoveEmoticon:
                outPacket.encodeInt(emoticonId);
                break;
            case MoveEmoticon:
                outPacket.encodeShort(fromPos);
                outPacket.encodeShort(toPos);
                break;
            case AddEmoticonShortcut:
                outPacket.encodeShort(toPos);
                outPacket.encodeInt(emoticonId);
                outPacket.encodeString(shortcut, 20); // fixed length
                outPacket.encodeByte(0);
                break;
            case MoveEmoticonShortcut:
                outPacket.encodeShort(fromPos);
                outPacket.encodeShort(toPos);
                break;
            case RemoveEmoticonShortcut:
                outPacket.encodeShort(fromPos);
                break;


        }

        return outPacket;
    }

    public static OutPacket updateDBChar(Char chr, DBChar mask) {
        OutPacket outPacket = new OutPacket(OutHeader.UPDATE_DBCHAR);

        var bool = true;
        outPacket.encodeByte(bool);
        if (bool) {
            CharEncoder.encode(chr, outPacket, mask);
        }

        return outPacket;
    }

    public static OutPacket aranDireWolfCurse(Map<Mob, Integer> mobs) {
        OutPacket outPacket = new OutPacket(OutHeader.ARAN_DIRE_WOLF_CURSE);

        outPacket.encodeInt(mobs.size());
        for (var entry : mobs.entrySet()) {
            var mob = entry.getKey();
            var direWolfCurseCount = entry.getValue();

            outPacket.encodeInt(mob.getObjectId());
            outPacket.encodeInt(direWolfCurseCount);
            outPacket.encodeInt(10000); // curse duration
        }

        return outPacket;
    }

    public static OutPacket updateVoyageInfo(VoyageInfoType type, Vessel vessel) {
        return updateVoyageInfo(type, vessel, false, 0);
    }

    public static OutPacket updateVoyageInfo(VoyageInfoType type, int routeId) {
        return updateVoyageInfo(type, null, false, routeId);
    }

    public static OutPacket updateVoyageInfo(VoyageInfoType type, Vessel vessel, boolean isInParty, int routeId) {
        OutPacket outPacket = new OutPacket(OutHeader.UPDATE_VOYAGE_INFO);

        outPacket.encodeByte(type.getVal());
        switch (type) {
            // More unknown/unhandled VoyageInfoTypes
            case UpdateInventoryInfo:
                outPacket.encodeByte(isInParty);
/*
                var encodeInventoryInfo = true;
                outPacket.encodeByte(encodeInventoryInfo);
                if (encodeInventoryInfo) {
                    var inventoryItems = commerce.getInventory().getItemIds();
                    outPacket.encodeInt(inventoryItems.size());
                    for (var item : inventoryItems) {
                        outPacket.encodeInt(item);
                        outPacket.encodeInt(7);  // maybe price or someshit
                        outPacket.encodeFT(FileTime.currentTime());
                    }
                }*/
                break;
            case UpdateVesselInfo:
            case UpdateVesselInfo_2:
                var encodeVesselInfo = true;
                outPacket.encodeByte(encodeVesselInfo);
                if (encodeVesselInfo) {
                    outPacket.encode(vessel);
                }
                break;
            case UnlockVoyageRoute:
                outPacket.encodeByte(true); // locked
                outPacket.encodeByte(routeId);
                break;
        }

        return outPacket;
    }

    // Used to unlock Ayame skills
    public static OutPacket setRolePlayingCharacterInfo(RolePlayingType type, boolean transferField) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_ROLE_PLAYING_CHARACTER_INFO);

        outPacket.encodeInt(type.getVal());
        outPacket.encodeByte(transferField);

        return outPacket;
    }

    public static OutPacket blackList(BlackListTabType tab, BlackListResult result, BlackListEntry entry, List<BlackListEntry> entries) {
        OutPacket outPacket = new OutPacket(OutHeader.BLACK_LIST);

        outPacket.encodeByte(tab.ordinal()); // Individual = 0 | Guild = 1
        outPacket.encodeByte(result.getVal()); // BlackListResult Type

        switch (result) {
            case BlackListInsertRequestDone: // BlackListInsertRequestDone
            case BlackListDeleteRequestDone: // BlackListDeleteRequestDone
                outPacket.encodeString(entry.getTargetName()); // Target IGN
                if (tab.equals(BlackListTabType.Individual)) {
                    outPacket.encodeString(entry.getNickName()); // Target Nickname (?)
                    outPacket.encodeInt(entry.getChrId()); // Target Chr Id
                    outPacket.encodeInt(0); // ? Target Account Id (??)
                } else if (tab.equals(BlackListTabType.Guild)) {
                    outPacket.encodeInt(entry.getGuildId()); // Guild Id
                }
                break;
            case EncodeBlackListView:
                if (tab.equals(BlackListTabType.Individual)) {
                    outPacket.encodeShort(entries.size());

                    for (var e : entries) {
                        outPacket.encodeString(e.getTargetName());
                        outPacket.encodeString(e.getNickName());
                        outPacket.encodeInt(e.getChrId());
                        outPacket.encodeInt(0); // ? Target Account Id (??)
                    }
                } else if (tab.equals(BlackListTabType.Guild)) {
                    // TODO  Packet Structure
                }
                break;
            case FailedRequest: // Failed to make the request. Please try again later.
                break;
            case CharacterNotInList: // This character isn't on the list yet.
                break;
            case CannotAddAdminCharacter: // You cannot add the Administrator character as your friend.
                break;
            case IsAlreadyRegistered: // {0} already has their {1} registered.
                outPacket.encodeString(entry.getTargetName());
                outPacket.encodeString(entry.getNickName());
                break;
            case IsAlreadyBeingUsed: // {1} is already being used.
                outPacket.encodeString(entry.getTargetName());
                outPacket.encodeString(entry.getNickName());
                break;
            case IsInFriendList: // {0} is already on your friends list. Remove them and try again.
            case IsInFriendList2: // {0} is already on your friends list. Remove them and try again.
                outPacket.encodeString(entry.getTargetName()); // Target IGN
                outPacket.encodeString(entry.getNickName()); // Target Nickname (?)
                outPacket.encodeInt(entry.getChrId()); // Target Chr Id
                outPacket.encodeInt(0); // ? Target Account Id (??)
                break;
        }

        return outPacket;
    }

    public static OutPacket fieldSetVariable(String key, String value) {
        OutPacket outPacket = new OutPacket(OutHeader.FIELD_SET_VARIABLE);

        outPacket.encodeString(key);
        outPacket.encodeString(value);

        return outPacket;
    }

    public static OutPacket cashShopPreviewInfo(Map<Integer, Collection<Integer>> items) {
        OutPacket outPacket = new OutPacket(OutHeader.CASH_SHOP_PREVIEW_INFO);

        outPacket.encodeByte(items.size());
        items.forEach((cashItem, itemList) -> {
            outPacket.encodeByte(true); // ?

            outPacket.encodeInt(cashItem);
            outPacket.encodeByte(0); // ?

            outPacket.encodeShort(itemList.size());
            for (var item : itemList) {
                outPacket.encodeInt(item); // Male
                outPacket.encodeInt(item); // Female
            }
        });

        // Same as ^, but duplicated?
        var size = 0;
        outPacket.encodeByte(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeByte(true); // bDecode
            outPacket.encodeInt(0);

            var size2 = 0;
            outPacket.encodeShort(size2);
            for (int k = 0; k < size2; k++) {
                outPacket.encodeByte(true);

                var size3 = 0;
                outPacket.encodeShort(size3);
                for (int j = 0; j < size3; j++) {
                    outPacket.encodeInt(0);
                    outPacket.encodeInt(0);
                }
            }
        }

        size = 0;
        outPacket.encodeInt(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // nItemId
            outPacket.encodeInt(0);
            outPacket.encodeLong(0);
            outPacket.encodeLong(0);

            var size2 = 0;
            outPacket.encodeInt(size2);
            for (int j = 0; j < size2; j++) {
                outPacket.encodeByte(0);
                outPacket.encodeInt(0);

                var size3 = 0;
                outPacket.encodeInt(size3);
                for (int k = 0; k < size3; k++) {
                    outPacket.encodeInt(0);
                }
            }
        }

        return outPacket;
    }

      public static OutPacket selectSoulCollectionResult(SoulCollectionEntry entry) {
        OutPacket outPacket = new OutPacket(OutHeader.CHANGE_SOUL_COLLECTION_RESULT);

        outPacket.encode(entry);

        return outPacket;
    }

    public static OutPacket towerResultUIOpen(int floor, int timeSeconds, int ozPoints, int exp, int itemId, int quantity) {
        OutPacket outPacket = new OutPacket(OutHeader.TOWER_RESULT_UI_OPEN);

        outPacket.encodeInt(floor);
        outPacket.encodeInt(timeSeconds);
        outPacket.encodeInt(ozPoints);
        outPacket.encodeInt(exp);
        outPacket.encodeInt(itemId);
        outPacket.encodeInt(quantity);

        return outPacket;
    }

    public static OutPacket topTowerRankResult(List<RankingResult> rankingResults) {
        OutPacket outPacket = new OutPacket(OutHeader.TOP_TOWER_RANK_RESULT);

        outPacket.encodeInt(rankingResults.size());
        for (var ranking : rankingResults) {
            outPacket.encodeInt(0); // chrId
            outPacket.encodeInt(0);
            outPacket.encodeString(ranking.getChrNames().get(0), 13);
            outPacket.encodeInt((int) ranking.getAmount());
            outPacket.encodeLong(ranking.getRankingTime());
            outPacket.encodeLong(0);
        }

        return outPacket;
    }

    public static OutPacket friendTowerRankResult(List<RankingResult> rankingResults) {
        OutPacket outPacket = new OutPacket(OutHeader.FRIEND_TOWER_RANK_RESULT);

        outPacket.encodeInt(rankingResults.size());
        for (var ranking : rankingResults) {
            outPacket.encodeInt(0); // chrId
            outPacket.encodeInt(0);
            outPacket.encodeString(ranking.getChrNames().get(0), 13);
            outPacket.encodeInt((int) ranking.getAmount());
            outPacket.encodeLong(ranking.getRankingTime());
            outPacket.encodeLong(0);
        }

        return outPacket;
    }

    public static OutPacket partyQuestRankingResult(List<RankingResult> rankingResults, boolean needsTime) {
        OutPacket outPacket = new OutPacket(OutHeader.PARTY_QUEST_RANKING_RESULT);

        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(needsTime ? 0 : -1); // type  0,1,2  0=time, 1=monsters, 2=items, -1=block, -2=brown crown, -3=silver crown, -4=gold crown

        outPacket.encodeInt(rankingResults.size());
        for (var rankingResult : rankingResults) {
            outPacket.encodeInt(rankingResult.getRankingTime()); // time
            outPacket.encodeInt(rankingResult.getChrNames().size());
            for (var chrName : rankingResult.getChrNames()) {
                outPacket.encodeString(chrName);
            }
        }

        return outPacket;
    }

    public static OutPacket deathPenalty(boolean firstSet, int totalTime, int remainTime, int expR, int dropR) {
        OutPacket outPacket = new OutPacket(OutHeader.DEATH_PENALTY);

        outPacket.encodeByte(firstSet ? 0 : 1); // update on map change
        outPacket.encodeByte(0);
        outPacket.encodeInt(totalTime);
        outPacket.encodeInt(remainTime);
        outPacket.encodeInt(expR);
        outPacket.encodeInt(dropR);

        return outPacket;
    }

    public static OutPacket hyperStatSkillUpdateResult(HyperStatsManager hsm, boolean encodeSkills) {
        OutPacket outPacket = new OutPacket(OutHeader.HYPER_STAT_SKILL_UPDATE_RESULT);

        outPacket.encodeByte(hsm.getCurrentPreset());
        outPacket.encodeByte(encodeSkills);

        if (encodeSkills) {
            hsm.encode(outPacket);
        }

        return outPacket;
    }

    public static OutPacket setUserCustomTitle(int lookTitle, int statTitle, String name, FileTime expire) {
        var outPacket = new OutPacket(OutHeader.SET_USER_CUSTOM_TITLE);

        outPacket.encodeInt(lookTitle);
        outPacket.encodeInt(statTitle);
        outPacket.encodeString(name);
        outPacket.encodeFT(expire);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket updateUserCustomTitle(int lookTitle, int statTitle, String name, FileTime expire) {
        var outPacket = new OutPacket(OutHeader.UPDATE_USER_CUSTOM_TITLE);

        outPacket.encodeInt(lookTitle);
        outPacket.encodeInt(statTitle);
        outPacket.encodeString(name);
        outPacket.encodeFT(expire);

        return outPacket;
    }
}
