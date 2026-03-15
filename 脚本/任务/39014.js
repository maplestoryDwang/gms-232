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
            cm.updateInfoQuest(39015, "order=cajhmenifpdqkolgb");
            cm.updateInfoQuest(39016, "count=1");
            cm.updateInfoQuest(39016, "count=1;region=2");
            cm.askYesNo("舔舔！快点处理今天的辅助工作！\r\n\r\n#b#e#y39019##k#n\r\n#b#e#y39017##k#n\r\n", 0, 3003152)
        } else {
            if (status === a++) {
                cm.forceStartQuest(39019, "");
                cm.forceStartQuest(39017, "");
                cm.forceStartQuest(39014, "");
                cm.sendNormalTalk("完成所有辅助工作后记得告诉我！我会给你特别奖励！舔舔舔！\r\n一定要在#r#e子夜前#k#n来找我！舔！\r\n你可以通过#e#b任务信息栏#k#n详细了解辅助工作！", 0, 3003152, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39014.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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