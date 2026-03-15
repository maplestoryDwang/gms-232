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
            cm.forceStartQuest(32352, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32352.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦哦！你终于来啦！我等你等得花儿都谢了。要修理建筑的话，需要的东西可不止一两个哦。", 1, 1520050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我说，你有没有带来什么有用的东西啊？", 1, 1520050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("太好了。锤子、钉子和木板，需要的东西基本都有了。那么，就让你见识一下我的无敌锤子功。我哒-我哒-我哒-我哒-！", 1, 1520050, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4033902, -1);
                        cm.forceCompleteQuest(32352);
                        cm.gainExp(350000);
                        cm.dispose()
                    }
                }
            }
        }
    }
};