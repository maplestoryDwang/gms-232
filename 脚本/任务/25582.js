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
            cm.sendNext("为了前往希利尼提，需要的东西是矛盾。你对此是怎么看的呢？\r\n\r\n#b#L0#怎么突然说这个？我不想在没用的地方浪费时间。#l", 1032001)
        } else {
            if (status == a++) {
                cm.sendNext("欧罗拉说过，应该在矛盾中寻找真理。光明和黑暗就像是背靠背的双胞胎一样。虽然无法出现在同一位置，但两者其实是一体的。因为你坠入了黑暗的力量，所以我才会说这些话。之后总有一天，你会重新想起我的话。\r\n\r\n#b#L0#再唠叨下去的话，这次的交易就到此为止了。#l", 1032001)
            } else {
                if (status == a++) {
                    cm.sendNext("我知道现在多说也没用。在金银岛东北部有个名叫勇士部落的贫瘠山脉地带。生活在那里的大岩石路的斧木妖是展现破灭后的完成这一矛盾的怪物。\r\n\r\n#b#L0#那就是破灭后的完成，是吗？#l", 1032001)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("是的，请你#b双击重生灯笼#k到大岩石路消灭掉50个斧木妖。", 1032001)
                    } else {
                        if (status == a++) {
                            cm.forceStartQuest();
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25582.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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