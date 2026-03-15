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
            cm.forceStartQuest(23011, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23011.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你决心成为一名唤灵斗师吗？现在还可以重新选择。只要停止对话，放弃任务，然后和其他人对话就行。你要考虑清楚。你真的要选择唤灵斗师吗？你觉得这个职业适合你的反抗者之路吗？", 0, 2151001)
        } else {
            if (status === a++) {
                cm.forceStartQuest(23977, "1");
                cm.updateInfoQuest(1073, "3200=10");
                cm.teachSkill(30000074, 0, -1);
                cm.teachSkill(30001281, 1, 1);
                cm.teachSkill(30000002, 3, 0);
                cm.openUI(3);
                cm.openUI(1);
                cm.openUIWithOption(0, 1);
                cm.changeJob(3200);
                cm.sendNormalTalk("很好！欢迎你正式成为反抗者。从现在开始你就是唤灵斗师了。作为一名战斗的魔法师，希望你能勇敢地冲在最前面和敌人战斗。", 0, 2151001, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1382100, 1);
                    cm.gainItem(1142242, 1);
                    cm.forceCompleteQuest(23011);
                    cm.forceCompleteQuest(29941);
                    cm.sendNormalTalk("你不能在外面自称是唤灵斗师。如果被黑色之翼抓住了的话，就麻烦了。从现在起，你要把我叫做班主任。你是因为特别课程才到教室这里来的。呵呵……特别课程由我负责，我会好好带你的。", 0, 2151001, true, true);
                    cm.dispose()
                }
            }
        }
    }
};