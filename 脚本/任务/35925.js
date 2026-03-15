var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.askAcceptDecline_Bottom("#face1#这，这里也被怪物们挡住了。\r\n如果能消灭掉#b50个#k#r#o2300208##k，应该就能把路打通……", 1013350)
        } else {
            if (status === a++) {
                cm.sendNext_Bottom("#face0#明白了。你在这里等一下。我马上就回来。", 1013358)
            } else {
                if (status == a++) {
                    cm.forceStartQuest();
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#路打通了,勇士。\r\n我这就把你带到传来声音的地方去。好了,请跟我来。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35925);
                cm.gainExp(14215);
                cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h0;09=h0;19=h0");
                cm.updateInfoQuest(35948, "00=h0;10=h0;11=h1;02=h1;21=h0;12=h0;22=h1;13=h0;23=h1;14=h0;24=h0;15=h0;06=h0;25=h0;07=h0;16=h0;26=h1;08=h0;17=h1;09=h0;19=h0");
                cm.setPartner(1, 1013350, 80002700, 0);
                cm.OnStartNavigation(100051043, 1, "1013317", 35926);
                cm.dispose()
            }
        }
    }
};