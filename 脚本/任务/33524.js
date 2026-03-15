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
            cm.sendNormalTalk_Bottom("#face0#……", 37, 1530600, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_Voice("Ambience.img/vib", 100)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Voice("Ambience.img/vib", 100)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_Voice("Ambience.img/vib", 100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("喂？", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#h0#！你找到布吉了吗？！", 37, 1530604, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("现在我们在一起呢。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#你能让她接一下吗？", 37, 1530604, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#伊莉娜……", 37, 1530600, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#布吉，你为什么逃跑？现在演出就要开始了。", 37, 1530604, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#对不起……但是，我……太害怕了……", 37, 1530600, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#布吉……我只说一句，我们都不怪你，反而要感谢你。因为你能让我们在大家面前演奏这么好的歌曲。", 37, 1530604, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 1530600, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#我们等着你，我知道你一定会来的。", 37, 1530604, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 1530600, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#h0#，演出马上就要开始了。如果你们不想迟到，现在就得出发。", 37, 1530604, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……知道了。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#伊莉娜……", 37, 1530600, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.forceStartQuest(33524, "");
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
            cm.sendNormalTalk_Bottom("你们来了，刚才戴米安的演出结束了。", 37, 1530120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("大家都先进去了，我们也进去吧。", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33524);
                    cm.forceCompleteQuest(33524);
                    cm.dispose()
                }
            }
        }
    }
};