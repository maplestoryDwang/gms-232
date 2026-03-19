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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(4);
            cm.sendNormalTalk("吱吱～～吱吱～～？？", 1, 1096003, false, true)
        } else {
            if (status === a++) {
                cm.effect_Direction("Effect/Direction4.img/cannonshooter/face00", 0, 0, 0);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.dispose()
            }
        }
    }
};