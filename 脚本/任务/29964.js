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
            cm.playerMessage(5, "你获得了<联盟的一员>称号。");
            cm.playerMessage(-1, "你获得了<联盟的一员>称号。");
            cm.forceStartQuest(29964, "");
            cm.forceCompleteQuest(29964);
            cm.sendNormalTalk("根据第1届大陆会议的决议，由冒险岛世界所有职业成员组成的#b冒险岛联盟#k诞生了。", 0, 1105000, false, true);
            cm.gainItem(1142355, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("会议的结果挺让人高兴的……", 0, 1105000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真正的战斗从现在开始。我将为了大家可以摒弃之前的误会，成为一个团结的整体而努力。", 0, 1105000, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        if (cm.getQuestStatus(33127) == 0) {
                            cm.startQuestScript(0, 33127)
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/29964.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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