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
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32757.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    var a = cm.getPlayer().getPosition().x;
    var f = cm.getPlayer().getPosition().y;
    if (Math.abs(a + 153) > 100 || Math.abs(f + 296) > 100) {
        cm.getTopMsgFont("够不到, 必须再靠近些才行. ", 3, 20, 20, 0);
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("我拿到手帕啦。回去交给希纳斯就可以了吧？", 56, 0, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(32757);
                cm.gainItem(4034162, 1);
                cm.dispose()
            }
        }
    }
};