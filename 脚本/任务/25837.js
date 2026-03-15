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
            cm.sendNormalTalk("下面就通过实战来学习重生的相关内容吧。", 4, 3000018, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("实战？怎么这么突然？", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("要是光说说就能理解所有东西，世上的事情就太简单了。你先去消灭怪物练练手吧。", 4, 3000018, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("冷不丁地来这一句，什么跟什么嘛！", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("简单得很。就是你去挑战在这附近乱晃的那些怪物，练习如何使用你获得的力量。只要#b成功重生5次#k就行，不会花多长时间。好啦，快去~！", 4, 3000018, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你说话算话哦……唉，不管啦，硬着头皮上吧。", 17, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(25837, "");
                                    cm.forceCompleteQuest(25837);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25837.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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