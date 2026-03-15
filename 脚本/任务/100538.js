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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n祝贺你达到了#b#e100级#k#n！", 4, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("\r\n你想现在领取 #e<阿黛尔出征支援礼物>#n吗？\r\n\r\n\r\n#e<100级礼物>#n\r\n\r\n#b#i2631609:# #t2631609:#\r\n#i2433444:# #t2433444:##k\r\n\r\n\r\n#r#e※ 注意：奖励每个世界只能领取一次。", 4, 9010010)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(500947, "30=1;100=1");
                    cm.forceCompleteQuest(100538);
                    cm.sendNormalTalk("礼物已经发给你了！打开背包确认一下吧。", 4, 9010010, false, true);
                    cm.gainItem(2433444, 1);
                    cm.gainItem(2631609, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100538.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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