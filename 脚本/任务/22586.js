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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22586.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你已经顺利获得#t4032472#啦。真是了不起，嘿嘿…………", 0, 1013203, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("那，我现在就将你移动到我所在的地方。我现在有新任务要交给你。\r\n\r\n#e<接受时，将会移动到#b#m922030000##k。>#n", 0, 1013203)
            } else {
                if (status === a++) {
                    cm.gainExp(52753);
                    cm.forceCompleteQuest(22586);
                    cm.gainItem(4032472, -1);
                    cm.dispose();
                    cm.warp(922030000, 0, false)
                }
            }
        }
    }
};