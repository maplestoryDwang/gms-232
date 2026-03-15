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
            cm.forceStartQuest(32351, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32351.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哎，#h0#？那是从金银岛带回来的工具吗？", 1, 1520049, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你来得正好。我正好想要擦拭港口的烟灰。里面会不会有什么好用的东西啊？", 1, 1520049, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("太好了，有这个就行了。", 1, 1520049, true, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(4033901, -1);
                        cm.forceCompleteQuest(32351);
                        cm.gainExp(350000);
                        cm.dispose()
                    }
                }
            }
        }
    }
};