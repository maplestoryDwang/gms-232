function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33181, "army") < 2) {
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
            cm.inGameDirectionEvent_AskAnswerTime(1500);
            cm.effect_NormalSpeechBalloon("呃呃…… ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540619, cm.getPlayer().getId())
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                cm.inGameDirectionEvent_AskAnswerTime(250)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1198, 60)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=22397045");
                            cm.npc_LeaveField("oid=22397045");
                            cm.inGameDirectionEvent_ChangeEquipment([1390003]);
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                        } else {
                            if (status === a++) {
                                cm.addPopupSay(1540624, 1500, "烟雾好像越来越浓了. 必须叫醒那个士兵. ", "", 0);
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
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                cm.setPartner(1, 1540619, 80001613, 0);
                                                                                cm.updateInfoQuest(33181, "army=2;faker1=0;faker2=0;faker3=0");
                                                                                cm.addPopupSay(1540618, 1500, "我只是吸入了烟气而已, 为什么脸颊……会这么疼呢?", "", 0);
                                                                                cm.getTopMsgFont("加入了晕倒的士兵. ", 3, 20, 20, 0);
                                                                                cm.addPopupSay(1540624, 1500, "走廊上的士兵好像已经救完了. \r\n现在去1号宿舍看看吧. ", "", 0);
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