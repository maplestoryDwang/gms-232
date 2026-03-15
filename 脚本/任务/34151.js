var status = -1;

function start() {
    action(1, 0, 0)
}

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(34151, "first");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b#ho##k，你好。\r\n我们调查团来到这里之后，有很多的勇士为我们提供了帮助。", 0, 3003104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在勇士们的帮助下，我们获得了很多有关消亡旅途的情报。\r\n为了表示感谢，我们决定为调查工作提供额外的奖励。", 0, 3003104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在今后的#e一周内#b2次以上#k#n帮助我们进行研究的话，可以获得#b特别的奖励#k（#i2436078:# 3个）。", 0, 3003104, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("你愿意在这周帮助我们调查团进行研究吗？\r\n（接受后，在#e#r周日午夜#k#n之前完成#e#b[每日任务]消亡旅途调查任务#k#n#e#b2次以上#k#n时，可以获得特别的奖励。）", 0, 3003104)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34151, "");
                            cm.updateInfoQuest(34151, "startDate=19/12/29;first=1");
                            cm.updateInfoQuest(34151, "dowS=0;startDate=19/12/29;first=1");
                            cm.sendNormalTalk("#b#h0##k，期待你的精彩表现。\r\n我再强调一遍，过了#e#r周日午夜#k#n之后，任务记录将会初始化，请一定要注意。", 0, 3003104, false, true);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function action1(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askYesNo("#b#ho##k，你好。你愿意在这周帮助我们调查团进行研究吗？\r\n（接受后，在#e#r周日午夜#k#n之前完成#e#b[每日任务]消亡旅途调查任务#k#n#e#b2次以上#k#n时，可以获得特别的奖励。）", 0, 3003104)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34151, "");
                cm.sendNormalTalk("#b#h0##k，期待你的精彩表现。\r\n我再强调一遍，过了#e#r周日午夜#k#n之后，任务记录将会初始化，请一定要注意。", 0, 3003104, false, true);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b#h0##k，在这周中你也为我们调查团的研究提供了很大的帮助。b请收下我们准备的特别礼物。\r\n（#i2436078:# #b#t2436078:# 3个#k）\r\n#r（注意：在周日午夜之前没有领取奖励的话，任务记录将会初始化。）#n", 0, 3003104, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34151);
                cm.sendNormalTalk("奖励已经发放给你了。\r\n以后还请多多关照。", 0, 3003104, true, true);
                cm.gainItem(2436078, 1);
                cm.gainItem(2436078, 1);
                cm.gainItem(2436078, 1);
                cm.dispose()
            }
        }
    }
};