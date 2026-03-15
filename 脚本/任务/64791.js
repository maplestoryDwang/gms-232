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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64791.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64791.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("真棒。不只是#h0#的队员，连其他远征队的队员都交口称赞#h0#你呢。人是社会动物，不管走到哪里都要有同伴才行。希望你们大家的友谊长存。", 36, 9401021, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#h0#，我为你准备了智能机器人，它们可以模仿你的队员的行动。请选择一台吧。#b \r\n#L0##i1662159:##t1662159##l  \r\n#L1##i1662160:##t1662160##l  \r\n#L2##i1662161:##t1662161##l  \r\n#L3##i1662162:##t1662162##l  \r\n#L4##i1662163:##t1662163##l", 36, 9401021)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(64791);
                    cm.sendNormalTalk_Bottom("这是说好的礼物。希望你在探险结束后，也能记得深渊，记得与你并肩作战的同伴们。", 36, 9401021, false, true);
                    cm.gainItem(1662159 + b, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};