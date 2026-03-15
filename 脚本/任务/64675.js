var status = -1;
var selectionLog = [];

function start(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var a = cm.getNumberFromQuestInfo(64665, "M1");
            var e = "在学院过得还~好吗~？\r\n现在正在为一直参加特别活动的学生赠送礼物~\r\n#b#e（截止到当前的参与次数：" + a + ")#k#n\r\n";
            if (a >= 5 && cm.getNumberFromQuestInfo(64665, "M5") == 0) {
                e += "\r\n#k#L1#领取 #b5天签到奖励#l。"
            }
            if (a >= 10 && cm.getNumberFromQuestInfo(64665, "M10") == 0) {
                e += "\r\n#k#L2#领取 #b10天签到奖励#l。"
            }
            if (a >= 15 && cm.getNumberFromQuestInfo(64665, "M15") == 0) {
                e += "\r\n#k#L3#领取 #b15天签到奖励#l。"
            }
            if (a >= 20 && cm.getNumberFromQuestInfo(64665, "M20") == 0) {
                e += "\r\n#k#L3#领取 #b20天签到奖励#l。"
            }
            e += "\r\n\r\n#b#L5#想了解签到奖励。";
            cm.askMenu(e, 4, 9100025)
        } else {
            if (status === b++) {
                if (c == 1) {
                    cm.sendOk("拿好喽~\r\n\r\n#e#b<异世界四重奏签到奖励>#k#n\r\n#e第5天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1 ", 9100025);
                    cm.setNumberForQuestInfo(64665, "M5", 1);
                    cm.gainItem(2450134, 1);
                    cm.gainItem(2630962, 1);
                    cm.gainItem(cm.rand(1202272, 1202276), 1)
                } else {
                    if (c == 2) {
                        cm.sendOk("拿好喽~\r\n\r\n#e#b<异世界四重奏签到奖励>#k#n\r\n#e第10天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i3018422:# #t3018422:##k x 1\r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1", 9100025);
                        cm.setNumberForQuestInfo(64665, "M10", 1);
                        cm.gainItem(2450134, 1);
                        cm.gainItem(3018422, 1);
                        cm.gainItem(2630962, 1);
                        cm.gainItem(cm.rand(1202272, 1202276), 1)
                    } else {
                        if (c == 3) {
                            cm.sendOk("拿好喽~\r\n\r\n#e#b<异世界四重奏签到奖励>#k#n\r\n#e第15天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1 \r\n#b#i2631020:# #t2631020:##k x 1 \r\n\r\n#b#i2631030:# #t2631030:##k x 1", 9100025);
                            cm.setNumberForQuestInfo(64665, "M15", 1);
                            cm.gainItem(2450134, 1);
                            cm.gainItem(2630962, 1);
                            cm.gainItem(2631020, 1);
                            cm.gainItem(2631030, 1);
                            cm.gainItem(cm.rand(1202272, 1202276), 1)
                        } else {
                            if (c == 4) {
                                cm.sendOk("拿好喽~\r\n\r\n#e#b<异世界四重奏签到奖励>#k#n\r\n#e第20天#n\r\n#b#i2450134:# #t2450134:##k x 2 \r\n#b#i2543101:# #t2543101:##k x 1\r\n#b#i2630962:# #t2630962:##k x 2 \r\n#b#i2631664:# #t2631664:##k x 1", 9100025);
                                cm.setNumberForQuestInfo(64665, "M20", 1);
                                cm.gainItem(2450134, 2);
                                cm.gainItem(2543101, 1);
                                cm.gainItem(2630962, 2);
                                cm.gainItem(2631664, 1)
                            } else {
                                cm.sendNormalTalk("#e#b<异世界四重奏签到奖励>#k#n\r\n#e第5天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1 \r\n\r\n#e第10天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i3018422:# #t3018422:##k x 1\r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1 \r\n\r\n#e第15天#n\r\n#b#i2450134:# #t2450134:##k x 1 \r\n#b#i2630962:# #t2630962:##k x 1 \r\n#b随机获得异世界四重奏图腾4个中的其中一个\r\n#b#i1202272:# #t1202272:##k x 1 \r\n#b#i1202273:# #t1202273:##k x 1 \r\n#b#i1202274:# #t1202274:##k x 1 \r\n#b#i1202275:# #t1202275:##k x 1 \r\n#b#i2631020:# #t2631020:##k x 1 \r\n\r\n#b#i2631030:# #t2631030:##k x 1 \r\n\r\n#e第20天#n\r\n#b#i2450134:# #t2450134:##k x 2 \r\n#b#i2543101:# #t2543101:##k x 1\r\n#b#i2630962:# #t2630962:##k x 2 \r\n#b#i2631664:# #t2631664:##k x 1 \r\n", 4, 9100025, false, true)
                            }
                        }
                    }
                }
            } else {
                if (status === b++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64675.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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