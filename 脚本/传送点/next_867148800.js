function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
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
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9401057, "oid=39276484", 900, 50, 4, 850, 950, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=39276484", "summon", 0, 0);
                cm.npc_ChangeController(9401125, "oid=39276485", 1150, 50, 1, 1100, 1200, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=39276485", "summon", 0, 0);
                cm.npc_ChangeController(9401126, "oid=39276486", 1300, 50, 2, 1250, 1350, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=39276486", "summon", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600)
                    } else {
                        if (status === a++) {
                            cm.npc_setForceFlip("oid=39276486", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(600)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39276486"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("躲开！", 37, 9401032, false, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove("oid=39276486", -1, 250, 300);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=39276484", "die", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.Npc_Fadeout("oid=39276484", 0, 1000);
                                                cm.sendNormalTalk_Bottom("…？！", 37, 9401031, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_setForceFlip("oid=39276486", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("怎么样～受到我这种小孩子的帮助～ ", 37, 9401032, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetForceMove("oid=39276486", 1, 400, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("……哈…… ", 37, 9401031, false, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.eventSKill(0);
                                                                        cm.warp(867148820, 0, false);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.updateInfoQuest(64754, "reward=0;time=43082;reset=20/03/24;rewardTime=0;lastday=20/03/23");
                                                                        cm.npc_LeaveField("oid=39276484");
                                                                        cm.npc_LeaveField("oid=39276484");
                                                                        cm.npc_LeaveField("oid=39276485");
                                                                        cm.npc_LeaveField("oid=39276485");
                                                                        cm.npc_LeaveField("oid=39276486");
                                                                        cm.npc_LeaveField("oid=39276486");
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
};