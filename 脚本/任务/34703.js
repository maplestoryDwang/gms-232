var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("呜呜，抱歉。实在太可怕了……幽灵们对反攻总部发动了空袭。指挥官伊黛娜大人和皮塔斯大人被包围在那里了。", 0, 3001007, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("他们两个倒不用担心，他们都非常优秀，一定会平安无事……我担心的是那些正在静坐示威的普通士兵们。", 0, 3001007, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("呃呃，时间紧迫！别废话了，我这就带你去战场！", 0, 3001007, true, true)
                } else {
                    if (status === b++) {
                        cm.askAcceptDecline("#b(只要把那些幽灵全都击倒就行了吧？好，轮到我卡德娜出场了！)#k\r\n\r\n#r※接受时，将自动前往战场任务区域。失败时若放弃战斗，则需重新开始。#k", 2, 3001007)
                    } else {
                        if (status === b++) {
                            cm.forceStartQuest(34703, "");
                            var a = cm.getEventManager("赫里希安_战斗1_清怪");
                            a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34703.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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