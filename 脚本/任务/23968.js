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
            cm.sendNormalTalk("#p2154007#在停止工作之前，把有关你的信息发送给了我。谢谢你帮助我弟弟。多亏了你，我的弟弟和妹妹全都可以活下去。根据资料，像你这样的人被称为“好人”。", 0, 2154003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你知道会发生这种事情吗？", 2, 2154003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……我知道总有一天#p2154009#博士会把#p2154012#扔掉。#p2154012#是我们之中最适合战斗的一个，因此损耗也最高。因此我判断如果要丢弃，#p2154012#很可能会最先被扔掉。", 0, 2154003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那你为什么不制作#p2154012#的心脏，而是制作#t4032774#呢？", 2, 2154003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("以我的技术，不能完美地制造出#p2154009#型心脏。如果我为#p2154012#制造心脏，之后#p2154012#在参加战斗的时候，就会功率不足。#p2154007#不是战斗型机器人，使用我制作的心脏应该不会有问题。", 0, 2154003, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(#p2154003#好像事先做了很多计算。)", 2, 2154003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("但就算是#p2154007#使用，我制作的心脏的效率还是太差了。因此必须先充满能量才行。请你在交给#p2154007#之前，先在心脏中充满能量。相信你一定会帮我。", 0, 2154003)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(23968, "");
                                        cm.forceStartQuest(23981, "0");
                                        cm.gainItem(4220179, 1);
                                        cm.sendNormalTalk("#b(看到了停止运转的#p2154007#。把新的心脏放进去，按下按钮，重新启动#p2154007#吧。)#k\r\n\r\n#k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  150000 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0#感性60", 0, 2154007, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(23968);
                                            cm.forceCompleteQuest(23981);
                                            cm.gainItem(4220179, -1);
                                            cm.gainItem(2050004, 20);
                                            cm.gainExp(150000);
                                            cm.sendNormalTalk("能再次见到你，真的非常高兴，#h0#。如果不是你的话，我们的计划不会成功。#p2154012#姐姐虽然表面上不说，但在电路的深处，一定在对你表示感谢。", 0, 2154007, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23968.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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