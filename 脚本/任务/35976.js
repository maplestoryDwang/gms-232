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
            cm.sendNormalTalk("太好了，终于到了最后的阶段。现在就只剩下召唤仪式了！！\r\n好了，到#b危险的遗迹深处#k去吧。", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(35976, "");
                cm.OnStartNavigation(100051062, 0, "east00", 35976);
                cm.updateInfoQuest(35950, "10=h0;30=h1;11=h0;31=h1;12=h0;13=h0;14=h0;15=h0;16=h0;17=h0;18=h0;19=h0;00=h1;20=h0;01=h0;21=h1;02=h0;22=h1;03=h0;23=h1;04=h0;05=h0;06=h0;07=h0;27=h0;08=h0;28=h0;09=h0;29=h1");
                cm.gainItem(4001832, 20);
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
            cm.sendNormalTalk("这里，这里！", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们来到了#r被诅咒的魔道书#k上记载的地方。没想到看上去还挺像那么回事的嘛！", 2, 1013423, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(713849);
                    cm.forceCompleteQuest(35976);
                    cm.dispose()
                }
            }
        }
    }
};