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
            cm.sendNormalTalk_Bottom("你要离开吗？", 37, 1540450, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真是可惜。", 37, 1540450, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("虽然战争结束我很开心，但……我们现在又要分开了。", 37, 1540450, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("不过，这次的分离应该不会持续太久。", 37, 1540450, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("虽然格里梅尔已经被击败，但黑魔法师还在。", 37, 1540450, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("所以，我期待我们下次再见面。", 37, 1540450, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(350063201, 0, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/33284.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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