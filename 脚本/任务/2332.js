var status = -1;

function start(c, b, a) {
    cm.getMap().killAllMonsters(true);
    cm.spawnMonster(3300008, 1);
    cm.sendNext("Please, eliminate the Prime Minister!!!");
    cm.forceStartQuest(2333);
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.gainItem(4032386, 1);
    cm.forceCompleteQuest();
    cm.dispose()
};