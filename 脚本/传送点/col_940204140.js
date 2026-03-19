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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.monadForceMove("white", 1, 30);
            cm.inGameDirectionEvent_AskAnswerTime(30)
        } else {
            if (status === a++) {
                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                cm.inGameDirectionEvent_AskAnswerTime(30)
            } else {
                if (status === a++) {
                    cm.monadForceMove("white", 0, 30);
                    cm.inGameDirectionEvent_AskAnswerTime(30)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(30)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(30)
                        } else {
                            if (status === a++) {
                                cm.monadForceMove("white", 1, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(300)
                            } else {
                                if (status === a++) {
                                    cm.monadForceMove("white", 0, 900);
                                    cm.inGameDirectionEvent_AskAnswerTime(300)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1990)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face9#呃啊！吓我一跳！刚才是怎么回事？", 37, 3002110, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face8#是传说中的……闪电吗？听说闪电非常可怕……呃呃……", 37, 3002110, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face8#我不怕……我不怕……我玛鲁是尖耳守备队的队长！", 37, 3002110, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.monadForceMove("white", 1, 30);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                            cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                            cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                            cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(30)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.monadForceMove("white", 0, 30);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                        cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                        cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                        cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(30)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.monadForceMove("white", 1, 30);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.monadForceMove("white", 0, 900);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1990)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face12#狐，狐神！？", 37, 3002110, false, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/foxvalley/spine/fox_long/fox", "animation", "", "long"], [0, 0, 0, 0, 0, 0, 0, 1]);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/foxgod_long", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(10500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceCompleteQuest(34741);
                                                                                                            cm.updateInfoQuest(34741, "exp=1");
                                                                                                            cm.dispose();
                                                                                                            cm.gainExp(16918334);
                                                                                                            cm.warp(410000100, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.dispelBuff(2210205)
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