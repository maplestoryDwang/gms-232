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
            cm.sendNormalTalk_Bottom("#face3#啊！看来已经有人到了！", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(64601, "");
                    cm.npc_ChangeController(9400929, "oid=11112416", -260, 100, 0);
                    cm.npc_SetSpecialAction("oid=11112416", "summon", 0, 0);
                    cm.npc_ChangeController(9400928, "oid=11112417", -210, 100, 0);
                    cm.npc_SetSpecialAction("oid=11112417", "summon", 0, 0);
                    cm.npc_ChangeController(9400923, "oid=11112418", -160, 100, 0);
                    cm.npc_SetSpecialAction("oid=11112418", "summon", 0, 0);
                    cm.onTeleport(1, cm.getPlayer().getId(), -110, 100);
                    cm.npc_ChangeController(9400922, "oid=11112419", -60, 100, 1);
                    cm.npc_SetSpecialAction("oid=11112419", "summon", 0, 0);
                    cm.npc_ChangeController(9400924, "oid=11112420", -10, 100, 1);
                    cm.npc_SetSpecialAction("oid=11112420", "summon", 0, 0);
                    cm.npc_ChangeController(9400935, "oid=11112421", 40, 100, 1);
                    cm.npc_SetSpecialAction("oid=11112421", "summon", 0, 0);
                    cm.npc_ChangeController(9400936, "oid=11112422", 90, 100, 1);
                    cm.npc_SetSpecialAction("oid=11112422", "summon", 0, 0);
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
                                cm.effect_NormalSpeechBalloon("#fs15##b谢谢大家能来。", 1, 0, 0, 2000, 0, cm.getPlayer().getId());
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.effect_NormalSpeechBalloon("这间房子已经空了很久了，能有新人进来真是太好了。", 1, 0, 0, 2000, 9400922, cm.getPlayer().getId());
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.effect_NormalSpeechBalloon("是吧？村子里似乎也焕发了活力呢！", 1, 0, 0, 2000, 9400929, cm.getPlayer().getId());
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_NormalSpeechBalloon("有点小啊。", 1, 0, 0, 2000, 9400924, cm.getPlayer().getId());
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.effect_NormalSpeechBalloon("啊？这是我做的桌子！真是不错啊！哈哈", 1, 0, 0, 2000, 9400923, cm.getPlayer().getId());
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_NormalSpeechBalloon("勇士大人，我会经常来玩的！", 1, 0, 0, 2000, 9400935, cm.getPlayer().getId());
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_NormalSpeechBalloon("特鲁迪~~你不和姐姐玩，只和勇士大人玩吗？", 1, 0, 0, 2000, 9400928, cm.getPlayer().getId());
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=11112416");
                                                                cm.npc_LeaveField("oid=11112417");
                                                                cm.npc_LeaveField("oid=11112422");
                                                                cm.forceCompleteQuest(64601);
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setInGameDirectionMode(false, true, false);
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