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
            cm.askAcceptDecline("啊，你来得正好。我们接到外部发来的紧急请求，这事非你不可。\r\n\r\n#b(※ #r妖精学院艾利涅#b是特殊主题副本，最高至#r59级#b为止，提供与勇士的等级相匹配的怪物和任务经验值。", 0, 1022000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("事情是这样的，听说眼下#b妖精学院艾利涅#k发生了重大骚乱。妖精学院艾利涅所在之处不同于魔法密林，是不受人类影响的妖精们的领地。正因此，该地至今仍保存着太初时期的风貌。但是，最近#r有一名人类魔法师#k打破了那里的平静。", 0, 1022000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此，得去弄清楚事情的真相才行。勇士你去的话，肯定能够应对这种状况。那么，请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。", 0, 1022000, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。", 0, 1022000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好吧，我现在马上就送你去潘喜那边。祝你好运。", 0, 1022000, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32136, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32136.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                        cm.forceCompleteQuest(32136);
                        cm.dispose()
                    }
                }
            }
        }
    }
};