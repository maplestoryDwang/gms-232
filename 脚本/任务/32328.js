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
            cm.forceStartQuest(32328, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32328.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("龙神的哥哥？我听说龙神的年龄比尤塔还要小……难道是我找错人了？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，我听到了大鸟振翅的声音！而且声音正在越来越近！", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32366, "1");
                    cm.forceCompleteQuest(32328);
                    cm.gainExp(200000);
                    cm.sendNormalTalk("那是，#b龙#k?!", 16, 0, true, false);
                    cm.dispose()
                }
            }
        }
    }
};