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
            cm.forceStartQuest(20875, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20875.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("#t4032100#都带来了？嘻嘻嘻！我就知道你一定能行。我确认你具备了成为正式骑士的资格！哈哈，你想成为正式骑士吗？", 0, 1101007)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(1073, "1500=10;1510=235");
                cm.changeJob(1510);
                cm.sendNormalTalk("现在你已不再是修炼骑士了。你已经是冒险骑士团的正式骑士。", 0, 1101007, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1142067, 1);
                    cm.forceCompleteQuest(20875);
                    cm.forceCompleteQuest(29907);
                    cm.sendNormalTalk("我给了你一些#bSP#k。你现在可以学习奇袭者技能中只有正式骑士才能学习的技能了。这些和闪电结合的强大技能，希望你好好使用。", 0, 1101007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("别把成为正式骑士的事情看得太重。不管多艰难的事情，也得懂得寻找乐趣。", 0, 1101007, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};