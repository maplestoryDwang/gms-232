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
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -616, 162);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.updateInfoQuest(35705, "rope1=1");
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("首先，我们必须发出信号弹，告知我们的位置。\r\n还有完整的信号弹吗？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#请等一下！", 37, 3003759, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3003759, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#信号弹在这里！", 37, 3003759, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那我来点火吧。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#天啊！等下！", 37, 3003759, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("怎么了？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#那个……刚才在坠落的时候，信号弹内部的火药洒出来了一些，如果#h0#用魔力一下子点火，可能会爆炸的。", 37, 3003759, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我会把火弄小一点的。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(1540672, "oid=2305891", -720, 180, 16, -770, -670, 1, false, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2305891", "summon", 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_appear", 200);
                                                            cm.npc_SetSpecialAction("oid=2305891", "appear", 3500, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetSpecialAction("oid=2305891", "prepare", -1, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Reactor.img/2002001/0/Hit", 200);
                                                                    cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion8", 200);
                                                                        cm.npc_LeaveField("oid=2305891");
                                                                        cm.npc_LeaveField("oid=2305891");
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/FWfireWalk"], [0, -720, 180, 1, 0, 1, 1, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("哎？", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……现在只剩下两个信号弹了。", 37, 3003759, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("那就找一些能够生小火的燧石或者树枝吧。", 57, 0, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("可不能再爆炸了……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("如果随意进入的话可能会有危险……", 57, 0, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -1040, 155)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("现在绳子有几根？", 57, 0, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#绳子？请稍等！", 37, 3003760, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.updateInfoQuest(35705, "rope1=0");
                                                                                                                                cm.updateInfoQuest(35705, "rope1=0;rope2=1");
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -719, 155)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("如果是这个绳子……", 57, 0, false, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("把这个绳子一头绑在战舰上，另外一头抓在手里，然后进去那里，应该就不会迷路了。只要把卷着绳子重新出来就行。", 57, 0, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -719, 90)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("最好还是几个人一起行动吧。请你们三位去那边。", 57, 0, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("两位跟我走。战舰修理就交给剩下的人了。", 57, 0, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#是，知道了！", 37, 3003758, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("最晚必须在一个小时之内回到战舰这里来，不要走太远了。", 57, 0, true, true)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("如果……出了什么问题，请马上回到战舰这里来。", 57, 0, true, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("战舰如果出了问题，就请沿着绳子来找我们。", 57, 0, true, true)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("请不要分开行动。", 57, 0, true, true)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("那么……请大家注意安全。", 57, 0, true, true)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#也要注意安全啊！", 37, 3003758, true, true)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.updateInfoQuest(35705, "rope1=0;rope2=0");
                                                                                                                                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h1;95=h1;96=h1;87=h1;97=h1;88=h1;98=h1;89=h1;99=h1");
                                                                                                                                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h1;87=h1;97=h1;88=h1;98=h1;89=h1;99=h1");
                                                                                                                                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h1;87=h1;97=h1;88=h1;98=h0;89=h1;99=h1");
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("那我们也出发吧！", 57, 0, false, true)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#是！", 37, 3003760, true, true)
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
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                            cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h0;94=h0;95=h1;96=h1;87=h1;97=h1;88=h1;98=h0;89=h1;99=h1");
                                                                                                                                                                                                                                            cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h0;94=h0;95=h1;96=h1;87=h1;97=h0;88=h1;98=h0;89=h1;99=h1");
                                                                                                                                                                                                                                            cm.setPartner(1, 3003760, 80002577, 0);
                                                                                                                                                                                                                                            cm.setPartner(1, 3003759, 80002579, 0);
                                                                                                                                                                                                                                            cm.OnStartNavigation(450011120, 0, "west00", 0);
                                                                                                                                                                                                                                            cm.forceStartQuest(35705, "");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=50980");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=50982");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=50986");
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=50988");
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
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35705.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -616, 162);
            cm.setPartner(0, 3003760, 0, 0);
            cm.setPartner(0, 3003759, 0, 0);
            cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h1;87=h1;97=h0;88=h1;98=h0;89=h1;99=h1");
            cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h1;87=h1;97=h1;88=h1;98=h0;89=h1;99=h1");
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("看来其他人还没回来。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#是的，不过时间还没过去多久，应该没什么问题。", 37, 3003758, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我们先发出信号弹的话，其他人应该就会很快回来了，做好准备。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("发射吧！", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_ChangeController(1540672, "oid=2306247", -720, 180, 16, -770, -670, 1, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=2306247", "summon", 0, 0);
                                            cm.npc_SetSpecialAction("oid=2306247", "appear", 3500, 1);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_appear", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_SetSpecialAction("oid=2306247", "prepare", -1, 1);
                                                cm.setAmbience("Ambience.img/flare_ready", 100, 60);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.playSoundEffDirectly("Ambience.img/flare_ready");
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setNpcSpecialActionReset("oid=2306247");
                                                                cm.npc_SetSpecialAction("oid=2306247", "shoot", 3500, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_fire", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(900)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -720, -720)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(1540673, "oid=2306248", -720, 80, 16, -770, -670, 1, false, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=2306248", "summon", 0, 0);
                                                                        cm.setNpcSpecialActionReset("oid=2306247");
                                                                        cm.npc_SetSpecialAction("oid=2306247", "last", -1, 1);
                                                                        cm.npcMove(1540673, 0, -700, 2500);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.Npc_Fadeout("oid=2306248", 0, 1000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_LeaveField("oid=2306247");
                                                                                cm.npc_LeaveField("oid=2306247");
                                                                                cm.npc_LeaveField("oid=2306248");
                                                                                cm.npc_LeaveField("oid=2306248");
                                                                                cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3003759, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("信号弹消失了？", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我……我再发射一次吧！", 37, 3003759, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_ChangeController(1540672, "oid=2306254", -720, 180, 16, -770, -670, 1, false, 0, false);
                                                                                                        cm.npc_SetSpecialAction("oid=2306254", "summon", 0, 0);
                                                                                                        cm.npc_SetSpecialAction("oid=2306254", "appear", 3500, 1);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_appear", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.npc_SetSpecialAction("oid=2306254", "prepare", -1, 1);
                                                                                                            cm.setAmbience("Ambience.img/flare_ready", 100, 60);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.playSoundEffDirectly("Ambience.img/flare_ready");
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier1", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.setNpcSpecialActionReset("oid=2306254");
                                                                                                                            cm.npc_SetSpecialAction("oid=2306254", "shoot", 3500, 1);
                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/flare_fire", 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -720, -620)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.npc_ChangeController(1540673, "oid=2306267", -720, 80, 16, -770, -670, 1, false, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=2306267", "summon", 0, 0);
                                                                                                                                    cm.setNpcSpecialActionReset("oid=2306254");
                                                                                                                                    cm.npc_SetSpecialAction("oid=2306254", "last", -1, 1);
                                                                                                                                    cm.npcMove(1540673, 0, -700, 2500);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.Npc_Fadeout("oid=2306267", 0, 1000);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.npc_LeaveField("oid=2306254");
                                                                                                                                            cm.npc_LeaveField("oid=2306254");
                                                                                                                                            cm.npc_LeaveField("oid=2306267");
                                                                                                                                            cm.npc_LeaveField("oid=2306267");
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("原来是因为这样所以没有接到信号弹的联络啊。看来只能亲自……", 57, 0, false, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 100);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h5");
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#请……请救救我！", 37, 3003766, false, true)
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
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1070, 190)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
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
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                    cm.forceCompleteQuest(35705);
                                                                                                                                                                                                                                                                    cm.gainExp(341342713);
                                                                                                                                                                                                                                                                    cm.gainItem(4036452, -10);
                                                                                                                                                                                                                                                                    cm.gainItem(4036453, -50);
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=50980");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=50982");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=50986");
                                                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=50988");
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
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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