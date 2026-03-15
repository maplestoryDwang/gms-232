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
            cm.sendNormalTalk("嗯……怎么办呢……。", 4, 1013442, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("没办法。看来只能再用海螺试试了。不过在这之前，必须先清理掉周围的怪物。", 2, 1013406)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("消灭200只#b危险的木森林虫#k吧。", 2, 1013406, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35963, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
            cm.sendNormalTalk("哇，" + a + "，你可真厉害……。", 4, 1013442, false, true)
        } else {
            if (status === b++) {
                cm.forceCompleteQuest(35963);
                cm.gainExp(1427698);
                cm.dispose()
            }
        }
    }
};