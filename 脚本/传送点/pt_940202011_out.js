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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_PushScaleInfo(230400, 1, 256000, 230400, -768000, 20735)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip10(1, 900);
                cm.inGameDirectionEvent_AskAnswerTime(900)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#岂有此理！有人想离开平民翼人地区！", 37, 3001306, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#站住！再逃我就认定你这是违法行为了！", 37, 3001306, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face3#呃……#fs28#真#fs25#是#fs22#对#fs19#不#fs16#起~~~~~~~~~！！", 37, 3001351, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.dispose();
                                        cm.warp(940202012, 0, true);
                                        cm.setInGameDirectionMode(false, true, false)
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