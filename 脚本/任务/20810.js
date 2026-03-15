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
            cm.askYesNo("米哈尔，祝贺你通过了成为实习骑士的所有考试。我随时可以任命你为实习骑士。你想现在成为实习骑士吗？", 0, 1101000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你现在获得了实习骑士的资格。祝贺你。我给了你一些SP，请你去试着使用看看。", 0, 1101000, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142400, 1);
                    cm.gainItem(1302008, 1);
                    cm.forceStartQuest(29977, "");
                    cm.forceCompleteQuest(29977);
                    cm.forceCompleteQuest(20810);
                    cm.gainItem(1003316, 1);
                    cm.gainItem(1050196, 1);
                    cm.gainItem(1072579, 1);
                    cm.gainItem(1082361, 1);
                    cm.gainItem(1302186, 1);
                    cm.changeJob(5110);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20810.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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