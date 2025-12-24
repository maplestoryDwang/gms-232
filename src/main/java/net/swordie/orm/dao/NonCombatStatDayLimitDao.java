package net.swordie.orm.dao;

import net.swordie.ms.client.character.NonCombatStatDayLimit;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class NonCombatStatDayLimitDao implements SworDao<NonCombatStatDayLimit> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(NonCombatStatDayLimit nonCombatStatDayLimit) {
        if (nonCombatStatDayLimit == null) {
            return;
        }
        boolean needsId = nonCombatStatDayLimit.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO noncombatstatdaylimit(" +
                    "charisma, " +
                    "charm, " +
                    "insight, " +
                    "will, " +
                    "craft, " +
                    "sense, " +
                    "lastUpdateCharmByCashPR, " +
                    "charmByCashPR, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE noncombatstatdaylimit SET " +
                    "charisma = ?," +
                    "charm = ?," +
                    "insight = ?," +
                    "will = ?," +
                    "craft = ?," +
                    "sense = ?," +
                    "lastUpdateCharmByCashPR = ?," +
                    "charmByCashPR = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                nonCombatStatDayLimit.getCharisma(),
                nonCombatStatDayLimit.getCharm(),
                nonCombatStatDayLimit.getInsight(),
                nonCombatStatDayLimit.getWill(),
                nonCombatStatDayLimit.getCraft(),
                nonCombatStatDayLimit.getSense(),
                FileTimeConverter.toDbColumn(nonCombatStatDayLimit.getLastUpdateCharmByCashPR()),
                nonCombatStatDayLimit.getCharmByCashPR(),
                nonCombatStatDayLimit.getId()
        );
        if (needsId) {
            nonCombatStatDayLimit.setId((int) id);
        }
    }

    public void delete(NonCombatStatDayLimit nonCombatStatDayLimit) {
        if (nonCombatStatDayLimit == null || nonCombatStatDayLimit.getId() == 0) {
            log.debug("Trying to delete object " + nonCombatStatDayLimit + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM noncombatstatdaylimit WHERE ID = ?", nonCombatStatDayLimit.getId());
    }


    @Override
    public NonCombatStatDayLimit fromResultSet(ResultSet resultSet, String alias) {
        NonCombatStatDayLimit ncsdl = null;

        try {
            ncsdl = new NonCombatStatDayLimit();
            ncsdl.setId(resultSet.getInt(alias + ".id"));
            ncsdl.setCharisma(resultSet.getShort(alias + ".charisma"));
            ncsdl.setCharm(resultSet.getShort(alias + ".charm"));
            ncsdl.setInsight(resultSet.getShort(alias + ".insight"));
            ncsdl.setWill(resultSet.getShort(alias + ".will"));
            ncsdl.setCraft(resultSet.getShort(alias + ".craft"));
            ncsdl.setSense(resultSet.getShort(alias + ".sense"));
            ncsdl.setLastUpdateCharmByCashPR(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".lastupdatecharmbycashpr")));
            ncsdl.setCharmByCashPR(resultSet.getByte(alias + ".charmbycashpr"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return ncsdl;
    }
}
