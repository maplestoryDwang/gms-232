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
            cm.askAcceptDecline("我回来啦。给，这是阿弗利埃为我整理的有关#b封印石的原理#k的文件。请收好。", 0, 1520041)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("最早研究封印石的人，既是先代龙的主人又是魔法师英雄，他的名字叫弗里德。因为阿弗利埃也参与了研究，所以它对那个原理也记忆深刻。", 1, 1520041, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4033898, 1);
                    cm.sendNormalTalk("不过，这东西对我来说太难了……，所以阿弗利埃就这样整理后交给了我。呵呵。", 1, 1520041, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("总之，能有助于拯救冒险岛的话，就太好了。如果到时候你还有事情要找我和米乐帮忙的话，请尽管说。那，我要先告辞了。", 1, 1520041, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32332, "");
                            cm.forceStartQuest(32366, "1");
                            cm.sendNormalTalk("(向龙神表示感谢。并发出赞叹，如此小小少年竟然是英雄，真是太令人惊讶了。)", 3, 1520041, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哈哈……是嘛？不过，大家不都一样嘛。你是小小冒险家。那么，我们后会有期吧。", 1, 1520041, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("再见了，#h0#！保重啊~!", 5, 1520042, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(32332);
                                        cm.gainExp(250000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32332.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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