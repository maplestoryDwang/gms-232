package net.swordie.ms.handlers.social.module;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.GuildPermission;
import net.swordie.ms.client.guild.GuildSkill;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.guild.result.GuildType;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.Field;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.GuildDao;
import net.swordie.orm.dao.SworDaoFactory;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;

public class GuildModule {

    private static final GuildDao guildDao = (GuildDao) SworDaoFactory.getByClass(Guild.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final int CUSTOM_MARK_DIMENSIONS = 17; // 17x17 pixels
    private static final int CUSTOMMARK_MAX_LENGTH = 20000;

    public static void handleLoadGuild(Char chr, InPacket inPacket, Guild guild) {
        if (guild != null) {
            chr.write(WvsContext.guildResult(GuildResult.loadGuild(guild)));
        }
    }

    public static void handleFindGuildByCid(InPacket inPacket, Char chr, Field field, World world) {
        int guildID = inPacket.decodeInt();
        var guild = chr.getClient().getWorld().getGuildByID(guildID);
        if (guild != null && chr.getGuild() == null) {
            guild.addMember(chr);
            world.removeRequestor(chr);
            guild.broadcast(WvsContext.guildResult(GuildResult.joinGuild(guild, guild.getMemberByCharID(chr.getId()))));
            chr.write(WvsContext.guildResult(GuildResult.loadGuild(guild)));
            field.broadcastPacket(UserRemote.guildNameChanged(chr));
            field.broadcastPacket(UserRemote.guildMarkChanged(chr));
        } else {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_CreateNewGuild_AlreadyJoined)));
        }
    }

    public static void handleFindGuildByGid(InPacket inPacket, Char chr, World world) {
        var guildID = inPacket.decodeInt();
        var guild = chr.getWorld().getGuildByID(guildID);
        var field = chr.getField();

        if (guild != null && chr.getGuild() == null && guild.hasPendingChar(chr)) {
            guild.addMember(chr);
            world.removeRequestor(chr);
            chr.write(WvsContext.guildResult(GuildResult.loadGuild(guild)));
            field.broadcastPacket(UserRemote.guildNameChanged(chr));
            field.broadcastPacket(UserRemote.guildMarkChanged(chr));
        } else if (guild != null) {
            chr.write(WvsContext.guildResult(GuildResult.findGuild(guild)));
        } else {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_Advertise_Unknown)));
        }
    }

    public static void handleCheckGuildName(InPacket inPacket, Char chr, Field field, World world) {
        Guild guild;
        String name = inPacket.decodeString();
        guild = world.getGuildByName(name);
        if (guild == null) {
            guild = new Guild(true);
            guild.setLevel(1);
            guild.setName(name);
            guildDao.saveOrUpdate(guild);
            world.addGuild(guild);
            chr.setGuild(guild);
            guild = chr.getGuild(); // setGuild may change the instance
            guild.addMember(chr);
            world.removeRequestor(chr);
            guild.setWorldID(chr.getClient().getWorldId());
            chr.getWorld().addGuild(guild);
            chr.write(WvsContext.guildResult(GuildResult.createNewGuild(guild)));
            field.broadcastPacket(UserRemote.guildNameChanged(chr));
            field.broadcastPacket(UserRemote.guildMarkChanged(chr));
            chr.deductMoney(5000000);
        } else {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_CheckGuildName_AlreadyUsed)));
        }
    }

    public static void handleInviteGuild(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.Invite)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_InviteGuild_Unknown)));
            return;
        }

        Char invited = chr.getWorld().getCharByName(inPacket.decodeString());
        if (invited == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_InviteGuild_NotExist)));
            return;
        }

        if (invited.hasChrBlacklisted(chr.getId())) {
            chr.chatMessage(String.format("%s is not accepting invitations.", invited.getName()));
            chr.dispose();
            return;
        }

        if (invited.getGuild() != null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_InviteGuild_AlreadyInGuild, invited.getName())));
            return;
        }

        if (guild.hasMaxMembers()) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_InviteGuild_LimitMembers)));
            return;
        }

        guild.addPendingChr(invited);

        invited.write(WvsContext.guildResult(GuildResult.inviteGuildDone(guild, chr)));
        chr.write(WvsContext.guildResult(GuildResult.inviteGuildDoneUser(invited.getName())));
    }

    public static void handleKickGuild(InPacket inPacket, Char chr, Guild guild, Field field, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.Kick)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_KickGuild_Unknown)));
            return;
        }
        int expelledID = inPacket.decodeInt();
        String expelledName = inPacket.decodeString();
        var expelledGm = guild.getMemberByCharID(expelledID);

        if (expelledGm == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_KickGuild_NotJoined)));
            return;
        }

        Char expelled = expelledGm.getChr();
        guild.broadcast(WvsContext.guildResult(GuildResult.leaveGuild(guild, expelledID, expelledName, true)));
        if (expelled == null) {
            expelled = charDao.getById(expelledID);

            if (expelled != null) {
                expelled.setGuild(null);
                charDao.saveOrUpdate(expelled);
            } else {
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_KickGuild_NotJoined)));
            }
        }
        if (expelled != null) {
            guild.removeMember(expelledGm);
            field.broadcastPacket(UserRemote.guildNameChanged(expelled));
            field.broadcastPacket(UserRemote.guildMarkChanged(expelled));
        }
    }

    public static void handleWithdrawGuild(Char chr, Guild guild, Field field) {
        if (guild == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_WithdrawGuild_Unknown)));
            return;
        }
        var name = chr.getName();
        guild.broadcast(WvsContext.guildResult(GuildResult.leaveGuild(guild, chr.getId(), name, false)));
        guild.removeMember(chr);
        chr.setGuild(null);
        field.broadcastPacket(UserRemote.guildNameChanged(chr));
        field.broadcastPacket(UserRemote.guildMarkChanged(chr));
        if (guild.getMembers().size() == 0) {
            guild.disband();
        }
    }

    public static void handleSetMemberGrade(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.SetMemberGrade)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetMemberGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }
        int id = inPacket.decodeInt();
        byte grade = inPacket.decodeByte();
        gm = guild.getMemberByCharID(id);

        if (grade <= 0 || grade > Guild.GRADE_SIZE || gm == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetMemberGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        gm.setGrade(grade);
        guild.broadcast(WvsContext.guildResult(GuildResult.setMemberGrade(guild, gm)));
    }

    public static void handleAddGrade(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !guild.isGuildMaster(chr)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_AddGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        var gradeNames = new String[Guild.GRADE_SIZE];
        var currentNames = guild.getGradeNames();
        for (int i = 0; i < currentNames.size(); i++) {
            gradeNames[i] = currentNames.get(i);
        }

        var permissions = new int[Guild.GRADE_SIZE];
        var currentPerms = guild.getGradePermissions();
        for (int i = 0; i < currentPerms.size(); i++) {
            permissions[i] = currentPerms.get(i);
        }

        var index = inPacket.decodeByte() - 1;
        if (index >= permissions.length) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_AddGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        gradeNames[index] = inPacket.decodeString();
        permissions[index] = inPacket.decodeInt();

        guild.setGradePermissions(permissions);
        guild.setGradeNames(gradeNames);
        guild.broadcast(WvsContext.guildResult(GuildResult.addGrade(guild, gm)));
    }

    public static void handleDeleteGrade(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !guild.isGuildMaster(chr)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_DeleteGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        var index = inPacket.decodeByte() - 1;
        if (index >= guild.getGradePermissions().size() || index < Guild.MIN_GRADE_SIZE) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_DeleteGrade_Unknown)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        if (guild.getMembers().stream().anyMatch(mem -> mem.getGrade() == index + 1)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_DeleteGrade_Unknown)));
            chr.chatMessage("At least one of your guild members has that rank. Please promote them before deleting the rank.");
            chr.write(WvsContext.exclRequest());
            return;
        }

        var deletedName = guild.getGradeNames().get(index);

        guild.getGradePermissions().remove(index);
        guild.getGradeNames().remove(index);
        guild.broadcast(WvsContext.guildResult(GuildResult.deleteGrade(guild, gm, index, deletedName)));
    }

    public static void handleSetGradeNameAndPermissions(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetGradeNameAndPermission_Unknown)));
            return;
        }

        var gradeNames = new String[Guild.GRADE_SIZE];
        var currentNames = guild.getGradeNames();
        for (int i = 0; i < currentNames.size(); i++) {
            gradeNames[i] = currentNames.get(i);
        }

        var permissions = new int[Guild.GRADE_SIZE];
        var currentPerms = guild.getGradePermissions();
        for (int i = 0; i < currentPerms.size(); i++) {
            permissions[i] = currentPerms.get(i);
        }

        var index = inPacket.decodeByte() - 1;
        if (index >= permissions.length) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetGradeNameAndPermission_Unknown)));
            return;
        }

        gradeNames[index] = inPacket.decodeString();

        //Keep Guild Master permissions always the same
        if(index != 0) {
            permissions[index] = inPacket.decodeInt();
        }

        guild.setGradePermissions(permissions);
        guild.setGradeNames(gradeNames);
        guild.broadcast(WvsContext.guildResult(GuildResult.setGradeNameAndPermission(guild, gm)));
        chr.write(WvsContext.exclRequest());
    }

    public static void handleSetMark(InPacket inPacket, Char chr, Guild guild, Field field, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.EditMark)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetMark_Unknown)));
            return;
        }
        var isCustomMark = inPacket.decodeByte() != 0;

        if (!isCustomMark) {
            guild.setMarkBg(inPacket.decodeShort());
            guild.setMarkBgColor(inPacket.decodeByte());
            guild.setMark(inPacket.decodeShort());
            guild.setMarkColor(inPacket.decodeByte());
            guild.setCustomMark(null);
        } else {
            var customLength = inPacket.decodeInt();

            if (customLength <= 0 || customLength > CUSTOMMARK_MAX_LENGTH) {
                chr.chatMessage("That emblem file is invalid.");
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetCustomMark_Unknown)));
                return;
            }
            var customMark = inPacket.decodeArr(customLength);
            if (checkCustomMark(customMark)) {
                guild.setCustomMark(customMark);
                guild.setMarkBg(0);
                guild.setMarkBgColor(0);
                guild.setMark(0);
                guild.setMarkColor(0);
            } else {
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetCustomMark_Unknown)));
                return;
            }
        }

        chr.write(WvsContext.guildResult(GuildResult.setMark(guild, gm))); // This doesn't actually update the emblem client side next to the guild name
        guild.broadcast(WvsContext.guildResult(GuildResult.loadGuild(guild)));
        field.broadcastPacket(UserRemote.guildNameChanged(chr), chr);
        field.broadcastPacket(UserRemote.guildMarkChanged(chr), chr);
    }

    public static void handleSkillLevelSetup(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.ManageSkills)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
        }
        int skillID = inPacket.decodeInt();
        boolean up = inPacket.decodeByte() != 0;
        if (up) {
            increaseGuildSkillLevel(chr, guild, skillID);
        } else {
            decrementGuildSkill(chr, guild, skillID);
        }
        chr.dispose();
    }

    public static void handleResetSkills(Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.ManageSkills)) {
            chr.chatMessage("You do not have the required permissions to do this.");
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_ResetBattleSkill_Unknown1)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        if (guild.getGgp() < GameConstants.GGP_FOR_SKILL_RESET) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_ResetBattleSkill_NotEnoughGP)));
            chr.write(WvsContext.exclRequest());
            return;
        }

        guild.setGgp(guild.getGgp() - GameConstants.GGP_FOR_SKILL_RESET);

        for (var gs : guild.getSkills().values()) {
            if (SkillConstants.isGuildContentSkill(gs.getSkillID())) {
                gs.setLevel(0);
                guild.getOnlineMembers().stream()
                        .filter(g -> g.getChr() != null)
                        .forEach(g -> g.getChr().removeFromBaseStatCache(gs));
            }
        }

        guild.broadcast(WvsContext.guildResult(GuildResult.setGgp(guild)));
        guild.broadcast(WvsContext.guildResult(GuildResult.resetSkillDone(guild)));
    }

    public static void decrementGuildSkill(Char chr, Guild guild, int skillID) {
        GuildSkill gs = guild.getSkillById(skillID);
        if (gs == null || gs.getLevel() == 0) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to decrement a guild skill without that skill existing (id %d).",
                    chr.getId(), skillID));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
        }
        if (guild.getGgp() < GameConstants.GGP_FOR_SKILL_RESET) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to decrement a guild skill without having enough GGP (needed %d, has %d).",
                    chr.getId(), GameConstants.GGP_FOR_SKILL_RESET, guild.getGgp()));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_ResetBattleSkill_NotEnoughGP)));
            return;
        }
        guild.setGgp(guild.getGgp() - GameConstants.GGP_FOR_SKILL_RESET);

        guild.getOnlineMembers().stream()
                .filter(g -> g.getChr() != null)
                .forEach(g -> g.getChr().removeFromBaseStatCache(gs));

        gs.setLevel((short) (gs.getLevel() - 1));

        guild.getOnlineMembers().stream()
                .filter(g -> g.getChr() != null)
                .forEach(g -> g.getChr().addToBaseStatCache(gs));

        guild.broadcast(WvsContext.guildResult(GuildResult.setSkill(guild, gs, chr.getId())));
        guild.broadcast(WvsContext.guildResult(GuildResult.setGgp(guild)));
    }

    public static void increaseGuildSkillLevel(Char chr, Guild guild, int skillID) {
        if (!SkillConstants.isGuildContentSkill(skillID) && !SkillConstants.isGuildNoblesseSkill(skillID)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add an invalid guild skill (%d)", chr.getId(), skillID));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_UseSkill_Err)));
            return;
        }
        int spentSp = guild.getSpentSp();

        if (SkillConstants.isGuildContentSkill(skillID)) {
            if (spentSp >= guild.getSkillSp()) {
                chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without enough sp (spent %d, level %d).",
                        chr.getId(), spentSp, guild.getLevel()));
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
                return;
            }
        } else if (guild.getBattleSp() - guild.getSpentBattleSp() <= 0) { // Noblesse
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild battle skill without enough sp (spent %d).",
                    chr.getId(), guild.getSpentBattleSp()));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
        }

        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (SkillConstants.isGuildContentSkill(skillID) && spentSp < si.getReqTierPoint()) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without enough sp spent (spent %d, needed %d).",
                    chr.getId(), spentSp, si.getReqTierPoint()));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
        }

        for (Map.Entry<Integer, Integer> entry : si.getReqSkills().entrySet()) {
            int reqSkillID = entry.getKey();
            int reqSlv = entry.getValue();
            GuildSkill gs = guild.getSkillById(reqSkillID);
            if (gs == null || gs.getLevel() < reqSlv) {
                chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without having the required "
                                + "skill first (req id %d, needed %d, has %d).",
                        chr.getId(), reqSkillID, reqSlv, gs == null ? 0 : gs.getLevel()));
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
                return;
            }
        }

        GuildSkill skill = guild.getSkillById(skillID);
        if (skill == null) {
            skill = new GuildSkill();
            skill.setBuyCharacterName(chr.getName());
            skill.setExtendCharacterName(chr.getName());
            skill.setSkillID(skillID);
            guild.addGuildSkill(skill);
        } else {
            // Remove base stats as the skill already existed
            for (GuildMember guildMember : guild.getOnlineMembers()) {
                if (guildMember.getChr() != null) {
                    guildMember.getChr().removeFromBaseStatCache(skill);
                }
            }
        }
        if (skill.getLevel() >= si.getMaxLevel()) {
            chr.chatMessage("That skill is already at its max level.");
            chr.dispose();
            return;
        }

        skill.setLevel((short) (skill.getLevel() + 1));

        for (GuildMember g : guild.getOnlineMembers()) {
            if (g.getChr() != null) {
                g.getChr().addToBaseStatCache(skill);
            }
        }
        guild.broadcast(WvsContext.guildResult(GuildResult.setSkill(guild, skill, chr.getId())));
    }

    //TODO remove this function after guild skill bandaid fix is replaced
    public static void setGuildSkillLevel(Char chr, Guild guild, int skillID, int skillLevel) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        //if chr is null, it comes from World.java, so we don't need to do offense manager stuff
        if (chr != null) {
            if (!SkillConstants.isGuildContentSkill(skillID) && !SkillConstants.isGuildNoblesseSkill(skillID)) {
                chr.getOffenseManager().addOffense(String.format("Character %d tried to add an invalid guild skill (%d)", chr.getId(), skillID));
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_UseSkill_Err)));
                return;
            }
            int spentSp = guild.getSpentSp();

            if (SkillConstants.isGuildContentSkill(skillID)) {
                if (spentSp >= guild.getSkillSp()) {
                    chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without enough sp (spent %d, level %d).",
                            chr.getId(), spentSp, guild.getLevel()));
                    chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
                    return;
                }
            }
            /*else if (guild.getBattleSp() - guild.getSpentBattleSp() <= 0) { // Noblesse
            chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild battle skill without enough sp (spent %d).",
                    chr.getId(), guild.getSpentBattleSp()));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
            }*/


            if (SkillConstants.isGuildContentSkill(skillID) && spentSp < si.getReqTierPoint()) {
                chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without enough sp spent (spent %d, needed %d).",
                        chr.getId(), spentSp, si.getReqTierPoint()));
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
                return;
            }

            for (Map.Entry<Integer, Integer> entry : si.getReqSkills().entrySet()) {
                int reqSkillID = entry.getKey();
                int reqSlv = entry.getValue();
                GuildSkill gs = guild.getSkillById(reqSkillID);
                if (gs == null || gs.getLevel() < reqSlv) {
                    chr.getOffenseManager().addOffense(String.format("Character %d tried to add a guild skill without having the required "
                                    + "skill first (req id %d, needed %d, has %d).",
                            chr.getId(), reqSkillID, reqSlv, gs == null ? 0 : gs.getLevel()));
                    chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
                    return;
                }
            }
        }

        GuildSkill skill = guild.getSkillById(skillID);
        if (skill == null) {
            skill = new GuildSkill();
            if(chr != null) {
                skill.setBuyCharacterName(chr.getName());
                skill.setExtendCharacterName(chr.getName());
            }
            skill.setSkillID(skillID);
            guild.addGuildSkill(skill);
        } else {
            // Remove base stats as the skill already existed
            for (GuildMember guildMember : guild.getOnlineMembers()) {
                if (guildMember.getChr() != null) {
                    guildMember.getChr().removeFromBaseStatCache(skill);
                }
            }
        }
        if(chr != null) {
            if (skill.getLevel() >= si.getMaxLevel()) {
                chr.chatMessage("That skill is already at its max level.");
                chr.dispose();
                return;
            }
        }

        skill.setLevel((short) (skillLevel));

        for (GuildMember g : guild.getOnlineMembers()) {
            if (g.getChr() != null) {
                g.getChr().addToBaseStatCache(skill);
            }
        }
        if(chr != null) {
            guild.broadcast(WvsContext.guildResult(GuildResult.setSkill(guild, skill, chr.getId())));
        }
    }

    public static void handleBattleSkillOpen(Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.UseSkills)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_UseSkill_Err)));
            return;
        }
        chr.write(WvsContext.guildResult(GuildResult.battleSkillOpen(guild)));
    }

    public static void handleUseActiveSkill(Client c, InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.UseSkills)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_UseSkill_Err)));
            return;
        }
        var skillID = inPacket.decodeInt();

        var skillCooldown = chr.getSkillCooltimeBySkillId(skillID);
        if (skillCooldown > System.currentTimeMillis() && !chr.hasSkillCDBypass()) {
            chr.chatMessage("That skill is still on cooldown: %d minutes remaining.", (System.currentTimeMillis() - skillCooldown) / 60000);
            return;
        }

        GuildSkill gs = guild.getSkillById(skillID);
        if (gs == null || gs.getLevel() == 0) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried to use a guild skill without having it (id %d).",
                    chr.getId(), skillID));
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_LevelSet_Unknown)));
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        chr.addSkillCoolTime(skillID, 1000 * si.getValue(SkillStat.cooltime, gs.getLevel()));

        var sui = new SkillUseInfo();
        sui.skillID = skillID;
        sui.slv = gs.getLevel();

        chr.getJobHandler().handleSkill(chr, chr.getTemporaryStatManager(), skillID, gs.getLevel(), inPacket, sui);
    }

    public static void handleSearch(InPacket inPacket, Char chr, World world) {
        var searchType = inPacket.decodeShort();
        var query = inPacket.decodeString();
        var exact = inPacket.decodeByte() != 0;

        String guildName = null;
        String guildLeaderName = null;
        var all = false;

        switch (searchType) {
            case 1:
                guildName = query;
                break;
            case 2:
                guildLeaderName = query;
                break;
            case 3:
                all = true;
                guildName = query;
                guildLeaderName = query;
                break;
            case 4:
                all = true;
                guildName = "";
                guildLeaderName = "";
                break;
        }
        var guildCol = world.getGuildsWithCriteria(guildName, guildLeaderName, all, exact);
        chr.write(WvsContext.guildSearchResult(guildCol));
    }

    private static boolean checkCustomMark(byte[] customMark) {
        try {
            BufferedInputStream inputStream = new BufferedInputStream(new ByteArrayInputStream(customMark));
            BufferedImage img = ImageIO.read(inputStream);
            return img.getHeight() == CUSTOM_MARK_DIMENSIONS && img.getWidth() == CUSTOM_MARK_DIMENSIONS;
        } catch (Exception e) {
            return false;
        }
    }

    public static void handleSetNotice(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.EditGreeting)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetNotice_Unkown)));
            return;
        }

        var notice = inPacket.decodeString();
        if (notice.length() > 150) {
            chr.boxMessage("That notice is too long.");
            chr.dispose();
            return;
        }

        guild.setNotice(notice);
        guild.broadcast(WvsContext.guildResult(GuildResult.setNoticeDone(guild, gm)));
    }

    public static void handleAdmission(InPacket inPacket, Char chr, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !gm.hasPermission(GuildPermission.ManageAdmission)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetAdmission_Unknown)));
            return;
        }

        var appliable = inPacket.decodeByte() != 0;
        var activeTimes = inPacket.decodeInt();
        var mainActivity = inPacket.decodeInt();
        var ageGroup = inPacket.decodeInt();

        guild.setAppliable(appliable);
        guild.setActiveTimes(activeTimes);
        guild.setMainActivity(mainActivity);
        guild.setAgeGroup(ageGroup);

        guild.broadcast(WvsContext.guildResult(GuildResult.setAdmission(guild, gm)));
    }

    public static void handleChangeGuildMaster(Char chr, InPacket inPacket, Guild guild, GuildMember gm) {
        if (guild == null || gm == null || !guild.isGuildMaster(chr)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_ChangeMaster_Unknown)));
            return;
        }
        var newGmId = inPacket.decodeInt();
        var newGm = guild.getMemberByCharID(newGmId);

        if (newGm == null) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_ChangeMaster_Unknown)));
            return;
        }

        guild.setLeader(newGm);
        newGm.setGrade(Guild.MASTER);
        gm.setGrade(Guild.JR_MASTER);

        guild.broadcast(WvsContext.guildResult(GuildResult.changeMaster(guild, gm, newGm, false)));
    }

    public static void handleInviteGuildRejected(Char chr, InPacket inPacket) {
        var inviterName = inPacket.decodeString();
        var inviter = chr.getWorld().getCharByName(inviterName);

        if (inviter != null) {
            inviter.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_InviteGuild_Rejected, chr.getName())));
            var guild = inviter.getGuild();
            if (guild != null) {
                guild.removePendingChar(chr);
            }
        }
        chr.chatMessage("You have the denied the guild invitation.");
    }

    public static void handleResetGuildBattleSkill(Char chr, Guild guild, GuildMember gm) {
        if (guild == null || !gm.hasPermission(GuildPermission.ManageSkills)) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_ResetBattleSkill_Unknown)));
            return;
        }

        var reqGgpForReset = 4;
        if (guild.getGgp() < reqGgpForReset) {
            chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_SetSkill_ResetBattleSkill_NotEnoughGP)));
        }

        for (var skill : guild.getSkills().values()) {
            if (!SkillConstants.isGuildNoblesseSkill(skill.getSkillID())) {
                skill.setLevel(0);
            }
        }
        guild.setGgp(guild.getGgp() - reqGgpForReset);

        guild.broadcast(WvsContext.guildResult(GuildResult.resetBattleSkillDone(guild)));
        guild.updateToMembers();
        chr.dispose();
    }
}
