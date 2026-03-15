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
            cm.sendNormalTalk_Bottom("呼，我还以为会当面斥责我，不让我胡说八道呢。麦格纳斯老师出乎意料地有点傻乎乎的，所以还比较好唬弄，不过希拉老师可就没这么好对付了。先前往医务室吧。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(32814, "");
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
            cm.dispose();
            cm.warp(330002309, 0)
        }
    }
};