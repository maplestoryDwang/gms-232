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
            cm.sendNormalTalk("你问这里是哪里？你连这里是哪里都不知道就跟来了吗？\r\n这里是通往#b妖精学院艾利涅#k的森林深处。", 0, 1500010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("妖精学院艾利涅？", 2, 1500010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没错，#b艾利涅#k是多年来教导妖精孩童们魔法的一种教育机构。", 0, 1500010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那为什么要藏在这种森林深处啊？", 2, 1500010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看你的表情，还真是一无所知的样子，你知道#b魔法密林#k原本曾是妖精的村庄吗？在数百年前和黑魔法师爆发过一场大型战争之后，人类进来开垦了村庄，便有了现如今的#b魔法密林#k。\r\n", 0, 1500010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那么魔法密林外面也有妖精生活的地方咯。", 2, 1500010, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("虽然也有一些愿意接受人类的妖精，但还是有很多并非如此相对保守的妖精，#b妖精学院艾利涅#k也曾如此。他们拒绝与人类为伍，独自消失在夜的领域中，而且为了拒绝外人的出入，他们还建在了湖的对面。\r\n", 0, 1500010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你的意思是说魔法师库迪被那些艾利涅的妖精生擒了吗？", 2, 1500010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("没错，我也完全没有搞明白这到底是怎么一回事，虽然#b汉斯#k和我曾经多次尝试去联系，但他们很讨厌我们，并不听我们说话。所以我们需要你的帮忙，\r\n不过#b#h0##k，你游泳游得好吗？", 0, 1500010)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你先游到湖对面怎么样？相信你应该能做到！鼓起勇气跃入水中吧！\r\n#b(度过右边的湖。)#k", 0, 1500010, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32102, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39557.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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