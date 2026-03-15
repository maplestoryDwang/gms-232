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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("你都看过了吗？情况怎么样？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不容乐观啊。", 37, 2550001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("虽然粮食、武器和弓箭什么的都非常紧缺，\r\n但最大的问题还是人手不足啊。", 37, 2550001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过幸好关卡足够高，足够结实。", 37, 2550001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("有炸药吗？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("炸药……还有一些。\r\n不多了。", 37, 2550001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("炸断那座桥，应该能争取一点时间。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你也说了，只是一点时间。\r\n峡谷的间隔很窄，没有太大意义。", 37, 2550001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("队长，这样下去我们连一周都坚持不到。\r\n还是一边守着关卡，一边撤退，准备着后路……", 37, 2550001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                    cm.setAmbience("Ambience.img/blizzard_soft", 100, 60);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 2051, -115)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Map/Effect3.img/DLep4/8"], [0, 50, 30, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("(雪花？)", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("我喜欢雪。", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("啊？又说这个？", 37, 2550001, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("以后可能会更喜欢。", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.eventSKill(0);
                                                                                            cm.dispose();
                                                                                            cm.warp(306090050, 0, false);
                                                                                            cm.setInGameDirectionMode(false, true, false)
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
    status++;
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