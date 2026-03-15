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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39108.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.updateInfoQuest(cm.getQuest(), "start=1;NpcSpeech=21551071");
            cm.sendNormalTalk("小软柿，没想到我请求帮助后你就来了！\r\n你肯定能帮上我很多忙。\r\n我要跟那边的人说声谢谢。", 1, 2155107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好了，那我们就进入主题吧。\r\n这附近的#b#o8250011##k突然增多了。\r\n我已经无法进行侦察了。\r\n请你帮我消灭#b#o8250011# 300只#k。\r\n你把它们消灭后只要告诉我一声就行了。拜托你啦。", 1, 2155107, true, true)
            } else {
                if (status == a++) {
                    cm.dispose()
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
            cm.forceCompleteQuest();
            cm.forceForfeitQuest();
            cm.updateInfoQuest(cm.getQuest(), "");
            cm.gainExp(50000000);
            if (cm.getNumberFromQuestInfo(39200, "3q") == 1) {
                cm.setNumberForQuestInfo(39200, "4q", 1)
            } else {
                if (cm.getNumberFromQuestInfo(39200, "5q") == 1) {
                    cm.setNumberForQuestInfo(39200, "6q", 1)
                } else {
                    if (cm.getNumberFromQuestInfo(39200, "7q") == 1) {
                        cm.setNumberForQuestInfo(39200, "8q", 1)
                    }
                }
            }
            cm.addNumberForQuestInfo(39100, "FC", 1);
            cm.sendNormalTalk("非常感谢你的帮助。\r\n我会向那边好好称赞你的活跃表现。\r\n如果没有你，我真不知道该怎么办。\r\n以后还要麻烦你多多帮忙，小软柿。", 0, 2155107, false, true)
        } else {
            if (status === a++) {
                cm.getTopMsgFont("获得了50000000经验值", 3, 20, 20, 0, 0);
                cm.dispose()
            }
        }
    }
};