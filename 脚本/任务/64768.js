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
            cm.sendNormalTalk_Bottom("终于……！我要在日记里记下来，今天是我学会新魔法的一天，离成为大魔法师又近了一步！哈！", 36, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b祝贺你。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你想象一下，队长。如果我们能进入深渊尽头，后人一定会将我们的冒险故事编成歌谣，写成书籍，世代流传吧？到那时我的日记就成为珍贵的史料了～！", 36, 9401029, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b哈哈。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我学会了技能，区区深渊影子压根不是对手！嘿嘿，我们继续向下吧？", 36, 9401029, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b好的！", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(867147013, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64768.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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