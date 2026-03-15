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
            cm.sendNormalTalk_Bottom("这种怪物一样的人怎么会晕倒的啊？就连钢筋混凝土都能嚼着吃的人……", 37, 1530160, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这个，那个……好，好像是中暑了。最近的天气有些热。那我先走了。", 57, 1530161, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32819, "");
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
            cm.warp(330002323, 0);
            cm.dispose()
        }
    }
};