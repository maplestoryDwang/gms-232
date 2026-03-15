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
            cm.sendNormalTalk_Bottom("啊！#h0#！我啊，是我！#p9310538#！", 37, 9310538, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("能再次遇到你真是太高兴了~！我从#m240000000#安全回来了。我和#p2081000#还有村民们打了招呼，说了关于#p9310547#的事情。\r\n大家都为我感到高兴呢。", 37, 9310538, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("这都是多亏了#h0#！我现在会长期住在#m701100000#，你可以随时来找我玩！", 37, 9310538, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(62105);
                        cm.updateInfoQuest(62105, "chk=1");
                        cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                        cm.dispose()
                    }
                }
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