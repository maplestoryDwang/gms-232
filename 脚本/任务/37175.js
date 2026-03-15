var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (!cm.isQuestActive(37169)) {
                cm.removeAll(4036503);
                cm.removeAll(4220196)
            }
            if (!cm.isQuestActive(37173)) {
                cm.removeAll(4036505);
                cm.removeAll(4220197)
            }
            if (!cm.isQuestActive(37174)) {
                cm.removeAll(4036504)
            }
            if (!cm.isQuestActive(37176)) {
                cm.removeAll(4036506);
                cm.removeAll(4036507);
                cm.removeAll(4220198);
                cm.removeAll(2630243)
            }
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Elodin/song_close");
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNextSNoESC("果然……")
                } else {
                    if (status === a++) {
                        cm.sendNextNoESC("等……等等！别再唱了！", 1501015)
                    } else {
                        if (status === a++) {
                            cm.sendNextNoESC("嗯？大家怎么了？我的声音比以前更大了，歌也好像唱得更好了啊？")
                        } else {
                            if (status === a++) {
                                cm.sendNextNoESC("难道响彻森林的那个怪声……？", 1501015)
                            } else {
                                if (status === a++) {
                                    cm.sendNextSNoESC("你好像猜对了……")
                                } else {
                                    if (status === a++) {
                                        cm.sendNextNoESC("嗯？你说什么？")
                                    } else {
                                        if (status === a++) {
                                            cm.sendNextNoESC("我说你唱得非常好。", 1501015)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextSNoESC("……")
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextNoESC("嗯……虽然唱得很好，但我的嗓子好像还没有完全放松。", 1501015)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextSNoESC("（什么……就算是母亲，也不能睁眼说瞎话吧……）")
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNextNoESC("……请小声点……）", 1501015)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNextNoESC("你们俩在说什么呢？我也想听听！")
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNextSNoESC("啊……没什么……")
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.curNodeEventEnd(true);
                                                                        cm.setInGameDirectionMode(false, true);
                                                                        cm.setStandAloneMode(false);
                                                                        cm.forceCompleteQuest();
                                                                        cm.gainExp(10320);
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
};