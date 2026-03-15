var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 35) || !cm.canHold(1112613, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 35);
        cm.gainItem(1112613, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};