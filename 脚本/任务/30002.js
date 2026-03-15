var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("我想离开这里。", 0, 1064001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你说什么。", 2, 1064001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我想从这里出去。", 0, 1064001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你到底在说什么啊？这是什么地方？你是谁？", 2, 1064001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这里？这里是鲁塔比斯。我想离开这里。请你帮帮我。", 0, 1064001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(唉……一直在自言自语。真费劲。)", 2, 1064001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("(看来她好像是迷路了，要帮帮她吗？)", 2, 1064001)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("知道了。我来看看有没有办法离开这里。", 3, 1064001, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你真的愿意帮我吗？不许骗我哦！", 1, 1064001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(30002, "");
                                                cm.curNodeEventEnd(true);
                                                cm.setInGameDirectionMode(true, false, true);
                                                cm.setStandAloneMode(true);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯，肯定在某处有出去的路……", 3, 1064001, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 600, 215)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2494)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 400, -600, 215)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3997)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(0)
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
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextNoESC("你找到离开这里的办法了吗？", 1064001)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            } else {
                cm.dispose()
            }
        }
    }
};