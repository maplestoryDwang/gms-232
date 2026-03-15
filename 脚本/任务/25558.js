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
            cm.sendNormalTalk("话说话来，夜光法师你怎么样？有一段时间我真的以为你死了。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("为了封印黑魔法师，我也被关在了封印里。但是我没有放弃。终于我脱离了封印中流动的时间，不久前在埃欧雷附近的森林中被人发现。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("所以才一点都没变老啊。我很羡慕呢。哈哈。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("知道真相后，你就不会这么想了。现在我体内流动着黑魔法师的黑暗力量。", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……？！夜光法师，这是什么意思？", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("封印黑魔法师的瞬间，我的身体被他的力量侵蚀了。重见光明后，我就忘了这回事……结果就暴走啦，差点又伤害到我所珍惜的人。这次我绝对，绝对不能那样。", 2, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("夜光法师，正好我有件事想和你说。这几百年，我独自研究光之力量，发现了一件惊人的大事。那就是光和黑暗的力量之间的关系就好像是硬币的正反面一样。", 0, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……你是说黑暗力量是光之力量的另一种形式？", 2, 1032209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("对。准确的说，黑暗力量是光之力量消失后的状态。以此为基础，我设想了一种假说，但时间不足没法亲自验证……也许能够控制夜光法师身体内的黑暗力量呢。请等等。", 1, 1032209, true, true);
                                            cm.forceCompleteQuest(25558);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25558.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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