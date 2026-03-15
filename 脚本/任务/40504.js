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
            cm.sendNormalTalk("如#p2460000#所说，叛徒是拥有蜘蛛之人。问题是蜘蛛被放在了哪里呢……", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b手腕#k。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……手腕？", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face11##p2450000#和#p2460000#……他们俩手腕上都有着#r蜘蛛纹身#k。", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗？他让自己的手下都纹上了蜘蛛纹身吗？有这种可能？我们先确认下神官们的手腕吧。", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(40504, "");
                                cm.updateInfoQuest(40514, "");
                                cm.forceStartQuest(40504, "");
                                cm.dispose();
                                cm.warp(326090210, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40504.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(神官们的手腕都看过了吗？他们似乎看我们的眼神很奇怪，但是……结果怎么样？)", 33, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(我看的神官中，没有人手腕上有蜘蛛纹身。#p2400006# 你呢？)", 33, 2400005, false, true);
                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/everybodywrist/0", 1, 1, 1, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(没有……蜘蛛纹身。)", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/everybodywrist/0", 1, 0, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(……纹身不是在手腕上，而是在其他地方吗？或者……这只是威尔和#p2460000#的离间计？他不像是会使用这种立马会被识破的计谋的人。)", 33, 2400005, false, true);
                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(你为什么那样看着脚底下？)", 33, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b(你踩到什么了。)", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b(占卜器……？应该是#p2400008#掉的。)", 41, 2400006, false, true);
                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/dosing/0", 1, 1, 1, 0, 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(啊，是刚刚看他手腕的时候，不小心掉的吗？)", 33, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#p2400008#！你的占卜器掉了！", 33, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/dosing/0", 1, 0, 0, 0, 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("？！等下！我自己来捡！请不要帮我捡！", 33, 2400008, false, true);
                                                                    cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("没必要跑到这里。我来帮你捡。……这是……？", 33, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm33.img/ShadowKnight", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 1, 1, 0, 0)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face7#……！", 41, 2400006, false, true);
                                                                                cm.effect_REPEAT("Effect/Direction13.img/effect/zero/spidermark/0", 1, 1, 1, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face7# 这蜘蛛纹样是……难道……#p2400008#你就是威尔所说的叛徒吗？！", 33, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        cm.effect_REPEAT("Effect/Direction13.img/effect/zero/spidermark/0", 1, 0, 0, 0, 0)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("#face1#嗯？你说什么叛徒，那是什么意思？你突然要看手腕，现在又说这么奇怪的话……#p2400008#不可能是叛徒。", 33, 2400007, false, true);
                                                                                            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/base/0", 1, 0, 0, 0, 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("#face0#…………", 33, 2400008, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("#face1##p2400008#？呀，#p2400008#。你说句话啊。你什么都不说，气氛才这么冷的啊。哈哈……", 33, 2400007, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("#face0#……#p2400008# 神官。我不认为#p2400005#说了毫无意义的话。……究竟是怎么回事？你说清楚。", 33, 2400000, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("#face0#…………", 33, 2400008, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("#face1#……呀，你为什么不回答？说什么叛徒……到底是什么意思啊？你……你背叛了#p2400005#和 #p2400006#？我问你是不是背叛了我们！", 33, 2400007, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("#face1#……我……没错。我是背叛了两位。但……那是……", 33, 2400008, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.forceCompleteQuest(40504);
                                                                                                                        cm.forceCompleteQuest(40952);
                                                                                                                        cm.sendNormalTalk("#face7##p2400008#！", 41, 2400006, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("#face1##p2400008#竟是叛徒……这到底是怎么回事？他去哪了啊？", 33, 2400007, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("#face0##p2400005#……", 33, 2400000, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("#face11#…………", 33, 2400005, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.gainExp(47901000);
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(320000000, 4, false);
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
};