var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4310018, 15) || !cm.canHold(1112606, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 15);
        cm.gainItem(1112606, 1);
        cm.forceCompleteQuest(50694);
        cm.sendOk("Come to Nihal Desert.");
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4310018, 15) || !cm.canHold(1112606, 1)) {
        cm.sendOk("背包空间不足.")
    } else {
        cm.gainItem(4310018, 15);
        cm.gainItem(1112606, 1);
        cm.forceCompleteQuest(50694);
        cm.sendOk("Come to Nihal Desert.");
        cm.forceCompleteQuest()
    }
    cm.dispose()
};