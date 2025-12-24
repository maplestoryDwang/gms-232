package net.swordie.ms.client.character.skills.vmatrix;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.legend.Evan;
import net.swordie.ms.connection.Encodable;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.FileTime;

import javax.persistence.Transient;
import java.util.Objects;

/**
 * @author Sjonnie
 * Created on 10/1/2018.
 */
public class MatrixRecord extends TrackedObject implements Encodable {

    public static final int MAX_RECORDS = 1000;
    private static IdAssigner<MatrixRecord> idAssigner;

    private long id;

    private int iconID;
    private int skillID1;
    private int skillID2;
    private int skillID3;
    private int slv;
    private int maxLevel;
    private int row;
    private int exp;
    private long crc;
    private FileTime expireDate = FileTime.fromType(FileTime.Type.MAX_TIME);
    private int position = -1;
    private boolean locked;

    @Transient
    private boolean init;

    public MatrixRecord() {
    }

    public MatrixRecord(Char chr) {
        if (idAssigner != null) {
            init = true;
            idAssigner.assignId(this);
        }
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public static <T extends TrackedObject> void setIdAssigner(IdAssigner<MatrixRecord> idAssigner) {
        MatrixRecord.idAssigner = idAssigner;
    }

    @Override
    public int getTransactionalHash() {
        return Objects.hash(iconID, skillID1, skillID2, skillID3, slv, maxLevel, row, exp, crc, expireDate, position, locked);
    }

    public int getIconID() {
        return iconID;
    }

    public void setIconID(int iconID) {
        this.iconID = iconID;
    }

    public int getSkillID1() {
        return skillID1;
    }

    public void setSkillID1(int skillID1) {
        this.skillID1 = skillID1;
    }

    public int getSkillID2() {
        return skillID2;
    }

    public void setSkillID2(int skillID2) {
        this.skillID2 = skillID2;
    }

    public int getSkillID3() {
        return skillID3;
    }

    public void setSkillID3(int skillID3) {
        this.skillID3 = skillID3;
    }

    public int getSlv() {
        return slv;
    }

    public void setSlv(int slv) {
        this.slv = slv;
    }

    public int getMaxLevel() {
        return 25;
    }

    public void setMaxLevel(int maxLevel) {
        this.maxLevel = maxLevel;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public long getCrc() {
        return crc;
    }

    public void setCrc(long crc) {
        this.crc = crc;
    }

    public FileTime getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(FileTime expireDate) {
        this.expireDate = expireDate;
    }

    public boolean isActive() {
        return getPosition() >= 0;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public boolean isLocked() {
        return locked;
    }

    @Override
    public void encode(OutPacket outPacket) {
        outPacket.encodeLong(getCrc());
        outPacket.encodeInt(getIconID());
        outPacket.encodeInt(getSlv());
        outPacket.encodeInt(getExp());
        outPacket.encodeInt(isActive() ? 2 : 1);
        outPacket.encodeInt(getSkillID1());
        outPacket.encodeInt(getSkillID2());
        outPacket.encodeInt(getSkillID3());
        outPacket.encodeInt(getPosition());
        outPacket.encodeFT(getExpireDate());
        outPacket.encodeByte(isLocked()); // new 223
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int[] getSkills() {
        return new int[]{getSkillID1(), getSkillID2(), getSkillID3()};
    }

    public void addSkillsToChar(Char chr, boolean remove) {
        for (int skillID : getSkills()) {
            if (skillID != 0) {
                Skill skill = chr.getSkill(skillID);
                if (skill == null) {
                    skill = SkillData.getSkillDeepCopyById(skillID);
                    skill.setCurrentLevel(0);
                }

                int slotEnhancementLv = 0;
                MatrixSlot ms = chr.getMatrixSlotByPosition(getPosition());
                if (ms != null) {
                    slotEnhancementLv = ms.getEnhancementLv();
                }

                var newSlv = remove
                        ? skill.getCurrentLevel() - getSlv() - slotEnhancementLv
                        : skill.getCurrentLevel() + getSlv() + slotEnhancementLv;
                skill.setCurrentLevel(Math.max(0, newSlv));
                chr.addSkill(skill);
                chr.write(WvsContext.changeSkillRecordResult(skill));

                if (skillID == Job.LOADED_DICE && JobConstants.requiresLuckyDice(chr.getJob())) {
                    Skill luckyDiceSkill = SkillData.getSkillDeepCopyById(Job.LUCKY_DICE);
                    luckyDiceSkill.setCurrentLevel(skill.getCurrentLevel());
                    chr.addSkill(luckyDiceSkill);
                    chr.write(WvsContext.changeSkillRecordResult(luckyDiceSkill));
                }

                if (skillID == Evan.DRAGON_SLAM) {
                    Skill wyrmking = SkillData.getSkillDeepCopyById(Evan.WYRMKINGS_BREATH);
                    Skill ludicrousSpeed = SkillData.getSkillDeepCopyById(Evan.LUDICROUS_SPEED);
                    wyrmking.setCurrentLevel(skill.getCurrentLevel());
                    ludicrousSpeed.setCurrentLevel(skill.getCurrentLevel());
                    chr.addSkill(wyrmking);
                    chr.addSkill(ludicrousSpeed);
                    chr.write(WvsContext.changeSkillRecordResult(wyrmking));
                    chr.write(WvsContext.changeSkillRecordResult(ludicrousSpeed));
                }

                if (skill.getCurrentLevel() <= 0) {
                    chr.getTemporaryStatManager().removeStatsBySkill(skillID);
                }

                if (skillID >= 400007000 && skillID < 400008000 && !remove) {
                    chr.addSkillCoolTime(skillID, GameConstants.SPECIAL_NODE_ACTIVATION_CD * 1000);
                }
            }
        }
    }

    public void activate(Char chr, int toPos) {
        setPosition(toPos);
        addSkillsToChar(chr, false);
    }

    public void deactivate(Char chr, int toPos) {
        setPosition(toPos);
        addSkillsToChar(chr, true);
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

}
