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
            cm.sendNormalTalk_Bottom("又增加了一个人。", 37, 9401022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我说的是一同前往深渊的队员，你定好了吗？", 37, 9401022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b没有。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你现在已经是资深队长了，有许多能力者都想要进入你的远征队。", 37, 9401022, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("好好找找吧。", 37, 9401022, true, true)
                            } else {
                                if (status === a++) {
                                    cm.curNodeEventEnd(true);
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(true, false, true);
                                    cm.sendNewEffects(17, [0, 1000, 2000, -400, -400])
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(13, [4000, 900, 0, 0, 0])
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNewEffects(13, [3000, 0, 700, 0, 0])
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNewEffects(13, [4000, -900, 0, 0, 0])
                                                    } else {
                                                        if (status === a++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(4500)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNewEffects(17, [0, 2000, 4000, 190, 10])
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#b（不久前开始，就常常能在本部遇见她，她是在寻找伙伴吗？与她对话看看。）", 57, 0, false, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNewEffects(14, [0, 4000, 1000, 0, 0])
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNewEffects(19, [0])
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.eventSKill(0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.forceStartQuest(64778, "");
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
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64778.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk_Bottom("#b你好。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯～你和其他跟我搭话的小不点们不太一样呢。", 37, 9401033, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不～没什么，别在意。", 37, 9401033, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那边眼睛瞪得像铜铃一样的家伙们，是你朋友吗？", 37, 9401033, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("（两眼放光）", 37, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（两眼放光）+D126", 37, 9401032, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("（两眼放光（？））", 37, 9401030, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b哈哈。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯~不用说了，我已经知道了。", 37, 9401033, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b你来到深渊还没有多久吧？看你的样子好像在寻找远征队加入。", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我才不甘心只做一个小小的队员，我可是要成为队长的人。我正在接受成为远征队队长的审查，呼呼", 37, 9401033, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b啊，原来如此。希望你如愿以偿。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("谢谢，呵呵。我们以后应该会经常见面，让我们维持友好的竞争关系吧。", 37, 9401033, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b竞争？", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("首先发现深渊尽头的人就是赢家，不是吗？呵呵呵。", 37, 9401033, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#b也可以这么说吧。", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b那我就先走了，伙伴们还在等着我。", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b（收编梅里耶好像有点困难，收编其他冒险家后，再进入深渊吧。）", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceCompleteQuest(64778);
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
};