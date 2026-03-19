function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33181, "army") < 1) {
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
            cm.effect_NormalSpeechBalloon("呃呃…… ", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540618, cm.getPlayer().getId())
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 180, 60)
                    } else {
                        if (status === a++) {
                            cm.npc_LeaveField("oid=22397044");
                            cm.npc_LeaveField("oid=22397044");
                            cm.inGameDirectionEvent_ChangeEquipment([1390000]);
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                        } else {
                            if (status === a++) {
                                cm.addPopupSay(1540624, 1500, "虽然这么做很抱歉, 但要想让士兵们振作起来, 打耳光是最好的办法了. ", "", 0);
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
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1800)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("呃呃……过世的奶奶……在招手……", 37, 1540619, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("他好像快要踏上黄泉路了？快用力点打他！！", 37, 1540624, true, true)
                                                } else {
                                                    if (status === a++) {
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
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap1", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1800)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("呃呃……我……我不会说出反抗者…… 情报的……", 37, 1540619, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(600, 3000, 300, 180, 70)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#h0#！！再用力点！多打几次！！", 37, 1540624, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_QTE(1)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap2", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600)
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
                                                                                                                            cm.sendNormalTalk_Bottom("呃呃…… #h0#……？", 37, 1540619, false, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
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
                                                                                                                                                        cm.setPartner(1, 1540618, 80001613, 0);
                                                                                                                                                        cm.updateInfoQuest(33181, "army=1;faker1=0;faker2=0;faker3=0");
                                                                                                                                                        cm.addPopupSay(1540618, 1500, "咳咳……我刚刚晕倒了?!", "", 0);
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