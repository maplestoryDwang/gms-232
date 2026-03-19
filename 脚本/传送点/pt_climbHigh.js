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
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊？这个是……", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("00", "Effect/Direction20.img/effect/BM2_maze1/0", 0, 500, 0, -80, 12, 4, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("巨大的迷宫？", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("00", "", 2, 500, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
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
                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("再往上看看？", 57, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.userSetFieldFloating(993063002, 5, 5, 5);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.onSetBackEffect("gratewall", 1, 1, 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/greatwall", 128);
                                                                        cm.sendNormalTalk_Bottom("哦……哦？！", 56, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#请小心！", 37, 3003760, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.inGameDirectionEvent_MoveAction(7);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_MoveAction(8);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 128);
                                                                                            cm.userSetFieldFloating(993063002, 10, 10, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.userSetFieldFloating(993063002, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#墙壁……居然在升高……", 37, 3003759, false, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#你还好吗？", 37, 3003758, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("我还好，但是这下子就很难知道我们各自的位置了。", 57, 0, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("现在只能在这里边走边找联盟成员了……", 57, 0, false, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.forceCompleteQuest(35703);
                                                                                                                                            cm.gainExp(170671356);
                                                                                                                                            cm.dispose();
                                                                                                                                            cm.warp(450011120, 0, false);
                                                                                                                                            cm.setStandAloneMode(false);
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
};