var status = -1;
var selectionLog = [];
var hatItem

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
            cm.forceStartQuest(32248, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32248.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("拿来了吗？快拿来我看看。", 0, 1520001, false, true)
        } else {
            if (status === a++) {
                if (cm.haveItem(4033883)) {
                    hatItem = 4033883;
                } else if (cm.haveItem(4033882)) {
                    hatItem = 4033882;
                } else {
                    hatItem = 4033881;
                }

                cm.gainExp(3500);
                cm.forceCompleteQuest(32248);
                if (hatItem == 4033883) {
                    cm.sendNormalTalk("嗯，这是我丢的帽子，你还不赖。", 0, 1520001, true, false)
                } else {
                    cm.sendNormalTalk("嗯，虽然这不是我丢的帽子，不过戴上后正好能盖住，那……就这样吧。", 0, 1520001, true, false)
                }

                cm.forceStartQuest(32363, String(hatItem));
            } else {
                if (status === a++) {
                    cm.gainItem(hatItem, -1);
                    cm.dispose()
                }
            }
        }
    }
};