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
            cm.sendNormalTalk("你还记得吗？以前环绕在据点外面的光之结界。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("当然了。黑魔法师攻击我们之前，一直在守护我们据点的透明却结实的结界。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("把它设在拉尼娅的家怎么样？因为无法用肉眼识别，所以也没必要解释。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不是说光之结界的设置方法被烧毁后，再也没能复原吗？", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("这几百年来，我可没歇着。我已经复原了设置方法。不过需要设置结界所需要的核心物品水晶。如果夜光法师你能把它拿来，我就可以完成结界。", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("水晶要去哪里找啊？", 2, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("首先，材料应该能从林中之城附近的被诅咒的神殿那里搜集到。不过，加工水晶的方法是个问题…………这个问题还是等搜集到材料之后再考虑吧。我会将你送到林中之城，请在那里询问获得材料的方法吧。那里肯定有熟悉这方面知识的#b记忆者#k。", 1, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(25633, "");
                                        cm.dispose();
                                        cm.warp(105000000, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25633.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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