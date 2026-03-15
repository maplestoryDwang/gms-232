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
            cm.npc_ChangeController(3003150, "oid=47956", 1512, 78, 2, 1462, 1562, 5, true, false);
            cm.npc_ChangeController(3003152, "oid=47957", 720, 138, 22, 701, 770, 4, true, false);
            cm.npc_ChangeController(3003157, "oid=47958", 2306, -354, 45, 2289, 2356, 0, false, false);
            cm.npc_ChangeController(3003158, "oid=47959", 2269, 138, 27, 2219, 2319, 1, false, false);
            cm.npc_ChangeController(9000123, "oid=47960", 2965, -203, 35, 2915, 2965, 1, false, false);
            cm.npc_ChangeController(9000124, "oid=47961", 2986, -203, 36, 2986, 3036, 1, false, false);
            cm.npc_ChangeController(9000365, "oid=47962", 2982, -203, 36, 2982, 3032, 1, false, false);
            cm.npc_ChangeController(9010022, "oid=47963", 1841, 138, 23, 1791, 1861, 1, false, false);
            cm.npc_ChangeController(3003159, "oid=47964", 1512, 79, 2, 1462, 1562, 1, false, false);
            cm.npc_ChangeController(9010109, "oid=47965", 1142, 138, 25, 1092, 1192, 1, false, false);
            cm.npc_ChangeController(9010106, "oid=47966", 977, 138, 22, 927, 977, 1, false, false);
            cm.sendNormalTalk_Bottom("#r古拉#k…！#r古拉的进攻已经开始了#k！", 37, 3003150, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b顶级大厨舔舔#k！给穆托准备的食物完成了吗？", 37, 3003150, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那是当然！你等着瞧吧！穆托那家伙肯定会好吃到#b手舞足蹈#k的！", 37, 3003152, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("噢…！那真是太好了…！不过，那个#b小旅行者#k还没有做好吗……？", 37, 3003150, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#哈哈！！那家伙肯定被吓得藏起来了！\r\n那个连味道都不会品尝的家伙，居然还想教训我，\r\n现在终于露出本性了吧！", 37, 3003152, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是吗…我们先带着你的食物，去找穆托吧！", 37, 3003150, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等…等一下！！料理…！料理已经完成了…！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#噢！你来啦？！", 37, 3003150, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗬…嗬…嗯……！我们快去找穆托吧……", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("什么啊！你做好的料理在哪里呢！难道又跟上次一样，\r\n做的食物都不够穆托塞牙缝的……！", 37, 3003152, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("嗬…嗬…我准备了会让你们#b大吃一惊的食物#k…… 而且，我还找到了很会做料理的#b帮手#k……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("哦！#b帮手#k…？这么短的时间里！你说的帮手是谁啊？", 37, 3003150, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#哈哈！！你这个说谎精！在这啾啾岛，没有人比我\r\n更会做料理了！", 37, 3003152, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("噢噢噢…！没有时间了，我们先去找穆托吧！我已经让我的#b帮手#k把食物拿过去了！", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceStartQuest(34216, "");
                                                                    cm.forceCompleteQuest(34216);
                                                                    cm.dispose();
                                                                    cm.warp(450002021, 0)
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