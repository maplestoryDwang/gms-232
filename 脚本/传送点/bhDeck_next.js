function enter() {
    var d = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMap().getNumMonsters();
    var c = cm.getMapId();
    if (b == 0 || b == 4 && c == 350042450 || b == 8 && c == 350042500) {
        if (c == 350042050) {
            cm.warp(350042100, 0, false)
        } else {
            if (c == 350042100) {
                cm.warp(350042200, 0, false)
            } else {
                if (c == 350042200) {
                    cm.warp(350042350, 0, false)
                } else {
                    if (c == 350042350) {
                        cm.warp(350042400, 0, false)
                    } else {
                        if (c == 350042400) {
                            cm.openScriptNpc()
                        } else {
                            if (c == 350042450) {
                                cm.warp(350042500, 0, false)
                            } else {
                                if (c == 350042500) {
                                    cm.warp(350042600, 0, false)
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        cm.getTopMsgFont("目前仍无法移动. 请消灭野外的敌人!", 3, 20, 20, 0);
        cm.playerMessage(5, "目前仍无法移动. 请消灭野外的敌人!")
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
            cm.inGameDirectionEvent_MoveAction(7);
            cm.inGameDirectionEvent_AskAnswerTime(200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.warp(350042450, 0, false)
                }
            }
        }
    }
};