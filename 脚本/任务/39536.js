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
            cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（我完全没必要干涉这场无需我插手的斗争，\r\n不过我的心已经向拯救村庄这一方倾斜。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这个事件确实也是因我而起，\r\n由我来最终处理也才能让我心安，不过……额……）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（去，不去，去，不去，该怎么办呢，哎，不管了。\r\n这种时候就交给命运好了，好吧，就这么跟法师说吧。）", 36, 3001674 + cm.getPlayer().getGender())
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（我已经考虑得够多了，就算再绞尽脑汁也没办法做出决定，\r\n现在一切就交给天意吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(39536, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39536.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 106, 32);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 200, 18)
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
                            cm.sendNormalTalk_Bottom("#face11#好吧，我决定了。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你愿意帮我吗？", 36, 3001655, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face10#这……就交给命运吧，把赌注全部押上。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这家伙……你到底知不知道现在不是开玩笑的时候？", 36, 3001651, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#我没有开玩笑，是真心的。\r\n既然实在没法定下来，那就只能交给运气了。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#要是我赢了，就不帮忙，要是法师赢了，就由我这个道士出马，\r\n如何，要比试比试吗？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#如果这是最后的机会……我愿意一试。", 36, 3001655, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#好，那就走咯。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/yaba1", 100);
                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（捡起地上的石头，左右交替换位，\r\n法师的脑袋来回晃动着，追随着石头。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#来，石头在哪只手里？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#哦……所以说……", 36, 3001655, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#不是左手吗？", 36, 3001655, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（慢慢摊开左手给对方看了看，手上空无一物，\r\n见此情景，法师耷拉着肩膀。）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……输掉了呢。", 36, 3001655, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#……重来。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#什么……？", 36, 3001655, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1500, 6000, 200, -501)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face5#胜负尚未决出，你难道不知道三局两胜吗？", 37, 3001674 + cm.getPlayer().getGender(), false, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 4000, 2);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#是！", 37, 3001655, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face10#那就再来一次！这次可要瞧好了！", 37, 3001674 + cm.getPlayer().getGender(), true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/yaba2", 100);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这一次一定要哦！", 37, 3001655, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#就这样，我来回交替了好几次石头。", 0)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#准确来说这是法师的第29次胜利。", 0)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#搞不好结果已经确定。", 0)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n要是就此离开，我估计……", 0)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#看样子是没办法安心睡个好觉了。", 0)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#怕是连香浓的泡饭味也感觉不到了。", 0)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n因为我已不再是从前的我了。", 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我明白需要帮助的人的那种迫切的心情。", 0)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我也很明白帮助者的心态。", 0)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n总不能视若无睹啊。", 0)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#好吧，区区这点事有何难，就算是荆棘路，也要走它一遭。", 1)
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
                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                cm.warp(993160114, 0, false)
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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