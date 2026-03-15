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
            cm.sendNormalTalk("喂，主人，你不觉得有点奇怪吗？刚才做的黑色之翼的任务……有很多可疑之处。我还以为从#o9001028#手上解救出#t4000144#是件好事呢……", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b没有必要故意把那个东西放在袋子里，对吧？而且必须在#m922030010#前面打开，好像有点奇怪。如果要让它回归自由的话，在什么地方放走应该都一样啊？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，放出去之后，你听到卫兵们在发火吗？说对他们站岗造成了妨碍。对吧？卫兵是坏人吗？", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("而且#o9300390#消失的时候说的话……太奇怪了。说我们是小偷……虽然消灭了怪物，但我的心里感觉很不好受。", 0, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("虽然那个名叫#p1013203#的人类让我们不要在意，但我想来想去还是觉得很奇怪。这次的事情好像不是什么好事。你觉得呢，主人？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 30000 exp ", 0, 1013000)
                        } else {
                            if (status === a++) {
                                cm.gainExp(30000);
                                cm.forceStartQuest(22585, "");
                                cm.forceCompleteQuest(22585);
                                cm.updateInfoQuest(22606, "564=2;565=2;585=2;567=2;578=2");
                                cm.sendNormalTalk("名叫黑色之翼的团体……那是个秘密团体，一定隐藏着某种我们不知道的事情，对吧？虽然我不想去怀疑……但还是觉得很可疑。", 0, 1013000, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22585.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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