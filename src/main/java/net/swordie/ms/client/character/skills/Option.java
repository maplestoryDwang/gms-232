package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.life.Summon;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Random;

/**
 * Created on 1/3/2018.
 */
public class Option {
    private static final Random keyRng = Util.random;
    public int nOption;
    public int rOption;
    public int tOption;
    public int xOption;
    public int mOption;
    public int wOption;
    public int uOption;
    public int zOption;
    public int bOption;
    public int sOption;
    public int ssOption;
    public int cOption;
    public int yOption;
    public int nKey = keyRng.nextInt();
    public int tStart = Util.getCurrentTime();
    public long tStartLong = System.currentTimeMillis();
    public int pOption;
    public int slv;
    public int[] dOption;
    public Summon summon;
    public List<Summon> summons = new ArrayList<>();
    public Char chr;
    public List<Option> extraOpts = new ArrayList<>();
    public Object oOption;
    public int mobStunSkillCooldown;
    public boolean byMob = false;
    public boolean isInMillis = false;

    public Option(int skillID) {
        this.rOption = skillID;
    }

    public Option(int itemID, long duration) {
        // hack to have a constructor for items
        this.tOption = (int) duration;
        this.rOption = itemID;
    }

    public Option(int nOption, int rOption, int tOption) {
        this.nOption = nOption;
        this.rOption = rOption;
        this.tOption = tOption;
    }

    public Option(int nOption, int mobSkillId, int slv, int tOption) {
        this.nOption = nOption;
        this.rOption = mobSkillId;
        this.slv = slv;
        this.tOption = tOption;
    }

    public Option(int skillID, int slv) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        rOption = skillID;
        tOption = si.getValue(SkillStat.time, slv);
    }

    public Option() {
    }

    public Option deepCopy() {
        Option copy = new Option();
        copy.nOption = nOption;
        copy.rOption = rOption;
        copy.tOption = tOption;
        copy.xOption = xOption;
        copy.mOption = mOption;
        copy.wOption = wOption;
        copy.uOption = uOption;
        copy.zOption = zOption;
        copy.bOption = bOption;
        copy.sOption = sOption;
        copy.ssOption = ssOption;
        copy.cOption = cOption;
        copy.pOption = pOption;
        copy.yOption = yOption;
        copy.nKey = nKey;
        copy.tStart = tStart;
        copy.slv = slv;
        copy.summon = summon;
        summons.forEach(o -> copy.summons.add((Summon) o.deepCopy()));
        extraOpts.forEach(o -> extraOpts.add(o.deepCopy()));
        copy.setInMillis(isInMillis());
        return copy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Option option = (Option) o;
        return rOption == option.rOption &&
                rOption == option.rOption;
    }

    @Override
    public int hashCode() {
        return Objects.hash(rOption, rOption);
    }

    @Override
    public String toString() {
        return "skill: " + rOption + ", val: " + nOption + ", time: " + tOption;
    }

    public boolean isInMillis() {
        return isInMillis;
    }

    public void setInMillis(boolean inMillis) {
        isInMillis = inMillis;
    }

    /**
     * Sets the time options of this Option to milliseconds, if they currently aren't. By default, an Option's time
     * is in seconds.
     */
    public void setTimeToMillis() {
        if (!isInMillis) {
            tOption *= 1000;
            isInMillis = true;
        }
    }


    public long getRemainingTime() {
        if (tOption == 0) {
            return 0;
        }
        return tStartLong + (isInMillis ? tOption : tOption * 1000) - System.currentTimeMillis();
    }

}
