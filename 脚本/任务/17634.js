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
            cm.sendNormalTalk("嗯。事情怎么样了。", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，顺利地赶走了阿库旁多。我想一段时间内，它们应该不会来袭击了。", 2, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("那么简单就处理好了？嗯，中间没有别的问题了？", 0, 9390203)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17634, "");
                        cm.sendNormalTalk_Bottom("是的，统帅…… 实际上……", 36, 9390202, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯，多亏了莱文出众的领导力，没有遇到什么大问题。", 56, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("(喂，你干嘛说谎啊？)", 36, 9390202, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那真是个好消息。没有遇到什么困难？", 32, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("(那些不愉快的事情，没有必要说出来。)", 56, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯…… 也许是我低估了莱文。", 32, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("啊，还有，我们在回来的路上发现了奇怪的结界。", 56, 9390203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("结界？是什么结界？", 32, 9390203, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("我们那时太疲惫，而且不知道会不会遇到什么危险，我们就没进入结界内部。", 56, 9390203, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯…… 我知道了。我会另外派人去调查结界的。辛苦你了。你和莱文一起去休息吧。", 32, 9390203, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17634.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("长时间在外面进行贸易，还是在家好啊。还有，刚刚的事，谢了。", 4, 9390202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("说什么谢不谢的。那又没什么。实际上，你也展现了你那优秀的用兵方法。以后不要犯同样的错误就行了。吃一堑长一智嘛。", 2, 9390262, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯！！没错！！以后我得小心了。", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("更何况，如果说得到了不明身份的女人的帮助的话……", 2, 9390262, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯…… 如果接受了不认识的人的帮助，按我爸爸的性格，他应该是不会开心的。总之，今天你也辛苦了，好好休息吧。", 4, 9390202, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("给，收下这个吧。是你帮助我的谢礼。", 4, 9390202, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(17634);
                                    cm.forceCompleteQuest(17721);
                                    cm.gainItem(1072967, 1);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};