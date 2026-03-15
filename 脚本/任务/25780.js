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
            cm.sendNext("和麦格纳斯很像的人，你来这里的目的是什么？")
        } else {
            if (status == a++) {
                cm.sendNextS("#b麦格纳斯！！你这家伙！！你是谁！！和麦格纳斯一伙的吗！！")
            } else {
                if (status == a++) {
                    cm.sendNext("请镇静。我还以为你是和麦格纳斯一伙的。麦格纳斯是冒险岛世界最邪恶的黑魔法师手下的军团长。虽然不知道他是从哪里来的，但是外表和你有很多相似的地方。")
                } else {
                    if (status == a++) {
                        cm.sendNextS("#b（看来麦格纳斯来到这里了……格兰蒂斯很早就出现了通往冒险岛世界的传送口，他先来到这里也不奇怪……）")
                    } else {
                        if (status == a++) {
                            cm.sendNext("对于麦格纳斯，我们了解的不多。只知道他是个只知道战斗的粗鲁的战士……在黑魔法师被封印后，他就失去了踪迹。")
                        } else {
                            if (status == a++) {
                                cm.sendNext("\r\n#b黑魔法师是什么时候被封印的？")
                            } else {
                                if (status == a++) {
                                    cm.sendNext("是在几百年前，我也不知道准确的时间。")
                                } else {
                                    if (status == a++) {
                                        cm.sendNextS("\r\n#b(我们不了解麦格纳斯，是因为他占领赫里希安是几十年前的事情……时间好像对不上啊？)")
                                    } else {
                                        if (status == a++) {
                                            cm.sendNext("你和麦格纳斯是什么关系？")
                                        } else {
                                            if (status == a++) {
                                                cm.sendNextS("#b我是从一个名叫格兰蒂斯的世界来的诺巴族的战士，我叫狂龙战士。麦格纳斯是被我们诺巴族放逐的战士，但是他以武力占领了我们的首都赫里希安。是我们种族的耻辱，也是我们的仇人。")
                                            } else {
                                                if (status == a++) {
                                                    cm.sendNext("原来如此。原来你们都不是这个世界的人啊。")
                                                } else {
                                                    if (status == a++) {
                                                        cm.sendNextS("#b看来麦格纳斯是冒险岛骑士团和诺巴族共同的敌人。那个叫黑魔法师的人，感觉好像和格兰蒂斯的达勒摩尔一样邪恶……")
                                                    } else {
                                                        if (status == a++) {
                                                            cm.sendNext("达勒摩尔？")
                                                        } else {
                                                            if (status == a++) {
                                                                cm.sendNextS("#b是现在统治者格兰蒂斯的超越者之一。他是生命之超越者，想要用自己的意志控制着格兰蒂斯所有的生命。诺巴是与之对抗的势力之一。")
                                                            } else {
                                                                if (status == a++) {
                                                                    cm.sendNext("看来格兰蒂斯的情况不太好。我们也许可以助你们一臂之力。")
                                                                } else {
                                                                    if (status == a++) {
                                                                        cm.sendNextS("#b谢谢你的好意。但是我必须先回到格兰蒂斯去，把这件事报告给议会。希望能得到正面的答复。得到答复之后，我会回来找你。")
                                                                    } else {
                                                                        if (status == a++) {
                                                                            cm.askAcceptDecline("那我就在这里等你。")
                                                                        } else {
                                                                            if (status == a++) {
                                                                                cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25780.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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