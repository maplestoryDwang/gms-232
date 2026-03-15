var status = -1;
var selectionLog = [];

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                cm.npc_ChangeController(1540443, "oid=22699400", -515, -350, 18, -565, -465, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=22699400", "summon", 0, 0);
                cm.npcMove(1540443, 500, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(100)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -769, -161);
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(100)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.npcMove(1540443, -500, 0, 7000);
                        cm.inGameDirectionEvent_AskAnswerTime(8000)
                    } else {
                        if (status === a++) {
                            cm.addPopupSay(1013203, 1000, "你们这些臭苍蝇!\r\n哈哈哈!", "", 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_Voice("Voice3.img/BlackHeaven/carrier/2", 100)
                        } else {
                            if (status === a++) {
                                cm.npc_SetSpecialAction("oid=22699400", "shoot", 0, 1);
                                cm.fieldEffect_PlayFieldSound("BlackHeaven/2", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas11(5, 0, 0, 0, 0, 0);
                                    cm.npc_LeaveField("oid=22699400");
                                    cm.npc_LeaveField("oid=22699400");
                                    cm.npc_ChangeController(1540602, "oid=22700054", -515, -350, 18, -565, -465, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=22700054", "summon", 0, 0);
                                    cm.addPopupSay(1540455, 1000, "趴下!!", "", 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_QTE(4)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=22700054");
                                                cm.npc_LeaveField("oid=22700054");
                                                cm.npc_ChangeController(1540603, "oid=22700105", -515, -350, 18, -565, -465, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=22700105", "summon", 0, 0);
                                                cm.npc_SetSpecialAction("oid=22700105", "special", 0, 1);
                                                cm.fieldEffect_PlayFieldSound("BlackHeaven/3", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(50)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_MoveAction(4);
                                                    cm.fieldEffect_Tremble(0, 500, 30);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.addPopupSay(1013203, 1000, "鼠窃狗盗之辈!", "", 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        cm.effect_Voice("Voice3.img/BlackHeaven/carrier/5", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npcMove(1540603, 500, 0, 3000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_LeaveField("oid=22700105");
                                                                cm.npc_LeaveField("oid=22700105");
                                                                cm.addPopupSay(1540455, 1000, "跟着那家伙!", "", 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.updateInfoQuest(33132, "save=5;boss=noclear;board1=Noclear");
                                                                    cm.updateInfoQuest(33132, "save=5;boss=noclear;board1=clear");
                                                                    cm.gainExp(576000);
                                                                    cm.updateInfoQuest(63311, "combo=58");
                                                                    cm.effect_GainExpGold(576000);
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
};