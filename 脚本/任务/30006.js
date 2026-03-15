var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了解开你的封印，必须先了解入侵者的身份。", 3, 1064001, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是他们已经全部走掉了。", 1, 1064001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("也许会留下什么线索，让我们找找看吧。对于那边的四扇门，你知道些什么吗？", 3, 1064001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("把我封印起来的那些人制造了那些门之后就走了。我试着到门外去，但是因为封印的原因，没办法出去。", 1, 1064001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那些门的外面会不会有什么线索呢？到门外面去……嗯？这是怎么回事？", 3, 1064001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("哇，你的身体发出了白光！", 1, 1064001, true, true);
                                    cm.effect_OnUserEff("Effect/Direction11.img/effect/Aura/0")
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这到底是怎么回事？嗯，嗯？身，身体被吸进去了！", 3, 1064001, true, true);
                                        cm.effect_OnUserEff("Effect/Direction11.img/effect/Aura/0")
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                cm.effect_OnUserEff("Effect/BasicEff.img/Teleport")
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b#h0##k！！！", 1, 1064001, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(30006, "");
                                                        cm.setStandAloneMode(false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.dispose();
                                                        cm.warp(910700300, 0)
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};