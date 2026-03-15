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
            cm.sendNormalTalk("封印石……那是很久很久以前，由#m250000000#看管的东西……难道说觊觎它的人又出现了……", 8, 2091007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请告诉我有关封印石的事情。", 2, 2091007, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("那可不行。#o9300351#这个家伙确实很危险，但我怎么知道你会比他不危险呢？我要考验一下你……你接受#b考验#k吗？", 0, 2091007)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("战士的武器，其实就是自信。技能比任何言语都能更好地体现你的内心。由我的#r分身#k来和你战斗，让我看看你的真心是怎样的。", 0, 2091007, false, false)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.forceStartQuest(21746, "");
                            cm.warp(925040001, 0, false);
                            cm.spawnMobLimit(9300350, 1, 226, 7, 100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21746.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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