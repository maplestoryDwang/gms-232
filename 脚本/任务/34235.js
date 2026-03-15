var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.forceStartQuest(34235, "");
            cm.forceCompleteQuest(34235);
            cm.sendNormalTalk_Bottom("那是什么门呢？", 56, 0, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("里面好像……有光透出来……？", 56, 0, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === b++) {
                        cm.npc_ChangeController(3003486, "oid=2011007", 1455, 50, 4, 1405, 1505, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011007", "summon", 0, 0);
                        cm.npc_ChangeController(3003486, "oid=2011008", 1550, 50, 5, 1500, 1600, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011008", "summon", 0, 0);
                        cm.npc_ChangeController(3003487, "oid=2011009", 1650, 50, 5, 1600, 1700, 1, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011009", "summon", 0, 0);
                        cm.npc_ChangeController(3003486, "oid=2011010", 1055, 50, 3, 1005, 1105, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011010", "summon", 0, 0);
                        cm.npc_ChangeController(3003486, "oid=2011011", 935, 50, 3, 885, 985, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011011", "summon", 0, 0);
                        cm.npc_ChangeController(3003487, "oid=2011012", 825, 50, 3, 775, 875, 0, false, 1000, false);
                        cm.npc_SetSpecialAction("oid=2011012", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === b++) {
                            cm.npc_SetSpecialAction("oid=2011007", "stand2", -1, 1);
                            cm.npc_SetSpecialAction("oid=2011008", "stand2", -1, 1);
                            cm.npc_SetSpecialAction("oid=2011009", "stand2", -1, 1);
                            cm.npc_SetSpecialAction("oid=2011010", "stand2", -1, 1);
                            cm.npc_SetSpecialAction("oid=2011011", "stand2", -1, 1);
                            cm.npc_SetSpecialAction("oid=2011012", "stand2", -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("可恶！必须先解决掉那些东西！", 57, 0, false, true)
                            } else {
                                if (status === b++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                } else {
                                    if (status === b++) {
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
                                                    cm.playerMessage(5, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
                                                    cm.dispose();
                                                    var a = cm.getEventManager("莫拉斯_剧情_战斗6");
                                                    a.startInstance(cm.getPlayer());
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};