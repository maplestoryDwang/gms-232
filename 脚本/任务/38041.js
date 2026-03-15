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
            cm.sendNext("见到阿弗利埃了吗？是的……从诅咒中醒来之后，阿弗利埃的状态反而好像更差了，让我非常担心。隐月，为了见到双弩精灵，最好是到埃欧雷去一趟。", 10200)
        } else {
            if (status == a++) {
                cm.sendNextS("虽然双弩精灵正在旅行，但他早晚会来查看村庄情况，顺便进入埃欧雷的。因为还留有诅咒的后遗症，所以村庄的气氛有些乱，但既然是双弩精灵的朋友，他们一定会真诚款待的。")
            } else {
                if (status == a++) {
                    cm.askAcceptDeclineS("请你到埃欧雷去见见#r菲利乌斯#k。我已经事先和他打过招呼了。前往埃欧雷的路稍微有点复杂，我来把你送到村子附近。你想现在过去吗？\r\n\r\n#r（接受任务是，立即移动到该地图）#k")
                } else {
                    if (status == a++) {
                        cm.warp(101020200, 0, false);
                        cm.forceStartQuest();
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38041.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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