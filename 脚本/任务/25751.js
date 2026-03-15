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
            cm.sendNormalTalk("侦察兵送来了新消息，你来得正好。敌人的主力部队终于现身了。他们出现的地方是保护罩东部边界。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("保护罩正在逐渐被强化，只要能争取时间，我们应该能守住万神殿。你做好准备对付敌人的主力部队了吗？\r\n\r\n#b#e<接受后将立即移动到战场地图。>#n#k", 0, 3000000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("很好，请你到保护罩东部边界去，尽量阻挡敌人的主力部队。", 1, 3000000, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(25751, "");
                        var a = cm.getEventManager("狂龙战士_战斗6");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25751.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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