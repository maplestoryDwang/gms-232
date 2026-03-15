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
            cm.forceStartQuest(41208, "");
            cm.updateInfoQuest(41208, "");
            cm.gainItem(4033839, 10)
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
            cm.sendNormalTalk("议会长投票？看来安苏尼还是把请愿书贴在公告栏了啊。我是怎么知道的？我是安苏尼的秘书，当然知道了~", 0, 2450015, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41208, "NpcSpeech=24500151");
                cm.gainItem(4033839, -1);
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
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
            cm.sendNormalTalk("什么？阿贝尔特退任投票？啧啧，人心险恶啊。还未从失去女儿的痛苦中走出来，竟然还要被趁机赶下台……", 0, 2450006, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41208, "NpcSpeech=24500151/24500062");
                cm.gainItem(4033839, -1);
                cm.dispose()
            }
        }
    }
}

function stage2(d, c, b) {
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
            cm.sendNormalTalk("议会长赞成与否投票，那就是说阿贝尔特议会长要被赶下台了？天呐，这么好的人怎么会……这是投票用纸吗？大家不会把这种东西随便丢在街上吧？", 0, 2450014, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41208, "NpcSpeech=24500151/24500062/24500143");
                cm.gainItem(4033839, -1);
                cm.dispose()
            }
        }
    }
}

function stage3(d, c, b) {
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
            cm.sendNormalTalk("议会长赞成与否投票已经开始了？所以才要分发投票用纸啊？嘿，这可是我该做的事情啊。你把剩下的都给我吧，我会负责交给每一位市民的。", 0, 2450001, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41208, "NpcSpeech=24500151/24500062/24500143/24500014");
                cm.gainItem(4033839, -7);
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