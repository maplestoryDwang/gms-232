package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MonsterAPI extends DwangScriptBaseApi {

    /**
         * 查看怪物是否还在玩家当前地图
         *
         * @param mobid 怪物
         * @return
         * @出自类 MonsterAPI
         */
    default void getMonsterByID(int mobid) { }



    /**
         * 获取指定地图内剩余怪物数量
         *
         * @param mapId 地图
         * @return
         * @出自类 MonsterAPI
         */
    default void getMonsterCount(int mapId) { }



    /**
         * 获取当前地图中怪物数量
         * @return 
         * @出自类 MonsterAPI
         */
    default void getNumMonsters() { }



    /**
         * 检查当前地图是否有目标怪物
         *
         * @param mobid 怪物
         * @return
         * @出自类 MonsterAPI
         */
    default void haveMonster(int mobid) { }



    /**
         * 杀死当前地图所有怪物，掉落
         * @出自类 MonsterAPI
         */
    default void killAllMob() { }



    /**
         * 杀死当前地图所有怪物
         * @出自类 MonsterAPI
         */
    default void killAllMob(int drop) { }



    /**
         * 杀死当前地图所有怪物，没有掉落也没有经验
         * @出自类 MonsterAPI
         */
    default void killAllMobNoExp() { }



    /**
         * 杀死当前地图指定怪物
         *
         * @param ids 怪物
         * @出自类 MonsterAPI
         */
    default void killMob(int ids) { }



    /**
         * 活动怪的特效
         * @出自类 MonsterAPI
         */
    default void showCraftingEffect(String effect, int direction, int time, int mode) { }



    /**
         * 刷怪
         *
         * @param id 怪物
         * @param qty 数量
         * @param pos 坐标 java.awt.Point(x,y)
         * @出自类 MonsterAPI
         */
    default void spawnMob(int id, int qty, Object pos) { }



    /**
         * 刷怪
         * @出自类 MonsterAPI
         */
    default void spawnMob(int id, int 数量, int x, int y) { }



    /**
         * 刷怪，指定等级，原地
         *
         * @param mobId 怪物
         * @param level 等级
         * @出自类 MonsterAPI
         */
    default void spawnMobLevel(int mobId, int level) { }



    /**
         * 刷怪，指定等级，原地
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param level 等级
         * @出自类 MonsterAPI
         */
    default void spawnMobLevel(int mobId, int quantity, int level) { }



    /**
         * 刷怪，指定等级
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param level 等级
         * @param pos 坐标 java.awt.Point(x,y)
         * @出自类 MonsterAPI
         */
    default void spawnMobLevel(int mobId, int quantity, int level, Object pos) { }



    /**
         * 刷怪，指定等级
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param level 等级
         * @param x
         * @param y
         * @出自类 MonsterAPI
         */
    default void spawnMobLevel(int mobId, int quantity, int level, int x, int y) { }



    /**
         * 限定数量刷怪
         * @出自类 MonsterAPI
         */
    default void spawnMobLimit(int id, int 数量, int x, int y, int 地图内刷怪上限) { }



    /**
         * 刷怪，指定血量魔量经验倍率
         *
         * @param mobId 怪物
         * @param multipler 倍率
         * @出自类 MonsterAPI
         */
    default void spawnMobMultipler(int mobId, int multipler) { }



    /**
         * 刷怪，指定血量魔量经验倍率
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param multipler 倍率
         * @出自类 MonsterAPI
         */
    default void spawnMobMultipler(int mobId, int quantity, int multipler) { }



    /**
         * 刷怪，指定血量魔量经验倍率
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param multipler 倍率
         * @param pos 坐标 java.awt.Point(x,y)
         * @出自类 MonsterAPI
         */
    default void spawnMobMultipler(int mobId, int quantity, int multipler, Object pos) { }



    /**
         * 刷怪，指定血量魔量经验倍率
         *
         * @param mobId 怪物
         * @param quantity 数量
         * @param multipler 倍率
         * @param x
         * @param y
         * @出自类 MonsterAPI
         */
    default void spawnMobMultipler(int mobId, int quantity, int multipler, int x, int y) { }



    /**
         * 延迟刷怪
         *
         * @param time 单位 ms
         * @出自类 MonsterAPI
         */
    default void spawnMobSchedule(int id, int qty, int x, int y, int time) { }



    /**
         * 延迟刷怪
         *
         * @param time 单位 ms
         * @出自类 MonsterAPI
         */
    default void spawnMobSchedule(int id, int qty, int x, int y, int time, int level) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMobStats(int mobId, int newhp, int newExp) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp, Object pos) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp, int x, int y) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMonster(int id) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMonster(int id, int qty) { }



    /**
         * @出自类 MonsterAPI
    */
    default void spawnMonster(int id, int qty, int hp, Object pos) { }



    /**
         * 怪物护送完整路径
         * @出自类 MonsterAPI
         */
    default void updateMobEscortFullPath(int oid, Object vs, int s) { }



    /**
         * 闹钟技能_顶部夹子 mode 2=顶部夹子,4=定时满血
         * @出自类 MonsterAPI
         */
    default void 闹钟技能_顶部夹子() { }



}
