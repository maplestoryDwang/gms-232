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
            cm.sendNormalTalk_Bottom("刚刚的那个声音，你也听到了吗？我从没听到过这么响的声音。\r\n肯定发生了什么事情！该死，偏偏在大家都出去侦察的时候……", 36, 2155125, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("小软柿！你能帮帮忙吗？\r\n如果是你，我就能放心地把这件事交给你了。\r\n你去看看那里究竟发生了什么事情。\r\n\r\n#g- 如果点击“是”，即可自动移动。", 37, 2155125)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("果然，只有小软柿最可靠了。\r\n拜托你了，快去看看吧。", 37, 2155125, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(310070151, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39202.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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