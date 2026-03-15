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
            cm.sendNormalTalk("你好，#b#e#h0##k#n，我叫摩柯。", 4, 1540795, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("冒险岛世界的六位英雄最近聚在了一起，出发寻找不祥气息的根源！", 4, 1540795, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("你愿意随我一同加入他们的旅程吗？\r\n\r\n#b - 该部分处理“黑色天堂”之后的剧情。\r\n - 点击是自动前往。", 4, 1540795)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("来#e联盟会场#n找我。", 5, 1540795, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(33916);
                            cm.dispose();
                            if (cm.getMapId() != 913050010) {
                                cm.forceStartQuest(7998, cm.getMapId());
                                cm.warp(913050010, 0, false)
                            }
                        }
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