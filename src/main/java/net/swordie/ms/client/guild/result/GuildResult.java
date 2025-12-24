package net.swordie.ms.client.guild.result;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.connection.OutPacket;

import static net.swordie.ms.client.guild.result.GuildType.*;

/**
 * Created on 3/21/2018.
 */
public class GuildResult {

    private final GuildType type;
    private GuildSubType subType;
    private Guild guild;
    private GuildMember member;
    private GuildMember member2;
    private String[] gradeNames;
    private boolean online;
    private boolean showBox;
    private Char chr;
    private int intArg;
    private String stringArg;
    private GuildSkill skill;
    private boolean boolArg;
    private int deletedGradeindex;
    private String deletedGradename;

    private GuildResult(GuildType type) {
        this.type = type;
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeByte(type.getVal());
        switch (type) {
            case Res_LoadGuild_Done:
                outPacket.encodeInt(guild == null ? 0 : guild.getId());
                outPacket.encodeByte(guild != null); // ???
                if (guild != null) {
                    outPacket.encode(guild);
                    var size = 0;
                    outPacket.encodeInt(size);
                    for (int i = 0; i < size; i++) {
                        outPacket.encodeInt(0);
                    }
                }
                break;
            case Res_FindGuild_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeString("Banaan");
                outPacket.encode(guild);

                for (int i = 0; i < 4; i++) {
                    outPacket.encodeInt(0);
                }
                break;
            case Res_CreateNewGuild_Done:
                outPacket.encode(guild);
                break;
            case Res_JoinGuild_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encode(member);
                break;
            case Res_WithdrawGuild_Done:
            case Res_KickGuild_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(intArg); // expelledID
                outPacket.encodeString(stringArg); // expelledName
                break;
            case Res_RemoveGuild_Done:
                outPacket.encodeInt(guild.getId());
                break;
            case Res_InviteGuild_DoneUser:
                outPacket.encodeString(stringArg); // sInvitedName
                break;
            case Res_InviteGuild_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeString(guild.getName());
                outPacket.encodeInt(chr.getId());
                outPacket.encodeString(chr.getName());
                outPacket.encodeInt(chr.getLevel());
                outPacket.encodeInt(chr.getJob());
                outPacket.encodeInt(chr.getSubJob());
                break;
            case Res_IncMaxMemberNum_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(guild.getMaxMembers());
                break;
            case Res_ChangeLevelOrJob:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeInt(member.getLevel());
                outPacket.encodeInt(member.getJob());
                break;
            case Res_NotifyLoginOrLogout:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeByte(online);
                if (!online) {
                    outPacket.encodeFT(member.getLastOnline());
                }
                outPacket.encodeByte(showBox);
                break;
            case Res_SetGradeName_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                for (String name : gradeNames) {
                    outPacket.encodeString(name);
                }
                break;
            case Res_SetPermission_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                for (int permission : guild.getGradePermissions()) {
                    outPacket.encodeInt(permission);
                }
                break;
            case Res_SetGradeNameAndPermission_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                var permissions = guild.getGradePermissions();
                var gradenames = guild.getGradeNames();
                for (int i = 0; i < Guild.GRADE_SIZE; i++) {
                    if (i < permissions.size()) {
                        outPacket.encodeInt(permissions.get(i));
                        outPacket.encodeString(gradenames.get(i));
                    } else {
                        outPacket.encodeInt(0);
                        outPacket.encodeString("");
                    }
                }
                break;
            case Res_AddGrade_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                permissions = guild.getGradePermissions();
                gradenames = guild.getGradeNames();
                for (int i = 0; i < Guild.GRADE_SIZE; i++) {
                    if (i < permissions.size()) {
                        outPacket.encodeInt(permissions.get(i));
                        outPacket.encodeString(gradenames.get(i));
                    } else {
                        outPacket.encodeInt(0);
                        outPacket.encodeString("");
                    }
                }
                break;
            case Res_DeleteGrade_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeByte(deletedGradeindex);
                outPacket.encodeString(deletedGradename);
                permissions = guild.getGradePermissions();
                gradenames = guild.getGradeNames();
                for (int i = 0; i < Guild.GRADE_SIZE; i++) {
                    if (i < permissions.size()) {
                        outPacket.encodeInt(permissions.get(i));
                        outPacket.encodeString(gradenames.get(i));
                    } else {
                        outPacket.encodeInt(0);
                        outPacket.encodeString("");
                    }
                }
                break;
            case Res_SetMemberGrade_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeByte(member.getGrade());
                break;
            case Res_SetMemberCommitment_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeInt(member.getCommitment());
                outPacket.encodeInt(member.getDayCommitment());
                outPacket.encodeFT(member.getCommitmentIncTime());
                break;
            case Res_SetMark_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeByte(guild.getCustomMark() != null); // ignored
                outPacket.encodeShort(guild.getMarkBg()); // 0x2000/0x4000 for messages
                outPacket.encodeByte(guild.getMarkBgColor());
                outPacket.encodeShort(guild.getMark());
                outPacket.encodeByte(guild.getMarkColor());
                outPacket.encodeByte(0);
                outPacket.encodeInt(guild.getCustomMark() == null ? 0 : guild.getCustomMark().length);
                if (guild.getCustomMark() != null) {
                    outPacket.encodeArr(guild.getCustomMark());
                }
                outPacket.encodeInt(0);
                break;
            case Res_SetNotice_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeString(guild.getNotice());
                break;
            case Res_SetAdmission_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeByte(guild.isAppliable());
                outPacket.encodeInt(guild.getActiveTimes());
                outPacket.encodeInt(guild.getMainActivity());
                outPacket.encodeInt(guild.getAgeGroup());
                break;
            case Res_IncPoint_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(guild.getPoints());
                outPacket.encodeInt(guild.getLevel());
                outPacket.encodeInt(guild.getGgp());
                outPacket.encodeInt(1337);
                break;
            case Res_SetGGP_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(guild.getGgp());
                break;
            case Res_SetSkill_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(skill.getSkillID());
                outPacket.encodeInt(intArg); // nBuyCharacterID
                outPacket.encode(skill);
                break;
            case Res_SetSkill_ResetBattleSkill_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(guild.getBattleSp());
                break;
            case Res_ResetSkill_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(0); // Ignored
                break;
            case Res_SetSkill_LevelSet_Unknown:
                outPacket.encodeByte(false);
                break;
            case Res_UseSkill_Err:
                outPacket.encodeInt(subType.getVal());
                break;
            case Res_ChangeMaster_Done:
                outPacket.encodeInt(guild.getId());
                outPacket.encodeInt(member.getCharID());
                outPacket.encodeInt(member2.getCharID());
                outPacket.encodeByte(boolArg);
                var encodeExtraInt = false;
                outPacket.encodeByte(encodeExtraInt);
                if (encodeExtraInt) {
                    outPacket.encodeInt(0);
                }
                break;
            case Res_BattleSkillOpen:
                outPacket.encodeInt(guild.getBattleSp());
                break;
            case Res_Rank_Refresh:
                outPacket.encodeInt(guild.getRank());
                break;
            default:
                if (stringArg != null) {
                    outPacket.encodeString(stringArg);
                }
                break;
        }
    }

    public static GuildResult loadGuild(Guild guild) {
        GuildResult gri = new GuildResult(Res_LoadGuild_Done);
        gri.guild = guild;
        return gri;
    }

    public static GuildResult setGradeName(Guild guild, GuildMember member, String[] gradeNames) {
        GuildResult gri = new GuildResult(Res_SetGradeName_Done);
        gri.guild = guild;
        gri.member = member;
        gri.gradeNames = gradeNames;
        return gri;
    }

    public static GuildResult setPermissions(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetPermission_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult setGradeNameAndPermission(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetGradeNameAndPermission_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult addGrade(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_AddGrade_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult deleteGrade(Guild guild, GuildMember member, int deleteIdx, String deletedGradename) {
        GuildResult gri = new GuildResult(Res_DeleteGrade_Done);
        gri.guild = guild;
        gri.member = member;
        gri.deletedGradeindex = deleteIdx;
        gri.deletedGradename = deletedGradename;
        return gri;
    }

    public static GuildResult createNewGuild(Guild guild) {
        GuildResult gri = new GuildResult(Res_CreateNewGuild_Done);
        gri.guild = guild;
        return gri;
    }

    public static GuildResult joinGuild(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_JoinGuild_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult leaveGuild(Guild guild, int leaverID, String leaverName, boolean expelled) {
        GuildResult gri = new GuildResult(expelled ? Res_KickGuild_Done : Res_WithdrawGuild_Done);
        gri.guild = guild;
        gri.intArg = leaverID;
        gri.stringArg = leaverName;
        return gri;
    }

    public static GuildResult setMark(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetMark_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult setMemberGrade(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetMemberGrade_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult changeLevelOrJob(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_ChangeLevelOrJob);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult notifyLoginOrLogout(Guild guild, GuildMember member, boolean online, boolean showBox) {
        GuildResult gri = new GuildResult(Res_NotifyLoginOrLogout);
        gri.guild = guild;
        gri.member = member;
        gri.online = online;
        gri.showBox = showBox;
        return gri;
    }

    public static GuildResult msg(GuildType type) {
        return msg(type, null);
    }

    public static GuildResult msg(GuildType type, String str) {
        var gri = new GuildResult(type);
        gri.stringArg = str;
        return gri;
    }

    public static GuildResult setMemberCommitment(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetMemberCommitment_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult setGgp(Guild guild) {
        GuildResult gri = new GuildResult(Res_SetGGP_Done);
        gri.guild = guild;
        return gri;
    }

    public static GuildResult setPointAndLevel(Guild guild) {
        GuildResult gr = new GuildResult(Res_IncPoint_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult setSkill(Guild guild, GuildSkill skill, int buyCharID) {
        GuildResult gr = new GuildResult(Res_SetSkill_Done);
        gr.guild = guild;
        gr.skill = skill;
        gr.intArg = buyCharID;
        return gr;
    }

    public static GuildResult resetBattleSkillDone(Guild guild) {
        GuildResult gr = new GuildResult(GuildType.Res_SetSkill_ResetBattleSkill_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult resetSkillDone(Guild guild) {
        GuildResult gr = new GuildResult(Res_ResetSkill_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult battleSkillOpen(Guild guild) {
        GuildResult gr = new GuildResult(Res_BattleSkillOpen);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult setRank(Guild guild) {
        GuildResult gr = new GuildResult(Res_Rank_Refresh);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult incMaxMemberNum(Guild guild) {
        GuildResult gr = new GuildResult(Res_IncMaxMemberNum_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult removeComplete(Guild guild) {
        GuildResult gr = new GuildResult(Res_RemoveGuild_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult findGuild(Guild guild) {
        GuildResult gr = new GuildResult(Res_FindGuild_Done);
        gr.guild = guild;
        return gr;
    }

    public static GuildResult setNoticeDone(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetNotice_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult setAdmission(Guild guild, GuildMember member) {
        GuildResult gri = new GuildResult(Res_SetAdmission_Done);
        gri.guild = guild;
        gri.member = member;
        return gri;
    }

    public static GuildResult changeMaster(Guild guild, GuildMember gm, GuildMember newGm, boolean changedAllianceMaster) {
        GuildResult gri = new GuildResult(Res_ChangeMaster_Done);
        gri.guild = guild;
        gri.member = gm;
        gri.member2 = newGm;
        gri.boolArg = changedAllianceMaster;
        return gri;
    }

    public static GuildResult useSkillError(GuildSubType subError) {
        GuildResult gri = new GuildResult(Res_ChangeMaster_Done);
        gri.subType = subError;
        return gri;
    }

    public static GuildResult inviteGuildDone(Guild guild, Char inviter) {
        GuildResult gri = new GuildResult(Res_InviteGuild_Done);
        gri.guild = guild;
        gri.chr = inviter;
        return gri;
    }

    public static GuildResult inviteGuildDoneUser(String invitedName) {
        GuildResult gri = new GuildResult(Res_InviteGuild_DoneUser);
        gri.stringArg = invitedName;
        return gri;
    }

    public GuildType getType() {
        return type;
    }
}
