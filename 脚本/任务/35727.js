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
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 680, 155)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 529, 164);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哈……哈……", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(其他人……已经……)", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#我……会在冒险岛世界消失吗？", 37, 3003771, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_Voice("Voice4.img/BM2/H1/18_2", 128);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("到底……在搞什么……", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.setAmbience("SoundEff.img/BM2/voiceBstand", 80, 100);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/19"], [0, 300, 110, 1, 0, 1, 1, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2800)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/18"], [3000, 300, 110, 1, 0, 1, 1, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯……？", 56, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("啊……光……？", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/20"], [0, 300, 110, 1, 0, 1, 1, 0]);
                                                                    cm.playSoundEffDirectly("SoundEff.img/BM2/voiceBstand");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("光在……指路吗……", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.setAmbience("SoundEff.img/BM2/voiceBstand", 80, 100);
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/19"], [0, 1030, 110, 1, 0, 1, 1, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1800)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/18"], [4000, 1030, 110, 1, 0, 1, 1, 0]);
                                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 200);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("是在指向那扇门吗……", 56, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/20"], [0, 1030, 110, 1, 0, 1, 1, 0]);
                                                                                                cm.playSoundEffDirectly("SoundEff.img/BM2/voiceBstand");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("跟着光……过去看看吧……和一动不动相比……还是做些什么比较好……", 57, 0, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
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
                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                        cm.forceStartQuest(35727, "");
                                                                                                                        cm.OnStartNavigation(450011320, 0, "inMaze", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35727.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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