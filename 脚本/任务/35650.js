var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("#e《创世武器：跟随黑魔法师的痕迹》#n\r\n\r\n#b#L2#创世武器是？#k#l\r\n#b#L3#前往深夜联盟会场#k#l\r\n\r\n#L999#结束对话#l", 4, 9063152)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#e《创世武器是？》#n\r\n\r\n\r\n黑魔法师消失后留下的可疑武器。跟随他的痕迹，解开武器的封印，解开背后的秘密吧。\r\n\r\n#r※根据任务的进度，封印将会逐渐解开，可以加强武器或者获得新技能。#k\r\n#r※ 如果弄丢了创世武器，可通过其他任务初始化任务后重新开始。#k\r\n#r※ 如被发现使用非正常手段挑战，将被剥夺创世武器。#k", 4, 9063152, 0, 1);
        status = -1;
        cm.dispose()
    }
}

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.askYesNo("#e《前往深夜联盟会场》#n\r\n\r\n\r\n你想现在就前往深夜联盟会场吗？\r\n\r\n #r ※ 确认后将立刻前往任务地图。#k", 4, 9063152)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.setNumberForQuestInfo(35650, "rMap", cm.getMapId());
            cm.warp(993060090, 0)
        }
    }
}

function action分支999(d, c, b, a) {
    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35651.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};