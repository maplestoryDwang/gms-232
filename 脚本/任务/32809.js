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
            cm.sendNormalTalk_Bottom("你把感冒病毒都投给他们了吗？那么现在所剩下的就只有等待了。可以和我来一下走廊吗？咱们亲眼确认一下计划的结果。", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(32808, "");
                cm.dispose();
                cm.warp(330002312, 0)
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