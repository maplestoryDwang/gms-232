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
            cm.askMenu(" 这前面是个很危险的地方，你坚持要去吗？\r\n#b#L0#当然。#l\r\n#L1#以后再说。#l", 5, 2500001)
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.dispose();
                    return
                }
                cm.sendNormalTalk("祝你好运！。", 4, 2500001, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "请小心移动到地图的反方向，小心不要掉下去。");
                    cm.dispose();
                    cm.warp(304010300, 0, false)
                }
            }
        }
    }
};