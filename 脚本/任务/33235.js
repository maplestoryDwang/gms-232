var status = -1;
var selectionLog = [];

function count() {
    var d = cm.getMap().getReactorByName("box1").getState();
    var c = cm.getMap().getReactorByName("box2").getState();
    var b = cm.getMap().getReactorByName("box3").getState();
    var a = 0;
    if (d == 0 && c == 1 && b == 0) {
        a++
    }
    if (d == 0 && c == 1) {
        a++
    }
    if (b == 0) {
        a++
    }
    return a
}

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(33235, "puzzleNotice2") > 0) {
        if (count() == 3) {
            start2(c, b, a)
        } else {
            start1(c, b, a)
        }
    } else {
        start0(c, b, a)
    }
}

function start0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.cameraSwitch_PushSwitchMoveInfo("1540708", 500);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 610, -100)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("开门的按钮与这机器相连，\r\n但是现在好像没有通电。", 37, 1540490, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好像要按照颜色来连接管道。", 37, 1540490, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 840, -450)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你通过攻击转动这些管道，把相同颜色的灯接通。", 37, 1540490, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果按下机器，它就会提示你处于什么状态。", 37, 1540490, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("好了，你在干嘛？抓紧，没有时间了！", 37, 1540490, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.cameraSwitch_CameraSwitchBack();
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setNumberForQuestInfo(33235, "puzzleNotice2", 1);
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

function start1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.cameraSwitch_PushSwitchMoveInfo("1540708", 500);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 610, -100)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("到目前为止连接了" + count() + "个。\r\n#g黄#k，#b蓝#k，#r红#k色都要接通才行！\r\n抓紧时间！", 37, 1540490, false, true)
                } else {
                    if (status === a++) {
                        cm.cameraSwitch_CameraSwitchBack();
                        cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
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

function start2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.cameraSwitch_PushSwitchMoveInfo("1540708", 500);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 610, -100)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("都连接好了，快按下按钮！", 37, 1540490, false, true)
                } else {
                    if (status === a++) {
                        cm.cameraSwitch_CameraSwitchBack();
                        cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33235.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};