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
            cm.sendNormalTalk_Bottom("#face0#剩下的敌人就只有一个……只要击倒负责守卫本能寺的泷川一益，本能寺就彻底掌握在我们手中了。而且，只要击倒一益，敌人就会彻底放弃抵抗，我们就能正式赢得这场战斗的胜利了。", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#剑斗，你愿意接受讨伐一益的任务吗？", 37, 9130000)
            } else {
                if (status === a++) {
                    cm.OnStartNavigation(807050503, 0, "out00", 0);
                    cm.sendNormalTalk_Bottom("#face0#一益就在本能寺的本堂之中。他应该已经知道大限之期即将到来了。快前往本堂，去击倒一益吧！", 37, 9130000, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57160, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57160.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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