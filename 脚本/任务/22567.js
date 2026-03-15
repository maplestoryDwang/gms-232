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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22567.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(拿出#p2012034#，把搜集到的成长促进剂放了进去。)", 0, 2012034, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(将#p2012034#推进孔内，使其变回了原来的状态。)#k \r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 15484 exp ", 0, 2012034, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(15484);
                    cm.forceCompleteQuest(22567);
                    cm.updateInfoQuest(22606, "564=2;565=2;567=2");
                    cm.sendNormalTalk("#b唉……因为是临时成员，我还以为会很容易呢。没想到比我想象的难得多。不过感觉像个秘密团体，还挺有意思的。你说呢？", 3, 2012034, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4034070, -1);
                        cm.sendNormalTalk("很有趣吧，主人。但是这个团体到底要把成长促进剂用在什么地方呢？", 5, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b这，这个么。这个药是用在植物上的，不知道对动物有没有用…………", 3, 2012034, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？等等，主人，你说我是动物？", 5, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b人类不也是动物吗？哈哈哈。", 3, 2012034, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不过我还是很难接受……哼，好吧，这次就算了", 5, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b他们也许是想用成长促进剂来促进农作物的生长吧？农场经常会在地里施肥，提高粮食的产量。", 3, 2012034, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("哦，是吗？粮食多了的话，就没人挨饿了，那很好啊。那是个做好事的团体吗？", 5, 1013000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b嗯，好像是这样的。", 3, 2012034, true, false)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("要去废都吧？", 2, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.warp(103000000, 2, false)
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
};