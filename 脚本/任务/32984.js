var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Dlep5/pen", 100);
            cm.sendNormalTalk_Bottom("啊，书上又出现了内容！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("#fn????##fs22#手……不是诅咒。", 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fn????##fs22#真相在神殿。", 1)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不是诅咒？那到底是什么？", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("真相……在神殿……？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("反正艾特要到神殿去。", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("在这之前，我必须先确认一下。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.setStandAloneMode(false);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.OnStartNavigation(307000230, 0, "pt01", 0);
                                                    cm.forceStartQuest(32984, "");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("狩猎结束了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你的表情怎么这么奇怪？", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？那，那个……剩下的影子中和剂……变成了清水。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face16#嗯……果然是因为这个啊。我说你为什么和其他人不一样。", 37, 2560003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face16#迎月果。那东西让中和剂的成分失效了。", 37, 2560003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是什么意思？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#跟我来。我想带你去一个地方。", 37, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(32982, "exp=1");
                                            cm.forceCompleteQuest(32982);
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h0;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.updateInfoQuest(32999, "10=h0;01=h0;02=h0;20=h1;11=h0;21=h0;12=h01;03=h0;13=h0;04=h0;14=h1;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h0;18=h0;19=h0");
                                            cm.dispose();
                                            cm.warp(307000210)
                                        } else {
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
};