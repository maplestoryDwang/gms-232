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
            cm.sendNormalTalk("爆莉萌天使，大事不好了。眼下保护罩的复原工作快要结束，但召唤阵被毁后，麦格纳斯的军队拼命突破了保护罩的南侧，正往里冲。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.askYesNo("南侧的骑士团团员们正分身不暇，你能助我们一臂之力吗？#r(接受后将移动到战场。如果任务失败，请重新开始该任务。)#k", 0, 3000000)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("你自愿奉献的精神十分可嘉，足以成为骑士团团员们的榜样。离保护罩复原完成没多少时间了，请你尽力撑到那时候。", 0, 3000000, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(25868, "");
                        var a = cm.getEventManager("爆莉萌天使_战斗4");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25868.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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