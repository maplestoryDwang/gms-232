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
            cm.sendNormalTalk("嗯…… ", 0, 9390201, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("村长，你有什么苦恼吗？", 2, 9390201, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊…… 是你啊。最近有件事让我很头痛。", 0, 9390201, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是什么事？如果我能帮到你的话，我很愿意帮忙。", 2, 9390201, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("是真的吗？你愿意…… 帮帮我们的村子吗？", 0, 9390201)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不久前，这附近的小偷猫聚集在一起，开始抢夺旅客的东西。", 0, 9390201, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("但是，随着这些家伙的势力逐渐壮大，它们现在开始袭击村子的储鱼仓库。虽然目前还没造成很大的损失，但继续这样下去的话，损害会逐渐变大的。", 0, 9390201, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("请帮我抓住#b#o9390807##k。就先试着抓个100只吧。", 0, 9390201, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(17610, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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