var status = -1;
var selectionLog = [];

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(33132, "save=4;boss=noclear;board1=Noclear");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                cm.forceCompleteQuest(33146);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
            } else {
                if (status === a++) {
                    cm.addPopupSay(1540454, 1000, "变身术士被打倒了！\r\n你真了不起, 队长!", "", 0);
                    cm.addPopupSay(1540455, 1000, "敌人首领被我打败了!!!", "", 0);
                    cm.addPopupSay(1540456, 1000, "打败敌人首领的是队长!", "", 0);
                    cm.inGameDirectionEvent_AskAnswerTime(7000)
                } else {
                    if (status === a++) {
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -849, -163);
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.npc_ChangeController(1540443, "oid=22692748", -515, -151, 9, -565, -465, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=22692748", "summon", 0, 0);
                            cm.npcMove(1540443, 500, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(100)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                cm.npcMove(1540443, -500, 0, 7000);
                                cm.inGameDirectionEvent_AskAnswerTime(3000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(2);
                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        cm.effect_Voice("Voice3.img/BlackHeaven/carrier/1", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.addPopupSay(1540455, 1000, "出, 出现了!那是黑色天堂!", "", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            cm.effect_Voice("Voice3.img/BlackHeaven/3_dolfy/17", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.addPopupSay(1013203, 1000, "你居然打倒了变身术士, \r\n真是了不起!\r\n不过, 你只能嚣张到这里了!", "", 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetSpecialAction("oid=22692748", "special", 0, 1);
                                                    cm.fieldEffect_PlayFieldSound("BlackHeaven/0", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_LeaveField("oid=22692748");
                                                        cm.npc_LeaveField("oid=22692748");
                                                        cm.npc_ChangeController(1540600, "oid=22693553", -515, -151, 9, -565, -465, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=22693553", "summon", 0, 0);
                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(50)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.addPopupSay(1540455, 1000, "避开!跳跃!!", "", 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(150)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_QTE(3)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_LeaveField("oid=22693553");
                                                                            cm.npc_LeaveField("oid=22693553");
                                                                            cm.npc_ChangeController(1540601, "oid=22693650", -515, -151, 9, -565, -465, 1, false, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=22693650", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=22693650", "special", 0, 1);
                                                                            cm.fieldEffect_PlayFieldSound("BlackHeaven/1", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                                                            cm.effect_Voice("Voice3.img/BlackHeaven/carrier/3", 100)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_Tremble(0, 500, 30);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(120)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_MoveAction(7);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.addPopupSay(1013203, 1000, "还不错嘛!", "", 0);
                                                                                        cm.npcMove(1540601, 500, 0, 3000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        cm.effect_Voice("Voice3.img/BlackHeaven/carrier/4", 100)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_LeaveField("oid=22693650");
                                                                                            cm.npc_LeaveField("oid=22693650");
                                                                                            cm.addPopupSay(1540455, 1000, "很好!!进攻!", "", 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.updateInfoQuest(33132, "save=4;boss=noclear;board1=clear");
                                                                                                cm.dispose();
                                                                                                cm.enableActions()
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