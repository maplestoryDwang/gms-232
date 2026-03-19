function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var a = [20871, 20872, 20873, 20874, 20875];
            pass = false;
            for (var b = 0; b < a.length; b++) {
                if (cm.isQuestActive(a[b])) {
                    pass = true
                }
            }
            if (pass) {
                cm.warp(913001000, 0)
            } else {
                cm.playerMessage(1, "接受骑士团考验的人才有资格进入。")
            }
            cm.dispose()
        }
    }
};