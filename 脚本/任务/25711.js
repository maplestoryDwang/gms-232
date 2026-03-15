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
            cm.askAcceptDecline("诺巴精髓充满了力量。要不要试试进行最终觉醒？据说如果最终觉醒成功，就能变身为狂龙战士的最终面貌……真的可以吗？", 16, 0)
        } else {
            if (status === a++) {
                cm.changeJob(6111);
                cm.sendNormalTalk("成功了！现在你可以变身为狂龙战士的最终面貌。同时还可以使用更强力多样的攻击技能。", 16, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(25711, "");
                    cm.gainItem(1142486, 1);
                    cm.forceStartQuest(29989, "");
                    cm.forceCompleteQuest(29989);
                    cm.updateInfoQuest(1073, "6100=10;6110=201;6111=201");
                    cm.forceCompleteQuest(25711);
                    cm.effect_PlayMusic("Voice.img/jobChanged/6111F");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25711.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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