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
            cm.sendNormalTalk_Bottom("距离最初来到这个世界，已经过去多长时间了呢？当时，我在陌生的丘陵醒来，发现身体完全不听自己的控制。后来才知道，原来是因为日本和这个世界的物理法则不同，才导致出现这样的问题。就因为这个缘故，我一开始就连想击败训练用的人偶都需要花上不少的力气，实在是太丢脸了。", 57, 0, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过在那之后，我又经历了各种各样的事情，逐渐开始适应要如何在这个世界活动自己的身体了。虽说还没有彻底恢复原本的力量，但身体至少变得听话了很多。", 57, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好久没有用过的那些剑术，现在应该也可以重新开始使用了。相信只要脚踏实地坚持修行，那么终有一日，我一定能够自由自在地使出原本所有的秘藏剑术来。虽说目前还很难完全实现这一点，但一定要继续努力下去才是。", 57, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57162, "");
                        cm.forceCompleteQuest(57162);
                        cm.updateInfoQuest(1073, "4100=10;4110=201");
                        cm.gainItem(1542002, 1);
                        cm.gainItem(1003555, 1);
                        cm.gainItem(1052464, 1);
                        cm.gainItem(1082435, 1);
                        cm.gainItem(1072669, 1);
                        cm.gainItem(1352801, 1);
                        cm.gainItem(1142491, 1);
                        cm.playerMessage(5, "获得<无敌剑豪的勋章>勋章");
                        cm.playerMessage(-1, " 获得<无敌剑豪的勋章>勋章");
                        cm.forceCompleteQuest(57179);
                        cm.forceStartQuest(57163, "");
                        cm.forceCompleteQuest(57163);
                        cm.updateInfoQuest(1073, "4100=10;4110=201;4111=201");
                        cm.changeJob(4112);
                        cm.dispose();
                        cm.openNpc(0, "全职满技能")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57162.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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