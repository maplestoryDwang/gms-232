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
            cm.sendNormalTalk("它们比我们想象中的弱多了。看来传闻有点夸大了。", 0, 9390258, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("虽然击退了#o9390808#，但事情好像并没有就此结束。刚刚我接到报告，好像又发现了其他群体。你这次也会帮我的吧？", 0, 9390258)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#e#o9390811##k#n好像在#b#k#m865020100##k#n。我们这次也来打赌，看谁先击退#b#e30只#k#n吧！我先到#m865020100#等着你！", 0, 9390258, false, true)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17627.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这些家伙的抵抗好像比刚刚更强了。", 1, 9390259, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这样不行。就这样放走他们的话，待会儿肯定会有更多的家伙出现的。我们追击吧。我先出发去#m865020200#，你快点跟上。", 1, 9390259, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你干什么呢，快去追击啊。", 1, 9390259, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("等会。我有不好的预感。", 3, 9390259, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不好的预感？", 1, 9390259, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我觉得这些家伙的抵抗太弱了。", 3, 9390259, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你什么意思啊。应该抓住机会，横扫它们。", 1, 9390259, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("但是……", 3, 9390259, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("快走吧！！", 1, 9390259, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17627);
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
};