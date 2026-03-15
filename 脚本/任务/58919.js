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
            cm.sendNormalTalk("红色坛子已经装满了，蓝色坛子也应该很快就能装满的。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你会继续帮我的吧？这都是为了盟军士兵们……", 4, 9130107)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(58919, "");
                    cm.sendNormalTalk("第二个的坛子，只要消灭150个#m811000016:#的#o9450032:#应该就能装满了。", 4, 9130107, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk(" 请快点处理吧。", 4, 9130107, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……处理？", 16, 9130107, true, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58919.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这个有150人的坛子还真的有点重呢。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好~满~啊", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58919);
                    cm.dispose()
                }
            }
        }
    }
};