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
            cm.sendNormalTalk_Bottom("喂？ 是转校生的电话吗？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("欢迎你来到神兽国际学校。我给你打电话不为别的，而是想正式录取#h0#你为我们学校的学生。你现在来一趟办公室吧？", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是的，不是教室，而是办公室。办公室在1楼走廊的最里头。", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么我就在这里等你。\r\n\r\n#b（前往1楼走廊最里头的办公室去见见希纳斯吧） ", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32728, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_ForcedFlip10(2, 544);
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("快请进。我们已经见过了，对吧？ ", 37, 1530060, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("嗯？你问我为什么会坐在校长的位置上？", 37, 1530060, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face0#哈哈……事实上，我们学校并没有校长这个职位。但是呢，这所学校所有的行政事务都由我来负责。可以说是相当于我的管理课程吧？这所学校是归我们家族所有的。", 37, 1530060, true, true)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === b++) {
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 850, 75)
                        } else {
                            if (status === b++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === b++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                    cm.effect_Text(["#fn黑体##fs26#希纳斯, 神兽集团的独生女"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0])
                                } else {
                                    if (status === b++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === b++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647)
                                        } else {
                                            if (status === b++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                            } else {
                                                if (status === b++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === b++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.sendNormalTalk_Bottom("转校生你的名字是……叫#h0#吧？真是个奇特的名字。不过，奇怪的是！这明明是个奇特的名字，可我却似乎在哪里听过一样。", 37, 1530060, false, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("你果然和我是命运……啊，没什么。", 37, 1530060, true, true)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("……？", 57, 1530062, true, true);
                                                                    cm.sendNormalTalk("...? ", 1530062, 257, 0, 0)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("没什么。你就当什么也没听到吧。哦哈哈哈。对了，你可以填写一下这些资料吗？", 37, 1530060, true, true)
                                                                    } else {
                                                                        if (status === b++) {
                                                                            cm.askTextSpecialUI(4, 1530062, 1, "", 28, 2, 12, 7)
                                                                        } else {
                                                                            if (status === b++) {
                                                                                var a = cm.getText();
                                                                                if (a.length() <= 2) {
                                                                                    status -= 2;
                                                                                    cm.sendNormalTalk_Bottom("天哪，你的座右铭可真短！请再写点什么吧，纸还空着一大截呢。", 37, 1530060, false, true)
                                                                                } else {
                                                                                    cm.updateInfoQuest(32724, "m=" + a);
                                                                                    cm.sendNormalTalk_Bottom("现在，#h0#你已经正式成为我们学校的学生了。\r\n以后请多多关照吧，哈哈哈。", 37, 1530060, false, true)
                                                                                }
                                                                            } else {
                                                                                if (status === b++) {
                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                    cm.forceCompleteQuest(32728);
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
};