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
            cm.sendNormalTalk("#b#h0##k，看到这里了吧？\r\n这条新闻啊，看到了吧？说是超能力者救了小孩子。", 9, 1531061, false, true)
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
                        cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect2.img/kinesis/news1", 0, 1000, 0, 0, 12, 4, 0, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#b(是啊，那会儿头发差点全部被烧着。)#k", 37, a, false, true)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === b++) {
                                    cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                cm.sendNormalTalk("嗯？你说什么？", 9, 1531061, false, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk("没事，我什么都没说，还是赶紧给我签名吧。", 3, 1531061, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.getTopMsgFont("已经得到了三人中第一个学生的签名. ", 3, 20, 20, 0, 0);
                                                        cm.forceStartQuest(22722, "");
                                                        cm.forceCompleteQuest(22722);
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

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};