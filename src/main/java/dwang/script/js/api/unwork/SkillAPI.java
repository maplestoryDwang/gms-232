package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SkillAPI extends DwangScriptBaseApi {

    default void dispelBuff(int skillId) { }

    default void teachSkill(int skillId, int skilllevel) { }

    default void gainSkillBuff(int skill) { }

    default void getSkillLevel(int skillId) { }

    default void 满剩余技能() { }

    default void canUseSkillBook(int skillId, int masterLevel) { }

    default void has4thSkillReach30() { }

    default void 更新美洲豹(int id) { }

    default void 移除内面技能(int skillId) { }

    default void get内面技能列表() { }

    default void giveMountSkill(int itemId, int mountSkillId, int period) { }

    default void clearAllBuffs() { }

    default void getSkillName(int skillId) { }

    default void getSkillMaxLevel(int skillId) { }

    default void useSkillBook(int skillId, int masterLevel) { }

    default void maxV5skill() { }

    default void addSkillPoint(int sp) { }

    default void skillExist(int skillId) { }

    default void 获得V技能(int coreId) { }

    default void getProfessions() { }

    default void giveMountSkill(int itemId, int mountSkillId) { }

    default void useSkill(int skill, int level) { }

    default void hasSkill(int skillId) { }

    default void hasAInnerSkill() { }

    default void 满技能() { }

    default void teachSkill(int skillId, int skilllevel, int masterlevel) { }

    default void hasBuff(int skillId) { }

    default void 满技能(int job) { }

    default void giveMountSkill(int itemId, int mountSkillId, int period, int test) { }

    default void gainSkillBuff(int skill, int level, int newDuration) { }

    default void resizeCharacterBuff(int size, int time) { }

    default void getSkillMenu(int skillMaster, int job) { }

}
