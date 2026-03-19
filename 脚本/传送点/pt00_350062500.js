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
            cm.updateInfoQuest(33267, "save=3;dir=1;le=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 270, -70)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#等等！不要拉那控制杆！", 37, 1540470, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 290, 30)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("(手臂使不出力气。)", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_QTE(0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        cm.updateInfoQuest(49010, "QET=sPh39HK+1QE$");
                                        cm.updateInfoQuest(49010, "QET=sPh39HK+1QE$");
                                        cm.updateInfoQuest(49010, "QET=sPh39HK+1QE$");
                                        cm.forceStartQuest(49010, "")
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=286564673", "on", -1, 1);
                                            cm.setAmbience("Ambience.img/warning", 100, 60);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 270, -70)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#不行！", 37, 1540470, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetSpecialAction("oid=286564672", "fire", -1, 1);
                                                            cm.setAmbience("Ambience.img/gal_fire", 100, 60);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            cm.effect_Voice("Voice3.img/BlackHeaven/etc/1", 100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npcMove(1540730, 0, -1000, 3000);
                                                                cm.playSoundEffDirectly("Ambience.img/warning");
                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 270, -210)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.dispose();
                                                                                cm.warp(350062501, 0, true);
                                                                                cm.npc_LeaveField("oid=286564672");
                                                                                cm.npc_LeaveField("oid=286564672");
                                                                                cm.npc_LeaveField("oid=286564673");
                                                                                cm.npc_LeaveField("oid=286564673")
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