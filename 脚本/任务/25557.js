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
            cm.sendNormalTalk("数百年前夜光法师离开后，老师不顾身上致命的伤痛，一心想要尽可能地教给我更多的知识。我也很想报答老师的苦心，尽最大努力去学习，但我的才能和努力有限，没能学到欧罗拉所有的秘典。对不起，夜光法师。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不怨你。是我不应该置年幼的你不顾。谢谢你替我做了这么多事。那个，老师走的安详吗？", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，虽然黑暗力量已经深入骨髓，但没能侵蚀老师的灵魂。他就在举行露西娅葬礼的溪谷，化成永远的光芒离开了人世。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……幸好。那以后，你是自己一个人生活的吗？", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("差不多算是吧。本来应该收些弟子的，但我很想快点消化掉学到的知识……不过我也没觉得无聊。夜光法师你也知道的，研究光之力量的乐趣无穷无尽啊。呵呵", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("飞鱼丸……", 3, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(25557);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25557.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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