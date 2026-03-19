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
            if (cm.isQuestFinished(31151)) {
                cm.askMenu("你想到精灵之地去啊。对了，这里发现了新的精灵之地。据说在那里可以得到希纳斯的庭院钥匙？为了和平，请继续努力。\r\n#b#L0#灵魂之地#l\r\n#b#L1#火焰之地#l\r\n#b#L2#风暴之地#l\r\n#b#L3#黑暗之地#l \r\n#b#L4#闪电之地#l ", 0, 2143000)
            } else {
                cm.askMenu("你要到精灵之地去？好主意。消灭精灵，就能削弱他们的力量。\r\n#b#L0#灵魂之地#l\r\n#b#L1#火焰之地#l\r\n#b#L2#风暴之地#l\r\n#b#L3#黑暗之地#l ", 0, 2143000)
            }
        } else {
            cm.warp(271030201 + b, 1);
            cm.dispose()
        }
    }
};