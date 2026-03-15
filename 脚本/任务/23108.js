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
            cm.forceStartQuest(23108, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23108.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("欢迎你，#h0#。我是负责反抗者的对外任务的#p2151003#。在村子之外的地方见面，感觉好像有点别扭。", 0, 2151003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实我应该是飞侠教官，但你也知道，反抗者是没法培养出飞侠的，所以我就负责了这项工作。", 0, 2151003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("总之我负责的是对外任务，今后你和我见面的次数可能要比你的转职教官#p2151004#还要多。在黑色之翼被赶出这个地方之前，执行任务的时候一定要做好万全的准备。", 0, 2151003, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(23108);
                        cm.forceStartQuest(23129, "1");
                        cm.gainExp(1500);
                        cm.dispose()
                    }
                }
            }
        }
    }
};