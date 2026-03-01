package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.world.field.Field;

public interface EventManager extends DwangScriptBaseApi {

    default void unregisterPlayer(Char chr) { }

    default void broadcastServerMsg(int type, String msg, int weather) { }

    default void startInstance(Object party, Field map, int maxLevel) { }

    default void getMobs() { }

    default void restartEventTimer(int time) { }

    default void registerParty(Object party, Field map) { }

    default void onPlayerRevived(Char chr) { }

    default void cancelSchedlue() { }

    default void restartEventTimer(int time, int inSecond) { }

    default void broadcastYellowMsg(String msg) { }

    default void getMapInstance(int args) { }

    default void onPlayerDisconnected(Char chr, int idz) { }

    default void schedule(String methodName, int delay) { }

    default void 拼图大师_初始化(int keepSize, int totalStage, int period) { }

    default void showClockEffect(Char chr, int time, int showInSecond) { }

    default void getProperties() { }

    default void scheduleAtTimestamp(String methodName, int timestamp) { }

    default void disposeIfPlayerBelow(int size, int towarp, int portal) { }

    default void getTimeLeft() { }

    default void getIv() { }

    default void randArray(Object arr, int amout) { }

    default void getName() { }

    default void broadcastShip(int mapId, int effect) { }

    default void initMaze(int style, int height, int width) { }

    default void disposeIfPlayerBelow(int size, int towarp) { }

    default void initPropArrayRandom(String name, int min, int max, int amount) { }

    default void startEventTimerInSecond(int time) { }

    default void getMapFactoryMap(int mapId) { }

    default void isTimerStarted() { }

    default void broadcastServerMsg(String msg) { }

    default void getChannel() { }

    default void getMapIds() { }

    default void getPlayerCount() { }

    default void broadcastPlayerMsg(int type, String msg) { }

    default void onTimeOut(int delay) { }

    default void onItemPickedUp(Char chr, int itemID) { }

    default void startInstance(Char character, String leader) { }

    default void onPartyDisbanded() { }

    default void startEventTimer(int time) { }

    default void onMonsterKilled(Char chr, Monster mob) { }

    default void addNumberProperty(String key, int value) { }

    default void getProperty(String key) { }

    default void dispose() { }

    default void onMonsterDamaged(Char chr, Monster mob, int realDamage, int attackDamage) { }

    default void startInstance(Char character) { }

    default void getMonster(int id) { }

    default void 乌鲁斯_更新分数() { }

    default void randArray(int min, int max, int amout) { }

    default void onPlayerKilled(Char chr) { }

    default void getPlayers() { }

    default void getDisconnected() { }

    default void getNumberProperty(String key) { }

    default void onMapChanged(Char chr, int mapId) { }

    default void unregisterMonster(Monster mob) { }

}
