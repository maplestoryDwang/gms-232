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
            cm.sendNext("#fn微软雅黑##fs15#你想前往哪里？\r\n\r\n  #L0#训练场1#l  #L1#训练场2#l  #L2#训练场3#l", 9130008)
        } else {
            if (b == 0) {
                cm.warp(807030000)
            } else {
                if (b == 1) {
                    cm.warp(807030100)
                } else {
                    if (b == 2) {
                        cm.warp(807030200)
                    }
                }
            }
            cm.dispose()
        }
    }
};