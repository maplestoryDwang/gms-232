var status = -1;
var level = 60;
var itemId = 1142555;

function start(c, b, a) {
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && ((cm.getJob() >= 3120 && cm.getJob() <= 3122) || cm.getJob() == 3101) && cm.getLevel() >= level) {
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
        if (cm.canHold(itemId, 1) && ((cm.getJob() >= 3120 && cm.getJob() <= 3122) || cm.getJob() == 3101) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
};