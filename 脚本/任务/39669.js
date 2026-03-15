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
            cm.sendNormalTalk_Bottom("#face0#阿黛尔，刚才我和同僚联系上了。\r\n幸好他们知道贝尔达的坐标。", 36, 3001500, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#该地虽然失去了力量，但形体仍在。\r\n这可能会是场危险的旅程……你要去贝尔达吗？\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001500, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(据说在贝尔达曾建有高等翼人的基地。\r\n……看到高等翼人的建筑物的话，我说不定会想起什么。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(39669, "rMap=" + cm.getMapId());
                        cm.dispose();
                        cm.warp(993162068, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39669.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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