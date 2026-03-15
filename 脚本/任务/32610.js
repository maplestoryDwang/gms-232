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
            cm.forceStartQuest(32610, "");
            cm.gainItem(4033960, 1);
            cm.gainItem(4033961, 1);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("出差回来啦？尼克斯一切都好吗？", 5, 2520000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32610);
                cm.sendNormalTalk("这是什么，哇，眼镜？我现在视力很正常啊……总之辛苦了。今年春天，就能用这个教育希纳斯了。", 5, 2520000, true, true);
                cm.gainItem(4033960, -1);
                cm.gainItem(4033961, -1)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(303090110, 0, false)
                }
            }
        }
    }
};