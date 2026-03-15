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
            cm.sendNormalTalk("是谁竟然不经允许就进入了#m130000000#？请说出，你的名字和职业，以及到岛上来的目的。凡是说谎或目的不纯的人，一律无法进入岛内。", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b嗯？这里是禁止出入的地区吗？我看其他人好像可以随意来往啊？", 2, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这里是只有#p1101000#的骑士们可以出入的地方。看来你是不知道吧？这次我就饶恕你。你快点离开吧。", 0, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b等，等等！我能问一个问题吗？", 2, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯？你来这里有事吗？我还以为你是闲着没事呢？看来是有事情啊。那么请说出你的名字、职业和访问目的。", 0, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b是这样的，我在原来的村子，他们都叫我小不点，现在我是订立了契约的龙神！我想为龙配一个鞍子。听说来这里就能找到漂亮的鞍子……你能帮我想想办法吗？", 2, 1101002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……龙神？是召唤强化圣龙的魔法师吗？", 0, 1101002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b不，不是的……", 2, 1101002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("……嗯，真是个奇怪的人。龙神……冒险家之中竟然还有这种职业……嗯，我打听一下应该就知道了。你说你需要鞍子？", 0, 1101002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askAcceptDecline("骑士们的鞍子不是在这里制作的，因为这里人手不够。所以我们委托外面的人制作鞍子。你去那边问问看吧。", 0, 1101002)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("骑士们的鞍子全都是#b#m230000000# #m230000003##k的#b#p2060005##k制作的。就像你说的那样，是非常漂亮的鞍子。但是#r价钱非常贵，你一定会被吓一跳的#k。如果你想获得鞍子，最好做好心理准备。", 0, 1101002, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("好了，没别的事了吧？请你马上离开这里。看你好像不是坏人，但规定就是规定。我不能让外部人员随便进入。", 0, 1101002, true, false);
                                                        cm.dispose();
                                                        cm.gainItem(4033918, 1);
                                                        cm.forceCompleteQuest(22403);
                                                        cm.forceCompleteQuest(22404);
                                                        cm.forceCompleteQuest(22405);
                                                        cm.forceCompleteQuest(22406);
                                                        cm.forceCompleteQuest(22407);
                                                        cm.forceCompleteQuest(22408);
                                                        cm.forceCompleteQuest(22409);
                                                        cm.forceCompleteQuest(22410);
                                                        cm.forceCompleteQuest(22411);
                                                        cm.forceCompleteQuest(22412);
                                                        cm.forceCompleteQuest(22413);
                                                        cm.forceCompleteQuest(22414);
                                                        cm.forceCompleteQuest(22415);
                                                        cm.playerMessage(1, "去回复堕落的狂战士吧！");
                                                        cm.warp(102000003, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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