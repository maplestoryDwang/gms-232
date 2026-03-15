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
            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#说起来……四散在村庄周围的怪物几乎已经全部回收了，\r\n不过，貌似就只剩下了一只怪物……", 36, 3001651, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#这附近就只剩下一只了？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#但是这东西……很微妙，\r\n周围各个角落都能感受到……总之就是很微妙。", 36, 3001651, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face10#嘻嘻……难道是因为现在的样子太可爱，所以没有认出来？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#嘿，这家伙！真够无礼的！", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_skill", 100);
                                cm.sendNormalTalk_Bottom("#face4#咳咳……饕餮这个家伙……我绝不会轻饶他……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#哼！", 36, 3001651, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face3#居然打完就跑……可恶。\r\n说起来，今天说好要和#b#p3001635##k前辈见个面的，去#r#m410000200##k酒馆吧。", 36, 3001674 + cm.getPlayer().getGender())
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（唔……我原以为多亏这段时间恢复了力量，\r\n才能感知到周围的怪物，难道都是错觉吗？）", 36, 3001651, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;15=h0;33=h0;34=h0;16=h1;35=h1;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                                cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;05=h0;15=h0;33=h0;34=h0;16=h1;35=h1;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
                                                cm.forceStartQuest(39523, "");
                                                cm.OnStartNavigation(410000200, 1, "3001635", 39523);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39523.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("09", "Effect/Direction9.img/HoyoungStory/9", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#哈欠……来得可真够快的，虎影解决师。\r\n你可是个大忙人，我还以为你一去不返了呢。", 36, 3001653, false, true);
                        cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/1", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face12#发生了点骚乱，为了恢复秩序……\r\n不提了，老鼠事件怎么样了？需要我的帮忙吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                            cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/2", 100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#这段时间你可真是成长了不少啊，虎影解决师。\r\n这应该就叫青出于蓝而胜于蓝吧，哈欠……", 36, 3001653, true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/3", 100)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face7#这含糊的说辞是什么情况？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/4", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#看来还挺明显的吧，坦白说等完成这次负责的事件，\r\n我就打算不再继续解决师的工作了，我准备之后回大海看看。", 36, 3001653, true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/5", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#虽说颇有意义，可坦白说，我已经有些疲于陆地生活，\r\n我正一边放松，一边慢慢考虑未来的生活呢。", 36, 3001653, true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/6", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face11#那什么，毕竟我也不打算在此地定居……\r\n若是有机会，倒是可以一见，到那时，你可得让我也看看海啊？", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/7", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face9#今天的泡饭钱我来结，就当是离开之前\r\n互相问候了一声，我还得去接受委托，先行告辞。", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/8", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("09", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
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
                                                                    cm.forceCompleteQuest(39523);
                                                                    cm.gainExp(2108);
                                                                    cm.gainExp(311);
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
};