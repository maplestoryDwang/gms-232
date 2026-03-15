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
            if (cm.getMapId() != 993140040) {
                cm.dispose();
                cm.warp(993141023, 0, false);
                return
            }
            cm.sendNormalTalk_Bottom("#face0#所以，接下来有什么打算？", 36, 3004433, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#塞伦说携带证物的天族肯定还没有离开塞尔提乌，所以去城里找他们了。", 36, 3004431, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#王子殿下呢？", 36, 3004431, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我今天也会很忙。", 36, 3004433, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#是忙于应对#r黑太阳#k吗，或是其它的家伙？", 36, 3004431, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#对，昨天黎明祭司的寺院被贼人光顾了。\r\n特制#b圣水#k也不见了。", 36, 3004433, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#圣水？他们要圣水做什么？", 36, 3004431, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#圣水对普通的伤病有很好的医治效果。", 36, 3004433, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#问题是……当它和#r黑火药#k混合起来的时候……", 36, 3004433, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("会发生什么？", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#就像两个教团见面的时候一样。爆炸了。\r\n哐~！一声。", 36, 3004433, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face4#啊！", 36, 3004431, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#因此，我今天想劳烦伊黛娜大人帮忙#r追踪黑太阳#k。", 36, 3004433, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo_Bottom("#face0#还有，可以拜托#h0#大人#b保护塞伦阁下#k吗？", 36, 3004433)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("是，我知道了。", 56, 0, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#可我们这边也是一头雾水啊。", 36, 3004431, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#总之，我就期待两位的好消息了。", 36, 3004433, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.curNodeEventEnd(true);
                                                                                cm.eventSKill(0);
                                                                                cm.setInGameDirectionMode(true, false, true);
                                                                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.setStandAloneMode(true);
                                                                                cm.forceStartQuest(37414, "");
                                                                                cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h1;04=h0;13=h1;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0;19=h1");
                                                                                cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h0;04=h0;13=h1;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0;19=h1");
                                                                                cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0;19=h1");
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -246, 200)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -356, 202);
                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_ChangeController(3004430, "oid=771860", -192, 200, 15, -242, -142, 1, true, 1000, false);
                                                                                            cm.npc_SetSpecialAction("oid=771860", "summon", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#很抱歉让您久等了。我们走吧。", 36, 3004430, false, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
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
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.OnStartNavigation(993140000, 1, "3004419", 37414);
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
            cm.sendNormalTalk_Bottom("#face0#守护者塞伦……最近和外乡人走得很近吗？", 36, 3004444, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#什么？有没有看到其他的天族？", 36, 3004444, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哼，就算我看到了，也没必要对你坦白吧？", 36, 3004444, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(37414, "dir=1;NpcSpeech=30044191");
                            cm.OnStartNavigation(993140000, 1, "3004421", 37414);
                            cm.npc_LeaveField("oid=374139");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#大神官大人被驱逐，而我们却无能为力。", 36, 3004442, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#守护者，我对你很失望。", 36, 3004442, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face3#……", 37, 3004430, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("（上次的事件似乎让塞伦饱受非议。）", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(37414, "dir=1;NpcSpeech=30044191/30044212");
                            cm.OnStartNavigation(993140000, 1, "3004422", 37414);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#姐姐，你的项链好漂亮。", 36, 3004422, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不过之前也见过一条看起来差不多的啊。", 36, 3004422, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004430, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你在哪看到的？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#它掉在地上，被我看到了。", 36, 3004422, true, true)
                        } else {
                            if (status === a++) {
                                cm.curNodeEventEnd(true);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(true, false, true);
                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.setStandAloneMode(true);
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 22, -5);
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.setPartner(0, 3004430, 0, 0);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 182, 40)
                            } else {
                                if (status === a++) {
                                    cm.npc_ChangeController(3004430, "oid=772451", 80, 10, 14, 30, 130, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=772451", "summon", 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#有个大叔让我转交给你一样东西。", 36, 3004422, false, true);
                                            cm.effect_Voice("Voice5.img/CH2/Child/1", 128)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face4#是吗？", 36, 3004430, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Seren/46", 128)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#还有啊，那个大叔给了我糖果……糖果真好吃啊。", 36, 3004422, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Child/2", 128)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#糖果……真好吃……（目光在两人空空如也的手里扫来扫去）", 36, 3004422, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Child/3", 128)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#是，是吗……", 36, 3004430, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Seren/47", 128)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face4#（我该怎么做呢？我没有糖果。）", 36, 3004430, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Seren/48", 128)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("（要快点拿糖果给守护者）", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
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
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.npc_LeaveField("oid=772451");
                                                                                        cm.npc_LeaveField("oid=772451");
                                                                                        cm.setPartner(1, 3004430, 80002825, 0);
                                                                                        cm.updateInfoQuest(37414, "dir=1;NpcSpeech=30044191/30044212/30044223");
                                                                                        cm.OnStartNavigation(993140000, 1, "3004420", 37414);
                                                                                        cm.npc_LeaveField("oid=374139");
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

function stage3(d, c, b) {
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
            cm.setPartner(0, 3004430, 0, 0);
            cm.npc_ChangeController(3004430, "oid=772628", 274, 13, 11, 224, 324, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=772628", "summon", 0, 0);
            cm.npc_ChangeController(3004452, "oid=772629", 60, -20, 14, 10, 110, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=772629", "summon", 0, 0);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -484, -17);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -472, 20)
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
                        cm.sendNormalTalk_Bottom("#face0#我说，年轻人。", 36, 3004420, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我正好有糖果。\r\n本来准备给我孙子的，就给你一个吧。", 36, 3004420, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("谢谢。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 175, 20)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3300)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#乔伊，快走吧。", 36, 3004452, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，可是那个姐姐……", 36, 3004422, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1#啊，我这边……一时间还……", 36, 3004430, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#走吧。和那种人没什么好说的。", 36, 3004452, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#啊……", 36, 3004430, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_LeaveField("oid=772628");
                                                                        cm.npc_LeaveField("oid=772628");
                                                                        cm.npc_LeaveField("oid=772629");
                                                                        cm.npc_LeaveField("oid=772629");
                                                                        cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0;19=h1");
                                                                        cm.updateInfoQuest(37400, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h1;07=h1;08=h1;09=h0;19=h1");
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
                                                                                    cm.eventSKill(0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.updateInfoQuest(37414, "dir=1;NpcSpeech=30044191/30044212/30044223/30044204");
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
            cm.sendNormalTalk_Bottom("那个小女孩呢？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#被家长领走了。", 36, 3004430, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这里已经没什么好调查的了，今天就到此为止吧。", 36, 3004430, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#对不起。都怪我，让您白跑了一趟。", 36, 3004430, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("可是……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("（肯定还有地方没有去……会是哪里呢？）#b\r\n#L0#坟墓#l\r\n#L1#王宫#l\r\n#L2#城墙上#l", 56, 3004416)
                                } else {
                                    if (status === a++) {
                                        if (b == 0) {
                                            cm.sendNormalTalk_Bottom("#face0#……啊。确实应该去那里探查一下。", 36, 3004430, false, true)
                                        } else {
                                            cm.sendNormalTalk_Bottom("#face0#……那里我们已经去过了吧。", 36, 3004430, false, true);
                                            status -= 2
                                        }
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(37414);
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