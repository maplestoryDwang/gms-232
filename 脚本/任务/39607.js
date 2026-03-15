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
            cm.sendNormalTalk_Bottom("#face0#从传闻中能得到的线索就这些，\r\n我们继续去其他地方打探消息吧。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#阿黛尔，那个……你知道报纸吗？", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(少年手脚并用地给我解释了报纸的含义。\r\n他的模样看上去就像个孩子。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#(虽然大概明白了，但还想听他多讲几句。\r\n……毕竟，也挺有趣的。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face6#……这下你明白了吧？", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#噗嗤！", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face6#哦……我的语气很奇怪吗？", 36, 3001952, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#你不就是想说……在报纸上可能会有线索吗。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#别转移话题……你到底什么意思！？", 36, 3001952, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#我打个了喷嚏而已。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哼……不想说拉倒。", 36, 3001952, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#能见到你的笑脸，这就够了！", 36, 3001952, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#嘻嘻……那我们说正题……", 36, 3001952, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.askAcceptDecline_Bottom("#face0#就像我刚才说的，我们从报纸上找找线索吧。\r\n所以……麻烦你帮我收集些#b#i4036658# #t4036658##k。", 36, 3001952, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##b#i4036658# #t4036658##k可以从#r#m410000324##k的\r\n#r#o2400602##k身上找到。收集#b5张#k就差不多了。", 36, 3001952, false, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(39607, "");
                                                                            cm.OnStartNavigation(410000324, 0, "", 39607);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39607.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(把收集来的报纸交给了杰罗姆。\r\n杰罗姆仔仔细细看完内容后，开口说道。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face9#这报纸上净是些夸赞伯爵的文章。\r\n对他的不足之处，只字不提。看来报纸也不可信了。", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#布乌，布！", 36, 3001960, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#不过，我在其中发现了一处有趣的部分。\r\n阿黛尔，你有察觉到吗？", 36, 3001952, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.curNodeEventEnd(true);
                            cm.setInGameDirectionMode(true, false, false);
                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("【广告】 求购画作\r\n", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("作者：不详", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("年代：不祥", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("特征：背面刷了金漆", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("价格：100个里斯托尼亚金币\r\n", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("　　　　　　　　? 请联系里斯托尼亚11-5-6", 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
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
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.sendNormalTalk_Bottom("#face0#对，我也注意到了这则广告。\r\n没有注明姓名是一方面，内容也很不寻常。", 36, 3001952, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#广告里只说了画的背面是怎样。\r\n我推测，发布广告的人很可能不知道画的正面描绘了什么。", 36, 3001952, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#都不知道是什么画，却肯出大价钱购买，不觉得很可疑吗？\r\n还有最后令我在意的是……", 36, 3001952, true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#广告中留的地址是塞德里克从前的住址。\r\n这是坊间不知道的信息。", 36, 3001952, true, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#竟隐姓埋名地收购可疑的画作……他不是那种\r\n会偷偷开展慈善事业的人。这事肯定有猫腻。", 36, 3001952, true, true, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(39607);
                                                                                                cm.gainExp(582);
                                                                                                cm.gainExp(401);
                                                                                                cm.gainItem(4036658, -5);
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