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
            cm.sendNormalTalk_Bottom("#face1##h0#，#h0#！你在忙吗？", 37, 9400920, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b不忙。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#那你可以把这个贴到射手村和废弃都市吗？", 37, 9400920, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b这是什么？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face1#这是“艾米咖啡1号店咖啡师招聘启事”传单。嘿嘿！大家都是第一次工作，所以我想招个有经验的人。", 37, 9400920)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(65437, "");
                                cm.sendNormalTalk_Bottom("#b真是个好主意。嗯，看到这个，让我想起我们初次相遇的时候了。艾米真的很喜欢传单呢……", 57, 0, false, true);
                                cm.gainItem(2631793, 2)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#哼哼！ ", 37, 9400920, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b我去去就回。", 57, 0, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65437.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.warp(871000086, 0, false);
            cm.dispose()
        }
    }
};