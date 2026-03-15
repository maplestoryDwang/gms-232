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
            cm.askYesNo("哦……真是枚漂亮的戒指……虽然看上去很陈旧, 但是感觉有种特别的力量.嗯……给我看一看.我得仔细看一下才行.你想了解有关戒指的事情? 嗯, 好吧, 不过你也得帮我做点什么.你愿意吗? ", 0, 2030001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好吧, 交易成立！这枚戒指暂时由我保管.我想拜托你的事情很简单.我需要狼皮.但是这个时期它们非常凶恶, 搜集起来很不容易.如果你能帮我搜集#b100个#t4000051##k, 我就把戒指还给你, 并把我知道的情报告诉你.最好别让我等太久.越快拿来越好！", 0, 2030001, false, false)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(3020, "");
                    cm.gainItem(4031053, -1);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3020.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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