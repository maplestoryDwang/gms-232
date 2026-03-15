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
            cm.forceStartQuest(20872, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20872.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4032097#全都带来啦！真了不起！你具备了成为正式骑士的资格！你想踏上正式骑士之路吗？", 0, 1101004)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(1073, "1200=10;1210=204");
                cm.forceStartQuest(20872, "030");
                cm.changeJob(1210);
                cm.sendNormalTalk("现在你已不再是修炼骑士。你已经成为了冒险骑士团的正式骑士！", 0, 1101004, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142067, 1);
                    cm.forceCompleteQuest(20872);
                    cm.forceCompleteQuest(29907);
                    cm.sendNormalTalk("我给了你一些#bSP#k，并传授了你炎术士技能中只有正式骑士才能学习的几种技能。希望你能和火焰一起变得更强！", 0, 1101004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好了，作为冒险骑士团的正式骑士，希望你能以更高的热情继续努力！", 0, 1101004, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};