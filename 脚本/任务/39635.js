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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(从一开始就能得到帮助的话，自然求之不得。\r\n去弓箭手培训中心见见赫丽娜吧。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
        } else {
            if (status === a++) {
                cm.OnStartNavigation(100000201, 1, "1012100", 39635);
                cm.forceStartQuest(39635, "");
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39635.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("啊，你是来自其他次元的冒险家吧。\r\n阿黛尔……狼牙和我提过你。", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(39635);
                cm.dispose()
            }
        }
    }
};