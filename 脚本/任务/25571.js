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
            cm.sendNext("现在突然有急事，没时间阅读书籍。抱歉，希望你下次再来。\r\n\r\n#b#L0#那件事应该不会和那个有点憨又没点眼见的书童有关吧？#l", 1032001)
        } else {
            if (status == a++) {
                cm.sendNext("……！！你说什么？\r\n\r\n#b#L0#年纪大了，耳朵不好使了吗？#l", 1032001)
            } else {
                if (status == a++) {
                    cm.sendNext("真是无礼。趁我还跟你客气的时候……（嗯？这个气息，难道是黑暗的力量？）\r\n\r\n#b#L0#能继续说下去吗？我很想知道你会说什么。#l", 1032001)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("呼，这一切也许都是我的报应。稍等一下。我想整理一下周围的东西。", 1032001)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25571.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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