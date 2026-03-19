function start() {
    if (cm.getQuestStatus(13108) == 1 && cm.itemQuantity(3994659) < 1) {
        cm.warp(910028360, 1);
        cm.forceCompleteQuest(13108);
        cm.gainItem(3994659, 1);
        return
    } else {
        cm.topMsg("You can't enter the Dining Chambers now.")
    }
};