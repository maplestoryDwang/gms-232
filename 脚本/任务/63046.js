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
            cm.sendNormalTalk("#b(不能就这么回去。)", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(肯定有哪个地方是有颜色的……)", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("(既然渡鸦是“黑”色的，去消灭50只渡鸦，确认一下是否能找出色彩的痕迹吧。)", 2, 0)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(区区50只……)", 2, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(63046, "");
                            cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63046.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(不管我怎么消灭渡鸦，也没发现一丝色彩的痕迹。)", 2, 0, false, true);
            cm.spawnMobLimit(9402048, 1, -125, 117, 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(这个世界里真的不存在色彩吗？)", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(返回村庄吧)", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(63046);
                        cm.gainExp(476400);
                        cm.updateInfoQuest(63046, "exp=1");
                        cm.dispose();
                        cm.warp(867113402, 1, true)
                    }
                }
            }
        }
    }
};