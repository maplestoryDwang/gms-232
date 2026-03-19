function enter() {
    if (cm.isQuestFinished(58908)) {
        cm.openScriptNpc()
    } else {
        if (cm.isQuestActive(57479)) {
            cm.warp(811000007, 0, false)
        } else {
            cm.warp(811000001, 1)
        }
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
            cm.askMenu_Bottom("#b#h0##k，要移动到哪里？\r\n\r\n#b#L0#枫叶山丘周边1#l\r\n#L1#守卫房间#l", 37, 9130102)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(811000001, 1, false)
                } else {
                    cm.warp(811000008, 1, false)
                }
                cm.dispose()
            }
        }
    }
};