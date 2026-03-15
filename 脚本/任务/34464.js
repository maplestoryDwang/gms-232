var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.askAcceptDecline("#b(得尽快将那些迷路的精灵安然无恙地送回去才好。)#k", 2, 3003311)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("#b(不能再被邪恶的气息所污染了，得保护迷路的精灵免受周围这些残暴精灵的伤害，送他们回去才行。)#k", 2, 3003311, false, true)
            } else {
                if (status === b++) {
                    cm.playerMessage(5, "只有将野外的所有怪物全都消灭掉，才能前往下一地区。");
                    cm.dispose();
                    var a = cm.getEventManager("阿尔卡那_剧情_战斗2");
                    a.startInstance(cm.getPlayer(), cm.getMap())
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};