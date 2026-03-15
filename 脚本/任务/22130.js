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
            cm.playerMessage(-1, "学习了回家技能。");
            cm.forceStartQuest(22130, "");
            cm.forceCompleteQuest(22130);
            cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/14/0"])
        } else {
            if (status === a++) {
                cm.changeJob(2200);
                cm.playerMessage(5, "装在孵化器里的蛋中孵化出了龙宝宝.");
                cm.playerMessage(5, "获得了5点可以提升技能的技能点数。");
                cm.playerMessage(5, "物品栏位被扩充.");
                cm.playerMessage(5, "龙宝宝貌似有话要说，点击和它对话看看吧.");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22130.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.playerMessage(-1, "学习了回家技能。");
            cm.forceStartQuest(22130, "");
            cm.forceCompleteQuest(22130);
            cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/14/0"])
        } else {
            if (status === a++) {
                cm.changeJob(2200);
                cm.playerMessage(5, "装在孵化器里的蛋中孵化出了龙宝宝.");
                cm.playerMessage(5, "获得了5点可以提升技能的技能点数。");
                cm.playerMessage(5, "物品栏位被扩充.");
                cm.playerMessage(5, "龙宝宝貌似有话要说，点击和它对话看看吧.");
                cm.dispose()
            }
        }
    }
};