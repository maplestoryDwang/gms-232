var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.gainItem(1142110, 1);
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
};