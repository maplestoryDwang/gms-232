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
            cm.sendNormalTalk("凯内西斯,  在陌生地方旅行还开心吗? ", 4, 1531001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("偶尔也给我发点照片嘛,  \r\n比方说可爱怪物的照片……", 4, 1531001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("什么? 全都被你打死了? 额……", 4, 1531001, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("总之你也变得够强大了,  我打算给你升级数据,  怎么样? \r\n#b(如果答应就可以进行三转. )#k\r\n\r\n#b#i1142865# #t1142865#\r\n#b#i1353202# #t1353202#", 4, 1531001)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(1073, "14200=10;14210=37;14211=201");
                            cm.forceCompleteQuest(22800);
                            cm.gainExp(74100);
                            cm.sendNormalTalk("恭喜,  升级已完成. \r\n现在就可以使用你的技能,  直接举起怪物了. ", 4, 1531001, false, true)
                        } else {
                            if (status === a++) {
                                cm.changeJob(14211);
                                cm.gainItem(1353202, 1);
                                cm.gainItem(1142865, 1);
                                cm.sendNormalTalk("这就表示你可以实现和原先大有所不同的战斗方式,  \r\n不过你也不要太折磨那些可爱的怪物哦. ", 4, 1531001, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22800.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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