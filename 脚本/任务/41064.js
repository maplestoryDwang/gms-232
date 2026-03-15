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
            cm.sendNormalTalk("(收到了一封没有接收人的信件。)", 1, 2420024, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这次又是谁的信？该不会又是找我借钱的吧？", 3, 2420024, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("多亏你上次冒充我的名字进行偷盗，现在整个阿里特安已经传得沸沸扬扬了，大家都以为幻影是个小偷。我承认我是个盗贼，但我从来不做那种小偷小摸的事情。", 5, 2420015, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过，看你的情况好像也是不得已。但是一码归一码，这样放过你有伤我的自尊。既然你冒用了我的名义，是不是该支付一些使用费呢？", 5, 2420015, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你藏在坛子里的50000金币，我就当做是使用费了。这次就到这里，下次我绝对不会饶你，给我小心点。拜拜~", 5, 2420015, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那就是说，那封信是幻影为了要骗我才寄给我的咯……嘿，竟然敢骗我？我们走着瞧，幻影。这次就当我失误，不过下一次该小心的应该是你。", 3, 2420024, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(41064, "");
                                    cm.forceStartQuest(41064, "");
                                    cm.forceCompleteQuest(41064);
                                    cm.gainExp(560000);
                                    cm.gainItem(4310085, 5);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41064.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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