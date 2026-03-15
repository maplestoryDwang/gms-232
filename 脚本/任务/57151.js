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
            cm.sendNormalTalk_Bottom("#face0#剑斗。请你迅速返回枫叶山丘。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#详细情况等你回来之后再告诉你。我会等你的。　 樱乃姬", 37, 9130021, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("这是怎么回事？姬儿居然会催得这么紧急……看来我还是尽快返回枫叶山丘吧。", 57, 0)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57151, "");
                        cm.dispose();
                        cm.warp(807000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57151.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#总算是回来了啊。休息一下再来说话吧。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57151);
                cm.gainExp(6348411);
                cm.dispose()
            }
        }
    }
};