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
            cm.askYesNo("大事不好了！请你帮帮忙！", 0, 1052006)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有个女人追着一群奇怪的家伙进了地铁！那些人看起来非常危险……请你去确认一下那个女人的平安吧！他们应该是往#b修理中的地铁#k去了。", 1, 1052006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这是能一次性将你送到我所在的地铁售票口的车票，请赶紧过来。", 1, 1052006, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(1600, "");
                        cm.fieldEffect_ScreenMsg("crossHunter/chapter/start1");
                        cm.gainItem(2030028, 1);
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