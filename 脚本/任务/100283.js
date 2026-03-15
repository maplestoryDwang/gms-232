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
            cm.sendNormalTalk_Bottom("哎呀，瞧瞧这是谁！#b#h0#！#k\r\n多亏了你，我们新复古王国正在渐渐恢复往日的面貌。", 36, 9062179, false, true, 3)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("为了感激勇士们对我们王国提供的帮助，我准备了#b特别的礼物#k。", 36, 9062179, true, true, 3)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("Zzan！我准备的礼物就是#b#e幸运纸莎草纸！#k\r\n#n#i3801399#", 36, 9062179, true, true, 3)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#b#e#h0#！#k#n\r\n你不好奇幸运纸莎草纸里记录了什么内容吗？", 36, 9062179, 3)
                    } else {
                        if (status === a++) {
                            cm.teachSkill(80002753, 0, -1);
                            cm.teachSkill(80002753, 1, 0);
                            cm.teachSkill(80002753, 1, 0);
                            cm.forceCompleteQuest(100283);
                            cm.updateInfoQuest(100285, "pt=0");
                            cm.updateInfoQuest(100285, "a=0;pt=0");
                            cm.updateInfoQuest(100285, "a=0;b=0;pt=0");
                            cm.updateInfoQuest(100285, "a=0;b=0;c=0;pt=0");
                            cm.openUIWithOption(3, 80002753);
                            cm.playerMessage(5, "获得了[幸运纸莎草纸]技能。");
                            cm.playerMessage(5, "从现在起，你去等级范围怪物出没的地方时，画面正上方会出现幸运纸莎草纸。");
                            cm.sendNormalTalk_Bottom("我就知道你不会拒绝的！\r\n我这就给你发放#s80002753# #b#e[幸运纸莎草纸]#n#k技能。", 36, 9062179, false, true, 3)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("从现在起，你去#b#e等级范围怪物#n#k出没的地方时，正上方会出现#b幸运纸莎草纸#k。\r\n这时候去消灭等级范围怪物，即可以获得#b新复古能量#k。", 36, 9062179, true, true, 3)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("收集到一定数量新复古能量时，纸莎草纸就会展开，浮现出#b魔法数式#k，数式的\r\n空白处将填入随机数字。", 36, 9062179, true, true, 3)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("总共获得#b3个#k数字，就可以完成魔法数式，之后即有机会获得#b新复古能量#k，以及按数式结果发放的#b额外经验值#k！", 36, 9062179, true, true, 3)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我会为你祈祷，愿你好运相随！", 36, 9062179, true, true, 3)
                                        } else {
                                            if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100283.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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