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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40700.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你们是神之子，将来会成为超越者的人啊。你们竟然会来到这时间神殿…… 是迷路了吗？你们想知道的是什么？", 32, 2480001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("黑魔法师的军团长说，我们是不洁者，所以无法成为超越者…… 不洁者想要成为超越者的话，要怎么做才行呢？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……他似乎还有些事没告诉你们。不是你们俩，而是你们中的一位是不洁者，不对吗？那样的话，答案很简单。", 32, 2480001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("除掉不洁者。如果没有不洁者的话，就只剩下洁净的神之子，他就能觉醒成超越者了……", 32, 2480001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我来告诉你们找出不洁者的方法。", 32, 2480001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face1#闭嘴！我们是在问你除此之外的其他方法啊！", 44, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没有别的方法。被污染的时间之力是无法转移到别的地方的。两位的选择就是答案。", 32, 2480001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face1#别搞笑了！你们活了这么久，知道的就只有这个！？", 44, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……#p2400005#。不要生气。", 44, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face1#还不是因为那个人一直在说些烦人的话！", 44, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我们听听那人怎么说吧。", 44, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face7#……你什么意思？找出不洁者…… 然后杀掉他？", 44, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("不是。我觉得没有必要杀掉不洁者。但是，首先得找到不洁者，才能想办法对他进行净化或者什么。", 44, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face10#但是……", 44, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("我们不能就此停止啊。没有其他方法的话，我们就先做我们能做的事吧。", 44, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("好的。那个什么不洁者…… 净化不就行了么？无论如何，找到那方法应该就可以了吧。", 44, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("虽然不怎么满意，但是…… 我知道了。我们听那人怎么说吧。", 44, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#b(……如果有净化不洁者的方法的话，军团长威尔就不会这么轻易放了我们了。)", 44, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#b(因为没有方法…… 因为最终我们会互相残杀，所以他才放了我们的吧。为了让我们痛苦。尽他所能……)", 44, 2400006, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#b#face10#(……该怎么做才好。)", 44, 2400006, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.gainExp(10689000);
                                                                                            cm.forceCompleteQuest(40700);
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
};