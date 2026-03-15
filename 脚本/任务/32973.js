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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 888, -120);
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 860, -100)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(2560002, "oid=3568913", 792, -130, 1, 742, 842, 0, true, 200, false);
                        cm.npc_SetSpecialAction("oid=3568913", "summon", 0, 0);
                        cm.userSetFieldFloating(307000210, 10, 10, 50);
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.userSetFieldFloating(307000210, 0, 0, 0);
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.sendNormalTalk_Bottom("啊，吓死我了！", 57, 0, false, true);
                            cm.effect_NormalSpeechBalloon("#fn黑体##fs25#哇啊！！", 0, 0, 0, 1500, 1, 0, 0, 0, 4, 2560002, null, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#你站着发什么呆呢，影牙？", 37, 2560002, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嗯？我？那……那个……？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#队长不是让你别靠近没见过的植物吗？", 37, 2560002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我，我只是看了看。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好吧，好奇心可以理解。\r\n我们快回去吧。", 37, 2560002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_SetForceMove("oid=3568913", -1, 150, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.Npc_Fadeout("oid=3568913", 0, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(700)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("等等……", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("对了……难道，被我吃掉了？", 57, 0, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
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
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.forceStartQuest(32973, "");
                                                                                                    cm.OnStartNavigation(307000100, 0, "pt01", 0);
                                                                                                    cm.npc_LeaveField("oid=3568913");
                                                                                                    cm.npc_LeaveField("oid=3568913");
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

function end(d, c, b) {
    (d == 1) ? status++ : status--;
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 123, -288);
            cm.sendNormalTalk_Bottom(" 迎月花……迎月花……在这里。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_Monologue("晚上开放，早上凋谢的花。", 0);
                    cm.effect_Voice("Voice3.img/DLep5/pangM/D_1.mp3", 100)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("根据传说，在很久很久以前，有个非常喜欢月亮的少女。", 0);
                        cm.effect_Voice("Voice3.img/DLep5/pangM/D_2.mp3", 100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("她想和月亮见面，自己也想变成月亮。虽然她每天祈祷，但最终却没能实现愿望。", 1);
                            cm.effect_Voice("Voice3.img/DLep5/pangM/D_3.mp3", 100)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("精灵认为少女很可怜，于是让她重生成了一朵花。", 0);
                                cm.effect_Voice("Voice3.img/DLep5/pangM/D_4.mp3", 100)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("那种花被称作「迎月花」。", 0);
                                    cm.effect_Voice("Voice3.img/DLep5/pangM/D_5.mp3", 100)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("这就是迎月花晚上开放，白天凋谢的原因……", 1);
                                            cm.effect_Voice("Voice3.img/DLep5/pangM/D_6.mp3", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……真是个悲伤的故事。", 57, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("后面……是白纸？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/knock", 100);
                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#一个人都没有吗？", 37, 2560003, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("啊！", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_MoveAction(4);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("哎呀，连躲的地方都没有。", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
                                                                                                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#这是肯的杯子。", 37, 2560003, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯……没人在吗？", 37, 2560003, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#吸一口气……（嗬咯咯咯！）", 37, 2560003, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/DLep5/5", 0, 300, 0, 0, 0, 4, 1);
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#这是礼物，嘻嘻。", 37, 2560003, false, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 100, 0, 0, 0, 0, 0);
                                                                                                                                cm.sendNormalTalk_Bottom("哎呀！", 57, 0, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face14#是谁！", 37, 2560003, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("啊！", 57, 0, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face14#看～到～了～", 37, 2560003, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
                                                                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 140, -30);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
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
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face16#哎呀，这不是医务队的影牙吗？", 37, 2560003, false, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("那……那个……我什么都没看见。真的。", 57, 0, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#干嘛突然对我这么客气。看来你好像看到了……", 37, 2560003, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("不……不……没……没看到……", 57, 0, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face14#有句老话，#fs18##r只有死人不会说话。", 37, 2560003, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("哎呀！！", 57, 0, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                            cm.eventSKill(0);
                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                            cm.forceCompleteQuest(32973);
                                                                                                                                                                                            cm.updateInfoQuest(32973, "s=1;exp=1");
                                                                                                                                                                                            cm.gainExp(550003);
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
    }
};