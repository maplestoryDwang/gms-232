package net.swordie.orm.dao;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.familiar.FamiliarCodexManager;
import net.swordie.ms.connection.db.BatchQueryHolder;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.QueryHolder;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.util.ErrorLogger;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class FamiliarDao implements SworDao<Familiar> {

    private static final Logger log = LogManager.getLogger();

    // Familiars
    public static final String TABLE_F = "familiars";
    private static final String keyColumn_f = "id";
    private static final List<String> columns_f = Arrays.asList(
            "id",
            "charid",
            "familiarid",
            "name",
            "locked",
            "level",
            "levelcap",
            "lvexp",
            "grade",
            "gradeexp",
            "attack",
            "defense",
            "options"
    );

    // Collected Familiars
    private static final IntegerColumnDao collectedMonstersDao = new IntegerColumnDao("familiarId");
    private static final String table_cf = "collectedfamiliars";
    private static final String keyColumn_cf = "charid";
    private static final List<String> columns_cf = Arrays.asList(
            "charid",
            "familiarId"
    );

    public QueryHolder createQueryHolder(Char chr, Familiar familiar) {
        if (familiar.isClean()) {
            return QueryHolder.clean();
        }
        boolean isInsert = familiar.isInit();
        var queryHolder = new QueryHolder<>(familiar, isInsert, false);

        String query;
        if (isInsert) {
            query = "INSERT INTO familiars(" +
                    "name, " +
                    "locked, " +
                    "level, " +
                    "levelcap, " +
                    "lvexp, " +
                    "grade, " +
                    "gradeexp, " +
                    "attack, " +
                    "defense, " +
                    "options, " +
                    "familiarid, " +
                    "charid, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        } else {
            query = "UPDATE familiars SET " +
                    "name = ?," +
                    "locked = ?," +
                    "level = ?," +
                    "levelcap = ?," +
                    "lvexp = ?," +
                    "grade = ?," +
                    "gradeexp = ?," +
                    "attack = ?," +
                    "defense = ?," +
                    "options = ?," +
                    "familiarid = ?," +
                    "charid = ?" +
                    " WHERE id = ?";
        }

        queryHolder.setQuery(query);
        queryHolder.setArgs(
                familiar.getName(),
                familiar.isLocked(),
                familiar.getLevel(),
                familiar.getCapLevel(),
                familiar.getLvExp(),
                familiar.getGrade(),
                familiar.getGradeExp(),
                familiar.getAttack(),
                familiar.getDefense(),
                InlinedIntArrayConverter.toDbColumn(Arrays.stream(familiar.getOptions()).boxed().collect(Collectors.toList())),
                familiar.getFamiliarID(),
                chr.getId(),
                familiar.getId()
        );
        if (isInsert) {
            familiar.setInit(false);
        }

        return queryHolder;
    }

    public void delete(Familiar familiar) {
        if (familiar == null || familiar.getId() == 0) {
            log.debug("Trying to delete object " + familiar + " that is null or has id 0");
            return;
        }
        DatabaseManager.executeQuery("DELETE FROM familiars WHERE ID = ?", familiar.getId());
    }

    @Override
    public Familiar fromResultSet(ResultSet resultSet, String alias) {
        Familiar fam = null;

        try {
            fam = new Familiar();
            fam.setId(resultSet.getLong(alias + ".id"));

            fam.setName(resultSet.getString(alias + ".name"));
            fam.setLocked(resultSet.getBoolean(alias + ".locked"));
            fam.setLevel(resultSet.getInt(alias + ".level"));
            fam.setCapLevel(resultSet.getInt(alias + ".levelcap"));
            fam.setLvExp(resultSet.getInt(alias + ".lvexp"));
            fam.setGrade(resultSet.getInt(alias + ".grade"));
            fam.setGradeExp(resultSet.getInt(alias + ".gradeexp"));
            fam.setAttack(resultSet.getInt(alias + ".attack"));
            fam.setDefense(resultSet.getInt(alias + ".defense"));
            var options = InlinedIntArrayConverter.fromDbColumn(resultSet.getString(alias + ".options"));
            if (options == null) {
                fam.setOptions(new int[2]);
            } else {
                fam.setOptions(options.stream().mapToInt(o -> o).toArray());
            }
            fam.setFamiliarID(resultSet.getInt(alias + ".familiarid"));
            fam.setLastSavedHash();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return fam;
    }

    public synchronized void saveOrUpdate(Char chr, Set<Familiar> familiars) {
        var batch = new BatchQueryHolder<>();
        for (var fam : new HashSet<>(familiars)) {
            batch.addQueryInfo(createQueryHolder(chr, fam));
        }
        DatabaseManager.executeBatchQuery(batch);
    }

    public Set<Familiar> byChar(Char chr) {
        var objs = DatabaseManager.executeSelect(this, "SELECT * FROM familiars fam WHERE charid = ?", "fam", chr.getId());
        Set<Familiar> saveDatas = new HashSet<>();
        for (var obj : objs) {
            if (obj != null) {
                saveDatas.add((Familiar) obj);
            }
        }
        return saveDatas;
    }

    public Set<Integer> getCollectedFamiliars(Char chr) {
        var objs = DatabaseManager.executeSelect(collectedMonstersDao,
                "SELECT * FROM collectedfamiliars cf WHERE charid = ?",
                "cf",
                chr.getId());

        var collectedFamiliars = new HashSet<Integer>();
        for (var obj : objs) {
            if (obj != null) {
                collectedFamiliars.add((Integer) obj);
            }
        }
        return collectedFamiliars;
    }

    public void saveCollectedFamiliars(Char chr, Set<Integer> collectedFamiliars) {
        deleteCollectedFamiliars(chr);

        if (collectedFamiliars == null || collectedFamiliars.size() == 0) {
            return;
        }
        var queryBuilder = new StringBuilder("INSERT INTO collectedfamiliars (charid, familiarId) VALUES ");
        var queryArgs = new Object[collectedFamiliars.size() * 2];
        var i = 0;

        for (var item : collectedFamiliars) {
            queryBuilder.append("(?, ?),");
            queryArgs[i++] = chr.getId();
            queryArgs[i++] = item;
        }

        var query = queryBuilder.toString();

        try {
            DatabaseManager.executeQuery(query.substring(0, query.length() - 1), queryArgs);
        } catch (Exception e) {
            ErrorLogger.logAsClientError(String.format("Failed to save familiars (chrId = %d)", chr.getId()));
            ErrorLogger.logAsClientError(e);
        }
    }

    private void deleteCollectedFamiliars(Char chr) {
        DatabaseManager.executeQuery("DELETE FROM collectedfamiliars WHERE charid = ?", chr.getId());
    }

    public void saveOrUpdate(Char chr, FamiliarCodexManager familiarCodexManager) {
        saveOrUpdate(chr, familiarCodexManager.getFamiliars());
        try {
            saveCollectedFamiliars(chr, familiarCodexManager.getCollectedFamiliars());
        } catch (Exception e) {
            // Continue, this rarely gives an exception because of Delete+Insert query reordering
        }
    }
}
