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
            cm.sendNormalTalk("昨晚你是不是去了药材室？", 2, 2440009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("药，药材室？我，我昨天很早就在宿舍里睡觉了。干，干嘛用那种眼光看着我？是真的！我，我，我昨天连药材室附近都没去过！", 0, 2440009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯~是嘛？昨晚真没去过药材室是吧？", 2, 2440009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("当，当，当然！我还要继续修炼，你不要妨碍我。", 0, 2440009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(直觉告诉我武旦肯定是犯人，但是因为没有证据所以也不好定论……对了，如果是犯人肯定还会回到现场的。我潜伏在#b药材室#k里，就肯定能抓到回到现场的犯人。)", 2, 2440009, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41163, "");
                                cm.updateInfoQuest(41163, "");
                                cm.forceStartQuest(41163, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41163.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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