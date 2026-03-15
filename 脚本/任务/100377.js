var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(100377, "tuto");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.sendNormalTalk("#e#h0##n！\r\n在#e#b满月鬼怪夜市#k#n看的怎么样？", 0, 9062229, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我还怕你拿着鬼怪铜币去#b加鲁家杂货店#k呢！哈哈！", 0, 9062229, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("加鲁那小子对铜币不感兴趣，只有给他#r鬼怪荞麦蒟蒻#k，他才会给你东西。", 0, 9062229, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("每当你用我的鬼怪棒收集了#b200#k个#b鬼怪铜币#k，我就会给你一个#r鬼怪荞麦蒟蒻#k。", 0, 9062229, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("所以，只要将今天的鬼怪铜币收集完以后，记得随时来找我！", 0, 9062229, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(100377, "tuto=1");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function action1(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getNumberFromQuestInfo(100372, "coin");
            if (e >= 200) {
                var d = Math.floor(e / 200);
                cm.addNumberForQuestInfo(100372, "coin", -d * 200);
                cm.forceCompleteQuest(100377);
                cm.sendNormalTalk("已发放" + d + "个满月荞麦蒟蒻，快去看看你的背包吧！", 0, 9062229, false, false);
                cm.gainItem(4310276, d)
            } else {
                cm.sendNormalTalk("还要再用#b#e盖子的鬼怪棒#k#n收集" + (200 - e) + "个鬼怪铜币才能领取#r满月荞麦蒟蒻#k！", 0, 9062229, false, false)
            }
        } else {
            if (status === a++) {
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100377.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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