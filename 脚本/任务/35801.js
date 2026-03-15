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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 564, 104);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 562, 33)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35831, "52=h1");
                cm.forceStartQuest(35801, "");
                cm.inGameDirectionEvent_ForcedFlip(0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好了，那就拜托了。", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_ForcedFlip10(2, 1000);
                                cm.sendNormalTalk_Bottom("#face0#等，等等……你一个人去的话……", 37, 3003758, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, 350, 33)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#啊！！", 37, 3003758, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_ChangeController(3003904, "oid=2176163", -150, -37, 1, -200, -100, 1, true, 1000, false);
                                                cm.npc_SetSpecialAction("oid=2176163", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(3003904, "oid=2176164", -250, -37, 1, -300, -200, 1, true, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=2176164", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(3003904, "oid=2176165", 680, -37, 6, 630, 730, 0, true, 1000, false);
                                                        cm.npc_SetSpecialAction("oid=2176165", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(3003904, "oid=2176166", 800, -37, 6, 750, 850, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=2176166", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_ChangeController(3003904, "oid=2176167", 80, -130, 2, 30, 130, 0, true, 1000, false);
                                                                cm.npc_SetSpecialAction("oid=2176167", "summon", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_ChangeController(3003904, "oid=2176168", 255, -350, 11, 205, 305, 0, true, 1000, false);
                                                                    cm.npc_SetSpecialAction("oid=2176168", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(3003904, "oid=2176169", 479, -350, 11, 429, 529, 0, true, 1000, false);
                                                                        cm.npc_SetSpecialAction("oid=2176169", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_setForceFlip("oid=2176107", 1);
                                                                            cm.npc_setForceFlip("oid=2176160", 1);
                                                                            cm.npc_setForceFlip("oid=2176162", -1);
                                                                            cm.npc_SetSpecialAction("oid=2176107", "alert", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2176160", "alert", -1, 1);
                                                                            cm.npc_SetSpecialAction("oid=2176162", "alert", -1, 1);
                                                                            cm.sendNormalTalk_Bottom("#face0#切，全部变为战斗队形！", 37, 3003758, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#这些东西是什么？前面又发生了什么事？", 37, 3003759, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#注意前面！来了！", 37, 3003760, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_SetForceMove("oid=2176163", 1, 430, 120);
                                                                                        cm.npc_SetForceMove("oid=2176164", 1, 430, 120);
                                                                                        cm.npc_SetForceMove("oid=2176165", -1, 430, 120);
                                                                                        cm.npc_SetForceMove("oid=2176166", -1, 430, 120);
                                                                                        cm.npc_SetSpecialAction("oid=2176162", "attack", -1, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=2176107", "attack", -1, 1);
                                                                                            cm.npc_SetSpecialAction("oid=2176160", "attack", -1, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_LeaveField("oid=2176107");
                                                                                                    cm.npc_LeaveField("oid=2176107");
                                                                                                    cm.npc_LeaveField("oid=2176160");
                                                                                                    cm.npc_LeaveField("oid=2176160");
                                                                                                    cm.npc_LeaveField("oid=2176162");
                                                                                                    cm.npc_LeaveField("oid=2176162");
                                                                                                    cm.npc_LeaveField("oid=2176163");
                                                                                                    cm.npc_LeaveField("oid=2176163");
                                                                                                    cm.npc_LeaveField("oid=2176164");
                                                                                                    cm.npc_LeaveField("oid=2176164");
                                                                                                    cm.npc_LeaveField("oid=2176165");
                                                                                                    cm.npc_LeaveField("oid=2176165");
                                                                                                    cm.npc_LeaveField("oid=2176166");
                                                                                                    cm.npc_LeaveField("oid=2176166");
                                                                                                    cm.npc_LeaveField("oid=2176167");
                                                                                                    cm.npc_LeaveField("oid=2176167");
                                                                                                    cm.npc_LeaveField("oid=2176168");
                                                                                                    cm.npc_LeaveField("oid=2176168");
                                                                                                    cm.npc_LeaveField("oid=2176169");
                                                                                                    cm.npc_LeaveField("oid=2176169");
                                                                                                    cm.dispose();
                                                                                                    cm.warp(450012010, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35801.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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