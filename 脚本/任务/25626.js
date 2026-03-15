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
            cm.sendNormalTalk("夜光法师去收集材料的这段时间，我一边准备制作守护者机器人，一边进行了仔细思考。现在信息是我们最缺乏的东西。自那天以后，欧罗拉的命脉断绝，以前积累的情报网也消失了。数百年后的今天，要收集情报可不是什么容易的事。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我也发现了。如果能帮助我们寻找黑魔法师或者掌握他的动向，就好了……", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你觉得这样如何？运用已经分布好的情报网。如果我没记错的话，冒险家世界有与外星人秘密作战的组织。如果能从他们那里获得情报，那很多问题就能随之解决了。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("得去找找看啊。", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("正好该组织中的一名成员目前来到了勇士部落的遗迹发掘团营地。我会将你送到那里。希望一切顺利。", 1, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(25626, "");
                                cm.dispose();
                                cm.warp(102040200, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25626.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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