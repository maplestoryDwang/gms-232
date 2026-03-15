var status = -1;

function start(d, c, b) {
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
            cm.setAmbience("SoundEff.img/Elodin/scream_far", 90, 100);
            cm.sendNormalTalk("嗯……怎么回事……？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("发生了什么事？快进屋里去看看吧！", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(37159, "");
                    cm.OnStartNavigation(101081300, 0, "in00", 37159);
                    cm.updateInfoQuest(37150, "00=h1;02=h1");
                    cm.dispose()
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.fieldEffect_InsertCanvas(1, 180, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("呃……", 3, 1501000, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_MoveAction(3);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("终于醒过来了吗？", 5, 1501012, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("呃……", 3, 1501000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("走……走开，你这个……", 3, 1501000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(37150, "00=h2;02=h1");
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(37150, "00=h3;02=h1");
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("你就不能老实躺着吗？", 5, 1501009, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("翅膀……？妖精……？", 3, 1501000, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("呼……现在能听我说了吗？", 5, 1501009, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我叫鲁安。就住在魔法密林南部的森林里。", 5, 1501009, true, true)
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
                                                                                    cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h1");
                                                                                    cm.forceCompleteQuest(37159);
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
};