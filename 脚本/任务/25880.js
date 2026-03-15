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
            cm.sendNext("那个老奶奶好像非常喜欢你。\r\n\r\n#b#L0#嗯，我也喜欢狼牙。#l")
        } else {
            if (status == a++) {
                cm.sendNext("对了，到了新世界之后，你得为我做一件事。\r\n\r\n#b#L0#什么事？#l")
            } else {
                if (status == a++) {
                    cm.sendNext("我想吃魔晶石。\r\n\r\n#b#L0#魔晶石？#l")
                } else {
                    if (status == a++) {
                        cm.sendNext("你忘了吗？我和你签订契约的时候，你答应到时会帮我搜集魔晶石的。\r\n\r\n#b#L0#啊……啊……那是契约吗？我记不太清了……#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("这全都是为了你！不，应该说是为了我们。如果你能帮我搜集魔晶石，我可以用副产品帮你制作特别的东西。所以一定要努力帮我搜集哦。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25880.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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