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
            cm.sendNormalTalk_Bottom("#face0#呃……真的要走了,感觉也有点迈不动步。\r\n因为我也一次都没去过那里。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#但是不能就此放弃。\r\n既然决定了要解决问题,就必须坚持到底。", 36, 1013350, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#要是敢碍我的事,我就一个人去好了。", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#呃啊,我会努力的,绝对不会拖你的后腿！\r\n我一定要查明怪声的原因,拯救村子。快出发吧。", 36, 1013350, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(35923, "");
                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                            cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h1");
                            cm.setPartner(1, 1013350, 80002700, 0);
                            cm.OnStartNavigation(100051040, 1, "1013319", 35923);
                            cm.npc_LeaveField("oid=895");
                            cm.npc_LeaveField("oid=897");
                            cm.npc_LeaveField("oid=898");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35923.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(1013350, "oid=858710", -631, 60, 1, -681, -581, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=858710", "summon", 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1, 512000, 0, -138240, -102145)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.effect_Text(["#fn黑体##fs18#帕勒坦遗迹", ""], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_PushScaleInfo(1024000, 1, 512000, 1024000, -138240, 25855)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#看来确实是遗迹的入口。", 37, 1013358, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#呃啊……里面四通八达全都是路。好像是个非常复杂的地方。\r\n应该往哪边走呢？", 37, 1013350, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3##b(是个有很多条路的地方。之前过来的时候没有感觉。\r\n因为有祭坛钥匙的光指引方向。)#k", 37, 1013358, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##b(呼……解开诅咒的线索,是在发现遗物的那个地方吗？\r\n还是应该选择别的路呢？)#k", 37, 1013358, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#勇士,勇士……我听到了很轻的咚咚声。\r\n你不觉得跟废墟发出的声音很像吗？", 37, 1013350, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.setAmbience("Ambience.img/ruin", 200, 60);
                                                cm.sendNormalTalk_Bottom("#face6##b(集中精神听了一下。\r\n虽然非常微弱,但确实好像有什么东西在响。)#k", 37, 1013358, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b(过去看看,说不定会有什么发现。\r\n但是这么小的声音,怎么能……不,那个小孩也许可以……)#k", 37, 1013358, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你能找到这个声音的来源吗,小孩？", 37, 1013358, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#没问题。怪声我听得多了,\r\n就算是很小的声音,也会让人直起鸡皮疙瘩。", 37, 1013350, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你在前面带路。我跟在后面。", 37, 1013358, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊,你是想去发出声音的地方进行调查吗？\r\n好可怕……不过我一定会坚持下去的。请跟我来。", 37, 1013350, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(512000, 1, 256000, 512000, -30720, -12033)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_SetForceMove("oid=858710", 1, 550, 180);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 300);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129)
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
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                cm.forceCompleteQuest(35923);
                                                                                                                cm.gainExp(6858);
                                                                                                                cm.gainExp(2618);
                                                                                                                cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                                                cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h1;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                                                                                                                cm.npc_LeaveField("oid=858710");
                                                                                                                cm.dispose();
                                                                                                                cm.warp(100051041, 1, false);
                                                                                                                cm.setStandAloneMode(false);
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            }
        }
    }
};