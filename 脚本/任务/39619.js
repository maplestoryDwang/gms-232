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
            cm.askAcceptDecline_Bottom("#face0#在佣人们提高警惕的当下，一路上要尽量小心别被发现。\r\n布乌，你去支开佣人们之后，就给我们发信号。\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#一旦有佣人靠近，就得立刻让布乌变身。\r\n你要仔细看好了，及时给布乌发信号，明白吗？", 36, 3001952, false, true, 1)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "需躲开伯爵家佣人的视线，去到走廊尽头。");
                    cm.getTopMsgFont("需躲开伯爵家佣人的视线，去到走廊尽头。", 3, 20, 20, 0, 0);
                    cm.dispose();
                    cm.warp(993162400, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39619.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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