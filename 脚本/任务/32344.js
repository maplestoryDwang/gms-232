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
            cm.sendNormalTalk("为了让受到破坏的冒险岛恢复原样，所以你想来找夜光法师，听取他的意见啊。\r\n虽然我也不知道夜光法师在哪里，不过，这魔法密林附近设下了结界，从这一点来看，夜光法师也许会在那里。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("用我的魔法可以把你送到那个结界附近。不过，我也不能保证你是否就能遇到他……。你想现在就出发吗？\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1032001)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32344, "");
                    cm.forceStartQuest(32374, "enter");
                    cm.updateInfoQuest(32344, "0");
                    cm.dispose();
                    cm.warp(910142200, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32344.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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