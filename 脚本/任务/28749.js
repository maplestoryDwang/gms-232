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
            cm.askYesNo("我仔细想了想，那帮外星人会绑架市民估计是不想让目击者把它们的存在传播出去！我们得救出人质，告诉大家这一消息！", 0, 9201050)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是时候发挥你的能力了！去把那些老百姓救出来吧。虽然我也不知道该怎么去救他们，但你可不能放弃啊！", 0, 9201050, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你说你是在基地附近看到他们的。这倒是让我想起了，有些市民说他们目击到田野上有奇怪的矩形容器。我猜那些东西其实就是囚笼！你快去看看能不能把人从那里头弄出来！", 0, 9201050, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("别忘了它们只能用来救人！", 0, 9201050, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(28749, "0");
                            cm.forceStartQuest(28762, "0");
                            cm.forceStartQuest(28763, "0");
                            cm.forceStartQuest(28764, "0");
                            cm.forceStartQuest(28765, "0");
                            cm.forceStartQuest(28766, "0");
                            cm.forceCompleteQuest(28762);
                            cm.forceCompleteQuest(28763);
                            cm.forceCompleteQuest(28764);
                            cm.forceCompleteQuest(28765);
                            cm.forceCompleteQuest(28766);
                            cm.forceForfeitQuest(28762);
                            cm.forceForfeitQuest(28763);
                            cm.forceForfeitQuest(28764);
                            cm.forceForfeitQuest(28765);
                            cm.forceForfeitQuest(28766);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("还等什么呢？要是再有人被外星人抓去当奴隶，那就没人给我投票了！", 0, 9201050, false, false);
            cm.dispose()
        }
    }
};