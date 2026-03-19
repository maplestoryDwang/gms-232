function enter() {
    if (cm.isQuestFinished(35731)) {
        cm.openScriptNpc()
    } else {
        cm.warp(450011990, 1)
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
            cm.askMenu("前往痛苦迷宫核心区域吧？\r\n#r\r\n\r\n#b#L0#进入#k痛苦迷宫核心#l#b\r\n#L1#前往#r欲望祭坛入口#k#l", 24, 0)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.warp(450011660, 1)
                } else {
                    cm.warp(450011990, 1)
                }
            }
        }
    }
};