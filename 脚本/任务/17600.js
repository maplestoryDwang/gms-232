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
            cm.askAcceptDecline("你这段时间过得还好吗？女皇正在找你。你能来圣地吗？\r\n#b(接受时立刻前往圣地。)#k", 0, 1101002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那我就在圣地等着你。", 0, 1101002, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17600, "");
                    cm.dispose();
                    cm.warp(130000000, 0)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17600.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你来了啊，#b#e#h0#……#n#k\r\n女皇等了你很久了。请你快点去见她吧。", 36, 1540451, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(17600);
                cm.forceStartQuest(17710, "");
                cm.dispose()
            }
        }
    }
};