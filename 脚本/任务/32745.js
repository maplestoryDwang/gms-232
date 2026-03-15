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
            cm.sendNormalTalk_Bottom("不过你们两个人在这里干什么呢？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我在给#h0#介绍一下学校周边的情况。#h0#，现在我们乘巴士去校外转转吧。", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("希纳斯小姐，你乘过巴士吗？", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("南哈特你也真是的，我又不是三岁的小孩子……乘个巴士有什么难的。好了，#h0#！我们快走吧。\r\n\r\n#b（前往巴士站台吧）#k", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.playerMessage(-1, "乘坐巴士可以前往其他地方. ");
                            cm.forceStartQuest(32745, "");
                            cm.dispose()
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