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
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1487, 69)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 1014, 22);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_ForcedFlip10(2, 500);
                            cm.inGameDirectionEvent_AskAnswerTime(4300)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你们是谁？", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face3#啊！敬礼！很高兴见到你！", 37, 3003500, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#我是冒险骑士团奇袭者部队下属的沃莉！任务是#b侦察和向导#k！", 37, 3003500, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#哈哈，你好。我是休麦。\r\n主要任务是和总部的#b通信连接及技术支持#k。这位是……", 37, 3003502, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#呼……", 37, 3003501, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#喂，梅尔朗？", 37, 3003502, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#啊，我……叫梅尔朗·乔尔。\r\n请叫我梅尔朗，哈……", 37, 3003501, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face3#梅尔朗是万神殿派来帮助我们的魔法师。\r\n任务是#b生成通往总部的次元门#k。", 37, 3003500, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("万神殿？\r\n能在神秘河遇到联盟的人，真神奇。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我们联盟并没有坐以待毙。", 37, 3003500, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#现在冒险岛世界为了对抗黑魔法师，正在为#b大规模作战#k做准备。看到之后，你一定会被吓一跳。", 37, 3003500, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("原来大家都在努力……", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#那当然。", 37, 3003500, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("嗯？这个门是……", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#据梅尔朗说，次元之力正在从这扇门中流淌出来。", 37, 3003500, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（但是之前明明一点反应都没有的……）", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("应该先和飞鱼谈谈。", 57, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#啊……打开了……", 37, 3003501, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#咦？", 37, 3003500, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.Hidden_background("6330_gate", 1, 1, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#门自己？！", 37, 3003502, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/door2", 1700);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#哇！快进去吧！", 37, 3003500, false, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#我来召唤侦察船！抓紧了！", 37, 3003502, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#呼呼……", 37, 3003501, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("在睡觉？！", 57, 0, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                                                                                            cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h0;52=h0;33=h0;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h1;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                                                                                                                            cm.forceStartQuest(34562, "");
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
                                                                                                                                                                            cm.npc_LeaveField("oid=1999230");
                                                                                                                                                                            cm.npc_LeaveField("oid=1999231");
                                                                                                                                                                            cm.dispose();
                                                                                                                                                                            cm.warp(450007000, 0);
                                                                                                                                                                            cm.setStandAloneMode(false);
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
            cm.sendNormalTalk_Bottom("但是，这是什么地方啊？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#这是南哈特的信。", 37, 3003500, true, true)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("To #h0#", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("好久不见，#h0#。", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("我决定在你到达神秘河海底的巨大空间——\r\n#g「太初之海埃斯佩拉」#k的时候，将这封信交给你。", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("", 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("太初之海埃斯佩拉？", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("你应该会有很多疑问，但由于涉及到保密问题，具体的情况我会直接告诉你。", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("按照预定，最少会有1名联盟侦察兵与你同行。", 0)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_Monologue("请你让他接通通信装备。", 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#请环顾一下四周。#b太初之海……#k这个名字真的很适合这里。", 37, 3003500, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("南哈特知道我们到达的地方会是什么样子吗？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#好像是的。\r\n这可能要归功于世界树事件发生之后的情报搜集工作。", 37, 3003500, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#但是我允许接触的只有一小部分。\r\n具体的情况，南哈特会直接告诉你。", 37, 3003500, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#通信装备在船上。希望他们俩没事。", 37, 3003500, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(34562);
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
                }
            }
        }
    }
};