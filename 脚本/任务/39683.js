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
            cm.sendNormalTalk_Bottom("#face0#冒险岛世界与格兰蒂斯一直相互影响。\r\n如今若非要将两个次元划分开来，是毫无意义的。", 36, 3003655, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#目前，我们正迫切地需要像你这样强大的勇士们的帮助。\r\n希望你能与我们并肩奋战。", 36, 3003655, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#拜托了，阿黛尔。\r\n请加入我们的勇士同盟，助我们一臂之力吧。", 36, 3003655, 1)
                } else {
                    if (status === a++) {
                        cm.teachSkill(150020190, 0, -1);
                        cm.teachSkill(150020190, 1, 0);
                        cm.playerMessage(-1, "获得了<联盟的意志>技能。");
                        cm.playerMessage(5, "获得了<联盟的意志>技能。");
                        cm.playerMessage(5, "获得了<联盟的一员>称号。");
                        cm.playerMessage(-1, "获得了<联盟的一员>称号");
                        cm.forceCompleteQuest(39683);
                        cm.sendNormalTalk_Bottom("#face0#这是证明你成为联盟一员的特殊力量和勋章。\r\n愿你集结同盟之力，为两个世界带来和平……", 36, 3003655, false, true, 1);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39683.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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