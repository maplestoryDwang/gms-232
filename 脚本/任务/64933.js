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
            cm.sendNormalTalk_Bottom("#b阿特利埃#k崩溃后，部分#b兵器机器人#k跑到了外面。", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("如果对他们放置不管，肯定会酿成大祸的。你可以一次性消灭他们吗？", 36, 9401072)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(64933, "");
                    cm.sendNormalTalk_Bottom("很好。如果你想去#b藏身处附近森林#k，就来找我吧。", 36, 9401072, 0, 0)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64933.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("辛苦了。#b每天#k打扫卫生，也不知道怎么这么开心……", 36, 9401072, 0, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(64933);
                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                cm.sendNormalTalk_Bottom("赛恩好像制造出了很多#b兵器机器人#k。\r\n所以，#b明天#k也拜托你了。", 36, 9401072, 1, 0);
                cm.gainItem(4310284, 10)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};