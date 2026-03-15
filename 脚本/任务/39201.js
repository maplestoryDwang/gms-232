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
            cm.sendNormalTalk_Bottom("啊，你不是小软柿嘛！好久不见！\r\n我给你写了信，不知道你有没有收到。\r\n你的传闻在这里也传开了。", 36, 2155125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("话说，你是不是第一次到这里来？\r\n在离开原来的避难处后，我们就在这里定居了下来。\r\n怎么样？现在村庄规模已经挺大了吧？哈哈哈。", 36, 2155125, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("感情苏醒的机器人不断逃到这里，\r\n不知不觉就变得这么多了。\r\n于是，我要做的事情也变多了。", 36, 2155125, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("自从那可怕的飞艇掉落后，情况就更糟了。\r\n虽然不知道是什么原因，但时常会有怪物机器人出现，并抓捕我们。\r\n大家好像被拉入了黑色天堂。为什么会这样……？", 36, 2155125, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#g(！！突然从远处传来了巨响。)", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#fs22##e什么？究竟是什么声音？", 36, 2155125, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1");
                                    cm.forceStartQuest(39201, "");
                                    cm.gainExp(60623436);
                                    cm.updateInfoQuest(39201, "gExpCheck=1");
                                    cm.forceCompleteQuest(39201);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39201.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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