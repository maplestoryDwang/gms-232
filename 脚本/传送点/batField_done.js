function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
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
            cm.sendNormalTalk("失误了。怎么会把孩子独自留在那里呢……\r\n前方传来了枪声。快去看看。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(302090300, 0, false)
            }
        }
    }
};