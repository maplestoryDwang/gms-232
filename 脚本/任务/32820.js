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
            cm.sendNormalTalk_Bottom("已经确定把医务室的门锁上了吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯，钥匙也已经被我扔到后院了，肯定找不到。可是像这样把他们两个人关在医务室，还把电停掉，两个人的关系真的会好起来吗？", 57, 1530073, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("要是不放心的话就看看医务室的监控录像呗。虽然说因为停电无法看清画面，但声音还是能听到的。", 37, 1530070, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32820, "");
                        cm.dispose();
                        cm.warp(330002310, 0)
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
            cm.warp(330002323, 0);
            cm.dispose()
        }
    }
};