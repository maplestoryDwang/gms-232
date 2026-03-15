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
            cm.askAcceptDecline_Bottom("#face0#多亏了#b#ho##k，我们才能打开前往黑太阳的路。\r\n你能收下我们为你准备的小礼物吗？", 36, 3003656)
        } else {
            if (status === a++) {
                cm.playerMessage(5, "获得了<虚空征服者>勋章。");
                cm.playerMessage(-1, "获得了<虚空征服者>勋章。");
                cm.forceCompleteQuest(35634);
                cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;medal2=1;mPark75=1;d10=1;d582=1;d11=1;d30=1;d12=1;di9=1;d13=1;d14=1;d15=1;d16=1;d46=1;medal=1;d74=1;d48=1;d1=1;d4=1");
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#稍微整备一下，我们将再次前往黑太阳。\r\n请在那之前治疗之前战斗中的伤口。", 37, 3003651, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_Hero9(0, 2000);
                                cm.inGameDirectionEvent_AskAnswerTime(2300)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.fieldEffect_Hero9(80, 1000);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.effect_Text(["#fn黑体##fs18#几小时后"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#大事不好了！！", 37, 3003659, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#出了什么事？", 37, 3003651, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#在执行运送核心任务的过程中，核心突然发生爆炸，\r\n有个士兵掉下去失踪了……", 37, 3003659, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3003651, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("士兵？难道？！是谁？那个士兵是谁？！", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#奇，奇袭者部队下属的沃莉。", 37, 3003659, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("！！！！", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceStartQuest(35632, "");
                                                                                cm.forceCompleteQuest(35632);
                                                                                cm.finishAchievement(1228);
                                                                                cm.gainExp(85793345);
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                                                cm.dispose();
                                                                                                cm.warp(450009300, 0, false);
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
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35632.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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