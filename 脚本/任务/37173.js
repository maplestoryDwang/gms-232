var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (!cm.isQuestActive(37169)) {
                cm.removeAll(4036503);
                cm.removeAll(4220196)
            }
            if (!cm.isQuestActive(37173)) {
                cm.removeAll(4036505);
                cm.removeAll(4220197)
            }
            if (!cm.isQuestActive(37174)) {
                cm.removeAll(4036504)
            }
            if (!cm.isQuestActive(37176)) {
                cm.removeAll(4036506);
                cm.removeAll(4036507);
                cm.removeAll(4220198);
                cm.removeAll(2630243)
            }
            cm.sendNext("要想唱好歌，首先要充分放松声带。")
        } else {
            if (status === a++) {
                cm.sendNext("喝下这附近的#b#o3501108##k和#b#o3501109##k拥有的#i4036505# #r#t4036505##k，不仅能解渴，对于放松声带也非常有效。")
            } else {
                if (status === a++) {
                    cm.askYesNo("我会像刚才一样给你一个小水瓶，请你用它灌满水交给我吧。")
                } else {
                    if (status === a++) {
                        cm.gainItem(4220197, 1);
                        cm.dispose();
                        cm.forceStartQuest()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("哈……真爽！", 1501010)
        } else {
            if (status === a++) {
                cm.sendNextS("有没有感觉喉咙像被疏通了一样？")
            } else {
                if (status === a++) {
                    cm.sendOk("那倒没有，不过这水真清爽啊。我还想再喝一瓶！", 1501010)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest();
                        cm.gainExp(10320);
                        cm.dispose()
                    }
                }
            }
        }
    }
};