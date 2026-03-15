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
            cm.askAcceptDecline("狂龙战士，在你搭乘次元传送口去执行任务之前，我有话要对你说。#r(进行对话后将移动到相应地图。如果要重新开始任务，请放弃该任务后再重新开始。)#k", 1, 3000000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("评议会的决定的确有些令人为难。但所有诺巴族人的愿望就是解放暴君城堡，收复赫里希安。因此希望你一定要成功。在你即将要去的世界里也有超越者。如果你能借助那个世界中超越者的力量，是最好不过了。", 0, 3000000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("另外还有一个任务要交给你。麻烦你把在那个世界找到的特殊物质交给#p3000003#。这对于我们了解那个世界会很有帮助。", 0, 3000000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("听说爆莉萌天使也接到了任务……", 2, 3000000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("爆莉萌天使吗？她说要单独执行任务，已经走了。估计你得单独执行这次任务了。", 0, 3000000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("祝你一路顺风。", 0, 3000000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我走了。", 2, 3000000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(25766, "");
                                        cm.forceCompleteQuest(25766);
                                        cm.gainExp(6000);
                                        cm.dispose();
                                        cm.warp(104020000, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25766.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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