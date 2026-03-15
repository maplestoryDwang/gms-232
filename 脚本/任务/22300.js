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
            cm.teachSkill(20011005, 1, 1);
            cm.sendNormalTalk("(从米乐处获得了龙鳞，当鳞片落入手中之后，神奇地变成了#i1142158#。)", 2, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.gainItem(1142158, 1);
                cm.forceStartQuest(29940, "");
                cm.forceCompleteQuest(29940);
                cm.forceStartQuest(22300, "");
                cm.forceCompleteQuest(22300);
                cm.sendNormalTalk("(学会了#b英雄之回声#k技能。)", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哇！学会了全新的技能，作为龙神，有种成为了弗里德真正继承人的感觉呢。", 2, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嘻嘻，恭喜你，主人。日后你也要不断强大，试着超越前任哦！", 0, 1013000, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22300.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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