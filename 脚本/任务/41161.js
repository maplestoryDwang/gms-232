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
            cm.forceStartQuest(41161, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41161.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这次又变成妙仙了！", 2, 2440004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("天呐，这次好像妙仙气息放的太多了。那么头痛呢？", 0, 2440004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("更疼了，更疼！感觉我的头要爆炸了！", 2, 2440004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("唉，你这人真粗野。你头疼看来好像是慢性头痛造成的，所以吃点头痛药就好了~不管怎样，多亏你我才拿到了实验结果。以后也常来玩啊~", 0, 2440004, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(41161);
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