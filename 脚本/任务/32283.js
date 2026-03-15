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
            cm.sendNormalTalk("喂~ #h0#，你该不会是因为时间久了，而忘了我是谁吧？", 0, 1520012, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("提斯？你来这里做什么？", 2, 1520012, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，其实，我正好有事情来找赫丽娜，不过听到了一件让我比较在意的事情。不久前，在射手村里，不是发生了贵重宝石被盗事件嘛？因为有传闻说犯人是冒险家，所以，现在那里已经引起了骚动……", 0, 1520012, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("…….", 4, 1012100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("事实上，从很早以前开始，我就一直在追踪一个组织。而且，根据我的预感，偷窃宝石也是那个组织的所为。能够自由变换模样的#b变身术士#k就在那个组织里。", 0, 1520012, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那个叫变身术士的家伙居然变成一个冒险家的样子出现在我们面前，分明就是想让我们互相猜疑并产生分裂！", 0, 1520012, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("所以我想进行调查，不过一个人独自调查总归有点困难。你和我一起调查可以吗？只要你准备好，就可以立即出发。\r\n\r\n#b#e<接受后，立即移动到地图。>#n#k", 0, 1520012)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(32283, "");
                                        cm.dispose();
                                        cm.warp(931060200, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32283.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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