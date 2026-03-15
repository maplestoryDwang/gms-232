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
            cm.sendNormalTalk("苏菲莉亚，#b忧郁的假面#k的诅咒好像比至今见到的所有客人所中的#b诅咒都要强#k。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("完全无法进行任何对话？\r\n不知道该如何劝说忧郁的假面了。", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯……好像是这样。\r\n即便我在旁边，他也毫不关心，看这个样子……", 4, 9062243, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("的确是中了#b强大的诅咒#k。", 4, 9062243, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("他拜托我去#b地狱木马#k那找些东西回来。", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b地狱木马……？#k\r\n那家伙……只会偶尔出现在我生活过的#b没有主人的房间#k啊……？", 4, 9062243, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("真奇怪……目前进过那个房间的人，只有#b我和家人，以及假面绅士#k……先去看看吧。 ", 4, 9062243)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(100453, "");
                                        cm.OnStartNavigation(993175440, 0, "pt_go993175400", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100453.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("找到忧郁的假面丢失的东西了吗？", 4, 9062243)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100453);
                cm.gainItem(4036623, -1);
                cm.dispose();
                cm.warp(993175460, 0, false)
            }
        }
    }
};