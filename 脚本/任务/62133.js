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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/62133.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("呼，真是场辛苦的旅程啊。你是我的救命恩人！\r\n我要给你一份谢礼，我要给你……", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊！在这里。可以在豫园使用的5个#i4310177:##t4310177#。这是我身上所有的财产了……请你收下吧。", 37, 9310535, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(62133);
                    cm.gainItem(4310177, 5);
                    cm.dispose()
                }
            }
        }
    }
};