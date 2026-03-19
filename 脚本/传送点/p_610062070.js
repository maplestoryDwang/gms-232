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
            if (cm.getNumberFromQuestInfo(61347, "c1") < 3) {
                cm.sendOk_Bottom("先看看周围的情况吧。");
                cm.dispose();
                return
            }
            cm.askMenu_Bottom("……要和卢坎一起回到过去吗？这绝对是英雄之举。\r\n我可以阻止纳瑞坎和张博士的计划，保护幻日不落到他们手中。\r\n#b#L0#回到过去。#l\r\n#L1#等等。#l", 56, 0)
        } else {
            if (status === a++) {
                cm.npc_LeaveField("oid=2666901");
                cm.npc_LeaveField("oid=2666901");
                cm.dispose();
                cm.warp(610062080, 0, true)
            }
        }
    }
};