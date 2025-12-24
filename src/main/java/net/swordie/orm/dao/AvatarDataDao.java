package net.swordie.orm.dao;

import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.AvatarData;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AvatarDataDao implements SworDao<AvatarData> {
    private static final Logger log = LogManager.getLogger();

    private static final CharacterStatDao characterStatDao = (CharacterStatDao) SworDaoFactory.getByClass(CharacterStat.class);
    private static final AvatarLookDao avatarLookDao = (AvatarLookDao) SworDaoFactory.getByClass(AvatarLook.class);
    private static final ZeroInfoDao zeroInfoDao = (ZeroInfoDao) SworDaoFactory.getByClass(ZeroInfo.class);

    public void saveOrUpdate(AvatarData avatarData) {
        if (avatarData == null) {
            return;
        }
        boolean needsId = avatarData.getId() == 0;

        characterStatDao.saveOrUpdate(avatarData.getCharacterStat());
        avatarLookDao.saveOrUpdate(avatarData.getAvatarLook());
        avatarLookDao.saveOrUpdate(avatarData.getZeroAvatarLook());
        zeroInfoDao.saveOrUpdate(avatarData.getZeroInfo());

        String query;
        if (needsId) {
            query = "INSERT INTO avatardata(" +
                    "characterStat, " +
                    "avatarLook, " +
                    "zeroAvatarLook, " +
                    "zeroinfo, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE avatardata SET " +
                    "characterStat = ?," +
                    "avatarLook = ?," +
                    "zeroAvatarLook = ?," +
                    "zeroinfo = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                avatarData.getCharacterStat() == null ? null : avatarData.getCharacterStat().getId(),
                avatarData.getAvatarLook() == null ? null : avatarData.getAvatarLook().getId(),
                avatarData.getZeroAvatarLook() == null ? null : avatarData.getZeroAvatarLook().getId(),
                avatarData.getZeroInfo() == null ? null : avatarData.getZeroInfo().getId(),
                avatarData.getId()
        );
        if (needsId) {
            avatarData.setId((int) id);
        }
    }

    public void delete(AvatarData avatarData) {
        if (avatarData == null || avatarData.getId() == 0) {
            log.debug("Trying to delete object " + avatarData + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM avatardata WHERE ID = ?", avatarData.getId());
    }


    @Override
    public AvatarData fromResultSet(ResultSet resultSet, String alias) {
        AvatarData avatarData = null;

        try {
            avatarData = new AvatarData();

            avatarData.setId(resultSet.getInt(alias + ".id"));
            avatarData.setCharacterStat(characterStatDao.fromResultSet(resultSet, "cs"));
            avatarData.setAvatarLook(avatarLookDao.getById(resultSet.getInt("avatarlook"), "al"));
            avatarData.setZeroAvatarLook(avatarLookDao.getById(resultSet.getInt("zeroavatarlook"), "zal"));
            avatarData.setZeroInfo(zeroInfoDao.getById(resultSet.getInt("zeroinfo"), "zi"));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return avatarData;
    }
}
