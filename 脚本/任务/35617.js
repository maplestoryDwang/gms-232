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
            cm.sendNormalTalk_Bottom("#face0#相信过来的路上你也确认过了，\r\n这里的敌人比迷雾外面的敌人更加危险。", 36, 3003673, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#伊黛娜正在搜集有关敌人的情报。\r\n在这之前，希望你能站出来，成为联盟的中流砥柱。", 36, 3003673, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0##b#ho##k，请消灭出现在#r未知迷雾#k中甲板上的#b#o8644624##k？#b#o8644625##k各#b100只#k。\r\n\r\n #r ※ 确认后将立刻前往任务地图。#k", 36, 3003673)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35617, "");
                        cm.dispose();
                        cm.warp(450009210, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35617.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face0#哈……舰长，现在终于可以感觉到位置了。\r\n周围的干扰电波好像暂时被压制下去了。", 37, 3003692, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#诺特勒斯号，向西北方向加速前进。", 37, 3003673, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是，舰长！", 37, 3003692, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#凯琳，雾气好像变得更浓了。\r\n好像马上就要什么都看不见了。", 37, 3003691, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我也是这么认为。\r\n我会建议改变队形，尽可能缩小舰队之间的距离。", 37, 3003673, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#（凯琳向白色之矛表示最好采取防御姿态，\r\n改变队形。）", 37, 3003673, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#好的。马上转换为防御姿态。", 37, 3003656, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(35617);
                                                cm.gainExp(171586691);
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
                                                                cm.setStandAloneMode(false);
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
        }
    }
};