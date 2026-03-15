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
            cm.sendNormalTalk("拉尼娅，是你之前提到的那个人吗？黑暗力量突然爆发打伤的……", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。我觉得很愧疚，也很害怕回去。但我真的想守护那孩子。第一眼看到她，我就有一种熟悉的感觉。而且和她在一起的那段日子，是我人生中最快乐的时光了。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那就应该回去啊。对过去的错误心生恐惧，可不是夜光法师所为啊？", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("对。既然说到这了，我就立刻回去看看。", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那是哪里？我送你到附近去。以后有什么好结果，一定要告诉我哦。", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("谢谢你，飞鱼丸。", 3, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(25617, "");
                                    cm.dispose();
                                    cm.warp(910142060, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25617.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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