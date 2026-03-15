var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNormalTalk_Bottom("这就是传说中的怪盗幻影的水晶花园啊……比我想象中大很多呢。", 37, 1540453, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("在迷雾的另一边，强大的敌人正在等着我们。", 37, 1540453, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们要对付的敌人非常强大。\r\n不过，我们这边有以一敌百的勇士。联盟肯定会取得胜利的。", 37, 1540453, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("你也这么认为吧，#b#h0##k？\r\n#b\r\n#L1#我们肯定会胜利的#l\r\n#L2#我觉得有些困难#l", 37, 1540453)
                    } else {
                        if (status === a++) {
                            if (b == 1) {
                                cm.sendNormalTalk_Bottom("真不愧是联盟的王牌。", 37, 1540453, false, true)
                            } else {
                                cm.sendNormalTalk_Bottom("不要担心，我们一定会胜利的。", 37, 1540453, false, true)
                            }
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("对了，#b南哈特#k正在找你。\r\n你只要到甲板中央，就能找到他了。", 37, 1540453, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(33164, "");
                                    cm.sendNormalTalk_Bottom("你只要从这里往左走，就能到达甲板中央了。", 37, 1540453, true, false);
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