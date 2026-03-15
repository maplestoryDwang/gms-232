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
            cm.askYesNo("好，走吧。到#b#m100051062##k去。", 4, 1013440);
            cm.spawnMobLimit(2300266, 1, 123, 12, 1)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35950, "00=h1;10=h0;01=h0;20=h1;11=h0;02=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;08=h0;18=h1;09=h0;27=h0;19=h1;28=h0");
                cm.forceStartQuest(35974, "");
                cm.OnStartNavigation(100051062, 0, "west00", 35974);
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
            cm.sendNormalTalk("大家都到齐了吧？", 4, 1013440, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯～睡得好香，睡得好香。", 4, 1013441, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35974);
                    cm.gainExp(713849);
                    cm.dispose()
                }
            }
        }
    }
};