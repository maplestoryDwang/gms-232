package net.swordie.ms.client.character.union;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.converters.InlinedIntArrayConverter;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.loaders.EtcData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.UnionBoardInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.orm.dao.SworDaoFactory;
import net.swordie.orm.dao.UnionMemberDao;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

public class UnionBoard implements Encodable {

    private static final Logger log = LogManager.getLogger();
    private static final UnionMemberDao unionMemberDao = (UnionMemberDao) SworDaoFactory.getByClass(UnionMember.class);

    private long id;
    private int unionPower;
    private long unionDamage;

    private Set<UnionMember> activeMembers;
    private List<Integer> synergyGrid;

    public UnionBoard(boolean init) {
        if (init) {
            activeMembers = new HashSet<>();
            synergyGrid = new ArrayList<>();
            for (int allocation = 0; allocation < Union.MAX_STATS; allocation++) {
                synergyGrid.add(allocation);
            }
        }
    }

    public boolean isActiveMembersLoaded() {
        return activeMembers != null;
    }

    public Set<UnionMember> getActiveMembers() {
        if (!isActiveMembersLoaded()) {
            activeMembers = unionMemberDao.byUnionBoard(this);
        }
        return activeMembers;
    }

    public void setActiveMembers(Set<UnionMember> activeMembers) {
        this.activeMembers = activeMembers;
    }

    public int getUnionPower() {
        return unionPower;
    }

    public void setUnionPower(int unionPower) {
        this.unionPower = unionPower;
    }

    public long getUnionDamage() {
        return unionDamage;
    }

    public void setUnionDamage(long unionDamage) {
        this.unionDamage = unionDamage;
    }

    public List<Integer> getSynergyGrid() {
        return synergyGrid;
    }

    public void setSynergyGrid(List<Integer> synergyGrid) {
        this.synergyGrid = synergyGrid;
    }

    //https://strategywiki.org/wiki/MapleStory/Maple_Union#Attacker_Union_Power
    public long calculateTotalUnionPower(Char chr) {
        return calculateUnionAttackPower(chr) + calculateUnionStarForcePower(chr);
    }

    public long calculateUnionAttackPower(Char chr) {
        long attackPower = 0;
        for (UnionMember um : getActiveMembers()) {
            if (um == null || !um.hasChr()) {
                continue;
            }
            double multiplier = GameConstants.getUnionMultiplier(um.getLevel());
            attackPower += multiplier * (Math.pow(um.getLevel(), 3)) + 12500;
        }
        return attackPower;
    }

    public long calculateUnionStarForcePower(Char chr) {
        long sfPower = 0;
        for (UnionMember um : getActiveMembers()) {
            if (um == null || !um.hasChr()) {
                continue;
            }
            long chuc = um.getChr().getTotalChuc();
            GameConstants.UnionChucMultiplier mult = GameConstants.getUnionChucMultiplier(um.getChuc());
            sfPower += mult.firstMulti * (Math.pow(chuc, 3)) + mult.secondMulti * (Math.pow(chuc, 2)) + mult.thirdMulti * chuc + mult.fourthMulti;
        }
        return sfPower;
    }

    @Override
    public void encode(OutPacket outPacket) {
        for (int allocation : getSynergyGrid()) { // size = 8
            outPacket.encodeInt(allocation);
        }
        outPacket.encodeInt(getActiveMembers().size());
        for (UnionMember um : getActiveMembers()) {
            um.encode(outPacket, false);
        }
    }

    /**
     * Sets a position to the given Char in this board. Will create a new member if no matching one exists for the Char.
     * Deletes the member if grid is -1.
     * @param chr the Char to assign
     * @param rotation the rotation of the assignment
     * @param grid the position of the assignment
     */
    public void setCharGridPos(Char chr, int rotation, int grid) {
        if (grid != 1 && getActiveMembers().size() < Union.MAX_CHARS) {
            UnionMember um = chr.createUnionMember();
            um.setGridRotation(rotation);
            um.setGridPos(grid);
            getActiveMembers().add(um);
        }
    }

    public UnionMember getMemberById(int charId) {
        return Util.findWithPred(getActiveMembers(), am -> am.getCharId() == charId);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void removeMemberByCharId(int id) {
        UnionMember um = getMemberById(id);
        removeMember(um);
    }

    public void removeMember(UnionMember unionMember) {
        if (unionMember != null) {
            getActiveMembers().remove(unionMember);
            unionMemberDao.delete(unionMember);
        }
    }

    public void clearActiveMembers() {
        getActiveMembers().clear();
    }

    public void save() {
        unionMemberDao.saveOrUpdate(this, getActiveMembers());
    }

    // Stats from Members
    public Set<Skill> getAllMemberBonusSkills() {
        Set<Skill> skills = new HashSet<>();
        for (UnionMember um : getActiveMembers()) {
            if (!um.hasChr()) {
                continue;
            }

            Skill skill = getMemberBonusSkill(um);

            if (skill != null) {
                Skill prevSkill = skills.stream().filter(s -> s.getSkillId() == skill.getSkillId()).findFirst().orElse(null);

                if (prevSkill == null) { // No Duplicate
                    skills.add(skill);
                } else if (skill.getCurrentLevel() > prevSkill.getCurrentLevel()) { // Replace
                    skills.remove(prevSkill);
                    skills.add(skill);
                }
            }
        }

        return skills;
    }

    public Skill getMemberBonusSkill(UnionMember um) {
        int skillId = um.getMemberBonusSkill();
        if (skillId == 0) {
            return null;
        }

        int slv = um.getBonusSkillLv();

        Skill skill = SkillData.getSkillDeepCopyById(skillId);
        skill.setCurrentLevel(slv);
        skill.setMasterLevel(5);
        skill.setMaxLevel(5);

        return skill;
    }

    // Stats from Grid
    public List<Skill> getAllGridBonusSkills(int unionRank) {
        Map<Integer, Integer> skills = new HashMap<>();
        for (Integer gridSlot : getAllActiveGridSlots(unionRank)) {
            UnionBoardInfo ubi = EtcData.getUnionBoardInfoById(gridSlot);

            SynergyGridType sgt = null;
            if (ubi.getGroupIndex() < Union.MAX_STATS) {
                sgt = SynergyGridType.getByVal(getSynergyGrid().get(ubi.getGroupIndex()));
            } else {
                sgt = SynergyGridType.getByVal(ubi.getGroupIndex());
            }
            if (sgt == null) {
                continue;
            }
            int skillId = Union.getGridStatBySynergyType(sgt);

            if (skillId > 0) {
                if (skills.containsKey(skillId)) {
                    skills.put(skillId, skills.get(skillId) + 1);
                } else {
                    skills.put(skillId, 1);
                }
            }
        }

        List<Skill> skillList = new ArrayList<>();
        for (var entry : skills.entrySet()) {
            Skill skill = SkillData.getSkillDeepCopyById(entry.getKey());
            skill.setCurrentLevel(entry.getValue());
            skill.setMasterLevel(40);
            skill.setMaxLevel(40);

            skillList.add(skill);
        }

        return skillList;
    }

    public Set<Integer> getAllActiveGridSlots(int unionRank) {
        Set<Integer> activeSlots = new HashSet<>();
        for (UnionMember um : getActiveMembers()) {
            activeSlots.addAll(getActiveSlotsFromMember(um, unionRank));
        }
        return activeSlots;
    }


    // Grid Logic
    public List<Integer> getActiveSlotsFromMember(UnionMember unionMember, int unionRank) {
        List<Integer> grids = new ArrayList<>();
        int gridPos = unionMember.getGridPos();
        int rotation = unionMember.getGridRotation();

        if (unionMember.getChr() == null) {
            log.error(String.format("UnionMember.chr is null | unionMember charid = %d;  unionBoard id=%d;", unionMember.getCharId(), getId()));
            return new ArrayList<>();
        }

        List<Position> positions = EtcData.getUnionPositionsByJobAndRank(unionMember.getJob(), unionMember.getMemberRank());

        if (JobConstants.isXenon(unionMember.getJob())) { // Special Grid Piece for Xenon
            positions = new ArrayList<>();
            if (unionMember.getLevel() >= 60) {
                positions.add(new Position(0, 0));
            }
            if (unionMember.getLevel() >= 100) {
                positions.add(new Position(1, 0));
            }
            if (unionMember.getLevel() >= 140) {
                positions.add(new Position(-1, 0));
            }
            if (unionMember.getLevel() >= 200) {
                positions.add(new Position(1, -1));
            }
            if (unionMember.getLevel() >= 250) {
                positions.add(new Position(-1, 1));
            }
        }

        if (positions == null) {
            log.error("No Union Grid Piece found for job=" + unionMember.getJob() + ", level=" + unionMember.getLevel() + ", rank=" + unionMember.getMemberRank());
            return grids;
        }

        // Apply Rotations logic
        positions = applyRotation(positions, rotation);

        List<Position> positionList = new ArrayList<>();

        // Apply In-Grid logic
        for (Position pos : positions) { // Order: closest to Origin -> furthest
            int originColumnIndex = gridPos % 22;
            int posColumnIndex = getGridPosByGridPosAndPos(gridPos, pos) % 22;

            int diff = originColumnIndex - posColumnIndex;
            if (diff < 0) {
                diff *= -1;
            }
            if (diff > 6) { // too big of a difference with the origin, so it must've overflown to the otherside.
                continue; // Thus, Ignore
            }

            positionList.add(pos);
        }

        for (Position pos : positionList) {
            int grid = getGridPosByGridPosAndPos(gridPos, pos);
            if (grid >= 0 && grid < Union.MAX_GRID_SLOTS) {
                grids.add(grid);
            }
        }

        // Apply grid limit  from not being a high enough UnionRank
        grids = grids.stream().filter(g -> EtcData.getUnionBoardInfoById(g) != null && EtcData.getUnionBoardInfoById(g).getOpenLevel() <= unionRank).collect(Collectors.toList());
        return grids;
    }

    public static int getGridPosByGridPosAndPos(int gridPos, Position position) {
        return gridPos + (position.getX()) + (-position.getY() * Union.GRID_WIDTH);
    }

    public static List<Position> applyRotation(List<Position> positions, int rotation) {
        List<Position> positionList = new ArrayList<>();

        int flip = rotation / 1000;
        int rot = rotation % 1000;
        int rotCount = 0;

        for (Position pos : positions) {
            Position retPos = pos;
            if (flip == 1 || flip == 2) {
                rotCount = rot / 90;

                if (flip == 1) { // Flipped Y
                    retPos = Position.flipY(retPos);
                } else { // Flipped X
                    retPos = Position.flipX(retPos);
                }

            } else {
                if (rot != 0) {
                    rotCount = 360 - rot / 90;
                }

                if (flip == 3) { // Flipped X & Y
                    retPos = Position.flipX(retPos);
                    retPos = Position.flipY(retPos);
                }
            }

            for (int i = 0; i < rotCount; i++) {
                retPos = Position.rotate90Clockwise(retPos);
            }

            positionList.add(retPos);
        }

        return positionList;
    }

}
