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
            cm.sendNormalTalk_Bottom("#face0#虽然威力不敢保证……但我想到了一个会嘭嘭爆炸的东西。\r\n过去村里举办节日的时候,曾经用它制作过烟花。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那时使用的材料……让我想想……啊,对了,易燃的木柴和火石……\r\n都是在附近可以找到的东西。", 36, 1013350, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在之前那些森林虫身上应该能找到那两样东西。\r\n就是木森林虫和石森林虫。", 36, 1013350, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#请你从森林虫身上搜集#b#i4036529# #t4036529##k和#b#i4036530# #t4036530##k各#b5个#k。\r\n哪里能找到森林虫,你应该已经知道了。", 36, 1013350, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(35920, "");
                            cm.OnStartNavigation(100051033, 0, "", 34920);
                            cm.dispose();
                            cm.warp(100051033, 3, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35920.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setAmbience("Ambience.img/valley", 200, 60);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, 0, 12800, -11520)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.Hidden_background("0", 1, 1, 0, 0);
                cm.Hidden_background("1", 1, 0, 0, 0);
                cm.Hidden_background("boom", 1, 0, 0, 0);
                cm.npc_ChangeController(1013350, "oid=858398", -900, -180, 8, -950, -850, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=858398", "summon", 0, 0);
                cm.sendNormalTalk_Bottom("#face0#好了！炸药做好了,勇士。来,拿着。", 37, 1013350, false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#好,放好之后,就快撤吧。一会儿点上火之后,就会爆炸。", 37, 1013358, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#是,勇士！", 37, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                            } else {
                                if (status === a++) {
                                    cm.playSoundEffDirectly("Ambience.img/valley");
                                    cm.Hidden_background("boom", 1, 1, 0, 0);
                                    cm.onSetMapTagedObjectVisible(1, "boom", 512);
                                    cm.onSetMapTagedObjectVisible(1, "boom", 0);
                                    cm.Hidden_background("0", 1, 0, 0, 0);
                                    cm.Hidden_background("1", 1, 1, 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/pathfinder/rock", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                    } else {
                                        if (status === a++) {
                                            cm.Hidden_background("boom", 1, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#……成功了吗？", 37, 1013358, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, 0, -140800, -11265)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(512000, 0, 384000, 512000, -153600, 255)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_SetForceMove("oid=858398", 1, 140, 180);
                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 120);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(256000, 0, 384000, 256000, -102400, 10495)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#啊……在那里,勇士！最后一块罗盘碎片！", 37, 1013350, false, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#三个罗盘碎片全都找到啦。\r\n现在回到高尔根家去吧,嘿嘿。", 37, 1013350, false, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3##b(罗盘碎片顺利搞定。\r\n前两个还比较容易,最后一个要不是有那个孩子,估计会很难。)#k", 37, 1013358, true, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#还是帮了不少……", 37, 1013358, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#什么,勇士？", 37, 1013350, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face6#没什么。快走吧。", 37, 1013358, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#嗯……明明听你好像说了什么……\r\n不,没什么。快走吧。到高尔根家去吧～！", 37, 1013350, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 256000, -256, -129, -129)
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
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.forceCompleteQuest(35920);
                                                                                                                                        cm.gainExp(2727);
                                                                                                                                        cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                                                                        cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h1;19=h0");
                                                                                                                                        cm.gainItem(4036529, -5);
                                                                                                                                        cm.gainItem(4036530, -5);
                                                                                                                                        cm.npc_LeaveField("oid=858398");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(100051030, 1, false)
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
};