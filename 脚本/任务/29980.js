var status = -1;
var level = 200;
var itemId = 1142403;

function start(c, b, a) {
    cm.playerMessage("开始任务... " + cm.canHold(itemId, 1) + "  " + !cm.haveItem(itemId, 1));
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 5000 && cm.getJob() < 5112) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
}

function end(c, b, a) {
    cm.playerMessage("完成任务..." + cm.canHold(itemId, 1) + "  " + !cm.haveItem(itemId, 1));
    if (cm.haveItem(itemId, 1)) {
        cm.forceCompleteQuest()
    } else {
        if (cm.canHold(itemId, 1) && (cm.getJob() >= 5000 && cm.getJob() < 5112) && cm.getLevel() >= level) {
            cm.gainItem(itemId, 1);
            cm.forceCompleteQuest()
        }
    }
    cm.dispose()
};