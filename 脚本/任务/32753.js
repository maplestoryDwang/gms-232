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
            cm.sendNormalTalk_Bottom("正在打希纳斯主意的某人的邪恶内心……变成了尘土怪，并肆虐在这座城市。必须尽快铲除这一罪魁祸首才行。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#h0#，在尘土怪再次出现之前，你赶快去将它们消灭吧！现在可以出发吗？#b\r\n#L0#准备好了，现在出发。\r\n#L1#等一下，我还没准备好。#l", 37, 1530050)
            } else {
                if (status === a++) {
                    if (b == 1) {
                        cm.sendNormalTalk_Bottom("得快点啊！", 37, 1530050, false, true);
                        cm.dispose()
                    } else {
                        cm.sendNormalTalk_Bottom("很好，那就拜托你了，#h0#。", 37, 1530050, false, true)
                    }
                } else {
                    if (status === a++) {
                        cm.playerMessage(5, "必须消灭野外的所有怪物, 才能移动到下一地区. ");
                        cm.dispose();
                        cm.openNpc("副本_好友故事_Act1_寻找希纳斯")
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