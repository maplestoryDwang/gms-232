var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(35977, "fire") == 0) {
        start0(c, b, a)
    } else {
        if (cm.getNumberFromQuestInfo(35977, "fire") == 3) {
            start2(c, b, a)
        } else {
            start1(c, b, a)
        }
    }
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("祭品全部摆放到祭坛上了。现在只要把火点燃就行。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（在火炉中点火吧。）", 2, 1013423, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(35977, "fire=1");
                    cm.dispose()
                }
            }
        }
    }
}

function start1(d, c, b) {
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
            cm.sendNormalTalk("祭品全部摆放到祭坛上了。现在只要把火点燃就行。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（在火炉中点火吧。）", 2, 1013423, true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
}

function start2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
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
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -390, -200)
                } else {
                    if (status === a++) {
                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -608, -155);
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗡嘛呢撒吧哈～", 37, 1013440, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#呀哩呀哩呀啦熊～", 37, 1013441, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#吗哈班吧啦咪哒～", 37, 1013442, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("三个咒语为什么不一样……。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                    cm.sendNormalTalk_Bottom("#face0##ho#，进展顺利吗？", 37, 1013447, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.npc_ChangeController(3003679, "oid=7265368", -700, -150, 1, -750, -650, 0, false, 300, false);
                                                        cm.npc_SetSpecialAction("oid=7265368", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("南哈特！", 57, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#这个场面还真是难得一见。", 37, 1013447, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(530)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#呵呵，呵呵呵……", 37, 1013447, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("？？", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#孩子们，呵呵，但愿你们不要，噗！", 37, 1013447, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#太，太失望，噗呵呵。", 37, 1013447, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("（这个笑声好露骨……。）", 57, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                cm.userSetFieldFloating(100051070, 3, 6, 50);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.userSetFieldFloating(100051070, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(700)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("嗯？等等，周围怎么好像晃动起来了……。", 57, 0, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#怎，怎么回事？", 37, 1013447, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.userSetFieldFloating(100051070, 5, 8, 50);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7265368"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.npc_SetSpecialAction("oid=7264106", "special", -1, 1);
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/regen_partem", 100);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(600)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.npc_ChangeController(1013448, "oid=7266212", -390, -300, 2, -440, -340, 1, false, 500, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=7266212", "summon", 0, 0);
                                                                                                                                cm.npc_LeaveField("oid=7264106");
                                                                                                                                cm.npc_LeaveField("oid=7264106");
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2300)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.userSetFieldFloating(100051070, 0, 0, 0);
                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm44/WildFury", 0, 0);
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                                                                                                            cm.userSetFieldFloating(100051070, 5, 8, 50);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.userSetFieldFloating(100051070, 0, 0, 0);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#出，出现了！！怪兽！", 37, 1013440, false, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#出来啦！", 37, 1013441, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#真的出来了！", 37, 1013442, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#真，真的……出来了……", 37, 1013447, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("现在……该怎么办……", 57, 0, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#怪兽！是我们唤醒了你！！", 37, 1013440, false, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你现在是我们新的保护者！！", 37, 1013441, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#绝对不能背叛我们哦！！", 37, 1013442, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#切，那家伙怎么可能乖乖听小孩子的话！！请做好战斗准备！", 37, 1013447, false, true)
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                            cm.userSetFieldFloating(100051070, 10, 15, 50);
                                                                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000)
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                cm.userSetFieldFloating(100051070, 0, 0, 0);
                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=7266212", "special", -1, 1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                                                        cm.userSetFieldFloating(100051070, 0, 0, 0);
                                                                                                                                                                                                        cm.askYesNo_Bottom("怪兽攻过来了！#ho#，快保护孩子们！#l", 37, 1013447)
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/savageT/boom", 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(910090410, 0);
                                                                                                                                                                                                                    cm.playerMessage(5, "必须击败遗迹的巨大怪物。");
                                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7265368");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7265368");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7266212");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7266212")
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
            cm.sendNormalTalk("不可能……连怪兽也……背叛了我们……。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呼呼，差点就糟了。", 4, 1013441, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呜呜……我好想老师……。", 4, 1013442, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(35977);
                        cm.gainExp(1427698);
                        cm.dispose()
                    }
                }
            }
        }
    }
};