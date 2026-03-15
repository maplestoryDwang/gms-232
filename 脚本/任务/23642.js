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
            cm.sendNormalTalk("做好离开的准备了吗？", 4, 2159405, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，也没什么好准备的……接下去应该去哪里呢？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("要想隐藏一片树叶，就应该躲藏在森林里。为了争取时间，最好是躲在人多的地方。先到#b射手村#k去看看吧。", 4, 2159405, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("好的，我们到射手村去吧。#r(接受后立即移动。)#k", 16, 0)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(23642, "");
                            cm.forceCompleteQuest(23642);
                            cm.dispose();
                            cm.warp(931060020, 0, false)
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23642.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};