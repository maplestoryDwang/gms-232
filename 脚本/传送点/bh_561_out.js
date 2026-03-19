function enter() {
    if (cm.getMap().getNumMonsters() <= 1) {
        cm.openScriptNpc()
    } else {
        cm.getTopMsgFont("目前仍无法移动. 请消灭附近的敌人!", 3, 20, 20, 0);
        cm.playerMessage(5, "目前仍无法移动. 请消灭附近的敌人!")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, b, a) {
    var c = cm.getMapId();
    if (c == 350056100) {
        action1(d, b, a)
    } else {
        if (c == 350056200) {
            action2(d, b, a)
        } else {
            if (c == 350056300) {
                action3(d, b, a)
            } else {
                if (c == 350056400) {
                    action4(d, b, a)
                } else {
                    if (c == 350056500) {
                        action5(d, b, a)
                    }
                }
            }
        }
    }
}

function action1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("总觉得这一区域会有很多智能机器人出现。", 37, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然消灭了一些，但剩余的敌人数量仍然很多。", 37, 1540453, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("如果在敌人视野更加有利的这一区域，从四面八方涌来大批智能机器人……\r\n那结果就令人担忧了。", 37, 1540451, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那这里就交给我们吧。\r\n至少我们能阻挡从后方攻过来的敌人。", 37, 1540612, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯，我们难得有两人独处的时间，你们就不要妨碍我们了。", 37, 1540611, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("贝尔，韩利泰！你们一定要注意安全！", 37, 1540452, true, true)
                            } else {
                                if (status === a++) {
                                    cm.getMap().killMonster(8240110);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(350056200, 0, false)
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

function action2(d, c, b) {
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
            cm.getMap().killMonster(8240110);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350056300, 0, false)
            }
        }
    }
}

function action3(d, c, b) {
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
            cm.getMap().killMonster(8240110);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350056400, 0, false)
            }
        }
    }
}

function action4(d, c, b) {
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
            cm.getMap().killMonster(8240110);
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
                    cm.warp(350056500, 0, false)
                }
            }
        }
    }
}

function action5(d, c, b) {
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
            cm.warp(350056009, 0, false);
            cm.dispose()
        }
    }
};