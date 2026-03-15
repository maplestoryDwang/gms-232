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
            cm.sendNormalTalk_Bottom("那么拜托你告诉我，女生通常都喜欢什么样的信呢？请大家给我一个改正错误的机会吧！", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，这个嘛……首先最好不要说什么‘我是个粗鲁的男人’这种虚张声势的话。", 37, 1530120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是啊，是啊！情书就应该让人感觉到纯粹和浪漫。", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("而且，最后还要有能撼动女人内心的感人语句。", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#呃呃……光听你们说我一点都不明白。有没有样本可以给我看看啊？", 37, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("这个嘛，你去阅览室看看那些浪漫的爱情小说怎么样？说不定会有帮助的。", 37, 1530110, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("啊，这办法不错！#h0#，你可以去阅览室帮我找找能派上用场的爱情小说吗？有的话就帮我拿回来。我得呆在这儿写检查。", 37, 1530140)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("那就拜托你啦。\r\n\r\n#b（前往阅览室，去寻找弗朗西斯委托的爱情小说吧。）#k", 37, 1530140, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32769, "");
                                            cm.dispose();
                                            cm.warp(330001200, 0)
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
            cm.sendNormalTalk_Bottom("转校生同学还是那么忙啊。来这儿有什么事吗？", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("爱情小说？我当然读过啦。现在我的手脚都成这副样子了，自然没法再读……不过这个世界的女孩子们好像都挺喜欢这种东西的。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32769, "");
                    cm.forceCompleteQuest(32769);
                    cm.dispose()
                }
            }
        }
    }
};