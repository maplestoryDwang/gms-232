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
            cm.sendNormalTalk_Bottom("#face0#好的，现在必须把保密资料抢过来。", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#做好战斗准备了吗？", 36, 3004652, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#太好了。请消灭掉B型搜索型T无人机，收集#bT-boy的研究笔记#k。", 36, 3004652, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(37610, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#啊，通往下一格的门打开啦！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#那些收集到的资料，我们边走边看吧。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(993176006, 0, true)
                }
            }
        }
    }
};