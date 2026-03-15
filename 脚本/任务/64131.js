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
            cm.sendNormalTalk_Bottom("#face0#啊，#h0#… 我一个人也能好好训练…", 37, 9400602, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b独自训练不累吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("#face0#… 我不能耽误你们两位的时间…#b\r\n#L0# 刚好我有点时间，一起来帮助训练吧。#l\r\n#L1# 认真做事吧。#l", 37, 9400602)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那么… 这次就拜托你了。", 37, 9400602, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#你们打算不带我了吗？那怎么可以！来来，我们开始吧", 37, 9400582, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(64131, "");
                                cm.dispose();
                                cm.warp(867202540, 0)
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