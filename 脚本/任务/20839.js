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
            cm.sendNormalTalk("#h0#，这段时间你一直在努力修炼。好像比最初见到你的时候强多了～其他人对你的评价也很不错……现在你好像具备了成为修炼骑士的资格。\r\n女皇在圣地的中心，你到那里去就行。沿着箭头走。", 1, 1102100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("希望你能成为一名优秀的骑士……", 1, 1102100, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(20839, "");
                    cm.OnStartNavigation(130000000, 0, "", 20839);
                    cm.updateInfoQuest(25980, "normal=#");
                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                    cm.updateInfoQuest(39391, "level=1");
                    while (cm.getLevel() < 16) {
                        cm.getPlayer().levelUp()
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20839.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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