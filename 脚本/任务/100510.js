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
            cm.sendNormalTalk("呵呵，来啦，#b#h0##k。\r\n包括你在你，今天又有很多骑士来到了#b沙龙RISE#k。", 4, 9062278, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然所有到访#b沙龙RISE#k的骑士都能获得援助，但我更希望能为那些拥有#b强大力量和潜力#k的骑士提供#b相应的待遇#k。", 4, 9062278, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("因此我决定举办#b荣誉决斗场#k，让所有骑士都有机会证明自己的荣誉和力量。", 4, 9062278, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("并根据#b荣誉决斗场#k中战绩，为那些证明了自己力量的人提供#b更多的援助#k。", 4, 9062278, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("呵呵，怎么样？你也想去#b荣誉决斗场#k挑战一下吗？", 4, 9062278)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("呵呵，那就在#b荣誉决斗场#k见吧。", 4, 9062278, false, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(100510, "point=0");
                                    cm.updateInfoQuest(500932, "record=0");
                                    cm.updateInfoQuest(500932, "coinCount=0;record=0");
                                    cm.updateInfoQuest(500932, "coinCount=0;todayRecord=0;record=0");
                                    cm.updateInfoQuest(100510, "rMap=993176500;point=0");
                                    cm.updateInfoQuest(100510, "rMap=993176500;point=0;start=1");
                                    cm.dispose();
                                    cm.warp(993176501, 0, false)
                                }
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100510.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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