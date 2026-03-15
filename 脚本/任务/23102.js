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
            cm.forceStartQuest(23102, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23102.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("没想到我们又在这里见面了，恭喜你成为反抗者，从一开始你的特殊能力就让人瞩目，我相信#p2151003#肯定也是在你身上感受到了什么，才会将你送来了这里。", 0, 2151010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("既然你已经成为了反抗者，就得认真修炼，好好升级了吧？别担心，我会慢慢将反抗者该具备的素质一点点教给你的。", 0, 2151010, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(23102);
                    cm.forceStartQuest(23128, "1");
                    cm.dispose()
                }
            }
        }
    }
};