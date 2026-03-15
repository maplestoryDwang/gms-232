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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.dispose();
            cm.warp(940203203, 0)
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
            cm.sendNormalTalk_Bottom("#face0#找到了，在那里。", 37, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#古鲁格那家伙，怎么偏偏栽在那些下三滥的手上了？", 37, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.dispose();
                    cm.warp(940203204, 0)
                }
            }
        }
    }
};