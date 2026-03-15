var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -622, 106);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("难……难道是进了那座房子……？", 3, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip10(2, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你好……", 3, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("有人吗……？", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是……是鬼魂吗……？", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("呃……但是如果回到刚才那片森林……就又会迷路……被刺戳……被鸟啄……", 3, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("怎么办呢……", 3, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
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
                                                                    cm.forceStartQuest(37158, "");
                                                                    cm.forceCompleteQuest(37158);
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
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};