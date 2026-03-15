var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -616, 162);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === b++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#啊！你们回来了啊。哦……？", 37, 3003758, false, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("……我们没能找到那两个人。这里没发生什么事情吧？", 57, 0, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3003758, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("出了什么事情吗？", 57, 0, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#刚才……你们不是五个人一起去的吗？", 37, 3003760, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("嗯……？没错……大家都一起回……", 57, 0, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === b++) {
                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === b++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === b++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#明明刚才还在一起……", 37, 3003759, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#难道是落在后面了？", 37, 3003761, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("……看来谁都不知道他什么时候消失了啊。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("这么说来，修理战舰的两个人去哪儿了？", 57, 0, false, true)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 3003758, true, true)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#在你们来之前，他们叫我去拿下工具，我明明……", 37, 3003758, true, true)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊……", 37, 3003758, false, true)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#迷宫……吃人了……", 37, 3003766, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("嗯？", 57, 0, false, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#无法出去……这里……", 37, 3003766, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === b++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#他们……马上就会来……", 37, 3003766, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === b++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("无法出去……他们是谁？", 57, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === b++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === b++) {
                                                                                                                                                            cm.updateInfoQuest(35704, "MazeAlarm=3;set1=2;set2=1;set3=1");
                                                                                                                                                            cm.updateInfoQuest(35704, "MazeAlarm=3;set1=2;set2=2;set3=1");
                                                                                                                                                            cm.updateInfoQuest(35704, "MazeAlarm=3;set1=2;set2=2;set3=2");
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === b++) {
                                                                                                                                                                cm.setAmbience("Ambience.img/flare_ready", 100, 60);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === b++) {
                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === b++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("请大家进入战斗状态！有人袭击！你们两位请守在受伤的那位身边！", 57, 0, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === b++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#是！", 37, 3003758, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === b++) {
                                                                                                                                                                                cm.playSoundEffDirectly("Ambience.img/flare_ready");
                                                                                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                cm.askAcceptDecline_Bottom("现在立刻进入战斗！\r\n#r(同意后将立刻移动。)#k", 57, 3003787)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === b++) {
                                                                                                                                                                                                    cm.playerMessage(5, "必须要消灭所有发起攻击的怪物。");
                                                                                                                                                                                                    var a = cm.getEventManager("痛苦迷宫_战斗1");
                                                                                                                                                                                                    a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35707.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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