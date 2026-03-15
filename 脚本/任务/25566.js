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
            cm.sendNormalTalk("你想干什么？这里的图书馆很多人用的。", 0, 1032208, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("然后呢？我为什么要在乎这些？", 2, 1032208, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("要损害别人的利益，怎么会没事呢！", 0, 1032208, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("有事又怎样？你要站出来教训我吗？", 2, 1032208, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那倒不会……", 0, 1032208, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那就别烦我。我有东西要找，很忙。", 3, 1032208, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(25566, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25566.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这么多书，一个人不可能全都翻一遍。这里的书比想象的要多嘛。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(25566);
                cm.gainExp(1068);
                cm.dispose()
            }
        }
    }
};