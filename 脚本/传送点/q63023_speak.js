function enter() {
    if (cm.getNumberFromQuestInfo(63023, "speak1") == 0) {
        cm.updateInfoQuest(63023, "speak1=1");
        cm.effect_NormalSpeechBalloon("#fs15##e年轻人，你往下爬还顺利吗？！", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId())
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/q63023_speak.js ", 0)
        } else {
            cm.dispose()
        }
    }
};