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
            cm.askYesNo("反正我们两人在这里怎么说也说不出答案来。我整理一下扫尾工作，你可以先去向首领大人报告吗？", 0, 9390235)
        } else {
            if (status === a++) {
                cm.forceStartQuest(17650, "");
                cm.sendNormalTalk("那么就拜托你了。我也马上就跟去。", 0, 9390235, false, true)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17650.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("首领大人，海盗讨伐队现在归航了。", 2, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("快来。看到你没事我可真高兴。看你的表情，任务很好地完成了啊。我说的对吧？", 0, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，你说对了。有了莱文的卓越指挥我们比想象中更轻松地击退了敌人。", 2, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯，那真是万幸。多亏了你们，现在海上交易也会进一步好转了。", 0, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("首领大人你的脸色不太好，是因为海本王国的原因吗？", 2, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你听说了吗？你不提我还正在为那个头疼呢。我真是琢磨不出这又会出什么事儿。", 0, 9390203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(17650);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};