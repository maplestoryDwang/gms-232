function enter() {
    var a = 4;
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
            cm.npc_ChangeController(1540517, "oid=13008835", 185, -208, 20, 135, 235, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=13008835", "summon", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 185, -148)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，记忆碎片发生了变化。\r\n肯定是因为晶莹果冻怪变多，所以被染了色。\r\n如果再这样下去，说不定什么时候就会变成晶莹果冻怪的。", 37, 1540500, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这红色碎片…… \r\n必须抓住#r20只#k晶莹果冻怪。", 37, 1540500, true, true)
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
                                            cm.npc_LeaveField("oid=13008835");
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.dispose()
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