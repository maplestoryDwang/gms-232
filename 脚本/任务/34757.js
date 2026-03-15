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
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -26, -62);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 175, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face15#哈哈！我不是说了吗！我是狐神任命的尖耳守备队长。对我来说没有什么不可能的事！", 37, 3002110, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 370, -130)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
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
                                                                            cm.sendNormalTalk_Bottom("这个声音是……？", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face12#难道……乌云已经到了？", 37, 3002110, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                } else {
                                                                                    if (status === a++) {
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
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.userSetFieldFloating(410000118, 3, 3, 10);
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
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("呃啊！树！？", 57, 0, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#不，不！", 37, 3002110, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                        cm.forceCompleteQuest(34768);
                                                                                                                                                                        cm.forceStartQuest(34769, "");
                                                                                                                                                                        cm.Hidden_background("burn_tree", 1, 1, 0, 0);
                                                                                                                                                                        cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h1;24=h0;25=h0;19=B;29=h0");
                                                                                                                                                                        cm.setAmbience("Ambience.img/heavyrain", 200, 60);
                                                                                                                                                                        cm.userSetFieldFloating(410000118, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 100, -400)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, 100, -70)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#作战……竟然失败了……", 37, 3002110, false, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("差点就被闪电劈中了！多亏大树救了我一命。", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("再这样下去，村子也许会被淹掉……", 57, 0, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.playSoundEffDirectly("Ambience.img/heavyrain");
                                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm45.img/Time Is Gold", 0, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(500, 1750, 500, 100, -50)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#淹掉！？我们马上回村子……让村民们……", 37, 3002110, false, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 100, -30)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face11#对了！就算村子被淹掉，只要躲到高处就行了！快走吧！", 37, 3002110, false, true)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h0");
                                                                                                                                                                                                                                    cm.updateInfoQuest(34770, "20=h0;21=h0;22=h0;23=h0;24=h1;25=h0;19=B;29=h0");
                                                                                                                                                                                                                                    cm.forceStartQuest(34757, "");
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("啊，怎么又走掉了？", 57, 0, true, true)
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
                                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                            cm.OnStartNavigation(410000110, 0, "west00", 0);
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