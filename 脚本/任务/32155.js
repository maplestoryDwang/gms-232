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
            cm.askAcceptDecline("情况看上去非常糟糕。你能先去执行其他任务，稍作等待吗？刚好#b妖精学院艾利涅#k发来了紧急救助信息。你愿意接受任务吗？\r\n\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。）", 0, 2300001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实，#b妖精学院艾利涅#k里发生了巨大骚乱。妖精学院艾利涅位于人类不能进入的魔法密林附近的妖精之地，可最近，好像有一个人类魔法师进入了这里。", 0, 2300001, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然详细的事情我也不是很清楚，但这样下去，骚乱肯定会愈演愈烈，因此，得去弄清楚事情的真相才行。", 0, 2300001, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("通过一只叫潘喜的猫咪就能进入那片土地。可以的话，我就立刻把你送过去。。", 0, 2300001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("很好，现在我马上就送你去潘喜所在的地方。……我想你也知道，现在刻不容缓。请你尽快完成任务并返回，如果有危险就先到这里避一避。祝你好运。", 0, 2300001, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32155, "");
                                cm.forceStartQuest(32148, "1");
                                cm.dispose();
                                cm.warp(101030000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32155.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("喵~ 你就是受邀前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？？", 0, 1040002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("原……原来如此……不过", 3, 1040002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。", 0, 1040002, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32147, "1");
                        cm.forceCompleteQuest(32155);
                        cm.dispose()
                    }
                }
            }
        }
    }
};