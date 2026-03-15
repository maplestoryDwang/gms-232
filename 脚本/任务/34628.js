var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face0#那些家伙一定藏在这里面……感觉越深入内部，警戒越森严……", 37, 3001251, false, true, 1)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face1#接下来最好不要引起任何骚乱，这样才能更有效率。", 37, 3001251, true, true, 1)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("#face1#嗯，我会努力试试看的。虽然不太符合我的个性……", 37, 3001270, true, true, 1)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("#face0#等结束这项任务……除了精疲力竭，说不定还会完全融化……滴答滴答……", 37, 3001251, true, true, 1)
                    } else {
                        if (status === b++) {
                            cm.askAcceptDecline_Bottom("#face0#啊啊，不如现在就出发吧？额额，还是有点害怕。我腿抖……\r\n\r\n#r※ 接受时，将自动前往潜伏任务区域。", 37, 3001251, 1)
                        } else {
                            if (status === b++) {
                                cm.playerMessage(5, "避开敌人的视线，前往其他地区。");
                                var a = cm.getEventManager("魔链影士_战斗5_避开视线");
                                a.startInstance(cm.getPlayer(), cm.getMap());
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34628.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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