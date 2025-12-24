package net.swordie.orm.dao;

import net.swordie.ms.client.character.cards.CharacterCard;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CharacterCardDao implements SworDao<CharacterCard> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(CharacterCard charactercard ) {
        if (charactercard == null) {
            return;
        }
        boolean needsId = charactercard.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO charactercards(" +
                    "characterId, " +
                    "job, " +
                    "level, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?)";
        }
        else {
            query = "UPDATE charactercards SET " +
                    "characterId = ?," +
                    "job = ?," +
                    "level = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                charactercard.getCharacterId(),
                charactercard.getJob(),
                charactercard.getLevel(),
                charactercard.getId()
        );
        if (needsId) {
            charactercard.setId((int) id);
        }
    }

    public void delete(CharacterCard charactercard) {
        if (charactercard == null || charactercard.getId() == 0) {
            log.debug("Trying to delete object " + charactercard + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM charactercards WHERE ID = ?", charactercard.getId());
    }



    @Override
    public CharacterCard fromResultSet(ResultSet resultSet, String alias) {
        CharacterCard cc = null;

        try {
            cc = new CharacterCard();
            cc.setId(resultSet.getInt(alias + ".id"));
            cc.setJob(resultSet.getInt(alias + ".job"));
            cc.setLevel(resultSet.getByte(alias + ".level"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return cc;
    }
}
