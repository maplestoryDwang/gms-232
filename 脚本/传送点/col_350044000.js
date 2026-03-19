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
    if (cm.getNumberFromQuestInfo(33124, "check1") > 0) {
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
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -687, 60)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这里就是反抗者总部。", 37, 1540460, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#奥尔卡，请等等我~", 37, 1540460, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#嘿嘿嘿。", 37, 1540460, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_Voice("Voice3.img/BlackHeaven/fran/1", 100)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setNumberForQuestInfo(33124, "check1", 1)
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