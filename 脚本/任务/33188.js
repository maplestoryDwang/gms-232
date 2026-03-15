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
            cm.setAmbience("Ambience.img/warning", 100, 60);
            cm.updateInfoQuest(33188, "kill=Noclear");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(10)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 1500, 500, -3, -157)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(200)
                        } else {
                            if (status === a++) {
                                cm.userSetFieldFloating(350031600, 5, 5, 20);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                cm.effect_Voice("SoundEff.img/blackHeaven/explosion1", 100)
                            } else {
                                if (status === a++) {
                                    cm.userSetFieldFloating(350031600, 2, 2, 20);
                                    cm.inGameDirectionEvent_AskAnswerTime(50)
                                } else {
                                    if (status === a++) {
                                        cm.onCameraTilt(15, 5000);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                        cm.npc_SetSpecialAction("oid=22427029", "left", 0, 1);
                                        cm.fieldEffect_PlayFieldSound("BlackHeaven/7", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.addPopupSay(1540617, 1000, "没时间犹豫了!请握住船舵!", "", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.userSetFieldFloating(350031600, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(50)
                                            } else {
                                                if (status === a++) {
                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -4, -150);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3, -157)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.addPopupSay(1540617, 1000, "请把船舵转向右侧!", "", 0);
                                                                        cm.inGameDirectionEvent_QTE(5)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.npc_SetSpecialAction("oid=22427029", "right", 0, 1);
                                                                            cm.fieldEffect_PlayFieldSound("BlackHeaven/7", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.userSetFieldFloating(350031600, 2, 2, 20);
                                                                                cm.onCameraTilt(-7, 3500);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.userSetFieldFloating(350031600, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(50)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.addPopupSay(1540617, 1000, "反方向!请向反方向转动!", "", 0);
                                                                                        cm.inGameDirectionEvent_QTE(6)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.npc_SetSpecialAction("oid=22427029", "left", 0, 1);
                                                                                            cm.fieldEffect_PlayFieldSound("BlackHeaven/7", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.userSetFieldFloating(350031600, 2, 2, 20);
                                                                                                cm.onCameraTilt(5, 2000);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.userSetFieldFloating(350031600, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(50)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.addPopupSay(1540617, 1000, "差不多了!\r\n重新往反方向转动!", "", 0);
                                                                                                        cm.inGameDirectionEvent_QTE(5)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.npc_SetSpecialAction("oid=22427029", "right", 0, 1);
                                                                                                            cm.fieldEffect_PlayFieldSound("BlackHeaven/7", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.userSetFieldFloating(350031600, 2, 2, 20);
                                                                                                                cm.onCameraTilt(0, 1500);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/tilt", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.userSetFieldFloating(350031600, 0, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(50)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.playSoundEffDirectly("Ambience.img/warning");
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.addPopupSay(1540617, 1000, "很好, 现在已经稳定了. ", "", 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                cm.npc_ChangeController(1540457, "oid=22430986", -456, -31, 14, -506, -406, 0, true, 0, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=22430986", "summon", 0, 0);
                                                                                                                                cm.npc_SetForceMove("oid=22430986", 1, 300, 100);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -3, -50)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#ho#，是你控制了船舵啊！", 37, 1540457, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("真是太好了。现在这里就交给我吧。", 37, 1540457, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.npc_LeaveField("oid=22430986");
                                                                                                                                                                cm.npc_LeaveField("oid=22430986");
                                                                                                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                cm.forceCompleteQuest(33172);
                                                                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.dispose();
                                                                                                                                                                    cm.warp(350031501, 0, true);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33187.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};