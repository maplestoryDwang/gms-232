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
            cm.sendNormalTalk("好久不见。我知道你一定很忙，但我真的有急事。不久前我获得了一个重要情报。", 0, 1032212, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么情报？", 2, 1032212, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不久前，我们组织发现玩具城旁边的赫丽奥斯塔塔顶，生成了一个通往过去的门。在那里应该可以找到黑魔法师的痕迹。虽然不知道门的出现，究竟是受了过去的影响，还是现在的黑魔法师的影响，但好像还蛮有研究价值的。你要去看看吗？", 0, 1032212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("去#b通往赫丽奥斯塔100层的时间控制室#k，就可以到达过去的艾琳森林。", 1, 1032212, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(25647);
                            cm.gainExp(99054);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25647.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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