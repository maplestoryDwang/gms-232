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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32698.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32698.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#e<Episode IV：雪原吟游诗人>#n怎么样？\r\n一定要记住，在我们不知道的时候，仍然有无数的英雄正在为世界而牺牲。和平从来不是轻易取得的。", 4, 2500002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("怎么样？你想试着挑战其他书吗？读完其他书之后回来找我，我会送你一份礼物。", 4, 2500002, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32698);
                    cm.sendNormalTalk("嗯？有问题？", 4, 2500002, true, true);
                    cm.gainItem(1143065, 1);
                    cm.gainItem(4001832, 300);
                    cm.setNumberForQuestInfo(32666, "ch4", 1);
                    cm.addNumberForQuestInfo(32666, "clear", 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，你说的是传给生命超越者的那把#b竖琴#k啊。\r\n当时生命超越者去了女皇所在的圣地……谁知道呢，也许还留在圣地吧。", 4, 2500002, true, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};