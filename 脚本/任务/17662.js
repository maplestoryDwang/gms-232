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
            cm.askYesNo("你做好去找克莱尔的准备了吗？", 0, 9390236)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("估测了一下那些家伙逃跑的方向，往#b#m865030200##k方向逃跑的可能性较大。我们往那边去看看吧。", 0, 9390236, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(17662, "");
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17662.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("好像就在这附近了。我感觉到杀气了。啊，那儿全是穿同样服装的家伙们。", 0, 9390263, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(17662);
                cm.dispose()
            }
        }
    }
};