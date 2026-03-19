function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            if (cm.isQuestActive(32609)) {
                cm.askMenu("看来你已经决定了啊。现在要去消灭怪物了吗？\r\n#b#L0#知道了。#l\r\n#L1# 以后再说。#l", 5, 2081012)
            } else {
                cm.sendOkS("通往森林的路。没事还是别浪费时间乱跑了。");
                cm.dispose()
            }
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.dispose();
                    return
                }
                cm.sendNormalTalk("拜托你了，我会为你祈祷森林的庇佑。", 4, 2081012, false, true)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "必须消灭区域内的所有怪物，才能移动到下一区域。");
                    cm.dispose();
                    cm.openNpc("次元图书馆_Ep2_成为女皇_神木村")
                }
            }
        }
    }
};