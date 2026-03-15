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
            cm.sendNormalTalk("夜光法师，你还活着啊。你身上好像是黑暗力量的气息。怎么回事？", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("真没想到还能再见到你。命运真是爱捉弄人。", 16, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("夜光法师！", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没什么。就是感受到了黑暗力量所带来的纯粹魔力罢了。而且还认识到了新的世界。", 16, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我是不是听错了？夜光法师，守护光的欧罗拉成员，消灭黑魔法师的英雄，居然被黑暗力量迷惑了！", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("飞鱼丸也感受一下黑暗力量吧。你会知道我的选择究竟是对还是错。", 16, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……看来我认识的那个人已经死了。", 1, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25586);
                                        cm.gainExp(9136);
                                        cm.dispose();
                                        cm.warp(910142050, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25586.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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