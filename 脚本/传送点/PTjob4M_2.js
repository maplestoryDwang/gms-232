function enter() {
    cm.openScriptNpc()
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
            if (cm.getMap().getNumMonsters() > 0) {
                cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
            } else {
                if (cm.isQuestActive(25122)) {
                    cm.warp(915010201, 1, false)
                } else {
                    cm.getTopMsgFont("现在还不能进去", 3, 20, 4, 0, 0)
                }
            }
            cm.dispose()
        }
    }
};