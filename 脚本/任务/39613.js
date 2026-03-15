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
            cm.sendNormalTalk_Bottom("#face0#我们就从布鲁说的那个秘密出入口下手。\r\n眼下到处都戒备森严，除了那里之外，没有其他可以悄悄潜入的办法。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#据说那出入口与广场附近的窨井相连。\r\n之前从没人成功过，你们真要从那里进去吗？", 36, 3001962, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#正因为没人成功过，所以更值得试试。\r\n伯爵家的那帮人也会因此放松警惕的，不是吗？", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#宅邸那边，就由我和阿黛尔，布乌一起去。\r\n布鲁和拉迪，我有另外的事情要拜托你们。", 36, 3001952, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年为了以防万一，给他们二人做了嘱咐。\r\n……没想到他在这种时候竟考虑得格外周密。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#包在我们身上！", 36, 3001962, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#是，大哥！", 36, 3001963, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face0#如果画作被转移到其他地方，可不好办，我们快走吧。\r\n阿黛尔，布乌，你们愿意跟随我吗？\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#好，那我们这就前往广场。\r\n布乌，这次任务你也一起去，快起来！", 36, 3001952, false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#布，布乌？", 36, 3001960, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(39613, "");
                                                    cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=1");
                                                    cm.updateInfoQuest(39660, "00=h1;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                    cm.updateInfoQuest(39660, "00=h1;01=h0;10=h0;02=h1;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h1;07=h0;09=h0;19=h0;37=f;47=h0");
                                                    cm.dispose();
                                                    cm.warp(410000310, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39613.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    status++;
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
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我使劲拉了一下，入口没有打开。\r\n看来需要用到特别的方法。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face6#啊，这里用小字刻着段话。\r\n会不会是用来开启入口的暗号？", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……我会不惜一切地守护你，直至灵魂消逝。\r\n高洁的剑之轨迹，是多么壮美啊？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#骑士，骑士吗……难道是指广场上的骑士雕像？\r\n如果说是那喷泉运转的时间……已经过了啊！？", 36, 3001952, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(骑士的盟誓苏醒之时……单纯是让等待\r\n时机的意思吗？将这个转动一下的话……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/lock", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face6#哦，入口打开了！五点整……纹章表示的\r\n原来是这个意思。你真了不起，阿黛尔！", 36, 3001952, false, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#咘！", 36, 3001960, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face6#这地方与宅邸里的某处连通对吧……\r\n……好想知道会通向哪里！我们快点进去吧，我走前面！", 36, 3001952, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_Hero9(0, 1000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                            cm.fieldEffect_Hero9(100, 500);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
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
                                                                                                cm.warp(993162019, 0, false);
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            }
        }
    }
};