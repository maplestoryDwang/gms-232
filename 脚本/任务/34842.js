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
            cm.sendNormalTalk_Bottom("#face0#伊利温、莫里奥，你们查到#b古代神之圣所#k的消息了吗？", 36, 3001311, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face4#我去新地区看过，可惜没什么收获。", 37, 3001354, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#冒险岛的#b人类#k也是一群无知的家伙。", 37, 3001311, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#不尽早找到圣所，难不成一直在这浪费时间吗？", 37, 3001311, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#嗯。那先见面再慢慢谈吧。", 37, 3001354, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline_Bottom("#face0#接下来立即前往#m940202045#。\r\n#b（接受时将自动移动。）", 37, 3001300, 1)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34842, "");
                                    cm.updateInfoQuest(34900, "targetMap=104000000;job1=1;job2=1;job3=1");
                                    cm.dispose();
                                    cm.warp(940202045, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34842.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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