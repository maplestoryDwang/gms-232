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
            cm.sendNormalTalk("凯内西斯，凯内西斯，能听到我说的话吗？", 4, 1531001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我就知道你还活着，\r\n我一直在追踪你的生命迹象，你一直都待在哪儿啊？", 4, 1531001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……说来就话长了，\r\n总之尤娜很担心你，赶紧回来吧。", 4, 1531001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("话说回来，许久未见，你像是变强了啊……现在应该差不多可以升级数据了。", 4, 1531001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("要是你愿意，我现在就帮你升级数据，怎么样？\r\n\r\n#b(如果答应就可以进行二转。)#k\r\n\r\n#b#i1142864# #t1142864#\r\n#b#i1353201# #t1353201#", 4, 1531001)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(22770);
                                cm.gainExp(8000);
                                cm.changeJob(14210);
                                cm.sendNormalTalk("恭喜，升级已完成，使用新技能的感觉怎么样？", 4, 1531001, false, false);
                                cm.gainItem(1353201, 1);
                                cm.gainItem(1142864, 1);
                                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22770.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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