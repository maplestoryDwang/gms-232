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
            cm.sendNormalTalk("(这是什么感觉？我体内的两股力量合二为一，成为一种新的力量啦。)", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(光与黑暗的融合提升了一个阶段。)", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.teachSkill(27121010, 0, 5);
                    cm.teachSkill(27121009, 0, 10);
                    cm.teachSkill(27120008, 0, 10);
                    cm.teachSkill(27120007, 0, 10);
                    cm.teachSkill(27121006, 0, 10);
                    cm.teachSkill(27121005, 0, 10);
                    cm.teachSkill(27121303, 0, 10);
                    cm.teachSkill(27121202, 0, 10);
                    cm.teachSkill(27121201, 0, 10);
                    cm.teachSkill(27121100, 0, 10);
                    cm.forceCompleteQuest(25512);
                    if (cm.getJob() == 2711) {
                        cm.changeJob(2712)
                    }
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25512.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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