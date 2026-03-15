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
            cm.sendNormalTalk("一大早就来开玩笑，哈哈哈。别乱说了，快去给#p1013102#喂饭吧。", 0, 1013101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？那不是#p1013101#的事情吗？", 2, 1013101, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("你这家伙！快去喂呀！！#p1013102#有多讨厌我，你也知道。哥哥我去的话，它一定会咬我的。猎犬喜欢你，你去给它送饭。", 0, 1013101)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(22001, "");
                        cm.sendNormalTalk("你快到#b左边#k去，给#b#p1013102##k喂饲料。那个家伙好像肚子饿了，从刚才开始就一直在叫。", 0, 1013101, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4032447, 1);
                            cm.sendNormalTalk("给#p1013102#喂完食之后，赶快回来。", 0, 1013101, true, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(100030102, 1, "1013102", 22001);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22001.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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