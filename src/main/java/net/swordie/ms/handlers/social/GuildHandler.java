package net.swordie.ms.handlers.social;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.alliance.AllianceResult;
import net.swordie.ms.client.character.BroadcastMsg;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildPermission;
import net.swordie.ms.client.guild.GuildRequestor;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.bbs.BBSReply;
import net.swordie.ms.client.guild.bbs.GuildBBSPacket;
import net.swordie.ms.client.guild.bbs.GuildBBSType;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.guild.result.GuildType;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.AllianceType;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.social.module.GuildModule;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.Field;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class GuildHandler {

    private static final Logger log = LogManager.getLogger();

    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final int MAX_ANNOUNCEMENT_LENGTH = 500;
    private static final int MAX_POST_LENGTH = 200;

    @Handler(op = InHeader.GUILD_REQUEST)
    public static void handleGuildRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        byte type = inPacket.decodeByte();
        GuildType grt = GuildType.getTypeByVal(type);
        if (grt == null) {
            log.error(String.format("Unknown guild request %d", type));
            return;
        }
        Guild guild = chr.getGuild();
        Field field = chr.getField();
        World world = chr.getWorld();

        GuildMember gm = null;
        if (guild != null) {
            gm = guild.getMemberByCharID(chr.getId());
        }
        switch (grt) {
            case Req_LoadGuild:
                GuildModule.handleLoadGuild(chr, inPacket, guild);
                break;
            case Req_FindGuildByCid:
                GuildModule.handleFindGuildByCid(inPacket, chr, field, world);
                break;
            case Req_FindGuildByGid:
                GuildModule.handleFindGuildByGid(inPacket, chr, world);
                break;
            case Req_CheckGuildName:
                GuildModule.handleCheckGuildName(inPacket, chr, field, world);
                break;
            case Req_InviteGuild:
                GuildModule.handleInviteGuild(inPacket, chr, guild, gm);
                break;
            case Req_WithdrawGuild:
                GuildModule.handleWithdrawGuild(chr, guild, field);
                break;
            case Req_KickGuild:
                GuildModule.handleKickGuild(inPacket, chr, guild, field, gm);
                break;
            case Req_SetMark:
                GuildModule.handleSetMark(inPacket, chr, guild, field, gm);
                break;
            case Req_SetGradeNameAndPermissions:
                GuildModule.handleSetGradeNameAndPermissions(inPacket, chr, guild, gm);
                break;
            case Req_AddGrade:
                GuildModule.handleAddGrade(inPacket, chr, guild, gm);
                break;
            case Req_DeleteGrade:
                GuildModule.handleDeleteGrade(inPacket, chr, guild, gm);
                break;
            case Req_SetMemberGrade:
                GuildModule.handleSetMemberGrade(inPacket, chr, guild, gm);
                break;
            case Req_SetNotice:
                GuildModule.handleSetNotice(inPacket, chr, guild, gm);
                break;
            case Req_SetAdmission:
                GuildModule.handleAdmission(inPacket, chr, guild, gm);
                break;
            case Req_SkillLevelSetUp:
                GuildModule.handleSkillLevelSetup(inPacket, chr, guild, gm);
                break;
            case Req_BattleSkillOpen:
                GuildModule.handleBattleSkillOpen(chr, guild, gm);
                break;
            case Req_UseActiveSkill:
                GuildModule.handleUseActiveSkill(c, inPacket, chr, guild, gm);
                break;
            case Req_ChangeGuildMaster:
                GuildModule.handleChangeGuildMaster(chr, inPacket, guild, gm);
                break;
            case Req_Search:
                GuildModule.handleSearch(inPacket, chr, world);
                break;
            case Req_ResetSkills:
                GuildModule.handleResetSkills(chr, guild, gm);
                break;
            default:
                log.error(String.format("Unhandled guild request %s", grt.toString()));
                break;

        }
    }

    @Handler(op = InHeader.GUILD_JOIN_REQUEST)
    public static void handleGuildJoinRequest(Char chr, InPacket inPacket) {
        if (chr.getGuild() != null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_JoinGuild_AlreadyJoined)));
            return;
        }
        int guildId = inPacket.decodeInt();
        var introduction = inPacket.decodeString();
        Guild guild = chr.getWorld().getGuildByID(guildId);
        if (guild == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_JoinGuild_Unknown)));
            return;
        }
        if (!guild.isAppliable() || guild.isFull()) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_JoinGuild_AlreadyFull)));
            return;
        }
        if (guild.getRequestorById(chr.getId()) != null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_JoinRequest_AlreadyMade)));
            return;
        }

        guild.addGuildRequestor(chr, introduction);
        guild.broadcast(WvsContext.guildResult(GuildResult.loadGuild(guild)));
        chr.write(WvsContext.broadcastMsg(BroadcastMsg.popUpMessage("You have successfully requested to join %s.".formatted(guild.getName()))));
    }

    @Handler(op = InHeader.GUILD_RESULT)
    public static void handleGuildResult(Char chr, InPacket inPacket) {
        var typeVal = inPacket.decodeByte();
        var type = GuildType.getTypeByVal(typeVal);

        if (type == null) {
            log.error("Unknown guild result type " + type);
            return;
        }

        switch (type) {
            case Res_InviteGuild_Rejected:
                GuildModule.handleInviteGuildRejected(chr, inPacket);
                break;
            default:
                log.error("Unhandled GuildType " + type);
                chr.chatMessage("Unhandled guild result: " + type);
                break;
        }
    }


    @Handler(op = InHeader.GUILD_JOIN_ACCEPT)
    public static void handleGuildJoinAccept(Char chr, InPacket inPacket) {
        Guild guild = chr.getGuild();
        World world = chr.getWorld();
        if (guild == null || !guild.canAcceptMember(chr)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_JoinGuild_UnknownUser)));
            return;
        }
        byte size = inPacket.decodeByte();
        Set<Char> onlineChars = new HashSet<>();
        Set<Char> offlineChars = new HashSet<>();
        for (int i = 0; i < size; i++) {
            int charId = inPacket.decodeInt();
            GuildRequestor gr = guild.getRequestorById(charId);
            if (gr == null) {
                chr.chatMessage("%s no longer requests to join your guild.");
                continue;
            }
            Char toJoin = world.getCharByID(charId);
            if (toJoin != null) {
                if (toJoin.getGuild() != null) {
                    chr.chatMessage("%s is already in a guild.", gr.getName());
                } else {
                    onlineChars.add(toJoin);
                }
            } else {
                toJoin = charDao.getById(charId);
                if (toJoin != null) {
                    if (toJoin.getGuild() != null) {
                        chr.chatMessage("%s is already in a guild.", gr.getName());
                    } else {
                        offlineChars.add(toJoin);
                    }
                } else {
                    chr.chatMessage("Character %s could not be found, their character is probably gone.", gr.getName());
                }
            }
        }
        for (Char c : onlineChars) {
            if (guild.isFull()) {
                chr.chatMessage("%s was not added, as your guild is full.", c.getName());
                continue;
            }
            Field field = c.getField();
            guild.addMember(c);
            c.write(WvsContext.guildResult(GuildResult.joinGuild(guild, guild.getMemberByCharID(c.getId()))));
            chr.write(WvsContext.guildResult(GuildResult.loadGuild(guild)));
            field.broadcastPacket(UserRemote.guildNameChanged(chr));
            field.broadcastPacket(UserRemote.guildMarkChanged(chr));
            world.removeRequestor(c);
        }
        for (Char c : offlineChars) {
            if (guild.isFull()) {
                chr.chatMessage("%s was not added, as your guild is full.", c.getName());
                continue;
            }
            guild.addMember(c, false);
            c.setGuild(guild);
            charDao.saveOrUpdate(c);
            world.removeRequestor(c);
        }
    }

    @Handler(op = InHeader.GUILD_JOIN_REJECT)
    public static void handleGuildJoinReject(Char chr, InPacket inPacket) {
        var guild = chr.getGuild();
        if (guild == null) {
            return;
        }

        var gm = guild.getMemberByCharID(chr.getId());
        if (gm == null || !gm.hasPermission(GuildPermission.Accept)) {
            chr.chatMessage("You don't have permission to do this.");
            return;
        }

        var size = inPacket.decodeByte();
        for (int i = 0; i < size; i++) {
            var otherCharId = inPacket.decodeInt();
            var other = chr.getWorld().getCharByID(otherCharId);
            var otherGm = guild.getRequestorById(otherCharId);

            if (otherGm == null) {
                chr.chatMessage("Could not find that requestor.");
                return;
            }

            guild.removeGuildRequestor(otherGm);
            if (other != null) {
                other.chatMessage("[%s] has rejected your guild join request.", guild.getName());
            }
        }
    }

    @Handler(op = InHeader.ALLIANCE_REQUEST)
    public static void handleAllianceRequest(Char chr, InPacket inPacket) {
        byte type = inPacket.decodeByte();
        AllianceType at = AllianceType.getByVal(type);
        if (at == null) {
            log.error(String.format("Unknown alliance request %d", type));
            return;
        }
        Guild guild = chr.getGuild();
        Alliance alliance = guild == null ? null : guild.getAlliance();
        Char other;
        Guild otherGuild;
        World world = chr.getClient().getWorld();
        GuildMember member = guild == null ? null : chr.getGuild().getMemberByCharID(chr.getId());
        GuildMember otherMember;
        if (!chr.isGuildMaster()) {
            return;
        }
        switch (at) {
            case Req_Withdraw:
                if (alliance == null) {
                    chr.chatMessage("You are not in an alliance.");
                    return;
                }

                if (member.getAllianceGrade() == 1) {
                    if (alliance.getGuilds().size() <= 1) {
                        alliance.broadcast(WvsContext.allianceResult(AllianceResult.withdraw(alliance, guild, false)));
                        alliance.removeGuild(guild);
                        alliance.disband();
                        world.removeAlliance(alliance);
                    } else {
                        Set<Guild> remainingGuilds = new HashSet<>(alliance.getGuilds());
                        remainingGuilds.remove(guild);
                        Guild newLeadingGuild = Util.getRandomFromCollection(remainingGuilds);
                        otherMember = newLeadingGuild.getGuildLeader();
                        otherMember.setAllianceGrade(1);
                        alliance.broadcast(WvsContext.allianceResult(AllianceResult.changeMaster(alliance, member, otherMember)));
                        alliance.broadcast(WvsContext.allianceResult(AllianceResult.withdraw(alliance, guild, false)));
                        alliance.removeGuild(guild);
                    }
                } else {
                    alliance.broadcast(UserLocal.chatMsg(ChatType.SystemNotice, String.format("[%s] has left the alliance.", guild.getName())));
                    alliance.removeGuild(guild);
                    alliance.broadcast(WvsContext.allianceResult(AllianceResult.withdraw(alliance, guild, false)));
                }
                break;
            case Req_Invite:
                String guildName = inPacket.decodeString();
                otherGuild = world.getGuildByName(guildName);
                if (otherGuild != null) {
                    other = world.getCharByID(otherGuild.getLeaderID());
                    if (other != null) {
                        if (other.getGuild().getAlliance() == null) {
                            other.write(WvsContext.allianceResult(AllianceResult.inviteGuild(alliance, member)));
                            alliance.addPendingGuild(other.getGuild());
                            chr.chatMessage("You have invited the guild [%s] to your alliance.", guildName);
                        } else {
                            other.write(WvsContext.allianceResult(AllianceResult.msg(AllianceType.Res_InviteGuild_AlreadyInvited)));
                        }
                    } else {
                        chr.write(WvsContext.allianceResult(AllianceResult.msg(AllianceType.Res_Invite_Failed)));
                    }
                } else {
                    chr.write(WvsContext.allianceResult(AllianceResult.msg(AllianceType.Res_Invite_Failed)));
                }
                break;
            case Req_Join:
                int allianceId = inPacket.decodeInt();
                alliance = world.getAlliance(allianceId);
                if (alliance == null || alliance.isFull() || !alliance.hasPendingGuildInvite(guild.getId())) {
                    chr.write(WvsContext.allianceResult(AllianceResult.msg(AllianceType.Res_Invite_Failed)));
                    return;
                }
                alliance.addGuild(guild);
                break;
            case Req_Load:
                chr.write(WvsContext.allianceResult(AllianceResult.loadDone(alliance)));
                chr.write(WvsContext.allianceResult(AllianceResult.loadGuildDone(alliance)));
                break;
            case Req_ChangeMaster:
                other = world.getCharByID(inPacket.decodeInt());
                if (other != null) {
                    otherMember = other.getGuild().getMemberByCharID(other.getId());
                    member.setAllianceGrade(Guild.JR_MASTER);
                    otherMember.setAllianceGrade(Guild.MASTER);
                    alliance.broadcast(WvsContext.allianceResult(AllianceResult.changeMaster(alliance, member, otherMember)));
                    alliance.updateToMembers();
                } else {
                    chr.chatMessage("That character is not online.");
                }
                break;
            case Req_Kick:
                int otherID = inPacket.decodeInt();
                int kickedGuildID = inPacket.decodeInt();
                otherGuild = alliance.getGuildByID(kickedGuildID);
                if (otherGuild != null) {
                    alliance.broadcast(WvsContext.allianceResult(AllianceResult.withdraw(alliance, otherGuild, true)));
                    alliance.removeGuild(otherGuild);
                    alliance.updateToMembers();
                }
                break;
            case Req_SetGradeName:
                for (int i = 0; i < 5; i++) {
                    String gradeName = inPacket.decodeString();
                    if (gradeName.length() >= 4 && gradeName.length() <= 12 && Util.isDigitLetterString(gradeName)) {
                        alliance.getGradeNames().set(i, gradeName);
                    }
                }
                alliance.broadcast(WvsContext.allianceResult(AllianceResult.setGradeName(alliance)));
                break;
            default:
                log.error(String.format("Unhandled alliance request type %s", at));
        }
    }

    @Handler(op = InHeader.GUILD_BBS)
    public static void handleGuildBBS(Char chr, InPacket inPacket) {
        Guild guild = chr.getGuild();
        if (guild == null) {
            return;
        }

        var gm = guild.getMemberByCharID(chr.getId());
        if (gm == null) {
            return;
        }

        byte val = inPacket.decodeByte();
        GuildBBSType type = GuildBBSType.getByValue(val);
        if (type == null) {
            log.error(String.format("Unknown guild bbs type %s", val));
            return;
        }
        switch (type) {
            case Req_LoadPages:
                handleLoadPages(chr, inPacket, guild, gm);
                break;
            case Req_CreateRecord:
                handleCreateRecord(chr, inPacket, guild, gm);
                break;
            case Req_DeleteRecord:
                handleDeleteRecord(chr, inPacket, guild, gm);
                break;
            case Req_LoadRecord:
                handleLoadRecord(chr, inPacket, guild, gm);
                break;
            case Req_CreateReply:
                handleCreateReply(chr, inPacket, guild);
                break;
            case Req_DeleteReply:
                handleDeleteReply(chr, inPacket, guild, gm);
                break;
            case Req_Upvote:
                handleUpvote(chr, inPacket, guild);
                break;
            default:
                log.error(String.format("Unhandled guild bbs type %s", type));
                break;
        }
    }

    private static void handleUpvote(Char chr, InPacket inPacket, Guild guild) {
        var recordId = inPacket.decodeInt();
        var record = guild.getRecordByID(recordId);

        if (record != null) {
            var chrId = chr.getId();
            if (record.getUpvotedIds().contains(chrId)) {
                record.getUpvotedIds().remove(chrId);
            } else {
                record.addUpvoted(chr);
            }
        }
    }

    public static void handleDeleteReply(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        var id = inPacket.decodeInt();
        int replyId = inPacket.decodeInt();
        var record = guild.getRecordByID(id);
        if (record != null && (record.isCreatedBy(chr) || gm.hasPermission(GuildPermission.ManageBBS))) {
            BBSReply reply = record.getReplyById(replyId);
            record.removeReply(reply);
            chr.write(WvsContext.guildBBSResult(GuildBBSPacket.loadRecord(record)));
        }
    }

    public static void handleCreateReply(Char chr, InPacket inPacket, Guild guild) {
        var id = inPacket.decodeInt();
        var msg = inPacket.decodeString();
        var record = guild.getRecordByID(id);
        if (record != null) {
            BBSReply reply = new BBSReply(chr.getId(), FileTime.currentTime(), msg);
            record.addReply(reply);
        }
    }

    public static void handleLoadRecord(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        var id = inPacket.decodeInt();
        var record = guild.getRecordByID(id);

        gm.setEditingRecord(record);
        if (record != null) {
            chr.write(WvsContext.guildBBSResult(GuildBBSPacket.loadRecord(record)));
        } else {
            chr.boxMessage("Could not find that post.");
        }
    }

    public static void handleDeleteRecord(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        int id = inPacket.decodeInt();
        var record = guild.getRecordByID(id);
        if (record != null && (chr.getId() == record.getCreatorID() || gm.hasPermission(GuildPermission.ManageBBS))) {
            guild.removeRecord(record);
        } else {
            chr.boxMessage("Could not find that post.");
        }
    }

    public static void handleCreateRecord(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        inPacket.decodeByte();
        boolean isAnnouncement = inPacket.decodeInt() == 0; // announcement = 0, normal post = 1
        String msg = inPacket.decodeString();

        var editingRecord = gm.getEditingRecord();
        BBSRecord record = null;
        if (editingRecord != null) {
            record = editingRecord;
        }

        var maxLen = isAnnouncement ? MAX_ANNOUNCEMENT_LENGTH : MAX_POST_LENGTH;
        if ((isAnnouncement && !gm.hasPermission(GuildPermission.ManageBBS)) || msg.length() > maxLen) {
            return;
        }

        if (editingRecord != null) {
            record.setMsg(msg);
        } else {
            record = new BBSRecord(chr.getId(), msg, isAnnouncement);
            guild.addBbsRecord(record);
        }

    }

    public static void handleLoadPages(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        int page = inPacket.decodeInt() - 1;
        int searchType = inPacket.decodeInt();

        gm.setEditingRecord(null);

        Predicate<BBSRecord> predicate = r -> !r.isAnnouncement();
        int pageType = 1;
        switch (searchType) {
            case 1:
                predicate = BBSRecord::isAnnouncement;
                pageType = 0;
                break;
            case 2:
                predicate = r -> r.isCreatedBy(chr);
                break;
        }

        List<BBSRecord> records = guild.getBbsRecords()
                .stream()
                .filter(predicate)
                .sorted(Comparator.comparingInt(BBSRecord::getIdForBbs))
                .collect(Collectors.toList());

        final int PAGE_SIZE = GameConstants.GUILD_BBS_RECORDS_PER_PAGE;
        if (page != 0 && page * PAGE_SIZE >= records.size()) {
            chr.chatMessage("No more posts to show.");
            return;
        }

        // select all records that are on the requested page
        int start = 0;
        int end = Math.min(start + PAGE_SIZE * (page + 1), records.size());
        List<BBSRecord> pageRecords = records.subList(start, end);
        chr.write(WvsContext.guildBBSResult(GuildBBSPacket.loadPages(records.size(), pageRecords, pageType)));
    }
}
