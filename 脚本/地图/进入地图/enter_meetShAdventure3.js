var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(32357, "");
            cm.playerMessage(-1, "请打败黑魔法师的影子。");
            cm.killAllMob();
            cm.spawnMobLimit(9300807, 1, 300, 215, 100);
            cm.dispose()
        }
    }
};