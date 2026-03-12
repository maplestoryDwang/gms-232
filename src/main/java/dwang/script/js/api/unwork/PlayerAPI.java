package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;

public interface PlayerAPI extends DwangScriptBaseApi {

    /**
         * @出自类 PlayerAPI
    */
    default void addHP(int delta) { }



    /**
         * @出自类 PlayerAPI
    */
    default void addPartyTrait(String t, int e) { }



    /**
         * @出自类 PlayerAPI
    */
    default void addPartyTrait(String t, int e, Object party) { }



    /**
         * 给倾向能力添加经验值
         *
         * @param name 倾向名称，支持： "领导力", "感性", "洞察力", "意志", "手技", "魅力"
         * @param exp  经验值
         * @出自类 PlayerAPI
         */
    default void addTrait(String name, int exp) { }



    /**
         * 智能AI说话
         *
         * @param cid
         * @param msg
         * @出自类 PlayerAPI
         */
    default void AIChat(int cid, String msg) { }



    /**
         * @出自类 PlayerAPI
    */
    default void AI使用椅子(Character chr, int itemId, int on) { }



    /**
         * @出自类 PlayerAPI
    */
    default void AI加入队伍(Character chr) { }



    /**
         * @出自类 PlayerAPI
    */
    default void AI跟随(Character chr, int 状态) { }



    /**
         * 取消骑宠物
         * @出自类 PlayerAPI
         */
    default void cancelQichong() { }



    /**
         * @出自类 PlayerAPI
    */
    default void canChangeHairFace(int hairId) { }



    /**
         * @出自类 PlayerAPI
    */
    default void changeSubcategory(int sub) { }



    /**
         * @出自类 PlayerAPI
    */
    default void checkMedalQuest() { }



    /**
         * @出自类 PlayerAPI
    */
    default void clearSavedLocation(String loc) { }



    /**
         * 穿戴装备
         *
         * @param itemId 道具ID
         * @param slot   背包位置
         * @出自类 PlayerAPI
         */
    default void equip(int itemId, int slot) { }



    /**
         * @出自类 PlayerAPI
    */
    default void equip(int itemId, int slot, int add) { }



    /**
         * @出自类 PlayerAPI
    */
    default void expandInventory(int type, int amt) { }



    /**
         * @出自类 PlayerAPI
    */
    default void faceExists(int face) { }



    /**
         * 过滤出有效脸型
         * @出自类 PlayerAPI
         */
    default void filterValidFaces(Object faces) { }



    /**
         * 过滤出有效发型
         * @出自类 PlayerAPI
         */
    default void filterValidHairs(Object hairs) { }



    /**
         * @出自类 PlayerAPI
    */
    default void gainAp(int amount) { }



    /**
         * 直接获取指定经验值
         * @出自类 PlayerAPI
         */
    default void gainExp(int exp) {
        getChr().addExp(exp);

    }



    /**
         * @出自类 PlayerAPI
    */
    default void gainExp_PQ(int maxLevel, int mod) { }



    /**
         * 根据当前经验倍率，获取指定经验值
         * @出自类 PlayerAPI
         */
    default void gainExpR(int exp) { }



    /**
         * 获得在线时间
         * @出自类 PlayerAPI
         */
    default void gainGamePoints(int amount) { }



    /**
         * 获得家族点数
         *
         * @param gp
         * @出自类 PlayerAPI
         */
    default void gainGP(int gp) { }



    /**
         * 获得声望的经验值
         *
         * @param gain
         * @param show
         * @出自类 PlayerAPI
         */
    default void gainHonorExp(int gain, int show) { }



    /**
         * 获得钱
         *
         * @param gain 数量 ，可正可负
         * @出自类 PlayerAPI
         */
    default void gainMeso(int gain) { }



    /**
         * @出自类 PlayerAPI
    */
    default void gainMeso(int gain, int show) { }



    /**
         * @出自类 PlayerAPI
    */
    default void gainMeso(int gain, int show, int inChat) { }



    /**
         * @出自类 PlayerAPI
    */
    default void gainPlayerPoints(int gain) { }



    /**
         * 增加技能点
         *
         * @param amount 数量，可正可负
         * @出自类 PlayerAPI
         */
    default void gainSp(int amount) { }



    /**
         * 获取AI 脚本对话用到
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getAi() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getAndroidStat(String type) { }



    /**
         * @出自类 PlayerAPI
    */
    default void getBuddyCapacity() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getDPoints() { }



    /**
         * 获取掉落倍率
         * @出自类 PlayerAPI
         */
    default void getDropRate() { }



    /**
         * 精英怪所需击杀量
         * @出自类 PlayerAPI
         */
    default void getEliteMobCountdown() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getEPoints() { }



    /**
         * 读取当前升级所需经验
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getExpNeededForLevel() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getExpNeededForLevel(int level) { }



    /**
         * 获取经验倍率
         * @出自类 PlayerAPI
         */
    default void getExpRate() { }



    /**
         * 读取在线时间
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGamePoints() { }



    /**
         * 全域掉宝倍率
         * @出自类 PlayerAPI
         */
    default void getGlobalDropRate() { }



    /**
         * 读取当前玩家GM等级
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGmLevel() { }



    /**
         * 读取当前玩家公会的点数
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGP() { }



    /**
         * @出自类 PlayerAPI
    */
    default short getLevel() {
        return getChr().getLevel();
    }



    /**
         * 查看玩家当前破攻值
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getLimitBreak() { }



    /**
         * 获取城市名字
         * @出自类 PlayerAPI
         */
    default void getMapCityName(int id) { }



    /**
         * 获取地图名字含后缀详细名字
         * @出自类 PlayerAPI
         */
    default void getMapName(int id) { }



    /**
         * 获取地图街道名字
         * @出自类 PlayerAPI
         */
    default void getMapSimpleName(int id) { }



    /**
         * @出自类 PlayerAPI
    */
    default void getMeso() { }



    /**
         * 获取金币倍率
         * @出自类 PlayerAPI
         */
    default void getMesoRate() { }



    /**
         * 获取玩家名称
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getName() { }



    /**
         * 获取玩家角色实例chr
         *
         * @param id
         * @return
         * @出自类 PlayerAPI
         */
    default void getOnlineCharacterById(int id) { }



    /**
         * 查看玩家本次登录持续时间
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getOnlineTime() { }



    /**
         * 获得玩家实例
         *
         * @return
         * @出自类 PlayerAPI
         */
    default Char getPlayer() {
        return getChr();
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getPlayerPoints() { }



    /**
         * 查看玩家具体属性
         *
         * @param type 类型，支持：LVL, STR, DEX, INT, LUK, HP, MP, MAXHP, MAXMP, RAP,
         *             RSP, GID, GRANK, ARANK, GM, ADMIN, GENDER, FACE, HAIR
         * @return
         * @出自类 PlayerAPI
         */
    default void getPlayerStat(String type) { }



    /**
         * @出自类 PlayerAPI
    */
    default void getRecalcLocalStats() { }



    /**
         * 获取保存的地图
         * @出自类 PlayerAPI
         */
    default void getSavedLocation(String loc) { }



    /**
         * 获取伺服务器经验倍率
         * @出自类 PlayerAPI
         */
    default void getServerExpRate() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getSubcategory() { }



    /**
         * 获取倾向倍率
         * @出自类 PlayerAPI
         */
    default void getTraitRate() { }



    /**
         * @出自类 PlayerAPI
    */
    default void getVPoints() { }



    /**
         * @出自类 PlayerAPI
    */
    default void hairExists(int hair) { }



    /**
         * @出自类 PlayerAPI
    */
    default void isAI智能机器人() { }



    /**
         * 人物移动到指定坐标
         *
         * @param value0
         * @param 玩家ID
         * @param x
         * @param y
         * @see #onTeleport(byte, byte, int, int, int)
         * @出自类 PlayerAPI
         */
    default void onTeleport(int value0, int 玩家ID, int x, int y) { }



    /**
         * 人物移动到指定坐标
         * @出自类 PlayerAPI
         */
    default void onTeleport(int b1, int b2, int 玩家ID, int x, int y) { }



    /**
         * 人物移动到指定传送点
         *
         * @param name
         * @出自类 PlayerAPI
         */
    default void onTeleportPortal(String name) { }



    /**
         * @出自类 PlayerAPI
    */
    default void reloadAllFamiliars() { }



    /**
         * 清除在线时间
         * @出自类 PlayerAPI
         */
    default void resetGamePoints() { }



    /**
         * @出自类 PlayerAPI
    */
    default void resetStats(int str, int dex, int z, int luk) { }



    /**
         * @出自类 PlayerAPI
    */
    default void respawn(int force) { }



    /**
         * 保存AI
         * @出自类 PlayerAPI
         */
    default void saveAi() { }



    /**
         * 保存玩家当前地点，用于自由市场这种传送
         *
         * @param loc 地点
         * @出自类 PlayerAPI
         */
    default void saveLocation(String loc) { }



    /**
         * 保存玩家返回地点，用于自由市场这种传送
         *
         * @param loc 地点
         * @出自类 PlayerAPI
         */
    default void saveReturnLocation(String loc) { }



    /**
         * @出自类 PlayerAPI
    */
    default void saveToDB(Character chr) { }



    /**
         * @出自类 PlayerAPI
    */
    default void sendPendant(int b) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setAndroid(int args) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setAndroid(int ticket, int args) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setAvatar(int ticket, int args) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setDPoints(int dpoints) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setEPoints(int epoints) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setFace(int face) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setHair(int hair) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setLevel(int Level) { }



    /**
         * 随机混染
         * @出自类 PlayerAPI
         */
    default void setmixBaseHair() { }



    /**
         * @出自类 PlayerAPI
    */
    default void setPlayerPoints(int gain) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setRandomAvatar(int args_all) { }



    /**
         * 随机设置一个皮肤、脸型、发型，不适用于神之子、爆莉萌天使
         * @出自类 PlayerAPI
         */
    default void setRandomAvatar(int ticket, int args_all) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setSkin(int color) { }



    /**
         * @出自类 PlayerAPI
    */
    default void setVPoints(int vpoints) { }



    /**
         * 神之子发型
         *
         * @param 性别    男=0,女=1,通用=2
         * @param 男发型ID
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子发型(int 性别, int 男发型ID, int 女发型ID) { }



    /**
         * 神之子女发型
         *
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子女发型(int 女发型ID) { }



    /**
         * set神之子女脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子女脸型(int 脸型ID) { }



    /**
         * 神之子男发型
         *
         * @param 男发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子男发型(int 男发型ID) { }



    /**
         * set神之子男脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子男脸型(int 脸型ID) { }



    /**
         * set神之子脸型
         *
         * @param 性别
         * @param 男脸型ID
         * @param 女脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子脸型(int 性别, int 男脸型ID, int 女脸型ID) { }



    /**
         * 神之子通用发型
         *
         * @param 男发型ID
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子通用发型(int 男发型ID, int 女发型ID) { }



    /**
         * set神之子通用脸型
         *
         * @param 男脸型ID
         * @param 女脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子通用脸型(int 男脸型ID, int 女脸型ID) { }



    /**
         * 卸载指定装备 脱掉指定装备
         *
         * @param itemId
         * @出自类 PlayerAPI
         */
    default void unequip(int itemId) { }



    /**
         * @出自类 PlayerAPI
    */
    default void unequip(int itemId, int remove) { }



    /**
         * 脱掉身上所有装备
         * @出自类 PlayerAPI
         */
    default void unequipEverything() { }



    /**
         * @出自类 PlayerAPI
    */
    default void updateBuddyCapacity(int capacity) { }



    /**
         * 一键扩充项链
         * @出自类 PlayerAPI
         */
    default void 一键扩充项链(int days) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 修改能力属性(int 类型, int num) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 刷新HP基址(int num) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 刷新MP基址(int num) { }



    /**
         * <true=穿戴 false=脱下>
         *
         * @param 状态
         * @出自类 PlayerAPI
         */
    default void 副手武器(int 状态) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 加入队伍() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 召唤机器人上线() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 是否启用AI脚本功能() { }



    /**
         * 新键AI机器人数据
         *
         * @param 性别
         * @出自类 PlayerAPI
         */
    default void 模拟玩家(int 性别) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 注册AI智能机器人() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 活动_头顶邀请函(int 任务ID) { }



    /**
         * 神之子刷新女发型
         *
         * @param 发型ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女发型(int 发型ID) { }



    /**
         * 神之子刷新女脸型
         *
         * @param ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女肤色(int ID) { }



    /**
         * 神之子刷新女脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女脸型(int 脸型ID) { }



    /**
         * 神之子更换发型整容染色UI
         *
         * @param itemId 发型整容染色道具
         * @param 性别     男=0,女=1,通用=2
         * @param 列表1    所有的发型整容染色ID
         * @出自类 PlayerAPI
         */
    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1, Object 列表2) { }



    /**
         * 神之子更换完发型脸型对比UI
         *
         * @param itemId 发型整容染色道具
         * @param 性别     0=男,女=1.通用=2
         * @param 男更换前
         * @param 男更换后
         * @param 女更换前
         * @param 女更换后
         * @出自类 PlayerAPI
         */
    default void 神之子更换完发型脸型对比UI(int itemId, int 性别, int 男更换前, int 男更换后, int 女更换前, int 女更换后) { }



    /**
         * 脱掉装备
         *
         * @param 装备栏位置
         * @出自类 PlayerAPI
         */
    default void 脱掉装备(int 装备栏位置) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 获取AI智能机器人cid() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 获取服务器所有在线玩家() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 解除角色死亡惩罚() { }



    /**
         * @出自类 PlayerAPI
    */
    default void 跟随(int 状态) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 随机发型(Character player) { }



    /**
         * @出自类 PlayerAPI
    */
    default void 随机脸型(Character player) { }



}
