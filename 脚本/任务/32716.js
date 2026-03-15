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
            cm.sendNormalTalk_Bottom("#face0#呃……怎么办呢？对不起！都怪我故意和你那么亲密才给你惹来了麻烦。", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那个，让我跟着去后院是什么意思？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你也和我一样，被那个小流氓给盯上了……自从那个家伙出现之后，我不知道受了多少欺负。", 37, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("所以说，让我去后院，是打算和我决斗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是啊。那小子和你一样，也是一名转校生。\r\n从小学开始就是全国有名的打架狂。", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("像我这种经过无数拳头洗礼的人还能勉强挨他三下，不过像你这种手无缚鸡之力的人估计被他拳头扫一下就该不省人事了吧？", 37, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我在这个世界本不应该使用力量的啊……", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("嗯？你说什么？", 37, 1530140, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("没什么。那我就去看看呗。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你真打算去？要去后院的话，得先从正门出去，然后走到建筑最右端拐过去就行了……去了之后你一定要先道歉，跟他说你错了，知道吧！那样的话就能少挨几下了。\r\n\r\n#b（从正门出去，前往后院吧。）#k", 37, 1530140, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("如果他要打你的话，你一定要跟他求饶，说“我错了，对不起，都怪我”。", 37, 1530140, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(32716, "");
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