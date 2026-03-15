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
            cm.sendNext("有什么事吗？\r\n\r\n#b#L0#爱丝卡达，我想了解超越者的事情。你看看这份报告书。#l")
        } else {
            if (status == a++) {
                cm.sendNext("这是什么？你为什么要问这个啊？嗯，好吧，我就告诉你吧。超越者是3个监督者……\r\n\r\n#b#L0#啊，监督者的事情我已经知道了。#l")
            } else {
                if (status == a++) {
                    cm.sendNext("是吗？那你应该知道超越者和光、时间，还有生命有关吧？\r\n\r\n#b#L0#嗯，冒险岛世界的超越者是黑魔法师、伦娜和世界树。但是黑魔法师是个坏蛋，格兰蒂斯的打了摩尔也是个坏蛋。#l")
                } else {
                    if (status == a++) {
                        cm.sendNext("超越者并不一定必须是好人。超越者的存在，本身就是为了使自己掌管的领域达到平衡。因此超越者会为了使自己的领域达到平衡而努力。\r\n\r\n#b#L0#好像有点难懂。#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("你以后会理解的。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25896.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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