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
            cm.sendNormalTalk("欢迎来到圣地！这里是冒险岛世界最和平、最安全的地方。是女皇希纳斯统治的土地！\r\n你的名字是……啊，是叫#b#h0##k吧？很高兴见到你！我一直在等你。你来这里，是想成为#p1101000#骑士团的一员吧？我叫#p1102004#。我奉女皇之名，在这里为像你这样的初心者提供指导。", 1, 1102101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("具体的事情以后再说，你先到新骑士团员欢迎会去看看吧。先去那里和其他修炼教官打个招呼。请跟我来。", 1, 1102101, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(20820);
                    cm.teachSkill(10001244, 1, 1);
                    cm.teachSkill(10000252, 1, 1);
                    cm.teachSkill(10001254, 1, 1);
                    cm.dispose();
                    cm.warp(130030100, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20820.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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