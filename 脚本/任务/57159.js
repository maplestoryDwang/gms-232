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
            cm.sendNormalTalk_Bottom("#face0#接下来，请你继续深入敌阵，以击倒敌方的武士队长。只要没了指挥官，那么剩下的杂兵就不过是一些乌合之众罢了。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#请你帮忙打倒300名织田军武士队长。啊哈哈，这一战虽然困难，但我愿意相信剑斗你的实力！", 37, 9130000, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57159, "");
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57159.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#剑斗。打得还痛快吗？", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57159);
                cm.gainExp(5711777);
                cm.dispose()
            }
        }
    }
};