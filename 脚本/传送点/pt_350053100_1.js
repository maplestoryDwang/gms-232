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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350053150, 0, true);
                cm.setInGameDirectionMode(false, true, false);
                cm.npc_LeaveField("oid=284750596");
                cm.npc_LeaveField("oid=284750596");
                cm.npc_LeaveField("oid=284771702");
                cm.npc_LeaveField("oid=284771702")
            }
        }
    }
};