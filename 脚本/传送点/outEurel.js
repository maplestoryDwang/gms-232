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
            if (!cm.isQuestFinished(29952)) {
                cm.warp(101050100, 2);
                cm.dispose()
            } else {
                cm.sendNextS("想要做什么呢？\r\n\r\n #L0#离开村子.#l\r\n #L1#送我去树顶上.#l")
            }
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.warp(101050100, 2)
                } else {
                    if (b == 1) {
                        cm.warp(101050000, 2, true)
                    }
                }
                cm.dispose()
            }
        }
    }
};