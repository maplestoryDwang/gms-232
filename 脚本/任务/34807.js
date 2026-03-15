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
            cm.sendNormalTalk_Bottom("#face2#希娜和其他那些家伙都逃跑了……上次我说话太难听了,希望你原谅我……", 36, 3001307, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……嗯。总之没事就好。", 37, 3001351, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face2#那个……你能消灭故障的机器人,帮我找回遗失的物品吗？", 37, 3001307, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34807, "");
                        cm.sendNormalTalk_Bottom("#face1#谢谢！进入#b左边传送口#k后,就能发现怪异的练习机器人！", 37, 3001307, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#消灭#r#o2400409##k后,请把#i4036165##b我的背包#k和#i4036166##b10个我的笔记本#k带回来！非常感谢！", 37, 3001307, true, true, 1)
                        } else {
                            if (status === a++) {
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34807.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face1#哇！这不是我的东西嘛！！真是太感谢你了,伊利温！", 37, 3001307, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#你可真善良！今后我们常联络吧！谢啦！", 37, 3001307, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#那有缘再见！", 37, 3001307, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, false);
                        cm.sendNormalTalk_Bottom("#face0#可是……主人。", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4036165, -1);
                            cm.gainItem(4036166, -10);
                            cm.sendNormalTalk_Bottom("#face0#貌似是有人改造过练习机器人,以此来攻击水晶学院的全体学生和教授。", 37, 3001300, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……明天跟阿加特大人说吧。", 37, 3001351, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(34807);
                                        cm.updateInfoQuest(34807, "exp=1;d2=1");
                                        cm.dispose();
                                        cm.warp(402000526, 0, false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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