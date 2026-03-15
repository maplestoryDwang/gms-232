var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 68, -80);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("嗯……到底是什么时候写上去的呢？不知道。完全记不起来……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#喂，你是看不见我吗？", 37, 2560006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#出去战斗之后，医务队的事情就不当回事了吗？", 37, 2560006, true, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.sendNormalTalk_Bottom("不，不是的……对不起……有什么事吗？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我的手腕扭了，帮我配点治疗药。\r\n切，竟然在补给任务中受了伤……", 37, 2560006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯，来，给你。", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#味道可真难吃，切……每次都这样，真是伤脑筋。", 37, 2560006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("每次……嗯？！对了……", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("肯，你在上次轮回中不是也受伤了吗？在上上次轮回中也……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#什么？那是什么意思？我什么时候？", 37, 2560006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("但是你刚才说#r每次#k……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("（怎么回事？为什么我之前没发现呢？）", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#？？", 37, 2560006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#喂，影牙～！", 37, 2560003, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h1");
                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                    cm.sendNormalTalk_Bottom("哎呀！出来了！", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face14#出来了……？", 37, 2560003, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("啊……没什么……", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#该去执行任务了。快准备好。", 37, 2560003, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#喂，没看见先来的人吗？", 37, 2560006, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#啊，肯……刚才凯森队长在急着找你。\r\n是不是补给品没有整理好啊？", 37, 2560003, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#你说什么？切！喂，影牙！我马上就回来！等着我！", 37, 2560006, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                                                                                cm.forceStartQuest(32978, "");
                                                                                                cm.sendNormalTalk_Bottom("凯森队长应该去执行搜索任务了啊……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#嘘！我把妨碍者支走了，快走吧。", 37, 2560003, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("你难道是在骗他？之后该怎么收场呢？", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#收场？你怕他吗？", 37, 2560003, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("嗯……老实说，有点……", 57, 0, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#嗯……竟敢欺负我的奴隶。", 37, 2560003, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("奴隶……", 57, 0, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#太好了。你帮我弄一点#b荆棘树液#k来。", 37, 2560003, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("你想用来干什么？", 57, 0, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#废话少说，快去。我要让你看点好东西。", 37, 2560003, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.eventSKill(0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.OnStartNavigation(307000110, 0, "hunt01", 0);
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("呼呼，搞定了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#干得好。好了，你好好看着。", 37, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                        cm.sendNormalTalk_Bottom("#face2#艾特那家伙！！！让我去找队长，害我被臭骂了一顿！", 37, 2560006, false, true)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/6", 0, 1000, 0, 0, 0, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#呃啊！！这是怎么回事！！", 37, 2560006, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
                                            cm.eventSKill(0);
                                            cm.setStandAloneMode(false);
                                            cm.forceCompleteQuest(32978);
                                            cm.updateInfoQuest(32978, "exp=1");
                                            cm.gainExp(2462700);
                                            cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                            cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h1;03=h1;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h1;17=h1;18=h0;19=h0");
                                            cm.gainItem(4036343, -40);
                                            cm.dispose();
                                            cm.warp(307000100, 2, false);
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
};