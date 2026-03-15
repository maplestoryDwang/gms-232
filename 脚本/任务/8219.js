var status = -1;

function start(c, b, a) {
    cm.sendNext("Find my bro.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.sendNext("...");
    cm.gainItem(3992040, 1);
    cm.gainExp(175000);
    cm.forceCompleteQuest();
    cm.dispose()
};