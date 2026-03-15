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
            cm.askAcceptDecline("嗯？你找我有什么事吗？那种悲壮的表情……嗯？#m200000000#的植物有没有迅速生长？咦？你是怎么知道的？你是从哪里听到的吗？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp", 0, 2012012)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是，是的，发生过那种事。#b由于#o4230105#突然变大，我们遇到了很大的麻烦#k。还好有个路过的冒险家（那人身上还感觉到一种非凡的力量）帮助调查并解决了这件事，现在已经没有问题了。", 0, 2012012, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你怎么这副表情？事情已经解决了，用不着担心了……", 0, 2012012, true, false)
                } else {
                    if (status === a++) {
                        cm.gainExp(28135);
                        cm.forceStartQuest(22593, "");
                        cm.forceCompleteQuest(22593);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22593.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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