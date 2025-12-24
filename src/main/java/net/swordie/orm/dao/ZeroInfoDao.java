package net.swordie.orm.dao;

import net.swordie.ms.client.character.info.ZeroInfo;
import net.swordie.ms.connection.db.DatabaseManager;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ZeroInfoDao implements SworDao<ZeroInfo> {

    private static final Logger log = LogManager.getLogger();

    public void saveOrUpdate(ZeroInfo zeroInfo) {
        if (zeroInfo == null) {
            return;
        }

        String query;
        boolean needsId = zeroInfo.getId() == 0;
        if (needsId) {
            query = "INSERT INTO zeroinfo(" +
                    "betastate, " +
                    "subhp, " +
                    "submhp, " +
                    "submp, " +
                    "submmp, " +
                    "subskin, " +
                    "subhair, " +
                    "subface, " +
                    "dbcharzerolinkcashpart, " +
                    "mixbasehaircolor, " +
                    "mixaddhaircolor, " +
                    "mixhairbaseprob, " +
                    "wpcoin, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE zeroinfo SET " +
                    "betastate = ?, " +
                    "subhp = ?, " +
                    "submhp = ?, " +
                    "submp = ?, " +
                    "submmp = ?, " +
                    "subskin = ?, " +
                    "subhair = ?, " +
                    "subface = ?, " +
                    "dbcharzerolinkcashpart = ?, " +
                    "mixbasehaircolor = ?, " +
                    "mixaddhaircolor = ?, " +
                    "mixhairbaseprob = ?, " +
                    "wpcoin = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                zeroInfo.isZeroBetaState(),
                zeroInfo.getSubHP(),
                zeroInfo.getSubMHP(),
                zeroInfo.getSubMP(),
                zeroInfo.getSubMMP(),
                zeroInfo.getSubSkin(),
                zeroInfo.getSubHair(),
                zeroInfo.getSubFace(),
                zeroInfo.getDbcharZeroLinkCashPart(),
                zeroInfo.getMixBaseHairColor(),
                zeroInfo.getMixAddHairColor(),
                zeroInfo.getMixHairBaseProb(),
                zeroInfo.getWpCoin(),
                zeroInfo.getId()
        );

        if (needsId) {
            zeroInfo.setId((int) id);
        }
    }

    public void delete(ZeroInfo zeroInfo) {
        if (zeroInfo == null || zeroInfo.getId() == 0) {
            log.debug("Trying to delete object " + zeroInfo + "that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM zeroinfo WHERE ID = ?", zeroInfo.getId());
    }

    public ZeroInfo getById(int id, String alias) {
        if (id == 0) {
            return null;
        }

        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM zeroinfo " + alias + " WHERE ID = ?", alias, id);
        if (objs.size() > 0) {
            return (ZeroInfo) objs.get(0);
        }
        return null;
    }

    @Override
    public ZeroInfo fromResultSet(ResultSet resultSet, String alias) {
        ZeroInfo zeroInfo = null;

        try {
            zeroInfo = new ZeroInfo();
            zeroInfo.setId(resultSet.getInt(alias + ".id"));
            zeroInfo.setZeroBetaState(resultSet.getBoolean(alias + ".betastate"));
            zeroInfo.setSubHP(resultSet.getInt(alias + ".subhp"));
            zeroInfo.setSubMHP(resultSet.getInt(alias + ".submhp"));
            zeroInfo.setSubMP(resultSet.getInt(alias + ".submp"));
            zeroInfo.setSubMMP(resultSet.getInt(alias + ".submmp"));
            zeroInfo.setSubSkin(resultSet.getInt(alias + ".subskin"));
            zeroInfo.setSubHair(resultSet.getInt(alias + ".subhair"));
            zeroInfo.setSubFace(resultSet.getInt(alias + ".subface"));
            zeroInfo.setDbcharZeroLinkCashPart(resultSet.getInt(alias + ".dbcharzerolinkcashpart"));
            zeroInfo.setMixBaseHairColor(resultSet.getInt(alias + ".mixbasehaircolor"));
            zeroInfo.setMixAddHairColor(resultSet.getInt(alias + ".mixaddhaircolor"));
            zeroInfo.setMixHairBaseProb(resultSet.getInt(alias + ".mixhairbaseprob"));
            zeroInfo.setWpCoin(resultSet.getInt(alias + ".wpcoin"));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return zeroInfo;
    }
}
