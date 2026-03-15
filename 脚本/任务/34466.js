var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34466, "");
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("#face5#呜呜，已经说好了不会再哭的……", 37, 3003301, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 400, 50)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#可眼泪却总是不断地流下来……", 37, 3003301, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 800, 80)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b(又是那团光，好像在指向某个地方。)#k", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 900, 80)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b(可是，那里明明是……)#k", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 400, -50)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("小不点精灵，跟上那道光看看吧，那前面好像有什么东西。", 57, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
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
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};