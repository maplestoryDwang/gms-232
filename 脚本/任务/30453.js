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
            cm.sendNormalTalk_Bottom("#face6#呜呜……呜呜呜……", 37, 2074151, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我说，你冷静点，我也很伤心。\r\n那么善良的孩子怎么就……", 37, 2074105, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face5#……没错，就是这里。", 37, 2074151, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你这是什么意思？", 37, 2074105, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face5#没错，就是这里，\r\n#g它死去的地方#k……", 37, 2074151, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(224000066, 0)
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