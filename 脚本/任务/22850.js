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
            cm.sendNormalTalk("凯内西斯,  你的ESP限制器充满了强大的力量,  这是怎么回事? ", 4, 1531001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……原来是这样,  你变得太强了,  现在看来是已经达到了全新的境界,  估计现在的你,  就算进入陷坑,  也完全能够控制好自己了. ", 4, 1531001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("只要你愿意,  我现在就可以帮你升级你的数据,  怎么样? \r\n#b(如果答应就可以进行四转. )#k\r\n\r\n#b#i1353203# #t1353203#", 4, 1531001)
                } else {
                    if (status === a++) {
                        cm.changeJob(14212);
                        cm.updateInfoQuest(1073, "14200=10;14210=37;14211=201;14212=201");
                        cm.forceCompleteQuest(22850);
                        cm.gainExp(430920);
                        cm.gainItem(1353203, 1);
                        cm.sendNormalTalk("恭喜,  升级已完成. \r\n现在你所用的技能可以被用得更加丰富多彩了. ", 4, 1531001, false, false);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22850.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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