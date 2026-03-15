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
            cm.sendNormalTalk("哎呀……这不是我们的英雄#h0#吗！哈哈哈，在村里见到你，你看上去帅多了。虽然我们村被黑色之翼占领了，但这里还是最美的。不是吗？", 0, 2151002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在身体好一点了吗？", 2, 2151002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然还有点疼，不过#p2151003#的手艺是最好的。我已经几乎恢复到过去的状态了。不过有一个问题。", 0, 2151002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("又有什么问题？难道黑色之翼又在策划什么阴谋？", 2, 2151002, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("这次的问题不是别的……就是你！你太强了所以我变得不用出面了！不过我可是反抗者最棒的豹弩游侠，现在都不能教你了！所以我要给你更难的课题！", 0, 2151002)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "3300=10;3310=201;3311=201;3312=201");
                                cm.forceStartQuest(56726, "EventCheck");
                                cm.changeJob(3312);
                                cm.sendNormalTalk("我已经让你转职了。同时把我知道的，但又无法自由操控的最高的技能传授给了你。虽然连我都无法做到，但我想你一定可以做到。这是理所当然的事情，不是吗？因为你是我们反抗者中最强的人！", 0, 2151002, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142245, 1);
                                    cm.forceCompleteQuest(23053);
                                    cm.forceCompleteQuest(29944);
                                    cm.sendNormalTalk("这是我的最后一项课程……才怪。我可是很有能力的。虽然你比我强，但你还有能跟我学习的吧？所以……下个课程见吧。虽然不知道什么时候能开始。", 0, 2151002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151002, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23053.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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