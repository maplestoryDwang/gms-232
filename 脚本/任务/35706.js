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
            cm.sendNormalTalk_Bottom("出什么事了？！其他人呢……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#墙……墙……迷宫的墙！！！", 37, 3003766, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("墙？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("03", "Effect/Direction20.img/effect/BM2_mazeEat/0", 0, 500, 0, -80, 12, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#墙吞没了他们！把他们吃掉了！", 37, 3003766, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("03", "", 2, 500, 0, 0, 0, 0, 0);
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
                                                            cm.sendNormalTalk_Bottom("#face0#我……我只能逃跑了！", 37, 3003766, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("吃掉了……这是怎么回事？", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("你们三个人先照顾下他。", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("除了修理战舰的人之外，其他人跟我去那边看看！", 57, 0, true, true)
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
                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h1;87=h1;97=h1;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h1;93=h0;94=h0;95=h1;96=h1;87=h1;97=h1;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h0;93=h0;94=h0;95=h1;96=h1;87=h1;97=h1;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h0;93=h0;94=h0;95=h1;96=h1;87=h1;97=h0;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.updateInfoQuest(35751, "800=h1;90=h0;91=h1;92=h0;93=h0;94=h0;95=h0;96=h1;87=h1;97=h0;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h0;96=h1;87=h1;97=h0;88=h0;98=h0;89=h1;99=h1");
                                                                                                cm.setPartner(1, 3003758, 80002575, 0);
                                                                                                cm.setPartner(1, 3003759, 80002577, 0);
                                                                                                cm.setPartner(1, 3003763, 80002578, 0);
                                                                                                cm.setPartner(1, 3003760, 80002579, 0);
                                                                                                cm.setPartner(1, 3003764, 80002580, 0);
                                                                                                cm.setPartner(1, 3003761, 80002581, 0);
                                                                                                cm.forceStartQuest(35706, "");
                                                                                                cm.OnStartNavigation(450011120, 0, "east00", 0);
                                                                                                cm.npc_LeaveField("oid=50981");
                                                                                                cm.npc_LeaveField("oid=50984");
                                                                                                cm.npc_LeaveField("oid=50985");
                                                                                                cm.npc_LeaveField("oid=50989");
                                                                                                cm.npc_LeaveField("oid=50990");
                                                                                                cm.npc_LeaveField("oid=50993");
                                                                                                cm.npc_LeaveField("oid=50996");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35706.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.npc_ChangeController(3003718, "oid=2306603", 41, 180, 5, -9, 91, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=2306603", "summon", 0, 0);
            cm.updateInfoQuest(35750, "01=h0;02=h0;03=h1;04=h5;09=h0");
            cm.sendNormalTalk_Bottom("究竟发生了什么……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("周围没有其他痕迹吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#是的，没有看到其他痕迹！", 37, 3003760, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#！这里有衣服！", 37, 3003759, true, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 50, 190)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.Npc_Fadeout("oid=2306603", 0, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=2306603");
                                            cm.npc_LeaveField("oid=2306603");
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("这是……怎么……", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3003758, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我们先……回到战舰那里去吧……", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
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
                                                                                cm.forceCompleteQuest(35706);
                                                                                cm.gainExp(512014069);
                                                                                cm.dispose();
                                                                                cm.warp(450011120, 0, false);
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
};