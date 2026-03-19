function enter() {
    var a = 1;
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
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("奥尔卡一直在沉睡，所以她的记忆总是错位。", 37, 1540500, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, -234, 200)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你看到那个碎片了吗？\r\n记忆碎片总是像这样随意转动，所以记忆都被破坏了。", 37, 1540500, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("如果想查看记忆，就必须扔准那个，噔。", 37, 1540500, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("只要通过攻击来转动它，就能拼回原样了。", 37, 1540500, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("这些全部都要拼好。", 37, 1540500, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(900, 1000, 2147483647, 2147483647, 2147483647)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === a++) {
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
        }
    }
};