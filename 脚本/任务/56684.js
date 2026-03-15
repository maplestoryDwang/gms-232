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
            cm.askYesNo("空中时常有陨石坠落，所以你见到陨石肯定不觉得稀奇。但是！如果我说用这陨石可以制作出#i4001839##b#t4001839##k，你能相信吗？\r\n虽然还需要进一步研究，不过……如果#h0#你愿意帮忙，相信我就能更快地进行研究了，你要挑战吗？", 5, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("给，请在20分钟内好好保管这#i3994986##b#t3994986##k。20分钟后，如果它变为#i3994987##b#t3994987##k，请再来找我。", 0, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(56684, "");
                    cm.sendNormalTalk("好了，那我就等着#i3994987##b#t3994987##k的生成吧！", 0, 9010000, true, false);
                    cm.gainItem(3994986, 1);
                    cm.每日任务_制作星星()
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/56684.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你这么快就把#i3994987##b#t3994987##k拿来了？让我看看……噢！很完美呢？那我就按照约定，为你制作#i4001839##b#t4001839##k吧。", 0, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……\r\n呼~ 我制作出了36个#i4001839##b#t4001839##k！", 0, 9010000, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(56684);
                    cm.updateInfoQuest(56684, "DayN=2020042601");
                    cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i4001839:# #t4001839:#\r\n多亏了你，研究好像有了进展。每天最多能挑战5次，你可以重新来找我~", 0, 9010000, true, false);
                    cm.gainItem(3994987, -1);
                    cm.gainItem(4001839, 36)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};