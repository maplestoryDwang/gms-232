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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31915.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31915.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest(31915);
            cm.sendNormalTalk("#b(消灭掉了。不……消失了吗？)#k", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呃，你这种东西竟敢窥探主人的珍贵记忆……", 5, 1104300, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(“主人”？是说刚才那个少女吗？)#k", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这次就算了。不过我家主人已经开始行动，今后你们别想好好睡觉了。你就好好等着吧，呵呵呵……", 5, 1104300, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(913050010, 0, false);
                            cm.gainItem(2431554, -1)
                        }
                    }
                }
            }
        }
    }
};