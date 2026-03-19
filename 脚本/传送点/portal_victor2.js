function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (cm.getNumberFromQuestCustomData(31578) > 0) {
        cm.warp(401051100, 1, false)
    } else {
        if (cm.isQuestActive(31517) && cm.haveItem(4033577)) {
            action2(c, b, a)
        } else {
            action1(c, b, a)
        }
    }
}

function action1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("往前走好像是工坊2层。突破起来比想象的容易啊？进去看看吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊！", 16, 0, true, true)
            } else {
                if (status === a++) {
                    if (cm.isQuestActive(31513)) {
                        cm.forceStartQuest(31577, "1")
                    }
                    cm.dispose();
                    cm.warp(401051004, 0, false)
                }
            }
        }
    }
}

function action2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("真的能利用歪曲的光之精髓进入吗？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好紧张……要是再掉下去怎么办……拼了，试着进入吧！", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(31578, "1");
                    cm.dispose();
                    cm.warp(401051100, 1, false)
                }
            }
        }
    }
};