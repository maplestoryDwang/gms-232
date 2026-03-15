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
            cm.forceStartQuest(23240, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23240.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#h0#，你来得正好。我负责管理反抗者的任务。\r\n既然你成为了反抗者，我们以后会经常见面的。\r\n", 0, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好了，要我把第一个任务告诉你吗？你已经成为了反抗者训练生，我不会给你太难的任务的。准备好了的话，请跟我说。", 0, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23240);
                    cm.forceStartQuest(23129, "1");
                    cm.gainExp(1500);
                    cm.dispose()
                }
            }
        }
    }
};