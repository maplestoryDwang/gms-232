var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(250)
        } else {
            if (status === a++) {
                cm.sendNewEffects(17, [2000, 1000, 2000, -1860, 390])
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(250)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=201365"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_NormalSpeechBalloon("可恶，又擅自做决定！我受够他了！！", 1, 0, 0, 2000, 9400629, cm.getPlayer().getId())
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=201369"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                            cm.effect_NormalSpeechBalloon("这次也不是可汗自己的决定，再说了，也就那个方法可行……", 1, 0, 0, 2000, 9400617, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                cm.effect_NormalSpeechBalloon("我只是计较这次事情吗？他最近一直都这副德行！", 1, 0, 0, 2000, 9400629, cm.getPlayer().getId())
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=201369"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    cm.effect_NormalSpeechBalloon("……可汗向来就很有决断力。", 1, 0, 0, 2000, 9400617, cm.getPlayer().getId())
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=201365"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_NormalSpeechBalloon("哎呦喂，你这糊涂虫，决断和专断能一样吗？", 1, 0, 0, 2000, 9400629, cm.getPlayer().getId())
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b你准备好了吗？有没有需要我帮忙的。", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=201365"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=201369"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("嗯……也没什么好带的。剩下的东西……你都看到了……", 37, 9400617, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嘁，可汗干嘛去了，就让你一个人跑来跑去的？", 37, 9400596, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b可汗村长在修理用来搭载负伤者的大篷车。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("不是可汗，是佩图尔在修吧。", 37, 9400596, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=201369"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.sendNormalTalk_Bottom("适可而止吧，好歹他是我们的村长。", 37, 9400617, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……指不定他能当到哪天呢？", 37, 9400596, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b（……村民们对可汗村长抱有很多怨言啊……）", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("勇士，我们这儿不需要帮忙，你去看看其他乡亲吧。", 37, 9400617, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNewEffects(19, [0])
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.forceCompleteQuest(64027);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};