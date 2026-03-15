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
            cm.sendNormalTalk_Bottom("您好吗。首领。我有话对您说。", 56, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你这些家伙还有什么脸面到这地方来啊！", 36, 9390206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你有什么想说的？", 32, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("吉尔伯特首领，没有必要听他的。还不赶紧逮捕他们，干嘛呢。", 36, 9390206, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("就算该抓的时候就抓，先听听他们说什么有何不妥。你说说什么事情？", 32, 9390203)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("西温一开始实际上并没死，他是在装死。", 56, 9390203, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("他是装死？", 32, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("是的，这都是为了孤立凯梅尔兹共和国而计划的阴谋。", 56, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("孤立的阴谋？", 32, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("是的，对外说海本王国提出了和约，但是凯梅尔兹反对，还杀死了使节团。最终，凯梅尔兹共和国就会被冒险岛世界的各个地方责难和孤立。", 56, 9390203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("那是什么荒唐的阴谋论啊！", 36, 9390206, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("呃嗯……那叫西温的人现在在哪？", 32, 9390203, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("虽已成功抓捕…… 但最终又被海本的暗杀者杀死了。", 56, 9390203, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("那么你的意思是现在是真的死了吗？", 32, 9390203, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("是的，是那样的。", 56, 9390203, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("这种谎话王！毫无证据空口无凭来骗我", 36, 9390206, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceStartQuest(17672, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17672.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("这人说的话都是事实。", 36, 9390205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，这不是……克莱尔你怎么到这儿来了……！！", 36, 9390206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("原来是班·特来敏的女儿克莱尔啊。", 32, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是的，您好吗。首领大人。", 36, 9390205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你怎么会来这里？你现在不是在海本王国留学……", 36, 9390206, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我的事情日后在另作禀报，父亲。首领大人，这人说的话全部都是事实。我也在一旁听得真真切切的，西温想陷害这几位的事实。", 36, 9390205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是事实吗？", 32, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("是的，是事实。我还被他们绑架，多亏这几位的帮助才逃脱出来的。", 36, 9390205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("绑，绑架？？岂，岂有此理……", 36, 9390206, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("请镇静。特来敏。谢谢你重要的证言，克莱尔小姐。多亏了你救了两位差点儿枉受冤屈的年轻人。班·特来敏。你认为呢？你不会连你女儿的话都不相信了吧？", 32, 9390203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("呃呃……好吧。先就那样吧。克莱尔！你跟我来！", 36, 9390206, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("那么我就告辞了。下次再见。", 36, 9390205, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(17672);
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
};