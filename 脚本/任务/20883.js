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
            cm.forceStartQuest(20883, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20883.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#h0#，你守护的那本书是非常重要的东西。绝对不能落入黑魔法师之手……虽然你的力量还比较弱，但你和敌人战斗的勇气令人赞叹。具体的内容，我现在还不方便告诉你。", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你解决了这件事，女皇赐予了你新的爵位。你想现在接受爵位吗？", 0, 1101002)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(1073, "1100=10;1110=201;1111=201");
                    cm.forceCompleteQuest(20883);
                    if (cm.getJob() == 1110 || cm.getJob() == 1210 || cm.getJob() == 1310 || cm.getJob() == 1410 || cm.getJob() == 1510) {
                        cm.changeJob(cm.getJob() + 1)
                    }
                    cm.sendNormalTalk("#h0#，我任命你为高级骑士。从现在开始，你就是冒险骑士团的高级骑士了。随着地位的提高，你必须承担更困难的任务。希望你能继续努力。", 0, 1101002, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142068, 1);
                        cm.forceCompleteQuest(20883);
                        cm.forceCompleteQuest(20767);
                        cm.dispose()
                    }
                }
            }
        }
    }
};