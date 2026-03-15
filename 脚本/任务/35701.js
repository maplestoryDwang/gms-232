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
            cm.setStandAloneMode(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 336, 404);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 280, 433)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#现在只要前往#b黑太阳#k就行了。", 37, 3003751, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#然后在那里……", 37, 3003751, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#r黑魔法师#k就在那里吧。", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#是啊，他正等着我们呢。", 37, 3003750, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#在去那里的路上不知道会发生什么。", 37, 3003751, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#有可能会出现超出我们预料的难关，因此为了将损失减到最少，我们需要制定作战计划。", 37, 3003751, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#作战的核心就是#b#h0##k，是你。", 37, 3003751, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我们要打破那个#b黑暗之墙#k，进入内部。", 37, 3003751, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这肯定是十分危险的事情。但是……", 37, 3003751, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##h0#，你是名副其实的#b联盟的王牌#k。\r\n我相信你能做到。", 37, 3003751, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#请你作为先锋，打破黑暗，为联盟创造进入黑太阳内部的道路吧。", 37, 3003751, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#不，南哈特。先锋是#r白色之矛#k。\r\n#h0#请在联盟的舰队全部进入黑太阳内部之前在后方掩护就好。", 37, 3003750, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, -5, 410, 1, 0, 1, 1, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#女皇，女皇作为先锋的话太危险了。", 37, 3003751, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#在不知道会发生什么事情的地方，如果作为先锋出了什么问题……", 37, 3003751, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#联盟就会失去首领甚至瓦解。", 37, 3003751, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#司令官应该做的是将兵力派遣到合适的地方，下达合适的作战命令，带领士兵取得战争的胜利。", 37, 3003751, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在#b联盟的核心#k就是女皇。女皇如果在这么危险的作战中作为先锋……", 37, 3003751, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你要把这么危险的事情交给#h0#吗？南哈特？", 37, 3003750, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -5, 410, 1, 0, 1, 1, 0]);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#呵呵，我可不是讨厌南哈特。", 37, 3003750, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#我们最重要的战斗力#h0#确实也能以超强的能力带领联盟冲锋陷阵。", 37, 3003750, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#但是……", 37, 3003750, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#如果联盟的舰队出了什么事，为了让#h0#能够尽快进行支援，应该让他掌握整个舰队的情况。", 37, 3003750, false, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#这样才能借助#h0#的力量，将损失降到最少。", 37, 3003750, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#还有……", 37, 3003750, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#他们都是相信我而来到了这里。我有责任带领他们前进。", 37, 3003750, false, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这场战争是为了我们所有人的战争，如果我只顾着自己的安全，躲在后面，那么谁都不会再相信我了。", 37, 3003750, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#女皇……", 37, 3003751, false, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#请相信我，南哈特。我不会再退缩了。", 37, 3003750, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -5, 410, 1, 0, 1, 1, 0]);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#明白了，#h0#，请你按照女皇的命令，在后方掩护联盟的舰队进入黑太阳内部。", 37, 3003751, false, true)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("好的，请交给我吧。", 57, 0, true, true)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("那我就去做出征的准备了。", 57, 0, true, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那就拜托你了。", 37, 3003751, true, true)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNewEffects(8, [0, 0, 0, 0, 0])
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 400);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face6#……", 37, 3003750, false, true)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#女皇？", 37, 3003751, true, true)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#我有些担心……#h0#的身后似乎有着什么黑暗的东西。", 37, 3003750, true, true)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face6#所以我才让#h0#在后方作掩护……", 37, 3003750, true, true)
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#没问题，就像之前一样，这次我们也能做到的。", 37, 3003751, true, true)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#……", 37, 3003750, true, true)
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face6##fs18#(#b失去了灿烂的荣耀后，光芒将遇到陷入泥潭的世界之魂…… #k)", 37, 3003750, true, true)
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face6#(是因为黑魔法师的预言吗……总觉得有种无法再见到#h0#的不祥预感……)", 37, 3003750, true, true)
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 1004, 405);
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1155, 433)
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                            cm.updateInfoQuest(35750, "01=h0;02=h1;03=h0");
                                                                                                                                                                                                                                                                                            cm.updateInfoQuest(35750, "01=h0;02=h0;03=h0");
                                                                                                                                                                                                                                                                                            cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1");
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("啊！梅尔朗！", 57, 0, false, true)
                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                                                                                cm.forceCompleteQuest(35701);
                                                                                                                                                                                                                                                                                                                cm.gainExp(170671356);
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
                                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                                                                                                                            cm.warp(993063000, 2, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35701.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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