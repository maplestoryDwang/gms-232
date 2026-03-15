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
            cm.sendNormalTalk("骑士们的骑宠和普通的骑宠略有不同。就是生长在岛上的提提的一种——#b提提阿纳#k。骑士可以骑乘提提阿纳，而不是普通怪物。还有一点你必须知道。", 0, 1102002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("骑宠并不只是坐骑，如果你觉得它只是移动手段就错了。骑宠是朋友、同伴、战友……可以是这所有的一切。偶尔它也可以救你的命。所以圣地的骑士们都自己驯养骑宠。", 0, 1102002, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20522, "");
                    cm.forceStartQuest(20529, "");
                    cm.forceStartQuest(20529, "0");
                    cm.setAccountQuestInfo(238, "count=10657;T=20201006041809");
                    cm.forceCompleteQuest(20522);
                    cm.forceCompleteQuest(20529);
                    cm.gainExp(6000);
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20522.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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