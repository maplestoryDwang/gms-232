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
            cm.sendNormalTalk_Bottom("#face1#要不要试着躺在床上？", 37, 9400921, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！", 37, 9400921, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(64593, "");
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
            if ("ok".equals(cm.getInfoQuest(64593))) {
                cm.sendNormalTalk_Bottom("#face1#怎么样？是不是很舒服？", 37, 9400921, false, true)
            } else {
                cm.sendNormalTalk_Bottom("#face1#要不要试着躺在床上？", 37, 9400921, true, true)
            }
        } else {
            if (status == a++) {
                if ("ok".equals(cm.getInfoQuest(64593))) {
                    cm.sendNormalTalk_Bottom("#b好像是……", 57, 0, true, true)
                } else {
                    cm.sendNormalTalk_Bottom("#face2#靠近床后点击就能躺下了。\r\n你就当我不在，舒舒服服地躺一下吧！", 37, 9400921, true, true);
                    cm.dispose()
                }
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#哈哈，既然躺下了，那就顺便休息一下吧？我想起来可以给你个小礼物！请等一下。", 37, 9400921, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(64593);
                        cm.updateInfoQuest(500767, "2=1;3=1;7=1;entrance=0;managerXpos=100;managerYpos=100");
                        cm.forceStartQuest(64594, "");
                        cm.dispose()
                    }
                }
            }
        }
    }
};