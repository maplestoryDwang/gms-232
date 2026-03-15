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
            cm.sendNormalTalk("赶紧一起回桑凯梅尔兹吧。", 2, 9390237, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请稍等。我感觉到了什么。", 0, 9390237, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("感觉？你感觉到了什么啊？", 2, 9390237, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("说不上来……虽然不知道是什么，但是是种不祥的感觉。", 0, 9390237, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("特来敏小姐说感觉到什么，我也好像有所感觉似的。#h0#我们稍微查看一下四周如何？", 4, 9390202)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17669, "");
                                cm.sendNormalTalk("嗯，就看看吧。而且说是不祥的感觉，就这么走的话真是有点不踏实。克莱尔你是在哪儿感觉到的呢？", 2, 9390237, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好像就在这附近。其实从一开始我就感觉到了，那时还以为是因为西温和暗杀团员们的原因呢。", 0, 9390237, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那么就得以这为中心四周找找看看了。", 2, 9390237, true, true)
                                    } else {
                                        if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17669.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("是这里吗？这是……这好像是跟我原来见过的阿库旁多的结界是同种类的结界。", 2, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那样的话，从这进去就是另一个地方了吧。", 4, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17669);
                    cm.dispose()
                }
            }
        }
    }
};