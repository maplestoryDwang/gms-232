package net.swordie.ms.client.guild.bbs;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.util.FileTime;
import net.swordie.orm.dao.BBSReplyDao;
import net.swordie.orm.dao.SworDaoFactory;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author Sjonnie
 * Created on 8/12/2018.
 */
@Entity
@Table(name = "bbs_records")
public class BBSRecord implements Comparable<BBSRecord> {

    private static final BBSReplyDao bbsReplyDao = (BBSReplyDao) SworDaoFactory.getByClass(BBSReply.class);

    private int id;

    private int idForBbs; // just the number in the list
    private int creatorID;
    private String msg;
    private FileTime creationDate;

    private List<BBSReply> replies;
    private Set<Integer> upvotedIds = new HashSet<>();
    private boolean isAnnouncement;

    public BBSRecord() {
    }

    public BBSRecord(int creatorID, String msg, boolean isAnnouncement) {
        this.creatorID = creatorID;
        this.msg = msg;
        this.creationDate = FileTime.currentTime();
        this.isAnnouncement = isAnnouncement;
        this.replies = new ArrayList<>();
    }

    public void encodeForPagesLoad(OutPacket outPacket) {
        outPacket.encodeInt(getIdForBbs());
        outPacket.encodeInt(isAnnouncement() ? 0 : 1);
        outPacket.encodeInt(getCreatorID());
        outPacket.encodeString(getMsg());
        outPacket.encodeFT(getCreationDate());
        outPacket.encodeInt(getUpvotedIds().size());
        outPacket.encodeInt(getReplies().size());
    }

    public void encodeForRecordLoad(OutPacket outPacket) {
        outPacket.encodeInt(getIdForBbs());

        outPacket.encodeInt(getReplies().size());
        for (BBSReply reply : getReplies()) {
            outPacket.encode(reply);
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCreatorID() {
        return creatorID;
    }

    public void setCreatorID(int creatorID) {
        this.creatorID = creatorID;
    }

    public FileTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(FileTime creationDate) {
        this.creationDate = creationDate;
    }

    public List<BBSReply> getReplies() {
        if (replies == null) {
            replies = bbsReplyDao.byBbsRecord(this);
        }
        return replies;
    }

    public void setReplies(List<BBSReply> replies) {
        this.replies = replies;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getIdForBbs() {
        return idForBbs;
    }

    public void setIdForBbs(int idForBbs) {
        this.idForBbs = idForBbs;
    }

    public void addReply(BBSReply reply) {
        getReplies().add(reply);
        reply.setIdForReply(getReplies().size());
    }

    public void removeReply(BBSReply reply) {
        getReplies().remove(reply);
        bbsReplyDao.delete(reply);
        int i = 1;
        for (BBSReply r : getReplies()) {
            r.setIdForReply(i++);
        }
    }

    public BBSReply getReplyById(int id) {
        return getReplies().stream().filter(reply -> reply.getId() == id).findAny().orElse(null);
    }


    @Override
    public int compareTo(BBSRecord o) {
        return getCreationDate().toLocalDateTime().compareTo(o.getCreationDate().toLocalDateTime());
    }

    public Set<Integer> getUpvotedIds() {
        return upvotedIds;
    }

    public void setUpvotedIds(Set<Integer> upvotedIds) {
        this.upvotedIds = upvotedIds;
    }

    public void addUpvoted(Char chr) {
        getUpvotedIds().add(chr.getId());
    }

    public boolean isCreatedBy(Char chr) {
        return getCreatorID() == chr.getId();
    }

    public boolean isAnnouncement() {
        return isAnnouncement;
    }

    public void setIsAnnouncement(boolean announcement) {
        this.isAnnouncement = announcement;
    }
}
