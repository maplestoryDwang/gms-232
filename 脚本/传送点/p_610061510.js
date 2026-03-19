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
            cm.userSetFieldFloating(610061510, 50, 40, 40);
            cm.sendNormalTalk_Bottom("连接快中断了！", 37, 9201537, false, true)
        } else {
            if (status === a++) {
                cm.npc_LeaveField("oid=2864960");
                cm.dispose();
                cm.warp(610061520, 0, true)
            }
        }
    }
};