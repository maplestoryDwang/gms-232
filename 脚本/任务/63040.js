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
            cm.sendNormalTalk("#b你知道冒险岛世界吗？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("冒险岛世界……？第一次听说。自从我来到这里，就从没走出过这城墙范围之外，那地方也许在城墙外面吧……。", 4, 9400215, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b那你有没有听说过可以开启巨门的钥匙？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯……抱歉，这个我也不知道。那边那个巨人#p9400217#在这里待的时间最长，你去问他吧。", 4, 9400215, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(63040);
                            cm.gainExp(254080);
                            cm.updateInfoQuest(63040, "exp=1");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63040.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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