function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/burning3", 128);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.spawnMob(9402323, 1, 3892, -1121);
            cm.effect_NormalSpeechBalloon("#fs12##b我马上上去！", 0, 0, 0, 2000, 0, cm.getPlayer().getId())
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_MoveAction(3);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.userSetFieldFloating(867200330, 20, 20, 20);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("#fs12##b怎么回事？！", 0, 0, 0, 2000, 0, cm.getPlayer().getId())
                        } else {
                            if (status === a++) {
                                cm.addPopupSay(9400580, 2000, "#face4#你快过来！就快坍塌了！快点！", "", 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_MoveAction(3);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.emotion(1, 4000);
                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_MoveAction(6);
                                            cm.inGameDirectionEvent_AskAnswerTime(100)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip10(2, 250);
                                                cm.inGameDirectionEvent_AskAnswerTime(1650)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/destroytower", 128);
                                                    cm.onSetMapObjectCreateLayerMore("tower", 2, "destroy", 0);
                                                    cm.Hidden_background("hideRope01", 0);
                                                    cm.userSetFieldFloating(867200330, 30, 30, 30);
                                                    cm.inGameDirectionEvent_MoveAction(6);
                                                    cm.inGameDirectionEvent_AskAnswerTime(150)
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_ForcedFlip10(2, 150);
                                                        cm.inGameDirectionEvent_AskAnswerTime(900)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_MoveAction(6);
                                                            cm.inGameDirectionEvent_AskAnswerTime(150)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip10(2, 200);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.userSetFieldFloating(867200330, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            cm.effect_NormalSpeechBalloon("#fs12##b不行，没时间了，得赶快下去！", 1, 0, 0, 2000, 0, cm.getPlayer().getId())
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.onSetBackEffect("hideRope01", 1, 0, 0, 0);
                                                                                cm.onSetBackEffect("hideTile01", 1, 0, 0, 0);
                                                                                cm.onSetMapObjectCreateLayerMore("tower", 3, "idle2", 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.spawnMob(9402323, 1, 3442, -1121);
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
};