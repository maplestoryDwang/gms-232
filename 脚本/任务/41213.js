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
            cm.sendNormalTalk("这就是埃德尔斯坦著名的无人出租车啊。没有驾驶员也可以到达目的地？那么，我也坐一下试试？到矿山警备区域！", 2, 2450022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……(毫无反应)", 0, 2450022, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么还不动？难道我说错目的地了？嗯……这样的话……开到矿山警备区域！去矿山警备区域吧？目的地是矿山警备区域。大叔，开到矿山警备区域！司机，到矿山警备区域，我出双倍~！", 2, 2450022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……你到底在干什么？", 4, 2450014, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不是，因为不开车，所以我以为有什么说出目的地的规则呢……", 2, 2450022, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("车不动是因为没有燃料啊？无人出租车虽然是免费的，但你还是得要添加燃料才行啊。燃料用#r#t4033836##k就可以了，不过要到矿山警备区域的话，估计至少要#r50个#t4033836##k吧？", 4, 2450014, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41213, "");
                                    cm.forceStartQuest(41213, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41213.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("加镥矿石燃料就可以了，是吧？", 2, 2450022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(对无人出租车添加了镥矿石燃料)", 0, 2450022, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好，开到矿山警备区域吧！", 2, 2450022, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……(毫无反应)", 0, 2450022, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么啊，燃料都加进去了怎么还是不动？嗯……莫非真有什么规则。司机，请开到矿山警备区域，出双倍价钱~！", 2, 2450022, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……你又在做什么？", 4, 2450015, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("啊，我已经给出租车加了燃料了，但还是不会动……", 2, 2450022, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这部车很久以前就出故障了，想要维修的话需要不少时间。反正矿山警备区域也离这里不远，你还是走过去吧。", 4, 2450015, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(41213, "");
                                            cm.forceStartQuest(41213, "");
                                            cm.forceCompleteQuest(41213);
                                            cm.gainExp(3800000);
                                            cm.gainItem(4310085, 12);
                                            cm.gainItem(4033836, -50);
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
};