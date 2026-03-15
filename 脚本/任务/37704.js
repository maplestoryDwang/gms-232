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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -20, -10)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -167, 72);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
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
                                    cm.sendNormalTalk_Bottom("对了，不久前你有没有在这附近……", 57, 0, false, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642050/Die", 100);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642051/Die", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642050/Attack1", 100);
                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8642051/Attack1", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=0"], [0, 97, 100, 1, 0, 1, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这是什么声音……", 57, 0, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_ChangeController(3004745, "oid=1859890", -781, 100, 2, -831, -731, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859890", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004746, "oid=1859891", -656, 100, 2, -706, -606, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859891", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004745, "oid=1859892", -548, 100, 2, -598, -498, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859892", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004746, "oid=1859893", -425, 100, 2, -475, -375, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859893", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004746, "oid=1859894", -308, 100, 2, -358, -258, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859894", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004745, "oid=1859895", 218, 100, 1, 168, 268, 1, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859895", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004745, "oid=1859896", 300, 100, 1, 250, 350, 1, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859896", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004746, "oid=1859897", 403, 100, 3, 353, 453, 1, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859897", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004745, "oid=1859898", 523, 100, 3, 473, 573, 1, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859898", "summon", 0, 0);
                                                            cm.npc_ChangeController(3004746, "oid=1859899", 631, 100, 3, 581, 681, 1, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=1859899", "summon", 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, false, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你的同伴……？是吗？总觉得似曾相识……", 57, 0, true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#现在没时间解释！切……快后退！那些家伙非常凶暴！", 37, 3004732, true, true, 1)
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
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.askAcceptDecline_Bottom("#face0#我在这里挡住他们，你先躲到安全的地方！\r\n#r（接受时，立即移动。）#k", 37, 3004732, 1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("别担心。你负责前面，我负责后面。", 57, 0, false, true, 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.playerMessage(5, "必须将发动袭击的蒙奇怪和蘑菇狂全部消灭掉。");
                                                                                                    cm.npc_LeaveField("oid=1859890");
                                                                                                    cm.npc_LeaveField("oid=1859891");
                                                                                                    cm.npc_LeaveField("oid=1859892");
                                                                                                    cm.npc_LeaveField("oid=1859893");
                                                                                                    cm.npc_LeaveField("oid=1859894");
                                                                                                    cm.npc_LeaveField("oid=1859895");
                                                                                                    cm.npc_LeaveField("oid=1859896");
                                                                                                    cm.npc_LeaveField("oid=1859897");
                                                                                                    cm.npc_LeaveField("oid=1859898");
                                                                                                    cm.npc_LeaveField("oid=1859899");
                                                                                                    cm.dispose();
                                                                                                    cm.forceJoinEvent("真香岛_战斗1_击杀数")
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37704.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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