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
            cm.sendNormalTalk("小软柿，有紧急委托。\r\n#b消灭敌方机器人#k。\r\n只要消灭那些可怖的机器人就可以了。幸亏需要消灭的数量貌似并不多。", 0, 2155000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("要消灭的机器人如下。\r\n\r\n#r[委托 : 消灭敌方机器人]#k\r\n消灭对象 : #b#o8250008# 150#k\r\n\r\n怎么样？要接受吗？", 0, 2155000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(cm.getQuest(), "start=1");
                    cm.forceStartQuest();
                    cm.sendNormalTalk("谢谢。这些可怕的机器人忽然变多导致侦查进展困难……\r\n全部消灭后再回来我这吧。", 1, 2155000, false, true);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39162.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.updateInfoQuest(cm.getQuest(), "start=0");
            cm.sendNormalTalk("小软柿，感谢你消灭了#o8250008#。\r\n现在我的侦察可以顺利进行了……\r\n给，这是我给你的奖励。\r\n#i4001842# #b#t4001842##k\r\n\r\n以后也要请你多多关照。", 1, 2155000, false, true);
            cm.gainItem(4001842, 5)
        } else {
            if (status == a++) {
                cm.dispose()
            }
        }
    }
};