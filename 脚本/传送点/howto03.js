function enter() {
    var a = 3;
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
            cm.npc_ChangeController(1540516, "oid=12999642", 813, 71, 21, 763, 863, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=12999642", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("等等，这里有一个存放兔子玩偶的箱子。", 37, 1540500, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 813, 267)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("就是那个。\r\n你看见上面写了20吗？", 37, 1540500, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("必须搜集20个兔子玩偶箱，才能开启门。\r\n玩偶应该被晶莹果冻怪藏在身上。", 37, 1540500, true, true)
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
                                                        cm.npc_LeaveField("oid=12999642");
                                                        cm.npc_LeaveField("oid=12999642");
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
            }
        }
    }
};