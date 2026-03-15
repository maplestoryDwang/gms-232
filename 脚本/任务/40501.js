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
            cm.sendNormalTalk("我的测试比较特别。测试的地方不在这里，而是在#r我创造出的其他空间#k。当然每次只能移动一位。这次移动的是……那么，#b#p2400005##k。#p2400005#先来吧。", 32, 2460000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在我创造的空间中，和我制造的怪物们战斗，尽情展现#p2400005#的强大吧。虽然和#p2400006#分开后很久没打架了……但是相信他一定会很帅。", 32, 2460000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("好了，你接受的话，就会移动到我创造的空间里了……那出发吧？", 32, 2460000)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(40501, "");
                        cm.forceStartQuest(40501, "");
                        cm.dispose();
                        cm.getPlayer().setGender(0);
                        cm.onZeroInfo(199);
                        cm.warp(326090020, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40501.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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