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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -365, 60)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("正好这里有样好东西。", 37, 1540460, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.useItem(2210136, true);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(4);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("只要像这样趴着#b( ↓ )#k\r\n就是完美的伪装了！！", 37, 1540460, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                            cm.effect_Voice("Voice3.img/BlackHeaven/fran/1", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_MoveAction(0);
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
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
};