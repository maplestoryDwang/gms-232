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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.npc_ChangeController(1540450, "oid=12992652", -1531, -15, 166, -1581, -1481, 0, true, 1000, false);
            cm.npc_SetSpecialAction("oid=12992652", "summon", 0, 0);
            cm.playSoundEffDirectly("Ambience.img/bird");
            cm.fieldEffect_PlayBGM("Bgm18/QueensGarden", 0, 0);
            cm.inGameDirectionEvent_ForcedFlip10(1, 330);
            cm.inGameDirectionEvent_AskAnswerTime(4500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你来啦，#h0#。", 37, 1540450, false, true);
                cm.effect_Voice("Voice3.img/BlackHeaven/cyg/3", 100)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=12992652", 1, 355, 130);
                    cm.inGameDirectionEvent_AskAnswerTime(4500)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, -1087, 128)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("呼呼……很抱歉，突然交给你这么困难的任务。", 37, 1540450, false, true);
                                    cm.effect_Voice("Voice3.img/BlackHeaven/cyg/6", 100)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不过，现在能处理这件事的人只有你。", 37, 1540450, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.effect_Voice("Voice3.img/BlackHeaven/cyg/7", 100);
                                            cm.askMenu_Bottom("你没有受伤吧？\r\n#b\r\n#L1#这程度根本不算什么#l\r\n#L2#我全身都痛，感觉要晕倒了#l", 37, 1540450);
                                            cm.effect_Voice("Voice3.img/BlackHeaven/cyg/8", 100)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_SetSpecialAction("oid=12992652", "smile", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("呼呼……你果然非常可靠啊。", 37, 1540450, false, true);
                                                        cm.effect_Voice("Voice3.img/BlackHeaven/cyg/9", 100)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.emotion(2, 4000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.setStandAloneMode(false);
                                                                        cm.dispose();
                                                                        cm.warp(350012020, 0, true)
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