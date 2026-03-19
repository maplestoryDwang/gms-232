function enter() {
    if (cm.getNumberFromQuestInfo(64015, "chk3") == 0) {
        cm.onTeleport(1, cm.getPlayer().getId(), -81, 385);
        cm.addPopupSay(9400581, 2000, "#face0#你开什么小差！！", "", 0)
    } else {
        if (cm.getNumberFromQuestInfo(64015, "slaDir") == 0) {
            cm.openScriptNpc()
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(9400667, "oid=2279123", 1350, 76, 57, 1300, 1400, 1, true, false);
            cm.npc_SetSpecialAction("oid=2279123", "summon", 0, 0);
            cm.npc_SetForceMove("oid=2279123", -1, 450, 200);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNewEffects(12, [2000, 805, -22, 0, 0])
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=2279123", "jumpattack", 2160, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/burning1", 128);
                            cm.Hidden_background("fire1", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 68, 324);
                                cm.npc_SetSpecialAction("oid=2279123", "hit", 200, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(300)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetSpecialAction("oid=2279123", "ear", 1680, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1700)
                                } else {
                                    if (status === a++) {
                                        cm.npc_setForceFlip("oid=2279123", 1);
                                        cm.npc_SetForceMove("oid=2279123", 1, 100, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.addPopupSay(9400590, 2000, "#face0#这边！先救我！", "", 0);
                                            cm.sendNewEffects(17, [500, 1000, 2000, 330, 160])
                                        } else {
                                            if (status === a++) {
                                                cm.Hidden_background("guide1", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.playerMessage(-1, "救出被压在台阶下面的村民！");
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=2279123");
                                                        cm.npc_LeaveField("oid=2279123");
                                                        cm.sendNewEffects(19, [1000])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setStandAloneMode(false);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setNumberForQuestInfo(64015, "slaDir", 1);
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
};