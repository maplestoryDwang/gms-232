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
            cm.forceStartQuest(40409, "");
            cm.updateInfoQuest(40409, "");
            cm.gainItem(4033861, 1);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40409.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.gainExp(36600180);
            cm.forceCompleteQuest(40409);
            cm.forceCompleteQuest(40944);
            cm.sendNormalTalk("#b(在苍白的#p2450000#嘴边倒入了一些药。#p2450000#的表情没有变化，还是那么平静。)", 32, 2450036, false, true);
            cm.gainItem(4033861, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face10#……如果我继续留在影子村的话，会变成这样吗？", 44, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face10#……", 44, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(41912, "0");
                        cm.dispose()
                    }
                }
            }
        }
    }
};