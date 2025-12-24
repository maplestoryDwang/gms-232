package net.swordie.orm.dao;

import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.rankings.RankingResult;
import net.swordie.ms.client.rankings.RankingType;
import net.swordie.ms.connection.db.DatabaseManager;
import net.swordie.ms.connection.db.converters.FileTimeConverter;
import net.swordie.ms.connection.db.converters.InlinedStringArrayConverter;
import net.swordie.ms.util.FileTime;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created on 12/07/2021.
 *
 * @author Asura
 */
public class RankingResultDao implements SworDao<RankingResult> {

    private static final CharacterStatDao csDao = (CharacterStatDao) SworDaoFactory.getByClass(CharacterStat.class);

    public void saveOrUpdate(RankingResult rankingResult) {
        if (rankingResult == null) {
            return;
        }
        boolean needsId = rankingResult.getId() == 0;

        String query;
        if (needsId) {
            query = "INSERT INTO rankingresults (" +
                    "charnames, " +
                    "amount, " +
                    "amount2, " +
                    "amount3, " +
                    "rankingtime, " +
                    "timestamp, " +
                    "rankingtype, " +
                    "id " +
                    ") VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
        } else {
            query = "UPDATE rankingresults SET " +
                    "charnames = ?, " +
                    "amount = ?, " +
                    "amount2 = ?, " +
                    "amount3 = ?, " +
                    "rankingtime = ?, " +
                    "timestamp = ?, " +
                    "rankingtype = ? " +
                    "WHERE id = ?;";
        }

        long id = DatabaseManager.executeQuery(query,
                InlinedStringArrayConverter.toDbColumn(rankingResult.getChrNames()),
                rankingResult.getAmount(),
                rankingResult.getAmount2(),
                rankingResult.getAmount3(),
                rankingResult.getRankingTime(),
                FileTimeConverter.toDbColumn(rankingResult.getTimeStamp()),
                rankingResult.getRankingType().getVal(),
                rankingResult.getId()
        );

        if (needsId) {
            rankingResult.setId((int) id);
        }
    }

    public List<CharacterStat> byClassRankings(int jobId, int limit) {
        var query =
                "SELECT * " +
                "FROM characterstats cs " +
                "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                "INNER JOIN characters c on cs.characterid = c.id " +
                "INNER JOIN users u on u.id = c.userid " +
                "WHERE cs.job = ? AND (u.banExpireDate is null OR u.banExpireDate < current_timestamp()) " +
                "ORDER BY cs.level DESC, cs.exp DESC, cs.lastlevelobtainedtime ASC " +
                "LIMIT ?;";

        var objs = DatabaseManager.executeSelect(csDao, query, "cs", jobId, limit);
        var returnList = new ArrayList<CharacterStat>();
        for (var obj : objs) {
            if (obj != null) {
                returnList.add((CharacterStat) obj);
            }
        }

        return returnList;
    }

    public List<CharacterStat> byFameRankings(int limit) {
        var query =
                "SELECT * " +
                "FROM characterstats cs " +
                "INNER JOIN noncombatstatdaylimit ncsdl on ncsdl.id = cs.noncombatstatdaylimit " +
                "INNER JOIN extendsp esp on esp.id = cs.extendsp " +
                "INNER JOIN characters c on cs.characterid = c.id " +
                "INNER JOIN users u on u.id = c.userid " +
                "WHERE (u.banExpireDate is null OR u.banExpireDate < current_timestamp()) " +
                "ORDER BY cs.pop DESC " +
                "LIMIT ?;";

        var objs = DatabaseManager.executeSelect(csDao, query, "cs", limit);
        var returnList = new ArrayList<CharacterStat>();
        for (var obj : objs) {
            if (obj != null) {
                returnList.add((CharacterStat) obj);
            }
        }

        return returnList;
    }

    public List<RankingResult> byRankingType(RankingType rankingType) {
        var query =
                "SELECT * " +
                "FROM rankingresults rr " +
                "WHERE rr.rankingtype = ? " + // Filter by Ranking type
                "ORDER BY rr.amount desc, rr.rankingtime, rr.timestamp asc;";

        var objs = DatabaseManager.executeSelect(this, query, "rr",
                rankingType.getVal()
        );
        var returnList = new ArrayList<RankingResult>();
        for (var obj : objs) {
            if (obj != null) {
                returnList.add((RankingResult) obj);
            }
        }

        return returnList;
    }

    public List<RankingResult> byRankingType(RankingType rankingType, int limit) {
        var query =
                "SELECT * " +
                "FROM rankingresults rr " +
                "WHERE rr.rankingtype = ? " + // Filter by Ranking type
                "ORDER BY rr.amount desc, rr.rankingtime, rr.timestamp asc " +
                "LIMIT ?";

        var objs = DatabaseManager.executeSelect(this, query, "rr",
                rankingType.getVal(),
                limit
        );
        var returnList = new ArrayList<RankingResult>();
        for (var obj : objs) {
            if (obj != null) {
                returnList.add((RankingResult) obj);
            }
        }

        return returnList;
    }

    public List<RankingResult> byRankingType(RankingType rankingType, FileTime start, FileTime end, int limit) {
        var query =
                "SELECT * " +
                "FROM rankingresults rr " +
                "WHERE rr.rankingtype = ? AND rr.timestamp BETWEEN ? AND ? " + // Filter by Ranking type and between certain dates
                "ORDER BY rr.amount desc, rr.rankingtime, rr.timestamp asc " +
                "LIMIT ?";

        var objs = DatabaseManager.executeSelect(this, query, "rr",
                rankingType.getVal(),
                FileTimeConverter.toDbColumn(start),
                FileTimeConverter.toDbColumn(end),
                limit
        );
        var returnList = new ArrayList<RankingResult>();
        for (var obj : objs) {
            if (obj != null) {
                returnList.add((RankingResult) obj);
            }
        }

        return returnList;
    }

    @Override
    public RankingResult fromResultSet(ResultSet resultSet, String alias) {
        RankingResult rankingResult = null;

        try {
            rankingResult = new RankingResult();
            rankingResult.setId(resultSet.getInt(alias + ".id"));
            rankingResult.setChrNames(InlinedStringArrayConverter.fromDbColumn(resultSet.getString(alias + ".charnames")));
            rankingResult.setAmount(resultSet.getLong(alias + ".amount"));
            rankingResult.setAmount2(resultSet.getLong(alias + ".amount2"));
            rankingResult.setAmount3(resultSet.getLong(alias + ".amount3"));
            rankingResult.setRankingTime(resultSet.getInt(alias + ".rankingtime"));
            rankingResult.setTimeStamp(FileTimeConverter.fromDbColumn(resultSet.getTimestamp(alias + ".timestamp")));
            rankingResult.setRankingType(RankingType.getByVal(resultSet.getInt(alias + ".rankingtype")));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rankingResult;
    }
}
