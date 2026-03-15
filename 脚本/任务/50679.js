var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4310018, 5) || !cm.canHold(1112601, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 5);
        cm.gainItem(1112601, 1);
        cm.forceStartQuest(50682);
        cm.forceStartQuest(50686);
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 5) || !cm.canHold(1112601, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 5);
        cm.gainItem(1112601, 1);
        cm.forceStartQuest(50682);
        cm.forceStartQuest(50686);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};