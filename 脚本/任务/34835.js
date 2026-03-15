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
            cm.sendNormalTalk_Bottom("你好，伊利温。我听说，你来自冒险岛之外的异次元？", 36, 1540451, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#有关我们的传闻？从哪听到的？", 37, 3001310, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哈哈，听说你帮了冒险岛不少忙。", 37, 1540451, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哇~伊利温！看来我们出名了！", 37, 3001310, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("#face0#我想跟你一起聊聊异次元的故事，如果有空，可以到圣地来一趟吗？\r\n#b（接受时将自动移动。）", 37, 1540451, 1)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(34835, "");
                                cm.sendNormalTalk_Bottom("#face0#那马上就能见面了。", 37, 1540451, false, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.setNumberForQuestInfo(34835, "map", cm.getMapId());
                                    cm.warp(130000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34835.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊，你来啦！我等你好久了。", 37, 1540451, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34835);
                cm.updateInfoQuest(34835, "exp=1");
                cm.gainExp(70646);
                cm.dispose()
            }
        }
    }
};