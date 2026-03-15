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
            cm.gainItem(4161050, 1);
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22546.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦，你终于来啦。我听#p1032104#博士说，为了找那本书，你好像在金银岛上转了一大圈。虽然这么晚才还回来，但是我想你也一定很辛苦，我就不多计较了。你在书里面找到想要的知识了吗？你想知道什么呢？", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#b我想了解一下玛瑙龙……", 2, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("玛瑙龙？我也看过那本书，玛瑙龙不是已经灭绝了吗？你在进行相关的研究吗？没想到你竟然研究这么高深的学问。好吧，我会尽我的能力来帮助你的。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 10000 exp", 0, 1032001)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽然#m101000003#有很多关于龙的书，但关于玛瑙龙的只有这一本。等#m101000003#有了新书之后，我会通知你的。", 0, 1032001, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4161050, -1);
                            cm.sendNormalTalk("啊，还有，我的朋友之中，有个名叫#b#p2081000##k的人，他是哈夫林，是在#m240000000#侍奉龙的种族。我会问问他有关玛瑙龙的事情，有消息的话，我会告诉你的。", 0, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("玛瑙龙……玛瑙龙长着黑色透明的鳞片和金色的角。你的蜥蜴的角虽然是金色的，但鳞片却不是黑色的……嗯……", 0, 1032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b#b(如果被#p1013000#发现是龙的话，也许会把它杀掉！) 它不是龙，是蜥蜴！", 2, 1032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哎呦，我的耳朵。知道了。谁说它是龙了？是的，它应该是蜥蜴……嗯，玛瑙龙……", 0, 1032001, true, false);
                                        cm.dispose();
                                        cm.forceCompleteQuest(22546);
                                        cm.gainExp(10000)
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