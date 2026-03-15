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
            cm.forceStartQuest(41160, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41160.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这怎么回事？！怎么变成桔梗了！", 2, 2440004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哎呀，桔梗液好像放的太多了。不过，你的头痛怎么样了？感觉好点了吗？", 0, 2440004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好什么好，反而感觉更疼了。", 2, 2440004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没什么效果吗……唉，这次也是失败啊……", 0, 2440004, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(41160);
                            cm.gainExp(1900000);
                            cm.gainItem(4310085, 10);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};