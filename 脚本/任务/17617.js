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
            cm.sendNormalTalk("啊，现在想来，是有点奇怪的地方。", 0, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("(他说的奇怪的地方是什么呢，先听他说说吧？)", 2, 9390220)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk(" 奇怪的地方？", 2, 9390220, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk(" 嗯，分明是海上贸易品，量也很多，迪巴斯却自己用拉货的车全部运走了。我觉得这个有点奇怪。正如你所见到的，交易所就在港口前面，一般海上贸易品都是直接装船的。", 0, 9390220, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你看见他是往什么方向走的了吗？", 2, 9390220, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这个么…交易所那个时候很忙，我记不清了，但是当时从贝里来的拉鱼车翻倒，他拉货的车是不可能往贝里方向的西边的路走的。那时整条路上全是鱼，鱼腥味很重的。", 0, 9390220, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("桑凯梅尔兹除了通往贝里的西边的路，就只剩下通往运河的东边的路了，那现在只有一种可能了吧？", 0, 9390220, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("嗯。这个信息非常重要。谢谢你。", 2, 9390220, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("桑凯梅尔兹居然发生了交易品被盗的事件，真是难以想象。希望你能尽快抓到犯人。", 0, 9390220, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17617);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17617.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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