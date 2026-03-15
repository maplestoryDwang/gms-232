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
            cm.sendNormalTalk("只剩下一张合同了。你的运气真好。好了，现在我告诉你一些关系贸易的事情。", 0, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？你说你没钱？那是当然的啊…… #h0# 你有很多钱的话，还会来到这个地方吗？所以！！我们这次会为签订合同的人提供小货船和本钱。", 0, 9390220, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17004);
                    cm.sendNormalTalk("贸易时，一定会用到金币，所以请不要把本钱全部用完。不过，如果你根本不打算进行贸易的话，钱用完也没关系。", 0, 9390220, true, true);
                    cm.gainItem(4310100, 10)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("关于船的情况，可以通过点击角色栏右下端的图标进行查看。现在的船还很小，但是通过几次贸易之后，就可以换成更好的船了。", 1, 9390220, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那我们开始进行贸易吧？和我搭话之后，进行第一次出航吧。", 1, 9390220, true, false)
                        } else {
                            if (status === a++) {
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17004.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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