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
            cm.sendNormalTalk_Bottom("#face0#好了，我解释得还清楚吗？啊，很清楚吗？那就先谢谢你了。", 36, 3004404, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#真是的，是导游费啦。", 36, 3004404, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……500金币足够吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#金币？我们不用那种钱。没办法了。你去替我打一份工吧。", 36, 3004404, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("为什么我要打工……", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（伊黛娜大人让我们给市民们留下一点好印象，最好还是按他说的做吧。）", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#听说最近城墙西侧出现了很多#r海鸥#k，这些海鸥的粪便把神圣的城墙弄得脏兮兮的。", 36, 3004404, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#但是#b黎明祭司#k他们的眼睛看不清，可没那么容易就能赶走海鸥。", 36, 3004404, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("要我去收拾那些海鸥吗？", 56, 3004404)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(37405, "");
                                                    cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;04=h1;05=h1");
                                                    cm.OnStartNavigation(993140020, 0, "north00", 37405);
                                                    cm.sendNormalTalk_Bottom("去通往西边城墙的传送口吧。", 57, 0, false, true)
                                                } else {
                                                    if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37405.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 951, 5);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 920, 50)
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
                        cm.sendNormalTalk_Bottom("#face0#啊！#h0#。你怎么来这儿了？", 37, 3004435, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("（说明了情况。）", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#……你也上当了啊。", 37, 3004435, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯？那人是……", 57, 0, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -500, 50)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(3004430, "oid=515665", -629, 44, 5, -679, -579, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=515665", "summon", 0, 0);
                                                        cm.npc_ChangeController(3004437, "oid=515666", -507, 44, 5, -557, -457, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=515666", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#您看到敌人的分遣队了吗？\r\n他们一直在箭射不到的地方，时不时地对我们发起挑衅。", 37, 3004437, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#虽然人数还不多，也没有构成太大威胁，\r\n但问题是……人数一直在增加。", 37, 3004437, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我知道了。还请你多加留意。", 37, 3004430, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那个剑之守护者好像正在负责调度守备队。", 37, 3004435, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#据说她那白色的翅膀就是天族的象征。", 37, 3004435, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("吼哦……", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#听起来这里的居民似乎十分信任守护者。", 37, 3004435, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#然而她自己反倒像是被所属的教团疏远了？", 37, 3004435, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.npc_SetForceMove("oid=515665", -1, 200, 110);
                                                                                                        cm.npc_SetForceMove("oid=515666", -1, 200, 110);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.Npc_Fadeout("oid=515665", 0, 500);
                                                                                                            cm.Npc_Fadeout("oid=515666", 0, 500);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.npc_LeaveField("oid=515665");
                                                                                                                cm.npc_LeaveField("oid=515666");
                                                                                                                cm.sendNormalTalk_Bottom("啊，已经走了。", 57, 0, false, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你要是想帮助这里的人们，就去找#b左侧#k的黎明祭司吧。", 37, 3004435, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那边好像出了什么问题。", 37, 3004435, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk_Bottom("那么胡克呢？", 57, 0, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我……得收拾那些海鸥的粪便了。", 37, 3004435, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.forceCompleteQuest(37405);
                                                                                                                                        cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;04=h0;05=h1");
                                                                                                                                        cm.updateInfoQuest(37400, "01=h0;02=h0;11=h1;04=h0;05=h1;06=h1");
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
};