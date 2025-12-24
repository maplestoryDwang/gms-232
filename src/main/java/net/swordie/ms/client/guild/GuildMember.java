package net.swordie.ms.client.guild;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.guild.bbs.BBSRecord;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.util.FileTime;

import javax.persistence.Transient;

public class GuildMember implements Encodable {
    private int id;

    private int charID;
    private int grade;
    private int allianceGrade;
    private int commitment;
    private int dayCommitment;
    private int igp;
    private FileTime commitmentIncTime;
    private FileTime lastOnline;
    private String name;
    private int job;
    private int level;
    private boolean online;

    @Transient
    private Char chr;
    private Guild guild;
    private BBSRecord editingRecord;

    public GuildMember(Guild guild) {
        this.guild = guild;
    }

    public GuildMember(Guild guild, Char chr, boolean online) {
        this(guild);
        this.chr = chr;
        updateInfoFromChar(chr);
        grade = 5;
        allianceGrade = 5;
        if (!online) {
            this.chr = null; // so they're not mistaken as online players
        }
    }

    public void updateInfoFromChar(Char chr) {
        setName(chr.getName());
        setCharID(chr.getId());
        setJob(chr.getJob());
        setLevel(chr.getLevel());
        setOnline(chr.isOnline());
        setLastOnline(FileTime.currentTime());
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public int getAllianceGrade() {
        return allianceGrade;
    }

    public void setAllianceGrade(int allianceGrade) {
        this.allianceGrade = allianceGrade;
    }

    public int getCommitment() {
        return commitment;
    }

    public void setCommitment(int commitment) {
        this.commitment = commitment;
    }

    public int getDayCommitment() {
        return dayCommitment;
    }

    public void setDayCommitment(int dayCommitment) {
        this.dayCommitment = dayCommitment;
    }

    public int getIgp() {
        return igp;
    }

    public void setIgp(int igp) {
        this.igp = igp;
    }

    public FileTime getCommitmentIncTime() {
        return commitmentIncTime;
    }

    public void setCommitmentIncTime(FileTime commitmentIncTime) {
        this.commitmentIncTime = commitmentIncTime;
    }

    public void encode(OutPacket outPacket) {
        // len = 81, DON'T FORGET TO UPDATE GUILDREQUESTOR
        outPacket.encodeInt(5); // new 228
        outPacket.encodeString(getName(), 13);
        outPacket.encodeInt(getJob());
        outPacket.encodeInt(getLevel());
        outPacket.encodeInt(getGrade());
        outPacket.encodeInt(isOnline() ? 1 : 0);
        outPacket.encodeFT(getLastOnline());
        outPacket.encodeInt(getAllianceGrade());
        outPacket.encodeInt(getCommitment());
        outPacket.encodeInt(getDayCommitment());
        outPacket.encodeInt(getIgp());
        outPacket.encodeFT(getCommitmentIncTime());
        outPacket.encodeFT(FileTime.fromDate(FileTime.currentTime().toLocalDateTime().minusDays(6)));
        outPacket.encodeFT(FileTime.fromDate(FileTime.currentTime().toLocalDateTime().minusDays(3))); // new 218
    }

    public void addCommitment(int commitment) {
        setCommitment(getCommitment() + commitment);
        setDayCommitment(getDayCommitment() + commitment);
        addIgp((int) (commitment * GameConstants.IGP_PER_CONTRIBUTION));
        setCommitmentIncTime(FileTime.currentTime());
        if (getChr() != null) {
            Guild g = getChr().getGuild();
            g.broadcast(WvsContext.guildResult(GuildResult.setMemberCommitment(g, this)));
            getChr().write(WvsContext.message(MessagePacket.incCommitmentMessage(commitment)));
        }

    }

    private void addIgp(int igp) {
        setIgp(getIgp() + igp);
    }

    @Override
    public boolean equals(Object obj) {
        return obj instanceof GuildMember && getCharID() == ((GuildMember) obj).getCharID();
    }

    public int getCharID() {
        return charID;
    }

    public void setCharID(int charID) {
        this.charID = charID;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getJob() {
        return job;
    }

    public void setJob(int job) {
        this.job = job;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public boolean isOnline() {
        return online;
    }

    public void setOnline(boolean online) {
        this.online = online;
        setLastOnline(FileTime.currentTime());
    }

    public boolean hasPermission(GuildPermission permission) {
        var myPermissions = getGuild().getGradePermissions().get(getGrade() - 1); // grades are 1-5
        return (myPermissions & permission.getVal()) != 0;
    }

    public Guild getGuild() {
        return guild;
    }

    public void setGuild(Guild guild) {
        this.guild = guild;
    }

    public FileTime getLastOnline() {
        return lastOnline;
    }

    public void setLastOnline(FileTime lastOnline) {
        this.lastOnline = lastOnline;
    }

    public void setEditingRecord(BBSRecord editingRecord) {
        this.editingRecord = editingRecord;
    }

    public BBSRecord getEditingRecord() {
        return editingRecord;
    }
}
