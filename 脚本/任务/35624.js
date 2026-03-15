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
            cm.askAcceptDecline_Bottom("#face0#我们得调查甲板上的残骸，但是敌人太多，没办法集中精力。r\n#b#ho##得帮帮我。\r\n\r\n #r ※ 确认后将立刻前往任务地图。#k", 36, 3003674)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好的，多亏了你，调查顺利多了。\r\n#b#ho##需要做的就是收集分析所需的样品。", 36, 3003674, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#请从出现在#r虚空波涛#k甲板上的#b#o8644626##k和#b#o8644627##k那里\r\n找到#b50个#i4036456# #t4036456##k。", 36, 3003674, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35624, "");
                        cm.npc_LeaveField("oid=2204552");
                        cm.npc_LeaveField("oid=2204552");
                        cm.dispose();
                        cm.warp(450009340, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35624.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 940, -325);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.updateInfoQuest(35162, "10=h1;12=h0;24=h0;34=h1");
            cm.hideNpc(3003674);
            cm.npc_ChangeController(3003674, "oid=2204869", 605, -353, 13, 555, 655, 0, true, 0, true);
            cm.npc_SetSpecialAction("oid=2204869", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 770, -240)
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
                                cm.sendNormalTalk_Bottom("#face0#你已经收集到所有的所需材料了啊，请给我吧。\r\n我会分析这上面的意念。", 37, 3003674, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#(伊黛娜在材料上施加魔力。上面涌出了强烈的意念，和伊黛娜调查的残骸起了反应。)", 37, 3003674, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 307, -140)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/monster/M1_summon", 100);
                                                cm.npc_ChangeController(3003688, "oid=2204870", -250, -60, 3, -300, -200, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2204870", "summon", 0, 0);
                                                cm.npc_ChangeController(3003688, "oid=2204871", -100, -60, 3, -150, -50, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2204871", "summon", 0, 0);
                                                cm.npc_ChangeController(3003688, "oid=2204872", 50, -60, 3, 0, 100, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2204872", "summon", 0, 0);
                                                cm.npc_ChangeController(3003688, "oid=2204873", 200, -60, 2, 150, 250, 0, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2204873", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/monster/M1_summon", 100);
                                                    cm.npc_ChangeController(3003688, "oid=2204874", -190, -330, 10, -240, -140, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204874", "summon", 0, 0);
                                                    cm.npc_ChangeController(3003688, "oid=2204875", 30, -330, 11, -20, 80, 0, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204875", "summon", 0, 0);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/monster/M1_summon", 100);
                                                    cm.npc_ChangeController(3003688, "oid=2204876", 350, -60, 2, 300, 400, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204876", "summon", 0, 0);
                                                    cm.npc_ChangeController(3003688, "oid=2204877", 500, -60, 2, 450, 550, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204877", "summon", 0, 0);
                                                    cm.npc_ChangeController(3003688, "oid=2204878", 650, -60, 1, 600, 700, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204878", "summon", 0, 0);
                                                    cm.npc_ChangeController(3003688, "oid=2204879", 800, -60, 1, 750, 850, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204879", "summon", 0, 0);
                                                    cm.npc_ChangeController(3003688, "oid=2204880", 950, -60, 1, 900, 1000, 1, true, 0, false);
                                                    cm.npc_SetSpecialAction("oid=2204880", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……这个残骸果然有点奇怪。", 37, 3003674, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#最后……还有个调查方法没用过。\r\n……就试试那个吧。", 37, 3003674, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 770, -240)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/energyBall", 100);
                                                                                    cm.npc_SetSpecialAction("oid=2204869", "energyball", 2000, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2500, 4000, 770, -540)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/monster/M1_die", 100);
                                                                                            cm.npc_SetSpecialAction("oid=2204868", "die", 0, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_LeaveField("oid=2204868");
                                                                                                    cm.npc_LeaveField("oid=2204868");
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 307, -140)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_LeaveField("oid=2204870");
                                                                                                        cm.npc_LeaveField("oid=2204870");
                                                                                                        cm.npc_LeaveField("oid=2204871");
                                                                                                        cm.npc_LeaveField("oid=2204871");
                                                                                                        cm.npc_LeaveField("oid=2204872");
                                                                                                        cm.npc_LeaveField("oid=2204872");
                                                                                                        cm.npc_LeaveField("oid=2204873");
                                                                                                        cm.npc_LeaveField("oid=2204873");
                                                                                                        cm.npc_LeaveField("oid=2204874");
                                                                                                        cm.npc_LeaveField("oid=2204874");
                                                                                                        cm.npc_LeaveField("oid=2204875");
                                                                                                        cm.npc_LeaveField("oid=2204875");
                                                                                                        cm.npc_LeaveField("oid=2204876");
                                                                                                        cm.npc_LeaveField("oid=2204876");
                                                                                                        cm.npc_LeaveField("oid=2204877");
                                                                                                        cm.npc_LeaveField("oid=2204877");
                                                                                                        cm.npc_LeaveField("oid=2204878");
                                                                                                        cm.npc_LeaveField("oid=2204878");
                                                                                                        cm.npc_LeaveField("oid=2204879");
                                                                                                        cm.npc_LeaveField("oid=2204879");
                                                                                                        cm.npc_LeaveField("oid=2204880");
                                                                                                        cm.npc_LeaveField("oid=2204880");
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 307, -140)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.forceCompleteQuest(35624);
                                                                                                                cm.gainExp(171586691);
                                                                                                                cm.npc_LeaveField("oid=2204869");
                                                                                                                cm.npc_LeaveField("oid=2204869");
                                                                                                                cm.updateInfoQuest(35162, "10=h1;12=h0;24=h1;34=h1");
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.gainItem(4036456, -50);
                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.warp(cm.getMapId, 0, true);
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
};