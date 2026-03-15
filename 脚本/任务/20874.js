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
            cm.forceStartQuest(20874, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20874.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4032099#全部带来啦……不过，就这点小事还不值得我称赞。我确认你拥有成为正式骑士的资格。你愿意成为正式骑士吗？", 0, 1101006)
        } else {
            if (status === a++) {
                cm.changeJob(1410);
                cm.updateInfoQuest(1073, "1400=10;1410=204");
                cm.sendNormalTalk("现在你已不再是修炼骑士了。你已经成为了冒险骑士团的正式骑士。", 0, 1101006, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142067, 1);
                    cm.forceCompleteQuest(20874);
                    cm.forceCompleteQuest(29907);
                    cm.sendNormalTalk("我给了你一些#bSP#k。虽然不多，但可以用来学习新传授的技能。你可以和黑暗一起，试验一下夜行者技能中只有正式骑士才能学习的那些技能。", 0, 1101006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("作为冒险骑士团的正式骑士，希望你不要陷入黑暗，虽然自己身在黑影之中。", 0, 1101006, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};