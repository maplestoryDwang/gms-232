function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (!cm.isQuestFinished(37154)) {
        cm.sendOkS("这地方看上去不太对劲。还是不要乱走的好。");
        cm.dispose();
        return
    } else {
        if (cm.isQuestFinished(37160)) {
            cm.warp(101080900, 0);
            cm.dispose();
            return
        }
    }
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk("嗯……不会有什么事吧……？", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(900)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_SetHideEffect(1);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.setStandAloneMode(false);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceCompleteQuest(37155);
                                            cm.dispose();
                                            cm.warp(910143001, 0)
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