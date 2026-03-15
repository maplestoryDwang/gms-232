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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21302.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊！这、这是……你终于想起制作#t4032312#的方法了？啊啊……这就是为什么你再笨再健忘，我也依然对你不离不弃……哎呀，现在不是说这些的时候！快把宝石给我！", 0, 1201002, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("好了，#t4032312#的力量应该可以恢复了，你的能力也需要再唤醒一些。现在你的等级升高了不少，可以被唤醒的能力也更多了！", 0, 1201002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(21302, "");
                    cm.forceCompleteQuest(21302);
                    cm.updateInfoQuest(21019, "c=1;miss=o;arr=o;ck=1;helper=clear");
                    cm.sendNormalTalk("赶紧恢复以前的能力吧，带上我一起去冒险……", 0, 1201002, false, false)
                } else {
                    if (status === a++) {
                        cm.gainItem(1142131, 1);
                        cm.gainItem(4032312, -1);
                        cm.dispose();
                        if (cm.getJob() == 2110) {
                            cm.changeJob(2111)
                        }
                    }
                }
            }
        }
    }
};