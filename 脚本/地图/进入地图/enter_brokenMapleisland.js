var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.getInfoQuest(32315).equals("end")) {
                if (cm.isQuestActive(32351)) {
                    cm.fieldEffect_ScreenMsg("maplemap/enter/2000000");
                    cm.npc_ChangeController(1520049, "oid=1951075", 1340, 520, 18, 1290, 1390, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=1951075", "summon", 0, 0);
                    cm.dispose();
                    return
                } else {
                    cm.dispose();
                    return
                }
            } else {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetHideEffect(1);
                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 550, 245)
            }
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(6616)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(0)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(32315, "end");
                            cm.setStandAloneMode(false);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};