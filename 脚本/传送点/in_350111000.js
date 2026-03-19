function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestInfo(33905, "check") < 1) {
        action0(c, b, a)
    } else {
        action1(c, b, a)
    }
}

function action0(d, c, b) {
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
            cm.onNewSpecialEffect(1, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("主人，右边好像有东西。", 37, 1540807, false, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
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
            cm.onNewSpecialEffect(1, 1)
        } else {
            if (status === a++) {
                cm.warp(350111100, 0, false);
                cm.npc_LeaveField("oid=287759746");
                cm.npc_LeaveField("oid=287759747");
                cm.npc_LeaveField("oid=287759748");
                cm.npc_LeaveField("oid=287759749");
                cm.updateInfoQuest(33901, "rp=4");
                cm.dispose()
            }
        }
    }
};