var status = -1;

function start() {
    action(1, 0, 0)
}

function action(d, b, a) {
    status++;
    var c = cm.getInfoQuest(32372);
    if (c == null || !c.equals("s1=1")) {
        action1(d, b, a)
    } else {
        cm.dispose()
    }
}

function action1(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1520006, "oid=266519", 2773, -25, 64, 2723, 2823, 1, false, 0, false);
            cm.npc_ChangeController(1520007, "oid=266520", 2690, -25, 51, 2640, 2740, 1, false, 0, false);
            cm.playerMessage(-1, "请消灭黑色蒙面兔。");
            cm.forceStartQuest(32267, "");
            cm.spawnMobLimit(9300803, 1, 2400, -25, 100);
            cm.dispose()
        }
    }
}

function action2(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {}
    }
};