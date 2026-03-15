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
            cm.sendNormalTalk("话说回来，那海盗该怎么办呢？", 0, 9390243, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("海盗？啊……普赛依！！", 2, 9390243, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("普赛依那家伙在哪？因为深海巨妖的出现我都没心思顾及他了。", 4, 9390235, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("像老鼠一样悄悄地逃跑了，往那边去了。", 0, 9390243, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("怎么搞的，什么时候跑那么远去了！！赶紧去追吧！！", 4, 9390235, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那是不太可能。用商船追海盗船那是不可能的。", 2, 9390243, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("就这样失之交臂了吗……几乎就要抓到他了。切。", 4, 9390235, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("好像该轮到我登场的时候了吧。怎么样……要我帮忙吗？", 0, 9390243)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(17647, "");
                                            cm.sendNormalTalk_Bottom("你打算怎么办呢？你不会是打算游泳追过去吧", 56, 9390243, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("怎么会有这么低俗的人啊。", 32, 9390243, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("什么，你说什么……(这女人做什么都说是低俗……)", 56, 9390243, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("怎么办呢？要不要我出马。当然你得给我适当的报酬。", 32, 9390243, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("呃嗯……好吧，就拜托你了。", 36, 9390235, true, true)
                                                        } else {
                                                            if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17647.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你到时候可不能反悔哦。好吧，那就退后吧。不想一起被卷走的话。", 32, 9390243, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, true, true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.setStandAloneMode(true);
                cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/Cut3_1");
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ScreenMsg("Map/EffectBT.img/dawnveil1/Cut3_2");
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.setStandAloneMode(false);
                        cm.sendNormalTalk_Bottom("………………。", 57, 9390243, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("………………。", 37, 9390235, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("还活着吗……", 57, 9390243, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("可，可能……恐怕不行了吧。", 37, 9390235, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不知怎么的有些同情他。", 57, 9390243, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你，报酬可不能少了我的啊。", 33, 9390243, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17647);
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
};