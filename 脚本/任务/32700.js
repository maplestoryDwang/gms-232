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
            cm.askYesNo_Bottom("我打算在这里准备封住次元通道。这段时间，#h0#你先暂时充当一下那个固执的异界学生吧。那么，你做好前往新世界的准备了吗？", 37, 1530020)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对了，为了不惊吓到那个世界的人，你要记住，不能随便使用魔法哦！\r\n\r\n#b（通过衣柜传送口前往另一个世界吧。）#k", 37, 1530020, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32709, "");
                    cm.forceStartQuest(32700, "");
                    cm.dispose()
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