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
            cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNext("你来了，我等你很久了。听说你在这次任务中见到了“传奇”？他是怎样的人啊？")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("我也不太清楚，他故意掩去了自己的样子。")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("真可惜，虽然我是领导者，可是对于他的事情，却一点也不晓得。要是我能像都没人陪我玩一样，至少远远地见到他一次该有多好啊。不管怎么说，既然已经获得了他的认同，从现在开始，#h #就是#bS级猎人#k了。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrev("迄今为止能获得这个称号的人，只有我认识的一个三人的团队。希望你会为自己感到自豪。还有，这是我个人给你的奖励，请善加使用。")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("今后有重要的任务的话，我们还会见面的。请你多保重。");
                            cm.gainItem(4310029, 100);
                            cm.gainExp(2277740)
                        } else {
                            if (status == a++) {
                                cm.forceCompleteQuest();
                                cm.fieldEffect_ScreenMsg("crossHunter/chapter/end4");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};