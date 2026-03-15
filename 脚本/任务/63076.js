var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("#b(这个是……！钥匙？)", 2, 0, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(63076);
                cm.gainExp(158800);
                cm.updateInfoQuest(63076, "exp=1");
                cm.sendNormalTalk("#b(这钥匙是导致#o9402049#的叫声诡异的原因吗……)", 3, 0, true, true);
                cm.spawnMobLimit(9402048, 1, -46, -539, 100);
                cm.spawnMobLimit(9402048, 1, -40, -240, 100);
                cm.spawnMobLimit(9402048, 1, -616, 117, 100);
                cm.spawnMobLimit(9402048, 1, -274, -539, 100);
                cm.spawnMobLimit(9402048, 1, 273, 117, 100)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("#b(不管怎样，我又获得了一把钥匙。)", 3, 0, true, true)
                } else {
                    if (status === b++) {
                        var a = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                        cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + a + "/12)");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63076.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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