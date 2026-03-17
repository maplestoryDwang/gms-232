package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface SkillAPI extends DwangScriptBaseApi {

    /**
         * @出自类 SkillAPI
    */
    default void addSkillPoint(int sp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void canUseSkillBook(int skillId, int masterLevel) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void clearAllBuffs() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 取消技能BUFF
         *
         * @param skillId
         * @出自类 SkillAPI
         */
    default void dispelBuff(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
         * @出自类 SkillAPI
         */
    default void gainSkillBuff(int skill) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
         * @出自类 SkillAPI
         */
    default void gainSkillBuff(int skill, int level, int newDuration) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取学习的专业技术
         *
         * @return
         * @出自类 SkillAPI
         */
    default void getProfessions() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillLevel(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillMaxLevel(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillMenu(int skillMaster, int job) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void getSkillName(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void get内面技能列表() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId, int period) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void giveMountSkill(int itemId, int mountSkillId, int period, int test) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 对应任务：39382 任务名称： [向导任务]能手册
         * @出自类 SkillAPI
         */
    default void has4thSkillReach30() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 对应任务：39377 任务名称： [向导任务]内在能力
         * @出自类 SkillAPI
         */
    default void hasAInnerSkill() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void hasBuff(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void hasSkill(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * V5满5转技能
         * @出自类 SkillAPI
         */
    default void maxV5skill() {
        throw new RuntimeException("not implemented");
    }



    /**
         * DIY缩放人物
         *
         * @param size 大小 10-1000
         * @param time 持续时间
         * @return
         * @出自类 SkillAPI
         */
    default void resizeCharacterBuff(int size, int time) {
        throw new RuntimeException("not implemented");
    }



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
    default void useSkill(int skill, int level) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void useSkillBook(int skillId, int masterLevel) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void 更新美洲豹(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void 满剩余技能() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 满当前职业及所有前置职业的技能
         * @出自类 SkillAPI
         */
    default void 满技能() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void 满技能(int job) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void 移除内面技能(int skillId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 SkillAPI
    */
    default void 获得V技能(int coreId) {
        throw new RuntimeException("not implemented");
    }



}
