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

function action(d, b, a) {
    var c = cm.getMapId();
    if (!cm.haveItem(4009324)) {
        cm.sendNormalTalk_Bottom("需要获取到#b#i4009324##z4009324##k才能通过这里。", 37, 1540451, false, true);
        cm.dispose()
    } else {
        if (c == 350055400) {
            action2(d, b, a)
        } else {
            action1(d, b, a)
        }
    }
}

function action1(d, c, b) {
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
            cm.npc_SetSpecialAction("oid=40171", "open", -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/elevator_open", 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350055001, 0, false);
                cm.removeAll(4009324)
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.npc_SetSpecialAction("oid=47364", "open", -1, 1);
            cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/elevator_open", 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350056001, 0, false);
                cm.removeAll(4009324)
            }
        }
    }
};