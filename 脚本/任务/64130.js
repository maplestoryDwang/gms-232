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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64130.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#艾伊纳尔，刚才那个方向你可以挡住的。", 37, 9400582, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#… 对不起。", 37, 9400602, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#没什么可对不起的，但是要把训练当成实战。", 37, 9400582, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#是… ", 37, 9400602, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我们先休息一会儿。", 37, 9400582, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#艾丽卡的表情看来很严重？有什么事情吗… ", 37, 9400582, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b是啊，从刚才我们训练开始的时候就开始在谈了。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64130);
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};