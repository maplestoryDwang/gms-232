var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("但是你为什么要把灯全部关掉，让这里变得这么黑呢？本来森林深处就已经够黑的了。", 3, 1501001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊……那个嘛……", 5, 1501013, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction21.img/Elodin/birdgrow/0", 0, 1500, 0, 0, 12, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("有一天，我发现那家伙一个人在哭", 5, 1501013, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction21.img/Elodin/birdgrow/1", 0, 1500, 0, 0, 12, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我就把它带到了家里，悉心地照顾它。但是没能找到它的父母。", 5, 1501013, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_ProcessOnOffLayer("02", "Effect/Direction21.img/Elodin/birdgrow/2", 0, 1500, 0, 0, 12, 4, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("后来有一天，它说想像我一样跟树木说话，也是我告诉它只要唱歌，就能和树木对话。", 5, 1501013, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction21.img/Elodin/birdgrow/3", 0, 1500, 0, 0, 12, 4, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我不该那么干的……", 5, 1501013, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer("02", "", 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 500, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                                            cm.eventSKill(0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.sendNormalTalk("……然后，不在家里开灯的理由……", 5, 1501013, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("鲁安说在森林中的微光的映照下，可以让歌声变得更加美妙！", 5, 1501010, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("……是的，我错了。", 5, 1501013, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("…………", 3, 1501001, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceStartQuest(37161, "");
                                                                                                            cm.forceCompleteQuest(37161);
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
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    cm.forceCompleteQuest();
    cm.dispose()
};