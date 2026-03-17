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
            cm.sendNormalTalk("你这么一说，我想起来了。格兰蒂斯除了我们诺巴外，还有一个叫#b阿尼玛#k的种族，我听说他们长得很像动物。但由于目前席卷格兰蒂斯的战争，他们都去别处避难了。", 0, 3000000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("战乱？那，怎么去那里？", 4, 1520002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个嘛…… 他们本就与我们诺巴很少交流，我自然不清楚他们的去向。", 0, 3000000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("有没有什么办法可以知道阿尼玛村的位置？", 4, 1520002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你打算去找阿尼玛村吗？那太危险了。万神殿虽受圣物之力的保护，可外面到处是敌人的士兵。我们保护村落已是十分勉强，实在无力派人保护二位去寻找阿尼玛村。", 0, 3000000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("…….", 4, 1520002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("难道就真的没办法了吗？", 16, 3000000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……既然你这么说，那我就指引二位前往边界吧。不过，等看到边界附近的情况后，希望你们放弃这个念头。我给你们做指引的目的，是想等你们亲眼见到这里的情况后，能够明白单凭两个人想要冲破战场是多么危险的事情。", 0, 3000000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("那么，我就指引你们去边境吧。准备好了吗？\r\n\r\n#b#e<接受后，立即移动到战场地图。>#n#k", 0, 3000000)
                                        } else {
                                            if (status === a++) {
                                                // cm.sendNormalTalk("那么，我来为你们指引战场的方向。如果返回得稍晚，就有可能会陷入危险之中，所以请你们不要逗留太久，尽早回来。", 1, 3000000, false, true)
                                                cm.sendNormalTalk("Event未完成，当前直接完成任务（dwang）", 1, 3000000, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32250, "");
                                                    // cm.forceJoinEvent("冒险家_法师_战斗1");
                                                    cm.warp(400000000, 0);
                                                    cm.forceStartQuest(32364, "1")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32250.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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