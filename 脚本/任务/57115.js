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
            cm.sendNormalTalk_Bottom("#face0#剑斗，我有一个坏消息要告诉你。我们的先遣队再次报告说，他们发现了织田军的踪迹。而且这一次和之前不同，并不是侦察兵，而是非常强大的兵马……估计我们的营地已经被敌人给发现了。看来上次我们并没有彻底阻止敌军的侦查。", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#目前还可以确定的是，织田军还没有正式开始布阵，他们的兵力也在逐步增加之中。恐怕敌人的队伍也只是先锋队而已。他们应该是想等待大队人马到达后，再一举攻入枫叶山丘吧。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#以我们目前的状态来看，坐等着敌人进攻实在是太不明智了。如果我们能先发制人，抢先发起进攻，或许还有胜算。我希望能够将这场奇袭作战交给剑斗你来负责。不知你是否愿意接受呢？", 37, 9130006)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(807020000, 0, "west00", 0);
                        cm.sendNormalTalk_Bottom("#face0#如果就这样等待敌人布好阵营，恐怕我们就一点胜算都没有了。我相信你一定愿意接受这个任务。", 37, 9130006, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.forceStartQuest(57115, "")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57115.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你攻击得如何了？敌兵的数量似乎并没有减少多少啊。", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#虽然剑斗你打得非常卖力，但敌人的兵力还是不减反增。估计是敌军的增援部队已经到达了吧。", 37, 9130006, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(57115);
                    cm.gainExp(1955);
                    cm.forceStartQuest(57118, "");
                    cm.dispose()
                }
            }
        }
    }
};