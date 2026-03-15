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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63068.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63068.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哇……真美啊。这美景一点儿不亚于金银财宝。我从没想过城墙外面是这样的地方。", 4, 9400248, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然我还有点害怕，但城墙外面似乎也不错。", 4, 9400248, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵，谢……谢谢你……\r\n你需要#t2436086#的话，欢迎随时来找我。对你……我愿意分享！", 4, 9400248, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63068);
                        cm.setNumberForQuestInfo(63120, "start", 1);
                        cm.gainExp(317600);
                        cm.updateInfoQuest(63068, "end=1;exp=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};