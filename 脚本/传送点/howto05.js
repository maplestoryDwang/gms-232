function enter() {
    var a = 5;
    if (cm.getNumberFromQuestInfo(33142, "howto") < a) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.getNumberFromQuestInfo(33142, "map3") < 1) {
                cm.sendNormalTalk_Bottom("还不能去那边！这里还有变了的碎片没有清理呢。", 37, 1540500, false, true)
            } else {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_AskAnswerTime(900)
            }
        } else {
            if (status === b++) {
                if (cm.getNumberFromQuestInfo(33142, "map3") < 1) {
                    cm.dispose();
                    cm.onTeleport(1, cm.getPlayer().getId(), 152, -130)
                } else {
                    cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 1534, 80)
                }
            } else {
                if (status === b++) {
                    var a = 5;
                    cm.setNumberForQuestInfo(33142, "howto", a);
                    cm.inGameDirectionEvent_AskAnswerTime(600)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("这里也有变了的碎片。\r\n嗯……这个要抓多少只来着？", 37, 1540500, false, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("啊！我想起来了。\r\n20只红色，20只黄色和20只蓝色晶莹果冻怪。\r\n这次的晶莹果冻怪不会一下子出现，而是按顺序出现。\r\n好好加油吧！", 37, 1540500, true, true)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(900, 1000, 2147483647, 2147483647, 2147483647)
                                } else {
                                    if (status === b++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === b++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                        } else {
                                            if (status === b++) {
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
};