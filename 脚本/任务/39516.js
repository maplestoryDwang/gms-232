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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -106, 212);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -20, 220)
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
                            cm.sendNormalTalk_Bottom("#face5#您有什么事情吗，客人？", 36, 3001652, false, true);
                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/3", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face12#我可不是客人或小孩，我是来当解决师的。\r\n事件在哪儿呢？现在让我去处理也没问题。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/4", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face8#不要叫我小鬼。", 36, 3001652, true, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/5", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face7#嗯？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/6", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face4#我实在是忍受不了你取笑我个子矮，\r\n如果实在想要叫我小鬼，不如就拿钱来。", 36, 3001652, true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/7", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#所以……以后请叫我卡琳。", 36, 3001652, true, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/8", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face11#哼……那什么，我知道了，\r\n都无所谓啦，只管告诉我怎样才能成为解决师吧，卡琳。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/9", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#啊……那……请问您尊姓大名，又来自何处呢，这位申请者？", 36, 3001652, true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face11#我的名字叫虎影，之前差不多住在那座山的那边……现在下山来了。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face4#唔……这名字闻所未闻呢……\r\n我就写上……来自穷乡僻壤好了，嘻嘻嘻。", 36, 3001652, true, true);
                                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face7#你，你说什么？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#噗！", 36, 3001651, true, true);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#请问有什么能证明你实力的凭证吗？", 36, 3001652, true, true);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face7#诶，这是什么意思？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#给我看看能够证明你有多厉害的证明书……\r\n又或者是战利品之类的东西就好。", 36, 3001652, true, true);
                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face7#我刚打算当个解决师呢，那样真的有可能吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#……记录一下是新手吧。", 36, 3001652, true, true);
                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#！？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#啊……很抱歉，你现在怕是还不能登记成为解决师，\r\n你看起来还没有强大到足以解决事件，嘻嘻。", 36, 3001652, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#所谓的证明，不是现在开始做的吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#很可惜，但这是我们情报商人的规定，\r\n要么你就在村里扬名后再来找我……", 36, 3001652, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#当然也可以稍微加点辛苦费，大概……有个1亿金币？", 36, 3001652, true, true);
                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face4#切……我哪儿来的钱。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#先给我安排委托吧，在赚够1亿金币之前我不收委托金，\r\n怎么样，小孩？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face2#你忘了规定就是规定吗？", 36, 3001652, true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#到了这个地步，我开始觉得你这家伙有几分可怜了。", 36, 3001651, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（居然只攻击事实，卑鄙的小鬼……\r\n每一句话都狠狠地砸在我的心口上啊。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/29", 100)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（不过如果就此退却，就不是我虎影了。没几斤几两也敢硬刚，\r\n不行也要装作能行，虚张声势地运足气之后再尝试对话吧。）", 36, 3001674 + cm.getPlayer().getGender());
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-1/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/30", 100)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（与其将对方想要的牌都亮出来，倒不如不动声色地让对方嗅到味道，届时对方自然会上钩的。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.forceStartQuest(39516, "");
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
                                                                                                                                                                cm.eventSKill(0);
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
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39516.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -106, 212);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -20, 220)
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
                            cm.sendNormalTalk_Bottom("#face11#好吧，这样算是合格了，我突然开始相信\r\n这地方很挑剔，甚至只处理那种高级情报。", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/1", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face5#合格……你这是什么意思啊？", 36, 3001652, true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/2", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face10#我的意思是给你个机会，让你成为我虎影的助手。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/3", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face5#什么？", 36, 3001652, true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/4", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face10#你别看我这样，我曾经可是小有名气的道士，\r\n只不过出于个人原因，待在了小山村里，这才被世间遗忘了。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/5", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face9#我与世隔绝太久，觉得无聊之际，\r\n便想下山做点有意义的事……没想到人世间早已变得如此艰难。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/6", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face5#可是世界在召唤我这个道士，我总不能袖手旁观吧？\r\n我当然要心甘情愿地奉献自己，为这个混乱的世界匡扶正义。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/7", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face5#你这么说也……", 36, 3001652, true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/8", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askMenu_Bottom("#face5##fc0xFFbfbfbf#（就是现在，小鬼开始动摇了。\r\n不必将对方想要的牌都亮出来，试着不动声色地让对方嗅到味道。）\r\n\r\n#b#L0#展示师父的扇子#l　#L1#用道术变幻出金银财宝#l", 37, 3001674 + cm.getPlayer().getGender())
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face5#哎哟喂，这里怎么这么热呢……", 36, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/9", 100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我故意拿出师父的扇子摇了摇，\r\n这东西可是他最为看重的宝贝，搞不好价值不菲。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（一切都得靠你了，扇子，可一定要糊弄过去啊……）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#唔……", 36, 3001652, true, true);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face5#嗯！？", 36, 3001652, true, true);
                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#不是，那把扇子是……", 36, 3001652, true, true);
                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face11#哈哈……你还是挺有眼光的嘛？要说这把扇子呢，\r\n是我师父从前用过的……我可是他的弟子。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face10#所以我的意思是，我当然也是个相当厉害的道士……", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face7#我，我会破例帮你登记的！", 36, 3001652, true, true);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face7#我话还没说完呢……态度居然说变就变吗！？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face7#如此出色的人才怎么能拒绝，\r\n既然有这种扇子，为什么不早点拿出来给我看呢？", 36, 3001652, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#刚刚提到的1亿金币辛苦费会记上的。", 36, 3001652, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#切……知道了。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#福从天降啊~紫气东来~", 36, 3001652, true, true);
                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（真是在笑眯眯地盖章呢，\r\n说什么规定就是规定，小不点一个简直钻钱眼里了。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（虽然一开始就欠了一屁股的债，但也没辙了，\r\n毕竟打从一开始，钱就不是目的。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#不管是黑猫白猫，能抓到老鼠就是好猫呗。", 36, 3001651, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#这可是我们商店送给你的特。别。大。礼~！\r\n这项技能可以立刻回到村庄，紧要关头记得用哦。", 36, 3001652, true, true);
                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.teachSkill(160001074, 0, -1);
                                                                                                                                        cm.teachSkill(160001074, 1, 1);
                                                                                                                                        cm.forceCompleteQuest(39516);
                                                                                                                                        cm.gainExp(751);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#已完成登记，这就给您安排事件委托。\r\n我会帮您找到合适的委托，请稍等片刻，嘻嘻嘻。", 36, 3001652, true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/D-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100)
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
                                                                                                                                                            cm.eventSKill(0);
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
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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