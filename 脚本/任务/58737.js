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
            cm.sendNormalTalk("嘻嘻嘻……你需要我帮忙吗？嘻嘻", 4, 9112008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("想要#b#t4034857##k的话\r\n你去搜集来20个#i4034859#  #b#t4034859##k，我就给你。\r\n你往右走，就能弄到。", 4, 9112008, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(58737, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58737.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("干得漂~亮。", 4, 9112008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("咯咯，需要的话再跟我说。", 4, 9112008, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58737);
                    cm.gainItem(4034859, -20);
                    cm.gainItem(4034857, 1);
                    cm.dispose()
                }
            }
        }
    }
};