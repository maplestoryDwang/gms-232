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
            cm.sendNormalTalk("…………….", 3, 1520045, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…………….", 3, 1520045, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……………没来啊。", 3, 1520045, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("他没有看到消息吗？为了能更加引起他的注意，重新写一次吧？", 3, 1520045, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu("“幻影, 出来吧。 ”中间再写一句……，写什么呢？\r\n#b#L0# 滚#l\r\n#b#L1# 快#l", 1, 1520045)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("很好，“幻影, 滚出来吧。”好了，都写好了。", 3, 1520045, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("………那破玩意儿是什么东西？", 5, 1520046, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("?!", 3, 1520045, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32373, "A1");
                                            cm.forceCompleteQuest(32340);
                                            cm.gainExp(200000);
                                            cm.dispose();
                                            cm.warp(913080100, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32340.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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