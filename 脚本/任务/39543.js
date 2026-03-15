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
            cm.sendNormalTalk_Bottom("#face0#在冒险岛世界，有一位率领一众冒险家的代表，\r\n那就是精灵弓箭手赫丽娜。", 36, 3000001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#对于刚刚开始冒险的冒险家们而言，他就是帮忙指引冒险岛世界的\r\n引路人。", 36, 3000001, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#如果你想要，我还可以提前帮你联系好。\r\n你愿意去见一见赫丽娜，接受她作为冒险岛世界的向导吗？", 36, 3000001)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那我就启动次元传送口了，\r\n等你到了，就去找射手村#r#m100000201##k的#b#p1012100##k。", 36, 3000001, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.forceStartQuest(39543);
                            cm.warp(104020000, 4, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39543.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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