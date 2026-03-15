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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22007.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("哦，#t4032451#拿来了吗？快把蛋给我吧。我来帮你把它孵化。", 0, 1013101, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("来，拿着。不知道这到底可以用来干什么……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 360 exp", 0, 1013101)
            } else {
                if (status === a++) {
                    cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/9/0"])
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(22007);
                        cm.gainItem(4032451, -1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};