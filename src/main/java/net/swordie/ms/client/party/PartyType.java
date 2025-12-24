package net.swordie.ms.client.party;

import net.swordie.ms.util.Util;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

/**
 * Created on 3/19/2018.
 */
public enum PartyType {
    PartyReq_LoadParty(0),
    PartyReq_CreateNewParty(1),
    PartyReq_WithdrawParty(2),
    PartyReq_JoinParty(3),
    PartyReq_InviteParty(4),
    PartyReq_InviteIntrusion(5), // member -> party request
    PartyReq_KickParty(6), // party -> member request
    PartyReq_ChangePartyBoss(7),
    PartyReq_ApplyParty(8),
    PartyReq_SetAppliable(9),
    PartyReq_ClearIntrusion(10),
    PartyReq_CreateNewParty_Group(11),
    PartyReq_PartySetting(12),

    PartyRes_LoadParty_Done(17), // *
    PartyRes_CreateNewParty_Done(18),
    PartyRes_CreateNewParty_AlreadyJoined(19),
    PartyRes_CreateNewParty_Beginner(20),
    PartyRes_CreateNewParty_Unknown(21),
    PartyRes_CreateNewParty_ByNonBoss(22),

    PartyRes_WithdrawParty_Done(23),
    PartyRes_WithdrawParty_NotJoined(24),
    PartyRes_WithdrawParty_Unknown(25),

    PartyRes_JoinParty_Done(26),
    PartyRes_JoinParty_Done2(27),

    PartyRes_JoinParty_AlreadyJoined(28),
    PartyRes_JoinParty_AlreadyFull(29),
    PartyRes_JoinParty_OverDesiredSize(30),
    PartyRes_JoinParty_UnknownUser(31),
    PartyRes_JoinParty_Unknown(32),
    PartyRes_JoinParty_OtherUserFieldLimit(33),

    PartyRes_JoinIntrusion_Done(34),
    PartyRes_JoinIntrusion_UnknownParty(35),

    PartyRes_InviteParty_Sent(36),
    PartyRes_InviteParty_BlockedUser(37),
    PartyRes_InviteParty_AlreadyInvited(38),
    PartyRes_InviteParty_AlreadyInvitedByInviter(39),
    PartyRes_InviteParty_Rejected(40),
    PartyRes_InviteParty_Accepted(41),
    PartyRes_InviteParty_FieldLimit(42),
    PartyRes_InviteParty_OtherUserFieldLimit(43), // *

    PartyRes_InviteIntrusion_Sent(44),
    PartyRes_InviteIntrusion_BlockedUser(45),
    PartyRes_InviteIntrusion_AlreadyInvited(46),
    PartyRes_InviteIntrusion_AlreadyInvitedByInviter(47),
    PartyRes_InviteIntrusion_Rejected(48),
    PartyRes_InviteIntrusion_Accepted(49),

    PartyRes_KickParty_Done(50),
    PartyRes_KickParty_FieldLimit(51),
    PartyRes_KickParty_New(52),
    PartyRes_KickParty_Unknown(53),

    PartyRes_ChangePartyBoss_Done(54),
    PartyRes_ChangePartyBoss_NotSameField(55),
    PartyRes_ChangePartyBoss_NoMemberInSameField(56),
    PartyRes_ChangePartyBoss_NotSameChannel(57),
    PartyRes_ChangePartyBoss_Unknown(58),
    PartyRes_ChangePartyBoss_EntryWaitTimeLimit(59),

    PartyRes_AdminCannotCreate(60),
    PartyRes_AdminCannotInvite(61),

    PartyRes_InAnotherWorld(62),
    PartyRes_InAnotherChanelBlockedUser(63),

    PartyRes_UserMigration(64),
    PartyRes_ChangeLevelOrJob(65),
    PartyRes_Unk288_65(66),
    PartyRes_UpdateShutdownStatus(67),
    PartyRes_UpdateShutdownStatus_New(68),
    PartyRes_FailToSelectPQReward(69),
    PartyRes_ReceivePQReward(70),
    PartyRes_FailToRequestPQReward(71),
    PartyRes_FieldLimit(72),

    PartyRes_ApplyParty_Sent(73),
    PartyRes_ApplyParty_UnknownParty(74),
    PartyRes_ApplyParty_BlockedUser(75),
    PartyRes_ApplyParty_AlreadyApplied(76),
    PartyRes_ApplyParty_AlreadyAppliedByApplier(77),
    PartyRes_ApplyParty_AlreadyFull(78),
    PartyRes_ApplyParty_Rejected(79),
    PartyRes_ApplyParty_Accepted(80),

    PartyRes_FoundPossibleMember(81),
    PartyRes_FoundPossibleParty(82),

    PartyRes_PartySettingDone(83),
    PartyRes_Load_StarGrade_Result(84),
    PartyRes_Load_StarGrade_Result2(85),
    PartyRes_Member_Rename(86),

    PartyInfo_TownPortalChanged(87),
    PartyInfo_OpenGate(88),

    // Unused ----------------------------------------

    ExpeditionReq_Load(90),
    ExpeditionReq_CreateNew(91),
    ExpeditionReq_Invite(92),
    ExpeditionReq_ResponseInvite(93),
    ExpeditionReq_Withdraw(94),
    ExpeditionReq_Kick(95),
    ExpeditionReq_ChangeMaster(96),
    ExpeditionReq_ChangePartyBoss(97),
    ExpeditionReq_RelocateMember(98),

    ExpeditionNoti_Load_Done(99),
    ExpeditionNoti_Load_Fail(100),
    ExpeditionNoti_CreateNew_Done(101),
    ExpeditionNoti_Join_Done(102),
    ExpeditionNoti_You_Joined(103),
    ExpeditionNoti_You_Joined2(104),
    ExpeditionNoti_Join_Fail(105),
    ExpeditionNoti_Withdraw_Done(106),
    ExpeditionNoti_You_Withdrew(107),
    ExpeditionNoti_Kick_Done(108),
    ExpeditionNoti_You_Kicked(109),
    ExpeditionNoti_Removed(110),
    ExpeditionNoti_MasterChanged(111),
    ExpeditionNoti_Modified(112),
    ExpeditionNoti_Modified2(113),
    ExpeditionNoti_Invite(114),
    ExpeditionNoti_ResponseInvite(115),
    ExpeditionNoti_Create_Fail_By_Over_Weekly_Counter(116),
    ExpeditionNoti_Invite_Fail_By_Over_Weekly_Counter(117),
    ExpeditionNoti_Apply_Fail_By_Over_Weekly_Counter(118),
    ExpeditionNoti_Invite_Fail_By_Blocked_Behavior(119),

    AdverNoti_LoadDone(120),
    AdverNoti_Change(121),
    AdverNoti_Remove(122),
    AdverNoti_GetAll(123),
    AdverNoti_Apply(124),
    AdverNoti_ResultApply(125),
    AdverNoti_AddFail(126),
    AdverReq_Add(127),
    AdverReq_Remove(128),
    AdverReq_GetAll(129),
    AdverReq_RemoveUserFromNotiList(130),
    AdverReq_Apply(131),
    AdverReq_ResultApply(132),

    No(-1);

    private byte val;

    PartyType(int val) {
        this.val = (byte) val;
    }

    public static PartyType getByVal(byte type) {
        return Util.findWithPred(values(), v -> v.getVal() == type);
    }

    public byte getVal() {
        return val;
    }

    public static void main(String[] args) {
        File file = new File("D:\\Swordie\\Swordie\\src\\main\\java\\net\\swordie\\ms\\client\\party\\PartyType.java");
        int change = 1;
        boolean check = false;
        PartyType checkOp = null;
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
                    PartyType oh = Arrays.stream(PartyType.values()).filter(o -> o.toString().equals(name.trim())).findFirst().orElse(null);
                    if (oh != null) {
                        PartyType start = PartyRes_InviteParty_OtherUserFieldLimit;
                        if (oh.ordinal() >= start.ordinal() && oh.ordinal() < No.ordinal()) {
                            if (line.contains("*")) {
                                check = true;
                                checkOp = oh;
                            }
                            val += change;
                            System.out.println(String.format("%s(%d), %s", name, val, start == oh ? "// *" : ""));
                        } else {
                            System.out.println(line);
                        }
                    }
                } else {
                    System.out.println(line);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (check) {
            System.err.println(String.format("Current op (%s) contains a * (= updated). Be sure to check for overlap.", checkOp));
        }

    }
}
