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
            cm.askYesNo("#b(交易品的量很多，自己一个人运的话，应该还没走远。现在追上去，应该还能抓住他。)#k", 16, 0)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("他说是贝里村的反方向。那我只要往我来时的相反方向走就行了。", 17, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17618, "");
                    cm.dispose();
                    cm.warp(865020001, 1)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17618.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("怎么可能。我花了那么多钱雇来的佣兵竟然这模样……", 37, 9390204, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么样，我看你现在还是乖乖交出交易品吧。", 57, 9390204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("额…… 你是什么人，为什么要妨碍我的好事。", 33, 9390204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你不用知道我是谁。我有我的理由。再说，你偷了东西，我不能就这么放过你。", 57, 9390204, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("好了，你要怎么做。是乖乖交出交易品，还是要让我教训你一下才行。", 57, 9390204, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("切。现在状况不妙。我们今天就此作别吧。", 33, 9390204, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("一下子就逃得没影了。那，我现在还是回村子吧。", 57, 9390204, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那人是叫提皮斯吗？把东西还给那个船员就可以了吧。", 57, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(17618);
                                            cm.forceStartQuest(17619, "");
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
};