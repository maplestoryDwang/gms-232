package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.util.Position;

import java.util.HashMap;
import java.util.Map;

public interface PlayerAPI extends DwangScriptBaseApi {


    /**
     * *
     * 解放内在能力效果
     *
     * @出自类 QuestAPI
     */
    default void showCompleteQuestEffect() {
        throw new RuntimeException("not implemented");
    }


    /**
         * @出自类 PlayerAPI
    */
    default void addHP(int delta) {
        getChr().addStatAndSendPacket(Stat.mhp, delta);

    }



    /**
         * @出自类 PlayerAPI
    */
    default void addPartyTrait(String t, int e) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void addPartyTrait(String t, int e, Object party) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 给倾向能力添加经验值
         *
         * @param name 倾向名称，支持： "领导力", "感性", "洞察力", "意志", "手技", "魅力"
         * @param exp  经验值
         * @出自类 PlayerAPI
         */
    default void addTrait(String name, int exp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 智能AI说话
         *
         * @param cid
         * @param msg
         * @出自类 PlayerAPI
         */
    default void AIChat(int cid, String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void AI使用椅子(Character chr, int itemId, int on) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void AI加入队伍(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void AI跟随(Character chr, int 状态) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 取消骑宠物
         * @出自类 PlayerAPI
         */
    default void cancelQichong() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void canChangeHairFace(int hairId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void changeSubcategory(int sub) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void checkMedalQuest() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void clearSavedLocation(String loc) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 穿戴装备
         *
         * @param itemId 道具ID
         * @param slot   背包位置
         * @出自类 PlayerAPI
         */
    default void equip(int itemId, int slot) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void equip(int itemId, int slot, int add) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void expandInventory(int type, int amt) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void faceExists(int face) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 过滤出有效脸型
         * @出自类 PlayerAPI
         */
    default void filterValidFaces(Object faces) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 过滤出有效发型
         * @出自类 PlayerAPI
         */
    default void filterValidHairs(Object hairs) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void gainAp(int amount) {
        int currentAP = getChr().getAvatarData().getCharacterStat().getAp();
        setAP1(currentAP + amount);
    }

    default void setAP1(int amount) {
        getChr().setStat(Stat.ap, (short) amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.ap, (short) amount);
        getChr().write(WvsContext.statChanged(stats));
    }


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
    default void gainExp_PQ(int maxLevel, int mod) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 根据当前经验倍率，获取指定经验值
         * @出自类 PlayerAPI
         */
    default void gainExpR(int exp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得在线时间
         * @出自类 PlayerAPI
         */
    default void gainGamePoints(int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得家族点数
         *
         * @param gp
         * @出自类 PlayerAPI
         */
    default void gainGP(int gp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得声望的经验值
         *
         * @param gain
         * @param show
         * @出自类 PlayerAPI
         */
    default void gainHonorExp(int gain, int show) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得钱
         *
         * @param gain 数量 ，可正可负
         * @出自类 PlayerAPI
         */
    default void gainMeso(int gain) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void gainMeso(int gain, int show) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void gainMeso(int gain, int show, int inChat) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void gainPlayerPoints(int gain) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 增加技能点
         *
         * @param amount 数量，可正可负
         * @出自类 PlayerAPI
         */
    default void gainSp(int amount) {
        byte jobLevel = (byte) JobConstants.getJobLevel(getChr().getJob());
        int currentSP = getChr().getAvatarData().getCharacterStat().getExtendSP().getSpByJobLevel(jobLevel);
        setSP1(currentSP + amount);
    }

    default void setSP1(int amount) {
        getChr().setSpToCurrentJob(amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.sp, getChr().getAvatarData().getCharacterStat().getExtendSP());
        getChr().write(WvsContext.statChanged(stats));
    }


    /**
         * 获取AI 脚本对话用到
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getAi() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getAndroidStat(String type) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getBuddyCapacity() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getDPoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取掉落倍率
         * @出自类 PlayerAPI
         */
    default void getDropRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 精英怪所需击杀量
         * @出自类 PlayerAPI
         */
    default void getEliteMobCountdown() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getEPoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 读取当前升级所需经验
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getExpNeededForLevel() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getExpNeededForLevel(int level) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取经验倍率
         * @出自类 PlayerAPI
         */
    default void getExpRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 读取在线时间
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGamePoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 全域掉宝倍率
         * @出自类 PlayerAPI
         */
    default void getGlobalDropRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 读取当前玩家GM等级
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGmLevel() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 读取当前玩家公会的点数
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getGP() {
        throw new RuntimeException("not implemented");
    }



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
    default void getLimitBreak() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取城市名字
         * @出自类 PlayerAPI
         */
    default void getMapCityName(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取地图名字含后缀详细名字
         * @出自类 PlayerAPI
         */
    default void getMapName(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取地图街道名字
         * @出自类 PlayerAPI
         */
    default void getMapSimpleName(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getMeso() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取金币倍率
         * @出自类 PlayerAPI
         */
    default void getMesoRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取玩家名称
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getName() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取玩家角色实例chr
         *
         * @param id
         * @return
         * @出自类 PlayerAPI
         */
    default void getOnlineCharacterById(int id) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 查看玩家本次登录持续时间
         *
         * @return
         * @出自类 PlayerAPI
         */
    default void getOnlineTime() {
        throw new RuntimeException("not implemented");
    }



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
    default void getPlayerPoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 查看玩家具体属性
         *
         * @param type 类型，支持：LVL, STR, DEX, INT, LUK, HP, MP, MAXHP, MAXMP, RAP,
         *             RSP, GID, GRANK, ARANK, GM, ADMIN, GENDER, FACE, HAIR
         * @return
         * @出自类 PlayerAPI
         */
    default void getPlayerStat(String type) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getRecalcLocalStats() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取保存的地图
         * @出自类 PlayerAPI
         */
    default void getSavedLocation(String loc) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取伺服务器经验倍率
         * @出自类 PlayerAPI
         */
    default void getServerExpRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getSubcategory() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取倾向倍率
         * @出自类 PlayerAPI
         */
    default void getTraitRate() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void getVPoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void hairExists(int hair) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void isAI智能机器人() {
        throw new RuntimeException("not implemented");
    }



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
    default void onTeleport(int value0, int 玩家ID, int x, int y) {
        this.onTeleport((byte)0, (byte)value0, 玩家ID, x, y);
    }



    /**
         * 人物移动到指定坐标
         * @出自类 PlayerAPI
         */
    default void onTeleport(int b1, int b2, int 玩家ID, int x, int y) {
        getChr().write(FieldPacket.teleport(new Position(x,y), getChr()));
    }



    /**
         * 人物移动到指定传送点
         *
         * @param name
         * @出自类 PlayerAPI
         */
    default void onTeleportPortal(String name) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void reloadAllFamiliars() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 清除在线时间
         * @出自类 PlayerAPI
         */
    default void resetGamePoints() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void resetStats(int str, int dex, int z, int luk) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void respawn(int force) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 保存AI
         * @出自类 PlayerAPI
         */
    default void saveAi() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 保存玩家当前地点，用于自由市场这种传送
         *
         * @param loc 地点
         * @出自类 PlayerAPI
         */
    default void saveLocation(String loc) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 保存玩家返回地点，用于自由市场这种传送
         *
         * @param loc 地点
         * @出自类 PlayerAPI
         */
    default void saveReturnLocation(String loc) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void saveToDB(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void sendPendant(int b) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setAndroid(int args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setAndroid(int ticket, int args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setAvatar(int ticket, int args) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setDPoints(int dpoints) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setEPoints(int epoints) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setFace(int face) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setHair(int hair) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setLevel(int Level) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 随机混染
         * @出自类 PlayerAPI
         */
    default void setmixBaseHair() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setPlayerPoints(int gain) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setRandomAvatar(int args_all) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 随机设置一个皮肤、脸型、发型，不适用于神之子、爆莉萌天使
         * @出自类 PlayerAPI
         */
    default void setRandomAvatar(int ticket, int args_all) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setSkin(int color) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void setVPoints(int vpoints) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子发型
         *
         * @param 性别    男=0,女=1,通用=2
         * @param 男发型ID
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子发型(int 性别, int 男发型ID, int 女发型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子女发型
         *
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子女发型(int 女发型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * set神之子女脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子女脸型(int 脸型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子男发型
         *
         * @param 男发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子男发型(int 男发型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * set神之子男脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子男脸型(int 脸型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * set神之子脸型
         *
         * @param 性别
         * @param 男脸型ID
         * @param 女脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子脸型(int 性别, int 男脸型ID, int 女脸型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子通用发型
         *
         * @param 男发型ID
         * @param 女发型ID
         * @出自类 PlayerAPI
         */
    default void set神之子通用发型(int 男发型ID, int 女发型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * set神之子通用脸型
         *
         * @param 男脸型ID
         * @param 女脸型ID
         * @出自类 PlayerAPI
         */
    default void set神之子通用脸型(int 男脸型ID, int 女脸型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 卸载指定装备 脱掉指定装备
         *
         * @param itemId
         * @出自类 PlayerAPI
         */
    default void unequip(int itemId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void unequip(int itemId, int remove) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 脱掉身上所有装备
         * @出自类 PlayerAPI
         */
    default void unequipEverything() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void updateBuddyCapacity(int capacity) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 一键扩充项链
         * @出自类 PlayerAPI
         */
    default void 一键扩充项链(int days) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 修改能力属性(int 类型, int num) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 刷新HP基址(int num) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 刷新MP基址(int num) {
        throw new RuntimeException("not implemented");
    }



    /**
         * <true=穿戴 false=脱下>
         *
         * @param 状态
         * @出自类 PlayerAPI
         */
    default void 副手武器(int 状态) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 加入队伍() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 召唤机器人上线() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 是否启用AI脚本功能() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 新键AI机器人数据
         *
         * @param 性别
         * @出自类 PlayerAPI
         */
    default void 模拟玩家(int 性别) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 注册AI智能机器人() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 活动_头顶邀请函(int 任务ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子刷新女发型
         *
         * @param 发型ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女发型(int 发型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子刷新女脸型
         *
         * @param ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女肤色(int ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子刷新女脸型
         *
         * @param 脸型ID
         * @出自类 PlayerAPI
         */
    default void 神之子刷新女脸型(int 脸型ID) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 神之子更换发型整容染色UI
         *
         * @param itemId 发型整容染色道具
         * @param 性别     男=0,女=1,通用=2
         * @param 列表1    所有的发型整容染色ID
         * @出自类 PlayerAPI
         */
    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 神之子更换发型整容染色UI(int itemId, int 性别, Object 列表1, Object 列表2) {
        throw new RuntimeException("not implemented");
    }



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
    default void 神之子更换完发型脸型对比UI(int itemId, int 性别, int 男更换前, int 男更换后, int 女更换前, int 女更换后) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 脱掉装备
         *
         * @param 装备栏位置
         * @出自类 PlayerAPI
         */
    default void 脱掉装备(int 装备栏位置) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 获取AI智能机器人cid() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 获取服务器所有在线玩家() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 解除角色死亡惩罚() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 跟随(int 状态) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 随机发型(Character player) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PlayerAPI
    */
    default void 随机脸型(Character player) {
        throw new RuntimeException("not implemented");
    }



}
