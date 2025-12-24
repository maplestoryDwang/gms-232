package net.swordie.ms.client.rankings;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.RankingResultDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 10/07/2021.
 *
 * @author Asura
 */
public class RankingModule {

    private static final RankingResultDao rankingResultsDao = (RankingResultDao) SworDaoFactory.getByClass(RankingResult.class);


    private static List<RankingResult> rankings = new ArrayList<>();
    private static List<RankingResult> classRankings = new ArrayList<>();
    private static List<RankingResult> fameRankings = new ArrayList<>();

    private static List<RankingResult> getRankings() {
        return rankings;
    }

    private static List<RankingResult> getClassRankings() {
        return classRankings;
    }

    private static List<RankingResult> getFameRankings() {
        return fameRankings;
    }

    private static List<RankingResult> getRankings(RankingType type) {
        return getRankings().stream()
                .filter(ranking ->
                        ranking.getRankingType().equals(type))
                .collect(Collectors.toList());
    }

    private static List<RankingResult> getClassRankings(int jobId) {
        return getClassRankings().stream()
                .filter(ranking ->
                        ranking.getAmount() == jobId)
                .collect(Collectors.toList());
    }

    public static void add(RankingResult rankingResult) {
        rankingResultsDao.saveOrUpdate(rankingResult);
    }

    public static void displayClassRankingsToChar(Char chr, int jobId) {
        chr.write(WvsContext.partyQuestRankingResult(getClassRankings(jobId), false));
    }

    public static void displayFameRankingsToChar(Char chr) {
        chr.write(WvsContext.partyQuestRankingResult(getFameRankings(), false));
    }

    public static void displayRankingsToChar(Char chr, RankingType type) {
        chr.write(WvsContext.partyQuestRankingResult(getRankings(type), true));
    }

    public static void refresh() {
        var replacementList = new ArrayList<RankingResult>();
        var classReplacementList = new ArrayList<RankingResult>();
        var fameReplacementList = new ArrayList<RankingResult>();


        // Fame Rankings
        fameReplacementList.addAll(new ArrayList<>(rankingResultsDao.byFameRankings(100)).stream().map(RankingResult::fromCharacterStatFame).collect(Collectors.toList()));

        // Class Rankings
        var classRankingMap = JobConstants.CLASS_RANKING_MAP;
        for (var tuple : classRankingMap) {
            classReplacementList.addAll(rankingResultsDao.byClassRankings(tuple.getRight(), 100).stream().map(RankingResult::fromCharacterStatClass).collect(Collectors.toList()));
        }

        // Instance Rankings
        for (var type : RankingType.values()) {

            // Specific Logic for the RankingType. example: Oz only shows the weekly rankings
            switch (type) {
                case Oz:
                    replacementList.addAll(new ArrayList<>(rankingResultsDao.byRankingType(type, Util.getLastMonday(), Util.getNextMonday(), 50)));
                    break;
            }
        }

        rankings.clear();
        rankings = replacementList; // Instance Rankings
        classRankings = classReplacementList; // Class Rankings
        fameRankings = fameReplacementList; // Fame Rankings
    }
}
