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
            cm.npc_LeaveField("oid=277067");
            cm.npc_LeaveField("oid=277068");
            cm.npc_LeaveField("oid=277070");
            cm.npc_LeaveField("oid=277071");
            cm.sendNormalTalk_Bottom("#face0#他们不会再追上来了吧？快点离开这里。", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993063028, 0, false)
            }
        }
    }
};