function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            var point = cm.getNumberFromQuestInfo(100244, "point");
            cm.askMenu_Bottom("#b#e<魔王皮洛克>#n#k\r\n你与魔王皮洛克对战归来了，辛苦了！\r\n#e获得分数：#n#b#e" + point + "分#n#k\r\n#b#L0# 领取奖励。#k #e（" + Math.floor(point / 10) + "个新复古币）#n#l\r\n#L1# #b再次挑战。#k#l\r\n#L2# #b返回新复古王国。#k#l", 132, 9062172, 3)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(f, e, d, c) {
    var a = cm.getNumberFromQuestInfo(100244, "point");
    if (status <= c++) {
        if (cm.getNowTimeString("yy/MM/dd").equals(cm.getStringFromQuestInfo(500727, "date"))) {
            cm.sendNormalTalk_Bottom("你今天已经领取过奖励了。明天再来继续战斗吧！", 36, 9062172, false, false, 3);
            cm.dispose()
        } else {
            cm.setStringForQuestInfo(500727, "date", cm.getNowTimeString("yy/MM/dd"));
            cm.askYesNo_Bottom("你如此勇敢地对战了#r魔王皮洛克#k，真了不起。\r\n要现在领取#b#e" + Math.floor(a / 10) + "个新复古币#n#k吗？\r\n#r#e  （※注意※#n#k #r#e每个世界一天只能获得1次#n#k奖励。）", 36, 9062172, 3)
        }
    } else {
        if (status === c++) {
            cm.新复古王国_获得点数(a * 10);
            cm.addNumberForQuestInfo(500739, "check", 5);
            var b = Math.max(cm.getNumberFromQuestInfo(100244, "record"), a);
            cm.setNumberForQuestInfo(100244, "record", b);
            cm.setNumberForQuestInfo(100244, "coinCount", Math.floor(b / 10));
            cm.playerMessage(5, "获得了" + Math.floor(a / 10) + "个新复古币。");
            cm.dispose();
            cm.warp(993110000, 36, false)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc("新复古_魔王皮洛克")
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.warp(993110000, 36, false);
        cm.dispose()
    }
};