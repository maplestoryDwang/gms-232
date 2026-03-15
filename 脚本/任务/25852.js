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
            cm.sendNormalTalk("我暂时从灵魂戒指里溜出来观察了一下四周，发现一些奇怪的祭司。", 0, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("奇怪的祭司？", 2, 3000018, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("就是那时在东侧圣殿附近想对圣物做手脚的那些祭司。好像有些和他们气质相似的家伙跑到村庄后面去了。追上去看看吧。", 0, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那帮家伙聚集在一起绝不会有什么好事，一定是在策划什么阴谋。让我们仔细找找，看看有没有什么线索。", 0, 3000018, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你的话很没可信度额……", 2, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("你到底去不去？#r(接受后将强制移动到相关地图。移动失败时，请放弃任务重新开始。)#k", 1, 3000018)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(25852, "");
                                    cm.dispose();
                                    cm.warp(940010000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25852.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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