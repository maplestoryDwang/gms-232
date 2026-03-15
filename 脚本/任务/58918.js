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
            cm.sendNormalTalk(" 这个坛子原来可以聚集灵魂啊……虽然很可怕……但也没办法了。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你能帮我把可怜的盟军士兵的灵魂装到里面去吗？", 4, 9130107)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(58918, "");
                    cm.sendNormalTalk("谢谢你，多亏了你，我总算能轻松一点了。", 4, 9130107, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("消灭100个#m811000015:#的#o9450031:#应该就能装满这个坛子了。", 4, 9130107, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那就拜托你了。", 4, 9130107, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58918.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("辛苦你了，即使精神被操纵了，要把同为盟军的士兵灵魂装进坛子里也不是件容易的事情啊……", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是，正因为你勇敢的行动，他们的灵魂才能得到安息。", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58918);
                    cm.dispose()
                }
            }
        }
    }
};