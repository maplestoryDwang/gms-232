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
            cm.sendNormalTalk("你好。是想成为骑士的人啊。", 1, 1102106, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的，我叫#h0#。我还是第一次到这个庭院来。圣地有很多美丽的地方。", 3, 1102106, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("圣地是个和平而美丽的地方。训练难吗？", 1, 1102106, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的，虽然还有很多不足，不过我一定会克服各种困难！成为一名优秀的骑士！我想用自己的双手，守护冒险岛世界的和平。", 3, 1102106, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(露出微笑)不管是多么艰难的路，我们都必须勇往直前。这种时候更加需要大家齐心协力。", 1, 1102106, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但是，你是谁？从穿着看，好像不是冒险骑士团的成员……", 3, 1102106, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是的，我是……", 1, 1102106, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(20834, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20834.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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