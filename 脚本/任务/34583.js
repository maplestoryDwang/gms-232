var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline_Bottom("#face0#好了，跟我来。我们必须到#b光明神殿4#k去。", 36, 3003501)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#在右边。", 36, 3003501, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34583, "");
                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                    cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h1;38=h0;58=h0;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                    cm.OnStartNavigation(450007230, 0, "", 0);
                    cm.getMap().spawnReactorIfNotExist(100011, 0, -600, -426, 0, "???_????0");
                    cm.dispose()
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#你来啦。", 36, 3003501, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34583);
                cm.dispose()
            }
        }
    }
};