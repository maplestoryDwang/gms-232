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
            cm.sendNormalTalk("有异常。按我的经验来看，这情况平静得可怕。肯定有问题。", 0, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我也觉得不太对劲。", 2, 3000018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我在想，刚刚的总攻会不会只是个障眼法，实际上敌人的目标是其他地方？也就是说，总攻只是装个样子。", 0, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("照你的说法，敌人应该要攻击其他地方，那会是哪里呢？", 2, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("现在哪里最平静？", 0, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("东侧和北侧我去过了，听说南侧也正在战斗，难道是西侧？", 2, 3000018, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("去看看吧。#r(接受后将立即移动到相应地图。如果想重新开始任务，请放弃该任务后再重新开始。)#k", 0, 3000018)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(25866, "");
                                        cm.dispose();
                                        cm.warp(940010050, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25866.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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