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
            cm.sendNormalTalk_Bottom("#face0#我来把铁、铁路改回去。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你去消、消灭周围的无人机。", 36, 3004651, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#消灭大概100个B型战斗型T无人机。", 36, 3004651, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37617, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37617.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#好像有、有点奇怪。铁路还在老位置。", 36, 3004651, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？为什么？", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#难道……？我们走吧。", 36, 3004651, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(993176011, 0, true)
                    }
                }
            }
        }
    }
};