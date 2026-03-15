var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getInfoQuest(34832) == "d=1") {
        action2(c, b, a)
    } else {
        action1(c, b, a)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34832.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("哇，这么快就完成任务了？太了不起了！", 37, 3001359, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34832);
                cm.updateInfoQuest(34832, "d=1;exp=1");
                cm.gainExp(52254);
                cm.dispose()
            }
        }
    }
}

function action1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#我听说有人看见过类似水晶门的东西，哪里能看到呢？", 36, 3001354, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("你是说那个奇怪的玻璃碎片吧？就在这附近。要一起去看看吗？\r\n#b（接受时将自动移动。）", 36, 9040000, 1)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(940202042, 0, false)
                }
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("最近这里的怪物频频伤人，搞得这边的遗迹挖掘工作都无法进行。", 36, 3001359, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("那个……你能帮忙消灭遗迹发掘地的怪物吗？", 36, 9040000, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("实在太感谢了！那赶快前往#m102040100#，找到闪光警示牌吧！#b#y2838##k完成任务后，返回这里即可！", 37, 3001359, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#通往#m102040100#的向导即将开始。", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34832, "");
                            cm.OnStartNavigation(102040100, 1, "1022111", 34832);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};