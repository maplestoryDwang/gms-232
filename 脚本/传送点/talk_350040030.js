function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.addPopupSay(1540653, 1000, "正在搜索逃跑的智能机器人. \r\n正在搜索逃跑的智能机器人. ", "", 0);
    cm.addPopupSay(1540502, 1000, "这些智能机器人究竟是从哪里冒出来的?", "", 0);
    cm.addPopupSay(1540504, 1000, "它们好像正在巡查. 说不定这附近还有更多呢. ", "", 0);
    cm.addPopupSay(1540503, 1000, "不过, 逃走的智能机器人, 这究竟是什么意思啊?它们自己就是智能机器人啊!", "", 0);
    cm.addPopupSay(1540504, 1000, "肯定是其中几名逃跑了呗. 说不定它们自己发生内讧了呢?", "", 0);
    cm.addPopupSay(1540502, 1000, "智能机器人只是按照命令办事而已啊. 会发生内讧吗?", "", 0);
    cm.addPopupSay(1540503, 1000, "这个嘛, 看来其中也有像我这种不听话的家伙啊!嘻嘻嘻!", "", 0);
    cm.spawnMobLimit(8240056, 1, 382, -1232, 5)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/talk_350040030.js ", 0)
        } else {
            cm.dispose()
        }
    }
};