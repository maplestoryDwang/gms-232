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
            cm.sendNormalTalk_Bottom("我只能到这里了。\r\n因为我是赛恩制造的#b拟真机器人基础#k。", 36, 9401085, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么意思？", 56, 9401085, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#就是你要#b操纵#k并带我出去的意思。\r\n虽然会很难搞，尤其是在这种情况下。哈哈哈。", 36, 9401085, 1, 1)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("呃，没办法……我们出发吧……", 57, 9401085)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(64928, "");
                            cm.updateInfoQuest(63484, "connect=11");
                            cm.dispose();
                            cm.getPlayer().clearAllBuffs();
                            cm.openNpc("拟真机器人S3_重返地面")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64928.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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