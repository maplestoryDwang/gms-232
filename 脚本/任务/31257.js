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
            cm.askYesNo("你帮助那些不幸的魔族居民全部逃脱了吗？", 0, 2134012)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呼，谢谢你。我这个已变成石像的魔法师实在是帮不上他们的忙。好在你来了，他们才得以逃生。", 0, 2134012, false, true)
            } else {
                if (status === a++) {
                    cm.askMenu("和你打斗的那帮家伙……我说的是城堡上层的那些士兵，你知道他们的身份吗？他们原本是从前克林逊森林的居民，是光荣的战士。可惜现在已经完全堕落了。\r\n\r\n#b#L0#他们为什么会堕落了？#l", 0, 2134012)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这个嘛，我也不清楚。一切事情都始于席卷绯红的那场大战，可大多数人却连那场战争的原因都不知道……", 1, 2134012, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我数百年间都守在城堡里的同个地方，没法知道外头到底发生了什么事。真郁闷。", 1, 2134012, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31257, "");
                                cm.forceCompleteQuest(31257);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31257.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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