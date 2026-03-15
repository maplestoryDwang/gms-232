var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("嗯？那本书……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这是昨天你看的植物图鉴。但是你……可以制作这个吗？", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这是……#b真实之药？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.setStandAloneMode(true);
                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#r真实之药#k调制方法。", 0);
                            cm.effect_Voice("Voice3.img/DLep5/pangM/E_1.mp3", 100)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，", 0);
                                    cm.effect_Voice("Voice3.img/DLep5/pangM/E_2.mp3", 100)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("大眼青蛙卵一勺，隔水熬制后……", 0);
                                        cm.effect_Voice("Voice3.img/DLep5/pangM/E_3.mp3", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("最后放入一撮月光……", 0);
                                                cm.effect_Voice("Voice3.img/DLep5/pangM/E_4.mp3", 100)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("", 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_Monologue("效果很简单。#r消除一切虚假，显露真相。", 0);
                                                        cm.effect_Voice("Voice3.img/DLep5/pangM/E_5.mp3", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_Monologue("", 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.sendNormalTalk_Bottom("这个我还是头一次看见……咦？昨天这一页明明是白纸。奇怪……", 57, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face16#什么？", 37, 2560003, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("一定是看错了。不可能有人在这段时间里把书页给补上。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face16#不，刚才你说“奇怪”……", 37, 2560003, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("嗯？那怎么了？", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face16#不，不，那个算了。告诉我，你能不能制作这个东西。", 37, 2560003, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("这个配方怎么看都像是什么人的恶作剧。\r\n#b一撮月光#k，怎么可能？你看。", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face11#啧……没错。算了，回去吧。", 37, 2560003, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("嗯……这本书你不拿走吗？", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face16#你还回去吧。", 37, 2560003, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("（切……）", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceStartQuest(32977, "");
                                                                                                                cm.OnStartNavigation(307000110, 0, "", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(2560116, "oid=22241", 72, -260, 1);
            cm.npc_ChangeController(2560108, "oid=22242", 135, -260, 1);
            cm.npc_ChangeController(2560110, "oid=22243", -58, -23, 0);
            cm.npc_ChangeController(2560119, "oid=22244", 152, -23, 1);
            cm.onTeleport(1, cm.getPlayer().getId(), 56, -293);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h1;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 128, -224)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(4000)
            } else {
                if (status === a++) {
                    cm.effect_Text(["#fn黑体##fs18#第二天"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("真是奇怪。之前明明是张白纸……", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯……#b消除一切虚假，显露真相#k……\r\n消除什么虚假呢？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("耶，行了。一定是想做什么恶作剧。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这里也有人写了字。写的是#fn黑体##b“一定是恶作剧！”#k", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不管它。好好干活吧。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 150);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("啊……等等？！这……", 57, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#fs20#这不是我的笔迹吗？！！", 57, 0, false, true)
                                                            } else {
                                                                if (status === a++) {
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
                                                                                cm.setStandAloneMode(false);
                                                                                cm.setInGameDirectionMode(false, false, false);
                                                                                cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                                                                cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h1");
                                                                                cm.updateInfoQuest(32977, "exp=1");
                                                                                cm.forceCompleteQuest(32977);
                                                                                cm.fieldEffect_PlayBGM("Bgm33.img/NastyLiar", 0, 0);
                                                                                cm.dispose()
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