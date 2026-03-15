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
            cm.updateInfoQuest(39036, "order=efkibcjhalmgd");
            cm.updateInfoQuest(39037, "count=1");
            cm.updateInfoQuest(39037, "count=1;region=2");
            cm.askYesNo("     可为森林做如下几件事。\r\n\r\n  #b#e#y39042##k#n\r\n  #b#e#y39043##k#n\r\n", 0, 3003322)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39042, "");
                cm.forceStartQuest(39043, "");
                cm.forceStartQuest(39035, "");
                cm.sendNormalTalk("     等你的事情都办完后再来找我。\r\n     我们精灵是非常懂得感恩的。\r\n     但是一定要在#r#e子夜前#k#n来找我。\r\n如果你对之后的任务有什么好奇的，可以去#e#b任务信息栏#k#n进一步了解。", 0, 3003322, false, false)
            } else {
                if (status === a++) {
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39035.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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