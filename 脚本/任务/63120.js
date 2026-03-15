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
            cm.sendNormalTalk("你真是个穷光蛋。\r\n在这财物之地里估计就你一个人这么一无所有。", 4, 9400215, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你要是帮我跑腿，我就分你点黄金，当是扶贫，怎么样？", 4, 9400215)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(63120);
                    cm.addNumberForQuestInfo(63120, "dayNR", 1);
                    cm.setNumberForQuestInfo(63120, "start", 2);
                    cm.setStringForQuestInfo(63120, "lastDate", cm.getNowTimeString(3));
                    if (cm.rand(0, 1) == 0) {
                        cm.forceStartQuest(63121, "");
                        cm.sendNormalTalk("好。那你去收集#t4034994:#给我填肚子吧。\r\n我看20个应该差不多够吃饱了。", 4, 9400215, false, false)
                    } else {
                        cm.forceStartQuest(63122, "");
                        cm.sendNormalTalk("好。那你去消灭城墙外觊觎我财物的#o9402046#。\r\n消灭50只左右我就勉强能放心了。", 4, 9400215, false, false)
                    }
                } else {
                    if (status === a++) {
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63120.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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