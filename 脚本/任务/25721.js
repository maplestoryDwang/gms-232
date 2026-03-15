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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25721.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("嗯，从什么开始说起好呢？\r\n#b#L0#现在我该做什么？#l\r\n#L1#我想了解一下先代狂龙战士。#l\r\n#L2#我想了解一下先代狂龙战士之剑。#l\r\n#L3#我想听听关于这个世界的事。#l\r\n#L4#头好疼，现在什么也不想听。#l", 0, 3000001)
        } else {
            if (status == a++) {
                if (b == 0) {
                    cm.sendNormalTalk("在不同时代诞生的狂龙战士的命运有很大差别。和平时代的狂龙战士要背负的命运和如今这种艰难时代的狂龙战士要背负的命运自然不一样。为了成为诺巴最强战士，你需要坚持不懈的修炼。这个过程很辛苦，但是命运会指引你前行的。\r\n在达勒摩尔几乎占领了格兰蒂斯全境的情况下，我们诺巴族是唯一的希望。不能放任达勒摩尔继续将格兰蒂斯的生灵玩弄于股掌之上。\r\n尽管达勒摩尔是生命之超越者，拥有强大的力量，但剩余的人们齐心协力，再加上其他超越者的帮助，我们就有战胜他的胜算。狂龙战士，现在我们非常需要你的力量。", 0, 3000001, false, true)
                } else {
                    if (b == 1) {
                        cm.sendNormalTalk("达尔莫尔占领了平民翼人的首都阿波利斯，先代狂龙战士曾想要守护我们的首都赫里希安，但麦格纳斯发动突袭，占领了赫里希安，并在那里埋下了陷阱。狂龙战士一直奋战到最后，并与麦格纳斯的庞大军团一同离世。", 0, 3000001, false, true);
                        status = -1
                    } else {
                        if (b == 2) {
                            cm.sendNormalTalk("看样子你听说过关于先代狂龙战士之剑的传闻。我也不清楚是多久前的事，不知从何时开始，狂龙战士就使用着一把名叫“凯瑟利安”的巨剑。据说这把剑是古代诺巴的伟大铁匠打造的，威力相当强大。但先代狂龙战士在赫里希安去世时，凯瑟利安也一起失踪了。", 0, 3000001, false, true);
                            status = -1
                        } else {
                            if (b == 3) {
                                cm.sendNormalTalk("你想了解格兰蒂斯的事？这个问题很奇怪啊。你应该知道格兰蒂斯里生活着树精、高等精灵、阿尼玛、诺巴等种族吧？高等精灵族和树精族在格兰蒂斯是人口数量最多的主要种族。\r\n不过他们虽然同宗同源，彼此之间却战争不断，后因翼人草菅人命，愤怒的高等翼人王子吉伦·达尔莫尔觉醒为了生命超越者。\r\n达勒摩尔以极强大的力量消灭了树精族，并控制了阿尼玛族。现在麦格纳斯作为达勒摩尔的手下，正占领着我们的首都赫里希安。", 0, 3000001, false, true);
                                status = -1
                            } else {
                                if (b == 4) {
                                    cm.sendNormalTalk("在不同时代诞生的狂龙战士的命运有很大差别。和平时代的狂龙战士要背负的命运和如今这种艰难时代的狂龙战士要背负的命运自然不一样。为了成为诺巴最强战士，你需要坚持不懈的修炼。这个过程很辛苦，但是命运会指引你前行的。", 0, 3000001, false, true)
                                }
                            }
                        }
                    }
                }
            } else {
                if (status == a++) {
                    cm.sendNormalTalk("在达勒摩尔几乎占领了格兰蒂斯全境的情况下，我们诺巴族是唯一的希望。不能放任达勒摩尔继续将格兰蒂斯的生灵玩弄于股掌之上。", 0, 3000001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("尽管达勒摩尔是生命之超越者，拥有强大的力量，但剩余的人们齐心协力，再加上其他超越者的帮助，我们就有战胜他的胜算。狂龙战士，现在我们非常需要你的力量。", 0, 3000001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu("嗯，从什么开始说起好呢？\r\n#b#L0#现在我该做什么？#l\r\n#L1#我想了解一下先代狂龙战士。#l\r\n#L2#我想了解一下先代狂龙战士之剑。#l\r\n#L3#我想听听关于这个世界的事。#l\r\n#L4#头好疼，现在什么也不想听。#l", 0, 3000001)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这么短的时间里听了太多内容，确实令人头疼。那么下次有机会再跟你说说你想知道的事吧。", 0, 3000001, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("在你开始踏上狂龙战士的命运征途之前，我给你几句忠告吧。虽然你从现在开始要背负狂龙战士的命运，但与你的责任相比，现在你的实力非常不足。", 0, 3000001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("我给你几瓶药水。这些药水可能不值几个钱，但对于你迈出作为狂龙战士的第一步，会有很大帮助。", 0, 3000001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("祝你好运。愿先代狂龙战士和古龙的庇护与你同在……", 0, 3000001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(25721);
                                                cm.gainExp(800);
                                                cm.gainItem(2000016, 30);
                                                cm.gainItem(2000017, 30);
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};