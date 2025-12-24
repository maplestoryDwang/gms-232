package net.swordie.ms.client.guild.result;

import net.swordie.ms.ServerConstants;
import net.swordie.ms.util.Util;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Created on 3/21/2018.
 */
public enum GuildType {
    Req_CheckGuildName(1),
    Req_CreateGuildAgree(2),

    Req_JoinGuild(3),
    Req_JoinGuildDirect(4),
    Req_UpdateJoinState(5),
    Req_WithdrawGuild(6),
    Req_KickGuild(7),
    Req_RemoveGuild(8),
    Req_IncMaxMemberNum(9),

    Req_SetMemberGrade(10),

    Req_SetGradeNameAndPermissions(12),
    Req_AddGrade(13),
    Req_DeleteGrade(14),

    Req_SetMark(16), // *
    Req_SetNotice(17),
    Req_SetAdmission(18),
    Req_InputMark(19),

    Req_CheckQuestWaiting(24), // unsure from here
    Req_InsertQuestWaiting(26),
    Req_CancelQuestWaiting(27),

    Req_IncPoint(27),
    Req_IncCommitment(28),
    Req_ResetSkills(29),
    Req_ChangeGuildMaster(30),

    Req_FindGuildByCid(31),
    Req_FindGuildByGid(32),
    Req_LoadGuild(33),
    Req_InviteGuild(34),
    Req_CheckIn(35),

    Req_SetGGP(38),

    Req_BattleSkillOpen(38),
    Req_Search(39),
    Req_SearchByGid(40),

    Req_InputGuildName(41),
    Req_InputGuildNameConfirm(42),

    Req_SetSkill(43),
    Req_SkillLevelSetUp(44),

    Req_UseActiveSkill(46),
    Req_UseADGuildSkill(47),
    Req_ExtendSkill(48),

    Req_OpenGuildPanel(50),

    Req_Help(52),

    // Results ------------------------------
    Res_LoadGuild_Done(53), // *

    Res_FindGuild_Done(55),

    Res_CheckGuildName_Available(56),
    Res_CheckGuildName_AlreadyUsed(57), // *
    Res_CheckGuildName_Unknown(58),

    Res_CreateGuildAgree_Reply(59),
    Res_CreateGuildAgree_Unknown(60),
    Res_CreateNewGuild_Done(61),
    Res_CreateNewGuild_AlreadyJoined(62),
    Res_CreateNewGuild_GuildNameAlreayExist(63),
    Res_CreateNewGuild_Beginner(64),
    Res_CreateNewGuild_Disagree(65),
    Res_CreateNewGuild_NotFullParty(66),
    Res_CreateNewGuild_AlreadyInProgress(67),
    Res_CreateNewGuild_Unknown(68),

    Res_JoinGuild_Done(69),
    Res_JoinGuild_AlreadyJoined(70),
    Res_JoinGuild_AlreadyJoinedToUser(71),
    Res_JoinGuild_AlreadyFull(72),
    Res_JoinGuild_LimitRequest(73),
    Res_JoinGuild_NotAcceptRequest(74),
    Res_JoinGuild_UnknownUser(75),
    Res_JoinGuild_NonRequestFindUser(76),
    Res_JoinGuild_NonRequestExistUser(77),
    Res_JoinGuild_Unknown(77),

    Res_JoinRequest_Done(78),
    Res_JoinRequest_Cancelled(79),
    Res_JoinRequest_DoneToUser(80),
    Res_JoinRequest_Unknown2(81),
    Res_JoinRequest_AlreadyFull(82),
    Res_JoinRequest_LimitTime(83),
    Res_JoinRequest_AlreadyMade(84),
    Res_JoinRequest_Unknown(85),
    Res_JoinCancelRequest_Done(86),

    Res_WithdrawGuild_Done(87),
    Res_WithdrawGuild_Done2(88), // *
    Res_WithdrawGuild_NotJoined(89),
    Res_WithdrawGuild_Unknown(90),

    Res_KickGuild_Done(91),
    Res_KickGuild_NotJoined(92),
    Res_KickGuild_Unknown(93),

    Res_RemoveGuild_Done(94),
    Res_RemoveGuild_NotExist(95),
    Res_RemoveGuild_Unknown(96),
    Res_RemoveRequestGuild_Done(97),

    Res_InviteGuild_BlockedUser(98),
    Res_InviteGuild_BlockedRequests(99),
    Res_InviteGuild_AlreadyInvited(100),
    Res_InviteGuild_Rejected(101),
    Res_InviteGuild_DoneUser(102),
    Res_InviteGuild_Done(103),
    Res_InviteGuild_Unknown(104),
    Res_InviteGuild_NotExist(105),
    Res_InviteGuild_NoGuild(106),
    Res_InviteGuild_AlreadyInGuild(107),
    Res_InviteGuild_LimitMembers(108),

    Res_AdminCannotCreate(109),
    Res_AdminCannotInvite(110),

    Res_IncMaxMemberNum_Done(111),
    Res_IncMaxMemberNum_Unknown(112),

    Res_ChangeMemberName(113),
    Res_ChangeRequestUserName(114),
    Res_ChangeLevelOrJob(115),
    Res_NotifyLoginOrLogout(116),

    Res_SetGradeName_Done(-1),
    Res_SetGradeName_Unknown(-1),
    Res_SetPermission_Done(-1),
    Res_SetPermission_Unknown(-1),

    Res_SetEveryoneMemberGrade_Done(117),
    Res_SetEveryoneMemberGrade_Unknown1(118),
    Res_SetEveryoneMemberGrade_Unknown2(119),
    Res_SetEveryoneMemberGrade_Unknown3(120),
    Res_SetEveryoneMemberGrade_TryAgainLater(121),

    Res_SetGradeNameAndPermission_Done(122),
    Res_SetGradeNameAndPermission_Unknown(123),

    Res_AddGrade_Done(124),
    Res_AddGrade_Unknown(125),

    Res_DeleteGrade_Done(126),
    Res_DeleteGrade_Unknown(127),

    Res_SetMemberGrade_Done(128),
    Res_SetMemberGrade_Unknown(129),

    Res_SetMemberCommitment_Done(130),
    Res_SetMemberCommitment_Unknown(131),

    Res_SetMark_Done(132),
    Res_SetMark_Unknown(133),
    Res_SetCustomMark_NeedLv2(135),
    Res_SetCustomMark_NeedLv10(136),
    Res_SetCustomMark_LimitTime(137),
    Res_SetCustomMark_NeedLv10_2(138),
    Res_SetCustomMark_NeedLv10_3(139),
    Res_SetCustomMark_TooLarge(139),
    Res_SetCustomMark_Unknown(141),

    Res_SetNotice_Done(142),
    Res_SetNotice_Unkown(143),

    Res_SetAdmission_Done(144),
    Res_SetAdmission_Unknown(145),

    Res_Advertise_Done(146),
    Res_Advertise_Unknown(147),
    Res_Advertise_NotEnoughGP(148),

    Res_InsertQuest(149),
    Res_NoticeQuestWaitingOrder(150),
    Res_SetGuildCanEnterQuest(151),

    Res_IncPoint_Done(152),
    Res_ShowGuildRanking(153),
    Res_SetGGP_Done(154),

    Res_GuildQuest_NotEnoughUser(155),
    Res_GuildQuest_RegisterDisconnected(156),
    Res_GuildQuest_NoticeOrder(157),

    Res_Authkey_Update(158),
    Res_ResetSkill_Done(159),

    Res_SetSkill_Done(160),
    Res_SetSkill_Extend_Unknown(161),
    Res_SetSkill_LevelSet_Unknown(162),
    Res_SetSkill_ResetBattleSkill_Done(163),
    Res_SetSkill_ResetBattleSkill_Unknown(164),
    Res_SetSkill_ResetBattleSkill_NotEnoughGP(165),
    Res_SetSkill_ResetBattleSkill_AlreadyReset(166),
    Res_SetSkill_ResetBattleSkill_Unknown1(167),
    Res_SetSkill_ResetBattleSkill_Unknown2(168),
    Res_SetSkill_ResetBattleSkill_Unknown3(169),

    Res_UseSkill_Success(170),
    Res_UseSkill_Err(171),
    Res_UseSkill_Unk1(172),

    Res_ChangeName_Done(173),
    Res_ChangeName_Unknown(174),

    Res_ChangeMaster_Done(175),
    Res_ChangeMaster_Unknown(176),
    Res_ChangeMaster_DoneUser(177),

    Res_BlockedBehaviorCreate(178),
    Res_BlockedBehaviorJoin(179),

    Res_BattleSkillOpen(182),

    Res_Rank_Refresh(185),

    No(-1),
    ;

    private byte val;

    GuildType(int val) {
        this.val = (byte) val;
    }

    public static GuildType getTypeByVal(byte val) {
        return Arrays.stream(values()).filter(grt -> grt.getVal() == val).findAny().orElse(null);
    }

    public byte getVal() {
        return val;
    }


    public static void main(String[] args) {
        File file = new File(ServerConstants.DIR + "\\src\\main\\java\\net\\swordie\\ms\\client\\guild\\result\\GuildType.java");
        int change = 1;
        GuildType checkOp = null;
        try (Scanner s = new Scanner(file)) {
            while (s.hasNextLine()) {
                String line = s.nextLine();
                if (line.contains(",") && line.contains("(")) {
                    String[] split = line.split("[()]");
                    String name = split[0];
                    if (!Util.isNumber(split[1])) {
                        System.out.println(line);
                        continue;
                    }
                    int val = Integer.parseInt(split[1]);
                    GuildType gt = Arrays.stream(GuildType.values()).filter(o -> o.toString().equals(name.trim())).findFirst().orElse(null);
                    if (gt != null) {
                        GuildType start = Res_WithdrawGuild_Done2;
                        if (gt.ordinal() >= start.ordinal() && gt.ordinal() < No.ordinal()) {
                            if (line.contains("*")) {
                                checkOp = gt;
                            }
                            val += change;
                            System.out.println(String.format("%s(%d), %s", name, val, start == gt ? "// *" : ""));
                        } else {
                            System.out.println(line);
                        }
                    } else {
                        System.out.println(line);
                    }
                } else {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (checkOp != null) {
            System.err.println(String.format("Current type (%s) contains a * (= updated). Be sure to check for overlap.", checkOp));
        }
    }
}
