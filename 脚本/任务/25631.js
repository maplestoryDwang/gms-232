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
            cm.sendNext("我收到了总部的许可。从现在开始，你就能通过组织的情报网络获得需要的情报了。\r\n\r\n#b#L0#太好了。想要获得情报的话，具体该怎么做呢？#l", 2050012)
        } else {
            if (status == a++) {
                cm.sendNext("这个请别担心。我们决定派遣一名工作员。请告诉我你想把他派到哪里。以后你们就在那里接头。\r\n\r\n#b#L0#……最好能派到这个地方。#l", 2050012)
            } else {
                if (status == a++) {
                    cm.askAcceptDecline("嗯，这里是相当偏僻的森林。当然，我们任何地方都没问题。那我们就把工作员派到那里。那种地方很难买到生活必需品。我们会让派遣过去的工作员0带几样东西过去，在那里出售。", 2050012)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25631.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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