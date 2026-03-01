package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface ItemAPI extends DwangScriptBaseApi {

    default void getItemName(int id) { }

    default void gainItemPeriod(int id, int quantity, int period, String owner) { }

    default void gainItem(int id, int quantity, int randomStats, int period, int hours, int 升级次数, String owner) { }

    default void gainItem(int id, int quantity, int period) { }

    default void canHoldSlots(int slot) { }

    default void getRandomDamageSkin() { }

    default void gainItemPeriod(int id, int quantity, int period, int hours, String owner) { }

    default void useItem(int id) { }

    default void getTotalStat(int itemId) { }

    default void dropItem(int slot, int invType, int quantity) { }

    default void givePartyNX(int amount) { }

    default void getItemQuantity(int itemId, int checkEquipped) { }

    default void used(int id, int quantity) { }

    default void removeSlot(int invType, int slot, int quantity) { }

    default void getItemInfo() { }

    default void givePartyItems(int id, int quantity, int removeAll) { }

    default void isCash(int itemId) { }

    default void addFromDrop(Object statsSel) { }

    default void forceUpgradeStarForce(Object equip) { }

    default void removeAll(int id) { }

    default void getItemQuantity(int itemId) { }

    default void removeItem(int id, int quantity) { }

    default void removeAllItem(int sel) { }

    default void getNaturalStats(int itemId, String it) { }

    default void gainItem(int id, int quantity, int randomStats, int period, int hours, int 升级次数, String owner, Object cg) { }

    default void canHold(int itemId) { }

    default void removeItem(int slot, int invType, int quantity) { }

    default void getItemall(Character chr) { }

    default void Item类型武器(int itemId) { }

    default void removeFromParty(int id) { }

    default void equipOrDrop(int src) { }

    default void addFromDrop(Object item, int show) { }

    default void gainItem(int id, int quantity, int randomStats, int 升级次数) { }

    default void gainItemSilent(int id, int quantity) { }

    default void haveItem(int itemId, int quantity) { }

    default void useItem(int id, int show) { }

    default void Item类型现金(int itemId) { }

    default void removeItem(int id) { }

    default void setExpiration(Object statsSel, int expire) { }

    default void getInvType(int i) { }

    default void cancelItem(int id) { }

    default void haveItem(int itemId) { }

    default void removeAll(int id, int show) { }

    default void changeLimitBreak(int amount) { }

    default void getInventory(int type) { }

    default void hasEquipped(int itemId) { }

    default void getEquipLevelById(int itemId) { }

    default void givePartyNX(int amount, Object party) { }

    default void getItemByPosition(int Position) { }

    default void getEquip(int itemId) { }

    default void removeFromParty(int id, Object party) { }

    default void forceSetEquipment(int id, int slot) { }

    default void forceUpdateItem(Object item) { }

    default void scrollItem(int scroll, int item) { }

    default void haveItem(int itemId, int quantity, int checkEquipped, int greaterOrEquals) { }

    default void changePotential(int slot, int potline, int potId, int show) { }

    default void gainItem(int id, int quantity) { }

    default void canHold() { }

    default void getEquipBySlot(int slot) { }

    default void getSpace(int type) { }

    default void canHold(int itemId, int quantity) { }

    default void 装备创世武器() { }

    default void givePartyItems(int id, int quantity) { }

    default void haveSpace(int type) { }

    default void runItemScript(int itemId) { }

    default void gainItem(int id, int quantity, int randomStats, int period, int slots) { }

    default void getReqLevel(int itemId) { }

    default void getFamiliarCard(int quantity, int maxGrade) { }

    default void itemExists(int itemId) { }

}
