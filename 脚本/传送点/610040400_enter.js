function enter() {
    if (cm.isQuestActive(28768)) {
        cm.forceStartQuest(28794, "0")
    }
    cm.openNpc("Boss_新叶城_外星钻机")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/610040400_enter.js ", 0)
        } else {
            cm.dispose()
        }
    }
};