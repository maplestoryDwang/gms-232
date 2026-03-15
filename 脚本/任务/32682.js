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
            cm.sendNormalTalk_Bottom("这就是那座塔……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我还是第一次离得这么近呢。看上去也不怎么样啊……\r\n真的是龙神建造的吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真的。只要启动它，#b全冒险岛世界#k都能看到。", 36, 2550002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("启动需要多长时间？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原本需要5名魔法师才能启动。\r\n只有我一人，唉……不分昼夜地施法，也要花上半个月吧。", 36, 2550002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("半个月啊，唔。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("一旦开始准备，这里就会聚集强大的魔力，一定会被敌人发现。", 36, 2550002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("也就是说……", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#fs18#成百上千的怪物都会扑过来了。", 36, 2550002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("狮子王不会袖手旁观的。", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("准备期间我不能离开这里，\r\n战斗的事情就要交给海姿和队长你们俩了。", 36, 2550002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("唔……", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("暂时没人唠叨你了，你应该偷着乐呢吧。", 36, 2550002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("哎呀，你连读心术都会了，\r\n这是要超越龙神了吗？", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("…………", 36, 2550002, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("我去塔内部查看情况，你和士兵们谈谈吧。", 36, 2550002, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceCompleteQuest(32682);
                                                                            cm.gainExp(186336);
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