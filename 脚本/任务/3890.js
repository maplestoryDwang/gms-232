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
            cm.sendNormalTalk("按等级区分了排名区间，这么明显的事情，你应该知道的吧？", 0, 2091011, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#e<入门范围>#n\r\n#b105级~200级#k区间的竞争范围。\r\n\r\n- 全体第1名 : #i1082394:##t1082394# #i3700306:##t3700306#\r\n- 全体第2名 : #i1082660:##t1082660#\r\n- 全体第3名 : #i1082660:##t1082660#", 0, 2091011, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#e<精通范围>#n\r\n#b201级以上#k区间的竞争范围。\r\n\r\n- 全体第1名 : #i1082392:##t1082392#\r\n                 #i3700308:##t3700308#\r\n\r\n- 职业第1名 : #i1082393:##t1082393#\r\n                 #i3700307:##t3700307#\r\n- 职业第2名 : #i1082394:##t1082394#\r\n- 职业第3名 : #i1082394:##t1082394#", 0, 2091011, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("根据一周内的记录清算结果，发放奖励。", 0, 2091011, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("每周的#r周日晚上11时30分~周一上午12时30分#k，将\r\n#b清算排名#k，在那之前务必！\r\n登记你的记录。", 0, 2091011, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("奖励将在排名清算后，\r\n#b直接找到武陵道场中的我#k来领取。\r\n不要忘记领取。", 0, 2091011, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("应该不会有人不是上位圈选手，还来耍赖讨要奖励吧？", 0, 2091011, true, false)
                                } else {
                                    if (status == a++) {
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