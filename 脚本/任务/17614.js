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
            cm.sendNormalTalk("啊，#e#b#h0##k#n……刚见面就要分开有点可惜，但是，我得出发去进行贸易了。我只是暂时来这贝里买粮食和鱼的。", 1, 9390241, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("很遗憾。我还有很多事情想问你呢。", 3, 9390241, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯！你想去#b桑凯梅尔兹#k吗？你不是说你是作为和平使者来到这里的嘛。如果你们想和凯梅尔兹达成和平协议的话，你是不是应该见见我的父亲？", 1, 9390241, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯。我也打算最近去桑凯梅尔兹一趟。贝里村长说那里很大，充满了朝气。", 3, 9390241, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那是当然！桑凯梅尔兹是充满朝气的地方！我还有点交易要做，得现在其他的地方。如果没关系的话，你愿意先到桑凯梅尔兹等着我吗？", 0, 9390241)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17614, "");
                                cm.forceStartQuest(17614, "未完成");
                                cm.sendNormalTalk("好的。出了贝里村往东，沿着海岸一直走~ 就能到达桑凯梅尔兹了。只有一条路，我想你是不会迷路的，但那路上有很多强盗，你要小心。\r\n 那我们到#e#b桑凯梅尔兹#k#n再见吧！", 0, 9390241, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17614.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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