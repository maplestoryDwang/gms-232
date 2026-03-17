package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface V168荣耀API extends DwangScriptBaseApi {

    /**
         * 塞尔提乌城墙，阻止怪物海鸥，开始
         * @出自类 V168荣耀API
         */
    default void cerniumBefenseBirdStart() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，阻止怪物海鸥，停止
         * @出自类 V168荣耀API
         */
    default void cerniumBefenseBirdStop() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_扫荡黑太阳_摧毁传送门，加载大炮
         * @出自类 V168荣耀API
         */
    default void cerniumCannonShow(int id, int v1, int x, int y) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_支援塞尔提乌_歼灭侦察队，出现探照灯
         * @出自类 V168荣耀API
         */
    default void cerniumFindSpySearchLightTracer() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_支援塞尔提乌_歼灭侦察队，开始
         * @出自类 V168荣耀API
         */
    default void cerniumFindSpyStart() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_支援塞尔提乌_歼灭侦察队，结束
         * @出自类 V168荣耀API
         */
    default void cerniumFindSpyStop() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，闪电防御战，充能效果？
         * @出自类 V168荣耀API
         */
    default void cerniumLightningDefense() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，闪电防御战，闪电来袭+倒计时重置
         * @出自类 V168荣耀API
         */
    default void cerniumLightningDefenseAttack() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，闪电防御战，个人能量积累
         * @出自类 V168荣耀API
         */
    default void cerniumLightningDefensePlayerEnergy(int energy) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，闪电防御战，反应堆能量积累
         * @出自类 V168荣耀API
         */
    default void cerniumLightningDefenseReactorEnergy(int energy) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，闪电防御战，开始
         * @出自类 V168荣耀API
         */
    default void cerniumLightningDefenseStart() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，破坏攻城武器，开始
         * @出自类 V168荣耀API
         */
    default void cerniumMagicBombStart() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙，破坏攻城武器，停止
         * @出自类 V168荣耀API
         */
    default void cerniumMagicBombStop() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_支援塞尔提乌_古书收集，开始 0=初入地图的初始化 1=开始护送 2=护送完成开始下一轮
         * @出自类 V168荣耀API
         */
    default void cerniumProtectBookStart(int state) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_扫荡黑太阳_解救居民，魔法攻击A
         * @出自类 V168荣耀API
         */
    default void cerniumSaveResidentMagicAttackA() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_扫荡黑太阳_解救居民，魔法攻击B
         * @出自类 V168荣耀API
         */
    default void cerniumSaveResidentMagicAttackB() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_扫荡黑太阳_解救居民，开始
         *
         * @param onSave 是否在救援阶段
         * @出自类 V168荣耀API
         */
    default void cerniumSaveResidentStart(int onSave) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 未知操作，激战海洋时出现
         * @出自类 V168荣耀API
         */
    default void execCommand(String cmd) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，获得点数
         *
         * @param gain
         * @出自类 V168荣耀API
         */
    default void gainGloryEventPoint(int gain) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动_塞尔提乌城墙_阻止怪物海鸥倒计时
         *
         * @param time 单位 s
         * @出自类 V168荣耀API
         */
    default void getClockCerniumBird(int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 塞尔提乌城墙_破坏攻城武器倒计时
         *
         * @param mode  0=开始 1=停止
         * @param cur   单位ms
         * @param total 单位ms
         * @出自类 V168荣耀API
         */
    default void getClockCerniumBomb(int mode, int cur, int total) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，允许使用技能，海岸峭壁之战
         *
         * @param game   239=支援被孤立的弓手基地 240=阻截敌人登陆 241=采集太阳花
         * @param action 动作 11=激活技能 12=禁用技能区域
         * @param v3
         * @出自类 V168荣耀API
         */
    default void gloryEnableEventSkill(int game, int action, int v3) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，更新活动UI信息，海岸峭壁之战_阻截登陆
         *
         * @param type   游戏类型？
         * @param action 2=开始 3=结束
         * @param total  总时间
         * @param v3
         * @param cur    当前时间
         * @param quest  关联任务
         * @出自类 V168荣耀API
         */
    default void gloryEventUIUpdate(int type, int action, int total, int v3, int cur, int quest) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀挂机 力量训练
         * @出自类 V168荣耀API
         */
    default void gloryIdle() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，魔法泥人修炼场，更新UI
         *
         * @param type 类型
         * @param v1   类型2=启停计时器 类型1=阶段提升 类型2=积分增加 类型3=怪物OID
         * @param v2   怪物积分
         * @出自类 V168荣耀API
         */
    default void gloryMagicMudmanUI(int type, int v1, int v2) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，激战海洋，显示结算UI
         * @出自类 V168荣耀API
         */
    default void gloryRagingSeaReward(int score, int rank) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，激战海洋，显示UI
         * @出自类 V168荣耀API
         */
    default void gloryRagingSeaStart() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，激战海洋，显示UI
         * @出自类 V168荣耀API
         */
    default void gloryRagingSeaStartFight() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，支援塞尔提乌，解救骑士团，魔法师攻击
         * @出自类 V168荣耀API
         */
    default void glorySaveKnightsAttack(int action) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，支援塞尔提乌，解救骑士团，设置骑士HP百分比
         *
         * @param id 骑士编号 0~4
         * @出自类 V168荣耀API
         */
    default void glorySaveKnightsHP(int id, int hp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，支援塞尔提乌，解救骑士团，设置骑士状态
         *
         * @param act 0=死亡 1=正常 2=受到暗杀
         * @param id  骑士编号 0~4
         * @出自类 V168荣耀API
         */
    default void glorySaveKnightsState(int act, int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，支援塞尔提乌，解救骑士团，成功
         * @出自类 V168荣耀API
         */
    default void glorySaveKnightsSuccess() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，支援塞尔提乌，解救骑士团，设置倒计时
         * @出自类 V168荣耀API
         */
    default void glorySaveKnightsTime(int action, int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，激战中的乱港
         *
         * @param type
         * @param args
         * @出自类 V168荣耀API
         */
    default void gloryWildWater(int type, Object args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 更新子弹，出现于 荣耀活动_塞尔提乌城墙_破坏攻城武器
         * @出自类 V168荣耀API
         */
    default void onSetSpecialAmmo(int count) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 显示瞄准UI，出现于塞尔提乌城墙，阻止怪物海鸥
         * @出自类 V168荣耀API
         */
    default void openBattlePvPChampSelectUI(int skill) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 出现于塞尔提乌城墙，阻止怪物海鸥，效果未知
         * @出自类 V168荣耀API
         */
    default void showStalkResult(int mode) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，不稳定边界，结束游戏
         * @出自类 V168荣耀API
         */
    default void unstableBorderEnd() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，不稳定边界，设置飞船属性
         *
         * @param kills     满120爆发
         * @param ultraMode 爆发时没有类型限制
         * @param interval  充能间隔？
         * @param type      1=附加速度信息 0=无
         * @param speed
         * @出自类 V168荣耀API
         */
    default void unstableBorderSetData(int kills, int ultraMode, int interval, int type, int speed) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 荣耀活动，不稳定边界，开始游戏
         * @出自类 V168荣耀API
         */
    default void unstableBorderStart() {
        throw new RuntimeException("not implemented");
    }



}
