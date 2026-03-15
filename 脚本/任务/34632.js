var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status >= 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 319, 0);
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === b++) {
                cm.npc_ChangeController(3001268, "oid=683921", -720, 10, 3, -770, -670, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=683921", "summon", 0, 0);
                cm.npc_ChangeController(3001268, "oid=683922", -800, 10, 3, -850, -750, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=683922", "summon", 0, 0);
                cm.npc_ChangeController(3001267, "oid=683923", -910, 10, 3, -960, -860, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=683923", "summon", 0, 0);
                cm.npc_ChangeController(3001267, "oid=683924", -990, 10, 3, -1040, -940, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=683924", "summon", 0, 0);
                cm.npc_ChangeController(3001267, "oid=683925", -1060, 10, 3, -1110, -1010, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=683925", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === b++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === b++) {
                        cm.npc_SetForceMove("oid=683921", 1, 270, 120);
                        cm.npc_SetForceMove("oid=683922", 1, 270, 120);
                        cm.npc_SetForceMove("oid=683923", 1, 270, 120);
                        cm.npc_SetForceMove("oid=683924", 1, 270, 120);
                        cm.npc_SetForceMove("oid=683925", 1, 270, 120);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("#face0#哈哈，如果我们先放出消息，就会有人上门交易。快点准备吧。", 37, 3001267, false, true, 1)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#face0#跟这些跑来交易的家伙根本说不通。", 37, 3001268, true, true, 1)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face0#别担心。钱已经付过了，我们只管好好保管物品。", 37, 3001267, true, true, 1)
                                } else {
                                    if (status === b++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face0##b(出现了。按照支部长所说的去做就行了吧？呃呃，这么做不是我的性格啊……)#k", 37, 3001270, false, true, 1)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("#face0##b(哈哈，我说过喝下秘药就能伪装成那些家伙的同伴了吧？那快闭上眼睛……)#k", 37, 3001270, true, true, 1)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face5##b(喂，你怎么一下子用这么多啊！？这也太不地道了……)#k", 37, 3001270, true, true, 1)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face5##b(呃，这么拖拖拉拉的谁受得了。必须赶快解决。)#k", 37, 3001270, true, true, 1)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.inGameDirectionEvent_ForcedFlip10(1, 250);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#呼哧，你们没听到消息吗？这、这次交易取、取消了？", 37, 3001270, false, true, 1)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#什么么么么么么么么么？", 37, 3001268, true, true, 1)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#白痴，这么重要的事怎么现在才说？切，害我白跑一趟！", 37, 3001268, true, true, 1)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#呃，白忙活一场，简直是浪费时间。呸，还是回据点去吧。", 37, 3001267, true, true, 1)
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === b++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                    } else {
                                                                                        if (status === b++) {
                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                            cm.npc_ChangeController(3001264, "oid=683930", -180, 10, 1, -230, -130, 1, false, 0, false);
                                                                                            cm.npc_SetSpecialAction("oid=683930", "summon", 0, 0);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/labo1", 250);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                        } else {
                                                                                            if (status === b++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#哔哔哩-哔哩-哔-", 37, 3001264, false, true, 1)
                                                                                            } else {
                                                                                                if (status === b++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#呃，什么人？长得还这么奇怪！喂、喂，赶快给我滚开！", 37, 3001268, true, true, 1)
                                                                                                } else {
                                                                                                    if (status === b++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/labo5", 250);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                                    } else {
                                                                                                        if (status === b++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#哔-哔哩哩-哔-", 37, 3001264, false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === b++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#……额，这个时间只有交易商会来……不对，交易明明取消了……", 37, 3001268, true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === b++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你、你竟敢骗我们！还、还不表明身份！", 37, 3001268, true, true, 1)
                                                                                                                } else {
                                                                                                                    if (status === b++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === b++) {
                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                        } else {
                                                                                                                            if (status === b++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                            } else {
                                                                                                                                if (status === b++) {
                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                } else {
                                                                                                                                    if (status === b++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.askAcceptDecline_Bottom("#face5##b(糟糕，被发现了……既然如此，那我们只有硬抢了……)#k\r\n\r\n#r ※ 接受时，将自动前往狩猎任务区域。", 37, 3001270, 1)
                                                                                                                                    } else {
                                                                                                                                        if (status === b++) {
                                                                                                                                            cm.playerMessage(5, "需要消灭Mr.哈扎尔的部下们。");
                                                                                                                                            cm.npc_LeaveField("oid=683921");
                                                                                                                                            cm.npc_LeaveField("oid=683922");
                                                                                                                                            cm.npc_LeaveField("oid=683923");
                                                                                                                                            cm.npc_LeaveField("oid=683924");
                                                                                                                                            cm.npc_LeaveField("oid=683925");
                                                                                                                                            cm.npc_LeaveField("oid=683930");
                                                                                                                                            var a = cm.getEventManager("魔链影士_战斗7_击杀数");
                                                                                                                                            a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34632.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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