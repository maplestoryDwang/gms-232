var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4310018, 13) || !cm.canHold(1112605, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 13);
        cm.gainItem(1112605, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 13) || !cm.canHold(1112605, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 13);
        cm.gainItem(1112605, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};