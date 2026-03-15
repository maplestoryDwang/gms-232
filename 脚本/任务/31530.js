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
            cm.sendNormalTalk("#b伊黛娜，贝德罗斯下落不明，我想跟你谈谈这件事。", 16, 3001100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b我觉得他应该没死。他消失前还带着微笑……", 16, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵，首先我要祝贺你战胜了#r贝德罗斯#k。按照你的推测，#r贝德罗斯#k可能还活着吧？", 4, 3001100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#p3001107##k全程侦察了你们的战斗，你最好去问问#b#p3001107##k。也许他能给你你想要的答案。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("你要去和#b#p3001107##k谈谈吗？", 0, 3001100)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那么你去见见#b#p3001107##b，问问他有没有侦察到什么结果。", 0, 3001100, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31530, "");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31530.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("嗯？你有事吗？", 4, 3001107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(跟提洛说了那些有疑问的事。)", 16, 3001107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("原来是这样。我清清楚楚地观察了你们的战斗，还查看过是否没有异常情况。当时我见到有一个衣衫褴褛，看起来伤得很重的人走出赫里希安。", 4, 3001107, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过我不确定那个人是不是#r贝德罗斯#k。因为是在远处侦察到的，所以无法断定是谁。", 4, 3001107, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("除此以外就没有其他侦察结果了。", 4, 3001107, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b知道了，谢谢你，提洛。", 16, 3001107, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("别客气，嘿嘿。", 4, 3001107, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b(尽管不知道走出赫里希安的那个人是不是贝德罗斯，但可能性很大。没办法知道那人准确的行踪吗……)", 16, 3001107, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b这件事件先到此为止，先回到伊黛娜那里，打听一下圣物的事吧。", 16, 3001107, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(31530);
                                                cm.gainExp(75000);
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
};