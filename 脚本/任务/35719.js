var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("这……这不可能……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("大……大家……全都……？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("对……没错！他们都累了肯定在休息。是吧……？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#……", 37, 3003770, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#那就直接叫醒他们吧。看他们到底……会不会起来。", 37, 3003770, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(35719, "");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(没能闭上的双眼已经失去了光芒。)", 37, 3003763, false, true)
        } else {
            if (status == a++) {
                cm.updateInfoQuest(35719, "NpcSpeech=30037831");
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(低着头的士兵没有人任何回应。)", 37, 3003764, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35719, "NpcSpeech=30037831/30037852");
                cm.dispose()
            }
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(只是全身无力地靠在墙上。)", 37, 3003763, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35719, "NpcSpeech=30037831/30037852/30037843");
                cm.dispose()
            }
        }
    }
}

function stage3(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#(已经变得冰冷的手中还握着武器。)", 37, 3003762, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35719, "NpcSpeech=30037831/30037852/30037843/30037824");
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 160, 155)
        } else {
            if (status === a++) {
                cm.setPartner(0, 3003770, 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 242, 165);
                cm.npc_ChangeController(3003770, "oid=2310074", 150, 180, 5, 100, 200, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=2310074", "summon", 0, 0);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#怎么样？大家都起来了吗？", 37, 3003770, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("难道……其他联盟成员也全都……？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯……这个嘛？", 37, 3003770, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("太……迟了吗……？", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("可是……不会的……这不可能……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#我希望大家平安无事……可这么看来……是没什么希望了。", 37, 3003770, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不……这……不是真的……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 500);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_LeaveField("oid=277077");
                                                            cm.npc_LeaveField("oid=277078");
                                                            cm.sendNormalTalk_Bottom("#face0#唉……你这么一个人走会迷路的……", 37, 3003770, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_SetForceMove("oid=2310074", 1, 800, 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.npc_LeaveField("oid=2310074");
                                                                    cm.npc_LeaveField("oid=2310074");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.npc_ChangeController(3003734, "oid=2310083", -833, 180, 16, -883, -783, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310083", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003734, "oid=2310084", 73, 180, 1, 23, 123, 0, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310084", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003735, "oid=2310085", 7, 180, 1, -43, 57, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310085", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003735, "oid=2310086", 350, 180, 3, 300, 400, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310086", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003736, "oid=2310087", -225, 180, 4, -275, -175, 0, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310087", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3003736, "oid=2310088", 382, 180, 11, 332, 432, 1, true, 2000, false);
                                                                        cm.npc_SetSpecialAction("oid=2310088", "summon", 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644704/Regen", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644705/Regen", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(35719);
                                                                                                cm.gainExp(170671356);
                                                                                                cm.npc_LeaveField("oid=2310083");
                                                                                                cm.npc_LeaveField("oid=2310084");
                                                                                                cm.npc_LeaveField("oid=2310084");
                                                                                                cm.npc_LeaveField("oid=2310085");
                                                                                                cm.npc_LeaveField("oid=2310085");
                                                                                                cm.npc_LeaveField("oid=2310086");
                                                                                                cm.npc_LeaveField("oid=2310086");
                                                                                                cm.npc_LeaveField("oid=2310087");
                                                                                                cm.npc_LeaveField("oid=2310087");
                                                                                                cm.npc_LeaveField("oid=2310088");
                                                                                                cm.npc_LeaveField("oid=2310088");
                                                                                                cm.dispose();
                                                                                                cm.warp(993063029, 0, false);
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.setInGameDirectionMode(false, true, false)
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