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
            cm.sendNormalTalk_Illus("剑斗，最近修行还顺利吗？今天我是特意来告诉你一个重要通知的。", 9130021, 4, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请问是什么重要通知啊？", 2, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus("我们似乎已经找到#b#p9130090##k现在身在何处了。", 9130021, 4, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#p9130090##k……我似乎曾在什么地方听到过这个名字……", 2, 9130021, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Illus("#b#p9130090##k。他曾是春秋的弟子，但现在已经成为了织田军的阴阳师首领。同时，他也是在本能寺进行魔王降临仪式的主导者。这么说你应该明白了吧？", 9130021, 4, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("也就是说，这是个非常危险的人物啊。不过，你说找到了这个人身在何处，也就是说，他现在不在本能寺，而在其他地方了？", 2, 9130021, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Illus("没错。不知道他到底在打什么鬼主意，居然会暂时离开了本能寺。不过现在，加入了联合军的#b#p9130087##k终于掌握到了这家伙的动向。", 9130021, 4, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那这个人现在究竟身在何处？", 2, 9130021, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline_Illus("他在冰峰雪域山脉废矿坑的深处建造了一个祭坛。据说，是在准备进行一些目的不明的奇怪仪式……我们都很担心，不知道他是不是在准备进行新的魔王降临仪式。可不可以请你尽快赶赴此地，去阻止他的行径呢？", 9130021, 0, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("当然没有问题。就算没有姬儿的命令，我也一定不会对这样的家伙放置不管的。我这就赶往冰峰雪域。", 2, 9130021, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Illus("听到剑斗你这么说，我就放心多了呢。那就请你立刻赶赴冰峰雪域山脉的#b#m211041700##k，去那里找#b#p9130087##k见面吧。具体情况他会告诉你的。", 9130021, 4, true, true, 1);
                                                    cm.forceStartQuest(57475, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57475.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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