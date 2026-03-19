function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
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
            cm.setPartner(0, 9400580, 0, 0);
            cm.setPartner(0, 9400595, 0, 0);
            cm.forceCompleteQuest(64073);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9400580, "oid=7606327", -337, 440, 1, -387, -287, 1, true, false);
            cm.npc_SetSpecialAction("oid=7606327", "summon", 0, 0);
            cm.npc_ChangeController(9400595, "oid=7606328", -176, 440, 1, -226, -126, 1, true, false);
            cm.npc_SetSpecialAction("oid=7606328", "summon", 0, 0);
            cm.npc_ChangeController(9400609, "oid=7606329", 450, 440, 2, 400, 500, 1, true, false);
            cm.npc_SetSpecialAction("oid=7606329", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(250)
        } else {
            if (status === a++) {
                cm.npc_SetForceMove("oid=7606329", -1, 500, 150);
                cm.inGameDirectionEvent_AskAnswerTime(250)
            } else {
                if (status === a++) {
                    cm.npc_SetSpecialAction("oid=7606327", "ribbon", -1, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_ForcedFlip10(2, 250);
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.setNpcSpecialActionReset("oid=7606327");
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.npc_setForceFlip("oid=7606327", 1);
                                    cm.npc_setForceFlip("oid=7606328", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=7606327"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#嗯？在天上飞的独眼触须怪？", 37, 9400580, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b它怎么会飞呢？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetForceMove("oid=7606327", 1, 250, 80);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 700);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7606329"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_setForceFlip("oid=7606329", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetForceMove("oid=7606329", 1, 200, 150);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_SetSpecialAction("oid=7606329", "die1", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/eyeeyeportal", 128);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7606327"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.warp(867201401, 1);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=7606327");
                                                                                    cm.npc_LeaveField("oid=7606327");
                                                                                    cm.npc_LeaveField("oid=7606328");
                                                                                    cm.npc_LeaveField("oid=7606328");
                                                                                    cm.npc_LeaveField("oid=7606329");
                                                                                    cm.npc_LeaveField("oid=7606329");
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
};