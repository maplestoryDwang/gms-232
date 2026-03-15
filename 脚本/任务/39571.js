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
            cm.sendNormalTalk_Bottom("#face0#冒险岛世界和格兰蒂斯互相影响，\r\n也许事到如今还要划分两个次元其实是毫无意义的。", 36, 3003655, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#次元陷入了混乱，现在正是需要你这样的强者出手援助的紧要关头，\r\n还请与我们一同战斗。", 36, 3003655, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#有劳了，虎影。请为我们冒险岛世界和格兰蒂斯勇士同盟\r\n助一份力。", 36, 3003655, 1)
                } else {
                    if (status === a++) {
                        cm.teachSkill(160000190, 0, -1);
                        cm.teachSkill(160000190, 1, 0);
                        cm.playerMessage(-1, "获得了<联盟的意志>技能。");
                        cm.playerMessage(5, "获得了<联盟的意志>技能。");
                        cm.playerMessage(5, "获得了<联盟的一员>称号。");
                        cm.playerMessage(-1, "获得了<联盟的一员>称号");
                        cm.forceStartQuest(39571, "");
                        cm.forceCompleteQuest(39571);
                        cm.sendNormalTalk_Bottom("#face0#这是用以证明成为联盟一员的特殊力量和勋章，\r\n希望你能汇集联盟的力量，为两个世界带来和平……", 36, 3003655, false, true, 1);
                        cm.gainItem(1142355, 1)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39571.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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