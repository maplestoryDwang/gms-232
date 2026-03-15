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
            cm.sendNormalTalk("我已经能够熟练运用支部长传授的技术了。支部长不是说过，这些技术早晚需要更新换代吗？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好，我会以在战斗中获得的经验为基础，创造出一套我自己的专属技术。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这种形态似乎不错……好，那东西也放进来试试……我卡德娜大人前无古人，后无来者的技术马上就要成形了……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈，终于完成了。百分百适合我的专属技术！支部长看到我的新技术一定会大吃一惊吧？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1143056, 1);
                            cm.gainItem(1353303, 1);
                            cm.forceStartQuest(34659, "");
                            cm.forceCompleteQuest(34659);
                            cm.forceStartQuest(34698, "");
                            cm.forceCompleteQuest(34698);
                            cm.changeJob(6412);
                            cm.updateInfoQuest(1073, "6400=10;6410=53;6411=81;6412=127");
                            cm.sendNormalTalk("嘻嘻，不说这个了，我想赶快试验一下我的新技术。快打开技能栏(K)看看吧。", 2, 0, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34659.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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