var status = -1;

function start(c, b, a) {
    cm.sendNext("I don't know.. maybe you can go #bHunt the Zombies#k for a clue. Maybe an item or something will lead you to it.");
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
};