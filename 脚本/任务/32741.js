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
            cm.sendNormalTalk_Bottom("#h0#，我在这儿呢，这儿！", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你说金司机在找我？真是的，我不管！我已经决定今天要给#h0#你介绍一下我们的城市了。", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那个……莫非你不乐意？是我强求你的吗？可是，我真的很想给#h0#你介绍一下我们的城市啊……", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("不行吗？#b\r\n#L0#好像很有趣的样子，答应她一起去吧。\r\n#L1#虽然不太乐意，但还是答应她一起去吧。\r\n#L2#牵着她的手带她走吧。#l\r\n#L3#告诉对方自己不愿意和她一起玩。#l", 37, 1530060)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("太好了！那我们先去咱们学校最有名的年糕串店吧！\r\n\r\n#b（希纳斯看起来欢快极了。）#k", 37, 1530060, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32741, "");
                                cm.onHireTutorById(1, 80001556, 330000000);
                                cm.dispose()
                            }
                        }
                    }
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
            cm.sendNormalTalk_Bottom("#face0#咦，这不是希纳斯吗？？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这是怎么啦？希纳斯居然也会来这种地方？", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嘿嘿……听说这里的年糕串真的很好吃？说是什么魔力年糕串呢。", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, true, true);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 364, 670)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_Text(["#fn黑体##fs26#奥兹\r\n2年级, 推理小说部部长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 450, 670)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                cm.effect_Text(["#fn黑体##fs26#伊莉娜\r\n3年级, 射箭部部长"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
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
                                                                        cm.forceCompleteQuest(32741);
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