function enter() {
    var a = 6;
    if (cm.getNumberFromQuestInfo(33142, "howto") < a) {
        cm.setNumberForQuestInfo(33142, "howto", a);
        cm.openScriptNpc()
    }
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
            cm.npc_ChangeController(1540518, "oid=13015306", 500, 16, 15, 450, 550, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=13015306", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(900)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 500, 80)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(600)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("又要搜集兔子玩偶。", 37, 1540500, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这次要搜集30个。\r\n这对你来说应该没问题吧？", 37, 1540500, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(900, 1000, 2147483647, 2147483647, 2147483647)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=13015306");
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.dispose();
                                                eim.setProperty("phase", "5")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};