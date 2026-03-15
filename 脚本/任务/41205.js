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
            cm.forceStartQuest(41205, "");
            cm.updateInfoQuest(41205, "");
            cm.gainItem(4033838, 1);
            cm.dispose()
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
            cm.sendNormalTalk("是阿岚让你把戒指交给我的吗？我做什么决定，他都会答应？……男人真是无可救药，一点都不懂女人的心。", 0, 2450015, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(总觉得这句话很耳熟)就，就是说啊。", 2, 2450015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你去转告#b阿岚#k，如果他现在不马上过来向我求婚，我绝饶不了他。竟然把我当成迷恋钻戒的拜金女，我这一生都饶不了他。", 0, 2450015, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41205, "NpcSpeech=24500151");
                        cm.gainItem(4033838, -1);
                        cm.dispose()
                    }
                }
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