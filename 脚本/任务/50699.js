var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4310018, 19) || !cm.canHold(1112608, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 19);
        cm.gainItem(1112608, 1);
        cm.forceStartQuest(50701);
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 19) || !cm.canHold(1112608, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 19);
        cm.gainItem(1112608, 1);
        cm.forceStartQuest(50701);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};