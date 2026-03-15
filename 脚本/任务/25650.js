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
            cm.sendNext("好久不见。好像已经有几百年了。\r\n\r\n#b#L0#难道是古瓦洛？！#l", 2133008)
        } else {
            if (status == a++) {
                cm.sendNext("是的，我是大精灵古瓦洛。\r\n\r\n#b#L0#到底怎么回事？你明明被麦格纳斯杀死了啊？#l", 2133008)
            } else {
                if (status == a++) {
                    cm.sendNext("我是构成这个世界的元素，不会完全的死去。\r\n\r\n#b#L0#这个不管怎样都没关系。黑魔法师在哪里啊！#l", 2133008)
                } else {
                    if (status == a++) {
                        cm.sendNext("为什么要问我呢？我已经和他断绝了关系。\r\n\r\n#b#L0#你说什么！？#l", 2133008)
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("遭到麦格纳斯的攻击后，我花了很长时间重新聚集意志，知道可以思考为止。那个时候，我发现自己内心的欲望消失了。", 2133008)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25650.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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