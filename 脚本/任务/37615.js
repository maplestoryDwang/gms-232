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
            cm.sendNormalTalk_Bottom("#face0#别被他的花、花言巧语迷惑。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#他又改、改变了铁路线。必须先把铁路复原。", 36, 3004651, true, true, 1);
                cm.spawnMobLimit(8641055, 1, 1307, -380, 100)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#你去消、消灭A型战斗型T无人机，收集#b无人机配件#k。", 36, 3004651, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37615, "");
                        cm.dispose()
                    }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37615.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#这样就行了。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37615);
                cm.gainExp(17565641);
                cm.gainItem(4036635, -20);
                cm.dispose()
            }
        }
    }
};