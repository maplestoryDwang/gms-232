var status = -1;
var level = 100;
var itemId = 1142402;

function start(c, b, a) {
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 5000 && cm.getJob() <= 5112) && cm.getLevel() >= level) {
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
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 5000 && cm.getJob() <= 5112) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
};