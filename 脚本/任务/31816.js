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
            cm.sendNormalTalk("你见过哈伦了吗？", 0, 3001000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这期间，我们要做的事情变得更加明确了。首先我们需要尽可能多的信息。穿越西北边茂密的森林地区，就能看到一个破旧的茅屋。", 0, 3001000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那里应该会有一位诺巴老人，人称贤者的#b#p3001002##k。", 0, 3001000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("平时是个没用的老头子，但我活了很长时间，拥有各种各样的智慧。紧急时刻我能帮得上忙。去找#b#p3001002##k获得建议吧。", 0, 3001000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("看样子你们关系不太好……", 2, 3001000, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("哼，我才懒得跟他搞好关系。咳咳，总之你去见见#b#p3001002##k吧。", 0, 3001000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你到了就说是#b#p3001000##k让你去的。还有，看他有什么反应，以后记得向我报告。", 0, 3001000, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(31816, "");
                                        cm.warp(401020100, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31816.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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