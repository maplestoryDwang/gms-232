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
            cm.sendNormalTalk("你那个#b好主意#k是指什么？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b朋友#k。\r\n就由我们来做吧。", 4, 9062243, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？怎么做？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("他不是说看到人类举行的#b派对#k，所以想要朋友的吗？", 4, 9062243, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们也办一个#b派对#k吧。\r\n让他通过愉快的派对气氛，感受到#b友情#k。", 4, 9062243, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这样行得通吗……？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这可是默默奉献了一辈子后留下的灵魂呀。\r\n绝不能就这样被假面绅士吸去。", 4, 9062243, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("这比给#b补丁心脏#k，#b填满棉絮的大脑#k要好多了。", 4, 9062243, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo("要举行派对就不能少了#b蛋糕和饮料#k。\r\n#i4036619##b#t4036619##k可以从#b南瓜田1#k的#r巨型南瓜#k中获得， \r\n#i4036620##b#t4036620##k可以在#b南瓜田2#k的#r南瓜骑士#k那里获得。\r\n你可以去找这些材料吗？", 4, 9062243)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(100450, "");
                                                cm.OnStartNavigation(993175430, 0, "pt_go993175400", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100450.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("都找到了吗？", 4, 9062243)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(100450);
                cm.sendNormalTalk("好的。有这些就能准备派对了。", 5, 9062243, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4036620, -10);
                    cm.gainItem(4036619, -10);
                    cm.sendNormalTalk("你应该会做饭吧？", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("当然了！", 5, 9062243, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("重新返回客房3去吧。", 5, 9062243, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(993175430, 0, false)
                            }
                        }
                    }
                }
            }
        }
    }
};