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
            cm.sendNormalTalk_Bottom("#face0#（虽然可以感觉到……但这里看不到高等翼人的痕迹。搜集一些自己想要的情报，然后离开这里吧。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#（首先，必须知道现在格兰蒂斯的情况如何。那个事故之后，好像过去了很长时间……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#（黑市应该就在荒蛮终点站的什么地方。这里是非常危险的地方，交易的一定是有用的情报。到那里去看看吧。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face2#要到黑市去看看吗？\r\n\r\n#b（接受时切换地图。）", 37, 3001500 + cm.getPlayer().getGender())
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(34950, "returnMap=402000000");
                            cm.dispose();
                            cm.warp(402090015, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34950.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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