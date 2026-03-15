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
            cm.sendNext("你好……你就是泰雅说的那个人啊……你不认识泰雅？她是个有着超可爱短发的小女孩。你救的那个女孩的名字叫泰雅。一看就知道和普通人不一样。哈哈哈。感谢你救了我们村的孩子。")
        } else {
            if (status == a++) {
                cm.sendNextS("\r\n#b#L0#不用谢。这是我应该做的。对了那孩子没事吧?#l")
            } else {
                if (status == a++) {
                    cm.sendNext("是的，还好没有受伤。她好像受了惊，而且没好好吃东西，所以很虚弱……我想应该会慢慢好起来的。")
                } else {
                    if (status == a++) {
                        cm.sendNextS("\r\n#b#L0#我能为那个孩子做点什么吗……#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("啊……没必要这么客……不，既然你提到了，我想麻烦你一下。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24089.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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