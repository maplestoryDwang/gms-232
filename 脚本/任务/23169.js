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
            cm.sendNormalTalk("赶紧过来，反抗者的英雄，能在村庄见到#h0#你更让人开心呢？这个村庄真的很美，不枉我们豁出性命去保护，你说是不是？", 0, 2151000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在身体没事了吗？", 2, 2151000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("恩，既然#p2151003#的实力已经很明确了，现在就可以像从前一样战斗了，不过还有个问题……", 0, 2151000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("又有什么问题了吗？难道黑色之翼有什么阴谋？", 2, 2151000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("不，这次的问题不是别人……而是你！你变得太强大了，居然能做到连我这个老师都做不到的事情，真叫人汗颜啊……所以我打算再给你点更难一些的课题，你有信心吗？", 0, 2151000)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "3700=10;3710=201;3711=201;3712=201");
                                cm.changeJob(3712);
                                cm.sendNormalTalk("我已经将连我自己都没法完美诠释的艰难顶级技能都传授给你了，我相信虽然这股力量我没法完全操控，但你绝对可以，没问题了吧？反抗者的英雄！", 0, 2151000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142245, 1);
                                    cm.gainItem(1353403, 1);
                                    cm.forceCompleteQuest(23169);
                                    cm.forceCompleteQuest(29944);
                                    cm.sendNormalTalk("这是我的最后一项课程了吗……不，不可能。我可是很有能力的反抗者。现在你比我强，但你还有能跟我学习的吧？所以……下个课程见吧。虽然不知道什么时候能开始。", 0, 2151000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("在此之前我会期待你作为反抗者大展拳脚的。", 0, 2151000, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23169.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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