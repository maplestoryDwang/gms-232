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
            cm.sendNormalTalk_Bottom("杰斯，现在怎么办？真的没有办法了吗？", 56, 9401116, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("克拉尼亚，你不是知道吗？\r\n怎么样才能#b完全阻止#k#b赛恩#k。", 36, 9401071, 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("像你这样的人，不会没有那种准备的！\r\n快说！", 36, 9401071, 1, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……", 36, 9401087, 1, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("再这样下去，我们都会死在这里的。\r\n也许#b你会死在最后，然后被折磨的#k遍体鳞伤。", 56, 9401116, 1, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("快说吧！\r\n这样才能阻止这一切！", 56, 9401116, 1, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……有个#b自爆方案#k。", 36, 9401087, 1, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("自，自爆？这里？公司里？！\r\n开发产品的公司建筑里为什么会有那种东西？！", 36, 9401071, 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我觉得会发生这种事情，所以就提前做了准备。", 36, 9401087, 1, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("在这里工作的人这么多，那么危险的系统……！", 36, 9401071, 1, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("只要你们没做内部告发这种麻烦事，他也就没有用武之地了。", 36, 9401087, 1, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("所以只要开启那个#r自爆方案#k的话，这一切就会停止的吧？", 56, 9401116, 1, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这是完全切断赛恩电源的最后堡垒。\r\n阿特利埃建筑也会#b完全崩溃#k。", 36, 9401087, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#h0#……！这是唯一的办法了。", 36, 9401071, 1, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                    cm.forceCompleteQuest(64925);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64925.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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