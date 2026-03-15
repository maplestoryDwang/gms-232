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
            cm.forceStartQuest(23013, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23013.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("你决心成为机械师了吗？现在还有重新选择的机会。只要停止对话，放弃任务，然后和其他人对话就行。请你好好考虑一下。你真的要选择机械师吗？你认为这个职业适合你的反抗者之路吗？", 0, 2151004)
        } else {
            if (status === a++) {
                cm.forceStartQuest(23977, "1");
                cm.updateInfoQuest(1073, "3500=10");
                cm.openUI(3);
                cm.openUI(1);
                cm.openUIWithOption(0, 1);
                cm.changeJob(3500);
                cm.sendNormalTalk("欢迎你成为正式的反抗者。从现在开始，你就是机械师了。你身为可以操控机械的人，要利用所有知识和方法来对付眼前的敌人。", 0, 2151004, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1492014, 1);
                    cm.gainItem(1142242, 1);
                    cm.forceCompleteQuest(23013);
                    cm.forceCompleteQuest(29941);
                    cm.sendNormalTalk("而且，我已经把比一般枪弹更加厉害的麦林弹给你了。有了这个，你对抗黑色之翼的力量就会更强。", 0, 2151004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("如果被黑色之翼发现我们的真实身份就糟了，所以从现在开始，你要叫我导师。而你就是在放学后到我这接受课外辅导的学生。在这特殊的辅导中，我会把你教成强大的机械师。", 0, 2151004, true, true);
                        cm.dispose()
                    }
                }
            }
        }
    }
};