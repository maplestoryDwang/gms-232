var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003127, "oid=1", 178, 177, 3, 156, 206, 1, false, false);
            cm.sendNormalTalk("#ho#，你醒过来啦。哈哈… 所幸你掉在了沙子上…", 0, 3003127, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("额，坠落时受的伤… 啊，没什么，不用在意。现在只要考虑怎么从这个洞穴里出去就好了。", 0, 3003127, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(虽然担心卡奥的事，但现在好像没时间管这些了。)#k", 2, 3003127, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这里就是消亡旅途的最后一站… 安息洞穴。这洞穴的终点就是消亡旅途的终点。现在基本上到了。", 0, 3003127, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("虽然这里像迷宫一样复杂… 但是我知道通向洞穴出口的捷径。好了，跟我来吧。", 0, 3003127)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34115, "");
                                cm.forceCompleteQuest(34115);
                                cm.npc_LeaveField("oid=1");
                                cm.npc_LeaveField("oid=1");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
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