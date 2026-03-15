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
            cm.forceStartQuest(20873, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20873.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4032098#……已经全部确认。你具备了成为正式骑士的资格。你想踏上正式骑士之路吗？", 0, 1101005)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(1073, "1300=10;1310=202");
                cm.changeJob(1310);
                cm.sendNormalTalk("现在……你已经不再是修炼骑士。你已经成为了冒险骑士团的正式骑士。", 0, 1101005, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142067, 1);
                    cm.forceCompleteQuest(20873);
                    cm.forceCompleteQuest(29907);
                    cm.sendNormalTalk("我给了你#bSP#k。此外还传授了风灵使者技能中只有正式骑士才能学习的技能。希望你能和风一起不断磨炼。", 0, 1101005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("作为冒险骑士团的正式骑士，希望你能一直保持理性的思维……", 0, 1101005, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};