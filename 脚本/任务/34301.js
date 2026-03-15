var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003201, "oid=48289", -374, 1, 1, -424, -324, 0, false, false);
            cm.npc_ChangeController(3003209, "oid=48290", -463, 1, 1, -513, -413, 4, true, false);
            cm.npc_ChangeController(3003217, "oid=48291", 57, -143, 2, 7, 99, 1, false, false);
            cm.npc_ChangeController(3003220, "oid=48292", 22, 1, 1, -28, 72, 1, false, false);
            cm.npc_ChangeController(3003214, "oid=48293", -67, -143, 2, -117, -17, 1, false, false);
            cm.sendNormalTalk("防毒面具，你这个人怎么这么胆大妄为。差点就发生了很糟糕的事。", 4, 3003209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我不能就那么坐视不管。", 4, 3003201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你居然距离她这么近，真是吃了熊心豹子胆了。呵呵，所幸她忽视了你。喂，这位新朋友，你还好吧？", 4, 3003209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那个女人究竟是谁？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("她的名字叫做#b“路西德”#k，是梦境操纵者。她用自己的梦境创造出了#b拉克兰#k这个庞大的监狱，并囚禁了我们。", 4, 3003209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，所以这里被称为梦境与幻象的城市…… ", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("呵呵，对我们来说，这里是噩梦城市。", 4, 3003209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你一定有很多好奇之处吧，我来帮你解释一下这里的情况。", 4, 3003209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("一言以蔽之，拉克兰就是一座彻底疯了的城市。\r\n\r\n这里的人会在永无止尽的庆典中永远地吃喝玩乐，大家被束缚在路西德的梦中，一点都没有觉得奇怪。", 4, 3003209, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那你又是谁？", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我们是#r“清醒者”#k。", 4, 3003209, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("清醒者？", 2, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("原本我们也像这里的居民一样陷入梦境之中，但不知从何时开始，我们接二连三地苏醒了过来。\r\n\r\n随后路西德和她的部下便开始追捕我们，没办法了，#r若是不想化蝶消失，就只有认真逃了。#k", 4, 3003209, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("难道不能逃到城市外面去吗？", 2, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("不可能的，不管我们往哪个方向走，#r环绕着城市的迷雾#k都会让我们重新回到城市，你要不要也试一试呢？", 4, 3003209, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("我会送你到城市外围去，你不妨一试。", 4, 3003209, true, true);
                                                                        cm.forceCompleteQuest(34301)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.dispose();
                                                                            cm.warp(450003720, 0)
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
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
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