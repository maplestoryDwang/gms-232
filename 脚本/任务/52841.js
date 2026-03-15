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
            cm.askAcceptDecline("啊，你来得正好。我刚好收到了一个紧急请求，需要你的帮助。\r\n\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。提供#r59级#b以下和勇士等级对应的怪物和任务。", 0, 9330209)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实，#b妖精学院艾利涅#k里正在发生巨大骚乱。和魔法密林不同的是，妖精学院艾利涅所在的地方是人类不能进入的妖精之地。因此，那里仍然还保持着妖精之地最初的样子。可最近，好像有#r一个人类魔法师#k进到了那里。", 0, 9330209, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此得去弄清楚事情的真相才行。勇士你的话，肯定能够应对这种状况。那么，请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。", 0, 9330209, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。", 0, 9330209)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好吧，我现在马上就送你去潘喜那边。祝你好运。", 0, 9330209, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(52841, "");
                                cm.forceStartQuest(32148, "1");
                                cm.warp(101030000, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/52841.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                        cm.forceCompleteQuest(52841);
                        cm.dispose()
                    }
                }
            }
        }
    }
};