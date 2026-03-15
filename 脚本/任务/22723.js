var status = -1;

function start(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk("你来得正好，#b#h0##k。\r\n地铁的日报上登了这种照片，我总觉得这应该是合成的吧？我和朋友吵了好久。", 9, 1531046, false, true)
        } else {
            if (status === b++) {
                cm.curNodeEventEnd(true);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(true, false, true);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === b++) {
                        cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect2.img/kinesis/news2", 0, 1000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#b(啊，我想起来了，这刚好是那时候经过的路。)#k", 37, a, false, true)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === b++) {
                                    cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === b++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                    } else {
                                        if (status === b++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                        } else {
                                            if (status === b++) {
                                                cm.setStandAloneMode(false);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.sendNormalTalk("嗯？你说什么？", 9, 1531046, false, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("没，我什么都没说。", 3, 1531046, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk("听传闻说，超能力者会使用念力。\r\n这是种不用动手就可以移动物体的超能力。", 9, 1531046, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk("我总觉得这在科学的角度是说不通的，\r\n你是不是也这么觉得，#b#h0##k？", 9, 1531046, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk("对了……你让我帮忙签名同意书的吧。", 9, 1531046, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.getTopMsgFont("已经得到了三人中第二个学生的签名. ", 3, 20, 20, 0, 0);
                                                                    cm.forceStartQuest(22723, "");
                                                                    cm.forceCompleteQuest(22723);
                                                                    cm.gainExp(300);
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
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};