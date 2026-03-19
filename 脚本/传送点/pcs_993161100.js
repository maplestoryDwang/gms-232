function enter() {
    if (cm.getNumberFromQuestInfo(39597, "count1") >= 2) {
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -1205, -376);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.gainSkillBuff(80000268);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1212, -19)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(1200)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1000, 3500, 1820, -1216)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face5#那里貌似没办法碰到了……\r\n嘻嘻……这种时候不就需要用到道术了嘛？", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
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
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1212, -19)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.teachSkill(80002824, 0, -1);
                                                                        cm.teachSkill(80002824, 1, 0);
                                                                        cm.gainSkillBuff(80002824);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1792, -1232)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 1644, -1388);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                cm.gainSkillBuff(80000268);
                                                                                                cm.npc_LeaveField("oid=432319")
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.teachSkill(80002824, -1, 0);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 50);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.updateInfoQuest(39597, "40=h0;41=h1;07=h0;37=h2;38=h2;39=h2");
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face9#这样一来洞穴里也够亮了，那家伙应该会有反应才对……", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face5#……那就去看看吧！？", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                                                                                                        cm.warp(993161200, 0, false);
                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
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
};