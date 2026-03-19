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
            cm.setInGameDirectionMode(true, true, true);
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(1096012, "oid=4309062", -51, -97, 138, -101, -1, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=4309062", "summon", 0, 0);
            cm.setSessionValue("fly", "4309062");
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.setSessionValue("fire", "");
            cm.setSessionValue("fire", "");
            cm.sendNormalTalk("好了，现在出发！", 1, 1096005, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(2572, "");
                cm.npc_LeaveField("oid=4309062");
                cm.npc_LeaveField("oid=4309062");
                cm.setSessionValue("fire", "0");
                cm.fieldEffect_PlayFieldSound("cannonshooter/fire", 100);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/flying/0"], [7000, 0, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/flying1/0"], [7000, 0, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(800)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(912060300, 0, false)
                }
            }
        }
    }
};