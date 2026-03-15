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
            cm.sendNormalTalk_Bottom("#face0#剑斗，你适应“这边”的世界了吗？如果剑斗你再不彻底恢复原本的力量，那我们就都有麻烦了。为了救出你的主公樱乃姬，也为了打倒织田信长，你的力量是不可或缺的。就请你继续努力下去吧。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#不说这个了。剑斗你应该也很清楚，就凭我们现在的实力，是很难与信长的势力正面抗衡的。这一点你应该已经在之前的战斗中有所感觉，和敌人相比，我们的力量实在是差得太远了。而且可以说，我们对“这边”这个世界的理解程度也远比不上织田军。", 37, 9130010, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#所以，我有件事情想要麻烦剑斗你去做。可不可以请你外出修行一段时间呢？相信通过这段修行，你一定能更好的把握“这边”这个世界的情况，找到可以信赖的人，寻求他们的帮助。并且，这也是夺回你自身力量的大好机会。", 37, 9130010)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(800000000, 1, "9110002", 0);
                        cm.sendNormalTalk_Bottom("#face0#真高兴你能下定决心。我们在东侧丘陵的下方，也就是枫叶原的南边发现了一个人类居住的街区。", 37, 9130010, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#对剑斗和我们联合军而言，这个任务都是无比重要的。请你做好准备之后，就尽快出发吧。", 37, 9130010, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(57121, "");
                                cm.gainItem(4033277, 1);
                                cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57121.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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