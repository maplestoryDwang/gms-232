package net.swordie.ms.client.rankings;

import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.util.FileTime;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 10/07/2021.
 *
 * @author Asura
 */
public class RankingResult {

    private int id;
    private List<String> chrNames; // instance char names
    private long amount; // based on context: i.e. Oz -> Floor Reached
    private long amount2; // based on context
    private long amount3; // based on context
    private int rankingTime; // run duration in seconds
    private FileTime timeStamp; // when this ranking is created
    private RankingType rankingType;

    public RankingResult() {
    }

    public RankingResult(RankingType rankingType, int amount, int rankingTime, String... names) {
        this.chrNames = Arrays.stream(names).collect(Collectors.toList());
        this.amount = amount;
        this.rankingTime = rankingTime;
        this.timeStamp = FileTime.currentTime();
        this.rankingType = rankingType;
    }

    public RankingResult(RankingType rankingType, int amount, int rankingTime, List<String> names) {
        this.chrNames = names;
        this.amount = amount;
        this.rankingTime = rankingTime;
        this.timeStamp = FileTime.currentTime();
        this.rankingType = rankingType;
    }

    public RankingResult(RankingType rankingType, long amount, long amount2, long amount3, int rankingTime, String... names) {
        this.chrNames = Arrays.stream(names).collect(Collectors.toList());
        this.amount = amount;
        this.amount2 = amount2;
        this.amount3 = amount3;
        this.rankingTime = rankingTime;
        this.timeStamp = FileTime.currentTime();
        this.rankingType = rankingType;
    }

    public RankingResult(RankingType rankingType, long amount, long amount2, long amount3, int rankingTime, List<String> names) {
        this.chrNames = names;
        this.amount = amount;
        this.amount2 = amount2;
        this.amount3 = amount3;
        this.rankingTime = rankingTime;
        this.timeStamp = FileTime.currentTime();
        this.rankingType = rankingType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<String> getChrNames() {
        return chrNames;
    }

    public void setChrNames(List<String> chrNames) {
        this.chrNames = chrNames;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public long getAmount2() {
        return amount2;
    }

    public void setAmount2(long amount2) {
        this.amount2 = amount2;
    }

    public long getAmount3() {
        return amount3;
    }

    public void setAmount3(long amount3) {
        this.amount3 = amount3;
    }

    public int getRankingTime() {
        return rankingTime;
    }

    public void setRankingTime(int rankingTime) {
        this.rankingTime = rankingTime;
    }

    public FileTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(FileTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public RankingType getRankingType() {
        return rankingType;
    }

    public void setRankingType(RankingType rankingType) {
        this.rankingType = rankingType;
    }

    public static RankingResult fromCharacterStatClass(CharacterStat cs) {
        return new RankingResult(null, cs.getJob(), 1,
                cs.getName(), JobConstants.getNameByJobId(cs.getJob()), "",
                "Lv: " + cs.getLevel(), String.format("Exp: %,.3f", (cs.getLevel() >= GameConstants.MAX_CHAR_LEVEL ? 0 : ((double) cs.getExp() / GameConstants.charExp[cs.getLevel()]) * 100)) + "%"
        );
    }

    public static RankingResult fromCharacterStatFame(CharacterStat cs) {
        return new RankingResult(null, 1, 1,
                cs.getName(), "Lv: " + cs.getLevel(), "Fame: " + cs.getPop()
        );
    }
}
