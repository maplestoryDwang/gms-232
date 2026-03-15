var status = -1;
var level = 60;
var itemId = 1142497;

function start(c, b, a) {
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 6500 && cm.getJob() <= 6512) && cm.getLevel() >= level) {
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
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 6500 && cm.getJob() <= 6512) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
};