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
            cm.sendNormalTalk("紧急情报。", 0, 1032212, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么事？", 2, 1032212, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("根据十字猎人的最新情报，位于冰峰雪域雪原地区的古城是黑魔法师的军团长狮子王班·雷昂的城堡。", 0, 1032212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("狮子王……(以强大力量和勇猛著称的人。)", 2, 1032212, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("问题是无法确定狮子王本人是否还在城里。为了确认这一点，十字猎人已经派出了S级成员。", 0, 1032212, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……！！谢谢。你帮了我很大忙。", 2, 1032212, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("再见。", 0, 1032212, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("如果狮子王还活着，黑魔法师可能会接近他。快回去告诉祭司。", 3, 1032212, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(25653, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25653.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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