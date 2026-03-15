var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(500827, "q2Count") > 0) {
        start1(c, b, a)
    } else {
        start0(c, b, a)
    }
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("你好。#b#h0##k。我是安兹·乌尔·恭本人。", 4, 9100027, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你好像很了解这个地方。听说这里有可以得到各种魔法效果的#b符文#k。", 4, 9100027, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("我很想知道那个#b符文#k的启动方式和效果，本想试着打听来着，可我现在对这里还不是很熟悉，所以想拜托你。你可不可以启动区域内的#b符文#k，让我看看效果？两次就行。", 4, 9100027)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64667, "");
                        cm.sendNormalTalk("拜托了。", 4, 9100027, false, true)
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

function start1(d, c, b) {
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
            cm.askYesNo("你如果今天有时间的话，可以再启动地区内出现的#b符文#k，让我看看效果吗？好像有很多不同的效果。\r\n#r", 4, 9100027)
        } else {
            if (status === a++) {
                cm.forceStartQuest(64667, "");
                cm.sendNormalTalk("拜托了。", 4, 9100027, false, true)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64667.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("真是开了眼界。不管是#b符文#k的启动方式还是启动效果，都非常与众不同。", 4, 9100027, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(500827, "q2Set", 2);
                cm.addNumberForQuestInfo(500827, "q2Count", 1);
                cm.forceCompleteQuest(64667);
                cm.sendNormalTalk("下次也拜托你了。#n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#b#i2630962:# #t2630962:##k", 4, 9100027, true, false);
                cm.gainItem(2630962, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};