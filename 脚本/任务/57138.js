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
            cm.sendNormalTalk_Bottom("#face0#剑斗。请你看完这封信之后，立刻返回枫叶山丘。大家已经找到了樱乃姬的位置。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("什么！！！找到了……姬儿的位置？那还犹豫什么，快点返回枫叶山丘吧！", 57, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("怎么会呢？奉信玄大人之命来到此地，是在下的荣幸。", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(57138, "");
                        cm.OnStartNavigation(807000000, 1, "9130010", 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57138.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#总算是回来了啊。先来调整一下呼吸吧。累得一直在喘着粗气，就连肩膀都被带得上下摇摆了起来。", 37, 9130010, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57138);
                cm.gainExp(4425);
                cm.dispose()
            }
        }
    }
};