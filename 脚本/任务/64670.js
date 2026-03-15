var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(500827, "q5Count") > 0) {
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
            cm.sendNormalTalk("你好 #b#h0##k。我是拉姆。", 4, 9100030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("身为配餐委员，本打算为所有学生提供料理，可一个人根本不可能啊。", 4, 9100030, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("所以我需要你的帮助。你保管15分钟盛着肉的锅，等肉熟了以后再给我。", 4, 9100030)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64670, "");
                        cm.setNumberForQuestInfo(500827, "accCheck", new Date().getTime());
                        cm.sendNormalTalk("不要忘了。是15分钟。", 4, 9100030, false, true);
                        cm.gainItem(3996195, 1);
                        cm.waitForEvent(64670);
                        cm.dispose()
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
            cm.askYesNo("今天也需要你的帮助。你保管15分钟盛着肉的锅，等肉熟了再给我。\r\n#r", 4, 9100030)
        } else {
            if (status === a++) {
                cm.forceStartQuest(64670, "");
                cm.setNumberForQuestInfo(500827, "accCheck", new Date().getTime());
                cm.sendNormalTalk("不要忘了。是15分钟。", 4, 9100030, false, true);
                cm.gainItem(3996195, 1);
                cm.waitForEvent(64670);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64670.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("已经熟了。", 4, 9100030, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64670);
                cm.addNumberForQuestInfo(500827, "q5Count", 1);
                cm.setNumberForQuestInfo(500827, "q5Set", 2);
                cm.sendNormalTalk("扫尾就由蕾姆来吧。下次有机会再拜托你吧。#n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#b#i2630962:# #t2630962:##k", 4, 9100030, true, false)
            } else {
                if (status === a++) {
                    cm.gainItem(3996196, -1);
                    cm.gainItem(2630962, 1);
                    cm.dispose()
                }
            }
        }
    }
};