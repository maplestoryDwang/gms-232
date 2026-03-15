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
            cm.sendNormalTalk_Bottom("镰鼬！你有没有什么办法可以将变成蛰居者的守护者解救出来？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#唔……首先呢，需要想个引诱他的法子。不如你用糖膏之类的零食来引诱他试试？\r\n没有什么能比用食物来让人打开心扉更赞的啦。", 37, 9111003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("零食？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#这前面的饭店里有卖很多美味的食品。我最近完全迷上零食了。\r\n你去买几个糖膏吧。", 37, 9111003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯……哪个方法更好呢……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#买#i2022014# #t2022014#怎么样？甜丝丝的特别好吃。\r\n去的话顺便帮我带2个。", 37, 9111003, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58785, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58785.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("镰鼬，我买来#t2022014#了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#好棒！健二做菜的手艺就是好。", 37, 9111003, true, true);
                cm.gainItem(2022014, -1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58785);
                    cm.dispose()
                }
            }
        }
    }
};