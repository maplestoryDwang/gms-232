function enter() {
    if (cm.getMap().countMonsterById(8880008) == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("结束战斗进行移动。", 0, 3001028)
        } else {
            if (status === a++) {
                if (cm.isQuestActive(31511)) {
                    cm.forceStartQuest(31540, "1")
                }
                cm.dispose();
                cm.warp(401052104, 2, false)
            }
        }
    }
};