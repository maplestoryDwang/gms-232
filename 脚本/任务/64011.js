var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return
    }(c == 1) ? status++ : status--;
    selectionLog[status] = a;
    cm.dispose()
}

function end(d, c, b) {
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
            cm.sendNewEffects(17, [0, 1000, 2000, -405, 120])
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_OneTimeAction(29, 50000);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b（收拾一下还挺舒适的……）", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.playerMessage(-1, "此地是大本营。今后可以通过次元之镜随时再次进入当前位置。");
                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
                        cm.sendNormalTalk_Bottom("#b（走下这座山就是阿布鲁了。）", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b（在阿布鲁到底发生什么事了……）", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b（我得先去见寄出书信的老婆婆，跟她谈谈。）", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(64012, "");
                                    cm.playerMessage(-1, "去找来信的老婆婆谈谈。");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b（烤着温暖的篝火，有种……放松的感觉啊……）", 57, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(25, 50000);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(100)
                                                } else {
                                                    if (status === a++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b（……睡一会儿不要紧吧……？）", 57, 0, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
                                                                                cm.sendNormalTalk_Bottom("#b（……就一会儿……）", 57, 0, false, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), -480, 88);
                                                                                            cm.playVideoByScript("Monad_Ep1_1.avi")
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(64011);
                                                                                                cm.warp(867200111, 0);
                                                                                                cm.setStandAloneMode(false);
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
};