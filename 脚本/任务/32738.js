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
            cm.sendNormalTalk_Bottom("#face0#噢哈哈，早上好啊！#h0#。在新城市适应得怎么样了？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？还很陌生？这可糟糕了！", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("真是的，作为神兽国际学校的管理者，我不能坐视不理。那就让我来亲自为你介绍一下这座城市吧。今天放学之后在学校正门不见不散！", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不是，我还什么话都没说呢……喂？ 喂？", 57, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("自己要说的话说完就把电话挂了……真是个令人头疼的小姐。还是先去学校吧。", 57, 1530060, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32738, "");
                                cm.updateInfoQuest(32720, "sms=12");
                                cm.updateInfoQuest(32719, "sms=1;gal=0;add=1");
                                cm.dispose()
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