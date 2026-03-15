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
            cm.sendNormalTalk("经过漫长的旅程，你已经到达力量的巅峰…你在追求力量的同时，有没有迷失前进的方向呢？", 4, 2140001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("说不定你不仅能活用你的力量，还能趁此机会变得更强。\r\n如果你有意向，请来时间神殿找我吧。\r\n\r\n#b(如果接受的话，将移动到时间神殿进行#e5次转职#n。)#k", 4, 2140001)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(1460, "");
                    cm.updateInfoQuest(1480, "startTime=20/03/04/19/21");
                    cm.dispose();
                    cm.warp(270010111, 1, false)
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

function end(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(1460, "see");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.askMenu("#h0#…………你的事迹我已经早有耳闻了。\r\n\r\n我今天喊你来，是为了告诉你这个世界正在发生奇怪的事情。\r\n\r\n#b#L0#奇怪的事情？", 4, 2140001)
        } else {
            if (status === a++) {
                cm.askMenu("不知道你有没有听说过构成这个世界的能量--#e艾尔达#n？\r\n\r\n#b#L0#艾尔达？", 4, 2140001)
            } else {
                if (status === a++) {
                    cm.askMenu("艾尔达不停地重复着诞生与消亡，构成并支撑着这个世界。不仅是冒险岛世界，其他次元的世界中也充斥着艾尔达。从你刚刚踏上这个世界开始，无论是泥土和树木，还是光明和黑暗中… 都存在着艾尔达。\r\n\r\n#b#L0#看来艾尔达真的很重要啊。", 4, 2140001)
                } else {
                    if (status === a++) {
                        cm.askMenu("那是当然。如果没有艾尔达，这个世界根本不会存在…不过，从不久前开始，我发现艾尔达正在逐渐消失。\r\n\r\n#b#L0#艾尔达正在消失？", 4, 2140001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看来你还不太相信。除非亲眼所见，不然确实令人难以置信。百闻不如一见，等你亲眼看到，你就明白了。", 4, 2140001, false, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("如果你愿意，我会引导你短暂观察下艾尔达的流动。好了，请闭上眼……\r\n\r\n#b(如果接受的话，请根据旁观者的引导，集中精神。)", 4, 2140001)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(450000200, 0, true)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function action1(d, c, b) {
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
            cm.askMenu("怎么样，亲眼看到艾尔达的流动后你有什么感想？\r\n\r\n#b#L0#我和它进行了对话。", 4, 2140001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("！！这是真的吗，你和艾尔达对话了？\r\n\r\n我终身都在观察艾尔达的流动，但却从未听过它说话。", 4, 2140001, false, true)
            } else {
                if (status === a++) {
                    cm.askMenu("艾尔达愿意和你对话……\r\n\r\n看来你比我想象中的还要强大。艾尔达希望能赋予你力量，让你守护它们。\r\n\r\n#b#L0#我该怎么做才能获得更强的力量呢？", 4, 2140001)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(1460);
                        cm.sendNormalTalk("请先去找#b#p2140000##k。他会判断你是否可以承受来自其他空间的力量。#k", 4, 2140001, false, true)
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(270000000, 0, "", 0);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};