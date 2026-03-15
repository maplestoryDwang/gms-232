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
            cm.sendNormalTalk("嗯，结合你搜集的情报和口信，现在正是痛击敌人的大好时机。", 0, 3001000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("大家都在各自的岗位上恪尽职守，才能把这场战斗打赢。你的任务就是在我们启动魔法阵后，消灭逃出包围网的幽灵余党。", 0, 3001000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这场战斗非常重要，你必须做好万全的准备后再出击。", 0, 3001000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("你做好开展战斗的准备了吗？如果你准备好了，我就告诉你具体的进攻路线。\r\n\r\n#b#e(接受后将立即移动到战场地图。如果想重新开始任务，请放弃任务后再重新开始。)#n#k", 0, 3001000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好了，你向战场出发吧。", 1, 3001000, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31830, "");
                                cm.dispose();
                                cm.openNpc("赫里希安_清理幽灵余党")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31830.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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