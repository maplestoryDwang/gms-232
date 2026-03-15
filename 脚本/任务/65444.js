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
            cm.sendNormalTalk_Bottom("#b杰尼，原来你在这里！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#晒晒太阳，做做家务，和奶奶一起打发时间。但还是……有这么多时间呢。", 37, 9401160, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#可能是好久没休息了。我大概是不适合休息的体质。呼呼，如果有什么好工作，记得告诉我。", 37, 9401160, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b知道了。杰尼，再见。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(65444);
                            cm.updateInfoQuest(501024, "start=1;obj=2;man=1");
                            cm.playerMessage(-1, "追加[我的小屋]管家 - 杰尼。");
                            cm.playerMessage(-1, "可在[我的小屋]管家UI中更改。");
                            cm.dispose()
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65444.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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