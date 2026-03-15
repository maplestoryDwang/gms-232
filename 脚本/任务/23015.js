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
            cm.sendNormalTalk("对于豹弩游侠来说，骑宠是必需的。成为豹弩游侠之后，你会学会名叫捕获的技能。用那个技能可以驯养和骑乘美洲豹。", 1, 2151002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("仔细查看技能窗，应该可以找到#s30001061#技能。先通过攻击使美洲豹的血量降到50%以下，然后使用捕获技能，就可以活捉美洲豹了。活捉之后，使用#s33001001#，就可以骑乘美洲豹了。怎么样？简单吧？", 1, 2151002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在哪里可以找到美洲豹？我前面的黑杰克会把你带到它们所在的地方的。", 1, 2151002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("喂，黑杰克？请告诉我应该到哪里去。", 3, 2151002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，你是新的豹弩游侠吗？还是个小孩子。", 5, 2151008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我虽然还很弱，但为了成为一名堂堂正正的反抗者，我一定会努力的。在哪里才能找到美洲豹呢？", 3, 2151002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("精神状态很不错嘛。我把你送去见见我的兄弟们吧。今后你如果想去找它们，可以来找我。", 5, 2151008, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(23015);
                                        cm.dispose();
                                        cm.warp(931000500, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23015.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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