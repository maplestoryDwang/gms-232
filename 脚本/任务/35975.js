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
            cm.askYesNo("为了举行仪式，好像必须在#r火炉#k上点火。据说在#b危险的遗迹防御兵B#k身上可以找到材料。", 4, 1013440)
        } else {
            if (status === a++) {
                cm.forceStartQuest(35975, "");
                cm.sendNormalTalk("我们反正什么都做不了，不如就在这里为古代怪兽0号加油吧。", 4, 1013441, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("加，加油！#h0#！", 4, 1013442, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
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
            cm.sendNormalTalk("都收集到了吗？", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35975);
                cm.gainExp(1427698);
                cm.gainItem(4036534, -50);
                cm.dispose()
            }
        }
    }
};