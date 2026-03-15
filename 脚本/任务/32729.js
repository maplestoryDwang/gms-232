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
            cm.sendNormalTalk_Bottom("你去过教务室了吗？学生主任好像在找你。", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("教务室在1楼中间的位置。学生主任给人的第一印象虽然有些可怕，但实际上却是个非常和蔼可亲的人呢。\r\n\r\n#b（前往1楼教务室吧） ", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32729, "");
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_ForcedFlip10(2, 494);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("喂，转校生！你来的正好，我正在找你呢。", 37, 1530370, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("听说你第一天入学就跟人打起来了？而且还把对方打得昏迷不醒？是真的吗？", 37, 1530370, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是的，不是我把他打昏迷的，而是我到那儿的时候他就已经……", 57, 1530372, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("住嘴！还敢狡辩！你以为会打架是件自豪的事？！长得倒是挺文静的。", 37, 1530370, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不是的，那个，请听我解释……", 57, 1530372, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("闭嘴！！我把话说在前头，你要是再在这所学校闯祸的话，我是绝对不会轻饶你的！知道了吧？", 37, 1530370, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 560, 62)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                cm.effect_Text(["#fn黑体##fs26#斯坦, 恶狼学生主任"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.forceCompleteQuest(32729);
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
};