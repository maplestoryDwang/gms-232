var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(true);
            cm.fieldEffect_PlayBGM('Bgm49/ConteminatedSea', 0, 0);
            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.npc_ChangeController(3003520, 'oid=3055170', -1090, 130, 32, -1140, -1040, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=3055170', 'summon', 0, 0);
                cm.npc_ChangeController(3004862, 'oid=3055171', -149, 591, 11, -199, -99, 0, false, 0, false);
                cm.npc_SetSpecialAction('oid=3055171', 'summon', 0, 0);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -1234, 159);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1161, 220);
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                        if (status === a++) {
                            cm.npc_SetSpecialAction('oid=3055170', 'special2', -1, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('等等，有东西过来了！', 57, 0, false, true, 1);
                            } else {
                                if (status === a++) {
                                    cm.setNpcSpecialActionReset('oid=3055170');
                                    cm.setAmbience('SoundEff.img/esfera/gear', 100, 60);
                                    cm.npc_SetSpecialAction('oid=3055170', 'special', -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                    if (status === a++) {
                                        cm.userSetFieldFloating(993185002, 3, 3, 50);
                                        cm.fieldEffect_PlayFieldSound('Sound/SoundEff.img/Falldown', 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                        if (status === a++) {
                                            cm.userSetFieldFloating(993185002, 0, 0, 0);
                                            cm.sendNormalTalk_Bottom('沃莉？！', 57, 0, false, true, 1);
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom('#face2#呃！遭到攻击了！', 37, 3003500, true, true, 1);
                                            } else {
                                                if (status === a++) {
                                                    cm.userSetFieldFloating(993185002, 3, 3, 20);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom('#face1#往上提！提起来！', 37, 3003502, false, true, 1);
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom('#face2#喀！不，我们还没错失塔纳……！', 36, 3003500, true, true, 1);
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom('#face2#咦？塔纳怀里有东西……', 36, 3003500, true, true, 1);
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.userSetFieldFloating(993185002, 0, 0, 0);
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -121, 1236);
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 8000, 0);
                                                                                cm.npcMove(3004862, 0, 700, 9000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                        cm.forceCompleteQuest(37902);
                                                                                        cm.forceCompleteQuest(37903);
                                                                                        cm.gainExp(132738181);
                                                                                        cm.npc_LeaveField('oid=3055170');
                                                                                        cm.npc_LeaveField('oid=3055171');
                                                                                        cm.dispose();
                                                                                        cm.warp(450007040, 0, false);
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