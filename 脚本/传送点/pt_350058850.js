function enter() {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk_Bottom("这前方好像与核心相连。", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                    cm.forceCompleteQuest(33277);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                    cm.playerMessage(5, "获得了7500声望. ");
                    cm.updateInfoQuest(33124, "honor=1");
                    cm.forceCompleteQuest(33124);
                    cm.finishAchievement(1192);
                    cm.npc_SetForceMove("oid=286088922", 1, 200, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                        cm.setAmbience("Ambience.img/gravity", 100, 60);
                        cm.sendNormalTalk_Bottom("你们小时候听过这样一首歌吗？", 37, 1540470, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("到了十二点？\r\n#fs20#门就要关啦！嘻嘻嘻！", 37, 1540470, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh")
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=286088922"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.npc_ChangeController(1540749, "oid=286096219", 122, -37, 1, 72, 172, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=286096219", "summon", 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/attackdrop4", 100);
                                    cm.npc_SetSpecialAction("oid=286096219", "drop", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                        cm.userSetFieldFloating(350058850, 2, 2, 20);
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 170, -54)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetSpecialAction("oid=286088922", "fall", -1, 1);
                                            cm.npcMove(1540498, 0, -10, 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(200)
                                        } else {
                                            if (status === a++) {
                                                cm.npcMove(1540498, 0, 40, 500);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 0, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(700)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setAmbience("Ambience.img/flyingdeck_fast", 40, 60);
                                                                cm.fieldEffect_ProcessOnOffLayer("masking_up", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 20, 1, 1);
                                                                cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 20, 7, 1);
                                                                cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/blackHeavenCinematic/helenafall_back", 0, 500, 0, 0, 12, 4, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer("helena", "Map/Effect2.img/blackHeavenCinematic/helenafall", 0, 500, 100, -100, 13, 4, 1);
                                                                cm.fieldEffect_ProcessOnOffLayer("stone", "Map/Effect2.img/blackHeavenCinematic/helenafall_stone", 0, 500, 0, 0, 14, 4, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer("stonea", "Map/Effect2.img/blackHeavenCinematic/helenafall_stone2", 0, 500, -200, 60, 16, 4, 1);
                                                                cm.fieldEffect_ProcessOnOffLayer("stoneb", "Map/Effect2.img/blackHeavenCinematic/helenafall_stone2", 0, 500, 360, 160, 16, 4, 1);
                                                                cm.fieldEffect_ProcessOnOffLayer("stonec", "Map/Effect2.img/blackHeavenCinematic/helenafall_stone3", 0, 500, 200, 300, 16, 4, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(2200, 2000, 2200, 0, 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer("helena", "", 1, 2200, -50, 50, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "", 1, 2200, 100, -20, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("stone", "", 1, 2200, 20, -20, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("stonea", "", 1, 2200, -150, -50, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("stoneb", "", 1, 2200, 150, -50, 0, 0, 0);
                                                                    cm.fieldEffect_ProcessOnOffLayer("stonec", "", 1, 2200, 130, -40, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("赫丽娜！！", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("你快走，#h0#！\r\n现在能阻止格里梅尔的人只有你了！", 37, 1540453, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 4000, 2000, 0, 0)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer("helena", "", 1, 2200, -50, 50, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "", 1, 2200, 100, -20, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stone", "", 1, 2200, 20, -20, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stonea", "", 1, 2200, -150, -50, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stoneb", "", 1, 2200, 150, -50, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stonec", "", 1, 2200, 130, -40, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("back", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("helena", "", 2, 2000, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stone", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stonea", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stoneb", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer("stonec", "", 2, 1500, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer("masking_up", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                        cm.fieldEffect_ProcessOnOffLayer("masking_down", "", 2, 500, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-FINAL ACT-\r\n#fs28#黑色天堂", 1)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.dispose();
                                                                                                        cm.warp(350060000, 0, true);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.npc_LeaveField("oid=286088922");
                                                                                                        cm.npc_LeaveField("oid=286088922");
                                                                                                        cm.npc_LeaveField("oid=286096219");
                                                                                                        cm.npc_LeaveField("oid=286096219")
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