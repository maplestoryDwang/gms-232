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
            cm.sendNormalTalk("回来啦。如何？结界里面有什么吗？", 0, 9390236, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我没有往深处去所以也不太清楚。我只到了结界的入口就感到了非同一般的杀气就没再往里去了。", 2, 9390236, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("做得好。再往深处去如果发生什么事的话就麻烦了。好了，那我们回桑凯梅尔兹吧？", 0, 9390236)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17671, "");
                        cm.sendNormalTalk("好吧，赶紧回去吧。克莱尔也累了。", 2, 9390236, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我呢……就到入口就行了。因为我可不能碰见我父亲……", 4, 9390205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，那就那样吧。好了，走吧", 0, 9390236, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(865000000, 10)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17671.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("首领大人。", 2, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，你！", 0, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(17671);
                    cm.dispose()
                }
            }
        }
    }
};