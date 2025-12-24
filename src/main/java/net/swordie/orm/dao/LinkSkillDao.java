package net.swordie.orm.dao;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.LinkSkill;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Set;

public class LinkSkillDao implements SworDao<LinkSkill> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(Account account, LinkSkill linkSkill) {
        if (linkSkill == null) {
            return;
        }
        boolean needsId = linkSkill.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO linkskills(" +
                    "originID, " +
                    "usingID, " +
                    "linkSkillID, " +
                    "level, " +
                    "accid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE linkskills SET " +
                    "originID = ?," +
                    "usingID = ?," +
                    "linkSkillID = ?," +
                    "level = ?," +
                    "accid = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                linkSkill.getOriginID(),
                linkSkill.getUsingID(),
                linkSkill.getLinkSkillID(),
                linkSkill.getLevel(),
                account.getId(),
                linkSkill.getId()
        );
        if (needsId) {
            linkSkill.setId(id);
        }
    }

    public void delete(LinkSkill linkSkill) {
        if (linkSkill == null || linkSkill.getId() == 0) {
            log.debug("Trying to delete object " + linkSkill + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM linkskills WHERE ID = ?", linkSkill.getId());
    }


    @Override
    public LinkSkill fromResultSet(ResultSet resultSet, String alias) {
        LinkSkill linkSkill = null;

        try {
            linkSkill = new LinkSkill();
            linkSkill.setId(resultSet.getLong(alias + ".id"));
            linkSkill.setLinkSkillID(resultSet.getInt(alias + ".linkskillid"));
            linkSkill.setLevel(resultSet.getInt(alias + ".level"));
            linkSkill.setOriginID(resultSet.getInt(alias + ".originid"));
            linkSkill.setUsingID(resultSet.getInt(alias + ".usingid"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return linkSkill;
    }

    public void saveOrUpdate(Account account, Set<LinkSkill> linkSkills) {
        for (var linkSkill : new HashSet<>(linkSkills)) {
            saveOrUpdate(account, linkSkill);
        }
    }

    public Set<LinkSkill> byAccount(Account account) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM linkskills ls WHERE accid = ?", "ls", account.getId());
        Set<LinkSkill> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((LinkSkill) obj);
            }
        }
        return saveDatas;
    }
}
