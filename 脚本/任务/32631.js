var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("哈萨尔最近好像很头疼。不知道从哪儿来的怪物们出现在运输途中，这已经不是一天两天的事情了。", 5, 2510001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(的确是奇怪的怪物……就好像是死去的家伙又活过来一样。)", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("其实这个世界上能够解决这一问题的只有一个人。但是，那个人现在下落不明。所以哈萨尔想要找到他。", 5, 2510001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("他是谁？", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu("我也不知道，具体的你去问哈萨尔吧。如果你能帮到哈萨尔的话，就能拿到很多钱哦。怎样，对佣兵你来说，是个不错的提案吧？\r\n\r\n#b#L0#接受委托。#l\r\n#L1#不感兴趣。", 5, 2510001)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那就别磨叽了，快去找哈萨尔吧。\r\n\r\n(和大富豪哈萨尔对话吧。) ", 5, 2510001, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32631, "");
                                    cm.dispose();
                                    cm.warp(302090110, 0)
                                }
                            }
                        }
                    }
                }
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