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
            cm.sendNormalTalk("防御准备尚未完成，麦格纳斯的兵力就开始入侵，我们一时难以抵挡。据侦察兵的报告，那些猩猩幽灵已经侵入了保护罩北部边界。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("它们应该算是敌人主力部队的侦察兵。虽说战斗才刚开头，但只要消灭它们，能为我们的部队争取很多时间。你愿意帮忙吗？\r\n\r\n#b#e<接受后将立即移动到战场地图。>#n#k", 0, 3000000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("有你在真令人放心。请你到保护罩北部边界去，消灭所有的猩猩幽灵。", 1, 3000000, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(25750, "");
                        var a = cm.getEventManager("狂龙战士_战斗5");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25750.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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