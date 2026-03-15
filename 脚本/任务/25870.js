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
            cm.sendNormalTalk("爆莉萌天使，真不好意思，我有个小小的请求。", 0, 3000000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你说吧，是什么？", 2, 3000000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("随着保护罩被强化，保护罩内部的那些幽灵大部分都死掉了。但还有一些厉害的幽灵虽被削弱，却还留在那里。得有人去消灭它们。", 0, 3000000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("唉……还没结束啊。好吧，我该去哪里？", 2, 3000000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("狂龙战士和骑士团团员们已经出发了。你到北侧去吧，可以吗？#r(接受后将立即移动到相应地图。任务失败时，请重新开始该任务。)#k", 0, 3000000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(25870, "");
                                cm.dispose();
                                cm.warp(940010080, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25870.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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