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
            cm.sendNormalTalk_Bottom("#face0#你说天狗答应了？不可能，哼哼", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好吧。你想跟我成为同伴的话，就去消灭100只等级范围怪物。", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("等级范围怪物？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#对，这是这地方常见的任务哦？", 37, 9111009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("噢……我知道了……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(58806, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58806.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你这么快就消灭100只怪物了？", 37, 9111009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，简直小菜一碟。", 37, 9111009, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58806);
                    cm.dispose()
                }
            }
        }
    }
};