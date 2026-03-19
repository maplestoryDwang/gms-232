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
            cm.askMenu("移动到书中森林。你要去哪里？\r\n\r\n#b#L0#书中之艾琳森林#l\r\n#L1#书中的静谧之林#l\r\n#L2#哪里都不去#l", 5, 2500001)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.warp(305000000, 0, false)
                } else {
                    if (b == 1) {
                        cm.warp(305010000, 0, false)
                    }
                }
            }
        }
    }
};