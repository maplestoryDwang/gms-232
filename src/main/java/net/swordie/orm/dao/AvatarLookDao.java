package net.swordie.orm.dao;

import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.avatar.EarStyle;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AvatarLookDao implements SworDao<AvatarLook> {

    private static final Logger log = LogManager.getLogger();
    private static final IntegerDao equipIdDao = new IntegerDao("equipid");

    public void saveOrUpdate(AvatarLook avatarLook) {
        if (avatarLook == null) {
            return;
        }

        boolean needsId = avatarLook.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO avatarlook(" +
                    "gender, " +
                    "skin, " +
                    "face, " +
                    "hair, " +
                    "weaponStickerId, " +
                    "weaponId, " +
                    "subWeaponId, " +
                    "job, " +
                    "drawElfEar, " +
                    "earstyle, " +
                    "demonSlayerDefFaceAcc, " +
                    "xenonDefFaceAcc, " +
                    "beastTamerDefFaceAcc, " +
                    "isZeroBetaLook, " +
                    "mixedHairColor, " +
                    "mixHairPercent, " +
                    "totems, " +
                    "ears, " +
                    "tail, " +
                    "hairequips, " +
                    "unseenequips, " +
                    "petids, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE avatarlook SET " +
                    "gender = ?," +
                    "skin = ?," +
                    "face = ?," +
                    "hair = ?," +
                    "weaponStickerId = ?," +
                    "weaponId = ?," +
                    "subWeaponId = ?," +
                    "job = ?," +
                    "drawElfEar = ?," +
                    "earstyle = ?," +
                    "demonSlayerDefFaceAcc = ?," +
                    "xenonDefFaceAcc = ?," +
                    "beastTamerDefFaceAcc = ?," +
                    "isZeroBetaLook = ?," +
                    "mixedHairColor = ?," +
                    "mixHairPercent = ?," +
                    "totems = ?," +
                    "ears = ?," +
                    "tail = ?," +
                    "hairequips = ?," +
                    "unseenequips = ?," +
                    "petids = ?" +
                    " WHERE ID = ?";
        }
        long id = DatabaseManager.executeQuery(query,
                avatarLook.getGender(),
                avatarLook.getSkin(),
                avatarLook.getFace(),
                avatarLook.getHair(),
                avatarLook.getWeaponStickerId(),
                avatarLook.getWeaponId(),
                avatarLook.getSubWeaponId(),
                avatarLook.getJob(),
                avatarLook.isDrawElfEar(),
                avatarLook.getEarStyle() == null ? 0 : avatarLook.getEarStyle().ordinal(),
                avatarLook.getDemonSlayerDefFaceAcc(),
                avatarLook.getXenonDefFaceAcc(),
                avatarLook.getBeastTamerDefFaceAcc(),
                avatarLook.isZeroBetaLook(),
                avatarLook.getMixedHairColor(),
                avatarLook.getMixHairPercent(),
                InlinedIntArrayConverter.toDbColumn(avatarLook.getTotems()),
                avatarLook.getEars(),
                avatarLook.getTail(),
                InlinedIntArrayConverter.toDbColumn(avatarLook.getHairEquips()),
                InlinedIntArrayConverter.toDbColumn(avatarLook.getUnseenEquips()),
                InlinedIntArrayConverter.toDbColumn(avatarLook.getPetIDs()),
                avatarLook.getId()
        );
        if (needsId) {
            avatarLook.setId((int) id);
        }

    }

    public void delete(AvatarLook avatarLook) {
        if (avatarLook == null || avatarLook.getId() == 0) {
            log.debug("Trying to delete object " + avatarLook + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM avatarlook WHERE ID = ?", avatarLook.getId());
    }


    public AvatarLook getById(int id, String alias) {
        if (id == 0) {
            return null;
        }

        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM avatarlook " + alias + " WHERE id = ?", alias, id);
        if (objs.size() > 0) {
            return (AvatarLook) objs.get(0);
        }
        return null;
    }

    @Override
    public AvatarLook fromResultSet(ResultSet resultSet, String alias) {
        AvatarLook al = null;

        try {
            al = new AvatarLook(false);
            al.setId(resultSet.getInt(alias + ".id"));
            al.setGender(resultSet.getInt(alias + ".gender"));
            al.setSkin(resultSet.getInt(alias + ".skin"));
            al.setFace(resultSet.getInt(alias + ".face"));
            al.setHair(resultSet.getInt(alias + ".hair"));
            al.setWeaponStickerId(resultSet.getInt(alias + ".weaponstickerid"));
            al.setWeaponId(resultSet.getInt(alias + ".weaponid"));
            al.setSubWeaponId(resultSet.getInt(alias + ".subweaponid"));
            al.setJob(resultSet.getInt(alias + ".job"));
            al.setDrawElfEar(resultSet.getBoolean(alias + ".drawelfear"));
            al.setEarStyle(EarStyle.values()[resultSet.getInt(alias + ".earstyle")]);
            al.setDemonSlayerDefFaceAcc(resultSet.getInt(alias + ".demonslayerdeffaceacc"));
            al.setXenonDefFaceAcc(resultSet.getInt(alias + ".xenondeffaceacc"));
            al.setBeastTamerDefFaceAcc(resultSet.getInt(alias + ".beasttamerdeffaceacc"));
            al.setZeroBetaLook(resultSet.getBoolean(alias + ".iszerobetalook"));
            al.setMixedHairColor(resultSet.getInt(alias + ".mixedhaircolor"));
            al.setMixHairPercent(resultSet.getInt(alias + ".mixhairpercent"));
            al.setEars(resultSet.getInt(alias + ".ears"));
            al.setTail(resultSet.getInt(alias + ".tail"));
            al.setHairEquips(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".hairequips")));
            al.setUnseenEquips(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".unseenequips")));
            al.setTotems(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".totems")));
            al.setPetIDs(InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".petids")));

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return al;
    }

    public List<Integer> getHairEquipsByAvatarLook(AvatarLook avatarLook) {
        var objs = DatabaseManager.executeSelect(equipIdDao, "SELECT * FROM hairequips he WHERE alid = ?", "he", avatarLook.getId());
        List<Integer> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Integer) obj);
            }
        }
        return saveDatas;
    }

    public List<Integer> getUnseenEquipsByAvatarLook(AvatarLook avatarLook) {
        var objs = DatabaseManager.executeSelect(equipIdDao, "SELECT * FROM unseenequips ue WHERE alid = ?", "ue", avatarLook.getId());
        List<Integer> saveDatas = new ArrayList<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Integer) obj);
            }
        }
        return saveDatas;
    }
}
