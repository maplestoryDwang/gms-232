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
            cm.sendNext("必须快点成为优秀的武士才行……你是谁？\r\n\r\n#b#L0#这附近还有别人在进行武士修行吗？#l", 1061019)
        } else {
            if (status == a++) {
                cm.sendNext("没有了。成为武士的道路非常艰难，不是随便什么人都能进行的。当然，我不一样。\r\n\r\n#b#L0#(这么说，这孩子就是武士的后裔？)我在找某个人……那个人出生在世代都是武士的家庭，据说祖先传下了一个神秘的宝物。#l", 1061019)
            } else {
                if (status == a++) {
                    cm.sendNext("嗯？那好像是在说我吧？虽然我没见过，但听说大哥家里有个非常贵重的传家宝。\r\n\r\n#b#L0#我能看看那个秘宝吗？#l", 1061019)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("嗯，我也没见过那个宝物……所以我没办法答应你的请求。你能去问问麦吉哥哥吗？", 1061019)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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