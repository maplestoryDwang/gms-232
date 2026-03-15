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
            cm.sendNormalTalk("这段时间你升级很快嘛，英雄大人？我终于又发现了和黑色之翼有关的有趣事情了。这一次咱们早点……#b#m250000000##k这个村子你知道吗？看来你得去一趟那里。", 0, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#m250000000#的#b#p2090004##k好像已经和黑色之翼相接触。虽然不知道事情是怎么变成这样的，但信息应该准确无误。", 0, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("你如果准备好的话，#e#b我就马上将你送往武陵。#k#n你去查出黑色之翼为什么会和#p2090004#接触，以及它们之间到底有着怎样的交易。", 0, 1002104)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(21741, "");
                        cm.dispose();
                        cm.warp(250000000, 12, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21741.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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