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
            cm.sendNormalTalk("…唉唉…不能相信，一直以来我们所知道的真相原来都是假的…扭曲历史的人？还有更大的阴谋？不敢相信啊……我要先调查调查。", 0, 1057001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("林中之城深处住着崔斯坦的徒弟。因为他没在上一任达克鲁和崔斯坦去世的现场，所以一直没去找他……但现在是时候去见见他了。", 0, 1057001, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("如果上一任达克鲁和崔斯坦，还有阵…不是为了消灭魔王蝙蝠怪，而是为了更大的敌人而战斗的话，他应该会知道一些真相。你去见见他吧，接受我就直接送你过去。", 0, 1057001)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(2633, "");
                        cm.dispose();
                        cm.warp(105100100, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/2633.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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