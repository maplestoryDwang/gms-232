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
            if (cm.getNumberFromQuestInfo(100309, "first") == 1) {
                cm.askYesNo("我一直在等你，#e#h0##n。\r\n#e#b切奇#n#k已经先出去，去那边等你了。\r\n你要马上前往#b#e不稳定的边界附近#n#k吗？", 4, 3003751)
            } else {
                cm.sendNormalTalk("你来得正好，#e#h0##n。", 4, 3003751, false, true)
            }
        } else {
            if (status === a++) {
                if (cm.getNumberFromQuestInfo(100309, "first") == 1) {
                    cm.dispose();
                    cm.setNumberForQuestInfo(100309, "map", cm.getMapId());
                    cm.warp(993120100, 0, false)
                } else {
                    cm.sendNormalTalk("不知从什么时候起，冒险岛世界和格兰蒂斯的天空开始出现扭曲的空间。我们将该空间称为不稳定的边界。", 4, 3003751, true, true)
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不稳定的边界里漂浮着两种不稳定的能量。\r\n虽然现在看着没问题，但那些能量说不好什么时候就会在哪里爆炸，对冒险岛世界是个潜在的威胁。", 4, 3003751, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("多亏切奇指点，我们才知道那些能量可以分别使用冒险岛世界和格兰蒂斯的能量来吸收，问题是，必须有人驾驶飞艇进入不稳定的边界内部……", 4, 3003751, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("由于该空间十分危险，无法预测会发生什么事情，必须找个熟练的驾驶员才行……\r\n", 4, 3003751, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("要参与任务吗？\r\n\r\n我觉得像#e#h0##n你这样老练的驾驶员正是合适人选。", 4, 3003751)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(100309, "first=1");
                                    cm.updateInfoQuest(100311, "speed=120;lv=1;pt=0");
                                    cm.updateInfoQuest(100312, "dayLimit=0;total=0;lastDate=20/01/22");
                                    cm.sendNormalTalk("详细情况让已经去到边界附近的切奇跟你说，我可以把你直接送到那里去，等你准备好了，再跟我对话。", 4, 3003751, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100309.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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