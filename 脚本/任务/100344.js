var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askMenu("你好，#b#h0##k。\r\n#b塞尔提乌#k发生了一系列不寻常的事情。\r\n\r\n#L0#我要去执行#b#e精锐任务#n#k。#l\r\n#L2#当前无法执行任务。#l\r\n", 4, 3004216)
        } else {
            if (status === a++) {
                if (b == 2) {
                    cm.dispose();
                    return
                }
                var d = "\r\n这些是现在可以执行的#b#e精锐任务#n#k。\r\n你想先执行哪个任务呢？\r\n\r\n#L0##b精锐任务：海岸峭壁战斗#l";
                if (cm.isQuestFinished(37417)) {
                    d += "\r\n#L1##b精锐任务：塞尔提乌城墙#l"
                }
                if (cm.isQuestFinished(37512)) {
                    d += "\r\n#L2##b精锐任务：支援塞尔提乌#l"
                }
                if (cm.isQuestFinished(37520)) {
                    d += "\r\n#L2##b精锐任务：扫荡黑太阳士兵#l"
                }
                cm.askMenu(d, 4, 3004216)
            } else {
                if (status === a++) {
                    if (b == 0) {
                        cm.askYesNo("要前往前往#b海岸峭壁#k执行任务吗？", 4, 3004216)
                    } else {
                        if (b == 1) {
                            cm.askYesNo("要前往前往#b塞尔提乌城墙#k执行任务吗？", 4, 3004216)
                        } else {
                            if (b == 2) {
                                cm.askYesNo("要前往前往#b塞尔提乌广场#k执行任务吗？", 4, 3004216)
                            } else {
                                cm.askYesNo("要前往前往#b塞尔提乌东城门附近#k执行任务吗？", 4, 3004216)
                            }
                        }
                    }
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(100344, "rMap=" + cm.getMapId());
                        cm.dispose();
                        if (selectionLog[2] == 0) {
                            cm.warp(993173150, 0, false)
                        } else {
                            if (selectionLog[2] == 1) {
                                cm.warp(993173350, 0, false)
                            } else {
                                if (selectionLog[2] == 2) {
                                    cm.warp(993123000, 0, false)
                                } else {
                                    cm.warp(993173500, 0, false)
                                }
                            }
                        }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100344.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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