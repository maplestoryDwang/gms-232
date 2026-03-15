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
            cm.sendNormalTalk("小软柿，每当你完成来自各处的委托，\r\n我们机器人就能侦察更长时间。\r\n那样的话，我们就行搜集到#b珍贵物品#k了。", 1, 2155000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("所以我们决定了，\r\n你#b每周完成4次委托时，领取#k\r\n#i4001842# #b#t4001842##k作为奖励。", 1, 2155000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b在开始执行委托时，我送你一个作为纪念。#k\r\n每周#b完成4次委托#k时，就告诉我，哈哈哈。", 1, 2155000, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39160, "");
                        cm.updateInfoQuest(39100, "av=1;FC=0");
                        cm.gainItem(4001842, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function start2(d, c, b) {
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
            cm.sendNormalTalk("小软柿，这次又来啦。\r\n有你帮忙，我们真的非常感谢。\r\n#b在上次领取奖励之后，如果完成了4次委托，就告诉我，哈哈哈。#k", 1, 2155000, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39160, "");
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39160.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.addNumberForQuestInfo(39100, "FC", -4);
            cm.forceCompleteQuest(39160);
            cm.updateInfoQuest(cm.rand(39161, 39164), "start=1");
            cm.sendNormalTalk("小软柿，你总是来帮我，侦察工作因此变得方便多了。\r\n给，这是给你的报答。\r\n#i4001842# #b#t4001842##k\r\n\r\n今后每周完成4次委托时，就告诉我，哈哈哈。", 1, 2155000, false, true);
            cm.gainItem(4001842, 7)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};