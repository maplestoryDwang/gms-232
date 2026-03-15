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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n你听说过最新加入冒险岛世界的新职业#e#b御剑骑士#k#n吗？", 4, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n为了迎接她的华丽登场，我卡珊德拉特地准备了一份礼物！", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n名字叫做#b#e<阿黛尔出征支援>#k#n活动！", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n参加方法非常简单！", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n阿黛尔角色每次#e达到指定等级#n后，点击活动提示并完成任务，就能获得礼物！", 4, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("\r\n#e<达到30级>#n\r\n\r\n#b#i2631608:# #t2631608:#\r\n#i2435742:# #t2435742:#\r\n#i2434270:# #t2434270:# 3个#k\r\n\r\n\r\n#e<达到100级>#n\r\n\r\n#b#i2631609:# #t2631609:#\r\n#i2433444:# #t2433444:##k\r\n\r\n\r\n#e<达到150级>#n\r\n\r\n#b#i2439179:# #t2439179:#\r\n#i2631611:# #t2631611:##k\r\n\r\n\r\n#e<达到200级>#n\r\n\r\n#b#i2631612:# #t2631612:#\r\n#i2631614:# #t2631614:#\r\n#i2631613:# #t2631613:##k", 4, 9010010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n需要注意的是，所有礼物#e#r每个世界只能领取一次#k#n！", 4, 9010010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n#e※ 活动时间\r\n - 2020年8月4日23点59分为止#n", 4, 9010010, true, false)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose()
                                        }
                                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500947.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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