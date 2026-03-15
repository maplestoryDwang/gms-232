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
            cm.askAcceptDecline("现在还剩下最后一步。", 0, 9073005)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("材料全部搜集到啦。稍等一下。", 0, 9073005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("给，这就是结界图腾。把它树立在黑山老妖经常出没的死亡之林4，图腾就会阻断黑山老妖的禁忌魔法了。", 0, 9073005, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(3193, "b");
                        cm.forceStartQuest(3192, "");
                        cm.sendNormalTalk("虽然不太可能，但是如果你把它弄丢了，就必须重新帮我搜集材料。所以一定要注意，千万别弄丢了。", 0, 9073005, true, true);
                        cm.gainItem(2430180, 1);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3192.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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