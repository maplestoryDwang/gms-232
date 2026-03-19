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
            cm.askMenu("必须带着都纳米斯逃离这里。现在出发吗？\r\n#b#L0#知道了……#l\r\n#L1#以后再说。#l", 5, 2500001)
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.dispose();
                    return
                }
                cm.sendNormalTalk("祝你好运！。", 4, 2500001, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "必须消灭区域内的所有怪物，才能移动到下一区域。");
                    cm.dispose();
                    cm.openNpc("次元图书馆_Ep3_黑魔女_突围")
                }
            }
        }
    }
};