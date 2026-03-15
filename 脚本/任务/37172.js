var status = -1;

function start(d, c, b) {
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
            cm.sendNext("孩子！")
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false);
                cm.setStandAloneMode(true);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/meet/0", 0, 2000, 0, 0, 0, 4, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.sendNextNoESC("呃啊啊啊！我好想你！", 1501007)
                    } else {
                        if (status === a++) {
                            cm.sendNextNoESC("这段时间你跑到哪里去了？我不知有多担心……")
                        } else {
                            if (status === a++) {
                                cm.sendNextNoESC("鲁安一直在照顾我！", 1501007)
                            } else {
                                if (status === a++) {
                                    cm.sendNextNoESC("鲁安……？那鲁安说要交给我的小鸟！")
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_ProcessOnOffLayer("b0", "Effect/Direction21.img/Elodin/birdgrow/0", 2, 1000, 0, 0, 0, 4, 1);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNextNoESC("看来我得向魯安道谢。啊，#h #，你把我的孩子送回来，我也得向你表示感谢。")
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNextNoESC("我在森林里找了好久，都没找到我的孩子……")
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNextNoESC("最近因为奇怪的声音，整片森林都变得很敏感，我还担心你会受伤呢……")
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNextSNoESC("……")
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNextSNoESC("魯安也很担心。她说最近没听到歌声，不知道发生了什么事。")
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNextSNoESC("她说不能把小鸟一个人留在家里，但是最近森林又变得很敏感，因此无法外出，所以才会找我帮忙。")
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNextNoESC("原来是这样。看来有时间我得去看望一下鲁安。\r\n不过在这之前……")
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNextNoESC("要现在开始学习唱歌吗？")
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNextNoESC("#h #，我需要你的帮助。相信你一定可以帮我。")
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNextSNoESC("（果然……）")
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.curNodeEventEnd(true);
                                                                                        cm.setInGameDirectionMode(false, true);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.forceStartQuest();
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
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
};