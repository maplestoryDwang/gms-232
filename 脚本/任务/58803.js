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
            cm.sendNormalTalk_Bottom("#face0#现在我就送你去竹野子所在的地方。", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#记住，千万小心不要碰上木野子。", 37, 9111002, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(58803, "");
                    cm.dispose();
                    cm.warp(800021200, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58803.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你顺利给她传话了吗？", 37, 9111004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，说好了在妖怪森林入口见面。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#妖怪森林入口。终于要向她告白了，好紧张。", 37, 9111004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，不对。她说那边太远，改成在四岔路见。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……好！竹野子肯定会接受我的。我得先过去等她。", 37, 9111004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("呃……等等？他有没听清楚我的话哦？？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(58803);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};