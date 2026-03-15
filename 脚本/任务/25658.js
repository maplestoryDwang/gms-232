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
            cm.sendNormalTalk("夜光法师，你没事吧？", 0, 1032205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？我没事，你别担心。", 2, 1032205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我怎么能不担心？你现在一脸郁闷的表情，和飞鱼丸对话时，气氛又显得非常严肃。真的没什么事吗？", 0, 1032205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("老实说，有件令我感到震惊的事。现在不能说，等我整理清楚后再告诉你。", 2, 1032205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("没关系，只要夜光法师你平安就好。不过，我刚刚听见露西娅……这个名字……能不能告诉我她是谁？这个名字好耳熟。", 0, 1032205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是过去和我一起学习光之力量的人。她既是我的偶像，也是我喜欢的人。", 2, 1032205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("现在也是吗？", 0, 1032205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("现在嘛，也许已经忘掉所有不好的事情，无忧无虑地生活在某个地方吧？", 2, 1032205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(无法继续问下去了，夜光法师的眼神好忧伤。)\r\n原来是这样。我是不是问了不该问的事啊？", 0, 1032205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("呵呵，不是的。我想去休息一会儿。", 2, 1032205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("好的，等一下我给你做好吃的，你吃过再走吧。\r\n(可露西娅这个名字为什么听起来这么熟悉呢？似乎脑海中还有点模模糊糊的记忆浮现……)", 1, 1032205, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(25658);
                                                        cm.gainExp(273292);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25658.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};