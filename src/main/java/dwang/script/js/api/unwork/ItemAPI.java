package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.util.FileTime;

import java.time.LocalDateTime;

import static net.swordie.ms.enums.ChatType.GameDesc;

public interface ItemAPI extends DwangScriptBaseApi {

    /**
         * @出自类 ItemAPI
    */
    default void addFromDrop(Object statsSel) { }



    /**
         * @出自类 ItemAPI
    */
    default void addFromDrop(Object item, int show) { }



    /**
         * 取消道具的BUFF效果，一般用于取消变身
         * @出自类 ItemAPI
         */
    default void cancelItem(int id) { }



    /**
         * 包裹满了吗
         *
         * @return
         * @出自类 ItemAPI
         */
    default void canHold() { }



    /**
         * 包裹满了吗
         *
         * @param itemId 物品
         * @return
         * @出自类 ItemAPI
         */
    default void canHold(int itemId) { }



    /**
         * 包裹能不能放得下物品
         *
         * @param itemId   物品
         * @param quantity 数量
         * @return
         * @出自类 ItemAPI
         */
    default void canHold(int itemId, int quantity) { }



    /**
         * @出自类 ItemAPI
    */
    default void canHoldSlots(int slot) { }



    /**
         * 修改手持的武器的破攻伤害
         *
         * @param amount 伤害，上限为long ≈900亿亿
         * @出自类 ItemAPI
         */
    default void changeLimitBreak(int amount) { }



    /**
         * 修改装备栏指定位置指定装备指定条目为指定潜能类型
         *
         * @param slot    装备栏指定位置
         * @param potline 指定条目，1~6
         * @param potId   指定潜能类型ID
         * @param show    是否广播
         * @出自类 ItemAPI
         */
    default void changePotential(int slot, int potline, int potId, int show) { }



    /**
         * @出自类 ItemAPI
    */
    default void dropItem(int slot, int invType, int quantity) { }



    /**
         * @出自类 ItemAPI
    */
    default void equipOrDrop(int src) { }



    /**
         * 强制覆盖装备
         * @出自类 ItemAPI
         */
    default void forceSetEquipment(int id, int slot) { }



    /**
         * @出自类 ItemAPI
    */
    default void forceUpdateItem(Object item) { }



    /**
         * 强制提升1级星之力，无上限
         * @出自类 ItemAPI
         */
    default void forceUpgradeStarForce(Object equip) { }



    /**
         * 刷物品
         *
         * @param id       物品
         * @param quantity 数量
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity) {
        getChr().addItemToInventory(id, quantity);
        String itemName = StringData.getItemStringById(id);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (%d)", itemName, quantity));
        }
    }



    /**
         * 刷物品，指定剩余时间
         *
         * @param id       物品
         * @param quantity 数量
         * @param period   剩余时间，默认以天为单位
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity, int period) {
        int hours = period * 24;
        var item = ItemData.getItemDeepCopy(id);
        item.setDateExpire(FileTime.fromDate(LocalDateTime.now().plusHours(hours)));
        item.setQuantity(quantity);
        getChr().addItemToInventory(item);

        String itemName = StringData.getItemStringById(id);
        if (itemName != null) {
            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (Expires in %d hours)", itemName, hours));
        }

    }



    /**
         * 刷物品
         *
         * @param id          物品
         * @param quantity    数量
         * @param randomStats 是否随机化属性
         * @param 升级次数        提升装备的可升级次数
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity, int randomStats, int 升级次数) { }



    /**
         * 刷物品
         *
         * @param id          物品
         * @param quantity    数量
         * @param randomStats 是否随机化属性
         * @param period      剩余时间，默认以天为单位
         * @param slots       ？？？
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity, int randomStats, int period, int slots) { }



    /**
         * 刷物品
         *
         * @param id          物品
         * @param quantity    数量
         * @param randomStats 是否随机化属性
         * @param period      剩余时间，默认以天为单位
         * @param hours       剩余时间改为以小时为单位
         * @param 升级次数        提升装备的可升级次数
         * @param owner       拥有者
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity, int randomStats, int period, int hours, int 升级次数, String owner) { }



    /**
         * 刷物品
         *
         * @param id          物品
         * @param quantity    数量
         * @param randomStats 是否随机化属性
         * @param period      剩余时间，默认以天为单位
         * @param hours       剩余时间改为以小时为单位
         * @param 升级次数        提升装备的可升级次数
         * @param owner       拥有者
         * @param cg          玩家
         * @出自类 ItemAPI
         */
    default void gainItem(int id, int quantity, int randomStats, int period, int hours, int 升级次数, String owner, Object cg) { }



    /**
         * 刷物品，指定剩余时间
         *
         * @param id       物品
         * @param quantity 数量
         * @param period   剩余时间，默认以天为单位
         * @param owner    拥有者
         * @出自类 ItemAPI
         */
    default void gainItemPeriod(int id, int quantity, int period, String owner) { }



    /**
         * 刷物品，指定剩余时间
         *
         * @param id       物品
         * @param quantity 数量
         * @param period   剩余时间，默认以天为单位
         * @param hours    剩余时间改为以小时为单位
         * @param owner    拥有者
         * @出自类 ItemAPI
         */
    default void gainItemPeriod(int id, int quantity, int period, int hours, String owner) { }



    /**
         * 刷物品，不给出提示
         *
         * @param id       物品
         * @param quantity 数量
         * @出自类 ItemAPI
         */
    default void gainItemSilent(int id, int quantity) { }



    /**
         * @出自类 ItemAPI
    */
    default void getEquip(int itemId) { }



    /**
         * 获得装备栏指定道具
         *
         * @param slot 格子位置
         * @return 装备
         * @出自类 ItemAPI
         */
    default void getEquipBySlot(int slot) { }



    /**
         * @出自类 ItemAPI
    */
    default void getEquipLevelById(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void getFamiliarCard(int quantity, int maxGrade) { }



    /**
         * 获得指定物品栏
         *
         * @param type 物品栏类型
         * @return
         * @出自类 ItemAPI
         */
    default void getInventory(int type) { }



    /**
         * 获得指定物品栏枚举
         *
         * @param i 物品栏号
         * @return
         * @出自类 ItemAPI
         */
    default void getInvType(int i) { }



    /**
         * @出自类 ItemAPI
    */
    default void getItemall(Character chr) { }



    /**
         * 获取装备栏位的装备ID
         * @出自类 ItemAPI
         */
    default void getItemByPosition(int Position) { }



    /**
         * 获得 MapleItemInformationProvider 实例
         *
         * @return
         * @出自类 ItemAPI
         */
    default void getItemInfo() { }



    /**
         * 获得物品名称
         *
         * @param id 物品
         * @return
         * @出自类 ItemAPI
         */
    default void getItemName(int id) { }



    /**
         * 读取玩家指定物品拥有数量
         *
         * @param itemId 物品
         * @return 数量
         * @出自类 ItemAPI
         */
    default void getItemQuantity(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void getItemQuantity(int itemId, int checkEquipped) { }



    /**
         * @出自类 ItemAPI
    */
    default void getNaturalStats(int itemId, String it) { }



    /**
         * 随机获取一个伤害皮肤道具
         * @出自类 ItemAPI
         */
    default void getRandomDamageSkin() { }



    /**
         * @出自类 ItemAPI
    */
    default void getReqLevel(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void getSpace(int type) { }



    /**
         * @出自类 ItemAPI
    */
    default void getTotalStat(int itemId) { }



    /**
         * 给玩家所在团队发放物品，可正可负
         *
         * @param id       物品
         * @param quantity 数量
         * @see @givePartyItems(int, short, boolean)
         * @出自类 ItemAPI
         */
    default void givePartyItems(int id, int quantity) { }



    /**
         * 给玩家所在团队发放物品，可正可负
         *
         * @param id        物品
         * @param quantity  数量
         * @param removeAll 是否全部移除
         * @出自类 ItemAPI
         */
    default void givePartyItems(int id, int quantity, int removeAll) { }



    /**
         * 给玩家所在团队发点券
         *
         * @param amount 点券
         * @出自类 ItemAPI
         */
    default void givePartyNX(int amount) { }



    /**
         * 给指定团队发点券
         *
         * @param amount 点券
         * @param party
         * @出自类 ItemAPI
         */
    default void givePartyNX(int amount, Object party) { }



    /**
         * @出自类 ItemAPI
    */
    default void hasEquipped(int itemId) { }



    /**
         * 检查玩家是否拥有物品
         *
         * @param itemId 物品
         * @return
         * @出自类 ItemAPI
         */
    default void haveItem(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void haveItem(int itemId, int quantity) { }



    /**
         * 检查玩家是否拥有足够物品
         *
         * @param itemId          物品
         * @param quantity        数量
         * @param checkEquipped   是否检查已装备的
         * @param greaterOrEquals 是否开启大于等于模式
         * @return
         * @出自类 ItemAPI
         */
    default void haveItem(int itemId, int quantity, int checkEquipped, int greaterOrEquals) { }



    /**
         * @出自类 ItemAPI
    */
    default void haveSpace(int type) { }



    /**
         * @出自类 ItemAPI
    */
    default void isCash(int itemId) { }



    /**
         * 道具信息是否存在
         * @出自类 ItemAPI
         */
    default void itemExists(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void Item类型武器(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void Item类型现金(int itemId) { }



    /**
         * 移除玩家背包里指定物品的所有数量
         *
         * @param id 物品ID
         * @出自类 ItemAPI
         */
    default void removeAll(int id) { }



    /**
         * @出自类 ItemAPI
    */
    default void removeAll(int id, int show) { }



    /**
         * @出自类 ItemAPI
    */
    default void removeAllItem(int sel) { }



    /**
         * 移除团队里所有玩家背包里指定物品的所有数量
         *
         * @param id 物品ID
         * @出自类 ItemAPI
         */
    default void removeFromParty(int id) { }



    /**
         * 移除团队里所有玩家背包里指定物品的所有数量
         *
         * @param id    物品ID
         * @param party 团队
         * @出自类 ItemAPI
         */
    default void removeFromParty(int id, Object party) { }



    /**
         * 移除玩家背包里指定物品，但只扣1个
         *
         * @param id 物品ID
         * @出自类 ItemAPI
         */
    default void removeItem(int id) { }



    /**
         * 移除玩家背包里指定物品
         *
         * @param id 物品ID
         * @出自类 ItemAPI
         */
    default void removeItem(int id, int quantity) { }



    /**
         * 移除玩家背包里指定位置的指定数量
         *
         * @param slot     格子位置
         * @param invType  背包页签类型
         * @param quantity 数量
         * @return
         * @出自类 ItemAPI
         */
    default void removeItem(int slot, int invType, int quantity) { }



    /**
         * 移除玩家背包里指定位置的指定数量
         *
         * @param invType  背包页签类型
         * @param slot     格子位置
         * @param quantity 数量
         * @return
         * @出自类 ItemAPI
         */
    default void removeSlot(int invType, int slot, int quantity) { }



    /**
         * 触发指定道具的脚本
         * @出自类 ItemAPI
         */
    default void runItemScript(int itemId) { }



    /**
         * @出自类 ItemAPI
    */
    default void scrollItem(int scroll, int item) { }



    /**
         * @出自类 ItemAPI
    */
    default void setExpiration(Object statsSel, int expire) { }



    /**
         * @出自类 ItemAPI
    */
    default void used(int id, int quantity) { }



    /**
         * 触发使用物品效果
         *
         * @param id
         * @出自类 ItemAPI
         */
    default void useItem(int id) { }



    /**
         * 触发使用物品效果
         *
         * @param id
         * @param show 是否显示物品消息
         * @出自类 ItemAPI
         */
    default void useItem(int id, int show) { }



    /**
         * 用于击败塞伦时的成就检查等
         * @出自类 ItemAPI
         */
    default void 装备创世武器() { }



}
