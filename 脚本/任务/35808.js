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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 436, -20);
            cm.inGameDirectionEvent_SetHideEffect(1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, -10, 40, -6)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(3003753, "oid=2182019", 20, -20, 10, -30, 70, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=2182019", "summon", 0, 0);
                cm.npc_ChangeController(3003754, "oid=2182020", 100, -20, 10, 50, 150, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=2182020", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然很不容易，但是拜托你了。", 37, 3003751, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#明白了。我会试试看。", 37, 3003753, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#唉……没办法。", 37, 3003754, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.Npc_Fadeout("oid=2182019", 0, 300);
                                        cm.Npc_Fadeout("oid=2182020", 0, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=2182019");
                                            cm.npc_LeaveField("oid=2182019");
                                            cm.npc_LeaveField("oid=2182020");
                                            cm.npc_LeaveField("oid=2182020");
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3003751, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#只能背水一战……\r\n承受如此巨大的风险了吗……", 37, 3003751, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯？！", 37, 3003751, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                            cm.inGameDirectionEvent_ForcedFlip10(1, 350);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你回来啦，#h0#。", 37, 3003751, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("请跟我说说#r路#k的事情吧。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003751, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我……一直在拼拼图。", 37, 3003751, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.effect_Voice("Voice4.img/BM3/nine/0", 128);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#对在神秘河、格兰蒂斯、玛加提亚，以及其他地区获得的情报进行分析，仔细回顾黑魔法师的所作所为。", 37, 3003751, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.effect_Voice("Voice4.img/BM3/nine/5", 128);
                                                                                            cm.sendNormalTalk_Bottom("#face0#最近拼图才一块块拼了起来，开始勾勒出大致的轮廓。\r\n然后某个东西开始慢慢浮现。", 37, 3003751, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/7", 128);
                                                                                                cm.fieldEffect_ProcessOnOffLayer("99", "Effect/Direction20.img/effect/BM3_black/0", 0, 700, 0, 0, 0, 4, 0, -1, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#那就是我们从未想到过的“某样东西”。", 37, 3003751, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.effect_Voice("Voice4.img/BM3/nine/10", 128);
                                                                                                        cm.sendNormalTalk_Bottom("那是什么？", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#让我们先从最根本的部分开始说起。", 37, 3003751, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/12", 128);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#他的理想是创造出没有超越者的新世界。", 37, 3003751, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.effect_Voice("Voice4.img/BM3/nine/13", 128);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#刚刚觉醒的黑魔法师为了实现自己的理想，必须对付三个超越者。", 37, 3003751, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.effect_Voice("Voice4.img/BM3/nine/16", 128);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#其中两个处于无法诞生出后代的状态，另一个则被吸收了。", 37, 3003751, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/19", 128);
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这比单纯消失掉要更加复杂和麻烦。", 37, 3003751, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/nine/20", 128);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#而黑魔法师自己……", 37, 3003751, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/nine/25", 128);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "Effect/Direction20.img/effect/BM2_wm/1", 0, 500, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#被世界的法则所束缚，动弹不得。", 37, 3003751, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/nine/28", 128);
                                                                                                                                                    cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("所以军团长需要的……", 57, 0, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("01", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#没错。但是……", 37, 3003751, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/nine/29", 128);
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#那些军团长只是在表面上宣誓效忠，\r\n其实每个人都有自己的打算。", 37, 3003751, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/nine/33", 128);
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#麦格纳斯，戴米安，奥尔卡，阿卡伊勒，希拉……", 37, 3003751, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/nine/34", 128);
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#如果他们知道了黑魔法师的目的，一定是最先揭竿而起的人。", 37, 3003751, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/36", 128);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#因此黑魔法师自己被束缚住了手脚，只能依靠不怎么听话的军团长来对付三个超越者。", 37, 3003751, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM3/nine/39", 128);
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#即使是在这种不利的条件下，局势却一直在向着对黑魔法师有利的一面发展。", 37, 3003751, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/nine/43", 128);
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#三个世界变成了一个，两个超越者消失了，另一个超越者最终被黑魔法师吸收。", 37, 3003751, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/46", 128);
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这让我我感到了一种深深的违和感。", 37, 3003751, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM3/nine/47", 128);
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("（确实……回想起戴米安事件……）", 57, 0, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("（想要背叛黑魔法师的戴米安，被抓住的阿丽莎，以及与之对抗的英雄们……）", 57, 0, true, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("（任何人都没有遵从黑魔法师的意志。但结果却……）", 57, 0, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#在女皇陛下的梦中，黑魔法师是这么说的。", 37, 3003751, false, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/nine/50", 128);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                                                                cm.effect_Text(["#r#fn黑体##fs26#这是注定的命运。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0])
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("注定的命运……", 57, 0, false, true)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#虽然听上去只是在表达“谁胜谁负很明显”的意思……", 37, 3003751, true, true)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM3/nine/54", 128);
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但对手是黑魔法师……我们就不能轻易忽略。", 37, 3003751, true, true)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM3/nine/57", 128);
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("那你是怎么认为的呢……？", 57, 0, true, true)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("99", "", 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003751, false, true)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#核心碎片的解读马上就要完成了。", 37, 3003751, true, true)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#汉斯会为我们将拼图的最后一块碎片拼起来。", 37, 3003751, true, true)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#反抗者1号舰请求支援！！引擎部位破损，快要支撑不住了！！", 37, 3003758, true, true)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#请你去支援反抗者的船只。", 37, 3003751, true, true)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
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
                                                                                                                                                                                                                                                                                                            cm.updateInfoQuest(35831, "60=h1;52=h1;53=h1;55=h1;65=h1;56=h1;57=h1;58=h1");
                                                                                                                                                                                                                                                                                                            cm.forceStartQuest(35808, "");
                                                                                                                                                                                                                                                                                                            cm.OnStartNavigation(450012320, 0, "east00", 0);
                                                                                                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                                                                                                            cm.warp(450012310, 1, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35808.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("这里的情况不太好吗？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#没错。眼下兵力、物资，一切都很缺乏，怪物却源源不断地涌来。", 37, 3003672, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("需要我去哪里帮忙呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#请前往右侧甲板。具体任务士兵会进行说明。", 37, 3003672, true, true)
                    } else {
                        if (status === a++) {
                            cm.spawnMobLimit(8645040, 1, 466, 6, 100);
                            cm.spawnMobLimit(8645040, 1, -880, 6, 100);
                            cm.spawnMobLimit(8645040, 1, 572, 6, 100);
                            cm.spawnMobLimit(8645040, 1, -314, 6, 100);
                            cm.spawnMobLimit(8645040, 1, 279, 6, 100);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceCompleteQuest(35808);
                            cm.gainExp(360899508);
                            cm.OnStartNavigation(450012410, 0, "east01", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};