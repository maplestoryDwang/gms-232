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
            if (cm.getMapId() >= 610060000 && cm.getMapId() <= 610064530) {
                cm.sendOkS("已经来到#b克拉齐亚#k了。");
                cm.dispose();
                return
            }
            cm.sendNormalTalk("一个绝望的声音呼唤着你，让你前去#b克拉齐亚#k。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你是无法忽视这个声音的，听听它要说什么吧。\r\n\r\n#e#r - (该片段包含克拉齐亚野外任务前的故事)#k#n\r\n#b我们推荐你使用#1366x768的分辨率。#n#k", 2, 0)
            } else {
                if (status == a++) {
                    if (cm.getQuestStatus(61336) < 2) {
                        cm.forceCompleteQuest(61336)
                    }
                    cm.forceStartQuest(61334, cm.getMapId());
                    cm.warp(610060000, 0, false);
                    cm.dispose()
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