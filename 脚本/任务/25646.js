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
            cm.sendNormalTalk("我知道你很忙，但我有件事想告诉你。", 0, 1032212, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("发现什么了吗？", 2, 1032212, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们调查后发现了很有价值的信息。你听说过叫做#b十字猎人#k的组织吗？", 0, 1032212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("第一次听说。那是怎样的组织？", 2, 1032212, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("据我所知，是追捕出现在冒险岛世界的黑暗怪物的秘密组织。虽然不知道黑暗怪物的本体是什么，但我们推测，它们是受到黑魔法师的影响才诞生的生物。", 0, 1032212, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……！！", 2, 1032212, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("所以，我觉得如果能接近并加入十字猎人组织，获取内部情报，也是个不错的选择。他们现在人手不足，正在寻找有实力的伙伴。希望我的信息能帮到你，再见。", 1, 1032212, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(25646);
                                        cm.gainExp(23923);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25646.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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