var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.askAcceptDecline("你有没有听说过一个被称为#r绯红#k的地方？那是魔族遥远的故乡，遗失的土地……如果你感兴趣，就来魔法密林找我，咱们多聊聊？\r\n\r\n#r(接受任务时，将自动向魔法密林的魔法图书馆移动）#k", 0, 1032001)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我在魔法图书馆等你。", 0, 1032001, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(前往魔法密林，和汉斯见面。)", 16, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(31240, "");
                        cm.dispose();
                        cm.warp(101000003, 4, false)
                    }
                }
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