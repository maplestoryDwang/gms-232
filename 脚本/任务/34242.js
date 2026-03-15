var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("你醒了吗？", 56, 0, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face4#闪……耀……？", 36, 3003480, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("！！！", 56, 0, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face11#……呃……我的头。被弹飞的时候，好像受到了很大的冲击。", 36, 3003480, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（在这种情况下还开玩笑……）", 56, 0, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face1#刚才发生了什么事……啊！看那边，#h0#！", 36, 3003480, true, true)
                            } else {
                                if (status === b++) {
                                    cm.setInGameDirectionMode(true, false, true);
                                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                    cm.setStandAloneMode(true);
                                    cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 1129, -50)
                                } else {
                                    if (status === b++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === b++) {
                                            cm.monadForceMove("after", 0, 0);
                                            cm.monadForceMove("exist", 1, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1300)
                                        } else {
                                            if (status === b++) {
                                                cm.monadForceMove("exist", 0, 0);
                                                cm.monadForceMove("exist2", 1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("特鲁埃博……正在消失？", 57, 0, false, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face1#她离开这里之后，影响力变弱了！因为维持的力量降低了，所以正在变回原来的样子！", 37, 3003480, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("要是变回珊瑚林，塔纳的痕迹不也会一起消失吗？", 57, 0, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face1#问题就是这个。快点回特鲁埃博外围地区去吧！", 37, 3003480, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.playerMessage(5, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
                                                                                        cm.dispose();
                                                                                        var a = cm.getEventManager("莫拉斯_剧情_战斗5");
                                                                                        a.startInstance(cm.getPlayer(), cm.getMap());
                                                                                        cm.setStandAloneMode(false);
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