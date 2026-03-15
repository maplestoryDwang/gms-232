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
            cm.forceCompleteQuest(100459);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -150, 3)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9062263, "oid=32711694", -156, 4, 1, -206, -106, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=32711694", "summon", 0, 0);
                cm.npc_ChangeController(9062262, "oid=32711695", 73, 4, 2, 23, 123, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=32711695", "summon", 0, 0);
                cm.npc_ChangeController(9062264, "oid=32711696", -496, 4, 1, -546, -446, 0, false, 0, false);
                cm.npc_SetSpecialAction("oid=32711696", "summon", 0, 0);
                cm.npc_ChangeController(9062256, "oid=32711697", -404, 4, 1, -454, -354, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=32711697", "summon", 0, 0);
                cm.updateInfoQuest(100433, "50=0;43=1;47=0;65=1;49=0");
                cm.updateInfoQuest(100433, "50=0;43=0;47=0;65=1;49=0");
                cm.npc_SetSpecialAction("oid=32711697", "special2", -1, 1);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -258, 5);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("苏菲莉亚，你来了！", 57, 0, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这是你父亲留下的。你仔细看看。长得就像……", 57, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这是……", 37, 9062263, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#和我长得一模一样的人偶……", 37, 9062263, false, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("对。你的父亲他没有忘记你。\r\n即便他中了诅咒，也一直#b爱着#k你。", 57, 0, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("在客厅里突然冲向#b假面绅士#k被消灭也是，\r\n都是#b为了保护你#k！", 57, 0, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……#h0#，我之前不是告诉过你关于上次#b生日派对#k的事吗？ ", 37, 9062263, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("我记得。你说过收到了一个小熊玩偶的礼物，还哭了很久。", 57, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#对。因为我一直哭个不停，所以爸爸过来安慰了我。说下次生日的时候，一定做一个#b和我一模一样的漂亮人偶#k送给我。之后爸爸他……就一直把自己锁在房间里……一门心思地做人偶。", 37, 9062263, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#爸爸……他遵守了那个约定。\r\n#b一直没有忘记#k……我这个没出息的女儿……", 37, 9062263, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#苏菲莉亚！摘掉假面的话就什么都没有了…… ！\r\n除了死……你什么都没有了！", 37, 9062262, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我……从很早以前开始就很胆小。\r\n是假面绅士你利用那份#b恐惧#k，将我牢牢抓住，让我留在了这里……", 37, 9062263, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#因为担心离开宅子就会失去所有的那份恐惧……\r\n担心父亲会忘记我的那份恐惧……", 37, 9062263, true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_ChangeController(9062275, "oid=32714085", -100, 4, 1, -150, -50, 1, false, 1500, false);
                                                                                    cm.npc_SetSpecialAction("oid=32714085", "summon", 0, 0);
                                                                                    cm.Npc_Fadeout("oid=32714085", 10, 1000);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我……非常害怕……", 37, 9062275, false, true, 1)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_setForceFlip("oid=32711694", 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#现在……没有关系了。", 37, 9062263, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#因为爸爸……#b我的家人#k，我们从未互相忘记彼此。", 37, 9062263, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#我们会永远在一起。", 37, 9062263, true, true, 1)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#再也#b没什么可怕的了#k。", 37, 9062263, true, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.Npc_Fadeout("oid=32714085", 0, 1000);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.setNpcSpecialActionReset("oid=32711694");
                                                                                                                    cm.npc_SetSpecialAction("oid=32711694", "special", -1, 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 108, 3)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不可以！如果连你的摘掉假面的话……就没有东西可以#b支撑#k我的力量了……！", 37, 9062262, false, true, 1)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.onSetNpcScript("oid=32711695", 1, ["special2", "special4"], [1, -1]);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#额……我的假面……！假面碎了！", 37, 9062262, false, true, 1)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#要快……快点用其他假面遮住我的脸……！", 37, 9062262, true, true, 1)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#假面绅士，现在再也没有将我和客人们#b留在这个世界上的方法#k了。", 37, 9062255, false, true, 1)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你也快摘下那虚伪的假面，接受你的死亡吧。\r\n因为，不管你戴着怎样的假面，也无法隐藏那假面后面#b丑恶的真面目#k。", 37, 9062255, true, true, 1)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#不可以……！我的假面……！", 37, 9062262, false, true, 1)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这群家伙……#b不要以为这样就结束了#k。", 37, 9062262, true, true, 1)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这是#b恐惧#k，这是#b冤屈#k，这是#b留恋#k……", 37, 9062262, false, true, 1)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这世上若还有存有留恋的亡者……", 37, 9062262, true, true, 1)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我一定会回来……", 37, 9062262, false, true, 1)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=32711695", "special3", -1, 1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.npc_LeaveField("oid=32711695");
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.npc_setForceFlip("oid=32711694", 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -205, 3)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#现在舞会结束了。", 37, 9062255, false, true, 1)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#大家……也可以休息了。", 37, 9062255, true, true, 1)
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#谢谢你。一直在帮我……", 37, 9062255, true, true, 1)
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#终于……这个派对要画上句点了……\r\n小姐，一直以来……能侍奉小姐，是我的#b荣幸#k。", 37, 9062264, false, true, 1)
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#谢谢你……还有我……还有被困在这个宅子里的幽灵们……\r\n现在全都可以……#b好好睡一觉#k了……", 37, 9062256, true, true, 1)
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=32711696", "special", 1, 1);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=32711696");
                                                                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=32711697", "special", 1, 1);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=32711697");
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                        cm.updateInfoQuest(100433, "50=0;43=2;47=0;65=1;49=0");
                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=32711694");
                                                                                                                                                                                                                                                        cm.npc_LeaveField("oid=32714085");
                                                                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                                                                        cm.warp(993175562, 0, false)
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100459.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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