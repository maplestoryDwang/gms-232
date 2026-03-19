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
            cm.updateInfoQuest(33222, "save=6;col4=0");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 2300, -970)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.setPartner(0, 1540704, 0, 0);
                cm.setPartner(0, 1540765, 0, 0);
                cm.npc_ChangeController(1540704, "oid=284084690", 2440, -1030, 206, 2390, 2490, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=284084690", "summon", 0, 0);
                cm.npc_ChangeController(1540451, "oid=284084691", 2510, -1030, 206, 2460, 2560, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=284084691", "summon", 0, 0);
                cm.npc_setForceFlip("oid=284031840", 0);
                cm.npc_setForceFlip("oid=284031841", 0);
                cm.npc_setForceFlip("oid=284031842", 0);
                cm.npc_setForceFlip("oid=284031843", 0);
                cm.npc_setForceFlip("oid=284031844", 0);
                cm.npc_setForceFlip("oid=284031845", 0);
                cm.npc_setForceFlip("oid=284031846", 0);
                cm.inGameDirectionEvent_MoveAction(3);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你的身体好像已经没事了呢，队长。", 45, 1540701, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("果然，#face0##h0#在身边我才觉得安心！", 45, 1540616, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#除了#h0#之外，\r\n聚集在这里的人全部是联盟的精英们。 ", 37, 1540451, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("没错，所有人都拥有出众的战斗力。 ", 45, 1540452, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("除了一个人之外。", 45, 1540452, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你是说戴着睡眠眼罩的人？", 37, 1540451, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face4##fs20#什么睡眠眼罩！！这是面巾！！！", 45, 1540452, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("说实话，每次见到你我都觉得#fs10#非常#fs16#好笑……", 37, 1540451, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face1##fs20#你说什么！！", 45, 1540452, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("俗话说，不是冤家不聚头……", 37, 1540704, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你们俩干脆结婚吧，怎么样？", 37, 1540704, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#哇，这么一来，联盟就更加稳固了！", 45, 1540616, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我来做司仪~", 45, 1540701, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("哈哈，那我来做证婚人。", 37, 1540704, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("……别说了，赶紧出发吧。", 37, 1540451, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.npc_SetForceMove("oid=284031846", 1, 40, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=284031839", "open", -1, 1);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/btOpen", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                                                cm.forceCompleteQuest(33270);
                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(350050300, 0, true);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.npc_LeaveField("oid=284031839");
                                                                                                                    cm.npc_LeaveField("oid=284031839");
                                                                                                                    cm.npc_LeaveField("oid=284031840");
                                                                                                                    cm.npc_LeaveField("oid=284031840");
                                                                                                                    cm.npc_LeaveField("oid=284031841");
                                                                                                                    cm.npc_LeaveField("oid=284031841");
                                                                                                                    cm.npc_LeaveField("oid=284031842");
                                                                                                                    cm.npc_LeaveField("oid=284031842");
                                                                                                                    cm.npc_LeaveField("oid=284031843");
                                                                                                                    cm.npc_LeaveField("oid=284031843");
                                                                                                                    cm.npc_LeaveField("oid=284031844");
                                                                                                                    cm.npc_LeaveField("oid=284031844");
                                                                                                                    cm.npc_LeaveField("oid=284031845");
                                                                                                                    cm.npc_LeaveField("oid=284031845");
                                                                                                                    cm.npc_LeaveField("oid=284031846");
                                                                                                                    cm.npc_LeaveField("oid=284031846");
                                                                                                                    cm.npc_LeaveField("oid=284084690");
                                                                                                                    cm.npc_LeaveField("oid=284084690");
                                                                                                                    cm.npc_LeaveField("oid=284084691");
                                                                                                                    cm.npc_LeaveField("oid=284084691")
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