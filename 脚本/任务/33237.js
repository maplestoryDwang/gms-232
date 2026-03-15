var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
                                            cm.updateInfoQuest(33235, "start=1;puzzleNotice=0;puzzleNotice2=1");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("让我看看，一，二，三……四。\r\n都找齐了啊？", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33237, "start=0");
                cm.forceCompleteQuest(33237);
                cm.gainItem(4034278, -4);
                cm.dispose();
                cm.warp(350053500, 0, true);
                cm.npc_LeaveField("oid=26121183");
                cm.npc_LeaveField("oid=26121183");
                cm.setInGameDirectionMode(false, true, false)
            }
        }
    }
};