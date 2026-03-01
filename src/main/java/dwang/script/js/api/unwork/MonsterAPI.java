package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MonsterAPI extends DwangScriptBaseApi {

    default void spawnMobLevel(int mobId, int quantity, int level, Object pos) { }

    default void getMonsterCount(int mapId) { }

    default void spawnMonster(int id, int qty, int hp, Object pos) { }

    default void spawnMonster(int id) { }

    default void spawnMobStats(int mobId, int newhp, int newExp) { }

    default void spawnMobLimit(int id, int 数量, int x, int y, int 地图内刷怪上限) { }

    default void showCraftingEffect(String effect, int direction, int time, int mode) { }

    default void spawnMobMultipler(int mobId, int quantity, int multipler) { }

    default void killAllMob() { }

    default void spawnMobMultipler(int mobId, int quantity, int multipler, Object pos) { }

    default void spawnMob(int id, int qty, Object pos) { }

    default void getMonsterByID(int mobid) { }

    default void spawnMobSchedule(int id, int qty, int x, int y, int time) { }

    default void spawnMob(int id, int 数量, int x, int y) { }

    default void killAllMobNoExp() { }

    default void spawnMobSchedule(int id, int qty, int x, int y, int time, int level) { }

    default void killAllMob(int drop) { }

    default void updateMobEscortFullPath(int oid, Object vs, int s) { }

    default void spawnMobLevel(int mobId, int quantity, int level) { }

    default void spawnMobLevel(int mobId, int level) { }

    default void spawnMobMultipler(int mobId, int multipler) { }

    default void 闹钟技能_顶部夹子() { }

    default void killMob(int ids) { }

    default void spawnMonster(int id, int qty) { }

    default void spawnMobLevel(int mobId, int quantity, int level, int x, int y) { }

    default void haveMonster(int mobid) { }

    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp) { }

    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp, int x, int y) { }

    default void spawnMobStats(int mobId, int quantity, int newhp, int newExp, Object pos) { }

    default void spawnMobMultipler(int mobId, int quantity, int multipler, int x, int y) { }

    default void getNumMonsters() { }

}
