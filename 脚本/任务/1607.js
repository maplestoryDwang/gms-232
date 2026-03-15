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
            cm.sendNormalTalk("果然不出我所料，就知道你会来。虽然比我想象的晚了点。", 1, 9073001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(……早知道不来了，这女人真奇怪。) 你还有什么话要说来着？", 3, 9073001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("据我之前认识的遗迹发掘现场里的#b发掘队长杉峰#k说，这附近发现了奇怪的门。你来的路上见过吗？", 1, 9073001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没有啊，来的路上没见过那样的东西。", 3, 9073001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("最近遗迹发掘地的怪物不知怎么的，突然变得很凶残，开始攻击附近的居民。我觉得跟那道门有些关系。", 1, 9073001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯，说不定真是那样。我也觉得有点巧合。", 3, 9073001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("你愿意跟我一起去看看吗？我对那道门可是相当好奇呢。不过我是路痴……我已经跟杉峰打听过去那里的路线，我们一起去的话，肯定很快就能找的的。", 0, 9073001)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("那么现在就出发去#m102040600#吗？", 0, 9073001)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那么现在就去吧。", 0, 9073001, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(1607, "");
                                                cm.warp(102040600, 4, false);
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