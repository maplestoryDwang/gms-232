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
            cm.forceStartQuest();
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
            cm.sendNormalTalk("嗯？找我有什么事？嗯？这是什么？魔力石头？没事他干嘛给我送这种东西来？", 0, 2460005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(难道真的不记得了吗？)不，不是。看来是我误会了，很抱歉。", 2, 2460005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……等下！把那东西给我吧，你把这个拿走。这是我把至今为止的炼金术都整理起来的，肯定比这个石头更有价值。还有帮我向那家伙转告一下，他要追上我还远着呢。", 0, 2460005, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41264, "NpcSpeech=24600051");
                        cm.gainItem(4033854, -1);
                        cm.gainItem(4033855, 1);
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