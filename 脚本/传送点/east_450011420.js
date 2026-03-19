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
            if (cm.isQuestActive(35705) && cm.getItemQuantity(4036453) > 49) {
                cm.sendNormalTalk_Bottom("这些材料应该够了。返回坠落地点。", 57, 0, false, true)
            } else {
                cm.dispose();
                cm.warp(450011120, 2, false)
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(450011120, 2, false)
            }
        }
    }
};