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
            cm.forceStartQuest(24013, "");
            cm.forceCompleteQuest(24013);
            cm.updateInfoQuest(1073, "2300=10;2310=201;2311=201;2312=201");
            cm.forceStartQuest(24014, "");
            cm.forceCompleteQuest(24014);
            cm.gainItem(1142338, 1);
            cm.forceStartQuest(29954, "");
            cm.forceCompleteQuest(29954);
            cm.forceStartQuest(24015, "");
            cm.forceCompleteQuest(24015);
            cm.gainItem(1142339, 1);
            cm.forceStartQuest(29955, "");
            cm.forceCompleteQuest(29955);
            cm.forceStartQuest(24106, "");
            cm.forceCompleteQuest(24106);
            cm.gainItem(1190511, 1);
            cm.changeJob(2312);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24012.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};