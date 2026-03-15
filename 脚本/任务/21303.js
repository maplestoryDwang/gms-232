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
            cm.sendNormalTalk("呜呜～#p1203001#很难过。#p1203001#很生气。#p1203001#很想哭……呜呜呜呜～", 8, 1203001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎、怎么了？", 2, 1203001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#p1203001#做好了宝石。#b像苹果一样的红宝石#k。结果#r小偷#k却把宝石给偷走了。#p1203001#宝石没了。#p1203001#好难过……", 8, 1203001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你说小偷偷走了红宝石？", 2, 1203001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("对。必须找回#p1203001#宝石。你要是能帮我找回#p1203001#宝石，我会好好答谢你的。要是帮我抓到小偷，我也会答谢你的。", 0, 1203001)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21303, "");
                                cm.sendNormalTalk("小偷往那个方向去了。那个方向是……吃饭的手是右手，不吃饭的手是左手……#b左边#k！往左边去就能抓到小偷。", 0, 1203001, false, false)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(914022200, 1, false);
                                    cm.spawnMobLimit(9001013, 1, -142, 454, 100)
                                }
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21303.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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