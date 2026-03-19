function enter() {
    if (cm.getNumberFromQuestInfo(64088, "coll5") < 1) {
        cm.openScriptNpc()
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
            cm.npc_LeaveField("oid=7621332");
            cm.npc_LeaveField("oid=7621332");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.updateInfoQuest(64088, "coll1=1;coll2=1;coll3=1;coll4=1;coll5=1");
            cm.updateInfoQuest(64088, "coll1=1;coll2=1;coll3=1;coll4=1;coll5=1;chk1=1");
            cm.npc_ChangeController(9400580, "oid=7621422", -340, -585, 142, -390, -290, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621422", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7621423", 200, 400, 14, 150, 250, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621423", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7621424", 120, 400, 22, 70, 170, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621424", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7621425", 50, 400, 22, 0, 100, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621425", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7621426", -30, 400, 31, -80, 20, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621426", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7621427", -100, 400, 29, -150, -50, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621427", "summon", 0, 0);
            cm.npc_ChangeController(9400642, "oid=7621428", -180, 400, 23, -230, -130, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621428", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7621429", -280, 400, 32, -330, -230, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621429", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7621430", -350, 400, 28, -400, -300, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621430", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7621431", -430, 400, 24, -480, -380, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621431", "summon", 0, 0);
            cm.npc_ChangeController(9400641, "oid=7621432", -500, 400, 33, -550, -450, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621432", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7621433", -560, 400, 33, -610, -510, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621433", "summon", 0, 0);
            cm.npc_ChangeController(9400641, "oid=7621434", -620, 400, 30, -670, -570, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621434", "summon", 0, 0);
            cm.npc_ChangeController(9400667, "oid=7621435", -800, 400, 11, -850, -750, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621435", "summon", 0, 0);
            cm.npc_ChangeController(9400672, "oid=7621436", -850, 400, 11, -900, -800, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621436", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7621437", -910, 400, 34, -960, -860, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621437", "summon", 0, 0);
            cm.npc_ChangeController(9400675, "oid=7621438", -970, 400, 26, -1020, -920, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621438", "summon", 0, 0);
            cm.npc_ChangeController(9400666, "oid=7621439", -1050, 400, 41, -1100, -1000, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621439", "summon", 0, 0);
            cm.npc_ChangeController(9400674, "oid=7621440", -1120, 400, 41, -1170, -1070, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621440", "summon", 0, 0);
            cm.npc_ChangeController(9400676, "oid=7621441", -1200, 400, 47, -1250, -1150, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621441", "summon", 0, 0);
            cm.npc_ChangeController(9400672, "oid=7621442", -1250, 400, 48, -1300, -1200, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621442", "summon", 0, 0);
            cm.npc_ChangeController(9400668, "oid=7621443", -1400, 400, 50, -1450, -1350, 1, true, false);
            cm.npc_SetSpecialAction("oid=7621443", "summon", 0, 0);
            cm.npc_SetForceMove("oid=7621423", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621424", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621425", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621426", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621427", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621428", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621429", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621430", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621431", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621432", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621433", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621434", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621435", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621436", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621437", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621438", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621439", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621440", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621441", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621442", 1, 200, 10);
            cm.npc_SetForceMove("oid=7621443", 1, 200, 10);
            cm.setMobImage("PL_MONAD.img/EP1/ACT2/monsterfootstep_loop", 100);
            cm.sendNewEffects(12, [3000, -800, 380, 0, 0])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.npc_LeaveField("oid=7621422")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#天呐，究竟那是……", 37, 9400580, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b他们是要去哪里呢？", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##h0#……", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你看到那边的丝带了吗？……", 37, 9400580, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNewEffects(17, [1000, 1000, 2000, -423, 370])
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#难道它们去的方向是……", 37, 9400580, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b……难道？", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#斯巴乐缇？", 37, 9400580, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNewEffects(19, [1000])
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b等下，我去看看！", 57, 0, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.playerMessage(-1, "上到树顶确认怪物军团的目的地。");
                                                                                cm.Hidden_background("up00", 1);
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
};