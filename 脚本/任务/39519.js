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
            cm.sendNormalTalk_Bottom("#face0#哎哟……接下来是田地主人老朴的委托，他说近来成熟的南瓜总是频繁消失，\r\n甚至南瓜会自己滚动起来。", 36, 3001653, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#哇……真是惊人呢，这个事件听起来十分有趣。", 36, 3001653, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……那家伙蹩脚的演技好像更有趣。", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#你能前往#r#m410000220##k，消灭#r30只#k#r#o2400554##k，\r\n找到#b15个#k#b足以成为线索的战利品#k的吗？", 36, 3001653)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（南瓜就这么随意翻滚……总觉得像是怪物所为啊\r\n……你怎么看？）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#感觉比破碎的坛子要更有可能性。\r\n抓紧时间，赶紧去那片田里看看。", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(39519, "");
                                    cm.OnStartNavigation(410000220, 0, "", 39519);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39519.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#喏，这是从南瓜田里带回来的战利品，\r\n留在南瓜上的牙印……看样子应该是动物所为。", 37, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#从门牙比较大这一点来看，犯人就是老鼠，\r\n之所以会看到南瓜在晃动，搞不好就是老鼠举着南瓜而被误以为南瓜本身在动……", 37, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#哎哟哟……搞不好到处打破坛子的犯人也是老鼠，\r\n这么说来，那就都是和怪物无关的微不足道的事件了……", 37, 3001653, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face11#当然完全有可能只是觉得今年鼠灾泛滥，不当回事……\r\n不过还是应该保持怀疑的态度吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face10#因为我们是解决师。", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#哦……难怪这话说得如此讨厌呢。", 37, 3001653, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#哈欠……啊，对了，之前调查的其他事件中\r\n好像有类似事件的……是什么来着……唔……", 37, 3001653, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face7#看样子你是想起什么了吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3001653, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3001653, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face3#……果然想不起来了。", 37, 3001653, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face3#哎……我感觉自己真傻，居然还会有所期待。", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#和老鼠相关的事件就由我继续深挖下去吧……\r\n要不要来点热腾腾的泡饭？稍微干了点活，肚子就饿了呢。", 37, 3001653, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#切……把杂务全都推给别人……\r\n饭钱就由前辈你来付吧！", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#真郁闷……压根连半个怪物都看不到嘛，\r\n这得到猴年马月才能将怪物都吸收干净啊……", 37, 3001651, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.curNodeEventEnd(true);
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(true, false, true);
                                                                        cm.setStandAloneMode(true);
                                                                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
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
                                                                                            cm.warp(993160128, 0, false);
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
};