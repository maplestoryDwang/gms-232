var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -300, -143)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#哈哈哈，今天的作战非常成功！", 37, 3002110, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（不能再帮他做恶作剧了……）", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#我～最喜欢在#b高处#k玩～\r\n因为可以看到很远很远的地方。", 37, 3002110, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（现在差不多该跟他道别了……）", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face5#而且……感觉好像离#b狐神#k更近了～", 37, 3002110, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嗯，对了，我有话……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.monadForceMove("white", 1, 30);
                                                            cm.inGameDirectionEvent_AskAnswerTime(30)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.monadForceMove("white", 0, 30);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.monadForceMove("white", 1, 30);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.monadForceMove("white", 0, 300);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1390)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face10#哎呀！怎么回事？", 37, 3002110, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("……！", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face12#看那边！", 37, 3002110, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                        cm.sendNewEffects(12, [5000, -4000, -143, 0, 0])
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/d_cloud", 100);
                                                                                                                    cm.onNewSpecialEffect(3, 0)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/cloud/darkcloud", "animation", "", "03"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face14#巨大的乌云……！？", 37, 3002110, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("电光闪闪，看上去好像很危险……", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face14#据说只有狐狸哭的时候，村里才会下雨……", 37, 3002110, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face14#那么巨大的乌云……", 37, 3002110, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("好像马上就要下一场暴雨。", 57, 0, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face14##b#h0##k！别在那里傻站着！快回到村里去，把这个消息告诉所有人！", 37, 3002110, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_取消复合图片动画("03", 1, 300);
                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.dispose();
                                                                                                                                                            cm.warp(940204104, 0);
                                                                                                                                                            cm.setInGameDirectionMode(false, false, false)
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
            cm.sendNormalTalk_Bottom("#b糟了！#k村里也许会下暴雨！必须让所有人躲起来！", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#哈，这些家伙！又想搞恶作剧！快走开，走开！", 36, 3002111, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face11#真的！相信我！我亲眼见到了#b黑黢黢的乌云#k！", 36, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#啧啧，玛鲁，你知道自己干过多少次这种事情吗？\r\n我们不会再上当了。", 36, 3002111, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b（好像再说也不会相信。去跟其他人说说看吧。）#k", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(34750, "NpcSpeech=30020161");
                                cm.OnStartNavigation(940204104, 1, "3002017", 0);
                                cm.npc_LeaveField("oid=258453");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b（说马上就要下大雨，村子也许会有危险。）#k", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#什么？乌云？暴雨？让我看看……在哪里啊……\r\n一点风声都没听见……", 36, 3002112, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……啊哈，又被#b玛鲁那家伙给骗了#k！可恶的家伙……\r\n尽喜欢给大人捣乱！到一边去玩！", 36, 3002112, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（这次好像又失败了。去跟其他人说说看吧。）#k", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(34750, "NpcSpeech=30020161/30020172");
                            cm.OnStartNavigation(940204104, 1, "3002018", 0);
                            cm.npc_LeaveField("oid=258453");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.setStandAloneMode(true);
            cm.sendNormalTalk_Bottom("#b（说马上就要下大雨，村子也许会有危险。）#k", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#哎呀，这该怎么办？要是村子被淹了就糟了！？\r\n必须马上告诉其他人！", 37, 3002113, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#哦，终于……达比大妈！终于相信了我们！", 37, 3002110, true, true)
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(3002016, "oid=35339065", 574, 19, 290, 524, 624, 1, false, 2000, false);
                        cm.npc_SetSpecialAction("oid=35339065", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#哎呀！捣蛋鬼们怎么还在这里！快走开！", 37, 3002111, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#这，这次是真的。请相信我！达比大妈！", 37, 3002110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#哈，是恶作剧吗？吓了我一跳……\r\n竟然骗我说洪水要来了，可恶！", 37, 3002113, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField("oid=35339065");
                                        cm.npc_LeaveField("oid=35339065");
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
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.updateInfoQuest(34750, "NpcSpeech=30020161/30020172/30020183");
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
            cm.sendNormalTalk_Bottom("#face4#完蛋了。没人相信我们的话。", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么办？好像没多少时间了……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(29002859);
                    cm.forceCompleteQuest(34750);
                    cm.updateInfoQuest(34750, "NpcSpeech=30020161/30020172/30020183;exp=1");
                    cm.dispose()
                }
            }
        }
    }
};