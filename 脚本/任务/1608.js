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
            cm.askYesNo("就是这个发着蓝色光的柱子让遗迹发掘地的怪物变得残暴起来的吗？不知道会发生什么，我要走近些看看。你准备好了吗？", 0, 9073012)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("如果发生什么危险的话一定要保护我啊。那么，一…二…三！", 0, 9073012, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(1608, "");
                    cm.dispose();
                    cm.warp(931050410, 0)
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