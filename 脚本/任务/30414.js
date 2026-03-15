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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("哎哟……怎么办。", 37, 2074119, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#发现了在叹气的#b小日#k！\r\n小可爱，去调查看看这个强有力的嫌疑人吧！", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("…………", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(250)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(700)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#哎哟？什么气息都感觉不到啊？\r\n我还以为很肯定就是小日呢……", 37, 2074100, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(700)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("啊，年糕！这都是因为那该死的年糕！", 37, 2074119, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎哟，瞎嚷嚷什么呢？\r\n嗯……我总觉得很奇怪，还是先去看看到底发生什么事情了吧。", 37, 2074100, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.gainExp(142059);
                                                            cm.updateInfoQuest(30414, "gExpCheck=1");
                                                            cm.forceStartQuest(30414, "");
                                                            cm.forceCompleteQuest(30414);
                                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};