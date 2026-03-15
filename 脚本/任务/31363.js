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
            cm.sendNormalTalk("那个……", 0, 2192003, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("……你也曾经表白失败过吗？\r\n\r\n#b#L0#一次也没有#l\r\n\r\n#L1#（……）#l", 0, 2192003)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你大可以老实说出来的，我认为这件事一点都不丢脸。", 0, 2192003, false, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("可即便如此，也绝对赶不上我的。\r\n#e#h0##k#n，你要来梦幻主题公园听听我的故事吗？\r\n\r\n#b#e（接受时自动前往梦幻主题公园。）#n#k", 0, 2192003)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("谢谢，我会在梦幻主题公园等着你的！你来正门就行。", 1, 2192003, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31363, "");
                                cm.dispose();
                                cm.warp(222100000, 0)
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
            cm.sendNormalTalk("我叫#b多洛米#k，你问我刚刚为什么要问你那件事吗？\r\n应该说我正在思考表白、成功和爱情吧？", 1, 2192003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实我……", 1, 2192003, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_ProcessOnOffLayer("0", "Map/Effect3.img/fantasticThemePark/past/cut1", 0, 100, 0, 0, 15, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ProcessOnOffLayer("1", "Map/Effect3.img/fantasticThemePark/past/cut2", 0, 100, 0, 0, 15, 4, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1500)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_ProcessOnOffLayer("2", "Map/Effect3.img/fantasticThemePark/past/cut3", 0, 100, 0, 0, 15, 4, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_ProcessOnOffLayer("0", "", 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("1", "", 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("2", "", 2, 500, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
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
                                                    cm.forceCompleteQuest(31363);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.sendNormalTalk("被甩了吧？", 3, 2192003, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#fs14##e并↘没↘有↗#n好吗？什么被甩！#fs# \r\n\r\n我认为如果不是命中注定的缘分，一切都是有可能的好吗？\r\n只不过发生的频率有点高罢了。", 1, 2192003, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("大概#fs15#10#fs12#0#fs10#次左右吧……", 1, 2192003, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#e#fs16#100次？！？！#n #fs12##fn宫书体##b(是真的，真的出现了)#k", 3, 2192003, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("不过那都是过去的事了！我认为这是我在遇到#e这个人#n之前，所需要历经的诸多练习罢了。", 1, 2192003, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("那是谁啊？", 3, 2192003, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("我的第101次爱情#b(眨眼)#k\r\n\r\n你再来找我一下我就告诉你。", 1, 2192003, true, false)
                                                                        } else {
                                                                            if (status === a++) {
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