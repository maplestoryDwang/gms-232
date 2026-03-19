function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33181, "army") < 8) {
        cm.openScriptNpc()
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
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
            cm.inGameDirectionEvent_AskAnswerTime(250)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -265, 60)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=22415555", "none", -1, 1);
                        cm.inGameDirectionEvent_ChangeEquipment([1390003]);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.addPopupSay(1540624, 1500, "为了与怪物作战, 耽误了一些时间. 现在快抓紧吧!", "", 0);
                            cm.inGameDirectionEvent_QTE(0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_OneTimeAction(1012, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/swing1", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1260)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1800)
                                        } else {
                                            if (status === a++) {
                                                cm.addPopupSay(1540619, 1000, "呃呃……你是#h0#……?", "", 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(100)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.setPartner(1, 1540632, 80001613, 0);
                                                                        cm.updateInfoQuest(33181, "army=8;faker1=1;faker2=1;faker3=0");
                                                                        cm.getTopMsgFont("加入了晕倒的士兵. ", 3, 20, 20, 0);
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