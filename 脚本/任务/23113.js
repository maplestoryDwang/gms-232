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
            cm.forceStartQuest(23113, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23113.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("变身对象#p2152010#的头发在地下总部储备了很多，所以制作起来非常简单。我马上帮你制作。", 0, 2151003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这就是可以变身成#p2152010#的变身药。#b喝下之后，马上到监视者#p2152016#那里去，装作#p2152010#和他对话。#k小心别被发现。", 0, 2151003, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(2210061, 1);
                    cm.forceCompleteQuest(23113);
                    cm.OnStartNavigation(310000000, 1, "2152016", 23112);
                    cm.dispose()
                }
            }
        }
    }
};