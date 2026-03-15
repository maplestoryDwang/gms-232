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
            cm.sendNormalTalk_Bottom("现在已经把感冒病毒放到希拉老师的杯子里了，接下来轮到麦格纳斯老师了吧？那么该去教务室了。", 57, 1530503, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32828);
                cm.dispose();
                cm.warp(330001000, 0)
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