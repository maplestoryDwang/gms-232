package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SkillAPI extends DwangScriptBaseApi {

    /**
         * @出自类 SkillAPI
    */
    default void addSkillPoint(int sp) { }



    /**
         * @出自类 SkillAPI
    */
    default void canUseSkillBook(int skillId, int masterLevel) { }



    /**
         * @出自类 SkillAPI
    */
    default void clearAllBuffs() { }



    /**
         * 取消技能BUFF
         *
         * @param skillId
         * @出自类 SkillAPI
         */
    default void dispelBuff(int skillId) { }



    /**
         * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
         * @出自类 SkillAPI
         */
    default void gainSkillBuff(int skill) { }



    /**
         * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
         * @出自类 SkillAPI
         */
    default void gainSkillBuff(int skill, int level, int newDuration) { }



    /**
         * 获取学习的专业技术
         *
         * @return
         * @出自类 SkillAPI
         */
    default void getProfessions() { }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillLevel(int skillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillMaxLevel(int skillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillMenu(int skillMaster, int job) { }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillName(int skillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void get内面技能列表() { }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId, int period) { }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId, int period, int test) { }



    /**
         * 对应任务：39382 任务名称： [向导任务]能手册
         * @出自类 SkillAPI
         */
    default void has4thSkillReach30() { }



    /**
         * 对应任务：39377 任务名称： [向导任务]内在能力
         * @出自类 SkillAPI
         */
    default void hasAInnerSkill() { }



    /**
         * @出自类 SkillAPI
    */
    default void hasBuff(int skillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void hasSkill(int skillId) { }



    /**
         * V5满5转技能
         * @出自类 SkillAPI
         */
    default void maxV5skill() { }



    /**
         * DIY缩放人物
         *
         * @param size 大小 10-1000
         * @param time 持续时间
         * @return
         * @出自类 SkillAPI
         */
    default void resizeCharacterBuff(int size, int time) { }



    /**
         * 检查技能是否存在
         * @出自类 SkillAPI
         */
    default void skillExist(int skillId) {
        teachSkill(skillId, 1);
    }



    /**
         * 学会技能
         *
         * @param skillId    技能
         * @param skilllevel 等级
         * @出自类 SkillAPI
         */
    default void teachSkill(int skillId, int skilllevel) {
        teachSkill(skillId, skilllevel, skilllevel);

    }



    /**
         * 学会技能
         *
         * @param skillId     技能
         * @param skilllevel  等级
         * @param masterlevel
         * @出自类 SkillAPI
         */
    default void teachSkill(int skillId, int skilllevel, int masterlevel) {
        getChr().addSkill(skillId, skilllevel, masterlevel);

    }



    /**
         * 触发使用技能效果
         *
         * @param skill 技能
         * @param level 等级
         * @出自类 SkillAPI
         */
    default void useSkill(int skill, int level) { }



    /**
         * @出自类 SkillAPI
    */
    default void useSkillBook(int skillId, int masterLevel) { }



    /**
         * @出自类 SkillAPI
    */
    default void 更新美洲豹(int id) { }



    /**
         * @出自类 SkillAPI
    */
    default void 满剩余技能() { }



    /**
         * 满当前职业及所有前置职业的技能
         * @出自类 SkillAPI
         */
    default void 满技能() { }



    /**
         * @出自类 SkillAPI
    */
    default void 满技能(int job) { }



    /**
         * @出自类 SkillAPI
    */
    default void 移除内面技能(int skillId) { }



    /**
         * @出自类 SkillAPI
    */
    default void 获得V技能(int coreId) { }



}
