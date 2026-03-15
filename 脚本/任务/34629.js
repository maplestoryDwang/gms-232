var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#不、不是，你们这些家伙是谁！？怎、怎么跑到这来的！？入、入侵者！干掉他们，快！", 37, 3001269, false, true, 1)
        } else {
            if (status === b++) {
                cm.askAcceptDecline_Bottom("#face4##b(看样子要想调查附近，只有消灭Mr.哈扎尔的部下了。赶快把那些家伙都消灭吧。)#k\r\n\r\n#r※接受时，将自动前往狩猎任务区域。", 37, 3001270, 1)
            } else {
                if (status === b++) {
                    cm.playerMessage(5, "需要消灭Mr.哈扎尔的部下们。");
                    var a = cm.getEventManager("魔链影士_战斗6_击杀数");
                    a.startInstance(cm.getPlayer(), cm.getMap());
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34629.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 244, 5);
            cm.npc_ChangeController(3001251, "oid=683722", 376, 10, 46, 326, 426, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=683722", "summon", 0, 0);
            cm.npc_ChangeController(3001252, "oid=683723", -480, 10, 43, -530, -430, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=683723", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=683723", "tears", -1, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那、那些家伙研制的试剂，应该跟垃圾场的变种豪猪有些关系。", 37, 3001251, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#气味也很相似……难道只有我……一个人这么认为吗！？", 37, 3001251, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#所、所以说啊，最好把那些家伙留下的试剂带上。趁他们还没发动反攻，快……", 37, 3001251, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.npc_SetForceMove("oid=683722", -1, 290, 150);
                                cm.inGameDirectionEvent_ForcedFlip10(1, 290);
                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#波波、波……", 37, 3001252, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊，那些生物……", 37, 3001251, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip10(1, 130);
                                            cm.npc_SetForceMove("oid=683722", -1, 130, 150);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#好可爱，竟然将这么小的孩子用于试剂实验……看、看来是我们救了那孩子。", 37, 3001251, false, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#波、波波……", 37, 3001252, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#看来这孩子叫波波。", 37, 3001251, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#昂，别哭，你马上就能摆脱这铁窗了。尽量跑得远远的……一定要幸福哦……", 37, 3001251, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetSpecialAction("oid=683723", "jump", -1, 1);
                                                                cm.sendNormalTalk_Bottom("#face0#波波、波……", 37, 3001252, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setNpcSpecialActionReset("oid=683723");
                                                                    cm.npc_SetForceMove("oid=683723", -1, 250, 150);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#赶快带着试剂跑到后巷去。呃，我感觉那些家伙好像要追上来了……", 37, 3001251, false, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_LeaveField("oid=683722");
                                                                                        cm.npc_LeaveField("oid=683723");
                                                                                        cm.forceCompleteQuest(34629);
                                                                                        cm.gainExp(11161);
                                                                                        cm.dispose();
                                                                                        cm.warp(402000400, 0, false);
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setStandAloneMode(false)
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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