function enter() {
    if (cm.isQuestFinished(34252) && !cm.isQuestFinished(34253)) {
        cm.openScriptNpc()
    } else {
        cm.warp(450006130, 4)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(34252, "enter2=1;enter4=1;enter=1");
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.setStandAloneMode(true);
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.sendNormalTalk_Bottom("塔纳也同意黑魔法师做那种事？\r\n这……分明是要#r毁灭世界#k啊。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#她的精神很不稳定。黑魔法师正是看准了这一点。", 37, 3003409, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这样说不定能采取怀柔方法呢。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1200, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#你……一定要……小心。\r\n否则就会永远……无法……脱离。那个地方……", 37, 3003409, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_InsertCanvas(1, 75, 0, 0, 0, 900, 0);
                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#这反倒是个……好机会……塔纳……克里蒂亚斯的封印……", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 125, 0, 0, 0, 900, 0);
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFFAAAAAA#记住……记忆沼泽……", 37, 3003409, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(5000, 1300, 5000, 1129, -350)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/morass/spine/bubble/skeleton", "animation", "", "bubble"], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/bubble", 100);
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3300)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_取消复合图片动画("bubble", 1, 1000);
                                                                    cm.npc_LeaveField("oid=1819473");
                                                                    cm.dispose();
                                                                    cm.warp(450006130, 2, true);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.setStandAloneMode(false)
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