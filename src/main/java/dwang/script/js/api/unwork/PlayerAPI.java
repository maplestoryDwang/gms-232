package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;

public interface PlayerAPI extends DwangScriptBaseApi {

    default void AI加入队伍(Char chr) { }

    default void 神之子刷新女脸型(int 脸型ID) { }

    default void getPlayerPoints() { }

    default void setRandomAvatar(int args_all) { }

    default void getDPoints() { }

    default void getSubcategory() { }

    default void gainExpR(int exp) { }

    default void getMeso() { }

    default void 刷新HP基址(int num) { }

    default void gainMeso(int gain, int show, int inChat) { }

    default void 修改能力属性(int 类型, int num) { }

    default void getGP() { }

    default void resetStats(int str, int dex, int z, int luk) { }

    default void reloadAllFamiliars() { }

    default void onTeleport(int b1, int b2, int 玩家ID, int x, int y) { }

    default void getVPoints() { }

    default void addPartyTrait(String t, int e, Object party) { }

    default void getPlayerStat(String type) { }

    default void getServerExpRate() { }

    default void 一键扩充项链(int days) { }

    default void getExpNeededForLevel(int level) { }

    default void gainGP(int gp) { }

    default void getDropRate() { }

    default void 解除角色死亡惩罚() { }

    default void filterValidFaces(Object faces) { }

    default void setSkin(int color) { }

    default void equip(int itemId, int slot) { }

    default void setPlayerPoints(int gain) { }

    default void changeSubcategory(int sub) { }

    default void set神之子女发型(int 女发型ID) { }

    default void 副手武器(int 状态) { }

    default void set神之子男脸型(int 脸型ID) { }

    default void respawn(int force) { }

    default void setAndroid(int ticket, int args) { }

    default void getName() { }

    default void getEPoints() { }

    default void gainPlayerPoints(int gain) { }

    default void getSavedLocation(String loc) { }

    default void hairExists(int hair) { }

    default void 跟随(int 状态) { }

    default void getGmLevel() { }

    default void checkMedalQuest() { }

    default void saveAi() { }

    default void addPartyTrait(String t, int e) { }

    default void saveReturnLocation(String loc) { }

    default void onTeleport(int value0, int 玩家ID, int x, int y) { }

    default void setAvatar(int ticket, int args) { }

    default void set神之子通用发型(int 男发型ID, int 女发型ID) { }

    default void gainMeso(int gain, int show) { }

    default void gainMeso(int gain) { }

    default void saveToDB(Char chr) { }

    default void getLevel() { }

    default void onTeleportPortal(String name) { }

    default void getExpRate() { }

    default void setHair(int hair) { }

    default void setmixBaseHair() { }

    default void getAi() { }

    default void unequipEverything() { }

    default void setFace(int face) { }

    default void getRecalcLocalStats() { }

    default void unequip(int itemId) { }

    default void getMapSimpleName(int id) { }

    default void 刷新MP基址(int num) { }

    default void getTraitRate() { }

    default void getOnlineTime() { }

    default void 注册AI智能机器人() { }

    default void getBuddyCapacity() { }

    default void updateBuddyCapacity(int capacity) { }

    default void 获取AI智能机器人cid() { }

    default void filterValidHairs(Object hairs) { }

    default void 神之子刷新女发型(int 发型ID) { }

    default void 脱掉装备(int 装备栏位置) { }

    default void getAndroidStat(String type) { }

    default void addHP(int delta) { }

    default void getMapName(int id) { }

    default void clearSavedLocation(String loc) { }

    default void cancelQichong() { }

    default void set神之子通用脸型(int 男脸型ID, int 女脸型ID) { }

    default void AI跟随(Char chr, int 状态) { }

    default void unequip(int itemId, int remove) { }

    default void getOnlineCharacterById(int id) { }

    default void 神之子更换完发型脸型对比UI(int itemId, int 性别, int 男更换前, int 男更换后, int 女更换前, int 女更换后) { }

    default void getMapCityName(int id) { }

    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1, Object 列表2) { }

    default void setAndroid(int args) { }

    default void setDPoints(int dpoints) { }

    default void 模拟玩家(int 性别) { }

    default void getGamePoints() { }

    default void isAI智能机器人() { }

    default void getGlobalDropRate() { }

    default void set神之子脸型(int 性别, int 男脸型ID, int 女脸型ID) { }

    default void gainExp(int exp) { }

    default void resetGamePoints() { }

    default void setRandomAvatar(int ticket, int args_all) { }

    default void sendPendant(int b) { }

    default void getMesoRate() { }

    default void equip(int itemId, int slot, int add) { }

    default void gainSp(int amount) { }

    default void getExpNeededForLevel() { }

    default void saveLocation(String loc) { }

    default void expandInventory(int type, int amt) { }

    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1) { }

    default void 加入队伍() { }

    default void set神之子女脸型(int 脸型ID) { }

    default void 是否启用AI脚本功能() { }

    default void 神之子刷新女肤色(int ID) { }

    default void faceExists(int face) { }

    default void setEPoints(int epoints) { }

    default void getPlayer() { }

    default void gainExp_PQ(int maxLevel, int mod) { }

    default void 活动_头顶邀请函(int 任务ID) { }

    default void AI使用椅子(Char chr, int itemId, int on) { }

    default void set神之子男发型(int 男发型ID) { }

    default void 随机发型(Char player) { }

    default void setLevel(int Level) { }

    default void gainAp(int amount) { }

    default void gainHonorExp(int gain, int show) { }

    default void 召唤机器人上线() { }

    default void set神之子发型(int 性别, int 男发型ID, int 女发型ID) { }

    default void AIChat(int cid, String msg) { }

    default void canChangeHairFace(int hairId) { }

    default void addTrait(String name, int exp) { }

    default void 随机脸型(Char player) { }

    default void getEliteMobCountdown() { }

    default void getLimitBreak() { }

    default void 获取服务器所有在线玩家() { }

    default void setVPoints(int vpoints) { }

    default void gainGamePoints(int amount) { }

}
