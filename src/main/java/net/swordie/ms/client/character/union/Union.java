package net.swordie.ms.client.character.union;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UnionBoardDao;

import java.util.*;
import java.util.stream.Collectors;

public class Union {

    private static final UnionBoardDao unionBoardDao = (UnionBoardDao) SworDaoFactory.getByClass(UnionBoard.class);
    // Reverse compare
    private static final Comparator<Char> chrHighestLevelComparator = (chr1, chr2) -> Short.compare(chr2.getLevel(), chr1.getLevel());

    public static final int MAX_PRESETS = 5;
    public static final int MAX_STATS = 8; // changeable
    public static final int MAX_CHARS = 40;
    public static final int DEFAULT_PRESETS = 2;
    public static final int DEFAULT_RANK = 101;
    public static final int MAX_GRID_SLOTS = 440;
    public static final int GRID_WIDTH = 22;
    public static final int GRID_STAT_BASE_SKILLID = 71004000;

    private Account account;

    private List<UnionBoard> unionBoards;

    private long id;
    private int unionCoin;
    private int unionRank;
    private int presets;
    private int activePreset;
    private Map<BaseStat, Integer> gridBaseStats = new HashMap<>(); // are multiplied by R vars
    private Map<BaseStat, Integer> memberBaseStats = new HashMap<>(); // are NOT multiplied by R vars

    public Union() {
    }

    public Union(int presets, int unionRank) {
        this.presets = presets;
        this.unionRank = unionRank;
        unionBoards = new ArrayList<>();
        for (int i = 0; i < presets; i++) {
            addPreset();
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Account getAccount() {
        return account;
    }

    public void addPreset() {
        if (getPresets() < MAX_PRESETS) {
            setPresets(getPresets() + 1);
            var ub = new UnionBoard(true);
            getUnionBoards().add(ub);
        }
    }

    public UnionBoard getBoardByPreset(int preset) {
        if (hasPresetUnlocked(preset)) {
            return getUnionBoards().get(preset);
        }
        return null;
    }

    public List<UnionBoard> getUnionBoards() {
        if (unionBoards == null) {
            unionBoards = unionBoardDao.byUnion(this);
        }
        return unionBoards;
    }

    public void setUnionBoards(List<UnionBoard> unionBoards) {
        this.unionBoards = unionBoards;
    }

    public int getUnionCoin() {
        return unionCoin;
    }

    public void setUnionCoin(int unionCoin) {
        this.unionCoin = unionCoin;

        //Always visually update when we set coin, this makes it also happen upon login
        if (account == null) { return; }
        Char chr = account.getCurrentChr();
        if (chr != null) {
            Quest quest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.UNION_COIN);
            quest.setProperty("point", unionCoin);
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
            chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
        }
    }

    public void addUnionCoin(int amount) {
        if((long)getUnionCoin() + (long) amount > Integer.MAX_VALUE) {
            setUnionCoin(Integer.MAX_VALUE);
            return;
        }

        setUnionCoin(getUnionCoin() + amount);
    }

    public int getUnionRank() {
        return unionRank;
    }

    public void setUnionRank(int unionRank) {
        this.unionRank = unionRank;
    }

    public int getActivePreset() {
        return activePreset;
    }

    public void setActivePreset(int activePreset) {
        this.activePreset = activePreset;
    }

    public int getPresets() {
        return presets;
    }

    public void setPresets(int presets) {
        this.presets = presets;
    }

    public boolean hasPresetUnlocked(int preset) {
        return preset >= 0 && preset < getPresets() && preset < getUnionBoards().size();
    }

    private int getUnionRankIndex() {
        int high = getUnionRank() / 100;
        int low = getUnionRank() % 100;
        return (low - 1) + (high - 1) * 5;
    }

    private boolean isMaxUnionRank() {
        return getUnionRank() == 405;
    }

    public String getUnionRankName() {
        return UnionMember.ranks[getUnionRankIndex()];
    }

    public String getUnionNextRankName() {
        return UnionMember.ranks[isMaxUnionRank() ? getUnionRankIndex() : getUnionRankIndex() + 1];
    }

    public long getUnionPower() {
        return getUnionPower(null);
    }

    public long getUnionPower(Char chr) { // call with null to get full union power
        UnionBoard activeBoard = getBoardByPreset(getActivePreset());
        return activeBoard.calculateTotalUnionPower(chr);
    }

    public List<Char> getEligibleUnionChars() {
        var chars = new HashSet<>(account.getCharacters());
        var eligibleChars = new ArrayList<Char>();
        var currentActiveUnionChars = getActiveUnionChars(account.getUnion().getActivePreset()).stream()
                .map(UnionMember::getCharId)
                .collect(Collectors.toSet());

        // chars that are already allocated
        for (var chr : chars) {
            if (currentActiveUnionChars.contains(chr.getId())) {
                eligibleChars.add(chr);
            }
        }

        chars.removeIf(chr -> currentActiveUnionChars.contains(chr.getId()));

        // rest of the eligible members
        eligibleChars.addAll(chars.stream()
                .filter(this::isEligibleUnionChar)
                .sorted(chrHighestLevelComparator)
                .collect(Collectors.toList()));

        return eligibleChars;
    }

    public boolean isEligibleUnionChar(Char chr) {
        return (JobConstants.isZero(chr.getJob()) ? chr.getLevel() >= 130 : chr.getLevel() >= 60) // Level Requirement
                && JobConstants.getJobLevel(chr.getJob()) >= 3 // 3rd Job Advancement Requirement
                && !JobConstants.isBeginnerJob(chr.getJob());
    }

    public Set<UnionMember> getActiveUnionChars(int preset) {
        // Get eligible characters that have a grid position of >= 0.
        if (hasPresetUnlocked(preset)) {
            return getBoardByPreset(preset).getActiveMembers();
        }
        return null;
    }

    public void setCharPosForPreset(int preset, Char chr, int rotation, int grid) {
        UnionBoard ub = getBoardByPreset(preset);
        if (ub != null) {
            ub.setCharGridPos(chr, rotation, grid);
        }
    }

    public void updateUnionBonuses(Char chr) {
        UnionBoard ub = getBoardByPreset(chr.getActiveUnionPreset());

        // Remove Union Bonuses
        removeUnionBonuses();

        // Get Union Member Bonuses
        Set<Skill> unionMemberSkills = ub.getAllMemberBonusSkills();

        // Get Union Grid Bonuses
        List<Skill> unionGridSkills = ub.getAllGridBonusSkills(getUnionRank());


        // Apply Union Member BaseStats
        for (Skill skill : unionMemberSkills) {
            getBaseStatsBySkill(chr, skill).forEach(this::putMemberBaseStat);
        }

        // Apply Union Grid BaseStats
        for (Skill skill : unionGridSkills) {
            getBaseStatsBySkill(chr, skill).forEach(this::putGridBaseStat);
        }
    }

    private void removeUnionBonuses() {
        getMemberBaseStats().clear();
        getGridBaseStats().clear();
    }

    private Map<BaseStat, Integer> getBaseStatsBySkill(Char chr, Skill skill) {
        if (skill != null && skill.getCurrentLevel() > 0) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            if (si != null && SkillConstants.isPassiveSkill(skill.getSkillId())) {
                return si.getBaseStatValues(chr, skill.getCurrentLevel());
            }
        }
        return new HashMap<>();
    }

    public static int getGridStatBySynergyType(SynergyGridType synergyGridType) {
        return GRID_STAT_BASE_SKILLID + synergyGridType.getVal();
    }

    public Map<BaseStat, Integer> getGridBaseStats() {
        return gridBaseStats;
    }

    public void putGridBaseStat(BaseStat bs, Integer val) {
        if (getGridBaseStats().containsKey(bs)) {
            getGridBaseStats().put(bs, getGridBaseStat(bs) + val);
        } else {
            getGridBaseStats().put(bs, val);
        }
    }

    public int getGridBaseStat(BaseStat bs) {
        return getGridBaseStats().getOrDefault(bs, 0);
    }


    public Map<BaseStat, Integer> getMemberBaseStats() {
        return memberBaseStats;
    }

    public void putMemberBaseStat(BaseStat bs, Integer val) {
        if (getMemberBaseStats().containsKey(bs)) {
            getMemberBaseStats().put(bs, getMemberBaseStat(bs) + val);
        } else {
            getMemberBaseStats().put(bs, val);
        }
    }

    public int getMemberBaseStat(BaseStat bs) {
        return getMemberBaseStats().getOrDefault(bs, 0);
    }
}
