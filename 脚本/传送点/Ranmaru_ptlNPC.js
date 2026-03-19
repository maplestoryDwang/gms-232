function enter() {
    if (cm.getMapId() % 100 == 10) {
        cm.openScriptNpc()
    } else {
        cm.openNpc(9130088, "BOSS_森兰丸入场")
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
            cm.askYesNo("是否要结束挑战，离开秘密祭坛呢？", 0, 9130088)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getMapId() - 10, 0, false)
            }
        }
    }
};