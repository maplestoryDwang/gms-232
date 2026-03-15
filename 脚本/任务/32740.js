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
            cm.sendNormalTalk_Bottom("喂，同学！你看见我们希纳斯小姐了吗？", 37, 1530360, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("唉……这下可糟了。放学后，在校园里怎么找都没找到，到底会去哪儿呢。今天可是有个重要的晚餐呢。", 37, 1530360, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("该不会是你把我们家善良的希纳斯小姐给骗走了吧？怎么看都觉得有点可疑。\r\n\r\n#b（希纳斯会在哪儿呢？给希纳斯打个电话吧） ", 37, 1530360, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32740, "");
                        cm.getTopMsgFont("打开智能手机, 就可以给希纳斯打电话了. ", 3, 20, 20, 0);
                        cm.updateInfoQuest(32719, "gal=0;sms=1;add=0");
                        cm.dispose()
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