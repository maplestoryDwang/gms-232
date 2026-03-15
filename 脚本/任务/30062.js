var status = -1;
var selectionLog = [];
var quest = 30062;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
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
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("我是骄傲的大海盗！我是绝对不会开口的！", 1, 0, 0, 2000, 1302016, 9897148)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("那我就让你尝尝厉害.", 1, 0, 0, 2000, 1302007, 9897148)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("(咂, 咂, 咂)", 1, 0, 0, 2000, 1302007, 9897148)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("难, 难道……那是！", 1, 0, 0, 2000, 1302016, 9897148)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("是的, 这是鸡蛋！我要给你吃鸡蛋！", 1, 0, 0, 2000, 1302007, 9897148)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("竟然吃蛋！你们这些野蛮无耻的家伙！", 1, 0, 0, 2000, 1302016, 9897148)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("怎么样? 还不肯开口吗? ", 1, 0, 0, 2000, 1302007, 9897148)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("你干脆杀了我吧！抽泣……", 1, 0, 0, 2000, 1302016, 9897148)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(30062, "NpcSpeech=13020161");
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.curNodeEventEnd(true);
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

function stage1(d, c, b) {
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("这次我想到了鸡……！", 1, 0, 0, 2000, 1302007, 9897148)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("……够了, 还是我来吧.", 1, 0, 0, 2000, 0, 9897148)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("勇士, 你要亲自上阵吗? ", 1, 0, 0, 2000, 1302007, 9897148)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("是的, 你能稍微离开一下吗? ", 1, 0, 0, 2000, 0, 9897148)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("啊, 你是想用非常残忍的拷问手段吗? ！\r\n明, 明白了.", 1, 0, 0, 2000, 1302007, 9897148)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(30062, "NpcSpeech=13020161/13020072");
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.curNodeEventEnd(true);
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

function stage2(d, c, b) {
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("你, 再这样嘴硬的话……", 1, 0, 0, 2000, 0, 9897148)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("我就让你和碧欧蕾塔公主结婚！", 1, 0, 0, 2000, 0, 9897148)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_Voice("Field.img/flowervioleta/gulp", 100)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("我, 我说！我全说！", 1, 0, 0, 2000, 1302018, 9897148)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("你这个背叛者！你把大海盗的意志丢到哪里去了！", 1, 0, 0, 2000, 1302015, 9897148)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("那你代替我去和公主结婚? ", 1, 0, 0, 2000, 1302018, 9897148)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("……相信船长一定会理解我们的.", 1, 0, 0, 2000, 1302015, 9897148)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("是啊, 是啊.", 1, 0, 0, 2000, 1302017, 9897148);
                                            cm.effect_NormalSpeechBalloon("没错, 没错.", 1, 0, 0, 2000, 1302016, 9897148)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                cm.effect_NormalSpeechBalloon("好了, 现在能说了吧? ", 1, 0, 0, 2000, 0, 9897148)
                                            } else {
                                                if (status === a++) {
                                                    cm.updateInfoQuest(30062, "NpcSpeech=13020161/13020072/13020183");
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.curNodeEventEnd(true);
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
};