package net.swordie.ms.client.guild;

import net.swordie.ms.Server;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.guild.result.GuildType;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.handlers.social.module.GuildModule;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.World;
import net.swordie.orm.dao.*;

import javax.persistence.Transient;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created on 3/18/2018.
 */
public class Guild implements Encodable {

    private static final GuildDao guildDao = (GuildDao) SworDaoFactory.getByClass(Guild.class);
    private static final GuildMemberDao guildMemberDao = (GuildMemberDao) SworDaoFactory.getByClass(GuildMember.class);
    private static final GuildRequestorDao guildRequestorDao = (GuildRequestorDao) SworDaoFactory.getByClass(GuildRequestor.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final GuildSkillDao guildSkillDao = (GuildSkillDao) SworDaoFactory.getByClass(GuildSkill.class);
    private static final BBSRecordDao bbsRecordDao = (BBSRecordDao) SworDaoFactory.getByClass(BBSRecord.class);

    public static final int GRADE_SIZE = 10;
    public static final int MIN_GRADE_SIZE = 5;
    public static final int MASTER = 1, JR_MASTER = 2, VETERAN = 3, MEMBER = 4, NEW = 5;

    private int id;
    private String name;
    private int leaderID;
    private int worldID;

    private Set<GuildRequestor> requestors;

    private Set<GuildMember> members;

    private List<String> gradeNames;
    private List<Integer> gradePermissions;

    private int markBg;
    private int markBgColor;
    private int mark;
    private int markColor;
    private byte[] customMark;
    private int maxMembers;
    private String notice;
    private int points;
    private int seasonPoints;
    private int allianceID;
    private int level;
    private int rank;
    private int ggp;
    // Start GUILDSETTING struct
    private boolean appliable;
    private int reqLevel;
    private int activeTimes;
    private int mainActivity;
    private int ageGroup;
    // End GUILDSETTING struct

    private Map<Integer, GuildSkill> skills;

    private Set<BBSRecord> bbsRecords;

    @Transient
    private Alliance alliance;
    private final Set<Integer> pendingChars = new HashSet<>();

    public Guild(boolean init) {
        if (init) {
            requestors = new HashSet<>();
            members = new HashSet<>();
            skills = new HashMap<>();
            bbsRecords = new HashSet<>();
            gradeNames = new ArrayList<>();

            setGradeNames(new String[]{"Master", "Officer", "Veteran", "Member", "Initiate"});
            setGradePermissions(new int[]{-1, 0, 0, 0, 0});
            setAppliable(true);
            setMaxMembers(50);
            setLevel(1);
            setName("Default guild");
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void encode(OutPacket outPacket) {
        outPacket.encodeInt(getId());
        outPacket.encodeString(getName());
        for (int i = 0; i < GRADE_SIZE; i++) {
            if (i < getGradeNames().size()) {
                outPacket.encodeString(getGradeNames().get(i));
                outPacket.encodeInt(getGradePermissions().get(i));
            } else {
                outPacket.encodeString("");
                outPacket.encodeInt(0);
            }
        }
        outPacket.encodeShort(getMembers().size());
        getMembers().forEach(gm -> outPacket.encodeInt(gm.getCharID()));
        getMembers().forEach(gm -> gm.encode(outPacket));
        outPacket.encodeShort(getRequestors().size());
        getRequestors().forEach(gm -> outPacket.encodeInt(gm.getCharID()));
        getRequestors().forEach(gm -> gm.encode(outPacket));

        outPacket.encodeInt(getRequestors().size());
        getRequestors().forEach(gm -> outPacket.encodeString(gm.getIntroduction()));

        outPacket.encodeInt(getMaxMembers());
        outPacket.encodeShort(getMarkBg());
        outPacket.encodeByte(getMarkBgColor());
        outPacket.encodeShort(getMark());
        outPacket.encodeByte(getMarkColor());
        outPacket.encodeString(getNotice());

        outPacket.encodeInt(getRank());
        outPacket.encodeInt(getSeasonPoints());
        outPacket.encodeInt(getAllianceID());
        outPacket.encodeByte(getLevel());
        outPacket.encodeInt(getGgp());
        outPacket.encodeInt(getPoints());
        // new 214 (guild rework)
        outPacket.encodeInt(-1); // nCulvertRanking
        outPacket.encodeByte(isAppliable()); // unk2
        outPacket.encodeFT(FileTime.fromDate(FileTime.currentTime().toLocalDateTime().plusDays(2))); // ftAdvertisementEnd
        outPacket.encodeInt(getActiveTimes());
        outPacket.encodeInt(getMainActivity());
        outPacket.encodeInt(getAgeGroup());

        outPacket.encodeShort(getSkills().size());
        getSkills().forEach((skillId, skill) -> {
            outPacket.encodeInt(skillId);
            outPacket.encode(skill);
        });

        // sub
        var bool = false;
        outPacket.encodeByte(bool);
        if (bool) {
            outPacket.encodeByte(-1);
            outPacket.encodeInt(-1);
        }
        // ~

        outPacket.encodeByte(0);

        var customMark = getCustomMark();
        outPacket.encodeInt(customMark == null ? 0 : customMark.length);
        if (customMark != null) {
            outPacket.encodeArr(customMark);
        }
        outPacket.encodeInt(-1);
    }

    public void encodeForRemote(OutPacket outPacket) {
        outPacket.encodeInt(getId());
        outPacket.encodeString(getName());
        outPacket.encodeShort(getMarkBg());
        outPacket.encodeByte(getMarkBgColor());
        outPacket.encodeShort(getMark());
        outPacket.encodeByte(getMarkColor());
        outPacket.encodeInt(getCustomMark() == null ? 0 : getCustomMark().length);
        outPacket.encodeInt(getCustomMark() == null ? 0 : getCustomMark().length);
    }

    public Set<GuildMember> getMembers() {
        if (members == null) {
            members = guildMemberDao.byGuild(this);
        }
        return members;
    }

    public void addMember(GuildMember guildMember) {
        getPendingChars().remove(guildMember.getCharID());
        getMembers().add(guildMember);
        if (guildMember.getChr() != null && guildMember.getChr().getGuild() == null) {
            guildMember.getChr().setGuild(this);
        }
        if (getLeaderID() == 0) {
            // no one is guild leader
            setLeader(guildMember);
        } else {
            guildMember.setGrade(NEW);
            broadcast(WvsContext.guildResult(GuildResult.joinGuild(this, guildMember)));
        }
    }

    public void demote(GuildMember guildMember) {
        guildMember.setGrade(Math.min(guildMember.getGrade() + 1, getGradeNames().size()));
    }

    public void promote(GuildMember guildMember) {
        guildMember.setGrade(Math.max(guildMember.getGrade() - 1, 1));
    }

    public void addMember(Char chr, boolean online) {
        addMember(new GuildMember(this, chr, online));
    }

    public void addMember(Char chr) {
        addMember(chr, true);
    }

    public void removeMember(GuildMember guildMember) {
        if (guildMember.getChr() != null) {
            guildMember.getChr().setGuild(null);
        }
        getMembers().remove(guildMember);
        guildMemberDao.delete(guildMember);
    }

    public void removeMember(Char chr) {
        removeMember(getMemberByChar(chr));
    }

    public GuildMember getMemberByChar(Char chr) {
        return getMembers().stream()
                .filter(gm -> gm.getChr() != null && gm.getChr().equals(chr))
                .findAny()
                .orElse(null);
    }

    public int getLeaderID() {
        return leaderID;
    }

    public void setLeaderID(int leaderID) {
        this.leaderID = leaderID;
    }

    public void setLeader(GuildMember leader) {
        if (getLeaderID() != 0) {
            getMemberByCharID(getLeaderID()).setGrade(JR_MASTER);
        }
        this.leaderID = leader.getCharID();
        setLeaderID(leader.getCharID());
        leader.setGrade(MASTER);
    }

    public boolean isGuildMember(GuildMember gm) {
        return getLeaderID() == gm.getCharID();
    }

    public GuildMember getMemberByCharID(int id) {
        return getMembers().stream().filter(gm -> gm.getCharID() == id).findAny().orElse(null);
    }

    public int getMarkBg() {
        return markBg;
    }

    public void setMarkBg(int markBg) {
        this.markBg = markBg;
    }

    public int getMarkBgColor() {
        return markBgColor;
    }

    public void setMarkBgColor(int markBgColor) {
        this.markBgColor = markBgColor;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    public int getMarkColor() {
        return markColor;
    }

    public void setMarkColor(int markColor) {
        this.markColor = markColor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<GuildMember> getOnlineMembers() {
        return getMembers().stream().filter(GuildMember::isOnline).collect(Collectors.toList());
    }

    public void broadcast(OutPacket outPacket) {
        getOnlineMembers().stream().filter(gm -> gm.getChr() != null).forEach(gm -> gm.getChr().write(outPacket));
    }

    public void broadcast(OutPacket outPacket, Char exceptChr) {
        getOnlineMembers().stream().filter(gm -> gm.getChr() != null && !gm.getChr().equals(exceptChr))
                .forEach(gm -> gm.getChr().write(outPacket));
    }

    public void broadcastByChr(Char byChr, OutPacket outPacket, Char exceptChr) {
        getOnlineMembers().stream()
                .filter(gm ->
                        gm.getChr() != null && !gm.getChr().equals(exceptChr) && !gm.getChr().hasChrBlacklisted(byChr.getId()))
                .forEach(gm -> gm.getChr().write(outPacket));
    }

    public Set<GuildRequestor> getRequestors() {
        if (requestors == null) {
            requestors = guildRequestorDao.byGuild(this);
        }
        return requestors;
    }

    public void setRequestors(Set<GuildRequestor> requestors) {
        this.requestors = requestors;
    }

    public void addGuildRequestor(Char chr, String introduction) {
        GuildRequestor guildRequestor = new GuildRequestor(this, chr, introduction);
        getRequestors().add(guildRequestor);
    }

    public void removeGuildRequestor(GuildRequestor gr) {
        getRequestors().remove(gr);
        guildRequestorDao.delete(gr);
    }

    public List<String> getGradeNames() {
        return gradeNames;
    }

    public void setGradeNames(List<String> gradeNames) {
        this.gradeNames = gradeNames;
    }

    public void setGradeNames(String[] gradeNames) {
        if (getGradeNames() == null) {
            setGradeNames(new ArrayList<>());
        } else {
            getGradeNames().clear();
        }
        for (String gradeName : gradeNames) {
            getGradeNames().add(gradeName);
        }
    }

    public void setGradePermissions(int[] gradePermissions) {
        if (getGradePermissions() == null) {
            setGradePermissions(new ArrayList<>());
        } else {
            getGradePermissions().clear();
        }
        for (var gradePermission : gradePermissions) {
            getGradePermissions().add(gradePermission);
        }
    }

    public void setMembers(Set<GuildMember> members) {
        this.members = members;
    }

    public int getMaxMembers() {
        return maxMembers;
    }

    public boolean hasMaxMembers() {
        return getMaxMembers() == getMembers().size();
    }

    public void setMaxMembers(int maxMembers) {
        this.maxMembers = maxMembers;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public int getSeasonPoints() {
        return seasonPoints;
    }

    public void setSeasonPoints(int seasonPoints) {
        this.seasonPoints = seasonPoints;
    }

    public int getAllianceID() {
        return allianceID;
    }

    public void setAllianceID(int allianceID) {
        this.allianceID = allianceID;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public int getGgp() {
        return ggp;
    }

    public void setGgp(int ggp) {
        this.ggp = ggp;
    }

    public boolean isAppliable() {
        return appliable;
    }

    public void setAppliable(boolean setState) {
        this.appliable = setState;
    }

    public int getReqLevel() {
        return reqLevel;
    }

    public void setReqLevel(int reqLevel) {
        this.reqLevel = reqLevel;
    }

    public Map<Integer, GuildSkill> getSkills() {
        if (skills == null) {
            skills = guildSkillDao.byGuild(this);
        }
        return skills;
    }

    public void setSkills(Map<Integer, GuildSkill> skills) {
        this.skills = skills;
    }

    public void addGuildSkill(GuildSkill gs) {
        getSkills().put(gs.getSkillID(), gs);
    }

    public int getWorldID() {
        return worldID;
    }

    public void setWorldID(int worldID) {
        this.worldID = worldID;
    }

    public static void defaultEncodeForRemote(OutPacket outPacket) {
        outPacket.encodeInt(0);
        outPacket.encodeString("");
        outPacket.encodeShort(0);
        outPacket.encodeByte(0);
        outPacket.encodeShort(0);
        outPacket.encodeByte(0);
        outPacket.encodeInt(0);
        outPacket.encodeInt(0);
    }

    /**
     * Adds a given amount of commitment to the char.
     *
     * @param chr        the char that the commitment should be given to
     * @param commitment the amount of commitment to add
     */
    public void addCommitmentToChar(Char chr, int commitment) {
        GuildMember gm = getMemberByCharID(chr.getId());
        if (gm != null) {
            gm.addCommitment(commitment);
            addGgp((int) (commitment * (GameConstants.GGP_PER_CONTRIBUTION)));
            addPoints(chr, commitment);
        }
    }

    private void addPoints(Char chr, int commitment) {
        setPoints(getPoints() + commitment);
        if (getLevel() < GameConstants.MAX_GUILD_LV && getPoints() > GameConstants.getExpRequiredForNextGuildLevel(getLevel())) {
            setLevel(getLevel() + 1);
            setNoblesseSkillLevels(chr);
            broadcast(UserLocal.chatMsg(ChatType.Notice2, String.format("The guild has leveled up! [%s] is now level %d.",
                    getName(), getLevel())));
        }
        broadcast(WvsContext.guildResult(GuildResult.setPointAndLevel(this)));
    }

    public void setNoblesseSkillLevels(Char chr){
        GuildModule.setGuildSkillLevel(chr, this,SkillConstants.GUILD_NOBLESSE_BASE,  Math.min(getLevel(), 15));
        GuildModule.setGuildSkillLevel(chr, this, SkillConstants.GUILD_NOBLESSE_BASE + 1, Math.min(getLevel(), 15));
        GuildModule.setGuildSkillLevel(chr, this, SkillConstants.GUILD_NOBLESSE_BASE + 2, Math.max(getLevel() - 15, 0));
        GuildModule.setGuildSkillLevel(chr, this, SkillConstants.GUILD_NOBLESSE_BASE + 3, Math.max(getLevel() - 15, 0));
    }

    private void addGgp(int ggp) {
        setGgp(getGgp() + ggp);
        broadcast(WvsContext.guildResult(GuildResult.setGgp(this)));
    }

    public Set<BBSRecord> getBbsRecords() {
        if (bbsRecords == null) {
            bbsRecords = bbsRecordDao.byGuild(this);
        }
        return bbsRecords;
    }

    public void setBbsRecords(Set<BBSRecord> bbsRecords) {
        this.bbsRecords = bbsRecords;
    }

    public void addBbsRecord(BBSRecord record) {
        getBbsRecords().add(record);
        record.setIdForBbs(getBbsRecords().size()); // whatevs
    }

    public BBSRecord getRecordByID(int id) {
       return getBbsRecords().stream().filter(r -> r.getIdForBbs() == id).findAny().orElse(null);
    }

    public void removeRecord(BBSRecord record) {
        getBbsRecords().remove(record);
        bbsRecordDao.delete(record);
        resetBbsIds();
    }

    public void resetBbsIds() {
        int i = 1;
        for (BBSRecord r : getBbsRecords().stream().sorted().collect(Collectors.toList())) {
            r.setIdForBbs(i++);
        }
    }

    public int getSpentSp() {
        return getSkills().values().stream()
                .filter(gs -> SkillConstants.isGuildContentSkill(gs.getSkillID()))
                .mapToInt(GuildSkill::getLevel).sum();
    }

    public int getSpentBattleSp() {
        int spentSp = 0;
        for (int i = SkillConstants.GUILD_NOBLESSE_BASE; i <= SkillConstants.GUILD_NOBLESSE_END; i++) {
            GuildSkill gs = getSkillById(i);
            spentSp += gs == null ? 0 : gs.getLevel();
        }
        return spentSp;
    }

    public int getBattleSp() {
        return getLevel() * 2;
    }

    public GuildSkill getSkillById(int skillId) {
        return getSkills().get(skillId);
    }

    public void setAlliance(Alliance alliance) {
        this.alliance = alliance;
        if (alliance == null) {
            setAllianceID(0);
        } else {
            setAllianceID(alliance.getId());
        }
    }

    public Alliance getAlliance() {
        return alliance;
    }

    public boolean isGuildMaster(Char chr) {
        return getLeaderID() == chr.getId();
    }

    public GuildMember getGuildLeader() {
        return getMemberByCharID(getLeaderID());
    }

    public int getAverageMemberLevel() {
        int size = getMembers().size();
        int averageLevel = 0;
        for (GuildMember gm : getMembers()) {
            averageLevel += gm.getLevel();
        }
        return averageLevel / size;
    }

    public void disband() {
        for (GuildMember gm : getMembers()) {
            Char chr = gm.getChr();
            if (chr != null) {
                chr.setGuild(null);
                chr.write(WvsContext.guildResult(GuildResult.msg(GuildType.Res_RemoveRequestGuild_Done)));
                chr.getField().broadcastPacket(UserRemote.guildNameChanged(chr));
                chr.getField().broadcastPacket(UserRemote.guildMarkChanged(chr));
            } else {
                chr = charDao.getById(gm.getCharID());
                chr.setGuild(null);
                charDao.saveOrUpdate(chr);
            }
        }

        GuildMember leader = getGuildLeader();
        if (leader.getChr() != null) {
            leader.getChr().write(WvsContext.guildResult(GuildResult.removeComplete(this)));
        }
        World world = Server.getInstance().getWorldById(getWorldID());
        if (world != null) {
            world.removeGuild(this);
        }
        if (getAlliance() != null) {
            getAlliance().removeGuild(this);
        }
    }

    public boolean canAcceptMember(Char chr) {
        GuildMember gm = getMemberByChar(chr);
        return gm != null && gm.getGrade() <= JR_MASTER;
    }

    public GuildRequestor getRequestorById(int charId) {
        return Util.findWithPred(getRequestors(), gr -> gr.getCharID() == charId);
    }

    public boolean isFull() {
        return getMembers().size() >= getMaxMembers();
    }

    public void updateToMembers() {
        broadcast(WvsContext.guildResult(GuildResult.loadGuild(this)));
    }

    public List<Integer> getGradePermissions() {
        return gradePermissions;
    }

    public void setGradePermissions(List<Integer> gradePermissions) {
        this.gradePermissions = gradePermissions;
    }

    public void setCustomMark(byte[] customMark) {
        this.customMark = customMark;
    }

    public byte[] getCustomMark() {
        return customMark;
    }

    public void setActiveTimes(int activeTimes) {
        this.activeTimes = activeTimes;
    }

    public int getActiveTimes() {
        return activeTimes;
    }

    public void setMainActivity(int mainActivity) {
        this.mainActivity = mainActivity;
    }

    public int getMainActivity() {
        return mainActivity;
    }

    public void setAgeGroup(int ageGroup) {
        this.ageGroup = ageGroup;
    }

    public int getAgeGroup() {
        return ageGroup;
    }

    public void addPendingChr(Char invited) {
        getPendingChars().add(invited.getId());
    }

    public boolean hasPendingChar(Char chr) {
        return getPendingChars().contains(chr.getId());
    }

    public void removePendingChar(Char chr) {
        getPendingChars().remove(chr.getId());
    }

    public Set<Integer> getPendingChars() {
        return pendingChars;
    }

    public int getSkillSp() {
        return getLevel() * 2;
    }
}
