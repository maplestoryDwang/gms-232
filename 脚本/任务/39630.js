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
            cm.askAcceptDecline_Bottom("#face0#哈，都这么晚了，早就过了下班时间。\r\n那我先出招了！\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001959, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#居然让我这个管家兼做骑士的工作，真不像话……\r\n近期是时候该离开伯爵宅邸了。", 36, 3001959, false, true, 1)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "为了救出杰罗姆，需干掉伯爵家的管家西蒙。");
                    cm.getTopMsgFont("为了救出杰罗姆，需干掉伯爵家的管家西蒙。", 3, 20, 20, 0, 0);
                    cm.dispose();
                    cm.openNpc("阿黛尔_尖塔对决")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39630.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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