function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(1540762, "oid=286769324", 331, -250, 3, 281, 381, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=286769324", "summon", 0, 0);
            cm.npcMove(1540762, 0, 1000, 0);
            cm.sendNormalTalk_Bottom("没有路了……", 37, 1540453, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没……力气了……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("请振作起来！！不要失去希望。", 37, 1540453, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("吉格蒙特说一定会回来救我们的。我相信她！", 37, 1540453, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯，战斗机会来的。", 37, 1540453, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抱歉！战斗机都摧毁了！", 45, 1540452, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("吉格蒙特？！你在哪？", 37, 1540453, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("快跳！！", 45, 1540452, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npcMove(1540762, 0, -430, 2000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1800)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_QTE(3)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npcMove(1540762, 0, -45, 600);
                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(10)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_MoveAction(7);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 20, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.dispose();
                                                                                cm.warp(350063005, 0, true);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=286763940");
                                                                                cm.npc_LeaveField("oid=286763940");
                                                                                cm.npc_LeaveField("oid=286769324");
                                                                                cm.npc_LeaveField("oid=286769324")
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