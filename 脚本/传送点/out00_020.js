function enter() {
    if (cm.getMap().getNumMonsters() <= 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有敌人没有消灭干净。");
        cm.playerMessage(-1, "还有敌人没有消灭干净。")
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
            cm.sendNormalTalk("弥弄矩似乎掉了什么东西。捡起来带走吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                if (!cm.haveItem(4034142)) {
                    cm.gainItem(4034142, 1)
                }
                cm.dispose();
                cm.warp(811000019, 2, false)
            }
        }
    }
};