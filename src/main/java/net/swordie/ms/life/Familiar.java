package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.familiar.FamiliarModifiedMask;
import net.swordie.ms.client.character.items.ItemOption;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.db.IdAssigner;
import net.swordie.ms.connection.db.Saveable;
import net.swordie.ms.connection.db.TrackedObject;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.loaders.FamiliarData;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;

import javax.persistence.*;
import java.util.*;

/**
 * @author Sjonnie
 * Created on 6/9/2018.
 */
@Entity
@Table(name = "familiars")
public class Familiar extends Life implements Saveable {
    private static IdAssigner<Familiar> idAssigner;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int familiarID; // template Id
    private Char chr;
    private String name;
    private boolean locked;

    private int level;
    private int capLevel = GameConstants.MAX_FAMILIAR_LEVEL_C_R_E;
    private int lvExp;
    private int grade; // Common = 0 ; Rare = 1 ; Epic = 2 ; Unique = 3 ; Legendary = 4 ;
    private int gradeExp; // 50 ; 100 ; 150 ; 1 ? ; 1 ? ;

    private int attack;
    private int defense;

    private int[] options;

    // transient
    private boolean init;
    private int skillID;
    private int idx;

    private int lastSavedHash;

    public Familiar() {
        super(0);
    }

    public Familiar(int templateId) {
        super(templateId);
        if (idAssigner != null) {
            init = true;
            idAssigner.assignId(this);
        }
    }

    public Familiar(int familiarID, String name, Char chr, int grade) {
        super(0);
        if (idAssigner != null) {
            init = true;
            idAssigner.assignId(this);
        }
        this.familiarID = familiarID;
        this.name = name;
        this.chr = chr;
        this.level = 1;
        this.grade = grade;
        this.options = new int[]{0, 0};
    }

    public boolean isInit() {
        return init;
    }

    public void setInit(boolean init) {
        this.init = init;
    }

    public static <T extends TrackedObject> void setIdAssigner(IdAssigner<Familiar> idAssigner) {
        Familiar.idAssigner = idAssigner;
    }

    public void encode(OutPacket outPacket, int mask) {
        outPacket.encodeInt(mask);

        if (mask == FamiliarModifiedMask.All.getVal()) {
            outPacket.encodeInt(getChr().getId()); // charId
            outPacket.encodeInt((int) getId()); // unique Id
            outPacket.encodeInt(getFamiliarID()); // template Id

            outPacket.encodeString(getName(), 12);

            outPacket.encodeByte(0);
            outPacket.encodeByte(isLocked()); // bLocked
            outPacket.encodeByte(false);
            outPacket.encodeByte(false); // bLocked

            outPacket.encodeByte(false); // bLocked
            outPacket.encodeByte(getLevel()); // nLevel (1~9)
            outPacket.encodeByte(getLvExp()); // Affects gauge under Level
            outPacket.encodeByte(5); // unk
            outPacket.encodeByte(getLvMaxExp()); // Affects gauge under Level
            outPacket.encodeByte(getGrade()); // nGrade

            outPacket.encodeShort(getGradeExp()); // gradeExp

            outPacket.encodeByte(getAttack()); // nAtt - 1
            outPacket.encodeByte(getDefense()); // nDef - 1
            outPacket.encodeShort(getOptions()[0]); // nOption1
            outPacket.encodeShort(getOptions()[1]); // nOption2
            outPacket.encodeByte(5);
            outPacket.encodeShort(0xCAFA);
            outPacket.encodeShort(0xB951);
            outPacket.encodeByte(6);
            outPacket.encodeShort(466); // was 466
        } else {
            if ((mask & FamiliarModifiedMask.FamiliarId.getVal()) != 0) {
                outPacket.encodeInt(getFamiliarID());
            }
            if ((mask & FamiliarModifiedMask.Name.getVal()) != 0) {
                outPacket.encodeString(getName(), 12);
            }
            if ((mask & FamiliarModifiedMask.Locked.getVal()) != 0) {
                outPacket.encodeByte(isLocked());
            }
            if ((mask & FamiliarModifiedMask.Level.getVal()) != 0) {
                outPacket.encodeByte(getLevel());
            }
            if ((mask & FamiliarModifiedMask.LvExp.getVal()) != 0) { // TODO  Double-check with a sniff
                outPacket.encodeByte(getLvExp());
            }
            if ((mask & FamiliarModifiedMask.LvMaxExp.getVal()) != 0) { // TODO  Double-check with a sniff
                outPacket.encodeShort(getLvMaxExp());
            }
            if ((mask & FamiliarModifiedMask.Grade.getVal()) != 0) {
                outPacket.encodeByte(getGrade());
            }
            if ((mask & FamiliarModifiedMask.GradeExp.getVal()) != 0) {
                outPacket.encodeShort(getGradeExp());
            }
            if ((mask & FamiliarModifiedMask.Attack.getVal()) != 0) {
                outPacket.encodeByte(getAttack());
            }
            if ((mask & FamiliarModifiedMask.Defense.getVal()) != 0) {
                outPacket.encodeByte(getDefense());
            }
            if ((mask & FamiliarModifiedMask.PotLines0.getVal()) != 0) {
                outPacket.encodeShort(getOptions()[0]);
            }
            if ((mask & FamiliarModifiedMask.PotLines1.getVal()) != 0) {
                outPacket.encodeShort(getOptions()[1]);
            }
        }
    }

    public void encodeForRemote(OutPacket outPacket) {
        outPacket.encodeInt(getFamiliarID());
        outPacket.encodeInt((int) getId());
        outPacket.encodeString(getName());
        outPacket.encodePosition(getPosition());
        outPacket.encodeByte(getMoveAction());
        outPacket.encodeShort(getFh());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Char getChr() {
        return chr;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    public int getFamiliarID() {
        return familiarID;
    }

    public void setFamiliarID(int familiarID) {
        this.familiarID = familiarID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isLocked() {
        return locked;
    }

    public void setLocked(boolean locked) {
        this.locked = locked;
    }

    public int getSkillID() {
        return skillID;
    }

    public void setSkillID(int skillID) {
        this.skillID = skillID;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public void incAttack(int incAttack) {
        setAttack(getAttack() + incAttack);
    }

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public void incDefense(int incDef) {
        setDefense(getDefense() + incDef);
    }

    public int[] getOptions() {
        if (options == null) {
            options = new int[]{0, 0};
        }
        return options;
    }

    public void setOptions(int[] options) {
        this.options = options;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = Math.min(getCapLevel(), level);
    }

    public void incLevel() {
        setLevel(getLevel() + 1);
    }

    public void resetLevel() {
        setLevel(1);
    }

    public int getCapLevel() {
        return capLevel;
    }

    public void setCapLevel(int capLevel) {
        this.capLevel = Math.min(getMaxCapLevel(), capLevel);
    }

    public void incCapLevel() {
        setCapLevel(getCapLevel() + 1);
    }

    public int getMaxCapLevel() {
        return getGrade() == 3 || getGrade() == 4 ? GameConstants.MAX_FAMILIAR_LEVEL_U_L : GameConstants.MAX_FAMILIAR_LEVEL_C_R_E;
    }

    public int getLvExp() {
        return lvExp;
    }

    public void setLvExp(int lvExp) {
        this.lvExp = lvExp;
    }

    public void incLvExp(int inc) {
        setLvExp(getLvExp() + inc);
    }

    public void resetLvExp() {
        setLvExp(0);
    }

    public int getLvMaxExp() {
        return FamiliarData.getExpReqByLevel(getLevel());
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = Math.min(4, grade);
    }

    public void incGrade() {
        setGrade(getGrade() + 1);
    }

    public int getGradeExp() {
        return gradeExp;
    }

    public void setGradeExp(int gradeExp) {
        this.gradeExp = gradeExp;
    }

    public void addGradeExp(int inc) {
        setGradeExp(getGradeExp() + inc);
    }

    public void resetGradeExp() {
        setGradeExp(0);
    }

    public boolean canLevelUp() {
        return getLvExp() >= getLvMaxExp() && getLevel() < getCapLevel();
    }

    public boolean isMaxLv() {
        return getLevel() >= getCapLevel();
    }

    public boolean doLevelUp(Char chr) {
        if (!canLevelUp()) {
            return false;
        }

        Tuple<Integer, Integer> tuple = FamiliarData.getMinMaxByGradeAndLevel(getGrade(), getLevel());
        int min = tuple.getLeft();
        int max = tuple.getRight() + 1;

        int incPAD = Util.getRandom(min, max);
        int incPDD = Util.getRandom(min, max);

        incAttack(incPAD);
        incDefense(incPDD);

        incLevel();
        resetLvExp();

        int mask = FamiliarModifiedMask.Level.getVal()
                + FamiliarModifiedMask.LvExp.getVal()
                + FamiliarModifiedMask.LvMaxExp.getVal()
                + FamiliarModifiedMask.Attack.getVal()
                + FamiliarModifiedMask.Defense.getVal();
        chr.write(UserLocal.familiarAddResult(this, mask));
        return true;
    }

    public int getReqGradeExp() {
        switch (getGrade()) {
            case 0: // Common
                return 50;
            case 1: // Rare
                return 100;
            case 2: // Epic
                return 150;
            case 3: // Unique
                return 1;
            case 4:
                return 1;
        }
        return 500; // default val
    }

    public boolean canGradeUp() {
        return getGradeExp() >= getReqGradeExp() &&
                getLevel() >= GameConstants.MAX_FAMILIAR_LEVEL_C_R_E &&
                getGrade() < 4;
    }

    public boolean doGradeUp(Char chr) {
        incGrade();
        resetLevel();
        resetLvExp();
        resetGradeExp();

        rerollPotentialLines(chr);

        int mask = FamiliarModifiedMask.Grade.getVal()
                + FamiliarModifiedMask.GradeExp.getVal()
                + FamiliarModifiedMask.Level.getVal()
                + FamiliarModifiedMask.LvExp.getVal()
                + FamiliarModifiedMask.LvMaxExp.getVal();
        chr.write(UserLocal.familiarAddResult(this, mask));
        return true;
    }

    public int getFusionValue() {
        return getGrade() + 1;
    }

    public int getFamPointsValue() {
        /*
            Common: 10 Familiar Points
            Rare: 15 Familiar Points
            Epic: 30 Familiar Points
            Unique: 40 Familiar Points
            Legendary: 50 Familiar Points
        */
        if (getGrade() == 1) { // if Rare -> return 15;
            return 15;
        }
        return 10 * getFusionValue(); // other grades follow same formula (grade + 1) * 10
    }

    public void rerollPotentialLines(Char chr) {
        removeCurFamiliarBuffs();
        var grade = getGrade();

        List<ItemOption> familiarOptions = ItemData.getFamiliarOptionByGrade(grade);
        if (grade == 4) { // Legendary
            familiarOptions.addAll(ItemData.getFamiliarOptionByGrade(grade + 1)); // if legendary, also include prefix 5
        }
        getOptions()[0] = Util.getRandomFromCollection(familiarOptions).getId();

        boolean secPrime = Util.succeedProp(GameConstants.SECONDARY_LINE_PRIME_CHANCE);
        if (secPrime) {
            getOptions()[1] = Util.getRandomFromCollection(familiarOptions).getId(); // grab from same pool as first line
        } else {
            familiarOptions = ItemData.getFamiliarOptionByGrade((Math.max(0, grade - 1))); // grab from pool of grade - 1
            getOptions()[1] = Util.getRandomFromCollection(familiarOptions).getId();
        }

        int mask = FamiliarModifiedMask.PotLines0.getVal() + FamiliarModifiedMask.PotLines1.getVal();
        chr.write(UserLocal.familiarAddResult(this, mask));
    }

    public void removeCurFamiliarBuffs() {
        for (int buffItemId : getBuffItemIds()) {
            TemporaryStatManager tsm = getChr().getTemporaryStatManager();
            tsm.removeStatsBySkill(-buffItemId);
        }
    }

    public List<Integer> getBuffItemIds() {
        List<Integer> buffItemIds = new ArrayList<>();
        for (int option : getOptions()) {
            ItemOption famOpt = ItemData.getFamiliarOptionById(option);
            if (famOpt == null) {
                continue;
            }
            if (famOpt.isFamiliarBuffOption()) {
                int buffItemId = famOpt.getMiscValuesByLevel(1).getOrDefault(ItemOption.ItemOptionType.familiarBuff, 0);
                if (buffItemId > 0) {
                    buffItemIds.add(buffItemId);
                }
            }
        }
        return buffItemIds;
    }

    public void deactivateOptions() {
        removeCurFamiliarBuffs();
    }

    public double getBaseStat(BaseStat bs) {
        double res = 0;
        if (bs == null) {
            return res;
        }
        for (int option : getOptions()) {
            ItemOption familiarOption = ItemData.getFamiliarOptionById(option);
            if (familiarOption != null) {
                Map<BaseStat, Double> valMap = familiarOption.getStatValuesByLevel(1);
                res += valMap.getOrDefault(bs, 0D);
            }
        }
        return res;
    }

    public boolean checkFamiliarCon(ItemInfo ii) {
        if (ii.getFamiliarCons().size() == 0) {
            return true;
        }

        var fieldId = getField().getId();
        for (Tuple<Integer, Integer> conTuple : ii.getFamiliarCons()) {
            var sMap = conTuple.getLeft();
            var eMap = conTuple.getRight();
            if (fieldId >= sMap && fieldId <= eMap) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        // Done through char
    }

    @Override
    public void broadcastLeavePacket() {
        // Done through char
    }

    public boolean hasChrAsOwner(Char chr) {
        return chr != null && chr.equals(getChr());
    }

    @Override
    public void reenterFieldAfterWarp(Char chr) {
        var fcm = chr.getFamiliarCodexManager();
        if (fcm != null && fcm.isFamiliarsSummoned()) {
            fcm.summonFamiliars(EnterType.NoAnimation);
        }
    }

    public int getLastSavedHash() {
        return lastSavedHash;
    }

    public void setLastSavedHash() {
        this.lastSavedHash = getTransactionalHash();
    }

    public int getTransactionalHash() {
        int result = Objects.hash(familiarID, name, locked, level, capLevel, lvExp, grade, gradeExp, attack, defense);
        result = 31 * result + Arrays.hashCode(options);
        return result;
    }

    public boolean isClean() {
        return getLastSavedHash() == getTransactionalHash();
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }
}
