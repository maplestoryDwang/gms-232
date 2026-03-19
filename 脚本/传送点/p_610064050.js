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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 200, 280)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.npc_ChangeController(9201567, "oid=2744456", 600, 275, 15, 550, 650, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2744456", "summon", 0, 0);
                        cm.npc_ChangeController(9201566, "oid=2744457", 600, 275, 15, 550, 650, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2744457", "summon", 0, 0);
                        cm.npc_ChangeController(9201567, "oid=2744458", 600, 275, 15, 550, 650, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2744458", "summon", 0, 0);
                        cm.npc_SetForceMove("oid=2744456", -1, 400, 300);
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_QTE(4)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_OneTimeAction(16, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(200)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction("oid=2744456", "hurt", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.npc_LeaveField("oid=2744456");
                                        cm.npc_LeaveField("oid=2744456");
                                        cm.inGameDirectionEvent_ForcedFlip10(2, 50);
                                        cm.npc_SetForceMove("oid=2744457", -1, 300, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(800)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_QTE(3)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetSpecialAction("oid=2744457", "hurt", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=2744457");
                                                        cm.npc_LeaveField("oid=2744457");
                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 50);
                                                        cm.npc_SetForceMove("oid=2744458", -1, 200, 300);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_QTE(7)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_SetSpecialAction("oid=2744458", "hurt", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_LeaveField("oid=2744458");
                                                                        cm.npc_LeaveField("oid=2744458");
                                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 70);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.eventSKill(0);
                                                                            cm.warp(610064060, 0, true);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2744256");
                                                                            cm.npc_LeaveField("oid=2744256");
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
};