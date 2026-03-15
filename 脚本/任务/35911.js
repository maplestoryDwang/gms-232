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
            cm.askAcceptDecline_Bottom("#face2#都准备好了。现在好像可以举行仪式了。\r\n请你去告诉村长,说一切都已经准备就绪。", 36, 1013350, 1)
        } else {
            if (status === a++) {
                cm.forceStartQuest(35911, "");
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35911.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#小孩那边说已经准备好了。", 36, 1013358, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#呵呵……多亏了你,准备工作比预计的更早完成。\r\n现在我要把大家叫出来,举行祭典仪式。", 36, 1013352, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#地点就在村子旁边的石臼森林。\r\n我会带着村民们一起过去。你也跟着一起去吧。", 36, 1013352, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##b(我都已经等不及了。\r\n在他们之前,先去看看那个石臼吧。)#k\r\n\r\n #r ※ 自动移动到任务地图。#k", 36, 1013358, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(910090307, 0, false)
                        }
                    }
                }
            }
        }
    }
};