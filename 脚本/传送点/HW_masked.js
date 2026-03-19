function start() {
    if (cm.getQuestStatus(13103) == 1 && cm.itemQuantity(3994656) < 1) {
        cm.warp(910028310, 1);
        cm.gainItem(3994656, 5);
        return
    } else {
        cm.topMsg("You can't enter the Party Hall now.")
    }
    if (cm.getQuestStatus(13107) == 1 && cm.itemQuantity(3994660) < 1) {
        cm.warp(910028330, 1);
        cm.gainItem(3994660, 10);
        return
    }
    if (cm.getQuestStatus(13110) == 1 && cm.itemQuantity(3994663) < 1) {
        cm.warp(910028350, 1);
        cm.gainItem(3994663, 1);
        return
    }
};