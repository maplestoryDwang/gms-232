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
            cm.setNumberForQuestInfo(34905, "map", cm.getMapId());
            cm.dispose();
            cm.warp(940205800, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34905.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.playerMessage(5, "获得了<专注>技能和<吞噬深渊>勋章。");
            cm.playerMessage(-1, "获得了<专注>技能和<吞噬深渊>勋章。");
            cm.forceCompleteQuest(34910);
            cm.teachSkill(150011005, 0, -1);
            cm.teachSkill(150011005, 1, 1);
            cm.openUIWithOption(0, 1);
            cm.openUIWithOption(3, 150011005);
            cm.forceCompleteQuest(34905);
            cm.sendNormalTalk_Bottom("#face6#(呼,呼……那家伙进入深渊的时候,脑袋里好像浮现了遗忘的记忆……到底是什么呢……)", 37, 3001501, false, true, 1)
        } else {
            if (status === a++) {
                cm.gainItem(1143102, 1);
                cm.sendNormalTalk_Bottom("#face6#(新的力量……不,那不是全部……那难道是……被根源清除掉的记忆的一部分吗……)", 37, 3001501, true, true, 1);
                cm.dispose()
            }
        }
    }
};