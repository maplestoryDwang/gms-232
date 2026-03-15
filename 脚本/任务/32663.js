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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32663.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32663.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#e<Episode I：白魔法师>#n怎么样？体验冒险岛世界中实际存在的其他人的人生，是个不错的经历吧？现在重新回到现实之中吧。", 4, 2500002, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(32666, "ch1", 1);
                cm.addNumberForQuestInfo(32666, "clear", 1);
                cm.forceCompleteQuest(32663);
                cm.gainExp(584277);
                cm.sendNormalTalk("怎么样？你想试着挑战其他书吗？读完其他书之后回来找我，我会送你一份礼物。", 4, 2500002, true, false);
                cm.gainItem(1142646, 1);
                cm.gainItem(4001832, 300);
                cm.gainItem(2439170, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};