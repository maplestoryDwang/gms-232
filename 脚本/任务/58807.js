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
            cm.sendNormalTalk_Bottom("#face0#看来100只怪物对你来说太简单了。", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那就增加到300只吧。", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你这么出尔反尔真的好吗？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#不愿意就算咯。", 37, 9111009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……我不是这个意思，我这就去。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(58807, "");
                                cm.dispose()
                            }
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58807.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#消灭300只怪物好像也难不倒你哦？", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#怎么办……", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58807);
                    cm.dispose()
                }
            }
        }
    }
};