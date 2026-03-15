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
            cm.setnpc;
            cm.forceStartQuest(31348);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31348.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("女神的宠物竟然变成了如此邪恶凶暴的怪物……？", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呵呵呵……这只是开始。以后的事情更值得期待。", 5, 2210009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(可疑的人的声音顺着风消失在了远方……)#k", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(31348);
                        cm.gainExp(6419211);
                        cm.forceStartQuest(31358, "on");
                        cm.warp(240092300, 2, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};