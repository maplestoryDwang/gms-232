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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("拼图碎片好像逐渐拼出来了。在时间神殿中出现的阿卡伊勒，还有时间裂缝……在同一时期出现的时空门……这一切之间好像存在着某种联系。阿卡伊勒的目的到底是什么呢……我有一种不祥的预感。", 0, 9073011, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你现在要和我一起去吗？", 0, 9073011)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那么就亲自去一趟，查看裂缝的情况吧。", 0, 9073011, false, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(1639);
                        cm.gainExp(164200);
                        cm.dispose();
                        cm.warp(270000000, 2, false)
                    }
                }
            }
        }
    }
};