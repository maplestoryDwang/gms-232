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
            cm.sendNormalTalk("#b#h0##k，我有急事相求。我在尼哈沙漠发现了非常贵重的宝石，然后正往射手村赶时，半路突然杀出个蒙着黑色面具的家伙，并把宝石夺走了。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那可不是一般的宝石。那是非常重要的东西，里面蕴含着强大的力量。所以我集结了这附近所有冒险家的力量，共同寻找宝石以及偷走宝石的家伙。我觉得那家伙应该还在射手村，可到底跑到哪里去了呢……。", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("赫丽娜！据说，在射手村北部山丘附近发现了可疑人物的身影！", 4, 1012102, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("！射手村北部山丘附近吗？#h0#，很抱歉，你能不能帮忙去追踪可疑人物呢？\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1012100)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("谢谢。我相信你一定可以找回宝石的。", 1, 1012100, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(32266);
                                cm.forceStartQuest(32372, "enter");
                                cm.gainExp(20000);
                                cm.dispose();
                                cm.warp(910090100, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32267.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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