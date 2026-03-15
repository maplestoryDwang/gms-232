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
            cm.sendNormalTalk("主人，有什么事吗？你有什么话要说吗？嗯？骑乘？骑乘的话，是说骑猪、骑鸟、骑狼之类的吧？怎么突然提到这个？", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b我想知道玛瑙龙能不能骑？怎么样？可以吗？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("骑玛瑙龙……嗯？！你是说想骑我吗？我是主人的伙伴啊？呜呜，主人太过分了～我说过不是宠物！", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b我们是伙伴，你应该可以让我骑吧？", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哈，怎么说话那么酷？好吧！那我累的时候，主人你也要让我骑啊！可以吗？那我就让你骑。", 0, 1013000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b……你想让我死吗？", 2, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("切，开个玩笑。过去的我可能还行，现在的话，一定会把主人压扁的。但是反过来应该没有问题。主人的个头又不高。", 0, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b那就是可以骑咯？", 2, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯，我飞得比主人快得多，从效率上来说，这个主意好像不错。但是仅这样是没办法骑的，必须准备两样东西。", 0, 1013000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("必须要有#b鞍子#k和#b骑乘技能#k！不垫东西就坐在我背上的话，屁股一定会开花的。不会骑乘技能的话，可能会从我身上掉下去。所以必须准备这两样东西。你准备好吗？", 0, 1013000)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(22401, "");
                                                    cm.forceCompleteQuest(22401);
                                                    cm.sendNormalTalk("去问问#b#p1032001##k骑龙的事情，他应该会告诉你获得鞍子和学习技能的方法。先去见见#b#p1032001##k吧。", 2, 1013000, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22401.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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