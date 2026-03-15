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
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -257, 75);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -45, -52)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300)
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
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -45, 70)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没错，就是这里，小鬼，\r\n现在你要做的就是把我从这块岩石里拉出来。", 37, 3001676, false, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/1", 100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#那就给你这个荣幸，让卑贱的你亲眼目睹我的复活，\r\n赶紧过来将这符咒……", 37, 3001676, true, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/2", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face12#我不要。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/3", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你来不是为了放我出来吗？", 37, 3001676, false, true);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/4", 100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#我原以为是有位老人身处困境才会前来，本想发挥一下书中看到的\r\n侠义心肠……这也就算了，你凭什么一直对我如此无礼！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/5", 100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#真是放肆无礼……说起我是谁……", 37, 3001676, true, true);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/6", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face11#要是早知道是怪物，我就不会来了，真是白跑一趟。\r\n既然你这么厉害，那什么，就自己想法子逃出去吧，告辞。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/7", 100)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#等，等一下……总该听人把话说完吧！", 37, 3001676, false, true);
                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/8", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face11#随你的便好了。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/9", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#我可不会白让你帮忙，只要你能帮我取出来，我一定会报恩的。", 37, 3001676, true, true);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face10#谁知道进茅厕的时候和出来的时候一不一样？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#你到底想要什么，小老虎，任何人都至少会有一个心愿。", 37, 3001676, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face7#……心愿？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没……没错，就是心愿，你尽管说吧，\r\n只要是我力所能及，不管多少我都可以帮你实现。", 37, 3001676, true, true);
                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face7#……不管多少？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那，那你也能让我有能力施展道术吗？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#道术？", 37, 3001676, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没错，是道术，别让我再说第二遍。\r\n到底能做不能做？可以还是不可以，你只管说一句。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那还用说！", 37, 3001676, true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face7#不知为何，让人有点感兴趣了呢……\r\n这些先不提了，话说要想解除那个什么封印，到底要怎么做？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（貌似只要将岩石上的符咒哗啦一声撕掉就可以解除封印了，\r\n唔……事情当真有这么简单吗？）", 37, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#知道了，给我点时间考虑一下吧。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face5#……那家伙言之凿凿，佯装天真，可我却一点都不想听他说，\r\n毕竟师父曾经教导过，天底下没有免费的午餐。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#不过是撕掉区区一张符咒，居然就能施展道术了，不可思议！\r\n那当初砍木头砍到手指甲断裂的我算什么？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.askAcceptDecline_Bottom("#face2#可恶的家伙，居然把我当冤大头看！一定是不知道从哪儿冒出来的小怪。\r\n我虎影就叫你尝尝人生的苦味！", 37, 3001674 + cm.getPlayer().getGender());
                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/B-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face10##fc0xFFbfbfbf#（就用《太乙真人传》21卷封印猪獾怪篇中出现的手法吧，\r\n呵呵……这个小怪，一定会很火大。）", 37, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.forceStartQuest(39512, "");
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39512.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(993160126, 0, false);
            cm.dispose()
        }
    }
};