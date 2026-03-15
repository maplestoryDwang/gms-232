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
            cm.askYesNo("好了，现在去找大哥吧。大哥要找的遗物在#b#m100051040##k附近。", 4, 1013441)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h1");
                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0");
                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;27=h1");
                cm.updateInfoQuest(35950, "00=h1;01=h0;02=h0;03=h0;04=h0;05=h0;06=h0;07=h0;08=h0;27=h1;28=h1");
                cm.forceStartQuest(35966, "");
                cm.sendNormalTalk("对了，还有……。", 4, 1013441, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们来捉迷藏吧！最后面的那个来抓人！！", 4, 1013441, true, true)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(100051040, 0, "west00", 35966);
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
            cm.sendNormalTalk("怎么回事？梅尔奇哥哥去哪儿了？", 4, 1013441, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35966);
                cm.gainExp(713849);
                cm.dispose()
            }
        }
    }
};