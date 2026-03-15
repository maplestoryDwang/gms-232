var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#奇怪……为什么没有呢？", 36, 3003501, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#没有太阳到底是什么意思，你能说明一下吗？", 36, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……我也不知道。我把这个给你。可以播放记忆的法杖。", 36, 3003501, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("“播放记忆”，该怎么用呢？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这是说明书。", 36, 3003501, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face3#使用方法1：到法杖指示的方向（凝聚着记忆的地方）去。\r\n……上面是这样写的。", 36, 3003500, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0#是右边。好像只要去#b生命起源处5#k就行了。", 36, 3003500)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                        cm.updateInfoQuest(34560, "30=h0;50=h0;31=h1;51=h0;32=h1;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h1;45=h0;46=h0;47=h0;48=h0;49=h0");
                                        cm.forceStartQuest(34567, "");
                                        cm.sendNormalTalk_Bottom("#face0#那我先去看看有没有危险。", 36, 3003500, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#快去吧。我在这里维修通信装置。", 36, 3003502, true, true);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline_Bottom("#face0#来啦？？\r\n#b（请环顾四周，在安全的地方进行。）#k", 36, 3003500)
        } else {
            if (status === a++) {
                cm.gainSkillBuff(80000514);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.setStandAloneMode(true);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -89, -238);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("果然有长得很奇怪的东西。好吧，现在只要使用法杖就行了吧？", 57, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是的。说明书上说先呐喊一声，然后向着虚空挥舞。", 37, 3003500, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#呀！呀！", 37, 3003500, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/wand1", 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/wand1", 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/wand1", 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#咦？没有反应。", 37, 3003500, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#我再看一下说明书。", 37, 3003500, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(34567);
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
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
};