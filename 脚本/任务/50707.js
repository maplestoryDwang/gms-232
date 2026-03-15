var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4310018, 25) || !cm.canHold(1112611, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 25);
        cm.gainItem(1112611, 1);
        cm.forceCompleteQuest(50709);
        cm.sendOk("Come to Leafre.");
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 25) || !cm.canHold(1112611, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 25);
        cm.gainItem(1112611, 1);
        cm.forceCompleteQuest(50709);
        cm.sendOk("Come to Leafre.");
        cm.forceCompleteQuest()
    }
    cm.dispose()
};