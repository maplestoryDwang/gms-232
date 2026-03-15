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
            cm.sendNormalTalk("哦，英雄。你的等级提高得那么快，我都快认不出你来了。你有什么事吗？", 0, 1002104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在你勤奋修炼的时候，#p1201000#和我对你的过去和封印石进行了全方位的调查。不久之前，我们了解到一件非常有趣的事情。你知道专为孩子们生产玩具的村庄#m220000000#吗？", 0, 1002104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#m220000000#有两个管理时间的时间塔。两个塔分别对事件进行管理，使#m220000000#的时间最终得以停止下来。因为孩子们长大之后，就不再需要玩具了，所以那里的时间一直是停止不动的。", 0, 1002104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是其中一座时间塔好像由于某种原因坏掉了。#b#m220000000#也因此出现了空洞，人们可以通过空洞回到过去#k……有趣的地方就在这里。", 0, 1002104, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#p1201000#对去过过去的人带回的信息进行了综合整理，得出的结论是那个时代#b和英雄你所生活的时代很相似#k。服饰、物品以及环境…………那么，如果前往那里的话是不是也有可能得到有关封印石的信息呢？是吧？", 0, 1002104, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("所以，只要英雄你同意的话，我就马上将你送往太阳神之塔的#b#e#m222020400##n#k。请你去一趟过去。说不定你还能在那儿见到你认识的人呢。\r\n#e#b<如果接受将移动地图。>#n#k", 0, 1002104)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(21749, "");
                                    cm.forceCompleteQuest(21749);
                                    cm.gainExp(17730);
                                    cm.OnStartNavigation(300000000, 0, "", 21749);
                                    cm.dispose();
                                    cm.warp(222020400, 0, false)
                                }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21749.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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