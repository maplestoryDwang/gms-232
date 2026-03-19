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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 3500, 0)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.npc_SetSpecialAction("oid=26144671", "open", -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1430)
                        } else {
                            if (status === a++) {
                                cm.npc_SetSpecialAction("oid=26144671", "open2", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(350054001, 0, true);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(33240, "");
                                    cm.npc_LeaveField("oid=26144669");
                                    cm.npc_LeaveField("oid=26144669");
                                    cm.npc_LeaveField("oid=26144670");
                                    cm.npc_LeaveField("oid=26144670");
                                    cm.npc_LeaveField("oid=26144671");
                                    cm.npc_LeaveField("oid=26144671")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};