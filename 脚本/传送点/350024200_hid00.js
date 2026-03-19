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
    }
    if (cm.getNumberFromQuestInfo(33178, "hid") > 0) {
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
            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 118, -60)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(1540468, "oid=22710602", 430, -100, 40, 380, 480, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=22710602", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.npc_SetSpecialAction("oid=22710602", "rJump", -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("嘻嘻", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540468, cm.getPlayer().getId())
                    } else {
                        if (status === a++) {
                            cm.setNpcSpecialActionReset("oid=22710602");
                            cm.npc_LeaveField("oid=22710602");
                            cm.npc_LeaveField("oid=22710602");
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(33178, "hid=1");
                                    cm.effect_NormalSpeechBalloon("从右边进去吧!", 1, 0, 1, 4000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};