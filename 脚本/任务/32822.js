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
            cm.sendNormalTalk_Bottom("我是秃鹫，我是秃鹫，请报告情况！", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……我在喷泉公园，这里非常适合告白。最好是让两位老师来这儿。", 57, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("做得好，#h0#队员！那么我们这就将目标人物送往喷泉公园。全体队员，马上出发。下一个战斗地点是喷泉公园！", 37, 1530100, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(330002311, 0)
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