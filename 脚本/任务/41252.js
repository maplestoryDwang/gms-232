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
            cm.sendNormalTalk("罗密欧吃了便当就晕倒了？犹泰也是？天呐，我的便当竟然这么好吃？看来我对料理很有天赋嘛。正好，有剩下的材料，我也尝一下吧~吧唧吧唧……嗯？……啊！(坐地)", 0, 2460002, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41252, "");
                cm.forceStartQuest(41252, "");
                cm.sendNormalTalk("哇，朱丽叶也倒下去了！这到底是什么味道……真的有那么好吃吗？要不我也来……一口？不，不对，绝对不是因为好吃晕倒的。不过我该怎么办？该不会这样就死掉了吧？！还是先去找别人帮忙吧！", 2, 2460002, true, false)
            } else {
                if (status === a++) {
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(41252, "NpcSpeech=24600051");
            cm.dispose()
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