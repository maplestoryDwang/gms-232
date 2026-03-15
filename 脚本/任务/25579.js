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
            cm.sendNext("希望那个卷轴是你想要的东西。只有这样，你才会离开这里。\r\n\r\n#b#L0#很抱歉，我还不能离开。因为卷轴中的内容需要解释。想知道的话，你可以看一看。#l", 1032001)
        } else {
            if (status == a++) {
                cm.sendNext("……冰冷的火焰和灼热的寒气，看来留下这个卷轴的人很喜欢矛盾的东西。\r\n\r\n#b#L0#这是围着真正的力量乱转，却找不到门槛的人的特征。重要的是这些句子中包含的意思。你得帮我解释一下。使唤我的代价可是很昂贵的。#l", 1032001)
            } else {
                if (status == a++) {
                    cm.sendNext("没有那个必要。我好像知道是什么意思了。\r\n\r\n#b#L0#很好。快告诉我吧。#l", 1032001)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("等一下。我去拿样东西。", 1032001)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25579.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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