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
            cm.sendNormalTalk_Bottom("好了，既然也已经把感冒病毒放到麦格纳斯老师的水瓶里了，那么现在只要等着观察情况就行了。在老师们回来之前赶快离开这儿吧。", 57, 1530504, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32808);
                cm.forceCompleteQuest(32829);
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
            cm.sendNormalTalk_Bottom("这就是感冒病毒？你还真搜集不少呢。噗噗……", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃啊！！！喂，拿一边去！难闻死了。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32807);
                    cm.gainItem(4034150, -50);
                    cm.dispose()
                }
            }
        }
    }
};