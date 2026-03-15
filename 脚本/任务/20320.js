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
            if (cm.getQuestStatus(20320) != 1 && cm.getQuestStatus(20320) != 2) {
                cm.warp(913070200, 1);
                cm.forceStartQuest();
                cm.dispose();
                return
            }
            if (cm.getQuestStatus(20320) == 1) {
                cm.askYesNo("米哈尔，你已经完成了考验吗？")
            }
        } else {
            if (status == a++) {
                cm.sendNext("你现在觉醒了更强的力量，继续走在光之道路上吧!");
                cm.forceCompleteQuest();
                cm.changeJob(5111);
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20320.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("米哈尔，你已经完成了考验吗？")
        } else {
            if (status == a++) {
                cm.sendNext("你现在觉醒了更强的力量，继续走在光之道路上吧!");
                cm.forceCompleteQuest();
                cm.changeJob(5111);
                cm.dispose()
            }
        }
    }
};