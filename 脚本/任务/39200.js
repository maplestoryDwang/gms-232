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
            cm.sendNormalTalk("#b#e[小软柿收]#k#n\r\n\r\n小软柿，是我啊，#b独眼#k。\r\n你过得还好吗？\r\n现在你的英勇故事已经传遍了各处，哈哈哈。", 5, 2155102, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("在你离开之后，我们建造了#b新的避难处#k。\r\n不过，随着机器人逐渐增多，这里逐渐变成了村庄。\r\n你难道不好奇吗？#b机器人村庄#k，哈哈。\r\n小软柿，如果你有时间，请随时过来。\r\n怎么样，#b你现在要立刻过来吗？#k哈哈哈。\r\n\r\n#b[独眼寄]#k\r\n\r\n#e#b- 如果点击“是”，即可自动移动。", 4, 2155102)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果你到达村庄，就立刻来找我#b#e独眼#n#k。", 5, 2155102, false, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(39200, "0q=1");
                        cm.forceStartQuest(39200, "");
                        cm.gainExp(60623436);
                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1");
                        cm.forceCompleteQuest(39200);
                        cm.dispose();
                        cm.warp(310070000, 4, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39200.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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