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
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk("老师！！！", 5, 1013442, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("老师……", 5, 1013440, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……。", 5, 1013441, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("梅尔奇！巴尔特！凯斯帕！太好了！你们都没事啊！！", 5, 1013446, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("老师，呜呜呜～", 5, 1013442, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这封信是怎么回事？你们为什么觉得老师抛弃了你们呢？老师怎么会那么做呢？", 5, 1013446, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那个……是巴尔特哥哥听到的……。（抽泣）说老师马上要结婚了……。", 5, 1013442, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那，那不明摆着吗！……结婚之后，她就不会再管我们了！", 5, 1013441, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你说什么？", 5, 1013446, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你会辞职，然后走得远远的……大人们说的话我都听到了！", 5, 1013441, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("老师……那是在骗人吧？对吧？", 5, 1013442, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……", 5, 1013446, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……到底是谁说的？", 5, 1013446, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("嗯？", 5, 1013441, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                                        cm.sendNormalTalk("#e#fs14#那种傻话到底是谁说的？！！", 5, 1013446, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#fs14##e所以，你们就是因为这个而离家出走的吗？！\r\n所以，你们就跑到那么危险的地方去？！！", 5, 1013446, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("哎呀！！来，来了！", 5, 1013440, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("要，要挨揍了！", 5, 1013441, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("看吧，哥哥们！我就说应该乖乖待着的……", 5, 1013442, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(400)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(400)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(400)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction22.img/effect/partemTD_scold/0", 0, 500, 0, 0, 12, 4, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("#fs12##e把手举起来！！", 5, 1013446, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(400)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("哎呀！……对不起，老师。", 5, 1013440, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("我们错了……。", 5, 1013442, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("哎呀呀呀呀，切……。", 5, 1013441, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("#e#fs12#巴尔特！！你还不反省吗？！", 5, 1013446, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("是，是！！！我，我错了！", 5, 1013441, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk("我，我，我错了……。呜呜……。", 5, 1013441, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk("哇……。", 3, 1013424, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk("你们知道老师有多担心吗？嗯？！你们怎么一天到晚都要让人担心呢……。昨天也是这样！我不是让你们别跟其他人打架吗！你们长大了到底想干嘛……。动不动就离家出走，嗯？！还不把手举好？！", 5, 1013446, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk("好……好可怕……。", 3, 1013424, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                    cm.forceStartQuest(35979, "");
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

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("真是谢谢你，#h0#。多亏了你，孩子们终于平安归来了。", 4, 1013446, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("我们先回去了。唉，回去之后，我一定要好好教训教训他们，看他们还敢不敢再乱来。", 4, 1013446, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("又，又要教训？", 4, 1013440, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("哦，拜托……。", 4, 1013441, true, true)
                    } else {
                        if (status === b++) {
                            var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                            cm.sendNormalTalk("好了，在回去之前，先谢谢" + a + "救了你们。", 4, 1013446, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("谢，谢谢……谢谢你救了我和弟弟们。", 4, 1013440, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("切，谢了。还有……嗯……。之前态度有点不好，抱歉，嘿嘿。", 4, 1013441, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("谢谢你保护了我们。", 4, 1013442, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk("没事，快回去吧。", 2, 1013424, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk("真是谢谢你，#h0#。我绝不会忘记你的大恩。", 4, 1013446, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;32=h1;13=h0;33=h1;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h0;20=h0;01=h0;21=h0;02=h0;22=h0;03=h0;23=h0;04=h0;24=h0;05=h0;25=h1;06=h0;26=h0;07=h0;27=h0;08=h0;28=h0;09=h0;29=h1");
                                                    cm.gainExp(713849);
                                                    cm.forceCompleteQuest(35979);
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
};