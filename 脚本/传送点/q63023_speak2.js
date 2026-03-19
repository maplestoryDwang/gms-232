function enter() {
    if (cm.getNumberFromQuestInfo(63023, "speak2") == 0) {
        cm.updateInfoQuest(63023, "speak1=1;speak2=1");
        cm.effect_NormalSpeechBalloon("#fs18##e#r是的！药水就在那底下！！", 0, 0, 0, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId())
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/q63023_speak2.js ", 0)
        } else {
            cm.dispose()
        }
    }
};