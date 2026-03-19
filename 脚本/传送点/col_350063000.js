function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.updateInfoQuest(33266, "save=1;or=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.userSetFieldFloating(350063000, 0, 0, 20);
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.npc_ChangeController(1540490, "oid=286650214", -500, 66, 1, -550, -450, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=286650214", "summon", 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -460, 70)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嘁，来晚了一步。", 45, 1540490, false, true)
                            } else {
                                if (status === a++) {
                                    cm.npc_SetForceMove("oid=286650214", 1, 280, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -100, 70)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                        } else {
                                            if (status === a++) {
                                                cm.userSetFieldFloating(350063000, 5, 5, 20);
                                                cm.sendNormalTalk_Bottom("没有奥尔卡的允许，\r\n你就随便消灭了格里梅尔？", 45, 1540490, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.userSetFieldFloating(350063000, 0, 0, 20);
                                                        cm.sendNormalTalk_Bottom("死得真狼狈。", 45, 1540490, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("你不觉得委屈吗？", 45, 1540490, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("你为什么要做对自己如此不利的事？", 45, 1540490, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("只是为了救其他人吗？", 45, 1540490, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.userSetFieldFloating(350063000, 5, 5, 20);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("哼，你现在连说话的力气都没了。", 45, 1540490, false, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("真无聊。", 45, 1540490, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.userSetFieldFloating(350063000, 0, 0, 20);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetForceMove("oid=286650214", -1, 70, 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.npc_setForceFlip("oid=286650214", 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, -10, 0, 4, 1540490, cm.getPlayer().getId())
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.npc_LeaveField("oid=286650214");
                                                                                                            cm.npc_LeaveField("oid=286650214");
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.dispose();
                                                                                                                cm.warp(350063001, 0, true);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.npc_LeaveField("oid=286634729");
                                                                                                                cm.npc_LeaveField("oid=286634729")
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