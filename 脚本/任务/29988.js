var status = -1;
var level = 30;
var itemId = 1142485;

function start(c, b, a) {
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 6000 && cm.getJob() <= 6112) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 6000 && cm.getJob() <= 6112) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
};