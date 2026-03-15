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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32492.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦哦，你终于拿回来啦？我一直在等候着你。", 0, 2230000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32492);
                cm.sendNormalTalk("(该不会不让我进去吧？)", 2, 2230000, true, true);
                cm.gainItem(4009135, -40);
                cm.gainItem(4009136, -40)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好吧，好吧。那么，现在还需要点什么呢？", 0, 2230000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("？！", 2, 2230000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("伊扎克大人！我是布兰德阁下派来的传令员！", 4, 2232200, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？什，什么？", 0, 2230000, true, false)
                            } else {
                                if (status === a++) {
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};