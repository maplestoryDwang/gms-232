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
            cm.sendNormalTalk("喂，主人。我向你展示了我的能力，现在你也快点向我展示你的能力吧。搜集食物的能力！嗯？为了让我可以发挥力量，你必须照顾好我。", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哦……虽然不知道是怎么回事，但我好像必须照顾你才行。好吃的东西？你想吃什么？我不知道龙吃什么东西。", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我刚出生还没几分钟，怎么可能知道那些事情。我只知道我是龙，你是我的主人，主人必须好好照顾我！", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("看来其他东西得和主人一起慢慢学习才行了～但是比起学习知识，填饱肚子更加重要……主人，快去帮我搜集好吃的！", 0, 1013000)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(22501, "");
                            cm.sendNormalTalk("#b#b(幼龙 #p1013000#好像肚子很饿。应该给它吃什么呢……不知道该给龙吃什么才好。爸爸说不定会知道。去问问他吧。)", 2, 1013000, false, true)
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(100030300, 1, "1013103", 22501);
                                cm.npc_LeaveField("oid=790");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22501.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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