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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_QTE(0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                } else {
                    if (status === a++) {
                        cm.userSetFieldFloating(610062080, 20, 20, 20);
                        cm.inGameDirectionEvent_AskAnswerTime(2200)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.warp(610062100, 0, true);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=2667883");
                                cm.npc_LeaveField("oid=2667883");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};