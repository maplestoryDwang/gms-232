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
            cm.sendNormalTalk("嗯？这么快就想读新书啦？\r\n\r\n呵呵，现在还没有新书呢。但是我可以将你送去你已经读过的书的任意地方。", 0, 2500002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("如果次元图书馆里聚集了大量#b故事碎片#k的话，以后次元图书馆也许会出现新的故事。", 0, 2500002, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("如果你能为我收集20个故事碎片，作为报答，我可以为你额外延长7天的 #b项链追加期限#k。怎么样？\r\n\r\n#b(剩余可执行次数为 #e3次#n。)#k", 0, 2500002)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32667, "");
                        cm.sendNormalTalk("#b故事碎片#k可以从下列地图的怪物手中少量获得。请选择你喜欢的地方入场。\r\n#b(可以通过右侧传送口入场。)#k\r\n\r\n - 书中之艾琳森林\r\n - 书中的静谧之林", 0, 2500002, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32667.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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