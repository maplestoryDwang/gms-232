var status = -1;
var selectionLog = [];

function start() {
    status = -1;
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getQuestStatus(32241) == 1) {
        action32241(c, b, a)
    } else {
        if (cm.getQuestStatus(32246) == 1) {
            action32246(c, b, a)
        } else {
            if (cm.isQuestActive(32248)) {
                cm.npc_ChangeController(1520001, "oid=1226864", -785, -945, 242, -835, -735, 0, false, 0, false);
                cm.dispose();
                return
            } else {
                if (cm.getQuestStatus(32253) == 1) {
                    action32253(c, b, a)
                } else {
                    if (cm.getQuestStatus(32263) == 1) {
                        action32263(c, b, a)
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action32246(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1040000, "oid=217500", -499, 395, 96, -549, -449, 1, false, 0, false);
            cm.npc_ChangeController(1520011, "oid=217501", -773, -926, 242, -823, -723, 1, false, 0, false);
            cm.npc_ChangeController(1520063, "oid=217502", 386, -205, 102, 336, 436, 0, false, 0, false);
            cm.npc_ChangeController(1520001, "oid=1226864", -785, -945, 242, -835, -735, 0, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_SetSpecialAction("oid=1226864", "summon", 0, 0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, -790, -940)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4697)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(910400200, 1, "1520001", 32246);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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

function action32241(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1040000, "oid=217500", -499, 395, 96, -549, -449, 1, false, 0, false);
            cm.npc_ChangeController(1520011, "oid=217501", -773, -926, 242, -823, -723, 1, false, 0, false);
            cm.npc_ChangeController(1520063, "oid=217502", 386, -205, 102, 336, 436, 0, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_ChangeController(1520000, "oid=1198378", -135, -350, 176, -185, -85, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=1198378", "summon", 0, 0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, -140, -350)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2857)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 300, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1922)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(900)
                            } else {
                                if (status === a++) {
                                    cm.OnStartNavigation(910400200, 1, "1520000", 32241);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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

function action32263(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1040000, "oid=275285", -499, 395, 96, -549, -449, 1, false, 0, false);
            cm.npc_ChangeController(1520011, "oid=275286", -773, -926, 242, -823, -723, 1, false, 0, false);
            cm.npc_ChangeController(1520063, "oid=275287", 386, -205, 102, 336, 436, 0, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_ChangeController(1520003, "oid=1670915", 100, 305, 20, 50, 150, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=1670915", "summon", 0, 0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 100, 300)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=1670915", 1, 300, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(3873)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=1670915");
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32263, "1");
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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

function action32253(d, c, b) {
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
        if (status === a++) {
            cm.npc_ChangeController(1040000, "oid=219260", -499, 395, 96, -549, -449, 1, false, 0, false);
            cm.npc_ChangeController(1520011, "oid=219261", -773, -926, 242, -823, -723, 1, false, 0, false);
            cm.npc_ChangeController(1520063, "oid=219262", 386, -205, 102, 336, 436, 0, false, 0, false);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.npc_ChangeController(1520003, "oid=4548742", 100, 305, 20, 50, 150, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=4548742", "summon", 0, 0);
                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 100, 300)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=4548742", 1, 300, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(3873)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=4548742");
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32253, "1");
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
};