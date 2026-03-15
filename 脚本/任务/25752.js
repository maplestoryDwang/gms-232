var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("大事不好！东侧出现的敌人主力部队实际上只是个诱饵。现在敌人的军队正在入侵南侧，西侧也正在建起大规模召唤阵。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("位于南侧的敌人军队虽也是个问题，但大规模召唤阵建成后，麦格纳斯的所有军队将会一次性全部侵入这个地方。必须阻止他们进行召唤！\r\n\r\n#b#e<接受后将立即移动到战场地图。>#n#k", 0, 3000000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("侵入南侧的敌人先由骑士团挡着。请狂龙战士务必阻止西侧的召唤仪式。你只要消灭举行仪式的那些弱化的幽灵魔法师，打断召唤仪式就行。赶快前往保护罩西部边界吧！", 1, 3000000, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(25752, "");
                        var a = cm.getEventManager("狂龙战士_战斗7");
                        a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25752.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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