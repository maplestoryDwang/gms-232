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
            cm.askMenu("嗯？有什么事吗，小不点？又来帮爸爸干活吗？嗯？你去教训了#o1210111#？哎呀！没受伤吧？\r\n#b#L0#没事！那些家伙不算什么。#l", 0, 1013103)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("呼……那就好。但是这样会很危险，以后你要小心。啊，对了……你来的正好。你能帮爸爸跑一趟吗？", 0, 1013103)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(22510, "");
                    cm.sendNormalTalk("因为#o1210111#，本来早就应该送过去的#t4032453#可能不能按时送过去了。你去给#b#m100000000##k的#b#p1012003##k送过去吧。", 1, 1013103, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4032455, 1);
                        cm.sendNormalTalk("刚才给你的信里已经说得很明白了，你只要把东西送过去就行。本来应该我去的，但你能战胜危险的猪猪，我想让你去应该也没问题了。", 1, 1013103, true, true)
                    } else {
                        if (status === a++) {
                            cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/13/0"])
                        } else {
                            if (status === a++) {
                                cm.OnStartNavigation(100000000, 1, "1012003", 22510);
                                cm.teachSkill(22000015, 10, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22510.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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