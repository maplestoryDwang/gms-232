var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    if (cm.isQuestFinished(33184)) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.gainExp(1399);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呼，想要进入船内的怪物好像都被消灭了？\r\n这简直是小菜一碟啊。", 37, 1540624, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.setPartner(0, 1540624, 0, 0);
                            cm.setPartner(0, 1540618, 0, 0);
                            cm.setPartner(0, 1540619, 0, 0);
                            cm.setPartner(0, 1540617, 0, 0);
                            cm.setPartner(0, 1540629, 0, 0);
                            cm.setPartner(0, 1540630, 0, 0);
                            cm.setPartner(0, 1540631, 0, 0);
                            cm.setPartner(0, 1540632, 0, 0);
                            cm.setPartner(0, 1540633, 0, 0);
                            cm.setPartner(0, 1540634, 0, 0);
                            cm.npc_ChangeController(1540624, "oid=22421983", -327, -146, 2, -377, -277, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421983", "summon", 0, 0);
                            cm.npc_ChangeController(1540618, "oid=22421984", -262, -146, 2, -312, -212, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421984", "summon", 0, 0);
                            cm.npc_ChangeController(1540619, "oid=22421985", -213, -146, 2, -263, -163, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421985", "summon", 0, 0);
                            cm.npc_ChangeController(1540617, "oid=22421986", -45, -146, 3, -95, 5, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421986", "summon", 0, 0);
                            cm.npc_ChangeController(1540629, "oid=22421987", -150, -146, 2, -200, -100, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421987", "summon", 0, 0);
                            cm.npc_ChangeController(1540630, "oid=22421988", -180, -146, 2, -230, -130, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421988", "summon", 0, 0);
                            cm.npc_ChangeController(1540632, "oid=22421989", -60, -146, 3, -110, -10, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421989", "summon", 0, 0);
                            cm.npc_ChangeController(1540634, "oid=22421990", -90, -146, 3, -140, -40, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=22421990", "summon", 0, 0);
                            cm.npc_ChangeController(1540544, "oid=22421991", 1435, -146, 9, 1385, 1485, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=22421991", "summon", 0, 0);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 6000, 100, -146)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(338)
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
                                            cm.sendNormalTalk_Bottom("现在得让救出来的士兵在安全的地方恢复一下体力。", 37, 1540624, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我也很好奇甲板上的情况。\r\n当然，韩利泰那家伙应该有好好处理吧？", 37, 1540624, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetForceMove("oid=22421983", -1, 70, 100);
                                                    cm.npc_SetForceMove("oid=22421984", -1, 190, 100);
                                                    cm.npc_SetForceMove("oid=22421985", -1, 240, 100);
                                                    cm.npc_SetForceMove("oid=22421986", -1, 400, 100);
                                                    cm.npc_SetForceMove("oid=22421987", -1, 300, 100);
                                                    cm.npc_SetForceMove("oid=22421988", -1, 270, 100);
                                                    cm.npc_SetForceMove("oid=22421989", -1, 390, 100);
                                                    cm.npc_SetForceMove("oid=22421990", -1, 340, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=22421983");
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField("oid=22421984");
                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=22421985");
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_LeaveField("oid=22421988");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_LeaveField("oid=22421987");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_LeaveField("oid=22421990");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.npc_LeaveField("oid=22421989");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.npc_LeaveField("oid=22421986");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
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
                                                                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                        cm.forceCompleteQuest(33171);
                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            cm.effect_NormalSpeechBalloon("那我也到甲板上看看吧?", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId())
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 600, 1437, -75)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(601)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs22#喂!!!外面什么人都没有吗?!!!", 0, 0, 0, 2000, 1, 0, -95, 0, 4, 1540544, cm.getPlayer().getId())
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                            cm.effect_NormalSpeechBalloon("#fn黑体##fs22#快救人啊!!唉, 我要死了!!", 0, 0, 0, 2500, 1, 0, -95, 0, 4, 1540544, cm.getPlayer().getId())
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs22#我还没有见到奥尔卡, 不能就这么死了!!救命啊!!", 0, 0, 0, 3000, 1, 0, -95, 0, 4, 1540544, cm.getPlayer().getId())
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
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
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                        cm.effect_NormalSpeechBalloon("噢!那边不是监狱嘛!有人被关在里面!", 1, 0, 1, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId())
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                            cm.forceCompleteQuest(33184);
                                                                                                                                                            cm.forceCompleteQuest(33181);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33184.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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