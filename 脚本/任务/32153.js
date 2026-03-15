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
            cm.sendNext("#b妖精字院艾利涅#k里正在发生巨大骚乱。和魔法密林不同的是，妖精字院艾利涅所在的地方是人类不能进入的妖精之地。因此，那里仍然还保持着妖精之地最初的样子。可最近，好像有一个#r人类魔法师#k进到了那里。")
        } else {
            if (status == a++) {
                cm.sendNextPrev("虽然详细的事情我也不是很清楚，但如果骚乱继续扩大的话，妖精和人类之间的关系肯定会日趋恶化，因此，得去弄清楚事情的真相才行。勇士你去的话，肯定能够应对这种状况。那么请先到魔法密林附近的北部森林，寻找#b潘喜#k吧。")
            } else {
                if (status == a++) {
                    cm.askYesNo("不过，你知道潘喜的位置吗？如果你能自己找到那再好不过。要不让我送你过去吧。")
                } else {
                    if (status == a++) {
                        cm.sendNext("好吧，我现在马上就送你去潘喜那边。祝你好运！")
                    } else {
                        if (status == a++) {
                            cm.forceStartQuest();
                            cm.forceStartQuest(32148, "1");
                            cm.warp(101030000, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32153.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNext("喵~ 你就是受邀前来解决妖精学院艾利涅里发生的骚乱的勇士吗，喵？")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("原……原来如此……不过你就是潘喜吗？")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("你看上去好像并没有想象中的那么强哦，喵。但既然是有名的勇士，我就相信你一次吧，喵。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrev("我介绍一下我的情况。我叫#b潘喜#k，大魔法师#b汉斯#k是我的第一位弟子……你那怀疑的目光是什么意思？没见过会说话的猫吗？会施法的猫也是头一次见吗？")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("大魔法师 #b汉斯#k 的弟子可不是谁想做都能做的。只有对魔法拥有出众的领悟力以及强烈的热情的人，才有可能成为汉斯的弟子。我是不是很厉害？\r\n我先给你点时间，让你好好仰视一下我 #b潘喜#k吧。")
                        } else {
                            if (status == a++) {
                                cm.sendNextPrev("嗯？我想说什么来着？……喵！晕了，现在可不是说这些的时候！")
                            } else {
                                if (status == a++) {
                                    cm.sendNextPrev("#fNpc/1500011.img/stand/0#\r\n我有一个叫#b魔法师库迪#k的朋友。他也跟我一样，是大魔法师汉斯的弟子，虽然年纪轻轻，但是头脑灵力，教什么都是举一反三。虽然也有点小缺点……")
                                } else {
                                    if (status == a++) {
                                        cm.sendNextPrev("#fNpc/1500000.img/stand/0##fNpc/1500002.img/stand/0#\r\n但是，不久之前，这个朋友发生了点事情。他被妖精们关起来了！罪名竟然是 #e#r妖精绑架犯#k#n。这其中肯定是有什么误会。")
                                    } else {
                                        if (status == a++) {
                                            cm.sendNextPrev("我现在没时间解释。以后我会告诉你的，你先帮帮我吧！\r\n#b（※ #r妖精学院艾利涅#b是特殊主题副本。最大使用等级为#r59级#b，可获得与勇士等级相符的怪物和任务经验值。）")
                                        } else {
                                            if (status == a++) {
                                                cm.forceCompleteQuest();
                                                cm.forceStartQuest(32147, "1");
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
        }
    }
};