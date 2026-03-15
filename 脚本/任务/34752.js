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
            cm.sendNormalTalk_Bottom("#face11#糟糕！我们必须继续前进……但这里怎么长出了这么多#o2400253#！？", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face11#快去消灭#r#o2400253##k，继续前进。消灭掉#k#b200个#k应该就够了。马上消灭掉，然后到#b#m410000118##k去！", 36, 3002110)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34752, "");
                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h1;24=h0;25=h0;29=h0");
                    cm.setPartner(1, 3002110, 80002360, 0);
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
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
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -26, -62);
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 399, 20)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 77, 20)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face11#这棵树应该可以成为遮住整个村子的雨伞。", 37, 3002110, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.onNewSpecialEffect(3, 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/tree/skeleton", "not", "", "00"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯？雨伞？这棵小树能有什么用……开玩笑！", 57, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face11#我是狐神任命的尖耳守备队长！我一定会成功的！", 37, 3002110, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_取消复合图片动画("00", 0, 0);
                                                                        cm.forceCompleteQuest(34752);
                                                                        cm.gainExp(48338098);
                                                                        cm.updateInfoQuest(34752, "exp=1");
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
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
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
};