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
            cm.sendNormalTalk("我忘了有东西要给你了。", 4, 1104313, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这份力量会帮助你守护女皇。我要去寻找方法了。愿好运与你同在。", 4, 1104313, true, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(10000250, 1, 1);
                    if (cm.getJob() == 1112) {
                        cm.teachSkill(11121000, 0, 30)
                    } else {
                        if (cm.getJob() == 1212) {
                            cm.teachSkill(12121000, 0, 30)
                        } else {
                            if (cm.getJob() == 1312) {
                                cm.teachSkill(13121000, 0, 30)
                            } else {
                                if (cm.getJob() == 1412) {
                                    cm.teachSkill(14121000, 0, 30)
                                } else {
                                    if (cm.getJob() == 1512) {
                                        cm.teachSkill(15121000, 0, 30)
                                    } else {
                                        cm.teachSkill(51121005, 0, 30)
                                    }
                                }
                            }
                        }
                    }
                    cm.playerMessage(-1, "获得技能：希纳斯的骑士");
                    cm.forceCompleteQuest(20955);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20955.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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