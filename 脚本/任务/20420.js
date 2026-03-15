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
            cm.askAcceptDecline("米哈尔……我都快认不出你了。刚见到你的情景，就像还在昨天。一转眼的功夫，你已经成为了优秀的光之骑士，成为了所有人的榜样。我想拜托你一件事。\r\n可能稍微有点突然，希望你能负责圣地想要踏上魂骑士之路的初心者的教育和转职工作。你一定可以成为他们很好的榜样。你愿意接受吗？", 0, 1101000)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(20420);
                cm.teachSkill(50001005, -1, 0);
                cm.teachSkill(50001215, 0, -1);
                cm.teachSkill(50001215, 1, 0);
                cm.sendNormalTalk("我把教育官的勋章和成为即将成立的冒险岛联盟的成员所需的技能送给了你。和你一起努力的话，所有的问题应该都会解开。", 0, 1101000, false, false)
            } else {
                if (status === a++) {
                    cm.gainItem(1142403, 1);
                    cm.forceStartQuest(29980, "");
                    cm.forceCompleteQuest(29980);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20420.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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