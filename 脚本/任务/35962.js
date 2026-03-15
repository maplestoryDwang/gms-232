var status = -1;
var selectionLog = [];

function start(e, d, c) {
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
            cm.sendNormalTalk("你的哥哥们去哪儿了？", 2, 1013405, false, true)
        } else {
            if (status === b++) {
                var a = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
                cm.askYesNo("哥哥们去找其他遗物了。地图上说是在#b危险的森林虫之地1#k。" + a + "，你也要一起去吗？", 4, 1013442)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("我想去给哥哥们看看！！", 4, 1013442, false, true)
                } else {
                    if (status === b++) {
                        cm.forceStartQuest(35962, "");
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0");
                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h1");
                        cm.OnStartNavigation(100051035, 0, "west00", 35962);
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
            cm.sendNormalTalk("奇怪……没看见哥哥们。应该就在这附近啊……。", 4, 1013442, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35962);
                cm.gainExp(713849);
                cm.dispose()
            }
        }
    }
};