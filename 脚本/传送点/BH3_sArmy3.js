function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33181, "army") < 4) {
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -298, 59)
                } else {
                    if (status === a++) {
                        cm.npc_SetSpecialAction("oid=22407687", "none", -1, 1);
                        cm.inGameDirectionEvent_ChangeEquipment([1390001]);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                    } else {
                        if (status === a++) {
                            cm.addPopupSay(1540624, 1500, "这个房间里有好多晕倒的士兵啊. \r\n这是因为希纳斯的士兵们太弱了吗?", "", 0);
                            cm.inGameDirectionEvent_QTE(2)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(600)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap3", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("你能把他们打醒吗？", 37, 1540624, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("呃啊？！！等……等等！！我起来了！！", 37, 1540629, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(600)
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
                                                                            cm.setPartner(1, 1540617, 80001612, 0);
                                                                            cm.updateInfoQuest(33181, "army=4;faker1=1;faker2=0;faker3=0");
                                                                            cm.addPopupSay(1540617, 1500, "……我看到. 你用力地……打……咳咳……", "", 0);
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
    }
};