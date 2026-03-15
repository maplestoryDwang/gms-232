var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("欢迎你，#b#h0##k。我找你过来，是有事想拜托你。", 0, 3000001, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("上次你在东侧圣殿边界击退了可疑的人，这次你能再到西侧圣殿边界去一趟吗？\r\n\r\n#b#e<接受时立即移动到战场地图。>#n#k", 0, 3000001)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("谢谢。因为上次你的报告，东侧圣殿边界现在强化了警戒。\r\n这次请你去西侧圣殿边界去看看有没有什么异常，然后回来告诉我。", 1, 3000001, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(23655, "");
                        var a = cm.getEventManager("尖兵_战斗2");
                        a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23655.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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