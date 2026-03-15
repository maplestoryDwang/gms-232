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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32733.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("这里有黑乎乎的脏东西。那就让我来打扫打扫吧？", 57, 1530546, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_ForcedFlip10(1, 78);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(1530270, "oid=20701737", 1100, -1248, 39, 1050, 1150, 1, true, false);
                        cm.npc_SetSpecialAction("oid=20701737", "summon", 0, 0);
                        cm.npc_ChangeController(1530280, "oid=20701738", 750, -1248, 38, 700, 800, 0, true, false);
                        cm.npc_SetSpecialAction("oid=20701738", "summon", 0, 0);
                        cm.sendNormalTalk_Bottom("放在那儿吧！我们来打扫就行了！", 37, 1530270, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不用……还是我来吧。", 57, 1530546, true, true);
                            cm.effect_NormalSpeechBalloon("?", 1, 0, 1, 1500, 0, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("别担心！就不必你亲自动手了！", 37, 1530270, true, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove("oid=20701737", -1, 50, 100);
                                    cm.npc_SetForceMove("oid=20701738", 1, 100, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                } else {
                                    if (status === a++) {
                                        cm.npc_SetSpecialAction("oid=20701737", "cleaning", -1, 1);
                                        cm.npc_SetSpecialAction("oid=20701738", "cleaning", -1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.setNpcSpecialActionReset("oid=20701737");
                                            cm.setNpcSpecialActionReset("oid=20701738");
                                            cm.sendNormalTalk_Bottom("请记住我们的样子吧！以后只要别欺负我们就行啦！", 37, 1530270, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=20701737");
                                                cm.npc_LeaveField("oid=20701737");
                                                cm.npc_LeaveField("oid=20701738");
                                                cm.npc_LeaveField("oid=20701738");
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("……？什么，这帮家伙。", 57, 1530546, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                        cm.forceCompleteQuest(32733);
                                                        cm.setNumberForQuestInfo(32759, "3f", 1);
                                                        cm.npc_LeaveField("oid=28319");
                                                        cm.npc_LeaveField("oid=28320");
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
};