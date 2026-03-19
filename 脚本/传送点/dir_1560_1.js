function enter() {
    cm.openScriptNpc()
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
            cm.userSetFieldFloating(867201560, 30, 30, 30);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                cm.inGameDirectionEvent_AskAnswerTime(250)
            } else {
                if (status === a++) {
                    cm.setPartner(0, 9400580, 0, 0);
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -2540, -300);
                    cm.npc_ChangeController(9400580, "oid=7611125", -2160, -540, 140, -2210, -2110, 1, true, false);
                    cm.npc_SetSpecialAction("oid=7611125", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=7611125", -1, 10, 100);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啊啊啊~~~~！", 37, 9400580, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b啊啊啊啊啊~~~！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.userSetFieldFloating(867201560, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNewEffects(17, [1000, 1000, 2000, -2555, 570])
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.Hidden_background("ice03", 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/cracking", 128);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0##h0#！小心~！", 37, 9400580, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.Hidden_background("ice03", 0);
                                                                cm.Hidden_background("ice01", 1);
                                                                cm.onSetMapTagedObjectVisible(1, "ice01", 512);
                                                                cm.onSetMapTagedObjectVisible(1, "ice01", 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/plop", 128);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                    cm.forceStartQuest(64079, "");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.inGameDirectionEvent_MoveAction(8);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.Hidden_background("ice01", 0);
                                                                                cm.inGameDirectionEvent_OneTimeAction(27, 50000);
                                                                                cm.Hidden_background("ice02", 1);
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0##h0#！！！！！！！！！！", 37, 9400580, false, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_QTE(7)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_OneTimeAction(28, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_OneTimeAction(27, 50000);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 3000, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7611125"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                cm.npc_SetForceMove("oid=7611125", -1, 30, 50);
                                                                                                                cm.inGameDirectionEvent_QTE(7)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/splash", 128);
                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(28, 0);
                                                                                                                    cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.inGameDirectionEvent_OneTimeAction(27, 50000);
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 180, 0, 0, 0, 3000, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.inGameDirectionEvent_QTE(7)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/splash", 128);
                                                                                                                                cm.inGameDirectionEvent_OneTimeAction(28, 0);
                                                                                                                                cm.inGameDirectionEvent_MoveAction(8);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(27, 50000);
                                                                                                                                    cm.npc_SetForceMove("oid=7611125", -1, 150, 150);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.forceCompleteQuest(64079);
                                                                                                                                            cm.updateInfoQuest(64080, "chk1=-1");
                                                                                                                                            cm.warp(867201580, 1);
                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                            cm.npc_LeaveField("oid=7611125");
                                                                                                                                            cm.npc_LeaveField("oid=7611125");
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