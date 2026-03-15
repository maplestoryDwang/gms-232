var status = -1;

function start(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.sendOk("Really? It's an urgent matter, so if you have some time, please see me.");
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose()
        } else {
            cm.askYesNo("现在你的强大了许多，我有一件事情想找你帮忙，你是否愿意听听？")
        }
    } else {
        if (status == 1) {
            cm.sendNext("故事发生在蘑菇王国，具体的事情我也不太清楚。但是好像很紧急。")
        } else {
            if (status == 2) {
                cm.sendNext("我不知道事情的细节，所以想找你帮帮忙，你可能会节省更多的时间帮助蘑菇王国，我送你一封信，请你把它交给门卫。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v4032375# #t4032375#")
            } else {
                if (status == 3) {
                    cm.gainItem(4032375, 1);
                    cm.forceStartQuest();
                    cm.askYesNo("如果你现在想去蘑菇城堡的话，我可以送你去。你确定要去吗？")
                } else {
                    if (status == 4) {
                        cm.warp(106020000);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    status++;
    if (c != 1) {
        if (b == 1 && c == 0) {
            status -= 2
        } else {
            cm.dispose();
            return
        }
    }
    if (status == 0) {
        cm.sendNext("嗯？这个从转职教官那里得来的信件吗？")
    } else {
        if (status == 1) {
            cm.sendNextPrev("我看看……。")
        } else {
            if (status == 2) {
                cm.sendNextPrev("好吧，既然你有转职教官的推荐信，我想你是一个很棒的人，很抱歉我没有自我介绍，我是包围蘑菇城堡的卫兵，正如你所看到的，这里是我们暂时的藏身之地，我们的情况很糟糕，尽管如此，欢迎你来到蘑菇王国！")
            } else {
                if (status == 3) {
                    cm.forceCompleteQuest();
                    cm.gainItem(4032375, -1);
                    cm.forceStartQuest(2312);
                    cm.dispose()
                }
            }
        }
    }
};