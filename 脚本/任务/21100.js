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
            cm.sendNormalTalk("与黑魔法师战斗的英雄们……有关他们的信息几乎什么都没留下。即使在预言书中也只记载了5位英雄，也没有任何有关他们外貌的描述。你还能记起来些什么吗？", 8, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("一点都想不起来了……", 2, 1201000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("果然，黑魔法师的诅咒果然很厉害。不过，作为英雄的你肯定和过去应该还会存在某个联系点的。会是什么呢？武器和衣服是不是在战斗中都遗失了呢……啊，对了，应该是#b武器#k！", 8, 1201000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("武器？", 2, 1201000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("以前，我们在冰窟中挖掘英雄的时候，发现过一个巨大的武器。我们猜测可能是英雄使用的武器，所以就放在了村子中央。你来来去去的时候没看到吗？#b#p1201001##k……#i4032372#大概是这个样子……", 8, 1201000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("确实，那个#p1201001#在村子里，看起来是有些奇怪。", 2, 1201000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("没错，就是那个东西。据说英雄的武器是会挑选主人。如果你就是使用#p1201001#的英雄，那么在抓住#p1201001#的刹那，武器应该会有反应的。快去点击#b#p1201001#试试。#k", 0, 1201000)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(21100, "");
                                        cm.forceCompleteQuest(21100);
                                        cm.OnStartNavigation(140000000, 1, "1201001", 21100);
                                        cm.sendNormalTalk("如果#p1201001#有反应，就说明你是使用过#p1201001#的英雄，是#b战神#k。", 8, 1201000, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21100.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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