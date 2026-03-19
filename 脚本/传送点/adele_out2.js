function enter() {
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
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我把随身携带的绳子放了下去。\r\n稍后，少年抓着绳子爬了上来。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#呼哧，呼哧……光是爬上来，就这么辛苦了。\r\n入口呢……啊，会不会是这边！？", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#咘！", 36, 3001960, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
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
                                            cm.warp(993162074, 0, false);
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
                }
            }
        }
    }
};